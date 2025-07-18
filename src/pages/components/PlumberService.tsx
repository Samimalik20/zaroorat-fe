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

const plumberCardData = [
  {
    title: "Pipe Installation & Replacement",
    description:
      "Expert setup or replacement of water, gas, or drainage pipes using durable materials for long-lasting plumbing infrastructure.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/professional/4362920-removebg-preview.png?updatedAt=1750149959660",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/professional/5325581-removebg-preview.png?updatedAt=1750149959622",
    bg: "#e0f2f1",
    color: "black",
    buttonColor: "teal",
  },
  {
    title: "Leak Detection & Repair",
    description:
      "Quick identification and repair of water leaks in bathrooms, kitchens, or underground piping to prevent water damage and wastage.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/plumber/leak-detection1.png?updatedAt=1750178350000",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/plumber/leak-detection2.png?updatedAt=1750178350000",
    bg: "#b2dfdb",
    color: "black",
    buttonColor: "dark",
  },
  {
    title: "Drain Cleaning & Maintenance",
    description:
      "Routine drain cleaning to prevent clogs and blockages, ensuring smooth and hygienic water flow in kitchens, bathrooms, and main lines.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/plumber/drain-cleaning1.png?updatedAt=1750178350000",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/plumber/drain-cleaning2.png?updatedAt=1750178350000",
    bg: "#004d40",
    color: "white",
    buttonColor: "gray",
  },
];

export default function PlumberServices() {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <MyNavbar />

      <Box pos="relative">
        {isLargeScreen && (
          <>
            <Image
              src="https://ik.imagekit.io/yzrrrgg3d/professional/technician-checking-heating-system-boiler-room.jpg?updatedAt=1750149098341"
              alt="Plumber Services"
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
              <Title order={1}>Professional Plumbing Services</Title>
              <Text size="md" mt="sm">
                Fix leaks, clogs, and installs — fast and reliable plumbing at your
                doorstep.
              </Text>
              <Group gap="md" wrap="wrap" mt="md">
                <Text size="lg">• Certified Experts</Text>
                <Text size="lg">• Quick Response</Text>
                <Text size="lg">• Transparent Pricing</Text>
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
            <BookingForm isHeader={true} type="Plumber" />
          </Stack>
        </Card>
      </Box>

      <Container py={{ base: "sm", md: "md" }} fluid>
        <Stack gap="md">
          {plumberCardData.map((card, index) => (
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
