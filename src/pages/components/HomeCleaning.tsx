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

const cleaningCardData = [
  {
    title: "General Home Cleaning",
    description:
      "Thorough dusting, mopping, and vacuuming to maintain a hygienic and fresh living space.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/cleaning/general-cleaning1.png?updatedAt=1750181200000",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/cleaning/general-cleaning2.png?updatedAt=1750181200000",
    bg: "#e8f5e9",
    color: "black",
    buttonColor: "green",
  },
  {
    title: "Kitchen & Bathroom Deep Clean",
    description:
      "Deep sanitization of sinks, cabinets, tiles, and appliances for spotless kitchens and bathrooms.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/cleaning/kitchen1.png?updatedAt=1750181200000",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/cleaning/bathroom1.png?updatedAt=1750181200000",
    bg: "#c8e6c9",
    color: "black",
    buttonColor: "teal",
  },
  {
    title: "Post-Construction & Move-In Cleaning",
    description:
      "Remove debris, paint stains, and dust after renovation or before moving into a new house.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/cleaning/post-construction1.png?updatedAt=1750181200000",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/cleaning/movein1.png?updatedAt=1750181200000",
    bg: "#1b5e20",
    color: "white",
    buttonColor: "gray",
  },
];

export default function HomeCleaningServices() {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  const handleBookNowClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <MyNavbar />

      <Box pos="relative">
        {isLargeScreen && (
          <>
            <Image
              src="https://img.freepik.com/free-photo/full-shot-men-cleaning-office_23-2149345516.jpg?uid=R104849183&ga=GA1.1.1955131269.1747397312&semt=ais_hybrid&w=740"
              alt="Home Cleaning Services"
              radius={0}
              fit="cover"
              h={650}
            />
            <Overlay color="#000" backgroundOpacity={0.7} blur={1} zIndex={1} />
            <Box
              pos="absolute"
              top="50%"
              left="5%"
              style={{ transform: "translateY(-50%)", zIndex: 2 }}
              c="white"
              maw="40%"
            >
              <Title order={1}>Professional Home Cleaning</Title>
              <Text size="md" mt="sm">
                Keep your home sparkling with our trained and trusted cleaners.
              </Text>
              <Group gap="md" wrap="wrap" mt="md">
                <Text size="lg">• Eco-Friendly</Text>
                <Text size="lg">• Time-Saving</Text>
                <Text size="lg">• Trusted Staff</Text>
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
            <BookingForm isHeader={true} type="Home Cleaner" />
          </Stack>
        </Card>
      </Box>

      <Container py={{ base: "sm", md: "md" }} fluid>
        <Stack gap="md">
          {cleaningCardData.map((card, index) => (
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
                        onClick={handleBookNowClick}
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
