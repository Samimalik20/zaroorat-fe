import {
  Card,
  Button,
  Flex,
  Image,
  Anchor,
  Center,
  Stack,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Role } from "../../interfaces/ICommonIconProps";

function MyNavbar() {
  const isSmallScreen = useMediaQuery("(max-width: 56.25em)");
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleNavigate = () => {
    if (user?.role === Role.ADMIN) {
      navigate("/dashboard");
    } else if (user?.role === Role.CITY_MANAGER) {
      navigate("/dashboard/city-salesmans");
    } else if (user?.role === Role.SALESMAN) {
      navigate("/dashboard/professionals");
    }
  };

  return (
    <Card bg={"green"} h="auto" p={20} shadow="xl" radius={0}>
      <Center w="100%">
        {isSmallScreen ? (
          <Stack align="center" gap="md" w="100%">
            <Image
              w={180}
              src="https://ik.imagekit.io/yzrrrgg3d/professional/horizontal-removebg-preview%20(1).png?updatedAt=1749904445628"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />

            <Flex wrap="wrap" justify="center" gap="sm">
              {[
                "Our Services",
                "About Us",
                "Become Professional",
                "Browse Jobs",
              ].map((label, index) => (
                <Anchor
                  key={index}
                  c="red"
                  fz={14}
                  onClick={() => {
                    const sectionPath =
                      label === "Our Services"
                        ? "/"
                        : label === "About Us"
                        ? "/"
                        : label === "Become Professional"
                        ? "/professional-onboarding"
                        : "/job-indexing";

                    navigate(sectionPath);
                  }}
                >
                  {label}
                </Anchor>
              ))}
            </Flex>

            <Flex justify="center" gap="sm" wrap="wrap">
              {user ? (
                <Button
                  variant="outline"
                  color="white"
                  size="sm"
                  onClick={handleNavigate}
                >
                  Dashboard
                </Button>
              ) : (
                <>
                  <Button
                    bg="#309945"
                    c="white"
                    size="sm"
                    onClick={() => navigate("/auth/sign-in")}
                    w={120}
                  >
                    Login
                  </Button>
                  <Button
                    bg="transparent"
                    size="sm"
                    style={{ border: "2px solid white" }}
                    onClick={() => navigate("/auth/sign-up")}
                  >
                    GET STARTED
                  </Button>
                </>
              )}
            </Flex>
          </Stack>
        ) : (
          <Flex justify="space-between" align="center" w="100%">
            <Image
              w={275}
              src="https://ik.imagekit.io/yzrrrgg3d/professional/horizontal-removebg-preview%20(1).png?updatedAt=1749904445628"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />

            <Flex gap={30}>
              {[
                "Our Services",
                "About Us",
                "Become Professional",
                "Browse Jobs",
              ].map((label, index) => (
                <Anchor
                  key={index}
                  c="white"
                  fz={16}
                  onClick={() => {
                    const sectionPath =
                      label === "Our Services"
                        ? "/"
                        : label === "About Us"
                        ? "/"
                        : label === "Become Professional"
                        ? "/professional-onboarding"
                        : "/job-indexing";

                    navigate(sectionPath);
                  }}
                >
                  {label}
                </Anchor>
              ))}
            </Flex>

            <Flex gap={10}>
              {user ? (
                <Button
                  variant="outline"
                  color="white"
                  onClick={handleNavigate}
                >
                  Dashboard
                </Button>
              ) : (
                <>
                  <Button
                    bg="#309945"
                    c="white"
                    onClick={() => navigate("/auth/sign-in")}
                    w={150}
                  >
                    Login
                  </Button>
                  <Button
                    bg="transparent"
                    style={{ border: "2px solid white" }}
                    onClick={() => navigate("/auth/sign-up")}
                  >
                    GET STARTED
                  </Button>
                </>
              )}
            </Flex>
          </Flex>
        )}
      </Center>
    </Card>
  );
}

export default MyNavbar;
