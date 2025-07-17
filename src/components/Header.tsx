import {
  ActionIcon,
  Avatar,
  Card,
  Group,
  Menu,
  Stack,
  Text,
  Title,
  useMantineTheme,
  Image,
} from "@mantine/core";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import getInitials from "../utils/getInitials";
import IconLogout from "../assets/icons/IconLogout";
import IconSettings from "../assets/icons/IconSettings";
import { useMediaQuery } from "@mantine/hooks";

function Header() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Card w={isMobile ? 300 : "100%"} withBorder={false} shadow="xs" radius={0}>
      <Group justify="space-between" align="center">
        <Group justify="center" align="center" visibleFrom="md">
          <Image
            w={50}
            src="https://ik.imagekit.io/yzrrrgg3d/professional/logo.jfif?updatedAt=1748796374280"
          />
          <Title
            order={2}
            style={{ fontFamily: "cursive", cursor: "pointer" }}
            c={"blue"}
            onClick={() => navigate("/")}
          >
            Professional
            <span
              style={{
                color: "red",
                marginLeft: 4,
              }}
            >
              Service
            </span>
          </Title>
        </Group>

        <Group>
          <Menu>
            <Menu.Target>
              <ActionIcon variant="subtle" size={"lg"}>
                <IconSettings withOutline fill="none" size={32} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>
                <Group>
                  <Avatar
                    size={52}
                    src={user && user.profileImage ? user.profileImage.url : ""}
                  />
                  <Stack gap={0}>
                    <Text>{user?.email}</Text>
                    <Text>{user?.fullName}</Text>
                  </Stack>
                </Group>
              </Menu.Label>
              <Menu.Divider />
              <Menu.Item
                onClick={() => navigate("/dashboard/settings")}
                leftSection={<IconSettings fill="none" withOutline />}
              >
                Profile Settings
              </Menu.Item>
              <Menu.Item
                onClick={logout}
                color="red"
                leftSection={<IconLogout fill="none" color="red" />}
              >
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Avatar
            size={"lg"}
            src={user && user.profileImage ? user.profileImage.url : ""}
            name={getInitials(user?.fullName ?? "")}
          />
        </Group>
      </Group>
    </Card>
  );
}

export default Header;
