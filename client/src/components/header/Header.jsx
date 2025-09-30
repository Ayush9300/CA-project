// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import ExploreDropdown from "./ExploreUs";
import Compliance from "./Compliance";
import CompanySet from "./CompanySet";
import GstReturnDropdown from "./GstReturn";
import IpLegal from "./IpLegal";
import OtherReg from "./OtherReg";

import Watsup from "../../assets/icons/Whatsapp.png";
import phoneIcon from "../../assets/icons/phone.png";
import ezib from "../../assets/icons/logoezibbg.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={ezib} alt="Logo" className="w-12 h-12" />
          <Link
            to="/"
            className="font-bold text-lg text-gray-800 hover:text-blue-600 transition-colors"
            onClick={closeMobileMenu}
          >
            EBIZ PANJIYAN <div className="ml-0 mt-0">CENTER</div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-2 text-gray-600 font-light relative">
          <CompanySet />
          <Compliance />
          <GstReturnDropdown />
          <IpLegal />
          <OtherReg />
          <ExploreDropdown />
        </nav>

        {/* Right Section (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+918602222494"
            className="flex items-center space-x-1 text-black hover:text-blue-600 font-semibold"
          >
            <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
            <span>+91 8602222494</span>
          </a>
          <a
            href="https://wa.me/8602222494"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Watsup} alt="WhatsApp" className="w-5 h-5" />
          </a>
          <Link to="/contact" onClick={closeMobileMenu}>
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-transparent py-1 px-5 font-medium text-sm text-[#001C35] transition-all duration-500 ease-out hover:bg-[#001C35]">
              <span className="flex items-center gap-3 transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-x-5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#001C35]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
                <span className="text-sm">Get In Touch</span>
              </span>
              <span className="absolute flex items-center gap-1 opacity-0 -translate-x-20 transition-all duration-800 ease-out group-hover:opacity-100 group-hover:translate-x-0">
                <span className="text-sm text-white">Request a Callback</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-22 left-0 h-[calc(100%-4rem)] w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-6">
          <CompanySet onItemClick={closeMobileMenu} />
          <Compliance onItemClick={closeMobileMenu} />
          <GstReturnDropdown onItemClick={closeMobileMenu} />
          <IpLegal onItemClick={closeMobileMenu} />
          <OtherReg onItemClick={closeMobileMenu} />
          <ExploreDropdown onItemClick={closeMobileMenu} />
        </div>
      </div>

      {/* Removed Blur Overlay */}
    </header>
  );
};

export default Header;