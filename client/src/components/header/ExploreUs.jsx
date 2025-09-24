import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const ExploreDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null); // Timer reference

  const items = [
    { label: "Contact Us", href: "/contact" },
    { label: "About Us", href: "/about" },
    { label: "Blogs", href: "/blogs" },
  ];

  // Close the dropdown if clicking outside
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
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Cancel closing timer
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200); // Close after 200ms
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-medium">
        <span className="mb-1 text-gray-500 transition-colors font-medium">
          Explore Us
        </span>
        <FiChevronDown />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-5   items-center w-55 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
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
