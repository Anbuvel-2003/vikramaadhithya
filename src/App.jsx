import { useEffect, useState } from "react";
import "@fontsource/manrope"; 
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
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";




function Layout() {
  return (
    <>

      <NavBar />
      <Outlet />
      <Footer />
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
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
