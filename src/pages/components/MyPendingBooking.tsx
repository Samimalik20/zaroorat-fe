import {
  Table,
  ScrollArea,
  Badge,
  Container,
  Stack,
  ActionIcon,
  Menu,
  Modal,
} from "@mantine/core";
import IconDots from "../../assets/icons/IconDots";
import { useDisclosure } from "@mantine/hooks";
import useGetBookings from "../../hooks/useGetBookings";
import { useState } from "react";
import { Booking } from "../../http/Api";
import { BookingCard } from "./BookingCard";

export default function MyPendingBookings() {
  const [booking, setBooking] = useState<Booking | undefined>(undefined);

  const { bookings } = useGetBookings();
  const [openedDetails, { open: openDetails, close: closeDetails }] =
    useDisclosure();

  console.log(bookings);

  const rows = bookings?.map((b, ind) => (
    <Table.Tr key={ind}>
      <Table.Td>{b.user?.fullName}</Table.Td>
      <Table.Td>
        {new Date(b.date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </Table.Td>
      <Table.Td>{b.time}</Table.Td>
      <Table.Td>{b.description || "-"}</Table.Td>
      <Table.Td>{b.address}</Table.Td>
      <Table.Td>{b.type}</Table.Td>

      <Table.Td>
        <Badge>{b.status}</Badge>
      </Table.Td>
      <Table.Td>
        <Menu shadow="md" width={160}>
          <Menu.Target>
            <ActionIcon variant="light" color="gray" size="lg">
              <IconDots size={18} />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item onClick={() => handleOpenDetailsModal(b)}>
              Show Details
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  const handleOpenDetailsModal = (booking: Booking) => {
    setBooking(booking);
    openDetails();
  };
  const handleCloseDetailsModal = () => {
    setBooking(undefined);
    closeDetails();
  };
  return (
    <>
      <Container fluid>
        <Stack>
       
          <ScrollArea>
            <Table
              striped
              highlightOnHover
              withTableBorder
              styles={{
                thead: {
                  backgroundColor: "#40c057ff",
                  color: "white",
                  height: 50,
                },
              }}
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Date</Table.Th>
                  <Table.Th>Time</Table.Th>
                  <Table.Th>Notes</Table.Th>
                  <Table.Th>Address</Table.Th>
                  <Table.Th>Professional</Table.Th>

                  <Table.Th>Status</Table.Th>
                  <Table.Th>Action</Table.Th>

                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </ScrollArea>
        </Stack>
      </Container>

      <Modal
        opened={openedDetails}
        onClose={handleCloseDetailsModal}
        size={"lg"}
      >
        <BookingCard booking={booking} />
      </Modal>
    </>
  );
}
