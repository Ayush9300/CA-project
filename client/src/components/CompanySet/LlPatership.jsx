import React, { useState } from "react";

import BasicIcon from "../../assets/icons/basic";
import PrimiumIcon from "../../assets/icons/primium";
import StanderdIcon from "../../assets/icons/standerd";
import {
  AboutSection,
  BusinessStructureSection,
  ComplianceSection,
  DocumentsSection,
  FAQSection,
  FormSection,
  HeroSection,
  PricingSection,
  StepsSection,
} from "../ui/section/AllSection";

const PrivateLimited = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Data arrays
 const heroContent = {
  tagline: "Start Your LLP Company with Ease!",
  title: "Register Your Limited Liability Partnership & Unlock Growth Opportunities!",
  highlights: [
    "100% Online, Hassle-Free Registration Process",
    "Expert Guidance & Legal Compliance Assistance",
    "Quick Turnaround & Transparent Pricing",
  ],
  description:
    "Experience seamless limited liability partnership company registration with our expert consultants. We handle paperwork, legal formalities, and compliance, ensuring a smooth process. Focus on growth while we simplify your journey. Get started today!",
};

 const plans = [
  {
    name: "BASIC",
    price: "₹4599",
    gst: "+ 18% GST",
    icon: <BasicIcon />,
    textColor: "text-gray-700",
    buttonStyle: "bg-gray-800 text-white hover:bg-gray-900",
    features: [
      "Registering a LLP with Ministry of Corporate Affairs",
      "Name Reservation Form RUN-LLP",
      "FiLLiP form for LLP incorporation",
      "LLP agreement",
      "LLPIN",
      "PAN",
      "TAN",
      "MCA processing",
      "FILIP",
      "Allotment of 2 DPIN",
      "Current Account Opening in your nearest branch",
      "GST registration",
    ],
  },
  {
    name: "STANDARD",
    price: "₹12999",
    gst: "+ 18% GST",
    icon: <StanderdIcon />,
    textColor: "text-gray-700",
    buttonStyle: "bg-gray-800 text-white hover:bg-gray-900",
    popular: true, // 👈 Popular tag
    features: [
      "Registering a LLP with Ministry of Corporate Affairs",
      "Name Reservation Form RUN-LLP",
      "FiLLiP form for LLP incorporation",
      "LLP agreement",
      "LLPIN",
      "PAN",
      "TAN",
      "MCA processing",
      "FILIP",
      "Allotment of 2 DPIN",
      "Current Account Opening in your nearest branch",
      "GST registration",
      "Income tax return filing",
      "Form 11 (Annual return of LLP)",
      "Form 8 (Statement of Accounts)",
      "DIR-3 eKYC of 2 Directors",
    ],
  },
  {
    name: "PREMIUM",
    price: "₹21999",
    gst: "+ 18% GST",
    icon: <PrimiumIcon />,
    textColor: "text-gray-700",
    buttonStyle: "bg-gray-800 text-white hover:bg-gray-900",
    features: [
      "Registering a LLP with Ministry of Corporate Affairs",
      "Name Reservation Form RUN-LLP",
      "FiLLiP form for LLP incorporation",
      "LLP agreement",
      "LLPIN",
      "PAN",
      "TAN",
      "MCA processing",
      "FILIP",
      "Allotment of 2 DPIN",
      "Current Account Opening in your nearest branch",
      "GST registration",
      "Income tax return filing",
      "Form 11 (Annual return of LLP)",
      "Form 8 (Statement of Accounts)",
      "DIR-3 eKYC of 2 Directors",
      "GST Return filing for 12 months",
      "1 Trademark Application",
    ],
  },
];


 const aboutContent = {
  title: "All you need to know about Limited Liability Partnership Registration",
  paragraphs: [
    "A Limited Liability Partnership (LLP) is a hybrid business structure introduced in India through the LLP Act, 2008. It combines the operational flexibility of a partnership with the benefits of limited liability offered by a company. An LLP exists as a separate legal entity, distinct from its partners, and is ideally suited for small and medium-sized businesses, professionals, and startups looking for a low-compliance, scalable, and liability-protected structure.",
    "LLPs offer limited liability protection, flexible internal management through an LLP Agreement, and no restriction on the number of partners (minimum 2 required). Moreover, LLPs are not required to maintain complex compliance like companies and can be formed with relatively low cost and ease.",
    "Taxbizlegal.com is a trusted platform that provides end-to-end services for Limited Liability Partnership Company registration, including incorporation, compliance, advisory, and consultancy. The process is quick, affordable, and simple. Additionally, we offer services for Pvt Ltd Company Registration, One Person Company registration, and more. Contact us for a free consultation at info@taxbizlegal.com or call our compliance manager at 9403892279.",
  ],
};

const businessStructures = [
  {
    title: "Separate Legal Entity",
    highlight: "Legal Entity",
    content: [
      "An LLP is recognized as a separate legal entity, distinct from its partners. It can own property, sue, and be sued in its own name, ensuring continuity even when partners change.",
      "The structure enables the LLP to function independently, providing business credibility and allowing it to enter into contracts and own assets under its own identity.",
    ],
  },
  {
    title: "Limited Liability",
    highlight: "Liability",
    content: [
      "Each partner’s liability is limited to the amount they agree to contribute, protecting their personal assets from business debts or losses incurred by the LLP.",
      "Unless voluntarily agreed otherwise, no partner is liable for the independent actions or misconduct of other partners, ensuring reduced individual risk.",
    ],
  },
  {
    title: "Taxation & Compliance",
    highlight: "Compliance",
    content: [
      "LLPs enjoy simplified compliance, with audit requirements only applicable if turnover exceeds ₹40 lakhs or capital contribution exceeds ₹25 lakhs.",
      "They are taxed at a flat rate of 30% (plus applicable surcharge and cess), and profit shares are exempt in the hands of the partners, making LLPs tax-efficient for many businesses.",
    ],
  },
];


 const documents = [
  { id: "01", title: "Passport Size Photograph" },
  { id: "02", title: "Individual PAN Card" },
  { id: "03", title: "Registered Office Proof + NOC" },
  { id: "04", title: "Aadhar Card" },
  { id: "05", title: "Address Proof" },
  { id: "06", title: "Digital Signature Certificate (DSC)" },
];

  const complianceData = {
  title: "Annual Compliance for Limited Liability Partnership Company",
  whyMatters: {
    title: "Why Compliance Matters",
    description:
      "Staying compliant is essential for the smooth operation of your Limited Liability Partnership (LLP). It strengthens business credibility, ensures adherence to legal requirements, and promotes long-term sustainability. Here’s a quick guide on the key compliance requirements to follow after registering your LLP.",
  },
  items: {
    left: [
      {
        title: "Annual Return Filing (Form 11)",
        description:
          "Due by 30th May, this form discloses partner and LLP structure details annually to the ROC.",
      },
      {
        title: "Statement of Accounts & Solvency (Form 8)",
        description:
          "Must be filed by 30th October, it includes LLP’s financial statements and solvency declaration.",
      },
      {
        title: "Income Tax Return (ITR-5)",
        description:
          "File ITR-5 by 31st July (non-audit) or 31st October (audit) based on LLP's income and turnover.",
      },
      {
        title: "Director KYC (DIR-3 KYC)",
        description:
          "Every designated partner must submit DIR-3 KYC annually to keep their DIN active and compliant.",
      },
    ],
    right: [
      {
        title: "GST Returns Filing",
        description:
          "File GSTR-1, GSTR-3B, and GSTR-9 (as applicable) to remain GST compliant.",
      },
      {
        title: "Quarterly TDS Returns",
        description:
          "Submit TDS returns on time and issue TDS certificates to deductees.",
      },
      {
        title: "Professional Tax Returns",
        description:
          "Applicable based on state regulations; file returns as per due dates.",
      },
      {
        title: "Labour Law Compliances",
        description:
          "Ensure compliance under EPF, ESIC, and Shops & Establishments Act where applicable.",
      },
    ],
  },
};


  const stepsData = {
  title: "Complete Your Limited Liability Partnership Registration in 5 Easy Steps",
  description:
    "Registering your Limited Liability Partnership (LLP) is now seamless with our expert assistance. Follow these five simple steps to legally establish your LLP and start your business journey without hassle.",
  steps: [
    {
      number: 1,
      title: "Get Digital Signatures (DSC)",
      description:
        "Obtain DSC for all designated partners, which is mandatory for digitally signing documents during the LLP registration process.",
    },
    {
      number: 2,
      title: "Reserve Your LLP Name",
      description:
        "File the RUN-LLP form on the MCA portal to reserve a unique and compliant name for your LLP.",
    },
    {
      number: 3,
      title: "Submit FiLLiP Form",
      description:
        "File the FiLLiP form for LLP incorporation, and simultaneously apply for DPIN, PAN, and TAN for partners.",
    },
    {
      number: 4,
      title: "File LLP Agreement",
      description:
        "Draft and file the LLP agreement within 30 days of incorporation using Form 3, outlining roles, rights, and responsibilities.",
    },
    {
      number: 5,
      title: "Receive Incorporation Certificate",
      description:
        "Get your Certificate of Incorporation from the Registrar of Companies (ROC) to officially launch your LLP.",
    },
  ],
};

  const faqData = [
    {
      question: "Can foreign nationals be partners in an LLP?",
      answer:
        "Yes, foreign nationals and foreign companies can become partners in an LLP, subject to FDI guidelines and appointment of a designated partner resident in India.",
    },
    {
      question:
        "Is audit mandatory for LLPs?",
      answer:
        "No, unless the annual turnover exceeds ₹40 lakhs or capital exceeds ₹25 lakhs. Below this threshold, audit is not required.",
    },
    {
      question:
        "Can LLPs raise funds from investors?",
      answer:
        "LLPs cannot raise equity capital from the public like companies. However, they can raise funds through partner contributions, loans, or private arrangements.",
    },
    {
      question:
        "How long does it take to register a Private Limited Company in India?",
      answer:
        "The process typically takes 10 to 15 working days, depending on the completeness of the documentation and approvals from authorities.",
    },
    {
      question:
        "Can an LLP be converted into a Private Limited Company?",
      answer:
        "Yes, an LLP can be converted into a private limited company, following the conditions under the Companies Act, including approval from ROC and re-incorporation.",
    },
    {
      question:
        "Can an LLP be closed?",
      answer:
        "Yes, through voluntary winding up or striking off via Form 24, provided there are no pending liabilities and the LLP has not carried out business for at least 1 year.",
    },
    {
      question: "Can LLP have employees?",
      answer:
        "Yes, an LLP can hire employees and comply with applicable labor laws like EPF, ESI, and Shops & Establishment Act.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start min-h-screen">
      <HeroSection heroContent={heroContent} />
      <FormSection />
      <PricingSection plans={plans} />
      <AboutSection aboutContent={aboutContent} />
      <BusinessStructureSection businessStructures={businessStructures} />
      <DocumentsSection documents={documents} 
      title="Documents Required for Registering Your Limited Liability Partnership Company"
      />
      <ComplianceSection complianceData={complianceData} />
      <StepsSection stepsData={stepsData} />
      <FAQSection
        faqData={faqData}
        openIndex={openIndex}
        toggleFAQ={toggleFAQ}
      />
    </div>
  );
};

export default PrivateLimited;
