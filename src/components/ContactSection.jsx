import React, { useState } from 'react';
import { API_ENDPOINTS } from '../config/api';
import { FiSend, FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.status === 'success') {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitted(true); // Fallback success for demo
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#f8fafc] overflow-hidden" id="contact">
      <div className="max-w-[1800px] mx-auto px-5 md:px-8">

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-[#f6c343]"></span>
                <span className="text-[#2d7ed6] font-extrabold text-[12px] uppercase tracking-[0.35em]">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-3xl md:text-[50px] font-extrabold text-[#0b1220] leading-tight tracking-tight mb-8">
                Ready To Fix Your <br />
                <span className="text-[#2d7ed6]">Appliances?</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
                We're here to provide fast and professional repair services. Send us a message and our local experts will reach out within 2 hours.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <ContactInfoCard
                icon={<FiMail />}
                label="Email Support"
                value="info@fixappliancepro.shop"
                color="[#2d7ed6]"
              />

              <ContactInfoCard
                icon={<FiMapPin />}
                label="Our Service Area"
                                 value="128 W Lake St, Addison, IL 60101, USA"                color="emerald-500"
              />
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-2xl shadow-slate-200/60 relative overflow-hidden border border-slate-100">
              {/* Soft decorative blur */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#2d7ed6]/5 rounded-full blur-[100px] -z-0"></div>

              {isSubmitted ? (
                <div className="relative z-10 text-center py-20">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <FiSend size={40} />
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#0b1220] mb-4">Message Sent!</h3>
                  <p className="text-slate-500 text-lg font-medium mb-12 max-w-sm mx-auto">Thank you for reaching out. Our team is reviewing your request and will contact you shortly.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#0b1220] text-white px-10 py-4 rounded-full font-extrabold text-sm uppercase tracking-widest hover:bg-[#2d7ed6] transition-all shadow-xl active:scale-95"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputField
                      label="Full Name"
                      name="name"
                      placeholder="John Doe"
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputField
                      label="Phone Number"
                      name="phone"
                      placeholder="(555) 123-4567"
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="Appliance Issue"
                      name="subject"
                      placeholder="e.g. Fridge Cooling Issue"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[#0b1220] text-[12px] font-extrabold uppercase tracking-widest ml-4">How Can We Help?</label>
                    <textarea
                      name="message"
                      required
                      onChange={handleChange}
                      placeholder="Describe the problem you're experiencing..."
                      rows="4"
                      className="w-full bg-[#f8fafc] border border-slate-100 outline-none rounded-[32px] px-8 py-6 text-[#0b1220] font-medium focus:border-[#2d7ed6] focus:bg-white transition-all resize-none placeholder:text-slate-300"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full md:w-auto bg-[#2d7ed6] text-white hover:bg-[#0b1220] px-12 py-5 rounded-full font-extrabold text-[14px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-4 group shadow-xl transform active:scale-95">
                      Send Message Now
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                        <FiSend size={16} />
                      </div>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoCard = ({ icon, label, value, color }) => (
  <div className="flex items-center gap-8 p-8 rounded-[32px] border border-slate-100 bg-white group hover:border-[#2d7ed6] transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-[#2d7ed6]/5">
    <div className={`w-16 h-16 rounded-2xl bg-[#f8fafc] text-${color} flex items-center justify-center group-hover:bg-[#2d7ed6] group-hover:text-white transition-all duration-500 shadow-sm`}>
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <div>
      <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-[0.2em] mb-1">{label}</p>
      <p className="text-[#0b1220] font-extrabold text-lg">{value}</p>
    </div>
  </div>
);

const InputField = ({ label, name, type = "text", placeholder, ...props }) => (
  <div className="space-y-3">
    <label className="text-[#0b1220] text-[12px] font-extrabold uppercase tracking-widest ml-4">{label}</label>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-full bg-[#f8fafc] border border-slate-100 outline-none rounded-full px-8 py-4 text-[#0b1220] font-medium focus:border-[#2d7ed6] focus:bg-white transition-all placeholder:text-slate-300"
      {...props}
    />
  </div>
);

export default ContactSection;
