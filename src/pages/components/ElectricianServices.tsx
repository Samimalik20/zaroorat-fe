import {
  Card,
  Text,
  Title,
  Button,
  Grid,
  Stack,
  Image,
  Container,
  Box,
  Overlay,
  Group,
} from "@mantine/core";
import Footer from "./Footer";
import MyNavbar from "../auth/Navbar";
import BookingForm from "./BookingForm";

const electricianServicesData = [
  {
    title: "Wiring & Electrical Installation",
    description:
      "Safe and efficient installation of electrical wiring, sockets, switches, and circuit breakers for residential and commercial spaces.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/professional/14127-removebg-preview.png?updatedAt=1750147544790",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/professional/37672-removebg-preview.png?updatedAt=1750147451536",
    bg: "#fff3e0",
    buttonColor: "orange",
  },
  {
    title: "Electrical Troubleshooting & Repair",
    description:
      "Diagnosis and repair of power failures, short circuits, fuse problems, and other common electrical issues with reliable expertise.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/professional/9991193-removebg-preview.png?updatedAt=1749989380577",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/professional/4140834-removebg-preview.png?updatedAt=1750147804539",
    bg: "#ffe0b2",
    buttonColor: "yellow",
  },
  {
    title: "Appliance Installation & Maintenance",
    description:
      "Professional setup and regular maintenance of electrical appliances including fans, lights, heaters, and kitchen equipment.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/professional/10074657-removebg-preview.png?updatedAt=1750148152780",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/professional/10071469-removebg-preview.png?updatedAt=1750148152632",
    bg: "#d0f0c0",
    buttonColor: "green",
  },
];

export default function ElectricianServices() {
 


  return (
    <>
      <MyNavbar />
      <Box pos="relative">
        <Image
          src="https://ik.imagekit.io/yzrrrgg3d/professional/male-electrician-works-switchboard-overalls-against-backdrop-emergency-lighting.jpg?updatedAt=1750147227376"
          alt="Electrician Services"
          radius={0}
          fit="cover"
          h={650}
        />
        <Overlay color="#000" backgroundOpacity={0.75} blur={1} zIndex={1} />
        <Card
          pos="absolute"
          top="5%"
          right="10%"
          bg={"white"}
          w={400}
          style={{ zIndex: 2 }}
        >
          <Stack>
            <Title order={3} style={{ fontFamily: "serif" }}>
              Book a Service
            </Title>
            <BookingForm  isHeader={true} type="Electrician" />
          </Stack>
        </Card>
        <Box
          pos="absolute"
          top="50%"
          left="10%"
          style={{ transform: "translateY(-50%)", zIndex: 2, color: "white" }}
        >
          <Title order={1}>Professional Electrician Services</Title>
          <Text size="md" mt="sm">
            Ensure electrical safety and functionality with our certified
            professionals.
          </Text>
          <Group gap="md">
            <Text size="lg">• Safe</Text>
            <Text size="lg">• Certified</Text>
            <Text size="lg">• 24/7 Emergency</Text>
          </Group>
        </Box>
      </Box>

      <Container py="md" fluid>
        <Stack gap="md">
          {electricianServicesData.map((service, index) => (
            <Card
              key={index}
              p="lg"
              radius="md"
              style={{ backgroundColor: service.bg }}
              withBorder
            >
              <Grid align="center">
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Stack px={90}>
                    <Stack gap="sm" maw={400}>
                      <Title order={3}>{service.title}</Title>
                      <Text>{service.description}</Text>
                      <Button
                        color={service.buttonColor}
                        variant="filled"
                        w={150}
                        radius="md"
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                      >
                        Book Now
                      </Button>
                    </Stack>
                  </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Group>
                    <Image w={300} src={service.image1} alt={service.title} />
                    <Image w={300} src={service.image2} alt={service.title} />
                  </Group>
                </Grid.Col>
              </Grid>
            </Card>
          ))}
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
