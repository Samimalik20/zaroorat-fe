import {
  Stack,
  Skeleton,
  Button,
  Container,
  Group,
  Title,
  Modal,
  Grid,
  Badge,
  Card,
  Text,
  ActionIcon,
  Menu,
  Divider,
  ThemeIcon,
  TextInput,
  Select,
} from "@mantine/core";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showNotification } from "@mantine/notifications";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Professional } from "../../http/Api";
import { useDisclosure } from "@mantine/hooks";
import http from "../../http";
import IconDots from "../../assets/icons/IconDots";
import IconPencilOutlined from "../../assets/icons/IconPencilOutlined";
import IconTrashOutlined from "../../assets/icons/IconTrashOutlined";
import IconMapPin from "../../assets/icons/IconMapPin";
import IconPhone from "../../assets/icons/IconPhone";
import useGetCityOfficer from "../../hooks/useGeCityOfficer";
import ProfessionalForm from "../components/ProfessionalForm";
import useGetProfessionals from "../../hooks/useGetProfessionals";
import IconPin from "../../assets/icons/IconPin";
import useGetSalesPersonWithUser from "../../hooks/useGetSalesPerson";

export default function CityProfessionals() {

  const { user } = useAuth();

  if (!user || !user._id) {
    return (
      <>
        <Stack>
          <Skeleton height={50} circle animate />
          <Skeleton height={50} animate />
          <Skeleton height={50} animate />
        </Stack>
      </>
    );
  }


const { cityOfficer } = useGetCityOfficer(user?._id);
const { salesman } = useGetSalesPersonWithUser(user?._id);

const city = React.useMemo(() => {
  if (cityOfficer?.city) return cityOfficer.city;
  if (salesman?.city) return salesman.city;
  return "";
}, [cityOfficer, salesman]);
console.log(city,'city')
const {  professionals, isLoading: isProfessionalLoading } = useGetProfessionals(city);


  const [professional, setSelectedProfessional] = useState<
    Professional | undefined
  >(undefined);

  const [address, setAddress] = useState<string>("");
  const [profession, setProfession] = useState<string | null>(null);

  // const { isLoading: isProfessionalLoading, professionals } =
  //   useGetProfessionals(cityOfficer?.city || "", address, profession);

  const [opened, { open, close }] = useDisclosure();

  const queryClient = useQueryClient();

  const handleCloseModal = () => {
    setSelectedProfessional(undefined);
    close();
  };

  const handleRecruiterModal = (professional?: Professional) => {
    if (professional) {
      setSelectedProfessional(professional);
    }
    open();
  };

  const { mutate: deleteOfficer } = useMutation({
    mutationFn: http.professionals.professionalControllerRemove,
  });
  const handleDeleteOfficer = (id: string) => {
    deleteOfficer(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["professionals"] });

        showNotification({
          message: "Professional Deleted",
        });
      },
    });
  };

  return (
    <>
      <Group justify="space-between" align="center" px={24}>
        <Title order={2}>Professionals</Title>
        <Group>
          <Select
            value={profession}
            placeholder="Search By Profession"
            data={[
              "Plumber",
              "Electrician",
              "Mechanic",
              "Carpenter",
              "AC Technician",
              "Painter",
              "Cleaner",
            ]}
            clearable
            onChange={(v) => setProfession(v)}
          />
          <TextInput
            value={address}
            placeholder="Search By Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button onClick={() => handleRecruiterModal()}>
            Add Professional
          </Button>
        </Group>
      </Group>

      <div>
        {isProfessionalLoading ? (
          <Stack>
            <Skeleton height={50} circle animate />
            <Skeleton height={50} animate />
            <Skeleton height={50} animate />
          </Stack>
        ) : (
          <Container fluid mt={12}>
            {professionals?.length === 0 ? (
              <Text mt="xl" ta="center" c="dimmed" fw={500}>
                No results found.
              </Text>
            ) : (
              <Grid>
                {professionals?.map((salesman) => (
                  <Grid.Col
                    key={salesman._id}
                    span={{
                      base: 12,
                      xs: 12,
                      sm: 6,
                      md: 6,
                      lg: 4,
                      xl: 4,
                    }}
                  >
                    <Card shadow="xl" radius="xl" padding="xl" pos={"relative"}>
                      <Group pos={"absolute"} right={30} top={20}>
                        <Menu shadow="md" width={160}>
                          <Menu.Target>
                            <ActionIcon variant="light" color="gray" size="lg">
                              <IconDots size={18} />
                            </ActionIcon>
                          </Menu.Target>

                          <Menu.Dropdown>
                            <Menu.Item
                              leftSection={<IconPencilOutlined size={16} />}
                              onClick={() => handleRecruiterModal(salesman)}
                            >
                              Edit
                            </Menu.Item>
                            <Menu.Item
                              color="red"
                              leftSection={<IconTrashOutlined size={16} />}
                              onClick={() => handleDeleteOfficer(salesman._id)}
                            >
                              Delete
                            </Menu.Item>
                          </Menu.Dropdown>
                        </Menu>
                      </Group>

                      <Stack align="center" gap="xs">
                        <Title order={3}>{salesman?.name}</Title>

                        <Badge
                          variant="gradient"
                          gradient={{ from: "blue", to: "cyan", deg: 45 }}
                          radius="md"
                        >
                          {salesman?.profession}
                        </Badge>

                        <Group gap={5}>
                          <Title order={6} size={"xs"}>
                            Key:
                          </Title>
                          <Text c={"dimmed"} size="xs">
                            {salesman._id}
                          </Text>
                        </Group>
                      </Stack>

                      <Divider my="lg" />

                      <Stack gap="sm">
                        <Group gap="xs">
                          <ThemeIcon variant="light" color="green">
                            <IconPhone size={18} />
                          </ThemeIcon>

                          <Text size="sm">
                            <strong>Phone:</strong> {salesman.phone}
                          </Text>
                        </Group>

                        {salesman.city && (
                          <Group gap="xs">
                            <ThemeIcon variant="light" color="red">
                              <IconMapPin size={18} />
                            </ThemeIcon>
                            <Text size="sm">
                              <strong>City:</strong> {salesman.city}
                            </Text>
                          </Group>
                        )}
                         {salesman.address && (
                          <div
                            style={{
                              display: "flex",
                              gap:12
                            }}
                          >
                            <ThemeIcon variant="light" color="red">
                              <IconPin size={18} />
                            </ThemeIcon>

                            <div
                              style={{
                                flex: 1,
                              }}
                            >
                              <strong>Adress:</strong> {salesman.address}
                            </div>
                          </div>
                        )}
                      </Stack>
                    </Card>
                  </Grid.Col>
                ))}
              </Grid>
            )}
          </Container>
        )}
      </div>

      <Modal
        opened={opened}
        onClose={handleCloseModal}
        title="Create a Professional"
        size="lg"
      >
        <ProfessionalForm
          onClose={close}
          recruiter={professional}
          district={city}
          isProfessional={false}
        />
      </Modal>
    </>
  );
}
