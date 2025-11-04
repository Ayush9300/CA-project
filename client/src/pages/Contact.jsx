import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import Checkbox from "../components/ui/Checkbox";
import { FaArrowRightLong } from "react-icons/fa6";

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
  const [statusMessage, setStatusMessage] = useState(""); // ✅ for success/error message
  const [statusType, setStatusType] = useState(""); // "success" or "error"
  const [loading, setLoading] = useState(false); // ✅ loading state

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName.trim())
      tempErrors.firstName = "First name is required";
    if (!formData.lastName.trim())
      tempErrors.lastName = "Last name is required";
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
    setStatusMessage("");
    setStatusType("");

    if (validate()) {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/api/contact/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.success) {
          setStatusMessage("✅ Message sent successfully!");
          setStatusType("success");

          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            agreement: false,
          });
          setErrors({});

          // auto-hide after 5 seconds
          setTimeout(() => setStatusMessage(""), 5000);
        } else {
          setStatusMessage(data.message || "❌ Something went wrong!");
          setStatusType("error");
          setTimeout(() => setStatusMessage(""), 5000);
        }
      } catch (error) {
        setStatusMessage("❌ Server error! Please try again later.");
        setStatusType("error");
        setTimeout(() => setStatusMessage(""), 5000);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="pt-25 flex items-center justify-center bg-blue-50 relative overflow-hidden px-4 sm:px-6 lg:px-8 p-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl w-full">
          <motion.div
            className="space-y-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Get in <span className="text-blue-800">Touch</span>
            </h1>
            <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
              At TaxBizLegal, we believe in clear communication—no hidden fees,
              no confusion. From explaining government rules to guiding you on
              pricing and timelines, we keep everything simple and transparent.
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
              Have questions or need guidance? We’re here to help — you’re just
              a call away. Reach out to us and let’s talk about how we can
              support your goals.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Info & Form */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Contact Our Team
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Have questions about our services or want to discuss a project?
                Reach out to us using the information below.
              </p>
            </div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              {[
                {
                  icon: <FaMapMarkerAlt className="h-6 w-6 text-[#03286d]" />,
                  title: "Address",
                  text: (
                    <>
                      Sector C-8 3rd floor, Indrapuri,
                      <br /> Raisen Road, Bhopal
                    </>
                  ),
                },
                {
                  icon: <FaPhone className="h-6 w-6 text-[#03286d]" />,
                  title: "Phone",
                  text: (
                    <>
                      +91 8602222494
                      <br /> Mon-Fri, 9am-7pm
                    </>
                  ),
                },
                {
                  icon: <FaEnvelope className="h-6 w-6 text-[#03286d]" />,
                  title: "Email",
                  text: (
                    <>
                      info@techdigi.com
                      <br /> support@techdigi.com
                    </>
                  ),
                },
                {
                  icon: <FaClock className="h-6 w-6 text-[#03286d]" />,
                  title: "Hours",
                  text: (
                    <>
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </>
                  ),
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="p-8 "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Register Today, Secure Your Future
            </h2>

            {/* ✅ Inline Success/Error Message */}
            {statusMessage && (
              <div
                className={`mb-4 p-3 rounded-md text-sm font-medium ${
                  statusType === "success"
                    ? "bg-green-100 text-green-800 border border-green-400"
                    : "bg-red-100 text-red-800 border border-red-400"
                }`}
              >
                {statusMessage}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {[
                { name: "firstName", label: "First name" },
                { name: "lastName", label: "Last name" },
                { name: "email", label: "Email", type: "email" },
                { name: "phone", label: "Phone", type: "tel" },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type || "text"}
                    id={field.name}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    value={formData[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className={`mt-1 block w-full border-b ${
                      errors[field.name] ? "border-red-500" : "border-gray-300"
                    } py-2 focus:outline-none focus:ring-0 focus:border-[#03286d]`}
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`mt-1 block w-full border-b ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } py-2 focus:outline-none focus:ring-0 focus:border-[#03286d]`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Checkbox */}
              <div className="flex items-start">
                <Checkbox
                  id="agreement"
                  checked={formData.agreement}
                  onChange={(checked) => handleChange("agreement", checked)}
                />
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="agreement"
                    className="font-normal text-gray-600"
                  >
                    By submitting the form, you agree to allow Tax Biz Legal
                    representative to contact you and accept our{" "}
                    <a
                      href="/terms-conditions"
                      className="text-blue-600 underline"
                    >
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
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

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 py-2 px-6 rounded-md text-sm font-medium text-white bg-black hover:bg-[#03287d] transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"} <FaArrowRightLong />
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <motion.div
        className="bg-gray-200 h-96 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14673.178179165854!2d77.45488309999999!3d23.22822365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c433c7a2f24d3%3A0x65fae2c7e56c2b18!2sIndrapuri%2C%20Sector%20B%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1730615150000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </div>
  );
}
