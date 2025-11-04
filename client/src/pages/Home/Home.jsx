import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import heroAnimation from "../../components/lottie/hero.json";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import Slider from "./Slider";
import ProcessSteps from "./ProcessSection";
import ReviewCard from "./ReviewCard";
import service from "../../assets/icons/servicecompany.png";
import service1 from "../../assets/icons/servicegst.png";
import service2 from "../../assets/icons/servicetrademark.png";
import service3 from "../../assets/icons/servicelegal.png";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Home = () => {
  return (
    <main className="pt-16">
      <section className="relative bg-[#EBF4FF] pt-12 md:pt-16 pb-16 md:pb-24 pt-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Text (desktop left, mobile below image) */}
            <motion.div
              className="text-center md:text-left order-last md:order-last"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
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
                {[ 
                  { icon: service, text: "Company Registration" },
                  { icon: service1, text: "GST & Tax Filings" },
                  { icon: service2, text: "Trademark Registration", small: true },
                  { icon: service3, text: "Legal & Compliance" },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="flex items-center space-x-3 text-base font-medium hover:text-blue-600"
                    variants={fadeUp}
                  >
                    <img
                      src={item.icon}
                      alt="Logo"
                      className={`w-6 ${item.small ? "h-3" : "h-6"}`}
                      style={{
                        filter:
                          "grayscale(100%) brightness(0.4) invert(0.3) sepia(1) saturate(5000%) hue-rotate(200deg) contrast(0.9)",
                      }}
                    />
                    <span>{item.text}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 md:mt-10 flex justify-center md:justify-start">
                <motion.div variants={fadeUp}>
                  <Button>Register Now</Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Image (desktop right, mobile top) */}
            <motion.div
              className="flex justify-center md:justify-end order-first md:order-last mt-0 md:mt-0"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <div className="aspect-[5/4]">
                  <Lottie
                    animationData={heroAnimation}
                    loop
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <motion.section
        className="relative z-10 -mt-20 md:-mt-24 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 py-10" 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 ">
          <motion.div variants={fadeUp}>
            <Card
              title="Expert Business Guidance"
              description="Get step-by-step assistance from professionals who understand your business and legal needs."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <Card
              title="Reliable & Compliant"
              description= "Trusted by entrepreneurs for delivering reliable, government-compliant services."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <Card
              title="Expert Guidance"
              description="Get Professional help from our Trusted Experts for all your business needs."
            />
          </motion.div>
        </div>
        </div>
      </motion.section>

      {/* ---------- Other Sections ---------- */}
      {[
        HeroSection,
        ProcessSteps,
        ServiceSection,
        Slider,
        ReviewCard,
      ].map((Component, i) => (
        <motion.div
          key={i}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Component />
        </motion.div>
      ))}
    </main>
  );
};

export default Home;
