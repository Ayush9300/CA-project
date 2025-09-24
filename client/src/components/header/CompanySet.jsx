import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import Dropdown from "../ui/Dropdown";

const CompanySetupDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const menuData = [
    {
      title: "INDIAN ENTREPRENEUR",
      items: [
        {
          name: "Private Limited Company",
          description: "Launch your dream company.",
          isNew: true,
          path: "/Private-limited-Company",
        },
        {
          name: "Limited Liability Partnership",
          description: "Enjoy partnership benefits.",
          isNew: true,
          path: "/limited-liability-partnership",
        },
        {
          name: "One Person Company",
          description: "Be your own boss easily.",
          isNew: true,
          path: "/one-person-company",
        },
        {
          name: "Partnership Firm",
          description: "Start with a classic model.",
          isNew: true,
          path: "/partnership-firm",
        },
        {
          name: "Sole Proprietorship",
          description: "Establish quickly.",
          isNew: true,
          path: "/sole-proprietorship",
        },
        {
          name: "HUF",
          description: "Manage family-owned business.",
          isNew: true,
          path: "/huf",
        },
      ],
    },
    {
      title: "SPECIAL ENTITIES",
      items: [
        {
          name: "Section 8 Company",
          description: "Drive social initiatives.",
          isNew: true,
          path: "/section-8-company",
        },
        {
          name: "Nidhi Company",
          description: "Savings and credit among members.",
          isNew: true,
          path: "/nidhi-company",
        },
        {
          name: "Public Limited Company",
          description: "Raise capital publicly.",
          isNew: true,
          path: "/public-limited-company",
        },
      ],
    },
    {
      title: "E-COMMERCE SETUP",
      items: [
        {
          name: "E-Commerce Business Setup",
          description: "Start your online store.",
          isNew: true,
          path: "/e-commerce-business-setup",
        },
      ],
    },
  ];

  // Clear timer when unmounting
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    // Cancel timer if mouse comes back
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    // Start 10-second timer to close dropdown
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button className="items-center px-2 py-2 hover:text-blue-600 text-gray-600 font-medium transition-colors duration-200 relative flex">
        <span>Company Setup</span>
        <FiChevronDown
          className={`ml-1 mt-1 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full ml-[500px] z-50 mt-1">
          <Dropdown items={menuData} className="w-[1200px] h-[505px]" />
        </div>
      )}
    </div>
  );
};

export default CompanySetupDropdown;
