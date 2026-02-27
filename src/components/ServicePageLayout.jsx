import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiArrowLeft, FiPlus, FiCheck, FiArrowRight } from 'react-icons/fi';
import { PiWrenchFill, PiClockFill } from 'react-icons/pi';
import { useBooking } from '../context/BookingContext';

const ServicePageLayout = ({
  title,
  titleAccent,
  metaTitle,
  metaDesc,
  heroDesc,
  image,
  mainDesc,
  highlights = [],
  features = [],
  ctaHeading,
  ctaSubheading
}) => {
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>{metaTitle || `${title} Repair | Fix Appliancepro`}</title>
        <meta name="description" content={metaDesc} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-[180px] pb-32 bg-[#06162f] overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2d7ed6]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f6c343]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-[1800px] mx-auto px-5 md:px-8 relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 text-[#f6c343] font-extrabold uppercase tracking-[0.3em] text-[12px] mb-10 hover:text-white transition-all group"
          >
            <FiArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to All Services
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-extrabold text-white mb-10 leading-[1.1] tracking-tighter">
            {title} <span className="text-[#2d7ed6]">{titleAccent || 'Repair.'}</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            {heroDesc}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Visual Side */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#f8fafc] rounded-[48px] -z-10 transform -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="rounded-[40px] overflow-hidden border-8 border-white shadow-2xl relative z-10">
                <img
                  src={image}
                  className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt={title}
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-[2px] bg-[#f6c343]"></span>
                  <span className="text-[#2d7ed6] font-extrabold text-[12px] uppercase tracking-[0.35em]">
                    Premium Solutions
                  </span>
                </div>
                <h2 className="text-3xl md:text-[50px] font-extrabold text-[#0b1220] leading-[1.1] tracking-tighter">
                  Professional Care for <br />
                  <span className="text-[#2d7ed6]">Your Appliance.</span>
                </h2>
              </div>

              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                {mainDesc}
              </p>

              <div className="grid gap-6 bg-[#f8fafc] p-10 rounded-[40px] border border-slate-100 shadow-inner">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group/list">
                    <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#2d7ed6] shadow-sm group-hover:bg-[#2d7ed6] group-hover:text-white transition-all">
                      <FiCheck size={18} strokeWidth={3} />
                    </div>
                    <span className="text-[#0b1220] font-extrabold text-[16px] tracking-tight">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-center gap-10">
                <button
                  onClick={() => openBookingModal(title)}
                  className="w-full sm:w-auto px-12 py-5 bg-[#2d7ed6] text-white rounded-full font-extrabold uppercase tracking-widest text-[14px] hover:bg-[#06162f] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-4 group"
                >
                  Book Repair Now <FiPlus size={20} className="group-hover:rotate-90 transition-transform" />
                </button>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full border border-slate-100 flex items-center justify-center text-[#2d7ed6] bg-white shadow-lg">
                    <PiClockFill size={28} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-[0.2em] mb-2">Response Time</p>
                    <p className="text-lg font-extrabold text-[#0b1220]">Under 120 Mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      {features.length > 0 && (
        <section className="py-24 bg-[#f8fafc]">
          <div className="max-w-[1800px] mx-auto px-5 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-[#f6c343]"></span>
                <span className="text-[#2d7ed6] font-extrabold text-[12px] uppercase tracking-[0.35em]">
                  Specialized Help
                </span>
                <span className="w-12 h-[2px] bg-[#f6c343]"></span>
              </div>
              <h2 className="text-3xl md:text-[50px] font-extrabold text-[#0b1220] leading-tight tracking-tight">
                Our Specific <br /><span className="text-[#2d7ed6]">Expertise.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((v, i) => (
                <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 flex flex-col items-center text-center group hover:border-[#2d7ed6] hover:shadow-2xl hover:shadow-[#2d7ed6]/10 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-[24px] bg-[#f8fafc] text-[#2d7ed6] flex items-center justify-center text-3xl mb-8 group-hover:bg-[#2d7ed6] group-hover:text-white transition-all duration-500 shadow-sm">
                    {v.icon || <PiWrenchFill />}
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#0b1220] mb-4 tracking-tight group-hover:text-[#2d7ed6] transition-colors">{v.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed text-[16px]">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="bg-[#06162f] rounded-[56px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2d7ed6]/15 blur-[120px] rounded-full"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-[60px] font-extrabold text-white leading-tight tracking-tight mb-12">
                {ctaHeading || 'Restore Your Appliance To Perfect Condition.'}
                {ctaSubheading && <br />}
                {ctaSubheading && <span className="text-[#f6c343]">{ctaSubheading}</span>}
              </h2>

              <div className="flex justify-center">
                <button
                  onClick={() => openBookingModal(title)}
                  className="group inline-flex items-center gap-4 px-12 py-6 bg-[#f6c343] text-[#0b1220] rounded-full font-extrabold uppercase tracking-widest text-[15px] hover:bg-white transition-all duration-500 shadow-2xl active:scale-95"
                >
                  Schedule Your Repair Now <FiArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;
