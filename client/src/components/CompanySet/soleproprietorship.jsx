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
    tagline: "Transparent Pricing, No Hidden Charges",
    title: "Choose the Right Plan",
    subtitle: "For your Sole Proprietorship Company",
    description:
      "Get your Sole Proprietorship Company registered effortlessly with our tailored pricing plans. Start your journey today!",
  };

  // Data arrays
  const heroContent = {
    tagline: "Start Your Sole Proprietorship with Ease!",
    title: "Register Your Sole Proprietorship & Unlock Growth Opportunities!",
    highlights: [
      "100% Online, Hassle-Free Registration Process",
      "Expert Guidance & Legal Compliance Assistance",
      "Quick Turnaround & Transparent Pricing",
    ],
    description:
      "Experience seamless sole proprietorship registration with our expert consultants. We handle paperwork, legal formalities, and compliance, ensuring a smooth process. Focus on growth while we simplify your journey. Get started today!",
  };
  const titleArray = [
    "Start Your",
    "Business",
    "& Unlock Growth Opportunities!",
  ];

  const plans = [
    {
      name: "BASIC",
      price: "₹699",
      gst: "+ 18% GST",
      icon: <BasicIcon />,
      textColor: "text-gray-700",
      buttonStyle: "bg-gray-800 text-white hover:bg-gray-900",
      features: ["GST Registration"],
    },
    {
      name: "STANDARD",
      price: "₹8999",
      gst: "+ 18% GST",
      icon: <StanderdIcon />,
      textColor: "text-gray-700",
      buttonStyle: "bg-gray-800 text-white hover:bg-gray-900",
      popular: true,
      features: [
        "GST Registration",
        "GST Return for 1 Year (upto 100 invoices)",
      ],
    },
    {
      name: "PREMIUM",
      price: "₹10499",
      gst: "+ 18% GST",
      icon: <PrimiumIcon />,
      textColor: "text-gray-700",
      buttonStyle: "bg-gray-800 text-white hover:bg-gray-900",
      features: [
        "GST Registration",
        "GST Return for 1 Year (upto 100 invoices)",
        "Income Tax Returns (Turnover upto 20 lakhs)",
      ],
    },
  ];

  const aboutContent = {
    title: "All you need to know about Sole Proprietorship",
    paragraphs: [
      "A Sole Proprietorship is one of the simplest and most common forms of business structures in India. It is owned, managed, and controlled by a single individual. Unlike a Private Limited Company or LLP, it is not a separate legal entity but a business run by an individual. The owner has complete control over the business, makes all decisions, and retains all profits. This structure is ideal for small-scale businesses, freelancers, and individual entrepreneurs. It is easy to set up and offers operational flexibility but comes with the drawback of unlimited liability for the owner.",
      "Taxbizlegal.com is a trusted platform that provides end-to-end services for Sole Proprietorship Company registration, including incorporation, compliance, advisory, and consultancy. The registration process is quick, affordable, and simple, ensuring a smooth start for your business.",
      "In addition to Sole Proprietorship registration, we also offer services for Partnership Registration, LLP Incorporation, One Person Company registration, and more. Contact us for a free consultation at info@taxbizlegal.com or call our compliance manager at 9403892279.",
    ],
  };

  const businessStructures = [
    {
      title: "Key Features of a Sole Proprietorship",
      highlight: "Proprietorship",
      content: [
        "Single Owner, Full Control: A sole proprietorship is owned and managed by a single individual who exercises full control over all business operations and decision-making. It’s the simplest and most direct form of business ownership, making it ideal for small or low-risk ventures.",
        "No Legal Separation & Unlimited Liability: The business and the owner are legally the same. This means the owner is personally responsible for all debts, liabilities, or legal issues arising from the business. There is no mandatory share capital or formal governance structure required to operate the business.",
        "Simple Operations & Limited Scalability: Sole proprietorships are easy to start and close, involving minimal compliance and formalities, making them highly flexible. However, growth potential is limited, and scaling may require shifting to a more structured entity like an LLP or Private Limited Company.",
      ],
    },
    {
      title: "One Person Company (OPC)",
      highlight: "OPC",
      content: [
        "An OPC allows a single individual to operate a corporate entity with limited liability while maintaining full control. It is ideal for solo entrepreneurs who want the benefits of a company without needing partners or co-founders.",
        "Registered under the Companies Act, 2013, an OPC is a separate legal entity that can own assets, enter into contracts, and sue or be sued independently of the owner, ensuring continuity and credibility.",
      ],
    },
    {
      title: "Private Limited Company",
      highlight: "Private Ltd",
      content: [
        "A Private Limited Company requires at least two directors and shareholders. It offers strong credibility, better funding opportunities, and protection of personal assets through limited liability.",
        "While not ideal for solo founders initially, OPCs can be converted into Private Limited Companies as the business grows, allowing for scalability without compromising compliance or governance standards.",
      ],
    },
  ];

  const documents = [
    {
      id: "01",
      title: "Passport Size Photograph and PAN Card of the Director",
    },
    {
      id: "02",
      title: "Identity Proof – Aadhaar Card / Voter ID / Driving License",
    },
    {
      id: "03",
      title:
        "Address Proof – Latest Bank Statement / Utility Bill (not older than 2 months)",
    },
    { id: "04", title: "Consent to Act as Director – Form DIR-2" },
    {
      id: "05",
      title: "Nominee’s Identity & Address Proof – PAN and Aadhaar Card",
    },
    { id: "06", title: "Consent of Nominee – Form INC-3" },
    {
      id: "07",
      title:
        "Registered Office Proof – Rent Agreement or Property Ownership Document",
    },
    {
      id: "08",
      title:
        "No Objection Certificate (NOC) from Property Owner & Director’s DSC",
    },
  ];

  const complianceData = {
    title: "Annual Compliance for One Person Company (OPC)",
    whyMatters: {
      title: "Why Compliance Matters",
      description:
        "Staying compliant is essential for the seamless functioning of your One Person Company (OPC). It enhances business credibility, avoids legal penalties, and supports long-term sustainability. Here’s a quick guide on what you need to comply with after registering your OPC.",
    },
    items: {
      left: [
        {
          title: "Board Resolution",
          description:
            "Though there's only one member, board resolutions are required for key business decisions.",
        },
        {
          title: "Annual Return Filing (Form MGT-7A)",
          description:
            "File Form MGT-7A annually with the Registrar of Companies (RoC).",
        },
        {
          title: "Financial Statements (Form AOC-4)",
          description:
            "File Form AOC-4 containing the balance sheet, profit & loss, and auditor's report.",
        },
        {
          title: "Auditor Appointment (Form ADT-1)",
          description:
            "Appoint a statutory auditor within 15 days of incorporation via Form ADT-1.",
        },
        {
          title: "Statutory Registers & Books",
          description:
            "Maintain proper books of accounts, minutes of decisions, and statutory registers.",
        },
      ],
      right: [
        {
          title: "TDS/TCS Payment",
          description:
            "Ensure timely payment of TDS/TCS to comply with tax regulations.",
        },
        {
          title: "GST Payment & Filing",
          description:
            "File GST returns and make payments as applicable to remain compliant.",
        },
        {
          title: "Quarterly TDS Returns",
          description:
            "Submit quarterly TDS returns and issue TDS certificates to deductees.",
        },
        {
          title: "Advance Tax Payment",
          description:
            "Pay advance tax as per applicable schedules to avoid penalties.",
        },
        {
          title: "Income Tax Return & Tax Audit (if applicable)",
          description:
            "File ITR and Tax Audit Report as per the company’s turnover and income requirements.",
        },
      ],
    },
  };

  const stepsData = {
    title: "Register your One Person Company with Us in 5 Simple Steps",
    description:
      "Starting your own One Person Company is now easier than ever! Just follow these 5 simple steps, and we will handle the process with accuracy and efficiency. Let us guide you through every step!",
    steps: [
      {
        number: 1,
        title: "Submit Your Documents",
        description:
          "Share your documents with us for verification. Our experts ensure everything is accurate to proceed seamlessly with the OPC registration process.",
      },
      {
        number: 2,
        title: "Choose Your Company Name",
        description:
          "Pick a unique name for your One Person Company. We assist with checking availability and filing for name approval with MCA.",
      },
      {
        number: 3,
        title: "Company Registration",
        description:
          "We prepare MOA, AOA, and other legal documentation to ensure full compliance with the Companies Act for your OPC setup.",
      },
      {
        number: 4,
        title: "File Application with Registrar of Companies",
        description:
          "Once documents are ready, we file your incorporation application with the RoC and handle all related filings.",
      },
      {
        number: 5,
        title: "Get Your Certificate of Incorporation",
        description:
          "After approval by the RoC, receive your official Certificate of Incorporation and start operating as a recognized One Person Company.",
      },
    ],
  };

  const faqData = [
    {
      question: "What is a One Person Company (OPC)?",
      answer:
        "A One Person Company (OPC) is a type of company in India that allows a single individual to form a company. It is a separate legal entity, offering limited liability protection to the sole owner (called the member).",
    },
    {
      question:
        "What are the key benefits of registering a One Person Company?",
      answer:
        "Registering an OPC offers several advantages, including single ownership with limited liability protection, complete control over decision-making, separate legal entity distinct from the owner, easy access to funding and loans, and no requirement for a minimum capital investment.",
    },
    {
      question: "What are the minimum requirements to register an OPC?",
      answer:
        "Only one director is required (must be a resident of India), the sole member must be an individual or a Hindu Undivided Family (HUF), a registered office address in India, DIN and DSC for the director, and nominee details of the member must be submitted.",
    },
    {
      question:
        "How long does it take to register a One Person Company in India?",
      answer:
        "The registration process for an OPC typically takes 7 to 10 business days, depending on document submission and government processing times.",
    },
    {
      question: "Can a foreign national be a director in an OPC?",
      answer:
        "No, only an Indian resident can be the sole director in an OPC. However, a foreign national can be appointed as a nominee for the OPC.",
    },
    {
      question: "Can an OPC be converted into a Private Limited Company?",
      answer:
        "Yes, an OPC can be converted into a Private Limited Company once it meets the conditions set by the Ministry of Corporate Affairs (MCA), such as having a paid-up capital exceeding Rs. 50 lakhs or having more than one member.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start min-h-screen">
      <HeroSection heroContent={heroContent}  title={titleArray}/>
      <FormSection />
      <PricingSection plans={plans} headings={pricingHeadings} />
      <AboutSection aboutContent={aboutContent} />
      <BusinessStructureSection businessStructures={businessStructures} />
      <DocumentsSection
        documents={documents}
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
