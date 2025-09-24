import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermCondition from "./pages/TermCondition";
import RefundPolicy from "./pages/RefundPolicy";
import PrivateLimited from "./components/CompanySet/PrivateLimited";
import LlPatership from "./components/CompanySet/LlPatership";
import OnePerCompany from "./components/CompanySet/OnePerCompany";
import Paternershipfirm from "./components/CompanySet/partnershipfirm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path:"/contact",
        element :<Contact/>
      },
      {
        path:"/privacy-policy",
        element :<PrivacyPolicy/>
      },
       {
        path:"/terms-conditions",
        element :<TermCondition/>
      },
       {
        path:"/refund-policy",
        element :<RefundPolicy/>
      },
      {
        path:"/Private-limited-Company",
        element :<PrivateLimited/>
      },
       {
        path:"/limited-liability-partnership",
        element :<LlPatership/>
      },
       {
        path:"/one-person-company",
        element :<OnePerCompany/>
      },
      {
        path:"/partnership-firm",
        element :<Paternershipfirm/>
      },

     


    ],
  },
]);
