import {
  Avatar,
  Button,
  Card,
  Container,
  Group,
  Stack,
  Text,
  Title,
  Modal,
  Divider,
  ThemeIcon,
  Center,
  ActionIcon,
  Menu,
  Grid,
  Skeleton,
  SimpleGrid,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CityManagerForm } from "../components/CityManagerForm";
import IconMail from "../../assets/icons/IconMail";
import IconPhone from "../../assets/icons/IconPhone";
import IconDots from "../../assets/icons/IconDots";
import IconPencilOutlined from "../../assets/icons/IconPencilOutlined";
import IconTrashOutlined from "../../assets/icons/IconTrashOutlined";
import IconUserFilled from "../../assets/icons/IconUserFilled";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";
import { showNotification } from "@mantine/notifications";
import { CityOfficer } from "../../http/Api";
import useGetCityManagers from "../../hooks/usegetDistrictOfficers";
import IconLocation from "../../assets/icons/IconLocation";

export default function CityManagers() {
  const [opened, { open, close }] = useDisclosure();
  const [
    openedDetailsModal,
    { open: openDetailsModal, close: closeDetailModal },
  ] = useDisclosure();
  const queryClient = useQueryClient();

  const { isLoading, managers } = useGetCityManagers();
  const [officer, setSelecedOfficer] = useState<CityOfficer | undefined>(
    undefined
  );

  const handleOpenModal = (officer: CityOfficer) => {
    setSelecedOfficer(officer);
    openDetailsModal();
  };
  const handleOpenEditModal = (officer?: CityOfficer) => {
    open();
    setSelecedOfficer(officer);
  };
  const handleCloseEditModal = () => {
    close();
    setSelecedOfficer(undefined);
  };
  const handleCloseModal = () => {
    setSelecedOfficer(undefined);
    closeDetailModal();
  };

  const { mutate: deleteOfficer } = useMutation({
    mutationFn: http.cityOfficers.cityOfficerControllerRemove,
  });
  const handleDeleteOfficer = (id: string) => {
    deleteOfficer(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["managers"] });

        showNotification({
          message: "Manager Deleted",
        });
      },
    });
  };
  if (isLoading) {
    return (
      <Stack>
        <Skeleton height={50} circle animate />
        <Skeleton height={50} animate />
        <Skeleton height={50} animate />
      </Stack>
    );
  }

  return (
    <>
      <Container fluid>
        <Stack>
          <Group justify="space-between" align="center">
            <Title order={2}>City Managers</Title>
            <Button onClick={open}>Add Manager</Button>
          </Group>

          <Grid>
            {managers?.map((officer, ind) => (
              <Grid.Col
                span={{
                  base: 12,
                  xs: 12,
                  sm: 12,
                  md: 6,
                  lg: 4,
                  xl: 3,
                }}
              >
                <Card shadow="xl" pos="relative" key={ind}>
                  <Group pos={"absolute"} right={20} top={10}>
                    <Menu shadow="md" width={160}>
                      <Menu.Target>
                        <ActionIcon variant="light" color="gray" size="lg">
                          <IconDots size={18} />
                        </ActionIcon>
                      </Menu.Target>

                      <Menu.Dropdown>
                        <Menu.Item
                          leftSection={<IconUserFilled size={16} />}
                          onClick={() => handleOpenModal(officer)}
                        >
                          Details
                        </Menu.Item>
                        <Menu.Item
                          leftSection={<IconPencilOutlined size={16} />}
                          onClick={() => handleOpenEditModal(officer)}
                        >
                          Edit
                        </Menu.Item>
                        <Menu.Item
                          color="red"
                          leftSection={<IconTrashOutlined size={16} />}
                          onClick={() => handleDeleteOfficer(officer._id)}
                        >
                          Delete
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Group>
                  <Stack gap={2}>
                    <Center>
                      <Stack align="center">
                        <Avatar
                          src={officer?.user?.profileImage?.url}
                          radius="xl"
                          size="lg"
                        />
                        <Text fw={700} size="lg">
                          {officer?.user?.fullName}
                        </Text>
                      </Stack>
                    </Center>

                    <Divider
                      label="Contact Info"
                      labelPosition="center"
                      my="sm"
                    />
                    <Group>
                      <ThemeIcon color="blue" variant="light" size={28}>
                        <IconMail size={18} />
                      </ThemeIcon>
                      <Text>{officer?.user?.email}</Text>
                    </Group>
                    <Group>
                      <ThemeIcon color="teal" variant="light" size={28}>
                        <IconPhone size={18} />
                      </ThemeIcon>
                      <Text>+92{officer?.phone}</Text>
                    </Group>
                    <Group>
                      <ThemeIcon color="green" variant="light" size={28}>
                        <IconLocation size={18} />
                      </ThemeIcon>
                      <Text>{officer?.city}</Text>
                    </Group>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>

      <Modal
        opened={opened}
        onClose={() => handleCloseEditModal()}
        title="Add City Manager"
        size={"lg"}
        centered
      >
        <CityManagerForm onClose={close} officer={officer} />
      </Modal>

      <Modal
        opened={openedDetailsModal}
        onClose={handleCloseModal}
        title="City Manager Details"
        size={"lg"}
        centered
      >
        <Card shadow="xl" padding="lg" radius="md" pos={"relative"}>
          <Stack gap="md">
            <Group justify="center">
              <Avatar size={"xl"} />
            </Group>
            <Text size="xl" fw={700} ta="center">
              {officer?.user?.fullName}
            </Text>

            <Divider label="Contact Info" labelPosition="center" my="sm" />

            <SimpleGrid cols={1} spacing="md">
              <Group>
                <ThemeIcon color="blue" variant="light" size={28}>
                  <IconMail size={18} />
                </ThemeIcon>
                <Text>{officer?.user?.email}</Text>
              </Group>

              <Group>
                <ThemeIcon color="teal" variant="light" size={28}>
                  <IconPhone size={18} />
                </ThemeIcon>
                <Text>{officer?.phone}</Text>
              </Group>

              <Group>
                <ThemeIcon color="teal" variant="light" size={28}>
                  <IconLocation size={18} />
                </ThemeIcon>
                <Text>{officer?.city}</Text>
              </Group>
            </SimpleGrid>
          </Stack>
        </Card>
      </Modal>
    </>
  );
}
