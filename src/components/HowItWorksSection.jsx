import React from 'react';
import { FiChevronRight, FiMail } from 'react-icons/fi';
import { PiPhoneCallFill, PiMagnifyingGlassFill, PiWrenchFill, PiSealCheckFill } from 'react-icons/pi';
import { useBooking } from '../context/BookingContext';

const HowItWorksSection = () => {
  const { openBookingModal } = useBooking();
  
  const steps = [
    {
      id: "01",
      icon: <PiPhoneCallFill />,
      title: "Book Service",
      desc: "Schedule your repair easily online or via email. We'll find a time that works for you."
    },
    {
      id: "02",
      icon: <PiMagnifyingGlassFill />,
      title: "Diagnosis",
      desc: "Our specialist arrives promptly and performs a thorough check to identify the issue."
    },
    {
      id: "03",
      icon: <PiWrenchFill />,
      title: "Precision Repair",
      desc: "We fix the problem using genuine parts and professional tools for lasting results."
    },
    {
      id: "04",
      icon: <PiSealCheckFill />,
      title: "Final Testing",
      desc: "We test the appliance rigorously to ensure perfect operation before we consider the job done."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-[#f6c343]"></span>
            <span className="text-[#2d7ed6] font-extrabold text-[12px] uppercase tracking-[0.35em]">
              Our Process
            </span>
            <span className="w-12 h-[2px] bg-[#f6c343]"></span>
          </div>
          <h2 className="text-3xl md:text-[50px] font-extrabold text-[#0b1220] leading-tight tracking-tight mb-6">
            Four Steps To <span className="text-[#2d7ed6]">Perfect Repair</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
            We've streamlined our process to ensure you get the fastest and most reliable repair service without any unnecessary complexity.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="relative">
          {/* Horizontal Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] w-[80%] h-[2px] bg-[#f8fafc] z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group text-center">
                
                {/* Icon Circle */}
                <div className="relative mx-auto w-24 h-24 mb-8">
                  <div className="w-full h-full bg-white border-4 border-[#f8fafc] rounded-[32px] flex items-center justify-center text-[#2d7ed6] group-hover:bg-[#2d7ed6] group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-[#2d7ed6]/20 group-hover:-translate-y-2">
                    <div className="text-4xl">{step.icon}</div>
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#f6c343] text-[#0b1220] rounded-full flex items-center justify-center text-[14px] font-extrabold shadow-md">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 px-4">
                  <h4 className="text-2xl font-extrabold text-[#0b1220] group-hover:text-[#2d7ed6] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[16px] text-slate-500 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action */}
        <div className="mt-24 p-10 bg-[#f8fafc] rounded-[32px] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#06162f] flex items-center justify-center text-[#f6c343] shadow-xl">
                 <FiMail size={28} />
              </div>
              <div>
                 <p className="text-xs font-extrabold text-[#2d7ed6] uppercase tracking-[0.2em] mb-1">Get Fast Help</p>
                 <p className="text-lg font-extrabold text-[#0b1220]">Ready to fix your appliance today?</p>
              </div>
           </div>
           
           <button 
             onClick={() => openBookingModal()}
             className="w-full md:w-auto px-12 py-5 bg-[#2d7ed6] text-white rounded-full font-extrabold uppercase tracking-widest text-[14px] hover:bg-[#06162f] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 group"
           >
             Book Appointment Now 
             <FiChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
           </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
