import React from 'react';

const TermCondition = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 text-gray-700 mt-20">
      <h1 className="text-3xl font-bold text-blue-800  mb-6">
        Tax Biz Legal Services Terms & Conditions
      </h1>

      <div className="space-y-4">
        <p>
          Welcome to <span className="font-semibold">EBIZ</span>. These Terms & Conditions (“Terms”) govern your access to and use of our website and services. By accessing or using our platform, you agree to comply with and be bound by these Terms. If you do not agree, please do not use our services.
        </p>
        <p>
          We reserve the right to modify this User Agreement without prior notice. It is your responsibility to review these terms periodically, and your continued use of our site constitutes acceptance of any changes.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-gray-900">About Us :</h2>
        <p>
          TaxBixLegal is a professional services provider offering legal, tax, and compliance-related services including but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>MCA (Ministry of Corporate Affairs) compliances</li>
          <li>Income tax and GST filing</li>
          <li>Business and company registration</li>
          <li>Legal and financial advisory related to startups and businesses</li>
        </ul>
        <p className="mt-2">
          We are not a law firm or a chartered accountancy firm but work in collaboration with licensed professionals and consultants.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-gray-900">Eligibility :</h2>
        <p>By using our services, you confirm that you:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Are at least 18 years of age</li>
          <li>Have the legal capacity to enter into a binding agreement</li>
          <li>Are using our services for lawful purposes only</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-gray-900">Scope of Services :</h2>
        <p>TaxBixLegal assists in the preparation, filing, and submission of various legal and tax documents. However:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>We do not represent clients in court or before government authorities unless explicitly stated</li>
          <li>Our services are subject to the availability of required information and cooperation from the client</li>
          <li>Timelines provided are indicative and may vary based on external regulatory authorities</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-gray-900">User Responsibilities :</h2>
        <p>You agree to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Provide accurate and complete information when requested</li>
          <li>Keep your account and communication confidential and secure</li>
          <li>Comply with applicable laws and regulations</li>
          <li>Not use our services for any fraudulent or unlawful activity</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-gray-900">Payments and Refunds :</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>All payments for services are to be made in advance unless otherwise agreed</li>
          <li>Fees once paid are non-refundable, except under exceptional circumstances and at our sole discretion</li>
          <li>In case of any service delay or issues, you may contact our support team for resolution</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-gray-900">Intellectual Property :</h2>
        <p>
          All content on this website including text, graphics, logos, icons, and software is the property of TaxBixLegal and protected by applicable intellectual property laws. You may not reproduce, copy, or exploit any part of the site without our written permission.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-gray-900">Limitation of Liability :</h2>
        <p>While we strive for accuracy and timely service, TaxBixLegal shall not be held liable for:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Any loss or damage arising due to reliance on information provided by us</li>
          <li>Delays or non-performance due to third-party or government-related issues</li>
          <li>Errors caused by incomplete or incorrect information provided by you</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-gray-900">Third Party Links :</h2>
        <p>
          Our site may contain links to third-party websites or services. We do not endorse or take responsibility for the content, terms, or privacy policies of those external websites.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-gray-900">Modification of Terms :</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be posted on this page with the revised “Effective Date.” Continued use of our services after changes constitutes your acceptance of the revised terms.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-gray-900">Governing Law :</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the jurisdiction of the courts located in India.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-gray-900">Contact Us :</h2>
        <p>If you have any questions or concerns about these Terms & Conditions, please contact us at:</p>
        <ul className="list-none space-y-1">
          <li>Email: <a href="mailto:info@taxbizlegal.com" className="text-blue-600 hover:underline">info@taxbizlegal.com</a></li>
          <li>Phone: <a href="tel:+919403892279" className="text-blue-600 hover:underline">9403892279</a></li>
          <li>Address: Sai Shivalik Complex, Jagannathpur, Bamunari, Hooghly-712250, West Bengal</li>
        </ul>
      </div>
    </div>
  );
};

export default TermCondition;
