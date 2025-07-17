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

    const previewUrls = fileArray.map((file) =>
      URL.createObjectURL(file)
    );
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
    formData.append("city", "Multan");
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
          message: "Booking submitted successfully.",
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
      <Box p="xs" style={{ border: "1px solid #ccc", borderRadius: 8 }}>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <DateInput
              label="Preferred Date"
              placeholder="e.g. 30 May, 2025"
              {...form.getInputProps("date")}
              size={isHeader ? "sm" : "md"}
            />
            <TimeInput
              label="Preferred Time"
              placeholder="e.g. 1:00 PM"
              size={isHeader ? "sm" : "md"}
              {...form.getInputProps("time")}
            />

            {isLoaded && (
              <>
                <StandaloneSearchBox
                  onLoad={(ref) => {
                    inputRef.current = ref;
                  }}
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

            <TextInput
              label="Contact Number"
              placeholder="e.g. 03001234567"
              type="tel"
              size={isHeader ? "sm" : "md"}
              {...form.getInputProps("contact")}
            />

            {/* Description and attachments */}
            <Stack
              gap={0}
              p={0}
              style={{ border: "1px solid #ccc", borderRadius: 8 }}
            >
              <Textarea
                size={isHeader ? "sm" : "md"}
                placeholder="Briefly explain the issue"
                minRows={2}
                autosize
                {...form.getInputProps("description")}
                styles={{
                  input: { border: "0px" },
                }}
              />
              <Group justify="flex-end">
                <Group gap={4}>
                  <FileButton
                    onChange={handleFileChange}
                    accept="image/*"
                    multiple
                    resetRef={resetRef}
                  >
                    {(props) => (
                      <ActionIcon variant="subtle" {...props}>
                        <IconImage />
                      </ActionIcon>
                    )}
                  </FileButton>

                  <AudioRecorder
                    onRecordingComplete={(url: string) => setRecordingURL(url)}
                  />
                </Group>
              </Group>
            </Stack>

            {/* Image Previews */}
            {previews.length > 0 && (
              <Box>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  {previews.map((src, index) => (
                    <Card key={index} withBorder pos={"relative"}>
                      <ActionIcon
                        variant="subtle"
                        size={"xs"}
                        pos={"absolute"}
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
                          width: 50,
                          height: 50,
                          objectFit: "cover",
                          borderRadius: 8,
                        }}
                      />
                    </Card>
                  ))}
                </div>
              </Box>
            )}

            {/* Audio preview */}
            {recordingURL && (
              <Card withBorder mt="sm" pos="relative" padding="sm">
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
                <audio controls src={recordingURL} style={{ width: "100%" }} />
              </Card>
            )}

            <Button type="submit" loading={loading}>
              Submit
            </Button>
          </Stack>
        </form>
      </Box>

      <Modal opened={opened} onClose={close}>
        <SignUpForm close={close} />
      </Modal>
    </>
  );
}
