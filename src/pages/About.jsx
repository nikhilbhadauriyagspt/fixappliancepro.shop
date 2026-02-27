import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight, FiShield, FiHeart, FiTarget } from 'react-icons/fi';
import { PiWrenchFill, PiShieldCheckFill, PiClockFill, PiHandHeartFill, PiUsersThreeFill, PiLightbulbFill } from 'react-icons/pi';
import { useBooking } from '../context/BookingContext';

const About = () => {
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>About Us | Fix Appliancepro - Our Mission & Team</title>
        <meta name="description" content="Learn more about Fix Appliancepro. We are a dedicated local team providing honest and professional home appliance repair services." />
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
              Our Professional Story
            </span>
            <span className="w-12 h-[2px] bg-[#f6c343]"></span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-extrabold text-white mb-10 leading-[1.1] tracking-tighter">
            We're Making Home Repair <br />
            Simple, Fast & <span className="text-[#2d7ed6]">Honest.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Fix Appliancepro was founded on a simple belief: getting your home appliances fixed shouldn't be a source of stress. We're here to provide clarity, quality, and professional speed.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#f8fafc] rounded-[48px] -z-10 transform -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="rounded-[40px] overflow-hidden border-8 border-white shadow-2xl relative z-10">
                <img src="/banner/about.jpg" className="w-full h-[600px] md:h-[700px] object-cover transition-transform duration-1000 group-hover:scale-105" alt="Our Mission" />
                <div className="absolute bottom-10 left-10 right-10 bg-[#06162f]/95 backdrop-blur-xl p-10 rounded-[32px] border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#f6c343] flex items-center justify-center text-[#0b1220] shadow-xl">
                      <PiHandHeartFill size={32} />
                    </div>
                    <div>
                      <p className="text-[12px] font-extrabold uppercase tracking-[0.3em] text-[#f6c343] mb-2">Our Local Promise</p>
                      <p className="text-xl font-extrabold text-white italic">"Excellence in every repair."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-[2px] bg-[#f6c343]"></span>
                  <span className="text-[#2d7ed6] font-extrabold text-[12px] uppercase tracking-[0.35em]">
                    Our Values
                  </span>
                </div>
                <h2 className="text-3xl md:text-[50px] font-extrabold text-[#0b1220] leading-[1.1] tracking-tighter">
                  A Dedicated Team With <br /> <span className="text-[#2d7ed6]">Unmatched Standards.</span>
                </h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  As a locally-owned business, we understand the importance of a functional home. When your fridge stops cooling or your washer leaks, it disrupts your entire life. That's why we built Fix Appliancepro—to be the reliable expert you contact when things go wrong.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <PiShieldCheckFill className="text-[#2d7ed6]" />, title: "Quality First", text: "We never cut corners on parts or labor. If it's not perfect, it's not finished." },
                  { icon: <PiClockFill className="text-[#f6c343]" />, title: "Prompt Service", text: "We value your schedule. Same-day service is our goal for every request." }
                ].map((item, i) => (
                  <div key={i} className="p-10 bg-[#f8fafc] rounded-[32px] space-y-6 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300 group">
                    <div className="text-5xl group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-2xl font-extrabold text-[#0b1220]">{item.title}</h4>
                    <p className="text-[15px] text-slate-500 font-medium leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillars of Service */}
          <div className="space-y-20">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-[#f6c343]"></span>
                <span className="text-[#2d7ed6] font-extrabold text-[12px] uppercase tracking-[0.35em]">
                  The Pillars Of Our Success
                </span>
                <span className="w-12 h-[2px] bg-[#f6c343]"></span>
              </div>
              <h2 className="text-3xl md:text-[50px] font-extrabold text-[#0b1220] tracking-tighter mb-6">The Rules We Live By.</h2>
              <p className="text-slate-500 text-lg font-medium">These aren't just words to us; they are the professional standards we uphold every single day.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: <PiUsersThreeFill />,
                  title: "Community Focused",
                  desc: "We live and work right here in your community. Every customer is a neighbor, and we treat you like one.",
                  color: "bg-[#2d7ed6]/10 text-[#2d7ed6]"
                },
                {
                  icon: <PiLightbulbFill />,
                  title: "Diagnostic Clarity",
                  desc: "We don't guess. We use professional diagnostic tools to find the root cause and explain it to you simply.",
                  color: "bg-[#f6c343]/10 text-[#f6c343]"
                },
                {
                  icon: <PiWrenchFill />,
                  title: "Factory Standards",
                  desc: "Our repairs follow the exact specifications of the original manufacturer to ensure long-term reliability.",
                  color: "bg-[#06162f]/10 text-[#0b1220]"
                }
              ].map((val, idx) => (
                <div key={idx} className="p-12 rounded-[40px] border border-slate-100 bg-white flex flex-col items-center text-center space-y-8 hover:shadow-2xl hover:shadow-[#2d7ed6]/5 hover:-translate-y-2 transition-all duration-500 group">
                  <div className={`w-24 h-24 rounded-[32px] ${val.color} flex items-center justify-center text-5xl group-hover:scale-110 transition-transform shadow-sm`}>
                    {val.icon}
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#0b1220]">{val.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium text-[16px]">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Banner */}
      <section className="py-24 bg-[#06162f] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2d7ed6]/10 blur-[120px] rounded-full"></div>
        <div className="max-w-[1800px] mx-auto px-5 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-[60px] font-extrabold text-white tracking-tighter leading-tight mb-20">
              A Commitment To <span className="text-[#f6c343]">Excellence</span> <br className="hidden md:block" /> That Never Wavers.
            </h2>
            <div className="grid md:grid-cols-2 gap-16 text-left">
              <div className="space-y-6 bg-white/5 p-10 rounded-[40px] border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4 text-[#f6c343] font-extrabold uppercase tracking-widest text-[14px]">
                  <FiTarget size={24} /> Our Vision
                </div>
                <p className="text-white/60 text-lg leading-relaxed font-medium">
                  To become the most trusted home service provider in the region by delivering unmatched technical expertise and transparent customer communication.
                </p>
              </div>
              <div className="space-y-6 bg-white/5 p-10 rounded-[40px] border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4 text-[#f6c343] font-extrabold uppercase tracking-widest text-[14px]">
                  <FiHeart size={24} /> Our Mission
                </div>
                <p className="text-white/60 text-lg leading-relaxed font-medium">
                  To extend the lifecycle of your household investments through precision repairs and proactive maintenance, saving you money and reducing waste.
                </p>
              </div>
            </div>
            <div className="mt-20">
              <button
                onClick={() => openBookingModal()}
                className="px-12 py-6 bg-[#f6c343] text-[#0b1220] rounded-full font-extrabold uppercase tracking-widest text-[15px] hover:bg-white transition-all shadow-2xl transform hover:scale-105 active:scale-95 flex items-center gap-4 mx-auto"
              >
                Schedule Your Repair Now <FiArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="w-20 h-[4px] bg-[#f6c343] mx-auto rounded-full"></div>
            <p className="text-2xl md:text-5xl font-extrabold text-[#0b1220] leading-[1.2] tracking-tight italic">
              "We don't just want to fix your appliance; we want to earn your trust so you never have to worry about home repairs again."
            </p>
            <div>
              <p className="text-xl font-extrabold text-[#2d7ed6] uppercase tracking-wider">The Fix Appliancepro Team</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
