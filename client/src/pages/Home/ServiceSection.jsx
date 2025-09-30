import React from "react";
import { MdOutlineFoodBank } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsCashStack } from "react-icons/bs";
import { TbTrademark } from "react-icons/tb";
import { FaFileSignature } from "react-icons/fa6";
import Card from "../../components/ui/Card";
import service from "../../assets/icons/servicecompany.png";

const ServiceSection = () => {
  const services = [
    {
      icon: <BsCashStack className="text-3xl" />,
      title: "GST Registration",
      description:
        "Get your GST registration done quickly and effortlessly with our expert assistance.",
      active: true,
    },
    {
      // icon: (
        // <img
        //   src={service}
        //   alt="Logo"
        //   className="w-6 h-6 transition-all duration-300 hover:text-white"
        
    
      // icon: (
        // <img
        //   onMouseEnter={(e) =>
        //     (e.currentTarget.style.filter = "brightness(1000%) saturate(0%)")
        //   }
        //   onMouseLeave={(e) =>
        //     (e.currentTarget.style.filter =
        //       "grayscale(100%) brightness(0.3) invert(0.4) sepia(1) saturate(5000%) hue-rotate(180deg) contrast(0.8)")
        //   }
      //     style={{
      //       filter:
      //         "grayscale(100%) brightness(0.3) invert(0.4) sepia(1) saturate(5000%) hue-rotate(180deg) contrast(0.8)",
      //     }}
      //   />
      // ),

      icon: <HiOutlineBuildingOffice2 className="text-3xl" />,
      title: "Company Registration",
      description:
        "Start your business the right way with hassle-free company registration services.",
    },
    {
      icon: <MdOutlineFoodBank className="text-3xl" />,
      title: "FSSAI Registration",
      description:
        "Ensure your food business meets legal standards with expert FSSAI registration services tailored to your requirements.",
    },
    {
      icon: <TbTrademark className="text-3xl" />,
      title: "Trademark Registration",
      description:
        "Protect your brand identity with a hassle-free trademark registration process.",
    },
    {
      icon: <BsCashStack className="text-3xl" />,
      title: "Income Tax Return",
      description:
        "File your Income Tax Return accurately and on time with our expert assistance.",
    },
    {
      icon: <FaFileSignature className="text-3xl" />,
      title: "Legal Drafting",
      description:
        "Get professionally drafted legal documents tailored to your business needs.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-black-900 mb-10 text-center">
          Explore our Top-rated Services
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              title={
                <div className="flex items-center gap-2 text-gray-900 group-hover:text-white transition-colors duration-300">
                  <span className="text-blue-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </span>
                  <span className="group-hover:text-white">{service.title}</span>
                </div>
              }
              description={
                <span className="text-gray-600 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </span>
              }
              className={`p-6 text-left transform transition-all duration-300 group      
                ${
                  service.active
                    ? "bg-blue-700 text-white hover:bg-gradient-to-r from-blue-600 to-blue-900"
                    : "bg-white text-gray-900 hover:bg-gradient-to-r from-blue-600 to-blue-900 hover:text-white"
                }
                hover:-translate-y-2 shadow-md hover:shadow-xl
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
