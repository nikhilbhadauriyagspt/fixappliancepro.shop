import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { useBooking } from '../context/BookingContext';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { PiWrenchFill } from 'react-icons/pi';

const Services = () => {
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Our Services | Fix Appliancepro - Expert Repair Services</title>
        <meta name="description" content="View our full range of professional appliance repair services. We fix washing machines, fridges, ACs and more with honesty." />
        <link rel="canonical" href="https://fixappliancepro.shop/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-[180px] pb-32 bg-[#06162f] overflow-hidden text-center">
        {/* Background Decorative Blurs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2d7ed6]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f6c343]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-[1800px] mx-auto px-5 md:px-8 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-12 h-[2px] bg-[#f6c343]"></span>
            <span className="text-[#f6c343] font-extrabold text-[12px] uppercase tracking-[0.4em]">
              Our Service Directory
            </span>
            <span className="w-12 h-[2px] bg-[#f6c343]"></span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-extrabold text-white mb-10 leading-[1.1] tracking-tighter">
            Expert Solutions For <br />
            All Your <span className="text-[#2d7ed6]">Home Appliances.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            From essential kitchen gadgets to complex laundry systems, we provide honest, fast, and reliable repair services for all your household devices.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 lg:py-32 bg-[#f8fafc]">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <Link
                to={`/service/${service.slug}`}
                key={service.id}
                className="group relative bg-white rounded-[40px] overflow-hidden p-10 flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:shadow-[#2d7ed6]/10 border border-slate-100 hover:border-[#2d7ed6]"
              >
                <div className="relative z-10 flex-1">
                  <div className="w-16 h-16 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#2d7ed6] mb-10 group-hover:bg-[#2d7ed6] group-hover:text-white transition-all duration-500 shadow-sm">
                    <PiWrenchFill size={32} />
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#0b1220] mb-4 tracking-tight group-hover:text-[#2d7ed6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-[16px] font-medium leading-relaxed mb-8">
                    {service.shortDesc}
                  </p>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-widest text-[#2d7ed6]">
                      <FiCheck className="text-[#f6c343]" /> Genuine Spare Parts
                    </div>
                    <div className="flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-widest text-[#2d7ed6]">
                      <FiCheck className="text-[#f6c343]" /> Professional Warranty
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-8 mt-10 flex items-center justify-between border-t border-slate-50">
                  <span className="text-[14px] font-extrabold text-[#0b1220] uppercase tracking-wider group-hover:text-[#2d7ed6] transition-all">
                    View Details
                  </span>
                  <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#2d7ed6] group-hover:text-white group-hover:border-[#2d7ed6] transition-all transform group-hover:translate-x-1">
                    <FiArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="bg-[#06162f] rounded-[56px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2d7ed6]/15 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f6c343]/10 blur-[100px] rounded-full"></div>

            <div className="relative z-10">
              <span className="text-[#f6c343] font-extrabold text-[12px] uppercase tracking-[0.4em] mb-8 block">
                Get Expert Help Today
              </span>
              <h2 className="text-3xl md:text-[60px] font-extrabold text-white leading-tight tracking-tight mb-12">
                Is Your Appliance Not <br />
                <span className="text-[#2d7ed6]">Working Properly?</span>
              </h2>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button
                  onClick={() => openBookingModal()}
                  className="px-12 py-6 bg-[#f6c343] text-[#0b1220] rounded-full font-extrabold uppercase tracking-[0.1em] text-[15px] hover:bg-white transition-all shadow-2xl transform hover:scale-105 active:scale-95"
                >
                  Schedule Your Repair Now
                </button>
                <Link
                  to="/contact"
                  className="px-12 py-6 bg-white/10 text-white rounded-full font-extrabold uppercase tracking-[0.1em] text-[15px] border border-white/20 hover:bg-white hover:text-[#0b1220] transition-all transform hover:scale-105"
                >
                  Contact Support
                </Link>
              </div>
              <p className="text-white/40 font-extrabold text-[12px] uppercase tracking-[0.5em] mt-12">Premium Repair Services</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;