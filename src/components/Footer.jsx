import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services.js';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { PiEnvelopeLight, PiWrenchLight } from 'react-icons/pi';

const Footer = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const companyLinks = [
    { name: "About us", path: "/about" },
    { name: "Our services", path: "/services" },
    { name: "Contact support", path: "/contact" }
  ];

  const policyLinks = [
    { name: "Privacy policy", path: "/privacy-policy" },
    { name: "Terms of service", path: "/terms-of-service" },
    { name: "Refund policy", path: "/refund-policy" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "Cookie policy", path: "/cookie-policy" }
  ];

  const displayedServices = showAllServices ? servicesData : servicesData.slice(0, 6);

  return (
    <footer className="bg-slate-950 pt-20 pb-10 font-sans overflow-hidden border-t border-slate-900 relative">
      {/* Decorative top blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1 bg-amber-500/20 blur-xl"></div>

      <div className="max-w-[1800px] mx-auto px-5 md:px-8 relative z-10">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block relative z-10 group">
              <img
                src="/logo/logo.png"
                alt="Fix Appliancepro"
                className="h-10 md:h-12 lg:h-16 object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-[15px] font-medium leading-relaxed max-w-sm">
              We are a dedicated local team providing honest, fast, and reliable appliance repairs. Restoring comfort to your home, one fix at a time.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-amber-500">
                <PiEnvelopeLight size={24} />
              </div>
              <a href="mailto:info@fixappliancepro.shop" className="text-slate-300 font-bold hover:text-amber-400 transition-colors">info@fixappliancepro.shop</a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-amber-400 hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 md:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">
              Repair services
            </h4>
            <ul className="grid grid-cols-1 gap-4">
              {displayedServices.map((service) => (
                <li key={service.id}>
                  <Link to={`/service/${service.slug}`} className="text-slate-400 hover:text-amber-400 hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-300 capitalize">
                    {service.title.toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="text-amber-500 font-bold text-sm flex items-center gap-2 hover:text-amber-400 transition-colors mt-6"
            >
              {showAllServices ? (<>Show less <FiChevronUp /></>) : (<>View all services <FiChevronDown /></>)}
            </button>
          </div>

          <div className="lg:col-span-3 md:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">
              Legal policies
            </h4>
            <ul className="space-y-4">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-amber-400 hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Fix Appliancepro. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
            <PiWrenchLight className="text-amber-500" size={18} />
            Honest local repair services
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
