import "./App.css";
import RootLayout from "./RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mail from "./components/Pages/Mail/Mail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/mail",
        element: <Mail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
