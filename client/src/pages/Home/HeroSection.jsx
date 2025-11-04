import React from 'react';
import supportImg from "../../assets/hero.webp";
const Scale = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"/><path d="M12 21V10a2 2 0 0 0-2-2H4"/><path d="M17 14h6"/><path d="M20 7v7"/></svg>
);
const Users = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const Headset = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>
);

const featuresData = [
  {
    icon: Scale,
    title: 'Affordable Professional Services',
    description: 'Get expert legal and financial assistance at competitive prices, tailored to your needs.',
  },
  {
    icon: Users,
    title: 'Diverse Expert Network',
    description: 'Consult top-tier lawyers, CA, and secretaries for seamless compliance and advisory.',
  },
  {
    icon: Headset,
    title: 'Quick Customer Support',
    description: 'We value your time—get responses to your queries within 24 hours* with dedicated support.',
  },
];

const HeroSection = () => {
  return (
    <section className=" container bg-blue-50/70 py-12 md:py-14 px-14  rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 lg:w-2/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 leading-tight">
              Why Do Customers Love Us?
            </h2>
            <p className="text-lg text-black-600 mb-4 ">
              We provide hassle-free legal and financial solutions with expert assistance, ensuring transparency and efficiency at every step.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8 mb-6">
              {featuresData.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  {/* Icon Container with styling similar to the image */}
                  <div className="p-3 w-12 h-12 rounded-full border border-blue-600/30 text-blue-600 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-800 hover:bg-blue-900 transition duration-150 ease-in-out"
            >
              Talk to Expert Now &rarr;
            </a>
          </div>
          {/* Illustration Container (takes 50% space on desktop) */}
          <div className="md:w-1/2 lg:w-1/2 w-full flex justify-center">
            <div className="w-full max-w-md md:max-w-none">
              <div className="w-full aspect-[4/3]  flex items-center justify-center">
                 <img src={supportImg}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection ;