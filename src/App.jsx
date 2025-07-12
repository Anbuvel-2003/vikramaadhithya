import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import Contactus from "./pages/contactus";
import Aboutus from "./pages/aboutus";
import Careers from "./pages/careers";
import Product from "./pages/product";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
function Layout() {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      <Footersection />
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
        path: "/ContactUs",
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
