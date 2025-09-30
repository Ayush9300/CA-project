import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import Dropdown, { MobileDropdown } from "../ui/Dropdown";

const GstReturnDropdown = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const menuData = [
    {
      title: "GST SERVICES",
      items: [
        { name: "GST Registration", description: "Get your business GST registered and ready to trade.", isNew: true, path: "/GST/Registration" },
        { name: "GST LUT", description: "File your Letter of Undertaking (LUT) for zero tax exports.", path: "/GST/LUT" },
        { name: "GST Cancellation", description: "Close your GST registration officially without hassles.", path: "/GST/Cancellation" },
      ],
    },
    {
      title: "RETURN FILING",
      items: [
        { name: "GST Returns", description: "File your GST returns accurately and on time.", isNew: true, path: "/GST/Returns" },
        { name: "Income Tax Returns", description: "File your income tax returns smartly and securely.", isNew: true, path: "/IncomeTax/Returns" },
        { name: "PF Returns", description: "Submit employee provident fund returns smoothly.", path: "/PF/Returns" },
        { name: "ESI Returns", description: "File your employee state insurance returns easily.", path: "/ESI/Returns" },
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
      ref={dropdownRef}
      className="relative inline-block"
      onMouseEnter={!isMobile ? handleMouseEnter : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
    >
      {/* Button */}
      <button
        className="items-center py-2 hover:text-blue-600 font-medium transition-colors duration-200 relative flex"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>GST & Returns</span>
        <FiChevronDown
          className={`ml-1 mt-1 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* Mobile Dropdown */}
      {isMobile && (
        <MobileDropdown
          items={menuData}
          isOpen={open}
          onClose={() => setOpen(false)}
          onItemClick={handleItemClick}
          title="GST & Returns"
        />
      )}

      {/* Desktop Dropdown */}
      {!isMobile && open && (
        <div className="absolute top-full right-0 items-center z-0 mt-3">
          <Dropdown items={menuData} className="w-[1200px] h-[350px]" />
        </div>
      )}
    </div>
  );
};

export default GstReturnDropdown;