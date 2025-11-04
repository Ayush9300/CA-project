import { FaFacebook, FaInstagramSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import master from "../../assets/image 30.png";
import ezib from "../../assets/icons/logoezibbg.png";


export default function Footer() {
  return (
    <footer className="bg-[#001C35] text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <img src={ezib} alt="Logo" className="w-11 h-11" />
            <span className="text-blue-400"> EBIZ PANJIYAN CENTER</span>
          </h2>
          <p className="mt-4 text-sm leading-6 text-gray-300 text-left">
            Top-Rated Business Services in Just a Few Taps — Fast, Transparent &
            Hassle-Free Solutions Tailored for You.
          </p>

          {/* Social Links */}
          <div className="mt-6">
            <p className="font-semibold text-white mb-3 text-left">Follow us</p>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-white"><FaFacebook /></a>
              <a href="#" className="hover:text-white"><FaInstagramSquare /></a>
              <a href="#" className="hover:text-white"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Company Setup */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 text-left">Company Setup</h3>
          <ul className="space-y-2 text-sm text-left">
            <li><a href="/Private-limited-Company" className="hover:text-white">Private Limited Company</a></li>
            <li><a href="/LlPatership" className="hover:text-white">One Person Company</a></li>
            <li><a href="/OnePersonCompany" className="hover:text-white">Limited Liability Partnership</a></li>
            <li><a href="/section-8-company" className="hover:text-white">Section 8 Company</a></li>
            <li><a href="/public-limited-company" className="hover:text-white">Public Limited Company</a></li>
          </ul>
        </div>

        {/* Business Essentials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 text-left">Business Essentials</h3>
          <ul className="space-y-2 text-sm text-left">
            <li><a href="#" className="hover:text-white">GST Registration</a></li>
            <li><a href="#" className="hover:text-white">Income Tax Returns</a></li>
            <li><a href="#" className="hover:text-white">Trademark Registration</a></li>
            <li><a href="#" className="hover:text-white">FSSAI Registration</a></li>
            <li><a href="#" className="hover:text-white">Digital Signature Certificate</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 text-left">Support</h3>
          <ul className="space-y-2 text-sm text-left">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms-conditions" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="/refund-policy" className="hover:text-white">Refund Policy</a></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2 text-left">Info</h3>
          <p className="text-sm text-left">Sai Vigneshwara Legal And Business Solutions Pvt Ltd</p>
          <p className="text-sm text-left mt-1">+91 8602222494</p>
          <p className="text-sm text-left mt-1">info@EbizPanjiyancom</p>
          <p className="text-sm text-left mt-1">CIN : U69202WB2025PTC277397</p>

          {/* Payment & WhatsApp icons */}
          <div className="flex items-center gap-4 mt-4 text-3xl md:text-4xl">
            <RiVisaLine className="text-blue-500" />
            <img src={master} alt="mastercard" className="w-10 h-10" />
            <FaWhatsapp className="text-green-500 text-3xl" />
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-gray-700 text-left text-xs text-gray-400 px-4 sm:px-6 py-4">
        Disclaimer: This website is operated by a private consultancy firm and
        is not affiliated with or endorsed by any government authority. The
        form provided is solely intended to gather client information for
        internal assessment purposes and does not constitute an official
        registration. We offer professional consultancy services on a paid
        basis and may collaborate with third-party experts when necessary to
        serve our clients efficiently.
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-3 text-left text-xs text-gray-400 px-4 sm:px-6">
        Copyright © 2025. Designed, developed, and maintained by Swati Chourey.
        All rights reserved. Version 12.8.3.
      </div>
    </footer>
  );
}
