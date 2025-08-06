import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import Contactus from "./pages/contactus";
import Aboutus from "./pages/aboutus";
import Careers from "./pages/careers";
import Product from "./pages/product";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Footer from "./pages/footer";
import NavBar from "./pages/navbar";
import Steps from "./pages/components/steps";
import Faq from "./pages/components/faq";
import Progress from "./pages/components/progress";
function Layout() {
  return (
    <>
<<<<<<< HEAD
      <NavBar />
      <Outlet />
      <Footer />
=======
      {/* <Navbar /> */}
      <Outlet />
      <Footersection />
>>>>>>> 9cbabffecba8083272b5c6bcd9519e3f96ed218f
    </>
  );
}
import { Outlet } from "react-router-dom";
import Footersection from "./pages/footersection";
import Navbar from "./pages/navbar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/Contactus",
        element: <Contactus />,
      },
      {
        path: "/AboutUs",
        element: <Aboutus />,
      },
      {
        path: "/Careers",
        element: <Careers />,
      },
      {
        path: "/Product",
        element: <Product />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Step",
        element: <Steps />,
      },
      {
        path: "/Faq",
        element: <Faq />,
      },
      {
        path: "/Progress",
        element: <Progress />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
