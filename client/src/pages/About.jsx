import React from "react";
import Hero from "../assets/hero.webp";
import Step1 from "../assets/services1.svg";
import Step2 from "../assets/services2.svg";
import Step3 from "../assets/services3.svg";
import cross from "../assets/cross.svg";
import equal from "../assets/equal.svg";
import ladki1 from "../assets/ladki1.webp";
import trust from "../assets/trust.jpg";
import ladkiImg from "../assets/ladki1.webp";
import { FaLightbulb, FaAward, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const steps = [
    {
      img: Step1,
      title: "Tell Us Your Needs",
      desc: "Simply submit your request, and we'll take it from there. No paperwork, no confusion.",
    },
    {
      img: Step2,
      title: "We Handle Everything",
      desc: "Our experts manage the entire process—documentation, verification, and submission.",
    },
    {
      img: Step3,
      title: "Relax & Get Results",
      desc: "Sit back while we complete the process. You'll be updated every step of the way!",
    },
  ];

  const connectors = [cross, equal];

  // Reusable animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative pt-[95px] lg:pt-[100px] overflow-hidden">
      {/* About Section */}
      <motion.div
        className="w-[95%] lg:w-[90%] mx-auto px-2 sm:px-4 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="container mx-auto px-2 sm:px-6 grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Side: Text */}
          <motion.div variants={fadeUp}>
            <p className="text-blue-600 font-semibold text-sm lg:text-base">
              WHO WE ARE
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 lg:mb-8">
              About <span className="text-blue-800">EzipPanjiyan</span>
            </h1>
            <div className="text-gray-800 text-sm sm:text-base lg:text-lg font-medium leading-relaxed space-y-3 lg:space-y-4">
              <p>
                Welcome to{" "}
                <span className="font-semibold text-blue-900">
                  EzipPanjiyan
                </span>{" "}
                — your reliable partner for legal, tax, and compliance
                solutions. We simplify complex processes so you can focus on
                growing your business with confidence.
              </p>
              <p>
                Our expert team offers complete support in company registration,
                taxation, and regulatory compliance for startups and established
                enterprises alike.
              </p>
              <p>
                At{" "}
                <span className="font-semibold text-blue-900">
                  EzipPanjiyan
                </span>
                , we combine transparency, efficiency, and affordability to
                deliver seamless services and peace of mind — helping your
                business stay compliant and thrive.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Illustration */}
          <motion.div
            className="flex justify-center md:justify-end mt-6 md:mt-0"
            variants={fadeIn}
          >
            <motion.img
              src={Hero}
              alt="Hero"
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[520px] xl:max-w-[620px]"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Steps Section */}
      <motion.section
        className="bg-[#E6EFFD] py-10 lg:py-20 mt-8 lg:mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-8 lg:mb-12 px-2"
            variants={fadeUp}
          >
            We aim to provide{" "}
            <span className="text-blue-800">Stress-Free Services</span> Handled
            by <span className="text-blue-800">Experts</span>
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className="flex flex-col items-center text-center px-2 lg:px-4 max-w-xs"
                  variants={fadeUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-24 sm:w-32 mb-3 lg:mb-4"
                  />
                  <h3 className="font-bold text-lg lg:text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>

                {index < connectors.length && (
                  <motion.div
                    className="hidden md:flex items-center mx-2"
                    variants={fadeIn}
                  >
                    <img
                      src={connectors[index]}
                      alt="connector"
                      className="w-[55px] h-[55px]"
                    />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="hidden lg:flex lg:w-1/3 justify-center items-center bg-gradient-to-br from-blue-300 to-blue-100 rounded-xl overflow-hidden relative ">
          {/* Main Image */}
          <motion.img
            src={ladki1}
            alt="Our Mission"
            className="w-full max-w-sm rounded-lg object-contain rounded-br-[360px]"
            whileHover={{ scale: 1.05 }}
          />

          {/* Small Circular Image at Bottom-Right */}
          <motion.img
            src={trust}
            alt="Authenticity"
            className="absolute bottom-0 right-0 w-20 lg:w-28 rounded-full  shadow-lg"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </div>

        <motion.div
          className="lg:w-2/3  p-6 sm:p-8 lg:p-10 relative "
          variants={fadeUp}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-800">Mission</span>
          </h2>
          <p className="text-blue-800 text-base font-medium mb-4 leading-relaxed">
            At{" "}
            <span className="font-semibold text-blue-900">EbizPanjiyan.com</span>
            , our mission is to simplify legal, tax, and compliance processes,
            making them accessible and hassle-free for businesses of all sizes.
            We are committed to providing expert guidance with efficiency,
            transparency, and affordability.
          </p>
          <p className="text-blue-800 text-base font-medium mb-4 leading-relaxed">
            We strive to empower entrepreneurs by handling complex regulations
            so they can focus on growth. Our dedicated professionals ensure
            accuracy, reliability, and timely support.
          </p>
          <p className="text-blue-800 text-base font-medium leading-relaxed">
            By offering seamless digital solutions, we aim to be a trusted
            partner in every business journey, fostering success through
            compliance and strategic insights.
          </p>
        </motion.div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        className="bg-[#001C35] text-white py-20 px-4 sm:px-8 relative z-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            variants={fadeUp}
          >
            Our Values
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 relative">
            {/* Left Cards */}
            <motion.div
              className="flex flex-col items-end gap-8"
              variants={fadeUp}
            >
              <motion.div
                className="bg-blue-800 p-6 sm:p-8 rounded-2xl shadow-lg w-72"
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <FaAward className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Complete Service Dedication
                </h3>
                <p className="text-sm leading-relaxed">
                  We are committed to customer satisfaction. Our team supports
                  you at every step with full dedication.
                </p>
              </motion.div>

              <motion.div
                className="bg-blue-800 p-6 sm:p-8 rounded-2xl shadow-lg w-72"
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <FaLightbulb className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Quick and Easy Process
                </h3>
                <p className="text-sm leading-relaxed">
                  Our platform ensures your legal work is completed efficiently
                  and hassle-free.
                </p>
              </motion.div>
            </motion.div>

            {/* Center Image */}
            <motion.div
              className="hidden lg:flex flex-col justify-center items-center"
              variants={fadeIn}
            >
              <motion.img
                src={ladkiImg}
                alt="Our Team"
                className="w-[280px] sm:w-[350px] lg:w-[400px] h-auto object-contain"
                whileHover={{ scale: 1.05 }}
              />
              <hr className="w-full border-t-2 border-gray-400 opacity-70 mt-4" />
            </motion.div>

            {/* Right Cards */}
            <motion.div
              className="flex flex-col items-start gap-8"
              variants={fadeUp}
            >
              <motion.div
                className="bg-blue-800 p-6 sm:p-8 rounded-2xl shadow-lg w-72"
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <FaUsers className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Managed by Professionals
                </h3>
                <p className="text-sm leading-relaxed">
                  Every service is handled by skilled legal experts ensuring
                  accuracy and reliability.
                </p>
              </motion.div>

              <motion.div
                className="bg-blue-800 p-6 sm:p-8 rounded-2xl shadow-lg w-72"
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <FaLightbulb className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Quick and Easy Process
                </h3>
                <p className="text-sm leading-relaxed">
                  Our platform ensures your legal work is completed efficiently
                  and hassle-free.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-20"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">
              Got questions? <br /> We're just a call away!
            </h3>
            <Link to="/contact">
                <motion.button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-transparent  py-0 px-4 font-medium text-sm text-gray-300 transition-all duration-500 ease-out hover:bg-red-600">
                  {/* Default state: Get In Touch */}
                  <span className="flex items-center gap-3 transition-all duration-300 ease-out group-hover:opacity-0 group-hover:translate-x-[-20px]">
                    <span className="flex h-8 w-9 items-center justify-center rounded-lg bg-red-600">
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
                    <span className="text-sm">Get In Touch</span>
                  </span>

                  {/* Hover state: Request a Callback slides in */}
                  <span className="absolute flex items-center gap-1 opacity-0 -translate-x-20 transition-all duration-800 ease-out group-hover:opacity-300 group-hover:translate-x-0">
                    <span className="text-sm text-white">
                  Request a Callback
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
                </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
