import React, { useState } from 'react';
import { FiPlus, FiMinus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const [openId, setOpenId] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "Which appliances do you fix?",
      answer: "We fix almost all home machines including washing machines, refrigerators, ACs, microwaves, and more. If it's a household machine, we can likely fix it!"
    },
    {
      id: 1,
      question: "How fast can you come to my home?",
      answer: "We offer same-day service! If you book in the morning, our specialist can usually reach your home within 2 to 4 hours."
    },
    {
      id: 2,
      question: "Do you use original spare parts?",
      answer: "Yes, we only use 100% genuine and original parts from the manufacturers. This ensures your appliance lasts longer after the repair."
    },
    {
      id: 3,
      question: "Is there a warranty on the repair?",
      answer: "Absolutely. We give you a 45-day warranty on our service. If the same problem happens again, we will fix it for free."
    },
    {
      id: 4,
      question: "What are your service charges?",
      answer: "We offer fair and honest pricing. After checking your machine, our specialist will give you a clear price before starting any work. No hidden fees."
    },
    {
      id: 5,
      question: "Are your technicians certified?",
      answer: "Yes, all our specialists are highly skilled and have years of experience. They are friendly, professional, and will treat your home with respect."
    }
  ];

  const AccordionItem = ({ item, isOpen, toggle }) => (
    <div className={`mb-4 overflow-hidden rounded-[24px] border transition-all duration-300 ${isOpen ? 'bg-[#f8fafc] border-[#2d7ed6]/30 shadow-xl shadow-[#2d7ed6]/5' : 'bg-white border-slate-100 hover:border-slate-300'}`}>
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between py-6 px-6 md:px-8 text-left transition-all group"
      >
        <span className={`text-lg md:text-xl font-extrabold transition-colors ${isOpen ? 'text-[#2d7ed6]' : 'text-[#0b1220]'}`}>
          {item.question}
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#2d7ed6] text-white rotate-180' : 'bg-[#f8fafc] text-slate-400 group-hover:bg-[#2d7ed6] group-hover:text-white'}`}>
          {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </div>
      </button>
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 md:px-8 pb-8">
          <p className="text-slate-500 text-[16px] font-medium leading-relaxed max-w-3xl">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 lg:py-32 bg-[#f8fafc]" id="faq">
      <div className="max-w-[1800px] mx-auto px-5 md:px-8">

        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-[#f6c343]"></span>
            <span className="text-[#2d7ed6] font-extrabold text-[12px] uppercase tracking-[0.35em]">
              Help Center
            </span>
            <span className="w-12 h-[2px] bg-[#f6c343]"></span>
          </div>
          <h2 className="text-3xl md:text-[50px] font-extrabold text-[#0b1220] leading-tight tracking-tight mb-6">
            Frequently Asked <span className="text-[#2d7ed6]">Questions.</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            Find quick answers to common questions about our professional repair services.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              item={faq}
              isOpen={openId === faq.id}
              toggle={() => setOpenId(openId === faq.id ? -1 : faq.id)}
            />
          ))}
        </div>

        {/* Bottom Help Trigger */}
        <div className="mt-20 max-w-4xl mx-auto">
           <div className="flex flex-col md:flex-row items-center gap-8 p-10 bg-[#06162f] rounded-[32px] w-full justify-between shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2d7ed6]/10 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10 text-center md:text-left">
                <h4 className="text-white text-2xl font-extrabold mb-2">Still Have Questions?</h4>
                <p className="text-white/60 font-medium">We're here to help. Contact our support team for any emergency.</p>
              </div>

              <Link 
                to="/contact" 
                className="relative z-10 group flex items-center gap-3 px-10 py-4 bg-[#f6c343] text-[#0b1220] rounded-full font-extrabold text-[14px] uppercase tracking-wider hover:bg-white transition-all shadow-xl active:scale-95"
              >
                Contact Support <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
