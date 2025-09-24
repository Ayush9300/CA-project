import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/ui/Button";

const ProcessSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Book a Free Consultation",
      description:
        "Tell us what you need! Our experts will connect with you to understand your requirements and guide you through the process.",
    },
    {
      number: 2,
      title: "Pick the Right Service",
      description:
        "No Hidden Fees - Select from a wide range of professional services tailored to your needs. Our transparent process ensures you get exactly what you're looking for.",
    },
    {
      number: 3,
      title: "Get Your Documents Ready",
      description:
        "We'll provide you with a comprehensive checklist of required documents. Our team will review everything to ensure compliance and accuracy.",
    },
    {
      number: 4,
      title: "Sit Back & Relax",
      description:
        "Our experts handle all the paperwork and processes. You'll receive regular updates and your completed registration within the promised timeframe.",
    },
  ];

  return (
    <div className="min-h-screen pt-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            <span className="text-blue-800">Simple.</span>{" "}
            <span className="text-blue-800">Fast.</span>{" "}
            <span className="text-blue-800">Hassle-Free</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-2xl text-gray-700 font-medium">
            Get Started with Us in Just{" "}
            <span className="text-blue-800 font-bold">4 simple steps</span>{" "}
            curated Just for{" "}
            <span className="text-blue-800 font-bold">You</span>
          </h2>
        </div>

        {/* Steps Section */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-600"></div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex flex-col lg:flex-row items-start lg:items-center gap-8 relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }} 
              >
                {/* Step Number Circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center shadow-lg relative">
                    <span className="text-white text-2xl font-bold">
                      {step.number}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex flex-col items-center mt-2 animate-bounce-slow">
                      <span className="text-blue-800 text-sm">▼</span>
                    </div>
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 lg:ml-8">
                  <h3 className="text-2xl md:text-2xl lg:text-2xl font-bold text-gray-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>

      </div>
          

      {/* Custom Bounce Animation */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(4px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 1.5s infinite;
          }
        `}
      </style>
          
          <div className=" mt-10">
                   <Button>Talk to Expert Now →</Button>
            </div>

    </div>
  );
};

export default ProcessSteps;
