import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import Dropdown, { MobileDropdown } from "../ui/Dropdown";

const IplLegal = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

   const handleItemClick = () => {
    setOpen(false);
    if (onItemClick) onItemClick();
  };


  return (
    <div
      className="relative inline-block"
      ref={dropdownRef}
      onMouseEnter={!isMobile ? handleMouseEnter : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
    >
      {/* Button */}
      <button 
        className="items-center px-1 py-2 hover:text-blue-600 font-medium transition-colors duration-200 relative flex"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>IP & LEGAL</span>
        <FiChevronDown
          className={`ml-1 mt-1 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Mobile Dropdown */}
      {isMobile && (
        <MobileDropdown
          items={menuData}
          isOpen={open}
          onClose={() => setOpen(false)}
          onItemClick={handleItemClick}
          title="IP & LEGAL"
        />
      )}

      {/* Desktop Dropdown */}
      {!isMobile && open && (
        <div className="absolute top-full right-0 z-50 mt-3">
          <Dropdown items={menuData} className="w-[1150px] h-[300px]" />
        </div>
      )}
    </div>
  );
};

export default IplLegal;