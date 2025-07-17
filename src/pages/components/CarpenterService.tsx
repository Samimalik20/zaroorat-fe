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

const carpenterCardData = [
  {
    title: "Custom Furniture Making",
    description:
      "Design and build custom furniture pieces like tables, wardrobes, beds, and cabinets tailored to your space and style.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/carpenter/furniture1.png?updatedAt=1750181000000",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/carpenter/furniture2.png?updatedAt=1750181000000",
    bg: "#fbe9e7", // warm light brown
    color: "black",
    buttonColor: "orange",
  },
  {
    title: "Wooden Door & Window Repair",
    description:
      "Repair or replace creaky, broken, or damaged wooden doors and windows for a smooth, secure, and aesthetic finish.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/carpenter/door-repair1.png?updatedAt=1750181000000",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/carpenter/door-repair2.png?updatedAt=1750181000000",
    bg: "#ffe0b2", // light amber
    color: "black",
    buttonColor: "brown",
  },
  {
    title: "Polishing & Wood Maintenance",
    description:
      "Bring old wooden surfaces back to life with expert polishing, termite-proofing, and varnishing for long-lasting beauty.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/carpenter/polishing1.png?updatedAt=1750181000000",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/carpenter/polishing2.png?updatedAt=1750181000000",
    bg: "#3e2723", // deep wood color
    color: "white",
    buttonColor: "gray",
  },
];

export default function CarpenterServices() {
  const { cityId } = useParams();
  if (!cityId) return null;

  return (
    <>
      <MyNavbar />
      <Box pos="relative">
        <Image
          src="https://img.freepik.com/free-photo/carpenter-working-sawmill-wood-manufacture_1303-22878.jpg?uid=R104849183&ga=GA1.1.1955131269.1747397312&semt=ais_hybrid&w=740"
          alt="Carpenter Services"
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
            <BookingForm  isHeader={true} type="Carpenter" />
          </Stack>
        </Card>
        <Box
          pos="absolute"
          top="50%"
          left="10%"
          style={{ transform: "translateY(-50%)", zIndex: 2, color: "white" }}
        >
          <Title order={1}>Professional Carpenter Services</Title>
          <Text size="md" mt="sm">
            From custom furniture to repairs – expert woodwork at your doorstep.
          </Text>

          <Group gap="md">
            <Text size="lg">• Skilled Artisans</Text>
            <Text size="lg">• Quality Materials</Text>
            <Text size="lg">• Affordable Pricing</Text>
          </Group>
        </Box>
      </Box>

      <Container py="md" fluid>
        <Stack gap="md">
          {carpenterCardData.map((card, index) => (
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
