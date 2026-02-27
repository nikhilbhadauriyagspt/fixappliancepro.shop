import React from "react";
import { FiThumbsUp, FiClock, FiShield } from "react-icons/fi";

export default function FeatureStrip() {
  const items = [
    {
      title: "One Year Warrenty",
      desc: "Aldus Corporation, which later merged Adobe Systems, ushered lorem",
      icon: <FiShield />,
      active: false,
    },
    {
      title: "100% Satisfaction",
      desc: "Aldus Corporation, which later merged Adobe Systems, ushered lorem",
      icon: <FiThumbsUp />,
      active: true,
    },
    {
      title: "On-Time Services",
      desc: "Aldus Corporation, which later merged Adobe Systems, ushered lorem",
      icon: <FiClock />,
      active: false,
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden bg-white">
      {/* Light blue base */}
      <div className="absolute inset-0 bg-[#eaf4ff]" />

      {/* Bottom curved white wave (SVG) */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[180px] md:h-[300px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* White wave over blue background */}
        <path
          fill="#ffffff"
          d="M0,192L60,186.7C120,181,240,171,360,170.7C480,171,600,181,720,186.7C840,192,960,192,1080,176C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
          {items.map((it, idx) => (
            <div
              key={idx}
              className={`rounded-[22px] px-7 py-6 md:px-10 md:py-8 border shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${it.active
                ? "bg-[#2d7ed6] border-transparent text-white"
                : "bg-white border-slate-100 text-slate-900"
                }`}
            >
              <div className="flex items-start gap-5">
                <div className={`text-[34px] mt-1 ${it.active ? "text-white" : "text-slate-900"}`}>
                  {it.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="text-[18px] md:text-[20px] font-extrabold leading-tight">
                    {it.title}
                  </h3>
                  <p className={`mt-2 text-[13px] md:text-[14px] leading-relaxed ${it.active ? "text-white/85" : "text-slate-500"}`}>
                    {it.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}