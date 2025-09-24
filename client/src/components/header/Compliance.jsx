import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import Dropdown from "../ui/Dropdown";
import { path } from "framer-motion/client";

const Compliance = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const menuData = [
    {
      title: "ANNUAL FILINGS",
      items: [
        {
          name: "Private Ltd Annual Filings",
          description:
            "Stay compliant with ROC filing for your Private Limited Company.",
          isNew: true,
          path: "/AnnualFilings/PrivateLtd",
        },
        {
          name: "Annual Compliance for LLP",
          description: "Complete your LLP's annual compliance smoothly.",
          isNew: true,
          path: "/AnnualFilings/LLP",
        },
        {
          name: "Public Ltd Filing",
          description:
            "File mandatory returns for your Public Limited Company on time.",
          path: "/AnnualFilings/PublicLtd",
        },
        {
          name: "OPC Filing",
          description:
            "Ensure your OPC stays compliant with easy filing services.",
          path: "/AnnualFilings/OPC",
        },
        {
          name: "NPO Filing",
          description:
            "Stay compliant with annual filing for your Section 8 company.",
          path: "/AnnualFilings/NPO",
        },
        {
          name: "Nidhi Filing",
          description: "Complete timely ROC filings for your Nidhi Company.",
          path: "/AnnualFilings/Nidhi",
        },
        {
          name: "INC 20A",
          description:
            "File your commencement of business declaration hassle-free.",
          path: "/AnnualFilings/INC20A",
        },
      ],
    },
    {
      title: "COMPANY CHANGES",
      items: [
        {
          name: "Add Director",
          description: "Add a new director to your company effortlessly.",
          path: "/CompanyChanges/AddDirector",
        },
        {
          name: "Resignation of Director",
          description: "Manage director resignation filings with ease.",
          path: "/CompanyChanges/ResignationDirector",
        },
        {
          name: "Change Office Address",
          description:
            "Update your company’s registered office address legally.",
          path: "/CompanyChanges/ChangeOfficeAddress",
        },
        {
          name: "Increase in Capital",
          description: "Boost your company's authorized share capital easily.",
          path: "/CompanyChanges/IncreaseCapital",
        },
        {
          name: "Company Name Change",
          description: "Rebrand your company with an official name change.",
          path: "/CompanyChanges/CompanyNameChange",
        },
        {
          name: "MOA/AOA Amendment",
          description:
            "Amend your company’s MOA or AOA documentation properly.",
          path: "/CompanyChanges/MOA_AOAAmendment",
        },
      ],
    },
    {
      title: "LLP & DIRECTOR SERVICES",
      items: [
        {
          name: "Add/Remove Partner in LLP",
          description: "Easily update partners in your LLP structure.",
          path: "/LLP/AddRemovePartner",
        },
        {
          name: "Change in LLP Agreement",
          description: "Modify your LLP agreement officially and smoothly.",
          path: "/LLP/ChangeAgreement",
        },
        {
          name: "Change/Surrender DIN",
          description:
            "Manage Director Identification Number updates or surrender.",
          path: "/LLP/ChangeSurrenderDIN",
        },
        {
          name: "Auditor Appointment",
          description:
            "Appoint or change auditors for your company officially.",
          path: "/LLP/AuditorAppointment",
        },
        {
          name: "Share Transfer",
          description:
            "Handle share transfer procedures securely and correctly.",
          path: "/LLP/ShareTransfer",
        },
      ],
    },
  ];

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Cancel timer if hovering back
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200); // Close after 200ms
  };

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Button */}
      <button className="items-center px-1 py-2 hover:text-blue-600 font-medium transition-colors duration-200 relative flex">
        <span>Compliance</span>
        <FiChevronDown
          className={`ml-1 mt-1 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full ml-[300px] mt-1">
          <Dropdown items={menuData} className="w-[1300px] h-[620px]" />
        </div>
      )}
    </div>
  );
};

export default Compliance;
