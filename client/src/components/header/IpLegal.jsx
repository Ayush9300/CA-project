import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import Dropdown from "../ui/Dropdown";

const Compliance = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null); // Timer reference

  const menuData = [
    {
      title: "TRADEMARK SERVICES",
      items: [
        {
          name: "Trademark Registration",
          description:
            "Protect your brand identity with trademark registration.",
          isNew: true,
          path: "/Trademark/Registration",
        },
        {
          name: "Trademark Objection",
          description:
            "Handle trademark objections professionally and effectively.",
          path: "/Trademark/Objection",
        },
        {
          name: "Trademark Renewal",
          description:
            "Renew your trademark on time to keep your rights secured.",
          path: "/Trademark/Renewal",
        },
      ],
    },
    {
      title: "LEGAL SUPPORT",
      items: [
        {
          name: "Legal Drafting",
          description:
            "Get contracts, agreements, and policies drafted legally.",
          isNew: true,
          path: "/Legal/Drafting",
        },
        {
          name: "ROC Search Report",
          description:
            "Access company financials with a reliable ROC search report.",
          path: "/Legal/ROCSearch",
        },
      ],
    },
  ];

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Cancel closing timer
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200); // Close after 200ms
  };

  return (
    <div
      className="relative inline-block"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Button */}
      <button className="items-center px-1 py-2 hover:text-blue-600 font-medium transition-colors duration-200 relative flex">
        <span>IP & LEGAL</span>
        <FiChevronDown
          className={`ml-1 mt-1 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full right-0 z-50 mt-1">
          <Dropdown items={menuData} className="w-[1150px] h-[300px]" />
        </div>
      )}
    </div>
  );
};

export default Compliance;
