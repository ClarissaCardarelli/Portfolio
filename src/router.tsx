import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/home";
import Cinemood from "./pages/cinemood";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cinemood",
        element: <Cinemood />,
      },
    ],
  },
]);

export default router;
