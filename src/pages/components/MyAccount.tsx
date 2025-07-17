import {
  Container,
  Grid,
  Card,
  Stack,
  Flex,
  Avatar,
  CheckIcon,
  Divider,
  Text,
  NavLink
} from "@mantine/core";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import MyNavbar from "../auth/Navbar";
import Footer from "./Footer";
const navLinks = [
  {
    label: "My Bookings",
    path: "/account/bookings",
  },
  {
    label: "My Jobs",
    path: "/account/my-jobs",
  },
  {
    label: "Settings",
    path: "/account/settings",
  },
];
export default function MyAccount() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  return (
    <>
      <MyNavbar />
      <Container
        bg={"#f2f4f8ff"}
        w={"100vw"}
        fluid
        px={40}
        py={80}
        style={{ border: "2px solid #e2e8f0" }}
      >
        <Grid>
          <Grid.Col
            span={{
              base: 12,
              xs: 12,
              sm: 3,
              md: 3,
              lg: 3,
              xl: 3,
            }}
          >
            <Card
              withBorder
              radius="md"
              shadow="sm"
              p="lg"
              w={280}
              style={{ border: "2px solid #e2e8f0" }}
            >
              <Stack gap="xs">
                {/* Profile Header */}
                <Flex align="center" gap={20}>
                  <Avatar src={user?.profileImage?.url} size="lg" radius="xl" />

                  <Stack gap={0}>
                    <Text fw={600} fz={22}>
                      {user?.fullName}
                    </Text>
                    <Text fz={12}>{user?.email}</Text>
                  </Stack>
                </Flex>

                {/* Navigation Links */}
                <Stack gap={2} mt="sm">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      label={link.label}
                      leftSection={<CheckIcon />}
                      active={currentPath.includes(link.path)}
                      onClick={() => navigate(link.path)}
                      styles={(theme, params) => ({
                        root: {
                          backgroundColor: params.active
                            ? theme.colors.green[6]
                            : undefined,
                          color: params.active ? theme.white : theme.black,
                          borderRadius: theme.radius.md,
                          fontWeight: params.active ? 600 : 400,
                        },
                        label: {
                          color: params.active ? theme.white : undefined,
                        },
                        icon: {
                          color: params.active ? theme.white : undefined,
                        },
                      })}
                    />
                  ))}
                </Stack>

                <Divider my="sm" />

                {/* Sign Out */}
                <NavLink
                  fw={500}
                  c={"#f06471"}
                  label="Sign Out"
                  leftSection={<CheckIcon />}
                  color="red"
                  variant="light"
                  onClick={() => logout()}
                />
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              xs: 12,
              sm: 9,
              md: 9,
              lg: 9,
              xl: 9,
            }}
          >
            <Outlet />
          </Grid.Col>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
