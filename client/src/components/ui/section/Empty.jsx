import React from "react";
import pik from "../../../assets/icons/404bg.png";
import { Link } from "react-router-dom";

const ComingSoon = ({ title, description }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-27">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#001C35] leading-tight">
            {title}
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>

          {/* Get In Touch Button */}
          <div className="flex justify-center lg:justify-start">
            <Link to="/">
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-[#001C35] bg-transparent py-2 px-6 font-medium text-sm text-[#001C35] transition-all duration-500 ease-out hover:bg-[#001C35]">
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
                  <span className="text-sm">Return to Home</span>
                </span>

                <span className="absolute flex items-center gap-1 opacity-0 -translate-x-20 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-x-0">
                  <span className="text-sm text-white">
                    Return to Homepage
                  </span>
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

        {/* Right Side - Image */}
        <div className="flex justify-center items-center">
          <img
            src={pik}
            alt="Coming Soon Illustration"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
