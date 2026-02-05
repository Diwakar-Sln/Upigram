import { createBrowserRouter as Router } from "react-router-dom";
// import App from "../App";
// Layouts
import AuthLayout from "../layout/AuthLayout";
import KycOnboardingLayout from "../layout/KycOnboardingLayout";
import MainLayout from "../layout/MainLayout";

// Pages
import Login from "../pages/auth/Login";
import Forgotpassword from "../pages/auth/Forgotpassword";
import OtpVerification from "../pages/auth/OtpVerification";
import Setpassword from "../pages/auth/Setpassword";
import KycBoard from "../pages/kycOnboard/KycBoard";
import Dashboard from "../pages/Dashboard";

const router = Router([
  {
    path: "*",
    element: <div>Not found</div>,
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <Forgotpassword />,
      },
      {
        path: "/password-otp",
        element: <OtpVerification />,
      },
      {
        path: "/set-password",
        element: <Setpassword />,
      },
    ],
  },
  {
    path: "/merchant",
    element: <KycOnboardingLayout />,
    children: [
      {
        path: "/merchant",
        element: <KycBoard />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
