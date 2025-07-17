import {
  TextInput,
  Textarea,
  NumberInput,
  Button,
  Stack,
  Group,
  FileInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

export default function ApplicationForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      fullName: "",
      fatherName: "",
      cnic: "",
      passportNumber: "",
      phone: "",
      email: "",
      jobType: "",
      experienceYears: 0,
      availabilityDate: null,
      resume: null,
      notes: "",
    },

    validate: {
      fullName: (value) => (value.length < 3 ? "Enter full name" : null),
      phone: (value) =>
        /^\d{10,15}$/.test(value) ? null : "Enter valid phone number",
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
      passportNumber: (value) =>
        value.length < 5 ? "Invalid passport number" : null,
      jobType: (value) => (!value ? "Select a job type" : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    // Simulate submission (replace with actual API call)
    setTimeout(() => {
      console.log("Submitted:", values);
      setLoading(false);
      form.reset();
      alert("Application submitted successfully!");
    }, 1500);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          label="Full Name"
          placeholder="e.g. Ali Khan"
          {...form.getInputProps("fullName")}
        />
        <TextInput
          label="Father's Name"
          placeholder="e.g. Ghulam Rasool"
          {...form.getInputProps("fatherName")}
        />
        <TextInput
          label="Email Address"
          placeholder="e.g. ali@example.com"
          {...form.getInputProps("email")}
        />
        <TextInput
          label="Phone Number"
          placeholder="e.g. 03001234567"
          {...form.getInputProps("phone")}
        />

        <TextInput
          label="CNIC Number"
          placeholder="e.g. 35202-1234567-8"
          {...form.getInputProps("cnic")}
        />
        <TextInput
          label="Address"
          placeholder="e.g. Street 12, Gulshan-e-Iqbal, Karachi"
          {...form.getInputProps("passportNumber")}
        />

        <NumberInput
          label="Years of Experience"
          placeholder="e.g. 3"
          min={0}
          {...form.getInputProps("experienceYears")}
        />

        <FileInput
          label="Upload Resume (PDF)"
          placeholder="Click to upload"
          accept="application/pdf"
          {...form.getInputProps("resume")}
        />
        <Textarea
          label="Additional Notes"
          placeholder="Mention any skills, certifications, etc."
          autosize
          minRows={2}
          {...form.getInputProps("notes")}
        />

        <Group justify="center" mt="md">
          <Button
            type="submit"
            loading={loading}
            w="100%"
            radius="md"
            size="md"
          >
            Apply Now
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
