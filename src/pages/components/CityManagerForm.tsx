import { useForm } from "@mantine/form";
import {
  TextInput,
  Select,
  Button,
  Box,
  Group,
  Stack,
  NumberInput,
} from "@mantine/core";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import http from "../../http";
import { CityOfficer } from "../../http/Api";

export function CityManagerForm({
  onClose,
  officer,
}: {
  onClose: () => void;
  officer?: CityOfficer;
}) {
  const form = useForm({
    initialValues: {
      name: officer?.user.fullName || "",
      email: officer?.user.email || "",
      phone: officer?.phone || "",
      city: officer?.city || "",
    },

    validate: {
      name: (v) => (v.length < 3 ? "Name is too short" : null),
      email: (v) => (/^\S+@\S+$/.test(v) ? null : "Invalid email"),
    },
  });

  const queryClient = useQueryClient();

  const { mutate: createOfficer, isPending: loading } = useMutation({
    mutationFn: http.cityOfficers.cityOfficerControllerCreate,
  });
  const { mutate: updateofficer, isPending: loadingUpdate } = useMutation({
    mutationFn: ({ officerId, data }: { officerId: string; data: any }) =>
      http.cityOfficers.cityOfficerControllerUpdate(officerId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["managers"] });
      onClose();
    },
  });

  async function handleJobSubmit(values: any) {
    if (officer) {
      updateofficer({ officerId: officer._id, data: values });
    } else {
      createOfficer(values, {
        onSuccess: async (data) => {
          if (data.data) {
            onClose();
            form.reset();
            queryClient.invalidateQueries({ queryKey: ["managers"] });
          }
        },
      });
    }
  }

  return (
    <Box maw={600} mx="auto">
      <form onSubmit={form.onSubmit(handleJobSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Full Name"
            placeholder="Enter full name"
            withAsterisk
            {...form.getInputProps("name")}
            disabled={officer ? true : false}
          />
          <TextInput
            label="Email"
            placeholder="example@domain.com"
            withAsterisk
            {...form.getInputProps("email")}
            disabled={officer ? true : false}
          />
          <NumberInput
            label="Phone Number"
            placeholder="e.g. 03001234567"
            withAsterisk
            maxLength={11}
            {...form.getInputProps("phone")}
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

          <Group justify="flex-end" mt="md">
            <Button type="submit" loading={loading || loadingUpdate}>
              {officer ? "Update" : "Create Manager"}
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
}
