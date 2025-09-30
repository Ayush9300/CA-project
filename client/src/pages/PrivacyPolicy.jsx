import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter py-15 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 ">
          Privacy Policy, Disclaimer & User Agreement
        </h1>

        {/* 1. Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Privacy Policy</h2>
          <p className="text-gray-700 mb-4">Your Privacy Matters to Us</p>
          <p className="text-gray-700 mb-4">
            We are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
          </p>

          <h3 className="font-semibold text-blue-700 mb-2">Information We Collect:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Name, email, phone number, and address</li>
            <li>PAN, GST, business registration details</li>
            <li>Documents uploaded for service purposes</li>
            <li>Website usage data via cookies and analytics</li>
          </ul>

          <h3 className="font-semibold text-blue-700 mb-2">How We Use Your Information:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>To deliver legal and business services</li>
            <li>To communicate important updates</li>
            <li>For internal auditing, analytics, and compliance</li>
            <li>To process payments securely</li>
          </ul>

          <h3 className="font-semibold text-blue-700 mb-2">Data Sharing:</h3>
          <p className="mb-3">We do not sell or share your information with third parties, except:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>When required by law or court order</li>
            <li>With trusted partners for service execution (e.g., government portals)</li>
          </ul>

          <h3 className="font-semibold text-blue-700 mb-2">Security Measures:</h3>
          <p className="mb-3">We use SSL encryption, secure cloud storage, and restricted internal access to protect your data.</p>
          
        </section>

        {/* 2. Disclaimer */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">2.DISCLAIMER</h2>
          <p className="text-gray-700 mb-4">
            The information and services provided on this website are for general informational and support purposes only and do not constitute legal advice or legal representation.
          </p>
          <p className="text-gray-700 mb-4">
            EZIP CENTER is not a law firm, and our team does not act as your attorney. For legal matters requiring court representation or litigation, please consult a qualified advocate.
          </p>

          <h3 className="font-semibold text-blue-700 mb-2">We are not responsible for:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Delays or rejections from government department</li>
            <li>Inaccuracies caused by incorrect client information</li>
            <li>Business decisions made based on our content</li>
            
          </ul>
          <p>Use of our website and services is at your own risk.</p>
        </section>

        {/* 3. User Agreement */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Agreement</h2>
          <p className="text-gray-700 mb-4">
            When you create an account or place an order on our website, you agree to:
          </p>
           <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Provide accurate and complete information</li>
            <li>Maintain confidentiality of your login credentials</li>
            <li>Use services only for lawful business purposes</li>
            <li>Not impersonate others or use false information</li>
            <li>Accept responsibility for any filings made on your behalf</li>
            
          </ul>
          <p className="text-gray-700 mb-4">
           Violation of this agreement may lead to suspension or termination of your access to our platform without refund.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
