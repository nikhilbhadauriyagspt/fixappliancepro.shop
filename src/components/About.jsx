import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { PiWrenchFill, PiShieldCheckFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-20 lg:py-32 bg-white" id="about">
      <div className="max-w-[1800px] mx-auto px-5 md:px-8">

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 overflow-hidden rounded-[40px] shadow-2xl">
              <img
                src="/banner/about.jpg"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                alt="Professional Appliance Repair"
              />
            </div>



            {/* Decorative element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2d7ed6]/5 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-12 h-[2px] bg-[#f6c343]"></span>
                <span className="text-[#2d7ed6] font-extrabold text-[12px] uppercase tracking-[0.3em]">
                  Know More About Us
                </span>
              </div>

              <h2 className="text-3xl md:text-[50px] font-extrabold text-[#0b1220] leading-[1.1] tracking-tight">
                Reliable Experts For Your <span className="text-[#2d7ed6]">Home Appliances.</span>
              </h2>

              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Fixing things shouldn't be a headache. We started as a small local shop to provide honest, quality repairs with a focus on your convenience and long-term results. Our goal is to extend the life of your appliances with expert care.
              </p>
            </div>

            {/* Features */}
            <div className="mt-12 space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-[#f6c343]/10 text-[#f6c343] rounded-2xl flex items-center justify-center group-hover:bg-[#f6c343] group-hover:text-white transition-all duration-300">
                  <PiWrenchFill size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-[#0b1220] mb-2">Honest Diagnostics</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    We tell you exactly what's wrong and what it will cost before we start. No hidden surprises or extra charges.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-[#2d7ed6]/10 text-[#2d7ed6] rounded-2xl flex items-center justify-center group-hover:bg-[#2d7ed6] group-hover:text-white transition-all duration-300">
                  <PiShieldCheckFill size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-[#0b1220] mb-2">Guaranteed Fixes</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    Every repair is backed by our professional service warranty. We use genuine parts and stand behind our work.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12 pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-4 px-10 py-4 bg-[#06162f] text-white font-extrabold rounded-full hover:bg-[#2d7ed6] transition-all shadow-xl group"
              >
                <span>Read Our Full Story</span>
                <FiArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
