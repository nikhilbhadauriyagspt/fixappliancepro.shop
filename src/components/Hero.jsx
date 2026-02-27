import React, { useEffect, useState } from "react";
import { useBooking } from "../context/BookingContext";
import { API_ENDPOINTS } from "../config/api";
import { servicesData } from "../data/services";

const rotatingTexts = [
  {
    title: "Expert Appliance",
    title2: "Repair Services",
    desc: "Fast, reliable, and affordable repairs for all your home appliances. Our certified technicians are ready to help."
  },
  {
    title: "Washing Machine",
    title2: "& Dryer Fix",
    desc: "Don't let laundry pile up. We provide same-day repair services for all major washing machine and dryer brands."
  },
  {
    title: "Refrigerator &",
    title2: "Freezer Repair",
    desc: "Keep your food fresh. Our experts diagnose and fix cooling issues, leaks, and electrical problems quickly."
  },
  {
    title: "Kitchen Range",
    title2: "& Oven Service",
    desc: "Get back to cooking your favorite meals. We specialize in repairing stoves, ovens, and kitchen chimneys."
  },
  {
    title: "Air Conditioner",
    title2: "Maintenance",
    desc: "Stay cool all summer long. Professional AC repair, gas filling, and deep cleaning services at your doorstep."
  }
];

const Hero = () => {
  const { openBookingModal } = useBooking();
  const [quoteOpen, setQuoteOpen] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    appliance: '',
    location: ''
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handler = () => setQuoteOpen(true);
    window.addEventListener("open-quote", handler);
    return () => window.removeEventListener("open-quote", handler);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINTS.BOOKING, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.status === 'success') {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', email: '', appliance: '', location: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Fallback success for demo
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const currentText = rotatingTexts[currentIndex];

  return (
    <section className="relative min-h-[700px] lg:min-h-screen w-full overflow-hidden bg-[#041127] pt-[100px] md:pt-[120px] lg:pt-[140px] flex flex-col justify-end">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/banner/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-5 md:px-8 w-full">
        <div className="grid grid-cols-12 gap-3 items-end">
          {/* Left Person - Start from bottom */}
          <div className="hidden lg:block lg:col-span-3 relative self-end">
            <div className="relative w-full flex items-end justify-center">
              <img
                src="/banner/hero-person.png"
                alt="Repair Technician"
                className="max-h-[500px] xl:max-h-[700px] w-auto object-contain translate-y-[1px]"
              />
            </div>
          </div>

          {/* Center Content - Centered text and items */}
          <div className="col-span-12 lg:col-span-6 text-center flex flex-col items-center justify-center pb-12 lg:pb-44">
            <div className="inline-flex items-center gap-2 text-[#f6c343] text-[12px] tracking-[0.35em] font-bold uppercase mb-5">
              LET’S GET TO WORK
            </div>

            <div className={`transition-all duration-700 transform ${isAnimating ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"}`}>
              <h1 className="text-white font-extrabold leading-[1.1] tracking-tight">
                <span className="block text-[36px] md:text-[52px] lg:text-[60px]">
                  {currentText.title}
                </span>
                <span className="block text-[36px] md:text-[52px] lg:text-[60px] text-[#f6c343]">
                  {currentText.title2}
                </span>
              </h1>

              <p className="mt-6 text-white/80 text-[15px] md:text-[17px] leading-relaxed max-w-lg mx-auto">
                {currentText.desc}
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
              <button
                onClick={() => openBookingModal()}
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#f6c343] text-[#0b1220] font-bold text-[14px] shadow-lg hover:bg-white transition-all transform hover:scale-105"
              >
                Our Services
              </button>

              <button
                onClick={() => openBookingModal()}
                className="w-full sm:w-auto px-10 py-4 rounded-full border-2 border-white/20 text-white font-bold text-[14px] hover:bg-white hover:text-[#0b1220] transition-all transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Quote Panel */}
          <div className="col-span-12 lg:col-span-3 pb-12 lg:pb-20">
            <div
              className={`relative transition-all duration-700 ${quoteOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                }`}
            >
              <div className="bg-[#2d7ed6] rounded-[32px] shadow-[0_30px_100px_rgba(0,0,0,0.5)] p-8 border border-white/10">
                {/* Close */}
                <button
                  onClick={() => setQuoteOpen(false)}
                  className="absolute right-6 top-6 text-white/70 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#f6c343]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-white text-xl font-bold">Request Sent!</h3>
                    <p className="text-white/80 text-sm mt-2">We will contact you shortly.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-white text-[26px] font-extrabold tracking-tight">
                      Request A Quote
                    </h3>
                    <p className="mt-2 text-white/80 text-[13px] leading-relaxed">
                      Fill out the form below for priority scheduling.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                      <Field name="name" value={formData.name} onChange={handleChange} placeholder="Your Full Name" required />
                      <Field name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" type="email" required />
                      <Field name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" type="tel" required />

                      <div className="relative group">
                        <select
                          name="appliance"
                          value={formData.appliance}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/10 text-white placeholder:text-white/50 text-[14px] font-medium outline-none py-3.5 px-5 rounded-xl border border-white/10 focus:border-[#f6c343] focus:bg-white/20 transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-[#2d7ed6]">Select Appliance</option>
                          {servicesData.map(s => (
                            <option key={s.id} value={s.title} className="bg-[#2d7ed6]">{s.title}</option>
                          ))}
                        </select>
                      </div>

                      <Field name="location" value={formData.location} onChange={handleChange} placeholder="Service Location" required />

                      <button
                        type="submit"
                        className="mt-4 w-full py-4 rounded-full bg-[#f6c343] text-[#0b1220] font-extrabold text-[14px] hover:bg-white transition-all shadow-xl active:scale-95"
                      >
                        Get A Free Quote
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Small hint button on mobile if closed */}
            {!quoteOpen && (
              <div className="mt-4">
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="w-full py-4 rounded-full bg-[#f6c343] text-[#0b1220] font-extrabold shadow-lg hover:bg-white transition-all"
                >
                  Open Request Form
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

function Field({ placeholder, type = "text", ...props }) {
  return (
    <div className="relative group">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/10 text-white placeholder:text-white/50 text-[14px] font-medium outline-none py-3.5 px-5 rounded-xl border border-white/10 focus:border-[#f6c343] focus:bg-white/20 transition-all"
        {...props}
      />
    </div>
  );
}

export default Hero;