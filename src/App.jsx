import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthLayout from "./modules/Shared/Components/AuthLayout/AuthLayout";
import NotFound from "./modules/Shared/Components/NotFound/NotFound";
import Login from "./modules/AuthModule/Components/Login/Login";
import Register from "./modules/AuthModule/Components/Register/Register";
import Resetpassword from "./modules/AuthModule/Components/Resetpassword/Resetpassword";
import ChangePassword from "./modules/AuthModule/Components/ChangePassword/ChangePassword";
import Forgetpassword from "./modules/AuthModule/Components/Forgetpassword/Forgetpassword";
import MasterLayout from "./modules/Shared/Components/MasterLayout/MasterLayout";
import Jobs from "./modules/JobsModule/Components/Jobs/Jobs";
import AboutUs from "./modules/AboutUsModule/Components/AboutUs/AboutUs";
import Contact from "./modules/ContactModule/Components/Contact/Contact";
import Home from "./modules/HomeModule/Components/Home/Home";

function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "reset-password", element: <Resetpassword /> },
        { path: "chenge-password", element: <ChangePassword /> },
        { path: "forget-password", element: <Forgetpassword /> },
      ],
    },
    {
      path: "dashboard",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "find-jobs", element: <Jobs /> },
        { path: "about-Us", element: <AboutUs /> },
        { path: "contact-us", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
