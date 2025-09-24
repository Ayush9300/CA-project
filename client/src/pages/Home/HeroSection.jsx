import React from "react";
import Button from "../../components/ui/Button";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineMoneyOff } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import supportImg from "../../assets/hero.webp"; 

const HeroSection = () => {
  return (
   <section className="bg-blue-50 py-16 rounded-2xl">
  <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between ">
    
    {/* Left Content */}
    <div className="flex-1">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
        Why Do Customers Love Us?
      </h2>
      <p className="text-gray-600 mb-5 max-w-2xl">
        We provide hassle-free legal and financial solutions with expert
        assistance, ensuring transparency and efficiency at every step.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Card 1 */}
        <div>
          <MdOutlineMoneyOff className="text-blue-600 text-2xl mb-3" />
            <h3 className="font-semibold text-sm text-gray-900 mb-1">
            Affordable Professional Services
          </h3>
          <p className="text-gray-600 text-sm">
            Get expert legal and financial assistance at competitive prices,
            tailored to your needs.
          </p>
        </div>

        {/* Card 2 */}
        <div>
          <RiTeamLine className="text-blue-600 text-2xl mb-3" />
          <h3 className="font-semibold text-sm text-gray-900 mb-1">
            Diverse Expert Network
          </h3>
          <p className="text-gray-600 text-sm">
            Consult top-tier lawyers, CA, and secretaries for seamless
            compliance and advisory.
          </p>
        </div>

        {/* Card 3 */}
        <div>
          <FaCheckCircle className="text-blue-600 text-2xl mb-3" />
          <h3 className="font-semibold text-sm text-gray-900 mb-1">
            Quick Customer Support
          </h3>
          <p className="text-gray-600 text-sm">
            We value your time—get responses within 24 hours* with dedicated
            support.
          </p>
        </div>
      </div>

      {/* Button */}
      <Button>Talk to Expert Now →</Button>
    </div>

    {/* Right Image */}
    <div className="flex-1 flex justify-center">
      <img
        src={supportImg}
        alt="Customer Support"
        className="max-w-sm w-full lg:max-w-sm"
      />
    </div>
  </div>
</section>

  );
};

export default HeroSection;
