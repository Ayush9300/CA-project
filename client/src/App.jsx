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
import Soleproprietorship from "./components/CompanySet/soleproprietorship";
import HUF from "./components/CompanySet/HUF";
import Section8company from "./components/CompanySet/section8company";
import Nidhicompany from "./components/CompanySet/Nidhicompany";
import Publiclimitedcompany from "./components/CompanySet/Publiclimitedcompany";
import Ecommercebusinesssetup from "./components/CompanySet/Ecommercebusinesssetup";
import PrivateLtd from "./components/Compliance/PrivateLtd";
import LLP from "./components/Compliance/LLP";
import PublicLtd from "./components/Compliance/PublicLtd";
import OPC from "./components/Compliance/OPC";
import NOP from "./components/Compliance/NOP";
import Nidhi from "./components/Compliance/Nidhi";
import INC20A from "./components/Compliance/INC20A";
import AddDirector from "./components/Compliance/AddDirector";
import ResignationDirector from "./components/Compliance/ResignationDirector";
import IncreaseCapital from "./components/Compliance/IncreaseCapital";
import ChangeOfficeAddress from "./components/Compliance/ChangeOfficeAddress";
import CompanyNameChange from "./components/Compliance/CompanyNameChange";
import Amendment from "./components/Compliance/Amendment";
import AddRemovePartner from "./components/Compliance/AddRemovePartner";
import ChangeAgreement from "./components/Compliance/ChangeAgreement";
import ChangeSurrenderDIN from "./components/Compliance/ChangeSurrenderDIN";
import AuditorAppointment from "./components/Compliance/AuditorAppointment";
import ShareTransfer from "./components/Compliance/ShareTransfer";
import Registration from "./components/GstReturn/Registration";
import LUT from "./components/GstReturn/LUT";
import Cancellation from "./components/GstReturn/Cancellation";
import Returns from "./components/GstReturn/Returns";
import IncomeTaxReturns from "./components/GstReturn/IncomeTaxReturns";
import PFReturns from "./components/GstReturn/PFReturns";
import ESIReturns from "./components/GstReturn/ESIReturns";
import TrademarkRegistration from "./components/IP$Legal/TrademarkRegistration";
import TrademarkObjection from "./components/IP$Legal/TrademarkObjection";
import TrademarkRenewal from "./components/IP$Legal/TrademarkRenewal";
import LegalDrafting from "./components/IP$Legal/LegalDrafting";
import LegalROCSearch from "./components/IP$Legal/LegalROCSearch";
import LicensesIEC from "./components/OtherReg/LicensesIEC";
import LicensesESIC from "./components/OtherReg/LicensesESIC";
import LicensesEPF from "./components/OtherReg/LicensesEPF";
import LicensesFSSAI from "./components/OtherReg/LicensesFSSAI";
import LicensesLEI from "./components/OtherReg/LicensesLEI";
import DigitalToolsDSC from "./components/OtherReg/DigitalToolsDSC";
import DigitalToolsPAN from "./components/OtherReg/DigitalToolsPAN";
import DigitalToolsTAN from "./components/OtherReg/DigitalToolsTAN";
import ClosureCompany from "./components/OtherReg/ClosureCompany";
import ClosureLLP from "./components/OtherReg/ClosureLLP";
import ClosureFirm from "./components/OtherReg/ClosureFirm";
import ClosureOPC from "./components/OtherReg/ClosureOPC";
import Blog from "./pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Private-limited-Company",
        element: <PrivateLimited />,
      },
      {
        path: "/limited-liability-partnership",
        element: <LlPatership />,
      },
      {
        path: "/one-person-company",
        element: <OnePerCompany />,
      },
      {
        path: "/partnership-firm",
        element: <Paternershipfirm />,
      },
      {
        path: "/sole-proprietorship",
        element: <Soleproprietorship />,
      },
      {
        path: "/huf",
        element: <HUF />,
      },
      {
        path: "/section-8-company",
        element: <Section8company />,
      },
      {
        path: "/nidhi-company",
        element: <Nidhicompany />,
      },
      {
        path: "/public-limited-company",
        element: <Publiclimitedcompany />,
      },
      {
        path: "/e-commerce-business-setup",
        element: <Ecommercebusinesssetup />,
      },
      {
        path: "/AnnualFilings/PrivateLtd",
        element: <PrivateLtd />,
      },
      {
        path: "/AnnualFilings/LLP",
        element: <LLP />,
      },
      {
        path: "/AnnualFilings/PublicLtd",
        element: <PublicLtd />,
      },
      {
        path: "/AnnualFilings/OPC",
        element: <OPC />,
      },
      {
        path: "AnnualFilings/NPO",
        element: <NOP />,
      },
      {
        path: "/AnnualFilings/Nidhi",
        element: <Nidhi />,
      },
      {
        path: "/AnnualFilings/INC20A",
        element: <INC20A />,
      },
      {
        path: "/CompanyChanges/AddDirector",
        element: <AddDirector />,
      },
      {
        path: "/CompanyChanges/ResignationDirector",
        element: <ResignationDirector />,
      },
      {
        path: "/CompanyChanges/ResignationDirector",
        element: <ResignationDirector />,
      },
      {
        path: "/CompanyChanges/IncreaseCapital",
        element: <IncreaseCapital />,
      },
      {
        path: "CompanyChanges/ChangeOfficeAddress",
        element: <ChangeOfficeAddress />,
      },
      {
        path: "/CompanyChanges/CompanyNameChange",
        element: <CompanyNameChange />,
      },
      {
        path: "/CompanyChanges/MOA_AOAAmendment",
        element: <Amendment />,
      },
      {
        path: "/LLP/AddRemovePartner",
        element: <AddRemovePartner />,
      },
      {
        path: "/LLP/ChangeAgreement",
        element: <ChangeAgreement />,
      },
      {
        path: "/LLP/ChangeSurrenderDIN",
        element: <ChangeSurrenderDIN />,
      },
      {
        path: "/LLP/AuditorAppointment",
        element: <AuditorAppointment />,
      },
      {
        path: "/LLP/ShareTransfer",
        element: <ShareTransfer />,
      },
      {
        path: "/GST/Registration",
        element: <Registration />,
      },
      {
        path: "/GST/LUT",
        element: <LUT />,
      },
      {
        path: "/GST/Cancellation",
        element: <Cancellation />,
      },
      {
        path: "/GST/Returns",
        element: <Returns />,
      },
      {
        path: "/IncomeTax/Returns",
        element: <IncomeTaxReturns />,
      },
      {
        path: "/PF/Returns",
        element: <PFReturns />,
      },
      {
        path: "/ESI/Returns",
        element: <ESIReturns />,
      },
      {
        path: "/Trademark/Registration",
        element: <TrademarkRegistration />,
      },
      {
        path: "/Trademark/Objection",
        element: <TrademarkObjection />,
      },
      {
        path: "/Trademark/Renewal",
        element: <TrademarkRenewal />,
      },
      {
        path: "/Legal/Drafting",
        element: <LegalDrafting />,
      },
      {
        path: "/Legal/ROCSearch",
        element: <LegalROCSearch />,
      },
      {
        path: "/Licenses/IEC",
        element: <LicensesIEC />,
      },
      {
        path: "/Licenses/ESIC",
        element: <LicensesESIC />,
      },
      {
        path: "/Licenses/EPF",
        element: <LicensesEPF />,
      },
      {
        path: "/Licenses/FSSAI",
        element: <LicensesFSSAI />,
      },
      {
        path: "/Licenses/LEI",
        element: <LicensesLEI />,
      },
      {
        path: "/DigitalTools/DSC",
        element: <DigitalToolsDSC />,
      },
      {
        path: "/DigitalTools/PAN",
        element: <DigitalToolsPAN />,
      },
      {
        path: "/DigitalTools/TAN",
        element: <DigitalToolsTAN />,
      },
      {
        path: "/Closure/Company",
        element: <ClosureCompany />,
      },
      {
        path: "/Closure/LLP",
        element: <ClosureLLP />,
      },
      {
        path: "/Closure/Firm",
        element: <ClosureFirm />,
      },
      {
        path: "/Closure/OPC",
        element: <ClosureOPC />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-conditions",
    element: <TermCondition />,
  },
  {
    path: "/refund-policy",
    element: <RefundPolicy />,
  },
]);
