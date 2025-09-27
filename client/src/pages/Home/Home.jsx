import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import heroAnimation from "../../components/lottie/hero.json";
import {
  FaBuilding,
  FaFileInvoice,
  FaTrademark,
  FaBalanceScale,
} from "react-icons/fa";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import Slider from "./Slider";
import ProcessSteps from "./ProcessSection";
import ReviewCard from "./ReviewCard";

const Home = () => {
  return (
    <main className="pt-16">
      {/* ---------- Hero Section ---------- */}
      <div className="relative bg-[#EBF4FF] pt-12 md:pt-16 pb-16 md:pb-24 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            
            {/* Left Side: Text Content */}
            <div className="text-center md:text-left">
              <p className="text-blue-600 font-semibold">
                Get Company Registration & Compliance Solutions Under One Roof!
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-5 mb-6 leading-tight">
                <Typewriter
                  words={["Top-Rated Business Services in Just a Few Taps"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="text-gray-700 max-w-full sm:max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
                Register your company with ease and compliance. Get expert
                guidance and support, end-to-end documentation, and fast
                approvals.
              </p>

              {/* Services list */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-left">
                <a
                  href="#"
                  className="flex items-center space-x-3 text-base font-medium hover:text-blue-600"
                >
                  <FaBuilding className="text-blue-600 text-xl" />
                  <span>Company Registration</span>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-3 text-base font-medium hover:text-blue-600"
                >
                  <FaFileInvoice className="text-blue-600 text-xl" />
                  <span>GST & Tax Filings</span>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-3 text-base font-medium hover:text-blue-600"
                >
                  <FaTrademark className="text-blue-600 text-xl" />
                  <span>Trademark Registration</span>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-3 text-base font-medium hover:text-blue-600"
                >
                  <FaBalanceScale className="text-blue-600 text-xl" />
                  <span>Legal & Compliance</span>
                </a>
              </div>

              <div className="mt-8 md:mt-10 flex justify-center md:justify-start">
                <Button>Register Now</Button>
              </div>
            </div>

            {/* Right Side: Illustration */}
            <div className="flex justify-center md:justify-end mt-8 md:mt-0">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <div className="aspect-[5/4]">
                  <Lottie
                    animationData={heroAnimation}
                    loop
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Feature Cards Section ---------- */}
      <section className="max-w-7xl mx-auto mt-8 md:mt-12 relative z-10 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <Card
            title="Expert Business Guidance"
            description="Get step-by-step assistance from professionals who understand your business and legal needs."
          />
          <Card
            title="Reliable & Compliant"
            description="Trusted by entrepreneurs for delivering reliable, government-compliant registration and compliance services."
          />
          <Card
            title="Expert Guidance"
            description="Get Professional help from our Trusted Experts for all your business needs."
          />
        </div>
      </section>

      {/* ---------- Other Sections ---------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <HeroSection />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <ProcessSteps />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <ServiceSection />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <Slider />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-16">
        <ReviewCard />
      </div>
    </main>
  );
};

export default Home;
