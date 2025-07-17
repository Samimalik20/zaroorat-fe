import {
  Grid,
  Card,
  Group,
  Badge,
  Divider,
  Stack,
  ThemeIcon,
  Tooltip,
  Button,
  Text,
  Modal,
} from "@mantine/core";
import IconBuilding from "../../assets/icons/IconBuilding";
import IconCalendar from "../../assets/icons/IconCalendar";
import IconCash from "../../assets/icons/IconCash";
import IconClock from "../../assets/icons/IconClock";
import IconMapPin from "../../assets/icons/IconMapPin";
import { useState } from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { JobCard } from "./JobDetails";

export default function MyJobs() {
  const jobs = [
    {
      jobTitle: "Electrician for Building Maintenance",
      jobCategory: "Electrician",
      country: "UAE",
      city: "Dubai",
      companyName: "Al Futtaim Group",
      jobDescription:
        "Responsible for wiring, lighting, and overall building electrical maintenance. Must know safety protocols.",
      responsibilities: ["Wiring", "Lighting setup", "Routine inspections"],
      skillsRequired: ["Knowledge of wiring standards", "Tool handling"],
      experienceRequired: "Minimum 2 years of experience",
      education: "Matric / Technical Diploma",
      salary: {
        amount: 1500,
        currency: "AED",
        notes: "Accommodation included",
      },
      benefits: {
        accommodation: true,
        food: false,
        transport: true,
        medical: true,
        other: ["Annual leave", "Visa processing"],
      },
      contractDetails: {
        durationMonths: 24,
        renewable: true,
        workingDaysPerWeek: 6,
        workingHoursPerDay: 8,
        overtimeAvailable: true,
      },
      interviewDetails: {
        date: "2025-07-01T10:00:00Z",
        mode: "In-person",
        location: "Lahore Office",
        notes: "Bring original documents",
      },
      contact: {
        agencyName: "WorkConnect Pvt Ltd",
        contactPerson: "Mr. Ahmed",
        phone: "+92-300-1234567",
        email: "jobs@workconnect.com",
        whatsapp: "+92-300-1234567",
      },
      isActive: true,
    },
    {
      jobTitle: "Plumber for Residential Projects",
      jobCategory: "Plumber",
      country: "Saudi Arabia",
      city: "Riyadh",
      companyName: "Al Jazeera Constructions",
      jobDescription:
        "Install and repair residential plumbing systems. Ability to read blueprints is a plus.",
      responsibilities: [
        "Install pipelines",
        "Leak detection",
        "System testing",
      ],
      skillsRequired: ["Pipe installation", "Water system knowledge"],
      experienceRequired: "3+ years plumbing experience",
      education: "Diploma in Plumbing",
      salary: {
        amount: 1300,
        currency: "SAR",
        notes: "Plus overtime",
      },
      benefits: {
        accommodation: true,
        food: true,
        transport: true,
        medical: true,
      },
      contractDetails: {
        durationMonths: 12,
        renewable: false,
        workingDaysPerWeek: 6,
        workingHoursPerDay: 9,
        overtimeAvailable: true,
      },
      interviewDetails: {
        date: "2025-07-10T11:00:00Z",
        mode: "Zoom",
        location: "",
        notes: "Link will be sent via email",
      },
      contact: {
        agencyName: "SkilledForce International",
        contactPerson: "Ms. Sana",
        phone: "+92-301-9876543",
        email: "apply@skilledforce.com",
      },
      isActive: true,
    },
    {
      jobTitle: "Welder - MIG/TIG Specialist",
      jobCategory: "Welder",
      country: "Qatar",
      city: "Doha",
      companyName: "QTech Engineering",
      jobDescription:
        "Perform precision welding in industrial and construction settings using MIG/TIG machines.",
      responsibilities: [
        "Welding metal parts",
        "Reading blueprints",
        "Machine maintenance",
      ],
      skillsRequired: ["MIG welding", "TIG welding", "Safety compliance"],
      experienceRequired: "At least 4 years experience",
      education: "Technical Certification in Welding",
      salary: {
        amount: 1800,
        currency: "QAR",
        notes: "Includes performance bonus",
      },
      benefits: {
        accommodation: true,
        food: true,
        transport: false,
        medical: true,
        other: ["Uniform", "Tools provided"],
      },
      contractDetails: {
        durationMonths: 18,
        renewable: true,
        workingDaysPerWeek: 5,
        workingHoursPerDay: 10,
        overtimeAvailable: false,
      },
      interviewDetails: {
        date: "2025-07-20T09:00:00Z",
        mode: "Skype",
      },
      contact: {
        agencyName: "TradeLink HR",
        contactPerson: "Engr. Bilal",
        email: "hr@tradelink.com",
      },
      isActive: true,
    },
  ];
  const [job, setJob] = useState<any | undefined>(undefined);
  const [
    openedDetailsModal,
    { open: openDetailModal, close: closeDetailModal },
  ] = useDisclosure();

  const handleCloseDetailsModal = () => {
    setJob(undefined);
    closeDetailModal();
  };

  const handleShowDetails = (job: any) => {
    setJob(job);
    openDetailModal();
  };
  const isSmallScreen = useMediaQuery("(max-width: 56.25em)");

  return (
    <>
      <Grid>
        {jobs?.map((job) => (
          <Grid.Col
            span={{
              base: 12,
              xs: 12,
              sm: 12,
              md: 12,
              lg: 6,
              xl: 6,
            }}
            key={job.jobTitle}
          >
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              bg="white"
              style={{
                maxWidth: 600,
                margin: "auto",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                ":hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
                },
              }}
            >
              <Group justify="space-between" mb="sm">
                  <Badge color="cyan" variant="light" size="lg">
                  {job.jobCategory}
                </Badge>
                   <Badge color="green" variant="light" size="lg">
               Pending
                </Badge>
              
              </Group>

              <Text fw={700} size="xl" mb={4}>
                {job.jobTitle}
              </Text>

              <Text c="dimmed" size="sm" mb="md" lineClamp={4}>
                {job.jobDescription}
              </Text>

              <Divider my="sm" />

              <Stack gap="xs" mb="md">
                {job.companyName && (
                  <Group gap="xs">
                    <ThemeIcon color="blue" variant="light" size={28}>
                      <IconBuilding size={18} />
                    </ThemeIcon>
                    <Text>
                      <strong>Company:</strong> {job.companyName}
                    </Text>
                  </Group>
                )}

                <Group gap="xs">
                  <ThemeIcon color="orange" variant="light" size={28}>
                    <IconMapPin size={18} />
                  </ThemeIcon>
                  <Text>
                    <strong>Location:</strong> {job.city}, {job.country}
                  </Text>
                </Group>

                <Group gap="xs">
                  <ThemeIcon color="green" variant="light" size={28}>
                    <IconCash size={18} />
                  </ThemeIcon>
                  <Text>
                    <strong>Salary:</strong>{" "}
                    {job.salary?.amount
                      ? `${job.salary.amount} ${job.salary.currency}`
                      : "Not specified"}
                  </Text>
                </Group>

                <Group gap="xs">
                  <ThemeIcon color="orange" variant="light" size={28}>
                    <IconClock size={18} />
                  </ThemeIcon>
                  <Text>
                    <strong>Experience:</strong> {job.experienceRequired}
                  </Text>
                </Group>

                <Group gap="xs">
                  <ThemeIcon color="red" variant="light" size={28}>
                    <IconCalendar size={18} />
                  </ThemeIcon>
                  <Text>
                    <strong>Interview:</strong>{" "}
                    {job.interviewDetails?.date
                      ? new Date(job.interviewDetails.date).toLocaleDateString()
                      : "Not scheduled"}
                  </Text>
                </Group>
              </Stack>

              <Divider my="xs" />

              <Group justify="right" mt="md" gap="sm">
            
                <Tooltip label="View more details" position="top" withArrow>
                  <Button
                    variant="outline"
                    onClick={() => handleShowDetails(job)}
                  >
                    Details
                  </Button>
                </Tooltip>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Modal
        opened={openedDetailsModal}
        onClose={handleCloseDetailsModal}
        title="Job Details"
        size={isSmallScreen ? "100%" : "70%"}
        centered
      >
        {job && <JobCard job={job} />}
      </Modal>
    </>
  );
}
