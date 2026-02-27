import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/services';
import { FiArrowLeft, FiCheck, FiShield, FiClock, FiArrowRight, FiPlus } from 'react-icons/fi';
import { useBooking } from '../context/BookingContext';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.slug === id || s.id === parseInt(id));
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] font-sans">
        <Helmet>
          <title>Service Not Found - Fix Appliancepro</title>
        </Helmet>
        <div className="text-center px-6">
          <h2 className="text-8xl font-extrabold text-[#0b1220] mb-6 tracking-tighter">404</h2>
          <p className="text-slate-500 mb-8 font-extrabold uppercase tracking-[0.3em] text-sm">Service Not Found</p>
          <Link to="/services" className="inline-flex items-center gap-3 bg-[#2d7ed6] text-white px-10 py-4 rounded-full font-extrabold uppercase tracking-widest text-[14px] hover:bg-[#06162f] transition-all shadow-xl">
            <FiArrowLeft /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>{service.title} | Fix Appliancepro - Professional Repair</title>
        <meta name="description" content={service.shortDesc} />
        <link rel="canonical" href={`https://fixappliancepro.shop/service/${service.slug}`} />
      </Helmet>

      {/* Page Hero Section */}
      <section className="relative pt-[180px] pb-32 bg-[#06162f] overflow-hidden">
        {/* Background Decorative Blurs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2d7ed6]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f6c343]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-[1800px] mx-auto px-5 md:px-8 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-3 text-[#f6c343] font-extrabold uppercase tracking-[0.3em] text-[12px] mb-10 hover:text-white transition-all group">
            <FiArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to All Services
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-extrabold text-white mb-8 leading-[1.1] tracking-tighter">
            {service.title} <span className="text-[#2d7ed6]">Repair.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Content Layout Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left Side: Visual Frame */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#f8fafc] rounded-[48px] -z-10 transform rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="rounded-[40px] overflow-hidden border-8 border-white shadow-2xl relative z-10">
                <img
                  src={service.image}
                  className="w-full h-[500px] lg:h-[700px] object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt={service.title}
                />
              </div>

              {/* Floating Trust Note */}
              <div className="absolute bottom-12 -right-6 bg-white p-8 rounded-[32px] shadow-2xl border border-slate-50 z-20 hidden md:block">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#2d7ed6] flex items-center justify-center text-white shadow-lg shadow-[#2d7ed6]/20">
                    <FiShield size={28} />
                  </div>
                  <div>
                    <p className="text-[#0b1220] font-extrabold text-lg leading-none">Genuine Parts</p>
                    <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest mt-2">100% Quality Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Service Info */}
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-[2px] bg-[#f6c343]"></span>
                  <span className="text-[#2d7ed6] font-extrabold text-[12px] uppercase tracking-[0.35em]">
                    Premium Service Details
                  </span>
                </div>
                <h2 className="text-3xl md:text-[50px] font-extrabold text-[#0b1220] leading-tight tracking-tight">
                  Expert Solutions For <br />
                  <span className="text-[#2d7ed6]">Your Appliance.</span>
                </h2>
              </div>

              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                {service.longDesc}
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#f8fafc] p-10 rounded-[40px] border border-slate-100 shadow-inner">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#2d7ed6] shadow-sm group-hover:bg-[#2d7ed6] group-hover:text-white transition-all duration-300">
                      <FiCheck size={18} strokeWidth={3} />
                    </div>
                    <span className="text-[#0b1220] font-extrabold text-[15px] tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Area */}
              <div className="flex flex-col sm:flex-row items-center gap-10 pt-6">
                <button
                  onClick={() => openBookingModal(service.title)}
                  className="w-full sm:w-auto bg-[#2d7ed6] text-white px-12 py-5 rounded-full font-extrabold uppercase tracking-widest text-[14px] hover:bg-[#06162f] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-4 group"
                >
                  Book Service Now <FiPlus size={20} className="group-hover:rotate-90 transition-transform" />
                </button>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full border border-slate-100 flex items-center justify-center text-[#2d7ed6] bg-white shadow-lg">
                    <FiClock size={28} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-[0.2em] leading-none mb-2">Response Time</p>
                    <p className="text-lg font-extrabold text-[#0b1220] leading-none">Within 2 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Banner */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="bg-[#06162f] rounded-[56px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#2d7ed6]/15 blur-[120px] rounded-full"></div>

            <h2 className="text-3xl md:text-[60px] font-extrabold text-white mb-12 leading-tight tracking-tight relative z-10">
              Restore Your Appliance To <br />
              <span className="text-[#f6c343]">Perfect Condition.</span>
            </h2>

            <div className="flex justify-center relative z-10">
              <button
                onClick={() => openBookingModal(service.title)}
                className="group inline-flex items-center gap-4 px-12 py-6 bg-[#f6c343] text-[#0b1220] rounded-full font-extrabold uppercase tracking-widest text-[15px] hover:bg-white transition-all duration-500 shadow-2xl active:scale-95"
              >
                Book Your Professional Repair <FiArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
