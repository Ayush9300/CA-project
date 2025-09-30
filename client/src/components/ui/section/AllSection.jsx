import React, { useState } from "react";
import { ChevronDown, ChevronUp, Check, ArrowRight } from "lucide-react";
import pvt from "../../ui/pvt.png";
import img from "../../../assets/icons/download.png";
import Checkbox from "../../ui/Checkbox";
import { FaArrowRightLong } from "react-icons/fa6";

export const HeroSection = ({ heroContent, title = [] }) => {
  return (
    <div className=" min-w-8xl  space-y-8  mt-[150px]">
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
    </div>
  );
};

export const FormSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        agreement: false,
      });
      setErrors({});
    }
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  return (
    <div id="complianceForm" className=" mt-30 p-8 ">
      <h2 className="text-2xl font-medium text-gray-900 mb-10">
        Register Today, Secure Your Future
      </h2>
      <form className="space-y-6 w-[460px]" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <input
              type="text"
              name="firstName"
              id="first-name"
              placeholder="Enter your first name"
              autoComplete="given-name"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className={`mt-1 block w-full border-b ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-none py-2 px-0 focus:outline-none focus:ring-0 focus:border-[#03286d]`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              id="last-name"
              placeholder="Enter your last name"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className={`mt-1 block w-full border-b ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded-none py-2 px-0 focus:outline-none focus:ring-0 focus:border-[#03286d]`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`mt-1 block w-full border-b ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-none py-2 px-0 focus:outline-none focus:ring-0 focus:border-[#03286d]`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,10}$/.test(value)) {
                handleChange("phone", value);
              }
            }}
            className={`mt-1 block w-full border-b ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-none py-2 px-0 focus:outline-none focus:ring-0 focus:border-[#03286d]`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Enter your message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className={`mt-1 block w-full border-b ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-none py-2 px-0 focus:outline-none focus:ring-0 focus:border-[#03286d]`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div> */}

        {/* ✅ Checkbox Section */}
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <Checkbox
              id="agreement"
              checked={formData.agreement}
              onChange={(checked) => handleChange("agreement", checked)}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="agreement" className="font-normal text-gray-600">
              I agree to the terms of use of the taxbizlegal.com and the{" "}
              <a href="/terms-conditions" className="text-blue-600 underline">
                Terms & Conditions
              </a>{" "}
              and the{" "}
              <a href="/privacy-policy" className="text-blue-600 underline">
                Privacy Policy
              </a>
              .
            </label>
            {errors.agreement && (
              <p className="text-red-500 text-sm mt-1">{errors.agreement}</p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex items-center justify-start gap-2 py-2 px-5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-[#03287d] cursor-pointer "
          >
            Enquiry Now <FaArrowRightLong />
          </button>
        </div>
      </form>
    </div>
  );
};
export const PricingSection = ({ plans, headings }) => {
  return (
    <div className="min-w-7xl mx-auto md:col-span-2 mt-10 px-4 text-center">
      {headings?.tagline && (
        <p className="text-[#0058BA] font-medium uppercase text-sm mb-5">
          {headings.tagline}
        </p>
      )}

      {headings?.title && (
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {headings.title}
        </h2>
      )}

      {headings?.subtitle && (
        <h2 className="text-4xl font-bold text-[#0058BA]">
          {headings.subtitle}
        </h2>
      )}

      {headings?.description && (
        <p className="text-gray-600 mt-7 mb-10 max-w-2xl mx-auto">
          {headings.description}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-9 shadow-xl transition-all duration-300 hover:scale-105 bg-white flex flex-col ${
              plan.popular ? "border-2 border-blue-600" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transform rotate-12 shadow-lg">
                POPULAR
              </div>
            )}

            <div
              className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${plan.color} flex items-center justify-center text-2xl`}
            >
              {plan.icon}
            </div>

            <h3
              className={`text-lg font-bold text-center mb-6 ${plan.textColor}`}
            >
              {plan.name}
            </h3>

            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {plan.price}
              </div>
              <div className="text-gray-500 text-sm">{plan.gst}</div>
            </div>

            {/* Features container */}
            <div className="flex-1 flex flex-col space-y-2">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3">
                  <Check className="w-3 h-3 text-green-800" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Button at the bottom */}
            <button
              className={`w-full py-2 rounded-lg font-semibold text-sm mt-5 transition-all duration-300 flex items-center justify-center space-x-2 ${plan.buttonStyle}`}
            >
              <span>
                Get {plan.name.charAt(0) + plan.name.slice(1).toLowerCase()}
              </span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AboutSection = ({ aboutContent }) => {
  return (
    <div className="md:col-span-2 mt-20 px-4 min-w-7xl mx-auto">
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
    </div>
  );
};
export const BusinessStructureSection = ({ businessStructures }) => {
  return (
    <div className="md:col-span-2 mt-20 px-4">
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
    </div>
  );
};
export const DocumentsSection = ({ documents, title }) => {
  return (
    <div className="md:col-span-2 mt-20 px-4">
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
    </div>
  );
};
export const ComplianceSection = ({ complianceData }) => {
  return (
    <div className="md:col-span-2 mt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-16">
            {complianceData.title}
          </h2>

          {/* <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {complianceData.whyMatters.title}
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl">
              {complianceData.whyMatters.description}
            </p>
          </div> */}

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
    </div>
  );
};
export const StepsSection = ({ stepsData }) => {
  return (
    <div className="md:col-span-2 mt-20 px-4">
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
    </div>
  );
};
export const FAQSection = ({ faqData, openIndex, toggleFAQ }) => {
  return (
    <div className="md:col-span-2 mt-20 px-4 mb-10">
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
    </div>
  );
};
