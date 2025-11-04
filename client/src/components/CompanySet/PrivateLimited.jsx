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


  const pricingHeadings = {
    tagline:
      "Transparent Pricing, No Hidden Charges",
    title: "Choose the Right Plan",
    subtitle: "For your Startup",
    description:
      "Start your Business effortlessly with our tailored pricing plans. Start your journey today!",
  };


  // Data arrays
  const heroContent = {
    tagline: "Register your StartUp with Ease!",
    title: "Start Your Business & Unlock Growth Opportunities!",
    highlights: [
      "100% Online, Hassle-Free Registration Process",
      "Expert Guidance & Legal Compliance Assistance",
      "Quick Turnaround & Transparent Pricing",
    ],
    description:
      "Focus on growth while we simplify your journey. Get started today!",
  };
    const titleArray = [
      "Start Your",
      "Business",
      "& Unlock Growth Opportunities!",
    ];

  const plans = [
    {
      name: "BASIC",
      price: "₹3999",
      gst: "+ 18% GST",
      icon: <BasicIcon />,
      textColor: "text-gray-700",
      buttonStyle: "bg-gray-800 text-white hover:bg-gray-900",
      features: [
        "Company Incorporation",
        "Basic Legal Documentation",
        "GST Registration",
        "Bank Account Setup",
        "Digital Certificate",
        " GST Registration",
        "ADT-1",
        "INC-20A (Commencement of Business)",
        "MGT-7",
        "AOC-4",
        "DIR 3 KYC",
        "First Board Resolution",
        "Trademark Registration",
        "GST Return Filing 3 Months",
        "Income Tax Filings",
      ],
    },
    {
      name: "STANDARD",
      price: "₹6999",
      gst: "+ 18% GST",
      icon: <StanderdIcon />,
      textColor: "text-gray-700",
      buttonStyle: "bg-gray-800 text-white hover:bg-gray-900",
      popular: true,
      features: [
        "Company Incorporation",
        "Complete Legal Documentation",
        "GST Registration",
        "Bank Account Setup",
        "Digital Certificate",
        "Trademark Search",
        "MOA & AOA Drafting",
        "Director KYC",
        " GST Registration",
        "ADT-1",
        "INC-20A (Commencement of Business)",
        "MGT-7",
        "AOC-4",
        "DIR 3 KYC",
        "First Board Resolution",
        "Trademark Registration",
        "GST Return Filing 3 Months",
        "Income Tax Filings",
      ],
    },
    {
      name: "PREMIUM",
      price: "₹24999",
      gst: "+ 18% GST",
      icon: <PrimiumIcon />,
      textColor: "text-gray-700",
      buttonStyle: "bg-gray-800 text-white hover:bg-gray-900",
      features: [
        "Company Incorporation",
        "Premium Legal Package",
        "GST Registration",
        "Bank Account Setup",
        "Digital Certificate",
        "Trademark Registration",
        "Complete Compliance",
        "Legal Consultation",
        "Priority Support",
        "Custom Contracts",
        " GST Registration",
        "ADT-1",
        "INC-20A (Commencement of Business)",
        "MGT-7",
        "AOC-4",
        "DIR 3 KYC",
        "First Board Resolution",
        "Trademark Registration",
        "GST Return Filing 3 Months",
        "Income Tax Filings",
      ],
    },
  ];

  const aboutContent = {
    title: "All you need to know about Private Limited Company Registration",
    paragraphs: [
      "A Private Limited Company (PLC) in India is one of the most popular and simplest forms of company registration. It offers limited liability and legal protection to its shareholders, making it an ideal choice for many entrepreneurs. Positioned as a hybrid entity between a partnership firm and a public company, it allows businesses to enjoy the benefits of both forms.",
      "To register a PLC, at least two individuals are required, and one individual can serve both as the director and shareholder. The liability of the company's members is confined to the value of their shares, providing protection for personal assets. Once the Certificate of Incorporation is received, the company can commence its operations. The entire registration process typically takes around 15 working days to complete.",
      "EbizPanjiyancom is a trusted platform that provides end-to-end services for Private Limited Company registration, including incorporation, compliance, advisory, and consultancy. The process is quick, affordable, and simple. Additionally, we offer services for Partnership Registration, LLP Incorporation, One Person Company registration, and more. Contact us for a free consultation at info@EbizPanjiyancom or call our compliance manager at 8602222494.",
    ],
  };

  const businessStructures = [
    {
      title: "Company Limited by Shares",
      highlight: "Shares",
      content: [
        "A company limited by shares is a distinct legal entity from its shareholders and directors. It can enter into contracts, own assets, and operate independently under its business name.",
        "Shareholders' liability is limited to their investment, ensuring their personal assets remain protected from the company's financial obligations. This structure is widely chosen for its security and credibility.",
      ],
    },
    {
      title: "Company Limited by Guarantee",
      highlight: "Guarantee",
      content: [
        "A company limited by guarantee does not have shareholders or share capital. Instead, it is backed by guarantors who commit a fixed amount towards company debts if necessary.",
        "Such companies usually operate as non-profits, with profits reinvested into the business to support its objectives. Guarantors do not receive a share of the profits.",
      ],
    },
    {
      title: "Unlimited Company",
      highlight: "Unlimited",
      content: [
        "An unlimited company, as per Section 2(92) of the Companies Act, 2013, does not impose financial liability limits on its shareholders.",
        "In case of dissolution, shareholders are fully responsible for covering all company debts, even beyond their initial investment. This structure offers operational flexibility but comes with higher financial risk.",
      ],
    },
  ];

  const documents = [
   
    { id: "01", title: "Passport Size Photograph" },
    { id: "02", title: "Individual PAN Card" },
    { id: "03", title: "Registered Office Proof" },
    { id: "04", title: "Aadhar Card" },
    { id: "05", title: "Address Proof" },
    { id: "06", title: "No Objection Certificate / NOC" },
  ];

  const complianceData = {
    title: "Annual Compliance for Private Limited Company",
    whyMatters: {
      title: "Why Compliance Matters",
      description:
        "Staying compliant not only builds credibility for your private limited company but also ensures smooth functioning, legal protection, and better funding opportunities. Here's a quick guide to help you understand what's needed right after registration.",
    },
    items: {
      left: [
        {
          title: "GST Registration",
          description:
            "Required within 30 days if turnover exceeds ₹40L or for e-commerce / interstate business.",
        },
        {
          title: "GST Return Filing",
          description:
            "File GST returns monthly, quarterly, or annually based on registration and scheme type.",
        },
        {
          title: "Trademark Registration (TM)",
          description:
            "Protect your brand name, logo, or slogan legally with a registered trademark.",
        },
      ],
      right: [
        {
          title: "Statutory Audit",
          description:
            "Mandatory annual audit for all Private Limited Companies under Companies Act.",
        },
        {
          title: "MAT Audit",
          description:
            "Ensures minimum tax on book profits despite tax exemptions or deductions.",
        },
        {
          title: "Income Tax Audit",
          description:
            "Required if turnover exceeds ₹1 Cr (₹5 Cr with 95% digital transactions).",
        },
        {
          title: "ROC Annual Filing",
          description:
            "Submit AOC-4, MGT-7, and ADT-1 annually for ROC compliance.",
        },
        {
          title: "IEC Registration",
          description:
            "Mandatory for import/export businesses to clear customs and receive export benefits.",
        },
        {
          title: "Accounting",
          description:
            "Maintain proper books of accounts for audits, tax filing, and compliance purposes.",
        },
      ],
    },
  };

  const stepsData = {
    title: "Register your Private Limited Company with Us in 5 Simple Steps",
    description:
      "Starting your own private limited company is now easier than ever! Just follow these 5 simple steps, and we will handle the process with accuracy and efficiency. Let us guide you through every step!",
    steps: [
      {
        number: 1,
        title: "Submit Your Documents",
        description:
          "Share scanned copies of your KYC documents, and we'll verify them for accuracy before proceeding with the registration process.",
      },
      {
        number: 2,
        title: "Name Approval",
        description:
          "Provide two preferred names for your business, and we'll apply for name approval through the SPICe+ form on MCA portal.",
      },
      {
        number: 3,
        title: "Company Registration",
        description:
          "We'll draft and file your MOA, AOA, and SPICe+ Part B with the Ministry of Corporate Affairs for company incorporation.",
      },
      {
        number: 4,
        title: "Incorporation Certificate",
        description:
          "Upon approval by MCA, you'll receive your Incorporation Certificate along with CIN, PAN, and TAN issued by the authorities.",
      },
      {
        number: 5,
        title: "Open Your Bank Account",
        description:
          "Use the incorporation documents to open a business bank account and officially begin your company's operations.",
      },
    ],
  };

  const faqData = [
    {
      question: "What is a Private Limited Company?",
      answer:
        "A Private Limited Company is a type of business structure that provides limited liability to its shareholders while allowing them to raise capital more efficiently.",
    },
    {
      question:
        "What are the key benefits of registering a Private Limited Company?",
      answer:
        "Some benefits include limited liability protection, better credibility, easier access to funding, and simplified compliance procedures.",
    },
    {
      question:
        "What are the minimum requirements for registering a Private Limited Company?",
      answer:
        "At least two directors and shareholders are required, along with documents like identity proof, address proof, and registered office proof.",
    },
    {
      question:
        "How long does it take to register a Private Limited Company in India?",
      answer:
        "The process typically takes 10 to 15 working days, depending on the completeness of the documentation and approvals from authorities.",
    },
    {
      question:
        "Are the Company Incorporation Certificate and Registration Certificate the same?",
      answer:
        "Yes, they refer to the same document issued after successful registration of the company.",
    },
    {
      question:
        "Is a Private Limited Company required to comply with annual regulations?",
      answer:
        "Yes, compliance with statutory filings, audits, and tax returns is mandatory as per the Companies Act.",
    },
    {
      question: "How can I check if a company is registered in India?",
      answer:
        "You can search the Ministry of Corporate Affairs (MCA) website using the company name or CIN number.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start min-h-screen">
      
      <HeroSection heroContent={heroContent} title={titleArray} />
      <FormSection />
      <PricingSection plans={plans} headings={pricingHeadings} />
      <AboutSection aboutContent={aboutContent} />
      <BusinessStructureSection businessStructures={businessStructures} title="Selecting the Ideal Business Structure for Your Company" />
      <DocumentsSection
        documents={documents}
        title="Documents Required for Registering Your Private Limited Company"
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
