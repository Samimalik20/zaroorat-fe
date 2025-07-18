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

  Card,
  Flex,
} from "@mantine/core";
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
          <Grid gutter="xl">
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
                  radius="md"
                  style={{ maxWidth: "100%", height: "auto" }}
                />

                <Divider label="Why Join Us?" labelPosition="center" />

                {/* Cards in responsive Flex */}
                <Flex
                  direction={{ base: "column", sm: "row" }}
                  gap="md"
                  justify="center"
                >
                  {[{
                    icon: <IconUsersGroup size={20} />,
                    color: "green",
                    title: "Verified Clients",
                    description: "We connect you only with real customers near you."
                  },
                  {
                    icon: <IconCash size={20} />,
                    color: "yellow",
                    title: "Instant Payments",
                    description: "Payments are secure and timely."
                  },
                  {
                    icon: <IconBadge size={20} />,
                    color: "blue",
                    title: "Fast Bookings",
                    description: "Start receiving jobs right after approval."
                  }].map((item, index) => (
                    <Card key={index} withBorder radius="md" p="md" shadow="xs" style={{ flex: 1 }}>
                      <ThemeIcon
                        color={item.color}
                        variant="light"
                        radius="xl"
                        size="lg"
                      >
                        {item.icon}
                      </ThemeIcon>
                      <Text fw={600} mt="sm">
                        {item.title}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {item.description}
                      </Text>
                    </Card>
                  ))}
                </Flex>

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
                <ProfessionalForm onClose={() => ""} isProfessional={true} />
              </Paper>
            </Grid.Col>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </>
  );
}
