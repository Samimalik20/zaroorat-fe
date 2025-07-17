import {
  Card,
  Text,
  Badge,
  Group,
  Image,
  Title,
  Divider,
  Tooltip,
  SimpleGrid,
  ThemeIcon,
  Box,
} from "@mantine/core";

import dayjs from "dayjs";
import { Booking } from "../../http/Api";
import IconCalendar from "../../assets/icons/IconCalendar";
import IconClock from "../../assets/icons/IconClock";
import IconMapPin from "../../assets/icons/IconMapPin";
import IconMicrophone from "../../assets/icons/IconMicrophone";
import IconShieldCheck from "../../assets/icons/IconShield";
import IconFileFilled from "../../assets/icons/IconFileFilled";
import IconUserFilled from "../../assets/icons/IconUserFilled";
import IconFileOutlined from "../../assets/icons/IconFileOutlined";

interface BookingCardProps {
  booking?: Booking;
}

export function BookingCard({ booking }: BookingCardProps) {
  if (!booking) return null;

  return (
    <Card withBorder radius="lg" shadow="md" padding="lg">
      <Group justify="space-between" mb="sm">
        <Title order={4} c="blue.8">
          Booking #{booking._id.slice(-6).toUpperCase()}
        </Title>
        <Badge variant="filled">{booking.status}</Badge>
      </Group>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
        <Group align="flex-start" gap="xs">
          <ThemeIcon color="cyan" variant="light" radius="xl">
            <IconUserFilled size={18} />
          </ThemeIcon>
          <Text size="sm">User: {booking.user.fullName}</Text>
        </Group>

        {booking.professional && (
          <Group gap="xs">
            <ThemeIcon color="green" variant="light" radius="xl">
              <IconShieldCheck />
            </ThemeIcon>
            <Text size="sm">Professional: {booking.professional.name}</Text>
          </Group>
        )}

        <Group gap="xs">
          <ThemeIcon color="orange" variant="light" radius="xl">
            <IconCalendar size={18} />
          </ThemeIcon>
          <Text size="sm">
            Date: {dayjs(booking.date).format("DD MMM, YYYY")}
          </Text>
        </Group>

        <Group gap="xs">
          <ThemeIcon color="grape" variant="light" radius="xl">
            <IconClock size={18} />
          </ThemeIcon>
          <Text size="sm">Time: {booking.time}</Text>
        </Group>

        <Group gap="xs">
          <ThemeIcon color="red" variant="light" radius="xl">
            <IconMapPin size={18} />
          </ThemeIcon>
          <Text size="sm">City: {booking.city}</Text>
        </Group>

        <Group gap="xs">
          <ThemeIcon color="blue" variant="light" radius="xl">
            <IconFileFilled size={18} />
          </ThemeIcon>
          <Text size="sm">Type: {booking.type}</Text>
        </Group>

        {booking.address && (
          <Box
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              marginTop: 8,
            }}
          >
            <Box style={{ width: "10%" }}>
              <ThemeIcon color="violet" variant="light" radius="xl" size="lg">
                <IconMapPin size={18} />
              </ThemeIcon>
            </Box>
            <Box style={{ width: "90%" }}>
              <Text size="sm">
                <Text span fw={500}>
                  Address:
                </Text>{" "}
                <Text span style={{ wordBreak: "break-word" }}>
                  {booking.address}
                </Text>
              </Text>
            </Box>
          </Box>
        )}

        {booking.description && (
          <Group gap="xs">
            <ThemeIcon color="gray" variant="light" radius="xl">
              <IconFileOutlined size={18} />
            </ThemeIcon>
            <Text size="sm" c="dimmed">
              {booking.description}
            </Text>
          </Group>
        )}
      </SimpleGrid>

      {booking.audio && (
        <Box
          mt="md"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Box style={{ width: "10%" }}>
            <ThemeIcon color="teal" variant="light" radius="xl" size="lg">
              <IconMicrophone size={18} />
            </ThemeIcon>
          </Box>
          <Box style={{ width: "90%" }}>
            <audio controls src={booking.audio.url} style={{ width: "100%" }} />
          </Box>
        </Box>
      )}

      {booking.images && booking.images.length > 0 && (
        <>
          <Divider label="Images" my="sm" />
          <SimpleGrid cols={{ base: 2, sm: 2, md: 3, lg: 4 }} spacing="sm">
            {booking.images.map((img, i) => (
              <Tooltip key={i} label={img.fileId}>
                <Image
                  src={img.url}
                  alt={img.fileId}
                  radius="md"
                  w="100%"
                  h={80}
                  fit="cover"
                />
              </Tooltip>
            ))}
          </SimpleGrid>
        </>
      )}
    </Card>
  );
}
