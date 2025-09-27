import React from "react";
import Button from "../../components/ui/Button";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineMoneyOff } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import supportImg from "../../assets/hero.webp";

const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-12 md:py-16 px-4 sm:px-6 lg:px-12 rounded-2xl">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Why Do Customers Love Us?
          </h2>
          <p className="text-gray-600 mb-8 max-w-md sm:max-w-lg md:max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
            We provide hassle-free legal and financial solutions with expert
            assistance, ensuring transparency and efficiency at every step.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {/* Card 1 */}
            <div className="text-center sm:text-left">
              <MdOutlineMoneyOff className="text-blue-600 text-3xl mb-3 mx-auto sm:mx-0" />
              <h3 className="font-semibold text-base text-gray-900 mb-1">
                Affordable Professional Services
              </h3>
              <p className="text-gray-600 text-sm sm:text-sm">
                Get expert legal and financial assistance at competitive prices,
                tailored to your needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center sm:text-left">
              <RiTeamLine className="text-blue-600 text-3xl mb-3 mx-auto sm:mx-0" />
              <h3 className="font-semibold text-base text-gray-900 mb-1">
                Diverse Expert Network
              </h3>
              <p className="text-gray-600 text-sm sm:text-sm">
                Consult top-tier lawyers, CA, and secretaries for seamless
                compliance and advisory.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center sm:text-left">
              <FaCheckCircle className="text-blue-600 text-3xl mb-3 mx-auto sm:mx-0" />
              <h3 className="font-semibold text-base text-gray-900 mb-1">
                Quick Customer Support
              </h3>
              <p className="text-gray-600 text-sm sm:text-sm">
                We value your time—get responses within 24 hours* with dedicated
                support.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <Button>Talk to Expert Now →</Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={supportImg}
            alt="Customer Support"
            className="w-64 sm:w-72 md:w-80 lg:w-64 xl:w-80 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
