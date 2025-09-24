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
  tagline: "Start Your One Person Company with Ease!",
  title: "Register Your One Person Company & Step Into Formal Entrepreneurship!",
  highlights: [
    "100% Online, Hassle-Free Registration Process",
    "Expert Guidance & Legal Compliance Assistance",
    "Quick Turnaround & Transparent Pricing",
  ],
  description:
    "Launch your One Person Company (OPC) effortlessly with our experienced consultants. Ensure limited liability & separate legal identity while focusing on building your dream venture. Begin your entrepreneurial journey today with us!",
};



const plans = [
  {
    name: "BASIC",
    price: "₹4999",
    gst: "+ 18% GST",
    icon: <BasicIcon />,
    textColor: "text-gray-700",
    buttonStyle: "bg-gray-800 text-white hover:bg-gray-900",
    features: [
      "Company Registration",
      "Drafting & Filing by CA/CS",
      "MCA processing and CIN",
      "Company PAN & TAN",
      "MOA",
      "AOA",
      "Allotment of 1 DIN",
      "ESI and PF registration",
      "Current Account Opening in your nearest branch",
      "GST registration",
    ],
  },
  {
    name: "STANDARD",
    price: "₹15999",
    gst: "+ 18% GST",
    icon: <StanderdIcon />,
    textColor: "text-gray-700",
    buttonStyle: "bg-gray-800 text-white hover:bg-gray-900",
    popular: true,
    features: [
      "Company Registration",
      "Drafting & Filing by CA/CS",
      "MCA processing and CIN",
      "Company PAN & TAN",
      "MOA",
      "AOA",
      "Allotment of 1 DIN",
      "ESI and PF registration",
      "Current Account Opening in your nearest branch",
      "GST registration",
      "The 1st Board Resolution documentation",
      "Consent Letter drafting",
      "Appointment of the Auditor",
      "INC-20A commencement of business",
      "Financial statements preparation",
      "MCA annual return filing",
    ],
  },
  {
    name: "PREMIUM",
    price: "₹25999",
    gst: "+ 18% GST",
    icon: <PrimiumIcon />,
    textColor: "text-gray-700",
    buttonStyle: "bg-gray-800 text-white hover:bg-gray-900",
    features: [
      "Company Registration",
      "Drafting & Filing by CA/CS",
      "MCA processing and CIN",
      "Company PAN & TAN",
      "MOA",
      "AOA",
      "Allotment of 1 DIN",
      "ESI and PF registration",
      "Current Account Opening in your nearest branch",
      "GST registration",
      "The 1st Board Resolution documentation",
      "Consent Letter drafting",
      "Appointment of the Auditor",
      "INC-20A commencement of business",
      "Financial statements preparation",
      "MCA annual return filing",
      "1 Trademark Application",
      "MCA annual return filing, income tax return filing, and DIR-3 Director KYC",
      "GST Return filing for 12 months",
    ],
  },
];



const aboutContent = {
  title: "All you need to know about One Person Company Registration",
  paragraphs: [
    "A One Person Company (OPC) in India is a unique business structure that allows a single individual to form and operate a company with limited liability. Introduced under the Companies Act, 2013, it offers the benefits of a Private Limited Company while maintaining the simplicity of a sole proprietorship. OPCs are ideal for solo entrepreneurs and small business owners who want full control over their enterprise without taking on unlimited personal risk.",
    "To register an OPC, only one director and one member are required, and the same individual can act in both capacities. The liability of the owner is limited to the amount of their share capital, ensuring personal assets are protected in case of business loss. Once incorporated and the Certificate of Incorporation is issued, the OPC can start its business activities. The registration process is typically completed within 10 to 15 working days.",
    "Taxbizlegal.com provides comprehensive services for One Person Company registration, covering every step from documentation and filing to compliance and post-incorporation support. Our team ensures a smooth and hassle-free experience at an affordable cost. We also offer assistance with Private Limited Company registration, LLP incorporation, GST filings, and more. For a free consultation, write to us at info@taxbizlegal.com or connect with our compliance manager at 9403892279.",
  ],
};


const businessStructures = [
  {
    title: "One Person Company (OPC)",
    highlight: "OPC",
    content: [
      "An OPC allows a single individual to operate a corporate entity with limited liability while maintaining full control. It is ideal for solo entrepreneurs who want the benefits of a company without needing partners or co-founders.",
      "Registered under the Companies Act, 2013, an OPC is a separate legal entity that can own assets, enter into contracts, and sue or be sued independently of the owner, ensuring continuity and credibility.",
    ],
  },
  {
    title: "Sole Proprietorship",
    highlight: "Proprietorship",
    content: [
      "A sole proprietorship is the simplest form of business, where the owner and business are legally the same. It requires minimal regulatory compliance and is easy to start and manage.",
      "However, the owner bears unlimited liability, meaning personal assets can be used to settle business debts. It is best suited for small-scale or low-risk ventures.",
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
  { id: "01", title: "Passport Size Photograph and PAN Card of the Director" },
  { id: "02", title: "Identity Proof – Aadhaar Card / Voter ID / Driving License" },
  { id: "03", title: "Address Proof – Latest Bank Statement / Utility Bill (not older than 2 months)" },
  { id: "04", title: "Consent to Act as Director – Form DIR-2" },
  { id: "05", title: "Nominee’s Identity & Address Proof – PAN and Aadhaar Card" },
  { id: "06", title: "Consent of Nominee – Form INC-3" },
  { id: "07", title: "Registered Office Proof – Rent Agreement or Property Ownership Document" },
  { id: "08", title: "No Objection Certificate (NOC) from Property Owner & Director’s DSC" },
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
    question: "What are the key benefits of registering a One Person Company?",
    answer:
      "Registering an OPC offers several advantages, including single ownership with limited liability protection, complete control over decision-making, separate legal entity distinct from the owner, easy access to funding and loans, and no requirement for a minimum capital investment.",
  },
  {
    question: "What are the minimum requirements to register an OPC?",
    answer:
      "Only one director is required (must be a resident of India), the sole member must be an individual or a Hindu Undivided Family (HUF), a registered office address in India, DIN and DSC for the director, and nominee details of the member must be submitted.",
  },
  {
    question: "How long does it take to register a One Person Company in India?",
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
