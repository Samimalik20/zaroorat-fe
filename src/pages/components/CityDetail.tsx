import {
  Box,
  Card,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Title,
  Text,
  Image,
  AspectRatio,
  Grid,
  Button,
  Group,
} from "@mantine/core";
import MyNavbar from "../auth/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import Footer from "./Footer";

export default function CityDetails() {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 56.25em)");
  const { cityId } = useParams();

  const services = [
    {
      title: "AC Repair",
      href: `/city/${cityId}/ac-services`,
      imageUrl:
        "https://ik.imagekit.io/yzrrrgg3d/professional/ac%20repair.webp?updatedAt=1748413681218",
    },
    {
      title: "Electritian",

      href: `/city/${cityId}/electrician-services`,

      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRNEEvrV6gH-9nBdvg0zX0TRdjwHC8beAlVQ&s",
    },
    {
      title: "Plumber",
      href: `/city/${cityId}/plumber-services`,

      imageUrl:
        "https://ik.imagekit.io/yzrrrgg3d/professional/plumber.png?updatedAt=1749093442937",
    },
    {
      title: "Carpenter",
      href: `/city/${cityId}/carpenter-services`,

      imageUrl:
        "https://ik.imagekit.io/yzrrrgg3d/professional/9635057-removebg-preview.png?updatedAt=1749093512625",
    },
    {
      title: "Home Cleaning",
      href: `/city/${cityId}/cleaning-services`,

      imageUrl:
        "https://ik.imagekit.io/yzrrrgg3d/professional/52068-removebg-preview.png?updatedAt=1750059499238",
    },
    {
      title: "Painter",
      href: `/city/${cityId}/painting-services`,

      imageUrl:
        "https://ik.imagekit.io/yzrrrgg3d/professional/10046961.jpg?updatedAt=1750152168166",
    },
  ];

  return (
    <>
      <MyNavbar />
      <Container
        fluid
        px={isSmallScreen ? 12 : 150}
        py={isSmallScreen ? 12 : 50}
        bg={"green"}
      >
        <SimpleGrid
          cols={{
            base: 1,
            sm: 1,
            md: 1,
            lg: 2,
            xl: 2,
          }}
          spacing={100}
        >
          <Box>
            <Stack>
              <Title
                order={1}
                w={"70%"}
                style={{
                  fontFamily: "serif",
                }}
                c={"white"}
              >
                Home services at your doorstep
              </Title>

              <Card withBorder>
                <Stack>
                  <Title order={4} c={"dimmed"}>
                    What are you looking for?
                  </Title>
                  <SimpleGrid
                    cols={{
                      base: 2,
                      sm: 2,
                      md: 2,
                      lg: 3,
                      xl: 3,
                    }}
                  >
                    {services.map((service, ind) => (
                      <Box
                        key={ind}
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => navigate(service.href)}
                        h={155}
                      >
                        <Stack gap={"xs"} align="">
                          <Flex
                            justify={"center"}
                            align={"center"}
                            bg={"#f7f7f7"}
                            h={100}
                            style={{
                              borderRadius: 8,
                            }}
                          >
                            <Image w={75} h={75} src={service.imageUrl} />
                          </Flex>
                          <Text size="sm" ta={'center'}>{service.title}</Text>
                        </Stack>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Card>
            </Stack>
          </Box>
          <Box>
            <Grid gutter="md">
              {/* Left side - tall image */}
              <Grid.Col span={{ base: 12, md: 6 }}>
                <AspectRatio ratio={3 / 4} h={362}>
                  <Image
                    h={"100%"}
                    src="https://ik.imagekit.io/yzrrrgg3d/professional/technician.avif?updatedAt=1748417515450"
                    alt="Beauty Service"
                    radius="md"
                    fit="cover"
                  />
                </AspectRatio>
                <AspectRatio ratio={4 / 2} h={140}>
                  <Image
                    h={"100%"}
                    mt={8}
                    src="https://ik.imagekit.io/yzrrrgg3d/professional/cleaning.jfif?updatedAt=1748416600458"
                    alt="Massage"
                    radius="md"
                    fit="cover"
                  />
                </AspectRatio>
              </Grid.Col>

              {/* Right side - top wide image */}
              <Grid.Col span={{ base: 12, md: 6 }}>
                <AspectRatio ratio={4 / 2} h={140}>
                  <Image
                    h={"100%"}
                    src="https://ik.imagekit.io/yzrrrgg3d/professional/plumber.jpg?updatedAt=1748419449182"
                    alt="Beauty Service"
                    radius="md"
                    fit="cover"
                  />
                </AspectRatio>
                <AspectRatio ratio={3 / 4} h={362}>
                  <Image
                    h={"100%"}
                    mt={8}
                    src="https://ik.imagekit.io/yzrrrgg3d/professional/electrician-builder-with-beard-worker-white-helmet-work-installation-lamps-height-professional-overalls-with-drill-background-repair-site.jpg?updatedAt=1749988871556"
                    alt="Massage"
                    radius="md"
                    fit="cover"
                  />
                </AspectRatio>
              </Grid.Col>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
      <Container size="lg" py="xl" fluid>
        <Stack gap={60}>
          <Card p="lg" radius="md" bg={"#E3FDFD"} withBorder>
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack px={90}>
                  <Stack gap="sm" maw={550}>
                    <Title order={3}>AC Repair</Title>
                    <Text>
                      Our AC repair services ensure your cooling systems run
                      efficiently and reliably. Whether it’s a minor issue or a
                      complete breakdown, we’ve got you covered. We specialize
                      in both residential and commercial air conditioning
                      systems. Enjoy a cool and comfortable home with our
                      same-day service options.
                    </Text>
                    <Button
                      color={""}
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
                  <Image
                    w={300}
                    src={
                      "https://ik.imagekit.io/yzrrrgg3d/professional/272-removebg-preview.png?updatedAt=1749625004058"
                    }
                    alt={""}
                  />

                  <Image
                    w={300}
                    src={
                      "https://ik.imagekit.io/yzrrrgg3d/professional/air_conditioner8-removebg-preview.png?updatedAt=1749621143129"
                    }
                    alt={""}
                  />
                </Group>
              </Grid.Col>
            </Grid>
          </Card>

          {/* Electrician */}
          <Card p="lg" radius="md" bg={"#FFF4E0"} withBorder>
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Group>
                  <Image
                    w={300}
                    src="https://ik.imagekit.io/yzrrrgg3d/professional/37811-removebg-preview.png?updatedAt=1749989268250"
                    alt="Electrician"
                  />
                  <Image
                    w={300}
                    src="https://ik.imagekit.io/yzrrrgg3d/professional/9991193-removebg-preview.png?updatedAt=1749989380577"
                    alt="Electrician Work"
                  />
                </Group>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack px={90}>
                  <Stack gap="sm" maw={550}>
                    <Title order={3}>Electrician</Title>
                    <Text>
                      Our certified electricians handle wiring, repairs, and
                      installations with precision. From power outages to fan
                      and light installations, we cover all residential needs.
                      We follow safety protocols to ensure your home is
                      protected from electrical hazards. Affordable pricing and
                      reliable service make us the top choice in your city.
                    </Text>
                    <Button
                      color="yellow"
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
            </Grid>
          </Card>
          <Card p="lg" radius="md" bg={"#E0F4FF"} withBorder>
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack px={90}>
                  <Stack gap="sm" maw={550}>
                    <Title order={3}>Carpenter</Title>
                    <Text>
                      Hire our carpenters for custom woodwork, repairs, and
                      installations. From doors and windows to cabinets and
                      furniture, we craft it all with care. We use quality
                      materials to ensure long-lasting durability and finish.
                      Whether it’s a small fix or a big project, we work with
                      precision and style.
                    </Text>
                    <Button
                      color="blue"
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
                  <Image
                    w={300}
                    src="https://ik.imagekit.io/yzrrrgg3d/professional/38167-removebg-preview.png?updatedAt=1749989605805"
                    alt="Woodwork"
                  />
                  <Image
                    w={300}
                    src="https://ik.imagekit.io/yzrrrgg3d/professional/9635057-removebg-preview.png?updatedAt=1749093512625"
                    alt="Carpenter"
                  />
                </Group>
              </Grid.Col>
            </Grid>
          </Card>

          {/* Plumber */}
          <Card p="lg" radius="md" bg={"#FEECE2"} withBorder>
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Group>
                  <Image
                    w={300}
                    src="https://ik.imagekit.io/yzrrrgg3d/professional/plumber.png?updatedAt=1749093442937"
                    alt="Plumber"
                  />
                  <Image
                    w={350}
                    src="https://ik.imagekit.io/yzrrrgg3d/professional/40766-removebg-preview.png?updatedAt=1749914740291"
                    alt="Plumbing Work"
                  />
                </Group>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack px={90}>
                  <Stack gap="sm" maw={550}>
                    <Title order={3}>Plumber</Title>
                    <Text>
                      Our expert plumbers offer fast solutions for leaks,
                      blockages, and installations. We work on kitchens,
                      bathrooms, underground pipes, and water tanks. With the
                      right tools and training, we get the job done efficiently
                      every time. Emergency plumbing services are available for
                      urgent home water issues.
                    </Text>
                    <Button
                      color="orange"
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
            </Grid>
          </Card>

          {/* Appliance Repair */}
          <Card p="lg" radius="md" bg={"#F0FFF0"} withBorder>
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack px={90}>
                  <Stack gap="sm" maw={550}>
                    <Title order={3}>Appliance Repair</Title>
                    <Text>
                      Restore your appliances with our expert repair services at
                      your doorstep. We fix washing machines, refrigerators,
                      ovens, and other home appliances. Our technicians diagnose
                      quickly and provide cost-effective solutions. No need to
                      replace — we’ll get it running like new in no time.
                    </Text>
                    <Button
                      color="green"
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
                  <Image
                    w={300}
                    src="https://ik.imagekit.io/yzrrrgg3d/professional/18091-removebg-preview.png?updatedAt=1749094082020"
                    alt="Appliance Repair"
                  />
                  <Image
                    w={300}
                    src="https://ik.imagekit.io/yzrrrgg3d/professional/42154-removebg-preview.png?updatedAt=1749990094222"
                    alt="Appliance Technician"
                  />
                </Group>
              </Grid.Col>
            </Grid>
          </Card>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
