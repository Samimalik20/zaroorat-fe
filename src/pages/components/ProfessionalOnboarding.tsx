import {
  Title,
  Text,
  Grid,
  Stack,
  Paper,
  Container,
  Image,
  ThemeIcon,
  Badge,
  Blockquote,
  Divider,
  Group,
  Card,
} from "@mantine/core";
// import {
//   IconCheck,
//   IconBolt,
//   IconUsersGroup,
//   IconCash,
//   IconQuote,
// } from "@tabler/icons-react";
import Footer from "./Footer";
import MyNavbar from "../auth/Navbar";
import ProfessionalForm from "./ProfessionalForm";
import IconUsersGroup from "../../assets/icons/IconUsersGroup";
import IconCash from "../../assets/icons/IconCash";
import IconBadge from "../../assets/icons/IconBadge";
import IconUserFilled from "../../assets/icons/IconUserFilled";

export default function ProfessionalOnboarding() {
  return (
    <>
      <MyNavbar />
      <Container size="xl" py="xl">
        <Paper
          radius="lg"
          shadow="sm"
          p="xl"
          withBorder
          style={{ backgroundColor: "#f9fafb" }}
        >
          <Grid gutter="xl" align="start">
            {/* Left Column - Rich Content */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="lg">
                <Badge
                  color="teal"
                  size="lg"
                  radius="sm"
                  variant="filled"
                  w="fit-content"
                >
                  1000+ Professionals Trust Us
                </Badge>

                <Title order={2} c="dark">
                  Join Pakistan’s Most Trusted Services Network
                </Title>

                <Text size="sm" c="dimmed">
                  Onboard once. Get booked forever. We help you get more jobs
                  without hassle.
                </Text>

                <Image
                  src="https://ik.imagekit.io/yzrrrgg3d/professional/hero_image_desktop-08e3eaac39db4404c62da49ee7c4cd83.webp?updatedAt=1749908870217"
                  alt="Professional Illustration"
                  fit="contain"
                  h={200}
                  radius="md"
                />

                <Divider label="Why Join Us?" labelPosition="center" />

                <Group grow>
                  <Card withBorder radius="md" p="md" shadow="xs">
                    <ThemeIcon
                      color="green"
                      variant="light"
                      radius="xl"
                      size="lg"
                    >
                      <IconUsersGroup size={20} />
                    </ThemeIcon>
                    <Text fw={600} mt="sm">
                      Verified Clients
                    </Text>
                    <Text size="xs" c="dimmed">
                      We connect you only with real customers near you.
                    </Text>
                  </Card>
                  <Card withBorder radius="md" p="md" shadow="xs">
                    <ThemeIcon
                      color="yellow"
                      variant="light"
                      radius="xl"
                      size="lg"
                    >
                      <IconCash size={20} />
                    </ThemeIcon>
                    <Text fw={600} mt="sm">
                      Instant Payments
                    </Text>
                    <Text size="xs" c="dimmed">
                      Payments are secure and timely.
                    </Text>
                  </Card>
                  <Card withBorder radius="md" p="md" shadow="xs">
                    <ThemeIcon
                      color="blue"
                      variant="light"
                      radius="xl"
                      size="lg"
                    >
                      <IconBadge size={20} />
                    </ThemeIcon>
                    <Text fw={600} mt="sm">
                      Fast Bookings
                    </Text>
                    <Text size="xs" c="dimmed">
                      Start receiving jobs right after approval.
                    </Text>
                  </Card>
                </Group>

                <Divider my="md" />

                <Blockquote
                  color="gray"
                  icon={<IconUserFilled />}
                  mt="lg"
                  radius="md"
                  cite="— Anwar, Electrician from Lahore"
                >
                  "This platform helped me get more jobs every week. It’s easy
                  to use and I get paid on time!"
                </Blockquote>

                <Paper
                  shadow="xs"
                  p="md"
                  radius="md"
                  bg="teal.0"
                  mt="sm"
                  withBorder
                >
                  <Text fw={600}>🔔 Get Discovered by Clients</Text>
                  <Text size="sm" c="dimmed">
                    Fill the form and our team will contact you within 24 hours
                    to activate your profile.
                  </Text>
                </Paper>
              </Stack>
            </Grid.Col>

            {/* Right Column - Form */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Paper
                p="xl"
                radius="md"
                shadow="md"
                style={{ backgroundColor: "white" }}
              >
                <Title order={3} mb="md" ta="center">
                  Onboarding Form
                </Title>
                <ProfessionalForm onClose={() => ""} isProfessional={true}/>
              </Paper>
            </Grid.Col>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </>
  );
}
