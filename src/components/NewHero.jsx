import React from "react";

const NewHero = () => {
  return (
    <section className="relative w-full h-[700px] lg:h-[900px] bg-white overflow-hidden flex items-center">
      {/* Background Image - Single Static Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner/newbanner.png"
          alt="Professional Support Background"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Static Content - Left Aligned */}
      <div className="w-full mx-auto px-6 lg:px-24 relative z-10">
        <div className="max-w-4xl">
          <div
            onMouseEnter={() => {
              if (window.jivo_api) {
                window.jivo_api.open();
              }
            }}
            className=" bg-white/10 backdrop-blur-3xl p-8 lg:p-16 rounded-[40px] border border-white/20 shadow-2xl cursor-pointer hover:scale-[1.01] transition-transform duration-500"
          >
            <span className="text-[#2d7ed6] font-bold tracking-[0.2em] text-[14px] lg:text-[16px] mb-4 block">
              Professional Support Services
            </span>
            <h1 className="text-[40px] lg:text-[64px] font-[900] text-[#041127] leading-[1.1] mb-8 tracking-tight capitalize">
              Our <span className="text-[#2d7ed6]">Offerings</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
              <div className="space-y-5">
                <RepairPoint text="24/7 Support" />
                <RepairPoint text="Online & Phone Help" />
                <RepairPoint text="PC Tune-ups" />
                <RepairPoint text="Virus Removal" />
              </div>
              <div className="space-y-5">
                <RepairPoint text="Printer Support" />
                <RepairPoint text="Network Help" />
                <RepairPoint text="Data Backup Assistance" />
              </div>
            </div>

            <p className="mt-12 text-slate-500 text-lg lg:text-xl font-medium max-w-2xl leading-relaxed">
              We provide comprehensive technical solutions and appliance support to keep your
              home and office running smoothly. Our experts are available around the clock
              to resolve your issues quickly and professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const RepairPoint = ({ text }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-6 h-6 rounded-full bg-[#2d7ed6]/10 flex items-center justify-center text-[#2d7ed6] group-hover:bg-[#2d7ed6] group-hover:text-white transition-all shrink-0">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span className="text-[#041127] text-[16px] lg:text-[19px] font-bold tracking-wide capitalize">
      {text}
    </span>
  </div>
);

export default NewHero;
