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
import { useMediaQuery } from "@mantine/hooks";
import Footer from "./Footer";
import MyNavbar from "../auth/Navbar";
import BookingForm from "./BookingForm";

const acCardData = [
  {
    title: "AC Installation & Setup",
    description:
      "Professional installation of split, window, or central AC systems with optimal placement and energy efficiency in mind.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/professional/272-removebg-preview.png?updatedAt=1749625004058",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/professional/air_conditioner8-removebg-preview.png?updatedAt=1749621143129",
    bg: "#e3f2fd",
    color: "black",
    buttonColor: "dark",
  },
  {
    title: "AC Repair & Troubleshooting",
    description:
      "Expert diagnosis and repair of cooling issues, unusual noises, refrigerant leaks, or electrical faults to keep your AC running smoothly.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/professional/20944212-removebg-preview.png?updatedAt=1749621389364",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/professional/4373395-removebg-preview.png?updatedAt=1749624809652",
    bg: "#b3e5fc",
    color: "black",
    buttonColor: "blue",
  },
  {
    title: "AC Servicing & Maintenance",
    description:
      "Routine cleaning, filter replacement, and performance checks to extend the life of your AC and maintain indoor air quality.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/professional/Sandy_Tech-18_Single-01-removebg-preview.png?updatedAt=1749621520919",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/professional/7274224-removebg-preview.png?updatedAt=1749625569299",
    bg: "#263238",
    color: "white",
    buttonColor: "gray",
  },
];

export default function ACServices() {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <MyNavbar />

      <Box pos="relative">
        {isLargeScreen && (
          <>
            <Image
              src="https://thumbs.dreamstime.com/b/blue-couch-sitting-living-room-next-to-wall-modern-pink-pillows-white-mounted-air-conditioner-potted-plant-curtains-360379990.jpg?w=768"
              alt="AC Services"
              radius={0}
              fit="cover"
              h={650}
            />
            <Overlay color="#000" backgroundOpacity={0.8} blur={1} zIndex={1} />
            <Box
              pos="absolute"
              top="50%"
              left="5%"
              style={{ transform: "translateY(-50%)", zIndex: 2 }}
              c="white"
              maw="40%"
            >
              <Title order={1}>Professional AC Services</Title>
              <Text size="md" mt="sm">
                Keep your home cool and comfortable with our expert technicians.
              </Text>
              <Group gap="md" wrap="wrap" mt="md">
                <Text size="lg">• Reliable</Text>
                <Text size="lg">• Affordable</Text>
                <Text size="lg">• 24/7 Support</Text>
              </Group>
            </Box>
          </>
        )}

        <Card
          pos={isLargeScreen ? "absolute" : "static"}
          top={isLargeScreen ? "5%" : undefined}
          right={isLargeScreen ? "5%" : undefined}
          w={{ base: "90%", sm: 400 }}
          mx={isLargeScreen ? 0 : "auto"}
          my={isLargeScreen ? 0 : "md"}
          bg="white"
          style={{ zIndex: 2 }}
        >
          <Stack>
            <Title order={3} style={{ fontFamily: "serif" }}>
              Book a Service
            </Title>
            <BookingForm isHeader={true} type="AC Technician" />
          </Stack>
        </Card>
      </Box>

      <Container py={{ base: "sm", md: "md" }} fluid>
        <Stack gap="md">
          {acCardData.map((card, index) => (
            <Card
              key={index}
              p="lg"
              radius="md"
              style={{ backgroundColor: card.bg }}
              withBorder
            >
              <Grid align="center">
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Stack px={{ base: "sm", md: "xl" }}>
                    <Stack gap="sm" maw={400}>
                      <Title order={3} c={card.color || "black"}>
                        {card.title}
                      </Title>
                      <Text c={card.color || "black"}>
                        {card.description}
                      </Text>
                      <Button
                        color={card.buttonColor}
                        variant="filled"
                        w={{ base: "100%", sm: 150 }}
                        radius="md"
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        Book Now
                      </Button>
                    </Stack>
                  </Stack>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Group justify="center" wrap="wrap" gap="md">
                    <Image
                      w={{ base: "100%", sm: 250 }}
                      src={card.image1}
                      alt={card.title}
                    />
                    <Image
                      w={{ base: "100%", sm: 250 }}
                      src={card.image2}
                      alt={card.title}
                    />
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
