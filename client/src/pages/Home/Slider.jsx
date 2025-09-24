import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { SiGodaddy, SiTrustpilot, SiRazorpay } from "react-icons/si";
import { RiMetaLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const Slider = () => {
  const backendTechnologies = [
    { icon: <FcGoogle className="text-5xl" />, name: "Google" },
    { icon: <SiGodaddy className="text-5xl text-gray-700" />, name: "GoDaddy" },
    { icon: <RiMetaLine className="text-5xl text-blue-700" />, name: "Meta" },
    { icon: <SiTrustpilot className="text-5xl text-green-600" />, name: "Trustpilot" },
    { icon: <SiRazorpay className="text-5xl text-blue-600" />, name: "Razorpay" },
    { icon: <SiGodaddy className="text-5xl text-gray-700" />, name: "GoDaddy" },
    { icon: <FcGoogle className="text-5xl" />, name: "Google" },
    { icon: <RiMetaLine className="text-5xl text-blue-700" />, name: "Meta" },
    { icon: <SiTrustpilot className="text-5xl text-green-600" />, name: "Trustpilot" },
    { icon: <SiRazorpay className="text-5xl text-blue-600" />, name: "Razorpay" },
  ];

  return (
    <div className="py-4 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading above the slider */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Our Trusted Partners
        </h2>
        <p className="mb-10 text-center max-w-2xl mx-auto text-gray-600">
          We've partnered with leading companies to deliver the best solutions.
        </p>

        {/* Slider Section */}
        <div className="w-[90%] mx-auto"> {/* 90% width wrapper */}
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            speed={3000}
            loop={true}
            breakpoints={{
              480: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              768: { slidesPerView: 6 },
              1024: { slidesPerView: 6 },
            }}
            modules={[Autoplay]}
            className="py-2"
          >
            {backendTechnologies.map((tech, index) => (
              <SwiperSlide key={`backend-${index}`}>
                <div className="flex items-center p-2 space-x-4 transition duration-300">
                  {tech.icon}
                  <h3 className="text-2xl font-medium text-gray-900">
                    {tech.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
