import React from "react";
import { ChevronDown, ChevronUp, Check, ArrowRight } from "lucide-react";
import pvt from "../../ui/pvt.png";
import img from "../../../assets/icons/download.png";
export const HeroSection = ({ heroContent }) => {
  return (
    <div className="space-y-6 mt-[150px]">
      <p className="text-blue-600 font-medium">{heroContent.tagline}</p>
      <h1 className="text-4xl font-bold text-gray-900">
        Start Your <span className="text-blue-600">Business</span> & Unlock
        Growth Opportunities!
      </h1>
      <ul className="space-y-4 text-gray-700">
        {heroContent.highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-2">
            <span>👉</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <p className="text-gray-600">{heroContent.description}</p>
    </div>
  );
};

export const FormSection = () => {
  return (
    <div
      id="complianceForm"
      className="bg-white shadow-md rounded-lg p-6 mt-[5rem]"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Register Today, Secure Your Future
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600">Name*</label>
          <input
            type="text"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Mobile number*</label>
          <input
            type="tel"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">E-mail*</label>
          <input
            type="email"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">State*</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Please select your current state"
              className="w-full border-b border-gray-300 py-2 pr-8 focus:outline-none focus:border-blue-500"
            />
            <div className="absolute right-2 top-2 text-gray-400">▼</div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            This'll be used to meet state-specific compliance needs.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I agree to the terms of use of the taxbizlegal.com and the privacy
            policy
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition-colors"
        >
          Enquire Now →
        </button>
      </form>
    </div>
  );
};
export const PricingSection = ({ plans }) => {
  return (
    <div className="md:col-span-2 mt-16 px-4 text-center">
      <p className="text-blue-600 font-medium uppercase text-sm mb-5">
        Transparent Pricing, No Hidden Charges
      </p>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Choose the Right Plan
      </h2>
      <h2 className="text-3xl font-bold text-gray-900">
        For your <span className="text-blue-600">Bussiness</span>
      </h2>
      <p className="text-gray-600 mt-7 mb-10 max-w-2xl mx-auto">
        Start your Business effortlessly with our tailored pricing plans. Start
        your journey today!
      </p>

      <div className="min-h-screen py-16 px-5">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-9 shadow-xl transition-all duration-300 hover:scale-105 ${
                  plan.popular ? "ring-2 ring-blue-700 ring-opacity-50" : ""
                } bg-white flex flex-col h-full min-h-[750px]`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 right-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transform rotate-12">
                    POPULAR
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${plan.color} flex items-center justify-center text-2xl`}
                >
                  {plan.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-bold text-center mb-6 ${plan.textColor}`}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {plan.price}
                  </div>
                  <div className="text-gray-500 text-sm">{plan.gst}</div>
                </div>

                {/* Features */}
                <div className="space-y-2 text-sm font-medium flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0 ">
                        <Check className="w-3 h-3 text-green-800 " />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button hamesha niche */}
                <button
                  className={`w-full py-2 rounded-lg font-semibold text-sm mt-auto transition-all duration-300 flex items-center justify-center space-x-2 ${plan.buttonStyle}`}
                >
                  <span>
                    Get{" "}
                    {plan.name.charAt(0) + plan.name.slice(1).toLowerCase()}
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const AboutSection = ({ aboutContent }) => {
  return (
    <div className="md:col-span-2 mt-20 px-4">
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
export const DocumentsSection = ({ documents,title }) => {
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
          <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-8">
            {complianceData.title}
          </h2>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {complianceData.whyMatters.title}
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl">
              {complianceData.whyMatters.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
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
              <div className="">
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
      <div className="max-w-7xl mx-auto">
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
    <div className="md:col-span-2 mt-20 px-4">
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
