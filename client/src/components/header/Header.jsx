// src/components/Header.jsx
import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import ExploreDropdown from "./ExploreUs";
import Compliance from "./Compliance";
import CompanySet from "./CompanySet";
import GstReturnDropdown from "./GstReturn";
import IpLegal from "./IpLegal";
import OtherReg from "./OtherReg";
import { Link } from "react-router-dom";
import Watsup from "../../assets/icons/Whatsapp.png";
import phoneIcon from "../../assets/icons/phone.png";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link
            to="/"
            className="font-bold text-lg text-gray-800 hover:text-blue-600 transition-colors"
          >
            EBIZ PANJIYAN
          </Link>
        </div>

        <nav className="hidden md:flex space-x-2 text-gray-600 font-light relative">
          <a href="/" className="hover:text-blue-600">
            <CompanySet />
          </a>
          <a href="/" className="hover:text-blue-600">
            <Compliance />
          </a>
          <a href="/" className="hover:text-blue-600">
            <GstReturnDropdown />
          </a>
          <a href="/" className="hover:text-blue-600">
            <IpLegal />
          </a>
          <a href="/" className="hover:text-blue-600">
            <OtherReg />
          </a>
          <a href="/" className="hover:text-blue-600  mt-2">
            <ExploreDropdown />
          </a>
        </nav>

        <div className="flex items-center ">
         
          <a
            href="tel:+91 8602222494"
            className="flex items-center space-x-0.5  text-black hover:text-blue-600 font-semibold"
          >
            <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
            <span>+91 8602222494</span>
          </a>
          <a
            href="https://wa.me/8602222494"
            target="_blank"
            rel="noopener noreferrer"
          >
          
           <img
              src={Watsup}
              alt="WhatsApp"
              className="w-5 h-5 ml-5 mr-2" 
            />
            </a>
          <Link to="/contact">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-transparent  py-1 px-5 font-medium text-sm text-[#001C35] transition-all duration-500 ease-out hover:bg-[#001C35]">
              {/* Default state: Get In Touch */}
              <span className="flex items-center gap-3 transition-all duration-300 ease-out group-hover:opacity-0 group-hover:translate-x-[-20px]">
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

              {/* Hover state: Request a Callback slides in */}
              <span className="absolute flex items-center gap-1 opacity-0 -translate-x-20 transition-all duration-800 ease-out group-hover:opacity-300 group-hover:translate-x-0 ">
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
      </div>
    </header>
  );
};

export default Header;
