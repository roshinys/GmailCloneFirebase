import "./App.css";
import RootLayout from "./RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mail from "./components/Pages/Mail/Mail";
import MailList from "./components/Pages/Mail/MailList";
import SendMail from "./components/Pages/SendMail/SendMail";
import { useSelector } from "react-redux";

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
  const sendMessageIsOpen = useSelector(
    (state) => state.mail.sendMessageIsOpen
  );
  return (
    <>
      <RouterProvider router={router} />
      {sendMessageIsOpen && <SendMail />}
    </>
  );
}

export default App;
