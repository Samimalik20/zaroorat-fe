import {
  Text,
  Title,
  Grid,
  Group,
  Stack,
  Paper,
  Card,
  Button,
  Divider,
  ThemeIcon,
  Badge,
  Select,
  NumberInput,
  Tooltip,
  Container,
} from "@mantine/core";
// import {
//   IconBuilding,
//   IconMapPin,
//   IconCash,
//   IconClock,
//   IconCalendar,
//   IconSearch,
//   IconBriefcase,
// } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconBriefCase from "../../assets/icons/IconBriefCase";
import IconBuilding from "../../assets/icons/IconBuilding";
import IconMapPin from "../../assets/icons/IconMapPin";
import IconCash from "../../assets/icons/IconCash";
import IconClock from "../../assets/icons/IconClock";
import IconCalendar from "../../assets/icons/IconCalendar";
import MyNavbar from "../auth/Navbar";

const jobs = [
  {
    _id: "",
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
    _id: "",

    jobTitle: "Plumber for Residential Projects",
    jobCategory: "Plumber",
    country: "Saudi Arabia",
    city: "Riyadh",
    companyName: "Al Jazeera Constructions",
    jobDescription:
      "Install and repair residential plumbing systems. Ability to read blueprints is a plus.",
    responsibilities: ["Install pipelines", "Leak detection", "System testing"],
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
    _id: "",

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
export default function JobIndexing() {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    category: "",
    country: "",
    minSalary: 0,
    maxSalary: 1000000,
  });

  const jobCategories = Array.from(new Set(jobs.map((j) => j.jobCategory)));
  const countries = Array.from(new Set(jobs.map((j) => j.country)));

  const filteredJobs = jobs.filter((job) => {
    const salary = job.salary?.amount || 0;
    return (
      (!filters.category || job.jobCategory === filters.category) &&
      (!filters.country || job.country === filters.country) &&
      salary >= filters.minSalary &&
      salary <= filters.maxSalary
    );
  });

  return (
    <>
    
    <MyNavbar/>
    <Container size="xl" py="xl">
      <Title order={2} mb="lg" ta="center">
        Explore Overseas Job Opportunities
      </Title>

      {/* Filters */}
   <Paper shadow="sm" radius="md" p="md" mb="xl" withBorder>
  <Grid gutter="md">
    <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
      <Select
        label="Job Category"
        placeholder="Select"
        data={jobCategories}
        value={filters.category}
        onChange={(value) =>
          setFilters((prev) => ({ ...prev, category: value || "" }))
        }
      />
    </Grid.Col>

    <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
      <Select
        label="Country"
        placeholder="Select"
        data={countries}
        value={filters.country}
        onChange={(value) =>
          setFilters((prev) => ({ ...prev, country: value || "" }))
        }
      />
    </Grid.Col>

    <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
      <NumberInput
        label="Min Salary"
        placeholder="e.g. 500"
        value={filters.minSalary}
        onChange={(value) =>
          setFilters((prev: any) => ({ ...prev, minSalary: value || 0 }))
        }
        min={0}
      />
    </Grid.Col>

    <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
      <NumberInput
        label="Max Salary"
        placeholder="e.g. 3000"
        value={filters.maxSalary}
        onChange={(value) =>
          setFilters((prev: any) => ({
            ...prev,
            maxSalary: value || 1000000,
          }))
        }
        min={0}
      />
    </Grid.Col>
  </Grid>
</Paper>


      {/* Job Listings */}
      <Grid gutter="xl">
        {filteredJobs.map((job) => (
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }} key={job._id}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={{
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-4px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <Group justify="space-between" mb="sm">
                <Badge color="cyan" variant="light">
                  {job.jobCategory}
                </Badge>
                <ThemeIcon color="gray" variant="light">
                  <IconBriefCase size={18} />
                </ThemeIcon>
              </Group>

              <Text fw={700} size="lg" mb={4}>
                {job.jobTitle}
              </Text>

              <Text c="dimmed" size="sm" lineClamp={3}>
                {job.jobDescription}
              </Text>

              <Divider my="sm" />

              <Stack gap={6} mb="md">
                <Group gap="xs">
                  <ThemeIcon color="blue" variant="light" size={24}>
                    <IconBuilding size={16} />
                  </ThemeIcon>
                  <Text size="sm">
                    <strong>Company:</strong> {job.companyName}
                  </Text>
                </Group>

                <Group gap="xs">
                  <ThemeIcon color="orange" variant="light" size={24}>
                    <IconMapPin size={16} />
                  </ThemeIcon>
                  <Text size="sm">
                    <strong>Location:</strong> {job.city}, {job.country}
                  </Text>
                </Group>

                <Group gap="xs">
                  <ThemeIcon color="green" variant="light" size={24}>
                    <IconCash size={16} />
                  </ThemeIcon>
                  <Text size="sm">
                    <strong>Salary:</strong>{" "}
                    {job.salary?.amount
                      ? `${job.salary.amount} ${job.salary.currency}`
                      : "Not specified"}
                  </Text>
                </Group>

                <Group gap="xs">
                  <ThemeIcon color="orange" variant="light" size={24}>
                    <IconClock size={16} />
                  </ThemeIcon>
                  <Text size="sm">
                    <strong>Experience:</strong> {job.experienceRequired}
                  </Text>
                </Group>

                <Group gap="xs">
                  <ThemeIcon color="red" variant="light" size={24}>
                    <IconCalendar size={16} />
                  </ThemeIcon>
                  <Text size="sm">
                    <strong>Interview:</strong>{" "}
                    {job.interviewDetails?.date
                      ? new Date(job.interviewDetails.date).toLocaleDateString()
                      : "Not scheduled"}
                  </Text>
                </Group>
              </Stack>

              <Group justify="right" mt="md" gap="sm">
                <Tooltip label="Apply for this job" position="top" withArrow>
                  <Button
                    color="green"
                    onClick={() =>
                      navigate("/job-application", {
                        state: {
                          jobId: job._id,
                          title: job.jobTitle,
                        },
                      })
                    }
                  >
                    Apply Now
                  </Button>
                </Tooltip>
                <Tooltip label="View more details" position="top" withArrow>
                  <Button
                    variant="outline"
                    onClick={() =>
                      navigate(`/job-details/${job._id}`, { state: job })
                    }
                  >
                    Details
                  </Button>
                </Tooltip>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {filteredJobs.length === 0 && (
        <Text ta="center" mt="xl" color="dimmed">
          No jobs match your filters.
        </Text>
      )}
    </Container>
    </>

  );
}
