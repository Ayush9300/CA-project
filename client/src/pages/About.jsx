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


const About = () => {
  const steps = [
    {
      img: Step1,
      title: "Tell Us Your Needs",
      desc: "Simply submit your request, and we’ll take it from there. No paperwork, no confusion.",
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

  // Connector images between steps
  const connectors = [cross, equal];

  return (
    <div className="relative pt-[100px] ">
      {/* About Section */}
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left">
            <p className="text-blue-600 font-semibold">WHO WE ARE</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8">
              About <span className="text-blue-800">EBIZ PANJIYAN CENTER</span>
            </h1>
            <div className="text-gray-800 text-lg font-medium leading-relaxed space-y-4">
              <p>
                Welcome to TaxBizLegal.com, your trustworthy resource for
                compliance, tax, and legal solutions! We compress intricate
                legal, tax, and compliance procedures at TaxBizLegal.com so you
                can concentrate on expanding your company.
              </p>
              <p>
                Our committed group of experts provides full-service legal
                advice, taxation, regulatory compliance, and business
                registration and licensing. For companies of all sizes, from
                start-ups to well-established corporations, we aim to deliver
                smooth, dependable, and effective solutions.
              </p>
              <p>
                At TaxBizLegal.com, we understand that navigating legal, tax,
                and compliance landscapes can be complex and time-consuming. Our
                team of experienced professionals—lawyers, chartered
                accountants, and company secretaries—work tirelessly to simplify
                these processes, ensuring that businesses, whether startups or
                established enterprises, remain compliant without unnecessary
                hassle.
              </p>
              <p>
                From company registrations and tax filings to legal
                documentation and regulatory adherence, we provide comprehensive
                solutions tailored to your specific needs. Committed to
                transparency, efficiency, and affordability, we aim to be your
                trusted partner. With a seamless platform, expert guidance, and
                a customer-first approach, we simplify legal and tax compliance.
              </p>
              <p>
                At TaxBizLegal.com, we offer more than services—we provide peace
                of mind, so you can focus on growing your business.
              </p>
            </div>
          </div>

          {/* Right Side: Illustration */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[520px] lg:max-w-[620px]">
              <div className="aspect-[5/4] border-4 border-black rounded-xl overflow-hidden">
                <img
                  src={Hero}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <section className="bg-[#E6EFFD] py-20 mt-16">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
            We aim to provide{" "}
            <span className="text-blue-800">Stress-Free Services</span> Handled
            by <span className="text-blue-800">Experts</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center px-4">
                  <img src={step.img} alt={step.title} className="w-35 mb-4" />
                  <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>

                {/* Connector between steps */}
                {index < connectors.length && (
                  <div className="hidden md:flex items-center mx-2">
                    <img
                      src={connectors[index]}
                      alt="connector"
                      className="w-[55px] h-[55px]"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <div className="relative">
        {/* Mission Card */}
        <div className="max-w-7xl mx-auto bg-gray-50 rounded-xl overflow-hidden flex flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-6 mt-8 h-[550px] z-10 relative">
          {/* Left Image */}
          <div className="md:w-1/3 flex justify-center items-center  bg-gradient-to-br from-blue-300 to-blue-100 p-3">
            <img
              src={ladki1}
              alt="ladki1"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-2/3 flex flex-col justify-center">
            <div className="p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-800">Mission</span>
              </h2>
              <p className="text-blue-800 text-base font-medium mb-4">
                At TaxBizLegal.com, our mission is to simplify legal, tax, and
                compliance processes, making them accessible and hassle-free for
                businesses of all sizes. We are committed to providing expert
                guidance with efficiency, transparency, and affordability.
              </p>
              <p className="text-blue-800 text-base font-medium mb-4">
                We strive to empower entrepreneurs by handling complex
                regulations so they can focus on growth. Our dedicated
                professionals ensure accuracy, reliability, and timely support.
              </p>
              <p className="text-blue-800 text-base font-medium">
                By offering seamless digital solutions, we aim to be a trusted
                partner in every business journey, fostering success through
                compliance and strategic insights.
              </p>
            </div>

            {/* Authenticity Badge */}
            <div className="mt-4 flex justify-end mr-10">
              <img src={trust} alt="trust" className="w-28 h-auto " />
            </div>
          </div>
        </div>

        {/* Blue Section overlapping below */}

        <div className="h-[200vh] bg-[#001C35] -mt-52 relative z-0 flex items-center justify-center px-4">
          {/* Cards Container */}
          <div className="absolute top-20 left-10 space-y-6 mt-50 ml-20">
            <h1 className="text-8xl font-bold text-white mb-4">Our Values</h1>
            <div className="bg-blue-800 text-white p-6 rounded-lg w-70 h-80 shadow-lg mt-20">
              <div className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full mb-4">
                <FaAward />
              </div>
              <h3 className="font-bold text-lg mb-2">
                Complete Service Dedication
              </h3>
              <p className="text-sm">
                We are committed to customer satisfaction. Our team supports you
                at every step.
              </p>
            </div>

            {/* Card 2 */}

            <div className="bg-blue-800 text-white p-6 rounded-lg w-70 h-70  shadow-lg relative z-10  ">
              <div className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full mb-4">
                <FaAward />
              </div>
              <h3 className="font-bold text-lg mb-2">
                Complete Service Dedication
              </h3>
              <p className="text-sm">
                We are committed to customer satisfaction. Our team supports you
                at every step.
              </p>
            </div>
            <div className="text-center ml-80 ">
              <h1 className="text-6xl font-bold text-white mt-20 leading-tight">
                Got questions? <br /> We're just a call away!
              </h1>
              <Link to="/contact"> 
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-transparent mt-10 py-0 px-4 font-medium text-sm text-gray-300 transition-all duration-500 ease-out hover:bg-red-600">
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
                  <span className="text-sm text-white">Request a Callback</span>
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
              </Link>
            </div>
          </div>

          <div className="absolute top-10 right-10 space-y-6 mt-70 mr-20">
            <div className="bg-blue-800 text-white p-6 rounded-lg w-70  h-80 shadow-lg ">
              <div className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full mb-4">
                <FaLightbulb />
              </div>
              <h3 className="font-bold text-lg mb-2">Quick and Easy Process</h3>
              <p className="text-sm">
                Our platform ensures your legal work is completed quickly and
                efficiently.
              </p>
            </div>

            <div className="bg-blue-800 text-white p-6 rounded-lg w-70 h-80 shadow-lg">
              <div className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full mb-4">
                <FaUsers />
              </div>
              <h3 className="font-bold text-lg mb-2">
                Managed by Professionals
              </h3>
              <p className="text-sm">
                Every service is handled by skilled legal experts ensuring
                accuracy and reliability.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative z-10 w-full">
            <img
              src={ladkiImg}
              alt="Smiling Person"
              className="w-full h-[700px] object-contain relative z-10 "
            />
            <hr className="h-px bg-gray-400 border-0 mt-0 w-full relative z-0 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
