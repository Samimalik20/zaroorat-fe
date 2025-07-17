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
import { useParams } from "react-router-dom";

const cleaningCardData = [
  {
    title: "General Home Cleaning",
    description:
      "Thorough dusting, mopping, and vacuuming to maintain a hygienic and fresh living space.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/cleaning/general-cleaning1.png?updatedAt=1750181200000",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/cleaning/general-cleaning2.png?updatedAt=1750181200000",
    bg: "#e8f5e9", // light green
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
    bg: "#1b5e20", // dark green
    color: "white",
    buttonColor: "gray",
  },
];

export default function HomeCleaningServices() {


  return (
    <>
      <MyNavbar />
      <Box pos="relative">
        <Image
          src="https://img.freepik.com/free-photo/full-shot-men-cleaning-office_23-2149345516.jpg?uid=R104849183&ga=GA1.1.1955131269.1747397312&semt=ais_hybrid&w=740"
          alt="Home Cleaning Services"
          radius={0}
          fit="cover"
          h={650}
        />
        <Overlay color="#000" backgroundOpacity={0.7} blur={1} zIndex={1} />
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
            <BookingForm  isHeader={true} type="Home Cleaner" />
          </Stack>
        </Card>
        <Box
          pos="absolute"
          top="50%"
          left="10%"
          style={{ transform: "translateY(-50%)", zIndex: 2, color: "white" }}
        >
          <Title order={1}>Professional Home Cleaning</Title>
          <Text size="md" mt="sm">
            Keep your home sparkling with our trained and trusted cleaners.
          </Text>

          <Group gap="md">
            <Text size="lg">• Eco-Friendly</Text>
            <Text size="lg">• Time-Saving</Text>
            <Text size="lg">• Trusted Staff</Text>
          </Group>
        </Box>
      </Box>

      <Container py="md" fluid>
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
                  <Stack px={90}>
                    <Stack gap="sm" maw={400}>
                      <Title order={3} style={{ color: card.color || "black" }}>
                        {card.title}
                      </Title>
                      <Text style={{ color: card.color || "black" }}>
                        {card.description}
                      </Text>
                      <Button
                        color={card.buttonColor}
                        variant="filled"
                        w={150}
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
                  <Group>
                    <Image w={300} src={card.image1} alt={card.title} />
                    <Image w={300} src={card.image2} alt={card.title} />
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
