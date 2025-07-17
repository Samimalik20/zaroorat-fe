import {
  Text,
  Grid,
  Group,
  Stack,
  Card,
  Button,
  Divider,
  ThemeIcon,
  Badge,
  Select,
  Container,
  ActionIcon,
  Menu,
  Skeleton,
  TextInput,
  Alert,
  Modal,
  Title,
} from "@mantine/core";

import { useNavigate } from "react-router-dom";
import IconBriefCase from "../../assets/icons/IconBriefCase";
import IconBuilding from "../../assets/icons/IconBuilding";
import IconMapPin from "../../assets/icons/IconMapPin";
import IconCash from "../../assets/icons/IconCash";
import IconClock from "../../assets/icons/IconClock";
import IconCalendar from "../../assets/icons/IconCalendar";
import IconDots from "../../assets/icons/IconDots";
import IconPencilOutlined from "../../assets/icons/IconPencilOutlined";
import IconTrashOutlined from "../../assets/icons/IconTrashOutlined";
import useGetJobs from "../../hooks/useGetJobs";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";
import { notifications } from "@mantine/notifications";
import { Job } from "../../http/Api";

export default function JobManagement() {
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [job, setJob] = useState<Job | undefined>(undefined);

  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure();
  const { jobs, isLoading } = useGetJobs({
    category,
    country,
  });

  const handleOpenModal = (job: Job) => {
    setJob(job);
    open();
  };

  const handleCloseModal = () => {
    setJob(undefined);
    close();
  };
  const queryClient = useQueryClient();
  const { mutate: updateJob } = useMutation({
    mutationFn: ({ id, data }: { id: any; data: any }) =>
      http.jobs.jobsControllerUpdate(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
      notifications.show({
        message: "Status updated sucessfully!",
      });
      handleCloseModal();
    },
  });
  const handleUpdateStatus = () => {
    updateJob({
      id: job?._id,
      data: {
        isActive: job?.isActive === true ? false : true,
      },
    });
  };
  const { mutate: deleteJOb } = useMutation({
    mutationFn: (id: string) => http.jobs.jobsControllerRemove(id),
    onSuccess: () => {
      notifications.show({
        message: "Job deleted Sucessfully!",
      });
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
    },
  });

  const handleDelete = (id: string) => {
    deleteJOb(id);
  };

  return (
    <>
      <Container size="xl" px="xl">
        {/* Filters */}
        <Group justify="space-between">
          <Title>Jobs</Title>
          <Group justify="end" align="center">
            <Select
              label="Job Category"
              data={[
                "Electrician",
                "Plumber",
                "Welder",
                "Mechanic",
                "Painter",
                "Carpenter",
              ]}
              value={category}
              onChange={(value) => setCategory(value || undefined)}
              placeholder="Select"
              clearable
            />
            <TextInput
              label="Country"
              value={country}
              placeholder="Search By Country"
              onChange={(e) => setCountry(e.currentTarget.value)}
            />
            <Button mt={24} onClick={() => navigate("/dashboard/job-form")}>
              Create New Job
            </Button>
          </Group>
        </Group>
        <div>
          {isLoading ? (
            <Stack>
              <Skeleton height={50} circle animate />
              <Skeleton height={50} animate />
              <Skeleton height={50} animate />
            </Stack>
          ) : (
            <>
              {jobs?.length === 0 ? (
                <Alert title="No jobs found" color="gray" mt="lg">
                  No jobs match the selected filters. Try adjusting the filters
                  or creating a new job post.
                </Alert>
              ) : (
                <Grid gutter="xl" mt={12}>
                  {jobs?.map((job, ind) => (
                    <Grid.Col span={{ base: 12, sm: 6, lg: 4 }} key={ind}>
                      <Card shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between" mb="sm">
                          <Badge color="cyan" variant="light">
                            {job?.category}
                          </Badge>
                          <Group justify="space-between">
                            <Badge color="cyan" variant="light">
                              {job?.isActive === true ? "Active" : "Blocked"}
                            </Badge>
                            <Menu shadow="md" width={160}>
                              <Menu.Target>
                                <ActionIcon
                                  variant="light"
                                  color="gray"
                                  size="lg"
                                >
                                  <IconDots size={18} />
                                </ActionIcon>
                              </Menu.Target>

                              <Menu.Dropdown>
                                <Menu.Item
                                  leftSection={<IconBriefCase size={16} />}
                                  onClick={() => handleOpenModal(job)}
                                >
                                  {job?.isActive === true ? "Block" : "Active"}
                                </Menu.Item>
                                <Menu.Item
                                  leftSection={<IconPencilOutlined size={16} />}
                                  onClick={() =>
                                    navigate("/dashboard/job-form", {
                                      state: {
                                        job: job,
                                      },
                                    })
                                  }
                                >
                                  Edit
                                </Menu.Item>
                                <Menu.Item
                                  color="red"
                                  leftSection={<IconTrashOutlined size={16} />}
                                  onClick={() => handleDelete(job._id)}
                                >
                                  Delete
                                </Menu.Item>
                              </Menu.Dropdown>
                            </Menu>
                          </Group>
                        </Group>

                        <Text fw={700} size="lg" mb={4}>
                          {job?.title}
                        </Text>

                        <Text c="dimmed" size="sm" lineClamp={3}>
                          {job?.description}
                        </Text>

                        <Divider my="sm" />

                        <Stack gap={6} mb="md">
                          <Group gap="xs">
                            <ThemeIcon color="blue" variant="light" size={24}>
                              <IconBuilding size={16} />
                            </ThemeIcon>
                            <Text size="sm">
                              <strong>Company:</strong> {job.companyName}
                            </Text>
                          </Group>

                          <Group gap="xs">
                            <ThemeIcon color="orange" variant="light" size={24}>
                              <IconMapPin size={16} />
                            </ThemeIcon>
                            <Text size="sm">
                              <strong>Location:</strong> {job.city},{" "}
                              {job.country}
                            </Text>
                          </Group>

                          <Group gap="xs">
                            <ThemeIcon color="green" variant="light" size={24}>
                              <IconCash size={16} />
                            </ThemeIcon>
                            <Text size="sm">
                              <strong>Salary:</strong>{" "}
                              {job.salary?.amount
                                ? `${job.salary.amount} ${job.salary.currency}`
                                : "Not specified"}
                            </Text>
                          </Group>

                          <Group gap="xs">
                            <ThemeIcon color="orange" variant="light" size={24}>
                              <IconClock size={16} />
                            </ThemeIcon>
                            <Text size="sm">
                              <strong>Experience:</strong>{" "}
                              {job.experienceRequired}
                            </Text>
                          </Group>

                          <Group gap="xs">
                            <ThemeIcon color="red" variant="light" size={24}>
                              <IconCalendar size={16} />
                            </ThemeIcon>
                            <Text size="sm">
                              <strong>Interview:</strong>{" "}
                              {job.interviewDetails?.date
                                ? new Date(
                                    job.interviewDetails.date
                                  ).toLocaleDateString()
                                : "Not scheduled"}
                            </Text>
                          </Group>
                        </Stack>
                      </Card>
                    </Grid.Col>
                  ))}
                </Grid>
              )}
            </>
          )}
        </div>
        {/* No Jobs Found */}

        {/* Job Listings */}
      </Container>

      <Modal opened={opened} onClose={handleCloseModal} centered>
        <Text size="sm" mb="md">
          Are you sure you want to update the status?
        </Text>

        <Button
          fullWidth
          color="green"
          mb="sm"
          onClick={() => handleUpdateStatus()}
        >
          Yes, Update Status
        </Button>
        <Button fullWidth variant="outline" color="gray" onClick={close}>
          Cancel
        </Button>
      </Modal>
    </>
  );
}
