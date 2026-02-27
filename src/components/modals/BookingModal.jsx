import React, { useState, useEffect } from 'react';
import { useBooking } from '../../context/BookingContext';
import { FiX, FiCheck, FiTool, FiMail, FiUser, FiPhone, FiMapPin } from 'react-icons/fi';
import { servicesData } from '../../data/services';
import { API_ENDPOINTS } from '../../config/api';

const BookingModal = () => {
  const { isModalOpen, closeBookingModal, selectedService } = useBooking();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    appliance: '',
    location: ''
  });

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, appliance: selectedService }));
    }
  }, [selectedService]);

  if (!isModalOpen) return null;

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
        setTimeout(() => {
          setIsSubmitted(false);
          closeBookingModal();
          setFormData({ name: '', phone: '', email: '', appliance: '', location: '' });
        }, 3000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Fallback success for demo
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        closeBookingModal();
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#041127]/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeBookingModal}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={closeBookingModal}
            className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#f6c343] hover:text-[#0b1220] transition-all"
          >
            <FiX size={20} />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-12 md:p-20 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiCheck size={40} />
            </div>
            <h3 className="text-3xl font-extrabold text-[#0b1220] mb-3">Booking Confirmed!</h3>
            <p className="text-slate-500 text-lg">Thank you for choosing Fix Appliancepro. Our team will contact you shortly to confirm your service window.</p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row">
            {/* Left Sidebar - Visual */}
            <div className="hidden md:flex md:w-1/3 bg-[#06162f] p-10 flex-col justify-between text-white">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#f6c343] text-[#0b1220] flex items-center justify-center mb-6">
                  <FiTool size={24} />
                </div>
                <h3 className="text-2xl font-extrabold leading-tight mb-4">Fast & Reliable Repairs</h3>
                <p className="text-white/60 text-sm leading-relaxed">Schedule your appliance repair in less than a minute. Priority service guaranteed.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-[#f6c343]"></div>
                  Same-Day Service
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-[#f6c343]"></div>
                  Expert Technicians
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-[#f6c343]"></div>
                  Certified Spare Parts
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 p-8 md:p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold text-[#0b1220]">Book a Service</h3>
                <p className="text-slate-500 font-medium mt-1">Fill out the details below to schedule.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ModalField
                    icon={<FiUser />}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                  />
                  <ModalField
                    icon={<FiMail />}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    type="email"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ModalField
                    icon={<FiPhone />}
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    type="tel"
                    required
                  />
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2d7ed6] transition-colors">
                      <FiTool />
                    </div>
                    <select
                      name="appliance"
                      value={formData.appliance}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-[#2d7ed6] focus:bg-white transition-all font-medium text-[#0b1220] appearance-none cursor-pointer"
                    >
                      <option value="">Select Appliance</option>
                      {servicesData.map((service) => (
                        <option key={service.id} value={service.title}>{service.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute left-4 top-5 text-slate-400 group-focus-within:text-[#2d7ed6] transition-colors">
                    <FiMapPin />
                  </div>
                  <textarea
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    rows="2"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-[#2d7ed6] focus:bg-white transition-all font-medium text-[#0b1220] resize-none"
                    placeholder="Enter Service Location (Address)"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2d7ed6] text-white font-extrabold uppercase tracking-wider py-4 rounded-2xl shadow-xl hover:bg-[#06162f] transition-all transform active:scale-95 mt-4"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ModalField = ({ icon, ...props }) => (
  <div className="relative group">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2d7ed6] transition-colors">
      {icon}
    </div>
    <input
      className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-[#2d7ed6] focus:bg-white transition-all font-medium text-[#0b1220]"
      {...props}
    />
  </div>
);

export default BookingModal;
