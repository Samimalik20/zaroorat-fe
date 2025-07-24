import {
  Box,
  FileButton,
  Group,
  Textarea,
  ActionIcon,
  Stack,
  TextInput,
  Button,
  Card,
  Modal,
  Select,
  ScrollArea,
} from "@mantine/core";
import { useRef, useState } from "react";
import AudioRecorder from "./audioRecording";
import { useForm } from "@mantine/form";
import IconImage from "../../assets/icons/IconImage";
import IconX from "../../assets/icons/IconX";
import { DateInput, TimeInput } from "@mantine/dates";
import { StandaloneSearchBox, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { useDisclosure } from "@mantine/hooks";
import SignUpForm from "./SignUpForm";
import { notifications } from "@mantine/notifications";

// Props type
interface BookingFormProps {
  isHeader?: boolean;
  type: string;
}

interface FormValues {
  description: string;
  date: string;
  time: string;
  contact: string;
  address: string;
  city: string;
}

export default function BookingForm({ isHeader, type }: BookingFormProps) {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [recordingURL, setRecordingURL] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingLocation, setLoadingLocation] = useState(false);

  const inputRef = useRef<google.maps.places.SearchBox | null>(null);
  const resetRef = useRef<() => void>(null);
  const { user } = useAuth();
  const [opened, { open, close }] = useDisclosure();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCFJNI_HZVOLqWYmVtOD95l4KEYNnQp524",
    libraries: ["places"],
  });

  const form = useForm<FormValues>({
    initialValues: {
      description: "",
      date: "",
      time: "",
      contact: "",
      address: "",
      city: "",
    },
  });

  const handlePlacesChanged = () => {
    const places = inputRef.current?.getPlaces();
    if (places && places.length > 0) {
      const place = places[0];
      const location = place.geometry?.location;

      if (location) {
        form.setFieldValue("address", place.formatted_address || "");
      }
    }
  };

  const handleFileChange = (files: File[] | FileList | null) => {
    if (!files) return;

    const fileArray = Array.from(files);
    setImages(fileArray);

    const previewUrls = fileArray.map((file) => URL.createObjectURL(file));
    setPreviews(previewUrls);
    resetRef.current?.();
  };

  const onRemoveImage = (indexToRemove: number) => {
    URL.revokeObjectURL(previews[indexToRemove]);
    setImages((prev) => prev.filter((_, i) => i !== indexToRemove));
    setPreviews((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (!user) {
      open();
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("description", form.values.description || "");
    formData.append("date", form.values.date || "");
    formData.append("time", form.values.time || "");
    formData.append("address", form.values.address || "");
    formData.append("contact", form.values.contact || "");
    formData.append("city", form.values.city || "");
    formData.append("type", type);

    if (user?._id) {
      formData.append("user", user._id);
    }

    if (images.length > 0) {
      images.forEach((file) => {
        formData.append("images", file);
      });
    }

    if (recordingURL) {
      try {
        const audioBlob = await fetch(recordingURL).then((res) => res.blob());
        formData.append("audio", audioBlob, "recording.webm");
      } catch (error) {
        console.error("Failed to fetch audio blob", error);
      }
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}bookings`,
        formData
      );

      if (response.data) {
        form.reset();
        setImages([]);
        setPreviews([]);
        setRecordingURL("");
        notifications.show({
          title: "Success",
          message: "Booking submitted successfully.You will be contacted shortly!",
          color: "green",
        });
      }
    } catch (error: any) {
      notifications.show({
        title: "Booking Failed",
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong.",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const geocoder = new window.google.maps.Geocoder();
        const latLng = { lat: latitude, lng: longitude };

        geocoder.geocode({ location: latLng }, (results, status) => {
          if (status === "OK" && results && results.length > 0) {
            const address = results[0].formatted_address;

            form.setFieldValue("address", address);
          } else {
            alert("Unable to retrieve address.");
          }
          setLoadingLocation(false);
        });
      },
      (error) => {
        alert("Failed to get your location.");
        console.error(error);
        setLoadingLocation(false);
      }
    );
  };

  return (
    <>
      <ScrollArea
        offsetScrollbars
        type="auto" // or "scroll" to always show scrollbars
        scrollbarSize={4}
        style={{
          maxHeight: isHeader ? 500 : 470,
          overflowX: "auto",
          overflowY: "auto", // Enable vertical scrolling
          paddingTop: 6,
        }}
      >
        <Box p="xs" style={{ border: "1px solid #ccc", borderRadius: 8 }}>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="xs">
              <Group grow>
                <DateInput
                  label="Date"
                  placeholder="30 May, 2025"
                  size={isHeader ? "sm" : "md"}
                  {...form.getInputProps("date")}
                />
                <TimeInput
                  label="Time"
                  placeholder="1:00 PM"
                  size={isHeader ? "sm" : "md"}
                  {...form.getInputProps("time")}
                />
              </Group>

              {isLoaded && (
                <>
                  <StandaloneSearchBox
                    onLoad={(ref) => (inputRef.current = ref)}
                    onPlacesChanged={handlePlacesChanged}
                  >
                    <TextInput
                      size={isHeader ? "sm" : "md"}
                      label="Address"
                      placeholder="Search Address"
                      {...form.getInputProps("address")}
                    />
                  </StandaloneSearchBox>
                  <Button
                    variant="light"
                    onClick={handleUseCurrentLocation}
                    loading={loadingLocation}
                    size={isHeader ? "xs" : "sm"}
                  >
                    Use Current Location
                  </Button>
                </>
              )}

              <Select
                label="City"
                placeholder="Multan"
                size={isHeader ? "sm" : "md"}
                data={[
                  "Multan",
                  "Lahore",
                  "Karachi",
                  "Islamabad",
                  "Faisalabad",
                  "Rawalpindi",
                ]}
                {...form.getInputProps("city")}
              />
              <TextInput
                label="Contact"
                placeholder="03001234567"
                type="tel"
                size={isHeader ? "sm" : "md"}
                {...form.getInputProps("contact")}
              />

              <Textarea
                size={isHeader ? "sm" : "md"}
                placeholder="Briefly explain the issue"
                minRows={2}
                autosize
                {...form.getInputProps("description")}
                styles={{
                  input: { border: "1px solid #ccc", borderRadius: 8 },
                }}
              />

              <Group gap="xs" justify="space-between">
                <FileButton
                  onChange={handleFileChange}
                  accept="image/*"
                  multiple
                  resetRef={resetRef}
                >
                  {(props) => (
                    <Button
                      variant="subtle"
                      size={isHeader ? "xs" : "sm"}
                      {...props}
                    >
                      Upload Image
                    </Button>
                  )}
                </FileButton>

                <AudioRecorder
                  onRecordingComplete={(url: string) => setRecordingURL(url)}
                />
              </Group>

              {/* ✅ Image Previews with ScrollArea */}
              {previews.length > 0 && (
                <Group gap={8} wrap="nowrap">
                  {previews.map((src, index) => (
                    <Card
                      key={index}
                      withBorder
                      pos="relative"
                      style={{ width: 75, height: 75 }}
                    >
                      <ActionIcon
                        variant="subtle"
                        size="xs"
                        pos="absolute"
                        top={1}
                        right={1}
                        onClick={() => onRemoveImage(index)}
                      >
                        <IconX color="red" size={12} />
                      </ActionIcon>
                      <img
                        src={src}
                        alt={`preview-${index}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: 8,
                        }}
                      />
                    </Card>
                  ))}
                </Group>
              )}

              {/* Audio Preview */}
              {recordingURL && (
                <Card withBorder padding="xs" pos="relative">
                  <ActionIcon
                    variant="subtle"
                    size="xs"
                    pos="absolute"
                    top={4}
                    right={4}
                    onClick={() => {
                      URL.revokeObjectURL(recordingURL);
                      setRecordingURL("");
                    }}
                  >
                    <IconX color="red" size={12} />
                  </ActionIcon>
                  <audio
                    controls
                    src={recordingURL}
                    style={{ width: "100%" }}
                  />
                </Card>
              )}

              <Button
                type="submit"
                loading={loading}
                size={isHeader ? "sm" : "md"}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </ScrollArea>

      <Modal opened={opened} onClose={close}>
        <SignUpForm close={close} />
      </Modal>
    </>
  );
}
