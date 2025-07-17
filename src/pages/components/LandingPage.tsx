import {
  Anchor,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Stack,
  Title,
  Text,
  Image,
  SimpleGrid,
  Box,
  Select,
  Center,
  Badge,
  Divider,
  Grid,
  ThemeIcon,
  Tooltip,
  Modal,
  Menu,
  ActionIcon,
  Avatar,
  FLEX_STYLE_PROPS_DATA,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Role } from "../../interfaces/ICommonIconProps";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Footer from "./Footer";
import IconCalendar from "../../assets/icons/IconCalendar";
import IconClock from "../../assets/icons/IconClock";

import { Drawer, Burger } from "@mantine/core";
import IconBuilding from "../../assets/icons/IconBuilding";
import IconMapPin from "../../assets/icons/IconMapPin";
import IconCash from "../../assets/icons/IconCash";
import { JobCard } from "./JobDetails";

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

const services = [
  {
    title: "AC Repair",
    href: `/ac-services`,
    imageUrl:
      "https://ik.imagekit.io/yzrrrgg3d/professional/272-removebg-preview.png?updatedAt=1749625004058",
  },
  {
    title: "Electritian",
    href: "/electrician-services",
    imageUrl:
      "https://ik.imagekit.io/yzrrrgg3d/professional/9991193-removebg-preview.png?updatedAt=1749989380577",
  },
  {
    title: "Plumber",
    href: "/plumber-services",
    imageUrl:
      "https://ik.imagekit.io/yzrrrgg3d/professional/plumber.png?updatedAt=1749093442937",
  },
  {
    title: "Foreign Jobs",
    href: "/job-indexing",
    imageUrl:
      "https://ik.imagekit.io/yzrrrgg3d/professional/silhouette-tourist-people-earth-planet.png?updatedAt=1750575922218",
  },
  {
    title: "Home Cleaning",
    href: "/cleaning-services",

    imageUrl:
      "https://ik.imagekit.io/yzrrrgg3d/professional/52068-removebg-preview.png?updatedAt=1750059499238",
  },
  {
    title: "Painter",
    href: "/painting-services",
    imageUrl:
      "https://ik.imagekit.io/yzrrrgg3d/professional/10046961.jpg?updatedAt=1750152168166",
  },
];
export default function LandingPage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const jobRef = useRef<HTMLDivElement>(null);
  const professionalRef = useRef<HTMLDivElement>(null);

  const servicesRef = useRef<HTMLDivElement>(null);

  const isSmallScreen = useMediaQuery("(max-width: 56.25em)");
  const [job, setJob] = useState<any | undefined>(undefined);

  // inside your component
  const [opened, { open, close }] = useDisclosure(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      city: "",
    },
  });

  const handleSubmit = () => {
    navigate(`/city/${form.values.city}`),
      {
        state: {
          ...form.values,
        },
      };
  };
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

  const largeScreen = useMediaQuery("(min-width: 56.25em)");

  return (
    <>
      <Container fluid p={0} bg={"gray.0"}>
        <Stack gap={60}>
          <Flex bg={"#40c057ff"} h={"100vh"} direction={"column"} p={20}>
            {isSmallScreen && (
              <Image
                w={275}
                ml={32}
                src={
                  "https://ik.imagekit.io/yzrrrgg3d/professional/horizontal-removebg-preview%20(1).png?updatedAt=1749904445628"
                }
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              />
            )}
            {isSmallScreen && (
              <Card
                bg="transparent"
                h={70}
                p={20}
                style={{
                  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.15)",
                  borderRadius: "8px",
                }}
              >
                <Flex w={"100%"} align={"center"} justify={"space-between"}>
                  <Burger color="white" opened={opened} onClick={open} />
                  <Flex gap={10}>
                    {user && user.role !== "Customer" && (
                      <Group>
                        <Button
                          variant="outline"
                          color="white"
                          onClick={() => {
                            if (user?.role === Role.ADMIN) {
                              navigate("/dashboard");
                            } else if (user?.role === Role.CITY_MANAGER) {
                              navigate("/dashboard/city-salesmans");
                            } else if (user?.role === Role.SALESMAN) {
                              navigate("/dashboard/professionals");
                            } else {
                              return <Navigate to="/" />;
                            }
                          }}
                        >
                          Dashboard
                        </Button>
                      </Group>
                    )}

                    {!user && (
                      <Group>
                        <Button
                          onClick={() => navigate("/auth/sign-in")}
                          bg="#309945"
                          c="white"
                          size={isSmallScreen ? "xs" : "md"}
                          w={isSmallScreen ? 100 : 150}
                        >
                          Login
                        </Button>

                        <Button
                          bg="transparent"
                          style={{ border: "2px solid white" }}
                          onClick={() => navigate("/auth/sign-up")}
                          size={isSmallScreen ? "xs" : "md"}
                        >
                          GET STARTED
                        </Button>
                      </Group>
                    )}
                  </Flex>
                </Flex>
              </Card>
            )}
            {!isSmallScreen && (
              <Card
                bg="transparent"
                h={70}
                p={20}
                style={{
                  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.15)",
                  borderRadius: "8px",
                }}
              >
                <Center w="100%" h="100%">
                  <Flex
                    justify="space-between"
                    wrap="wrap"
                    align="center"
                    w="100%"
                  >
                    <Flex gap={"xs"} align={"center"} style={{
                      cursor:"pointer"
                    }}>
                      <Flex
                        justify={"center"}
                        align={"center"}
                        h={"40px"}
                        w={"40px"}
                        bg={"#309945"}
                        style={{
                          borderRadius: 8,
                        }}
                      >
                        <Title
                          style={{
                            fontFamily: "cursive",
                            fontSize: 24,
                            background: "linear-gradient(to right, red, blue)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          Z
                        </Title>
                      </Flex>
                      {/* <Title
                        style={{
                          fontFamily: "cursive",
                          fontSize: 24,
                          background: "linear-gradient(to right, red, blue)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Zaroorat
                      </Title> */}
                      <Title
                        style={{
                          fontFamily: "cursive",
                          fontSize: 24,
                          background:
                            "linear-gradient(to right, white, #CCCCCC)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Zaroorat
                      </Title>
                    </Flex>
                    <Flex gap={30}>
                      <Anchor
                        c="white"
                        onClick={() =>
                          document
                            .getElementById("services")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        fz={isSmallScreen ? 14 : 16}
                      >
                        Our Services
                      </Anchor>
                      <Anchor
                        c="white"
                        onClick={() =>
                          document
                            .getElementById("about-us")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        fz={isSmallScreen ? 14 : 16}
                      >
                        About Us
                      </Anchor>
                      <Anchor
                        c="white"
                        onClick={() =>
                          document
                            .getElementById("professional-section")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        fz={isSmallScreen ? 14 : 16}
                      >
                        Become Professional
                      </Anchor>
                      <Anchor
                        c="white"
                        onClick={() =>
                          document
                            .getElementById("jobs")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        fz={isSmallScreen ? 14 : 16}
                      >
                        Foreign Jobs
                      </Anchor>
                    </Flex>

                    <Flex gap={10} mt={isSmallScreen ? 24 : 0}>
                      {user && user.role !== "Customer" && (
                        <Group>
                          <Button
                            variant="outline"
                            color="white"
                            onClick={() => {
                              if (user?.role === Role.ADMIN) {
                                navigate("/dashboard");
                              } else if (user?.role === Role.CITY_MANAGER) {
                                navigate("/dashboard/city-salesmans");
                              } else if (user?.role === Role.SALESMAN) {
                                navigate("/dashboard/professionals");
                              } else {
                                return <Navigate to="/" />;
                              }
                            }}
                          >
                            Dashboard
                          </Button>
                        </Group>
                      )}
                      {user && user.role === "Customer" && (
                        <Button
                          variant="outline"
                          color="white"
                          onClick={() => navigate("/account/bookings")}
                        >
                          My Bookings
                        </Button>
                      )}
                      {!user && (
                        <Group>
                          <Button
                            onClick={() => navigate("/auth/sign-in")}
                            bg="#309945"
                            c="white"
                            size={isSmallScreen ? "xs" : "md"}
                            w={isSmallScreen ? 100 : 150}
                          >
                            Login
                          </Button>

                          <Button
                            bg="transparent"
                            style={{ border: "2px solid white" }}
                            onClick={() => navigate("/auth/sign-up")}
                            size={isSmallScreen ? "xs" : "md"}
                          >
                            GET STARTED
                          </Button>
                        </Group>
                      )}
                    </Flex>
                  </Flex>
                </Center>
              </Card>
            )}
            {/* MAIN SECTION */}
            <Box style={{ flex: 1, overflowY: "hidden" }}>
              <Flex h="100%">
                {/* LEFT SIDE */}
                <Box w={isSmallScreen ? "100%" : "60%"}>
                  <Flex justify="center" align="center" h="100%">
                    <Stack maw={550}>
                      <Title
                        c="white"
                        fw={700}
                        ta="center"
                        fz={isSmallScreen ? 18 : 32}
                      >
                        Book trusted professionals near you, without hassle
                      </Title>
                      {/* <Text fz={isSmallScreen ? 14 : 16} c="white" ta="center">
                        Find reliable electricians, plumbers, mechanics, and
                        more — our team connects you with verified experts in
                        your city.
                      </Text> */}
                      {/* 
                      <Card
                        radius={isSmallScreen ? "lg" : "100px"}
                        w="100%"
                        bg="#66d07a"
                      >
                        <form onSubmit={form.onSubmit(handleSubmit)}>
                          <Flex
                            gap={10}
                            direction={isSmallScreen ? "column" : "row"}
                          >
                            <Select
                              radius={30}
                              w={isSmallScreen ? "100%" : "75%"}
                              size="lg"
                              placeholder="Your City"
                              data={[
                                "Multan",
                                "Lahore",
                                "Islamabad",
                                "Karachi",
                                "Rawalpindi",
                                "Faisalabad",
                              ]}
                              {...form.getInputProps("city")}
                            />
                            <Button
                              h={46}
                              w={isSmallScreen ? "100%" : 130}
                              radius={30}
                              fz={16}
                              variant="outline"
                              bg="#309945"
                              c="white"
                              type="submit"
                            >
                              Search
                            </Button>
                          </Flex>
                        </form>
                      </Card> */}
                      <Card withBorder bg={"green"}>
                        <Stack>
                          <Title order={4} c={"white"}>
                            What are you looking for?
                          </Title>
                          <SimpleGrid
                            cols={{
                              base: 2,
                              sm: 2,
                              md: 2,
                              lg: 3,
                              xl: 3,
                            }}
                          >
                            {services.map((service, ind) => (
                              <Box
                                key={ind}
                                style={{
                                  cursor: "pointer",
                                }}
                                onClick={() => navigate(service.href)}
                                h={155}
                              >
                                <Stack gap={"xs"} align="">
                                  <Flex
                                    justify={"center"}
                                    align={"center"}
                                    bg={"#309945"}
                                    h={100}
                                    style={{
                                      borderRadius: 8,
                                    }}
                                  >
                                    <Image
                                      w={75}
                                      h={75}
                                      src={service.imageUrl}
                                    />
                                  </Flex>
                                  <Text size="sm" ta={"center"}>
                                    {service.title}
                                  </Text>
                                </Stack>
                              </Box>
                            ))}
                          </SimpleGrid>
                        </Stack>
                      </Card>
                    </Stack>
                  </Flex>
                </Box>

                {/* RIGHT SIDE IMAGE */}
                <Box w={"40%"} display={isSmallScreen ? "none" : "block"}>
                  <Image
                    w="95%"
                    src={
                      "https://ik.imagekit.io/yzrrrgg3d/professional/hero_image_desktop-08e3eaac39db4404c62da49ee7c4cd83.webp?updatedAt=1749908870217"
                    }
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>

          <Container fluid px={isSmallScreen ? 12 : 60} bg={"gray.0"}>
            <Stack mt={12} gap={50}>
              <Card
                p={isSmallScreen ? 20 : 60}
                h="100%"
                mt={12}
                bg={"white"}
                style={{
                  borderRadius: 12,
                }}
              >
                <Stack gap={30}>
                  <Text fz={24} ta="center" c="green" fw={600}>
                    HOW IT WORKS
                  </Text>
                  <Title ta="center" order={2}>
                    Book a trusted professional in just a few clicks
                  </Title>

                  <SimpleGrid
                    cols={{ base: 1, sm: 1, md: 2, lg: 3 }}
                    spacing={30}
                    mt={20}
                  >
                    <Card shadow="sm" radius="md" withBorder p="lg" bg="white">
                      <Stack align="center" gap="sm">
                        <Image
                          src="https://ik.imagekit.io/yzrrrgg3d/price-quote-logo.webp?updatedAt=1743590997794"
                          width={60}
                          height={60}
                          fit="contain"
                        />
                        <Title order={4} ta="center">
                          Get an instant price quote
                        </Title>
                        <Text ta="center" c="dimmed" fz="sm">
                          Select your city and location, tell us what's wrong,
                          and we'll give you an instant fixed price in seconds.
                        </Text>
                      </Stack>
                    </Card>

                    <Card shadow="sm" radius="md" withBorder p="lg" bg="white">
                      <Stack align="center" gap="sm">
                        <Image
                          src="https://ik.imagekit.io/yzrrrgg3d/calendar.webp?updatedAt=1743590972836"
                          width={60}
                          height={60}
                          fit="contain"
                        />
                        <Title order={4} ta="center">
                          Pick a date, time & location
                        </Title>
                        <Text ta="center" c="dimmed" fz="sm">
                          Your professional will come to whichever address suits
                          you best, at the date and time of your choice.
                        </Text>
                      </Stack>
                    </Card>

                    <Card shadow="sm" radius="md" withBorder p="lg" bg="white">
                      <Stack align="center" gap="sm">
                        <Image
                          src="https://ik.imagekit.io/yzrrrgg3d/pc.webp?updatedAt=1743590972777"
                          width={60}
                          height={60}
                          fit="contain"
                        />
                        <Title order={4} ta="center">
                          Professional comes to you
                        </Title>
                        <Text ta="center" c="dimmed" fz="sm">
                          No need to go to the garage – just sit back and relax
                          while the professional arrives at your doorstep.
                        </Text>
                      </Stack>
                    </Card>
                  </SimpleGrid>
                </Stack>
              </Card>

              <div ref={jobRef} id="jobs">
                <Card
                  p={isSmallScreen ? 20 : 60}
                  h="100%"
                  mt={12}
                  bg={"white"}
                  style={{
                    borderRadius: 12,
                  }}
                >
                  <Stack gap={30}>
                    <Stack
                      gap={largeScreen ? 20 : 10}
                      justify="center"
                      align="center"
                      px={12}
                    >
                      <Text fz={18} fw={700} ta="center" c="green">
                        🌍 OVERSEAS OPPORTUNITIES
                      </Text>
                      <Title fw={700} ta="center" order={2}>
                        Jobs Abroad for Skilled Professionals
                      </Title>
                      <Text maw={800} ta="center" fz="md" c="dimmed">
                        Explore the latest overseas job openings for skilled
                        workers including electricians, plumbers, welders, and
                        technicians. Secure high-paying roles in countries like
                        UAE, Saudi Arabia, Qatar, and beyond.
                      </Text>
                    </Stack>

                    <Grid>
                      {jobs?.map((job) => (
                        <Grid.Col
                          span={{
                            base: 12,
                            xs: 12,
                            sm: 12,
                            md: 6,
                            lg: 4,
                            xl: 4,
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
                              transition:
                                "transform 0.2s ease, box-shadow 0.2s ease",
                              ":hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
                              },
                            }}
                          >
                            <Group justify="flex-end" mb="sm">
                              <Badge color="cyan" variant="light" size="lg">
                                {job.jobCategory}
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
                                  <ThemeIcon
                                    color="blue"
                                    variant="light"
                                    size={28}
                                  >
                                    <IconBuilding size={18} />
                                  </ThemeIcon>
                                  <Text>
                                    <strong>Company:</strong> {job.companyName}
                                  </Text>
                                </Group>
                              )}

                              <Group gap="xs">
                                <ThemeIcon
                                  color="orange"
                                  variant="light"
                                  size={28}
                                >
                                  <IconMapPin size={18} />
                                </ThemeIcon>
                                <Text>
                                  <strong>Location:</strong> {job.city},{" "}
                                  {job.country}
                                </Text>
                              </Group>

                              <Group gap="xs">
                                <ThemeIcon
                                  color="green"
                                  variant="light"
                                  size={28}
                                >
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
                                <ThemeIcon
                                  color="orange"
                                  variant="light"
                                  size={28}
                                >
                                  <IconClock size={18} />
                                </ThemeIcon>
                                <Text>
                                  <strong>Experience:</strong>{" "}
                                  {job.experienceRequired}
                                </Text>
                              </Group>

                              <Group gap="xs">
                                <ThemeIcon
                                  color="red"
                                  variant="light"
                                  size={28}
                                >
                                  <IconCalendar size={18} />
                                </ThemeIcon>
                                <Text>
                                  <strong>Interview:</strong>{" "}
                                  {job.interviewDetails?.date
                                    ? new Date(
                                        job.interviewDetails.date
                                      ).toLocaleDateString()
                                    : "Not scheduled"}
                                </Text>
                              </Group>
                            </Stack>

                            <Divider my="xs" />

                            <Group justify="right" mt="md" gap="sm">
                              <Tooltip
                                label="Apply for this job"
                                position="top"
                                withArrow
                              >
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
                              <Tooltip
                                label="View more details"
                                position="top"
                                withArrow
                              >
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
                    <Flex justify="center" mt={20}>
                      <Button
                        w={210}
                        radius={30}
                        h={48}
                        color="green"
                        variant="outline"
                        onClick={() => navigate("/job-indexing")}
                      >
                        FIND OUT MORE
                      </Button>
                    </Flex>
                  </Stack>
                </Card>
              </div>

              <div
                ref={aboutRef}
                id="about-us"
                style={{
                  background: "white",
                  boxShadow: "initial",
                  borderRadius: 12,
                }}
              >
                <Flex justify="center" h={isSmallScreen ? "auto" : "80vh"}>
                  <Card
                    bg="transparent"
                    shadow="none"
                    w="90%"
                    radius="md"
                    style={{ overflow: "hidden" }}
                  >
                    <Flex
                      gap={40}
                      direction={isSmallScreen ? "column" : "row"}
                      align="center"
                    >
                      <Card
                        bg="white"
                        shadow="md"
                        radius={30}
                        w={isSmallScreen ? "100%" : "40%"}
                        p={0}
                        style={{
                          overflow: "hidden",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <Image
                          h={450}
                          w="100%"
                          radius={30}
                          src="https://ik.imagekit.io/yzrrrgg3d/professional/bussiness-people-working-team-office.jpg?updatedAt=1749975206647"
                        />
                      </Card>

                      <Card
                        bg="transparent"
                        w={isSmallScreen ? "100%" : "60%"}
                        shadow="none"
                        p={0}
                      >
                        <Stack>
                          <Stack gap={30}>
                            <Stack gap={10}>
                              <Text fz={18} fw={700} c="green" tt="uppercase">
                                About Us
                              </Text>
                              <Title fz={32} fw={700}>
                                Our Promise to You
                              </Title>
                            </Stack>

                            <Stack gap={12} maw={750}>
                              <Text fz={16} c="dimmed">
                                Tired of searching for reliable professionals
                                when something breaks at home? We get it! That’s
                                why we’re here — to make hiring electricians,
                                plumbers, and technicians as hassle-free as
                                possible.
                              </Text>
                              <Text fz={16} c="dimmed">
                                Whether it's a leaky tap, faulty wiring,
                                appliance repair, or general maintenance, our
                                platform connects you with trusted experts in
                                your city. No hidden charges — just fair,
                                upfront rates.
                              </Text>
                              <Text fz={16} c="dimmed">
                                Once you place your request, we find the right
                                professional for the job. We coordinate
                                everything, so you can relax while the expert
                                comes to your doorstep — no app or tech skills
                                needed!
                              </Text>
                            </Stack>
                          </Stack>

                          {/* <Button
                            mt={20}
                            w={210}
                            c="#40c057"
                            fz={16}
                            radius={30}
                            h={48}
                            bg="transparent"
                            style={{ border: "1px solid #40c057" }}
                          >
                            FIND OUT MORE
                          </Button> */}
                        </Stack>
                      </Card>
                    </Flex>
                  </Card>
                </Flex>
              </div>

              <div
                ref={professionalRef}
                id="professional-section"
                style={{
                  background: "white",
                  boxShadow: "initial",
                  borderRadius: 12,
                }}
              >
                <Flex justify="center" h={isSmallScreen ? "auto" : "80vh"}>
                  <Card
                    bg="transparent"
                    shadow="none"
                    w="90%"
                    radius="md"
                    style={{ overflow: "hidden" }}
                  >
                    <Flex
                      gap={40}
                      direction={isSmallScreen ? "column" : "row"}
                      align="center"
                    >
                      <Card
                        bg="transparent"
                        w={isSmallScreen ? "100%" : "60%"}
                        shadow="none"
                        p={0}
                      >
                        <Stack>
                          <Stack gap={30}>
                            <Stack gap={10}>
                              <Text fz={18} fw={700} c="green" tt="uppercase">
                                Join Us
                              </Text>
                              <Title fz={32} fw={700}>
                                Become a Service Professional
                              </Title>
                            </Stack>

                            <Stack gap={12} maw={750}>
                              <Text fz={16} c="dimmed">
                                Are you an electrician, plumber, technician, or
                                handyman looking to grow your customer base?
                                We’re here to help you reach more clients —
                                without the hassle of marketing or managing
                                bookings.
                              </Text>
                              <Text fz={16} c="dimmed">
                                By joining our platform, you’ll get access to a
                                steady stream of job requests in your area. Set
                                your availability, accept the tasks you want,
                                and let us handle the coordination and
                                communication.
                              </Text>
                              <Text fz={16} c="dimmed">
                                We believe in transparency and fair
                                opportunities. No upfront fees — you only pay a
                                small service fee after completing a job. Start
                                earning more, on your terms.
                              </Text>
                            </Stack>
                          </Stack>

                          <Button
                            mt={20}
                            w={260}
                            c="#40c057"
                            fz={16}
                            radius={30}
                            h={48}
                            bg="transparent"
                            style={{ border: "1px solid #40c057" }}
                            onClick={() => navigate("/professional-onboarding")}
                          >
                            BECOME PROFESSIONAL
                          </Button>
                        </Stack>
                      </Card>

                      <Card
                        bg="white"
                        shadow="md"
                        radius={30}
                        w={isSmallScreen ? "100%" : "40%"}
                        p={0}
                        style={{
                          overflow: "hidden",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <Image
                          h={450}
                          w="100%"
                          radius={30}
                          src="https://ik.imagekit.io/yzrrrgg3d/professional/istockphoto-75407569-612x612.jpg?updatedAt=1750145669086"
                        />
                      </Card>
                    </Flex>
                  </Card>
                </Flex>
              </div>

              <div
                ref={servicesRef}
                id="services"
                style={{ background: "white", borderRadius: 12 }}
              >
                <Card
                  bg="transparent"
                  px={isSmallScreen ? 20 : 60}
                  py={60}
                  shadow="none"
                >
                  <Stack gap={40}>
                    <Stack>
                      <Text fz={18} ta="center" fw={600} c="green">
                        OUR SERVICES
                      </Text>
                      <Title ta="center" fz={32}>
                        All the ways we can help
                      </Title>
                    </Stack>

                    <Flex justify="center">
                      <SimpleGrid
                        cols={{ base: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
                        spacing={24}
                        w="100%"
                      >
                        {services.map((service, idx) => (
                          <Card
                            component="a"
                            href={service.href}
                            key={idx}
                            radius={15}
                            shadow="sm"
                            withBorder
                            p={20}
                            style={{
                              transition:
                                "transform 0.2s ease, box-shadow 0.2s ease",
                              cursor: "pointer",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.transform = "scale(1.02)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.transform = "scale(1)")
                            }
                          >
                            <Stack align="center" gap={15}>
                              <Box w={80} h={80}>
                                <Image
                                  height="100%"
                                  fit="contain"
                                  src={service.imageUrl}
                                  alt={service.title}
                                />
                              </Box>
                              <Title ta="center" fz={22} fw={600}>
                                {service.title}
                              </Title>
                            </Stack>
                          </Card>
                        ))}
                      </SimpleGrid>
                    </Flex>
                  </Stack>
                </Card>
              </div>
            </Stack>
          </Container>
          <Footer />
        </Stack>
      </Container>

      <Modal
        opened={openedDetailsModal}
        onClose={handleCloseDetailsModal}
        title="Job Details"
        size={isSmallScreen ? "100%" : "70%"}
        centered
      >
        {job && <JobCard job={job} />}
      </Modal>

      <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        padding="md"
        size="md"
        position="right"
      >
        <Stack>
          <Anchor onClick={close} href="#services">
            Our Services
          </Anchor>
          <Anchor onClick={close} href="#about-us">
            About Us
          </Anchor>
          <Anchor onClick={close} href="#services">
            Become Professional
          </Anchor>
          <Anchor onClick={close} href="#services">
            Browse Jobs
          </Anchor>
          {!user && (
            <>
              <Button fullWidth onClick={() => navigate("/auth/sign-in")}>
                Login
              </Button>
              <Button
                fullWidth
                variant="outline"
                onClick={() => navigate("/auth/sign-up")}
              >
                GET STARTED
              </Button>
            </>
          )}
        </Stack>
      </Drawer>
    </>
  );
}
