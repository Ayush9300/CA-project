import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for button position and styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Floating Breadcrumb Button */}
      <div
        className={` fixed right-4 bottom-4 z-50 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-md border transition-all duration-300 ${
          scrolled
            ? "bg-white text-blue-800 border-blue-200 shadow-lg"
            : "bg-blue-800 text-white border-transparent"
        }`}
      >
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span className={`${scrolled ? "text-gray-400" : "text-blue-300"}`}>
          /
        </span>
        <Link to="/contact" className="hover:underline">
          <span>Contact Us</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6 space-y-8 text-gray-700 ">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">
          EBIZ Refund Policy
        </h1>

        <div className="space-y-4">
          <p>
            At <span className="font-semibold">EBIZ</span>, we strive to ensure
            complete satisfaction with our professional services. However, if
            you are not satisfied with the service provided, you may be eligible
            for a refund subject to the following terms and conditions:
          </p>
          <p>
            We reserve the right to modify this User Agreement without prior
            notice. It is your responsibility to review these terms periodically,
            and your continued use of our site constitutes acceptance of any
            changes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2 text-gray-900">
            Eligibility for Refund :
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Refunds may be considered only if a service has not been initiated
              or any deliverable has not been provided.
            </li>
            <li>Refund requests must be made within 7 days of payment.</li>
            <li>
              No refund will be issued once work has commenced, documentation
              submitted, or a legal/filing process has been initiated.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2 text-gray-900">
            Non-Refundable Circumstances :
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Government fees, taxes, and third-party charges are non-refundable.</li>
            <li>
              Delays caused by client-side inaction (e.g., failure to provide
              required documents) will not be considered for a refund.
            </li>
            <li>
              Refunds are not applicable for advisory or consultancy fees once
              the consultation has been completed.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2 text-gray-900">
            How to Request a Refund :
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Submit your refund request in writing via email to our official
              support email mentioned below.
            </li>
            <li>
              Include your name, service details, date of transaction, and reason
              for the refund request.
            </li>
            <li>
              Once approved, the refund will be processed within 10 to 15
              business days to the original payment method.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2 text-gray-900">
            Dispute Resolution :
          </h2>
          <p>
            Any disagreements arising out of refund claims will be resolved in
            accordance with applicable Indian laws and under the jurisdiction of
            Kolkata, India.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2 text-gray-900">Contact Us :</h2>
          <ul className="list-none space-y-1">
            <li>
              Registered Business Location: Sai Shivalik Complex, Jagannathpur,
              Bamunari, Hooghly-712250, West Bengal
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:info@EbizPanjiyan.com"
                className="text-blue-600 hover:underline"
              >
                info@EbizPanjiyan.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+918602222494"
                className="text-blue-600 hover:underline"
              >
                8602222494
              </a>
            </li>
            <li>
              Website:{" "}
              <a
                href="https://EbizPanjiyan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://EbizPanjiyan.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
