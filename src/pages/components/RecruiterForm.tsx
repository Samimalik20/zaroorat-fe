import {
  Stack,
  TextInput,
  Select,
  Button,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";
import { Salesman } from "../../http/Api";

function RecruiterForm({
  onClose,
  recruiter,
  district,
}: {
  onClose: () => void;
  recruiter?: Salesman;
  district?: string;
}) {
  const form = useForm({
    initialValues: {
      name: recruiter?.user?.fullName || "",
      email: recruiter?.user?.email || "",
      city: district || recruiter?.city,
      phone: recruiter?.phone || "",
      gender: recruiter?.gender || "",
    },
  });
  console.log(district);
  const queryClient = useQueryClient();

  const { mutate: createRecruiter, isPending: loading } = useMutation({
    mutationFn: http.salesman.salesmanControllerCreate,
  });
  const { mutate: updateofficer, isPending: loadingUpdate } = useMutation({
    mutationFn: ({ recruiterId, data }: { recruiterId: string; data: any }) =>
      http.salesman.salesmanControllerUpdate(recruiterId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["salesmans"] });
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
            queryClient.invalidateQueries({ queryKey: ["salesmans"] });
          }
        },
      });
    }
  }

  return (
    <form onSubmit={form.onSubmit(handleRecruiterSubmit)}>
      <Stack gap="md">
        <TextInput
          label="Full Name"
          placeholder="Ahmed Khan"
          withAsterisk
          required
          disabled={recruiter ? true : false}
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          placeholder="ahmed.khan@punjabpolice.gov.pk"
          withAsterisk
          required
          disabled={recruiter ? true : false}
          {...form.getInputProps("email")}
        />
        <Select
          label="City"
          placeholder="Select City"
          withAsterisk
          value={district}
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
          label="Phone Number"
          placeholder="03021234567"
          withAsterisk
          required
          {...form.getInputProps("phone")}
        />
       

        <Select
          label="Gender"
          data={["male", "female"]}
          withAsterisk
          placeholder="Add Gender"
          required
          {...form.getInputProps("gender")}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit" loading={loading || loadingUpdate}>
            {recruiter ? "Update Salesman" : "Add Salesman"}
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
export default RecruiterForm;
