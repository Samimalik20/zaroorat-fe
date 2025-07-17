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


  return (
    <>
      <MyNavbar />
      <Box pos="relative">
        <Image
          src="https://ik.imagekit.io/yzrrrgg3d/professional/technician-checking-heating-system-boiler-room.jpg?updatedAt=1750149098341"
          alt="Plumber Services"
          radius={0}
          fit="cover"
          h={650}
        />
        <Overlay color="#000" backgroundOpacity={0.8} blur={1} zIndex={1} />
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
            <BookingForm  isHeader={true} type="Plumber" />
          </Stack>
        </Card>
        <Box
          pos="absolute"
          top="50%"
          left="10%"
          style={{ transform: "translateY(-50%)", zIndex: 2, color: "white" }}
        >
          <Title order={1}>Professional Plumbing Services</Title>
          <Text size="md" mt="sm">
            Fix leaks, clogs, and installs — fast and reliable plumbing at your
            doorstep.
          </Text>

          <Group gap="md">
            <Text size="lg">• Certified Experts</Text>
            <Text size="lg">• Quick Response</Text>
            <Text size="lg">• Transparent Pricing</Text>
          </Group>
        </Box>
      </Box>

      <Container py="md" fluid>
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
