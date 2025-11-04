import React, { useState } from "react";
import { ChevronDown, ChevronUp, Check, ArrowRight } from "lucide-react";
import pvt from "../../ui/pvt.png";
import img from "../../../assets/icons/download.png";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import main1 from "../../../assets/main.jpg";
import main2 from "../../../assets/main1.jpg";
import main3 from "../../../assets/main2.jpg";
// Common animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export const HeroSection = ({ heroContent, title = [] }) => {
  return (
    <motion.div
      className="min-w-8xl space-y-8 mt-[100px]"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Tagline */}
      <p className="text-[#0058BA] font-bold">{heroContent?.tagline}</p>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 ">
        {Array.isArray(title) && title.length > 0
          ? title.map((word, index) => (
              <span key={index} className={index === 1 ? "text-blue-900" : ""}>
                {word}{" "}
              </span>
            ))
          : heroContent?.title}
      </h1>

      {/* Highlights */}
      <ul className="space-y-4 text-gray-700">
        {heroContent?.highlights?.map((highlight, index) => (
          <li key={index} className="flex items-start gap-2">
            <span>👉</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {/* Description */}
      <p className="text-gray-600">{heroContent?.description}</p>
    </motion.div>
  );
};
export const FormSection = () => {
  return (
    <motion.div
      id="complianceForm"
      className="mt-30 p-8 hidden md:block"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex justify-center">
        <div className="W-[550px] border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true, // dots for navigation
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={main1}
                alt="Promotion 1"
                className="w-full h-[350px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={main2}
                alt="Promotion 2"
                className="w-full h-[350px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={main3}
                alt="Promotion 3"
                className="w-full h-[350px] object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export const PricingSection = ({ plans, headings }) => {
  return (
     <motion.div
      className="max-w-7xl mx-auto md:col-span-2 mt-10 px-4 text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Headings Section */}
      {headings?.tagline && (
        <p className="text-[#0058BA] font-medium uppercase text-sm mb-3 sm:mb-5">
          {headings.tagline}
        </p>
      )}

      {headings?.title && (
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
          {headings.title}
        </h2>
      )}

      {headings?.subtitle && (
        <h2 className="text-2xl sm:text-4xl font-bold text-[#0058BA] mb-6">
          {headings.subtitle}
        </h2>
      )}

      {headings?.description && (
        <p className="text-gray-600 text-sm sm:text-base mt-4 mb-10 max-w-2xl mx-auto leading-relaxed">
          {headings.description}
        </p>
      )}

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-6 sm:p-8 lg:p-9 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] bg-white flex flex-col ${
              plan.popular ? "border-2 border-blue-600" : "border border-gray-200"
            }`}
          >
            {/* Popular Tag */}
            {plan.popular && (
              <div className="absolute -top-3 right-3 bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transform rotate-6 shadow-md">
                POPULAR
              </div>
            )}

            {/* Icon */}
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 rounded-2xl ${plan.color} flex items-center justify-center text-2xl`}
            >
              {plan.icon}
            </div>

            {/* Plan Title */}
            <h3
              className={`text-lg sm:text-xl font-bold text-center mb-5 ${plan.textColor}`}
            >
              {plan.name}
            </h3>

            {/* Price */}
            <div className="text-center mb-6">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                {plan.price}
              </div>
              <div className="text-gray-500 text-xs sm:text-sm">{plan.gst}</div>
            </div>

            {/* Features */}
            <div className="flex-1 flex flex-col space-y-2 sm:space-y-3 text-left">
              {plan.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-center space-x-2 sm:space-x-3"
                >
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-800" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              className={`w-full py-2 sm:py-3 mt-6 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 ${plan.buttonStyle}`}
            >
              <span>
                Get {plan.name.charAt(0) + plan.name.slice(1).toLowerCase()}
              </span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const AboutSection = ({ aboutContent }) => {
  return (
    <motion.div
      className="hidden md:block md:col-span-2 mt-20 px-4 min-w-7xl mx-auto"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            {aboutContent.title}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={pvt}
            alt="Private Limited Company Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </motion.div>
  );
};
export const BusinessStructureSection = ({ businessStructures }) => {
  return (
      <motion.div
      className="md:col-span-2 mt-20 px-4"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Selecting the Ideal Business Structure for Your Company
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessStructures.map((structure, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {structure.title.split(structure.highlight)[0]}
                <span className="text-blue-600"> {structure.highlight}</span>
                {structure.title.split(structure.highlight)[1]}
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                {structure.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export const DocumentsSection = ({ documents, title }) => {
  return (
       <motion.div
      className="md:col-span-2 mt-20 px-4"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-start mb-12">
            <h2 className="text-3xl md:text-3xl font-medium text-gray-900 leading-tight">
              {title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-100 h-64 relative">
                <img
                  src={img}
                  alt="Documents illustration"
                  className="w-[600px] h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-medium text-lg text-gray-600">
                      {doc.id}.
                    </div>
                    <div>
                      <h3 className="font-medium text-black">{doc.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export const ComplianceSection = ({ complianceData }) => {
  return (
        <motion.div
      className="md:col-span-2 mt-20 px-4"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-16">
            {complianceData.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-28">
            {/* Left Side */}
            <div className="space-y-8">
              {/* Why it Matters Section */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {complianceData.whyMatters.title}
                </h3>
                <p className="text-gray-700 leading-relaxed max-w-4xl">
                  {complianceData.whyMatters.description}
                </p>
              </div>
              {/* Left Items */}
              {complianceData.items.left.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-right text-sm max-w-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Button */}
              <div>
                <div className="flex justify-between items-start">
                  <button
                    onClick={() => {
                      const formSection =
                        document.getElementById("complianceForm");
                      formSection?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-transparent py-1 px-5 font-medium text-sm text-[#001C35] transition-all duration-500 ease-out hover:bg-[#001C35]"
                  >
                    <span className="flex items-center gap-3 transition-all duration-300 ease-out group-hover:opacity-0 group-hover:translate-x-[-20px]">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#001C35]">
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
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </span>
                      <span className="text-[16px]">
                        Get Help with Compliance
                      </span>
                    </span>

                    <span className="absolute flex items-center gap-1 opacity-0 -translate-x-20 transition-all duration-800 ease-out group-hover:opacity-300 group-hover:translate-x-0">
                      <span className="text-[16px] text-white">
                        Get Help with Compliance
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
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-8">
              {complianceData.items.right.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-right text-sm max-w-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export const StepsSection = ({ stepsData }) => {
  return (
        <motion.div
      className="md:col-span-2 mt-20 px-4"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-full  mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-200 rounded-full opacity-30 transform translate-x-24 translate-y-24"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                {stepsData.title}
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {stepsData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
              {stepsData.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export const FAQSection = ({ faqData, openIndex, toggleFAQ }) => {
  return (
        <motion.div
      className="md:col-span-2 mt-20 px-4 mb-10"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-left text-gray-800 transition-colors"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-600 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


