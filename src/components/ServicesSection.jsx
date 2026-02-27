import React from 'react';
import { servicesData } from '../data/services';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { PiWrenchFill } from 'react-icons/pi';
import { useBooking } from '../context/BookingContext';

const ServicesSection = () => {
  const { openBookingModal } = useBooking();

  return (
    <section className="py-24 lg:py-32 bg-[#f8fafc]" id="services">
      <div className="max-w-[1800px] mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-[#f6c343]"></span>
            <span className="text-[#2d7ed6] font-extrabold text-[12px] uppercase tracking-[0.35em]">
              Professional Solutions
            </span>
            <span className="w-12 h-[2px] bg-[#f6c343]"></span>
          </div>
          <h2 className="text-3xl md:text-[50px] font-extrabold text-[#0b1220] leading-tight tracking-tight mb-6">
            Our Premium <span className="text-[#2d7ed6]">Repair Services</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
            From kitchen gadgets to laundry systems, our experts handle every appliance with care and precision to restore your home's comfort.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <Link 
              key={service.id}
              to={`/service/${service.slug}`}
              className="group bg-white rounded-[32px] p-10 border border-slate-100 transition-all duration-500 hover:border-[#2d7ed6] hover:shadow-2xl hover:shadow-[#2d7ed6]/10 flex flex-col h-full relative overflow-hidden"
            >
              {/* Hover background effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2d7ed6]/5 rounded-full -mr-16 -mt-16 group-hover:scale-[3] transition-transform duration-700"></div>

              {/* Service Icon Box */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#f8fafc] flex items-center justify-center text-[#2d7ed6] group-hover:bg-[#2d7ed6] group-hover:text-white transition-all duration-500 mb-8 shadow-sm">
                 <PiWrenchFill size={32} />
              </div>

              {/* Service Content */}
              <div className="relative z-10 flex-1">
                <h3 className="text-2xl font-extrabold text-[#0b1220] group-hover:text-[#2d7ed6] transition-colors mb-4">
                  {service.title}
                </h3>
                <p className="text-[16px] text-slate-500 font-medium leading-relaxed line-clamp-3 mb-6">
                  {service.shortDesc}
                </p>
              </div>

              {/* View More Link */}
              <div className="relative z-10 mt-4 pt-6 border-t border-slate-50 flex items-center justify-between text-[#0b1220] font-extrabold group-hover:text-[#2d7ed6] transition-all">
                 <span className="text-sm uppercase tracking-wider">
                   View Service Details
                 </span>
                 <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#2d7ed6] group-hover:text-white group-hover:border-[#2d7ed6] transition-all">
                   <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
           <Link 
             to="/services"
             className="inline-flex items-center gap-3 text-[#0b1220] font-extrabold text-lg hover:text-[#2d7ed6] transition-all group"
           >
             <span>Explore All Services</span>
             <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
           </Link>
        </div>

        {/* Special Banner CTA */}
        <div className="mt-24 p-12 md:p-20 bg-[#06162f] rounded-[48px] flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#2d7ed6]/20 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f6c343]/10 rounded-full blur-[100px]"></div>
           
           <div className="relative z-10 text-center md:text-left">
              <span className="text-[#f6c343] font-extrabold text-[12px] uppercase tracking-[0.4em] mb-4 block">
                24/7 Priority Support
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                 Need Urgent <br className="hidden md:block" /> Appliance Repair?
              </h3>
              <p className="text-white/60 font-medium text-lg mt-4 max-w-lg">
                 Don't wait! Our expert technicians are ready to restore your appliance to perfect condition.
              </p>
           </div>
           
           <div className="relative z-10 flex flex-col sm:flex-row gap-5">
             <button 
               onClick={() => openBookingModal()}
               className="px-12 py-5 bg-[#f6c343] text-[#0b1220] font-extrabold uppercase tracking-[0.1em] text-[14px] rounded-full hover:bg-white transition-all shadow-2xl transform hover:scale-105 active:scale-95"
             >
               Book Service Now
             </button>
             <Link 
               to="/contact" 
               className="px-12 py-5 bg-white/10 text-white font-extrabold uppercase tracking-[0.1em] text-[14px] rounded-full border border-white/20 hover:bg-white hover:text-[#0b1220] transition-all transform hover:scale-105"
             >
               Contact Support
             </Link>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
