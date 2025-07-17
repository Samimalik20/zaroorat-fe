import { NavLink, useMantineTheme } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import IconLayoutDashboard from "../assets/icons/IconDotsUnion";
import IconWorld from "../assets/icons/IconWorld";
import IconChartHistogram from "../assets/icons/IconChartHistogram";
import IconMessageChatbot from "../assets/icons/IconMessageChatbot";
import IconTopologyStar from "../assets/icons/IconTopologyStar";
import IconUsersGroup from "../assets/icons/IconUsersGroup";
import IconReceiptDollar from "../assets/icons/IconReceiptDollar";
import IconSettings from "../assets/icons/IconSettings";
import { useAuth } from "../contexts/AuthContext";
import { Role } from "../interfaces/ICommonIconProps";
import IconUsers from "../assets/icons/IconUser";
import IconBriefCase from "../assets/icons/IconBriefCase";
import IconTwoUsers from "../assets/icons/IconUsers";
import IconUsersPlus from "../assets/icons/IconUsersPlus";

interface Links {
  label: string;
  path: string;
  icon: string;
}

const adminLinks: Links[] = [
  {
    label: "Dashboard",
    icon: "IconLayoutDashboard",
    path: "/dashboard",
  },
  {
    label: "City Managers",
    icon: "IconTwoUsers",
    path: "/dashboard/city-managers",
  },
   {
    label: "Salesman",
    icon: "IconUsersPlus",
    path: "/dashboard/salesmans",
  },
  {
    label: "Professionals",
    icon: "IconUsersGroup",
    path: "/dashboard/professionals",
  },
 
  {
    label: "Jobs",
    icon: "IconBriefCase",
    path: "/dashboard/jobs",
  },
  {
    label: "Settings",
    icon: "IconSettings",
    path: "/dashboard/settings",
  },
];

const managerLinks: Links[] = [
  {
    label: "Salesman",
    icon: "IconUsersGroup",
    path: "/dashboard/city-salesmans",
  },
  {
    label: "Professionals",
    icon: "IconUsers",
    path: "/dashboard/professionals",
  },
  {
    label: "Service Requests",
    icon: "IconBriefCase",
    path: "/dashboard/service-requests",
  },
  {
    label: "Settings",
    icon: "IconSettings",
    path: "/dashboard/settings",
  },
];

const SalesPersonLinks: Links[] = [
  {
    label: "Professionals",
    icon: "IconUsersGroup",
    path: "/dashboard/city-professionals",
  },
  {
    label: "Settings",
    icon: "IconSettings",
    path: "/dashboard/settings",
  },
];

function Sidenav() {
  const { pathname } = useLocation();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { user } = useAuth();

  function Icon({
    name,
    isActive,
    size,
  }: {
    name: string;
    isActive: boolean;
    size: number;
  }) {
    const color = isActive ? theme.colors.blue[4] : theme.colors.gray[5];
    const icons: Record<string, React.ReactNode> = {
      IconLayoutDashboard: (
        <IconLayoutDashboard
          fill="none"
          withOutline
          color={color}
          size={size}
        />
      ),
      IconWorld: (
        <IconWorld fill="none" withOutline color={color} size={size} />
      ),
      IconBriefCase: (
        <IconBriefCase fill="none" withOutline color={color} size={size} />
      ),
      IconUsersGroup: (
        <IconUsersGroup fill="none" withOutline color={color} size={size} />
      ),
      IconTwoUsers: (
        <IconTwoUsers fill="none" withOutline color={color} size={size} />
      ),
      IconUsersPlus: (
        <IconUsersPlus fill="none" withOutline color={color} size={size} />
      ),
      IconUsers: (
        <IconUsers fill="none" withOutline color={color} size={size} />
      ),
      IconTopologyStar: (
        <IconTopologyStar fill="none" withOutline color={color} size={size} />
      ),
      IconReceiptDollar: (
        <IconReceiptDollar fill="none" withOutline color={color} size={size} />
      ),
      IconChartHistogram: (
        <IconChartHistogram fill="none" withOutline color={color} size={size} />
      ),
      IconMessageChatbot: (
        <IconMessageChatbot fill="none" withOutline color={color} size={size} />
      ),
      IconSettings: (
        <IconSettings fill="none" withOutline color={color} size={size} />
      ),
    };

    return <>{icons[name] || null}</>;
  }

  let renderedLinks: Links[] = [];

  if (user?.role === Role.CITY_MANAGER) {
    renderedLinks = managerLinks;
  } else if (user?.role === Role.SALESMAN) {
    renderedLinks = SalesPersonLinks;
  } else {
    renderedLinks = adminLinks;
  }

  return (
    <div>
      {renderedLinks.map((link, index) => (
        <NavLink
          key={index}
          label={link.label}
          leftSection={
            link.icon ? (
              <Icon
                name={link.icon}
                isActive={pathname === link.path}
                size={18}
              />
            ) : null
          }
          active={pathname === link.path}
          onClick={() => navigate(link.path)}
          color="blue"
        />
      ))}
    </div>
  );
}

export default Sidenav;
