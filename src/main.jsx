import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Bootstrap CSS, JS and icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Global CSS
import "./styles/main.css";
import "./styles/theme.css";
import "./styles/form.css";
import "./styles/browser-default.css";
import "./styles/table.css";
import "./styles/animate.css";

// Router
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
