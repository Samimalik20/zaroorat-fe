import {
  Text,
  Title,
  Stack,
  Group,
  TextInput,
  Textarea,
  Select,
  NumberInput,
  Switch,
  SimpleGrid,
  Button,
  Divider,
  Paper,
  Box,
  ActionIcon,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconArrowNarrowLeft from "../../assets/icons/IconArrowNarrowLeft";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";
import { notifications } from "@mantine/notifications";

type Job = {
  _id: string;
  id?: string;
  title: string;
  category: string;
  country: string;
  city: string;
  companyName: string;
  description: string;
  responsibilities: string;
  skillsRequired: string;
  experienceRequired: string;
  education: string;
  salary: {
    amount: number;
    currency: string;
    notes: string;
  };
  benefits: {
    accommodation: boolean;
    food: boolean;
    transport: boolean;
    medical: boolean;
    other: string[];
  };
  contractDetails: {
    durationMonths: number;
    renewable: boolean;
    workingDaysPerWeek: number;
    workingHoursPerDay: number;
    overtimeAvailable: boolean;
  };
  interviewDetails: {
    date: Date;
    mode: string;
    location: string;
    notes: string;
  };
  contact: {
    agencyName: string;
    contactPerson: string;
    phone: string;
    email: string;
    whatsapp: string;
  };
};

export default function JobPostForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const job = location?.state?.job as Job | undefined;

  const form = useForm<any>({
    initialValues: {
      title: "",
      category: "",
      country: "",
      city: "",
      companyName: "",
      description: "",
      responsibilities: "",
      skillsRequired: "",
      experienceRequired: "",
      education: "",
      salary: {
        amount: 0,
        currency: "",
        notes: "",
      },
      benefits: {
        accommodation: false,
        food: false,
        transport: false,
        medical: false,
        other: [],
      },
      contractDetails: {
        durationMonths: 0,
        renewable: false,
        workingDaysPerWeek: 6,
        workingHoursPerDay: 8,
        overtimeAvailable: false,
      },
      interviewDetails: {
        date: new Date(),
        mode: "",
        location: "",
        notes: "",
      },
      contact: {
        agencyName: "",
        contactPerson: "",
        phone: "",
        email: "",
        whatsapp: "",
      },
    },
  });

  useEffect(() => {
    if (job) {
      form.setValues(job);
    }
  }, [job]);

  const queryClient = useQueryClient();

  const { mutate: createJob, isPending: loading } = useMutation({
    mutationFn: http.jobs.jobsControllerCreate,
  });

  const { mutate: updateJob, isPending: loadingUpdate } = useMutation({
    mutationFn: ({ jobId, data }: { jobId: string; data: any }) =>
      http.jobs.jobsControllerUpdate(jobId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
  });

  async function handleSubmit(values: any) {
    if (job) {
      updateJob(
        { jobId: job._id, data: values },
        {
          onSuccess: () => {
            notifications.show({
              message: "Job updated sucessfully",
              color: "green",
            });
          },
        }
      );
    } else {
      createJob(values, {
        onSuccess: async (data) => {
          if (data.data) {
            form.reset();
            queryClient.invalidateQueries({ queryKey: ["salesmans"] });
          }
        },
      });
    }
  }

  return (
    <>
      <Group gap={4}>
        <ActionIcon variant="subtle" onClick={() => navigate(-1)}>
          <IconArrowNarrowLeft size={24} />
        </ActionIcon>
        <Text>Go Back</Text>
      </Group>

      <Box mx="auto" maw={900} py="xl">
        <Title order={2} mb="md" ta="center">
          {job ? "Update Job Post" : "Post a Job"}
        </Title>

 <form onSubmit={form.onSubmit(handleSubmit)}>
  <Stack gap="xl">
    {/* --- Job Information --- */}
    <Paper p="lg" withBorder radius="md">
      <Title order={4} mb="sm">
        Job Information
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <TextInput
          label="Job Title"
          placeholder="e.g. Senior Electrician"
          {...form.getInputProps("title")}
        />
        <Select
          label="Category"
          placeholder="Select a job category"
          data={[
            "Electrician",
            "Plumber",
            "Welder",
            "Mechanic",
            "Painter",
            "Carpenter",
          ]}
          {...form.getInputProps("category")}
        />
        <TextInput
          label="Country"
          placeholder="e.g. Pakistan"
          {...form.getInputProps("country")}
        />
        <TextInput
          label="City"
          placeholder="e.g. Lahore"
          {...form.getInputProps("city")}
        />
        <TextInput
          label="Company Name"
          placeholder="e.g. ABC Technical Services"
          {...form.getInputProps("companyName")}
        />
        <TextInput
          label="Experience Required"
          placeholder="e.g. 2-3 years"
          {...form.getInputProps("experienceRequired")}
        />
        <TextInput
          label="Education"
          placeholder="e.g. Diploma in Electrical Engineering"
          {...form.getInputProps("education")}
        />
      </SimpleGrid>
      <Textarea
        mt="md"
        label="Job Description"
        placeholder="Describe the job responsibilities and requirements..."
        minRows={3}
        {...form.getInputProps("description")}
      />
    </Paper>

    {/* --- Responsibilities & Skills --- */}
    <Paper p="lg" withBorder radius="md">
      <Title order={4} mb="sm">
        Responsibilities & Skills
      </Title>
      <Textarea
        label="Responsibilities"
        placeholder="List the main job duties..."
        {...form.getInputProps("responsibilities")}
      />
      <Textarea
        mt="md"
        label="Skills Required"
        placeholder="Mention required skills like tool handling, teamwork..."
        {...form.getInputProps("skillsRequired")}
      />
    </Paper>

    {/* --- Salary & Benefits --- */}
    <Paper p="lg" withBorder radius="md">
      <Title order={4} mb="sm">
        Salary & Benefits
      </Title>
      <Group grow>
        <NumberInput
          label="Salary Amount"
          placeholder="e.g. 50000"
          min={0}
          {...form.getInputProps("salary.amount")}
        />
        <TextInput
          label="Currency"
          placeholder="e.g. PKR"
          {...form.getInputProps("salary.currency")}
        />
      </Group>
      <TextInput
        mt="md"
        label="Salary Notes"
        placeholder="e.g. Based on experience, includes allowances"
        {...form.getInputProps("salary.notes")}
      />
      <Divider my="sm" />
      <Title order={5} mb="xs">
        Benefits
      </Title>
      <SimpleGrid cols={{ base: 2, sm: 4 }}>
        <Switch
          label="Accommodation"
          {...form.getInputProps("benefits.accommodation", {
            type: "checkbox",
          })}
        />
        <Switch
          label="Food"
          {...form.getInputProps("benefits.food", { type: "checkbox" })}
        />
        <Switch
          label="Transport"
          {...form.getInputProps("benefits.transport", {
            type: "checkbox",
          })}
        />
        <Switch
          label="Medical"
          {...form.getInputProps("benefits.medical", {
            type: "checkbox",
          })}
        />
      </SimpleGrid>
      <TextInput
        mt="md"
        label="Other Benefits"
        placeholder="e.g. Annual leave, insurance"
        {...form.getInputProps("benefits.other")}
      />
    </Paper>

    {/* --- Contract Details --- */}
    <Paper p="lg" withBorder radius="md">
      <Title order={4} mb="sm">
        Contract Details
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <NumberInput
          label="Contract Duration (months)"
          placeholder="e.g. 12"
          {...form.getInputProps("contractDetails.durationMonths")}
        />
        <Switch
          label="Renewable Contract"
          {...form.getInputProps("contractDetails.renewable", {
            type: "checkbox",
          })}
        />
        <NumberInput
          label="Working Days/Week"
          placeholder="e.g. 6"
          min={1}
          max={7}
          {...form.getInputProps("contractDetails.workingDaysPerWeek")}
        />
        <NumberInput
          label="Working Hours/Day"
          placeholder="e.g. 8"
          min={1}
          max={24}
          {...form.getInputProps("contractDetails.workingHoursPerDay")}
        />
        <Switch
          label="Overtime Available"
          {...form.getInputProps("contractDetails.overtimeAvailable", {
            type: "checkbox",
          })}
        />
      </SimpleGrid>
    </Paper>

    {/* --- Interview Details --- */}
    <Paper p="lg" withBorder radius="md">
      <Title order={4} mb="sm">
        Interview Details
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <DateInput
          label="Interview Date"
          placeholder="Select interview date"
          {...form.getInputProps("interviewDetails.date")}
        />
        <TextInput
          label="Mode"
          placeholder="e.g. In-person, Online"
          {...form.getInputProps("interviewDetails.mode")}
        />
        <TextInput
          label="Location"
          placeholder="e.g. Company HQ, Zoom link"
          {...form.getInputProps("interviewDetails.location")}
        />
        <TextInput
          label="Additional Notes"
          placeholder="e.g. Bring your resume, dress code"
          {...form.getInputProps("interviewDetails.notes")}
        />
      </SimpleGrid>
    </Paper>

    {/* --- Submit Button --- */}
    <Group justify="end">
      <Button type="submit" size="md" loading={loading || loadingUpdate}>
        {job ? "Update Job Post" : "Submit Job Post"}
      </Button>
    </Group>
  </Stack>
</form>

      </Box>
    </>
  );
}
