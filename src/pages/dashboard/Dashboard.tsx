import { Card, Title, Text, Group, SimpleGrid } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { Users, UserCheck, CalendarPlus, Briefcase, ClipboardList, CheckCircle, UserPlus, UserX } from "lucide-react";
import http from "../../http";

const iconMap:any = {
  totalProfessionals: { icon: Briefcase, label: "Total Professionals", color: "#1e88e5" },
  totalCustomers: { icon: Users, label: "Total Customers", color: "#43a047" },
  totalBookings: { icon: ClipboardList, label: "Total Bookings", color: "#f4511e" },
  foreignJobApplications: { icon: CalendarPlus, label: "Foreign Job Applications", color: "#8e24aa" },
  activeProfessionals: { icon: UserCheck, label: "Active Professionals", color: "#3949ab" },
  completedBookings: { icon: CheckCircle, label: "Completed Bookings", color: "#00acc1" },
  activeUsers: { icon: UserCheck, label: "Active Users", color: "#7cb342" },
  inactiveUsers: { icon: UserX, label: "Inactive Users", color: "#e53935" },
  newUsersThisMonth: { icon: UserPlus, label: "New Users This Month", color: "#fb8c00" },
};

export default function Dashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["adminAnalytics"],
    queryFn: () => http.auth.userControllerGetStats()
  });

  const stats = data?.data;
  if(isLoading){
    return(
      <>
      </>
    )
  }
  return (
    <div className="p-6">
      <Title order={2} mb="md">Admin Analytics</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
        {stats &&
          Object.entries(stats).map(([key, value]) => {
            const iconInfo = iconMap[key];
            if (!iconInfo) return null;
            const IconComponent = iconInfo.icon;
            return (
              <Card shadow="md" padding="lg" radius="lg" withBorder key={key}>
                <Group>
                  <IconComponent size={32} color={iconInfo.color} />
                  <div>
                    <Text size="lg" fw={700}>{value}</Text>
                    <Text color="dimmed" size="sm">{iconInfo.label}</Text>
                  </div>
                </Group>
              </Card>
            );
          })}
      </SimpleGrid>
    </div>
  );
}
