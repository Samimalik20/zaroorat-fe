import { Group, SegmentedControl, Stack, Title } from "@mantine/core";
import { useMemo, useState } from "react";
import MyPendingBookings from "./MyPendingBooking";


const Bookings = () => {
  const [selectedValue, setSelectedValue] = useState("upcoming");

  const [titleToRender, statusComponent] = useMemo(() => {
    if (selectedValue === "upcoming")
      return ["Pending Bookings", <MyPendingBookings />];
    if (selectedValue === "completed")
      return ["Completed Bookings", <MyPendingBookings />];

    return ["Cancelled Bookings", <MyPendingBookings />];
  }, [selectedValue]);

  return (
    <>
      <Stack>
        <Group justify="space-between">
          <Title ml={12} order={2}>{titleToRender}</Title>
          <SegmentedControl
            value={selectedValue}
            onChange={setSelectedValue}
            data={[
              { label: "Pending Bookings", value: "upcoming" },
              { label: "Completed Bookings", value: "completed" },
              { label: "Cancelled Bookings", value: "cancelled" },
            ]}
            color={"green"}
            transitionDuration={600}
            transitionTimingFunction="linear"
          />
        </Group>

        {statusComponent}
      </Stack>
    </>
  );
};
export default Bookings;
