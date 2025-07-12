import { createBrowserRouter } from "react-router";

import App from "../App";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/profile", element: <div>Profile</div> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);
