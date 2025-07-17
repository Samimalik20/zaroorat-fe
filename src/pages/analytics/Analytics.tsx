import { Card, Grid, Title, Text } from "@mantine/core";

const stats = [
  { label: "Total Professionals", value: 420 },
  { label: "Total Customers", value: 1350 },
  { label: "Total Bookings", value: 870 },
  { label: "Foreign Job Applications", value: 320 },
  { label: "Active Professionals", value: 380 },
  { label: "Completed Bookings", value: 650 },
  { label: "Active Users", value: 950 },
  { label: "Inactive Users", value: 150 },
  { label: "New Users This Month", value: 120 },
];

export default function Analytics() {
  return (
    <div className="p-6">
      <Title order={2} mb="md">Admin Analytics</Title>
      <Grid gutter="md">
        {stats.map((stat) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={stat.label}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Text size="lg" fw={700}>{stat.value}</Text>
              <Text color="dimmed" size="sm">{stat.label}</Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}
