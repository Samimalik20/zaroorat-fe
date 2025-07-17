import {
  Center,
  Container,
  Image,
  Grid,
  Group,
  Text,
  Button,
  Stack,
} from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
function AuthLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isSignInPage = location.pathname === "/auth/sign-in";
  const isSmallScreen = useMediaQuery("(max-width: 56.25em)");

  const hanleClick = () => {
    if (isSignInPage) {
      navigate("/auth/sign-up");
    } else {
      navigate("/auth/sign-in");
    }
  };
  return (
    <Container fluid h={"100vh"} w={"100vw"}>
      <Grid h={"100vh"} w={"100%"} m={0} p={0}>
        <Grid.Col
          span={isSmallScreen ? 12 : 6}
          display={isSmallScreen ? "none" : "block"}
        >
          <Center h={"100%"} w={"100%"}>
            <Stack gap={0} align="center">


            <Image
            w={'70%'}
              src={
                "https://ik.imagekit.io/yzrrrgg3d/professional/horizontal-removebg-preview.png?updatedAt=1749903689213"
              }
              style={{
                cursor:"pointer"
              }}
              onClick={()=>navigate('/')}
            />
            <Image
            w={'70%'}
              src={
                "https://ik.imagekit.io/yzrrrgg3d/professional/Construction%20worker-amico.png?updatedAt=1748793075244"
              }
            />
            </Stack>

          </Center>
        </Grid.Col>
        <Grid.Col
          span={isSmallScreen ? 12 : 6}
          h={"100vh"}
          style={{
            overflowY: "auto",
           
          }}
        >
          <Group justify="end" mt={12}>
            <Text size="sm">
              {isSignInPage
                ? "Dont have an account?"
                : "Already have an account?"}
            </Text>
            <Button size="xs" onClick={() => hanleClick()}>
              {isSignInPage ? "Sign Up" : "Sign In"}
            </Button>
          </Group>

          <Center mt={isSmallScreen?66:36} h={'80%'} >
            <Outlet />
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default AuthLayout;
