import "./App.css";
import RootLayout from "./RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mail from "./components/Pages/Mail/Mail";
import MailList from "./components/Pages/Mail/MailList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <MailList />,
      },
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
