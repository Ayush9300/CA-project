import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import Checkbox from "../components/ui/Checkbox";
import { FaArrowRightLong } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreement: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Invalid phone number";
    }

    if (!formData.message.trim()) tempErrors.message = "Message is required";
    if (!formData.agreement)
      tempErrors.agreement = "You must agree to the terms";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await fetch("http://localhost:5000/api/contact/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.success) {
          toast.success("Message sent successfully! 🎉"); 
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            agreement: false,
          });
          setErrors({});
        } else {
          toast.error(data.message || "Something went wrong!"); // Error toast
        }
      } catch (error) {
        toast.error("Server error!"); // Error toast for network/server
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Hero Section */}
      <section className="py-20 bg-blue-50 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center sm:text-left">
              Get in <span className="text-blue-800">Touch</span>
            </h1>

            {/* Paragraphs */}
            <p className="text-base sm:text-lg font-medium max-w-3xl text-gray-800 leading-relaxed px-2 sm:px-0 text-left">
              At TaxBizLegal, we believe in clear communication—no hidden fees,
              no confusion. From explaining government rules to guiding you on
              pricing and timelines, we keep everything simple and transparent.
              So you can focus on your business, while we handle the legal
              details.
            </p>

            <p className="text-base sm:text-lg font-medium max-w-3xl text-gray-800 leading-relaxed px-2 sm:px-0 text-left">
              Have questions or need guidance? We’re here to help — you’re just
              a call away. Reach out to us and let’s talk about how we can
              support your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Contact Our Team
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Have questions about our services or want to discuss a project?
                Reach out to us using the information below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FaMapMarkerAlt className="h-6 w-6 text-[#03286d]" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Address</h3>
                  <p className="mt-1 text-gray-600">
                    Sector C-8 3rd floor, Indrapuri,
                    <br /> Raisen Road, Bhopal
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FaPhone className="h-6 w-6 text-[#03286d]" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">
                    +91 8602222494
                    <br />
                    Mon-Fri, 9am-7pm
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FaEnvelope className="h-6 w-6 text-[#03286d]" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">
                    info@techdigi.com
                    <br />
                    support@techdigi.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FaClock className="h-6 w-6 text-[#03286d]" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                  <p className="mt-1 text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className=" p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Register Today, Secure Your Future
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
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
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
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

              <div>
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
              </div>

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
                  <label
                    htmlFor="agreement"
                    className="font-normal text-gray-600"
                  >
                    By submitting the form, you agree to allow Tax Biz Legal
                    representative to contact you for service related assistance
                    and acknowledge that you accept our{" "}
                    <a
                      href="/terms-conditions"
                      className="text-blue-600 underline"
                    >
                      Terms & Conditions
                    </a>{" "}
                    and the{" "}
                    <a
                      href="/privacy-policy"
                      className="text-blue-600 underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                  {errors.agreement && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.agreement}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex items-center justify-start gap-2 py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-[#03287d] cursor-pointer "
                >
                  Send Message <FaArrowRightLong />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-200 h-96 w-full">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.2705937200886!2d77.464819!3d23.250426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c430a9ca2948b%3A0xaa66b8d00e4575c0!2sTechDigi%20Software%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1691876572829!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
