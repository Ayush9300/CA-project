import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { MobileDropdown } from "../ui/Dropdown"; // <-- same import style as OtherReg

const ExploreDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const items = [
    { label: "Contact Us", href: "/contact" },
    { label: "About Us", href: "/about" },
    { label: "Blogs", href: "/blogs" },
  ];

  // Detect screen size for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
    }
  };
   const handleItemClick = () => {
    setOpen(false);
    if (onItemClick) onItemClick();
  };


  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-medium mt-2"
        onClick={() => isMobile && setIsOpen((prev) => !prev)}
      >
        <span className="mb-1 text-gray-500 transition-colors font-medium">
          Explore Us
        </span>
        <FiChevronDown
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Mobile View */}
      {isMobile && (
        <MobileDropdown
          items={[
            {
              title: "Explore Us",
              items: items.map((item) => ({
                name: item.label,
                path: item.href,
              })),
            },
          ]}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onItemClick={handleItemClick}
          title="Explore Us"
        />
      )}

      {/* Desktop View */}
      {!isMobile && isOpen && (
        <div className="absolute mt-8 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <ul className="flex flex-col">
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 border border-transparent hover:border-gray-200 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExploreDropdown;
