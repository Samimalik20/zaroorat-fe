import {
  Text,
  Group,
  Stack,
  
  Divider,
  ThemeIcon,
  SimpleGrid,
  Badge,
} from "@mantine/core";

import IconMapPin from "../../assets/icons/IconMapPin";
import IconCalendar from "../../assets/icons/IconCalendar";
import IconBuilding from "../../assets/icons/IconBuilding";
import IconCash from "../../assets/icons/IconCash";

export function JobCard({ job }: { job: any }) {
  return (
    <Stack gap="xl">
      {/* 🔹 Basic Info Section */}
      <Divider label="Job Overview" labelPosition="center" my="sm" />
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xs">
         <Text size="sm">
          <strong>Job Title:</strong> {job.jobTitle}
        </Text>
          <Text size="sm">
          <strong>Category:</strong>{" "}
          <Badge color="blue" variant="light">
            {job.jobCategory}
          </Badge>
        </Text>

        <Group gap="xs">
          <ThemeIcon color="gray" size={24} variant="light">
            <IconBuilding size={18} />
          </ThemeIcon>
          <Text size="sm">
            <strong>Company:</strong> {job.companyName}
          </Text>
        </Group>

        <Group gap="xs">
          <ThemeIcon color="teal" size={24} variant="light">
            <IconMapPin size={18} />
          </ThemeIcon>
          <Text size="sm">
            <strong>Location:</strong> {job.city}, {job.country}
          </Text>
        </Group>

       

      
        {job.salary?.amount && (
          <Group gap="xs">
            <ThemeIcon color="green" size={24} variant="light">
              <IconCash size={18} />
            </ThemeIcon>
            <Text size="sm">
              <strong>Salary:</strong> {job.salary.amount}{" "}
              {job.salary.currency}
            </Text>
          </Group>
        )}

        {job.interviewDetails?.date && (
          <Group gap="xs">
            <ThemeIcon color="orange" size={24} variant="light">
              <IconCalendar size={18} />
            </ThemeIcon>
            <Text size="sm">
              <strong>Interview:</strong>{" "}
              {new Date(job.interviewDetails.date).toLocaleDateString()}
            </Text>
          </Group>
        )}
      </SimpleGrid>

      {/* 🔸 Skills & Responsibilities Section */}
      <Divider label="Skills & Responsibilities" labelPosition="center" my="sm" />
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xs">
        <Text size="sm">
          <strong>Skills:</strong> {job.skillsRequired?.join(", ")}
        </Text>
        <Text size="sm">
          <strong>Responsibilities:</strong> {job.responsibilities?.join(", ")}
        </Text>
      </SimpleGrid>

      {/* 🔸 Salary & Benefits Section */}
      <Divider label="Salary & Benefits" labelPosition="center" my="sm" />
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xs">
        <Text size="sm">
          <strong>Salary:</strong> {job.salary.amount} {job.salary.currency}
        </Text>
        <Text size="sm">
          <strong>Notes:</strong> {job.salary.notes}
        </Text>
        <Text size="sm">
          <strong>Accommodation:</strong>{" "}
          {job.benefits.accommodation ? "Yes" : "No"}
        </Text>
        <Text size="sm">
          <strong>Food:</strong> {job.benefits.food ? "Yes" : "No"}
        </Text>
        <Text size="sm">
          <strong>Transport:</strong> {job.benefits.transport ? "Yes" : "No"}
        </Text>
        <Text size="sm">
          <strong>Medical:</strong> {job.benefits.medical ? "Yes" : "No"}
        </Text>
        {job.benefits.other?.length > 0 && (
          <Text size="sm" span>
            <strong>Other:</strong> {job.benefits.other.join(", ")}
          </Text>
        )}
      </SimpleGrid>

      {/* 🔸 Contract & Interview Section */}
      <Divider label="Contract & Interview" labelPosition="center" my="sm" />
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xs">
        <Text size="sm">
          <strong>Duration:</strong> {job.contractDetails.durationMonths} months
        </Text>
        <Text size="sm">
          <strong>Working Days:</strong>{" "}
          {job.contractDetails.workingDaysPerWeek} / week
        </Text>
        <Text size="sm">
          <strong>Working Hours:</strong>{" "}
          {job.contractDetails.workingHoursPerDay} / day
        </Text>
        <Text size="sm">
          <strong>Overtime:</strong>{" "}
          {job.contractDetails.overtimeAvailable ? "Available" : "Not available"}
        </Text>
        <Text size="sm">
          <strong>Interview Mode:</strong> {job.interviewDetails.mode}
        </Text>
        <Text size="sm">
          <strong>Location:</strong> {job.interviewDetails.location}
        </Text>
        <Text size="sm">
          <strong>Notes:</strong> {job.interviewDetails.notes}
        </Text>
      </SimpleGrid>

      {/* 🔸 Contact Section */}
      <Divider label="Contact Information" labelPosition="center" my="sm" />
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xs">
        <Text size="sm">
          <strong>Agency:</strong> {job.contact.agencyName}
        </Text>
        <Text size="sm">
          <strong>Contact Person:</strong> {job.contact.contactPerson}
        </Text>
        <Text size="sm">
          <strong>Phone:</strong> {job.contact.phone}
        </Text>
        <Text size="sm">
          <strong>Email:</strong> {job.contact.email}
        </Text>
        <Text size="sm">
          <strong>WhatsApp:</strong> {job.contact.whatsapp}
        </Text>
      </SimpleGrid>
    </Stack>
  );
}
