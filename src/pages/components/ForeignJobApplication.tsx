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
import Footer from "./Footer";
import MyNavbar from "../auth/Navbar";
import IconCash from "../../assets/icons/IconCash";
import IconBadge from "../../assets/icons/IconBadge";
import IconWorld from "../../assets/icons/IconWorld";
import IconUserFilled from "../../assets/icons/IconUserFilled";
import ApplicationForm from "./ApplicationForm";
import { useLocation } from "react-router-dom";

export default function ForeignJobOnboarding() {
  const {state} = useLocation()
  const jobId=state?.jobId
  const jobTitle = state?.title
  console.log(state,'state')
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
                  color="blue"
                  size="lg"
                  radius="sm"
                  variant="filled"
                  w="fit-content"
                >
                  Apply for Jobs Abroad
                </Badge>

                <Title order={2} c="dark">
                  Start Your Journey to Work Overseas
                </Title>

                <Text size="sm" c="dimmed">
                  We help skilled workers connect with verified foreign recruiters in countries like UAE, Saudi Arabia, and Qatar. Apply today and change your future!
                </Text>

                <Image
                w={'100%'}
                  src="https://ik.imagekit.io/yzrrrgg3d/professional/jobs_PiOlX7sn9?updatedAt=1750727603919"
                  alt="Foreign Jobs Illustration"
                  fit="contain"
                  h={200}
                  radius="md"
                />

                <Divider label="Why Apply Through Us?" labelPosition="center" />

                <Group grow>
                  <Card withBorder radius="md" p="md" shadow="xs">
                    <ThemeIcon
                      color="blue"
                      variant="light"
                      radius="xl"
                      size="lg"
                    >
                      <IconWorld size={20} />
                    </ThemeIcon>
                    <Text fw={600} mt="sm">
                      Global Opportunities
                    </Text>
                    <Text size="xs" c="dimmed">
                      We connect you with real job openings abroad.
                    </Text>
                  </Card>
                  <Card withBorder radius="md" p="md" shadow="xs">
                    <ThemeIcon
                      color="green"
                      variant="light"
                      radius="xl"
                      size="lg"
                    >
                      <IconCash size={20} />
                    </ThemeIcon>
                    <Text fw={600} mt="sm">
                      Competitive Salaries
                    </Text>
                    <Text size="xs" c="dimmed">
                      Earn better by working in foreign markets.
                    </Text>
                  </Card>
                  <Card withBorder radius="md" p="md" shadow="xs">
                    <ThemeIcon
                      color="yellow"
                      variant="light"
                      radius="xl"
                      size="lg"
                    >
                      <IconBadge size={20} />
                    </ThemeIcon>
                    <Text fw={600} mt="sm">
                      Verified Recruiters
                    </Text>
                    <Text size="xs" c="dimmed">
                      All job listings are checked and verified by our team.
                    </Text>
                  </Card>
                </Group>

                <Divider my="md" />

                <Blockquote
                  color="gray"
                  icon={<IconUserFilled />}
                  mt="lg"
                  radius="md"
                  cite="— Rizwan, Welder now working in Dubai"
                >
                  "This platform made the entire process simple and smooth. I got my visa within weeks and now I’m earning in Dirhams!"
                </Blockquote>

                <Paper
                  shadow="xs"
                  p="md"
                  radius="md"
                  bg="blue.0"
                  mt="sm"
                  withBorder
                >
                  <Text fw={600}>🌍 Start Your Application</Text>
                  <Text size="sm" c="dimmed">
                    Fill out the form and our team will review your application. Shortlisted candidates are contacted within 3 working days.
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
                  Apply for {jobTitle}
                </Title>
              <ApplicationForm/>
              </Paper>
            </Grid.Col>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </>
  );
}
