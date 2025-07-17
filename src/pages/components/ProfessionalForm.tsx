import {
  Stack,
  TextInput,
  Select,
  Button,
  Group,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";
import { Professional } from "../../http/Api";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
  Marker,
} from "@react-google-maps/api";
import { useCallback, useRef, useState } from "react";

function ProfessionalForm({
  onClose,
  recruiter,
  district,
  isProfessional,
}: {
  onClose: () => void;
  recruiter?: Professional;
  district?: string;
  isProfessional: boolean;
}) {
  const center = {
    lat: recruiter?.coordinates?.latitude || -3.745,
    lng: recruiter?.coordinates?.longitude || -38.523,
  };

  const form = useForm({
    initialValues: {
      name: recruiter?.name || "",
      city: district || recruiter?.city,
      phone: recruiter?.phone || "",
      whatsappNumber: recruiter?.phone || "",
      profession: recruiter?.profession || "",
      address: recruiter?.address || "",
      experienceYears: recruiter?.experienceYears || 0,
      latitude: recruiter?.coordinates?.latitude || 0,
      longitude: recruiter?.coordinates?.longitude || 0,
    },
  });

  const queryClient = useQueryClient();

  const { mutate: createRecruiter, isPending: loading } = useMutation({
    mutationFn: http.professionals.professionalControllerCreate,
  });
  const { mutate: updateofficer, isPending: loadingUpdate } = useMutation({
    mutationFn: ({ recruiterId, data }: { recruiterId: string; data: any }) =>
      http.professionals.professionalControllerUpdate(recruiterId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["professionals"] });
      onClose();
    },
  });

  async function handleRecruiterSubmit(values: any) {
    if (recruiter) {
      updateofficer({ recruiterId: recruiter._id, data: values });
    } else {
      createRecruiter(values, {
        onSuccess: async (data) => {
          if (data.data) {
            onClose();
            form.reset();
            queryClient.invalidateQueries({ queryKey: ["professionals"] });
          }
        },
      });
    }
  }

  const inputRef = useRef<google.maps.places.SearchBox | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [mapCenter, setMapCenter] = useState(center);
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCFJNI_HZVOLqWYmVtOD95l4KEYNnQp524",
    libraries: ["places"],
  });

  const onLoad = useCallback(
    function callback(map: google.maps.Map) {
      const bounds = new window.google.maps.LatLngBounds(mapCenter);
      map.fitBounds(bounds);
      setMap(map);
    },
    [mapCenter]
  );

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  const handlePlacesChanged = () => {
    const places = inputRef.current?.getPlaces();
    if (places && places.length > 0) {
      const place = places[0];
      const location = place.geometry?.location;

      if (location) {
        const newCenter = {
          lat: location.lat(),
          lng: location.lng(),
        };
        setMapCenter(newCenter);
        setSelectedPlace(place);
        form.setFieldValue("address", place.formatted_address || "");
        form.setFieldValue("latitude", location.lat());
        form.setFieldValue("longitude", location.lng());

        if (map) {
          map.setCenter(newCenter);
          map.setZoom(15);
        }
      }
    }
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude, "addrss");

          setMapCenter({ lat: latitude, lng: longitude });
          form.setFieldValue("latitude", latitude);
          form.setFieldValue("longitude", longitude);

          if (map) {
            map.setCenter({ lat: latitude, lng: longitude });
            map.setZoom(15);
          }

          const geocoder = new window.google.maps.Geocoder();
          const latlng = { lat: latitude, lng: longitude };

          geocoder.geocode({ location: latlng }, (results, status) => {
            if (status === "OK" && results && results[0]) {
              const address = results[0].formatted_address;
              form.setFieldValue("address", address);
            } else {
              console.error("Geocoder failed due to:", status);
            }
          });
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleRecruiterSubmit)}>
      <Stack gap="md">
        <TextInput
          label="Full Name"
          placeholder="Ahmed Khan"
          withAsterisk
          required
          {...form.getInputProps("name")}
        />

        <Select
          label="City"
          placeholder="Select City"
          withAsterisk
          searchable
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
        <Select
          label="Profession"
          placeholder="Plumber"
          withAsterisk
          required
          data={[
            "Plumber",
            "Electrician",
            "Mechanic",
            "Carpenter",
            "AC Technician",
            "Painter",
            "Cleaner",
          ]}
          {...form.getInputProps("profession")}
        />
        <TextInput
          label="Phone Number"
          placeholder="03021234567"
          withAsterisk
          required
          {...form.getInputProps("phone")}
        />

        <TextInput
          label="Whatsapp Number"
          placeholder="03021234567"
          withAsterisk
          required
          {...form.getInputProps("whatsappNumber")}
        />

        <NumberInput
          label="Experience (years)"
          placeholder="e.g 2"
          withAsterisk
          required
          maxLength={1}
          {...form.getInputProps("experienceYears")}
        />

        {isLoaded && (
          <StandaloneSearchBox
            onLoad={(ref: google.maps.places.SearchBox) => {
              inputRef.current = ref;
            }}
            onPlacesChanged={handlePlacesChanged}
          >
            <TextInput
              label="Address"
              placeholder="Search Address"
              {...form.getInputProps("address")}
            />
          </StandaloneSearchBox>
        )}

        <Button
          variant="light"
          size="xs"
          mt="xs"
          onClick={handleGetCurrentLocation}
        >
          Use Current Location
        </Button>

        {isLoaded && (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "200px" }}
            center={mapCenter}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {(selectedPlace?.geometry?.location || form.values.latitude) && (
              <Marker
                position={{
                  lat:
                    selectedPlace?.geometry?.location?.lat() ??
                    form.values.latitude,
                  lng:
                    selectedPlace?.geometry?.location?.lng() ??
                    form.values.longitude,
                }}
              />
            )}
          </GoogleMap>
        )}

        <Group justify="flex-end" mt="md">
          <Button
            type="submit"
            loading={loading || loadingUpdate}
            w={isProfessional ? "100%" : undefined}
          >
            {recruiter
              ? "Update Professional"
              : isProfessional
              ? "Register as Professional"
              : "Add Professional"}
          </Button>
        </Group>
      </Stack>
    </form>
  );
}

export default ProfessionalForm;
