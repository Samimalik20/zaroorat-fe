import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import SignIn from "../pages/auth/SignIn";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import VerifyOtp from "../pages/auth/VerifyOtp";
import TwoFactorAuth from "../pages/auth/TwoFactorAuth";
import RouteGuard from "../guards/RouteGuard";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import AuthLayout from "../pages/auth/AuthLayout";
import SignUp from "../pages/auth/SignUp";
import LandingPage from "../pages/components/LandingPage";
import { Settings } from "../pages/settings/Settings";
import CityDetails from "../pages/components/CityDetail";
import ElectricianServices from "../pages/components/ElectricianServices";
import RoleGuard from "../guards/RoleGuard";
import { Role } from "../interfaces/ICommonIconProps";
import CityManagers from "../pages/dashboard/CityManagers";
import Services from "../pages/dashboard/Services";
import CitySalesPerson from "../pages/dashboard/CitySalesPersons";
import ServicesRequests from "../pages/dashboard/ServicesRequests";
import ACServices from "../pages/components/AC-Services";
import PlumberServices from "../pages/components/PlumberService";
import CarpenterServices from "../pages/components/CarpenterService";
import HomeCleaningServices from "../pages/components/HomeCleaning";
import PainterServices from "../pages/components/PaintingService";
import MyAccount from "../pages/components/MyAccount";
import Bookings from "../pages/components/MyBookings";
import MyJobs from "../pages/components/MyJobs";
import ProfessionalOnboarding from "../pages/components/ProfessionalOnboarding";
import ForeignJobOnboarding from "../pages/components/ForeignJobApplication";
import JobIndexing from "../pages/components/JobIndexing";
import JobPostForm from "../pages/components/JobForm";
import JobManagement from "../pages/components/JobManagement";
import CityProfessionals from "../pages/dashboard/CityProfessionals";
import Professionals from "../pages/dashboard/Professionals";
import SalesPersons from "../pages/dashboard/SalesPersons";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/city/:cityId",
    element: <CityDetails />,
  },
  {
    path: "/electrician-services",
    element: <ElectricianServices />,
  },
  {
    path: "/ac-services",
    element: <ACServices />,
  },
  {
    path: "/plumber-services",
    element: <PlumberServices />,
  },
  {
    path: "/carpenter-services",
    element: <CarpenterServices />,
  },
  {
    path: "/cleaning-services",
    element: <HomeCleaningServices />,
  },
  {
    path: "/painting-services",
    element: <PainterServices />,
  },
  {
    path: "/professional-onboarding",
    element: <ProfessionalOnboarding />,
  },
  {
    path: "/job-application",
    element: <ForeignJobOnboarding />,
  },
  {
    path: "/job-indexing",
    element: <JobIndexing />,
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "verify-otp",
        element: <VerifyOtp />,
      },
      {
        path: "two-factor-auth",
        element: <TwoFactorAuth />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <RouteGuard />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: (
              <RoleGuard allowedRoles={[Role.ADMIN]}>
                <Dashboard />
              </RoleGuard>
            ),
          },
          {
            path: "settings",
            element: <Settings />,
          },

          {
            path: "city-managers",
            element: (
              <RoleGuard allowedRoles={[Role.ADMIN]}>
                <CityManagers />
              </RoleGuard>
            ),
          },
          {
            path: "jobs",
            element: (
              <RoleGuard allowedRoles={[Role.ADMIN]}>
                <JobManagement />
              </RoleGuard>
            ),
          },
          {
            path: "job-form",
            element: (
              <RoleGuard allowedRoles={[Role.ADMIN]}>
                <JobPostForm />
              </RoleGuard>
            ),
          },
          {
            path: "services",
            element: (
              <RoleGuard allowedRoles={[Role.ADMIN, Role.CITY_MANAGER]}>
                <Services />
              </RoleGuard>
            ),
          },
          {
            path: "service-requests",
            element: (
              <RoleGuard allowedRoles={[Role.CITY_MANAGER]}>
                <ServicesRequests />
              </RoleGuard>
            ),
          },
          {
            path: "professionals",
            element: <Professionals />,
          },
          {
            path: "city-salesmans",
            element: <CitySalesPerson />,
          },
          {
            path: "salesmans",
            element: <SalesPersons />,
          },
          {
            path: "city-professionals",
            element: <CityProfessionals />,
          },
        ],
      },
    ],
  },

  {
    path: "/account",
    element: <MyAccount />,
    children: [
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "my-jobs",
        element: <MyJobs />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },

  { path: "*", element: <PageNotFound /> },
]);

export default routes;
