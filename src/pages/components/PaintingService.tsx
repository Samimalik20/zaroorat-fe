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

const painterCardData = [
  {
    title: "Interior Wall Painting",
    description:
      "Transform your rooms with clean, vibrant wall finishes using high-quality, low-odor paints.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/painter/interior1.png?updatedAt=1750181400000",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/painter/interior2.png?updatedAt=1750181400000",
    bg: "#e8f5e9", // light green
    color: "black",
    buttonColor: "green",
  },
  {
    title: "Exterior House Painting",
    description:
      "Durable and weather-resistant coatings to give your house a long-lasting, fresh look.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/painter/exterior1.png?updatedAt=1750181400000",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/painter/exterior2.png?updatedAt=1750181400000",
    bg: "#fff3e0", // light orange/peach
    color: "black",
    buttonColor: "orange",
  },
  {
    title: "Wall Texturing & Decorative Finishes",
    description:
      "Add character to your space with stylish textures like stucco, marble finish, or sponge painting.",
    image1:
      "https://ik.imagekit.io/yzrrrgg3d/painter/decorative1.png?updatedAt=1750181400000",
    image2:
      "https://ik.imagekit.io/yzrrrgg3d/painter/decorative2.png?updatedAt=1750181400000",
    bg: "#fce4ec", // light pink
    color: "black",
    buttonColor: "pink",
  },
];


export default function PainterServices() {


  return (
    <>
      <MyNavbar />
      <Box pos="relative">
        <Image
          src="https://img.freepik.com/free-photo/young-male-working-wood-engraving-workshop_23-2149185460.jpg?uid=R104849183&ga=GA1.1.1955131269.1747397312&semt=ais_hybrid&w=740"
          alt="Painter Services"
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
            <BookingForm  isHeader={true} type="Painter" />
          </Stack>
        </Card>
        <Box
          pos="absolute"
          top="50%"
          left="10%"
          style={{ transform: "translateY(-50%)", zIndex: 2, color: "white" }}
        >
          <Title order={1}>Professional Painting Services</Title>
          <Text size="md" mt="sm">
            Quality paintwork to brighten and protect your space.
          </Text>

          <Group gap="md">
            <Text size="lg">• Neat Finish</Text>
            <Text size="lg">• Modern Tools</Text>
            <Text size="lg">• Color Consultancy</Text>
          </Group>
        </Box>
      </Box>

      <Container py="md" fluid>
        <Stack gap="md">
          {painterCardData.map((card, index) => (
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
