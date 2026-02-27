import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiMail, FiPlus, FiGrid, FiChevronDown, FiClock, FiShield } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { servicesData } from "../data/services.js";
import { useBooking } from "../context/BookingContext";

const Header = () => {
  const location = useLocation();
  const { openBookingModal } = useBooking();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const nav = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Services", to: "/services", isServices: true },
      { label: "Contact Us", to: "/contact" },
    ],
    []
  );

  return (
    <div className="fixed top-0 left-0 w-full z-[300]">
      {/* Top Blue Bar */}
      <div className="hidden md:block bg-[#2d7ed6] text-white">
        <div className="max-w-[1800px] mx-auto px-6 h-11 flex items-center justify-between">
          <div className="flex items-center gap-6 text-[12px] font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <FiClock className="text-[#f6c343] text-sm" />
              <span>Mon - Sat: 08:00 AM - 09:00 PM</span>
            </div>
            <div className="w-[1px] h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <FiShield className="text-[#f6c343] text-sm" />
              <span>Professional Service Guarantee</span>
            </div>
          </div>

          <div className="flex items-center gap-8 text-[12px] font-semibold">
            <div className="flex items-center gap-2 opacity-95">
              <span className="inline-block w-2 h-2 rounded-full bg-white/60" />
              <span>128 W Lake St, Addison, IL 60101, USA</span>
            </div>
            <div className="flex items-center gap-2 opacity-95">
              <span className="inline-block w-2 h-2 rounded-full bg-white/60" />
              <a href="mailto:info@fixappliancepro.shop">info@fixappliancepro.shop</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`transition-all duration-500 ${scrolled ? "bg-[#07162d]/95 backdrop-blur-xl shadow-2xl" : "bg-transparent"}`}>
        <div className="max-w-[1800px] mx-auto px-5 md:px-8">
          <div className="h-[78px] flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo/logo.png" alt="Logo" className="h-10 md:h-16 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7 relative">
              {nav.map((item) => {
                if (item.isServices) {
                  const active = location.pathname.startsWith("/services") || location.pathname.startsWith("/service/");
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link
                        to={item.to}
                        className={`text-[14px] font-semibold transition inline-flex items-center gap-2 ${active ? "text-white" : "text-white/85 hover:text-white"
                          }`}
                      >
                        {item.label}
                        <FiChevronDown className={`transition ${servicesOpen ? "rotate-180" : ""}`} />
                      </Link>

                      {/* Mega Dropdown */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-5 transition-all duration-300 origin-top ${servicesOpen ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible -translate-y-2 scale-95"
                          }`}
                      >
                        <div className="w-[880px] bg-white rounded-[28px] shadow-[0_50px_120px_rgba(0,0,0,0.35)] overflow-hidden border border-slate-100">
                          <div className="flex h-[420px]">
                            {/* Left Promo */}
                            <div className="w-[34%] bg-[#06162f] text-white p-10 relative">
                              <div className="flex items-center gap-3 mb-6">
                                <div className="w-11 h-11 rounded-2xl bg-[#f6c343] text-[#0b1220] grid place-items-center">
                                  <FiGrid className="text-xl" />
                                </div>
                                <div>
                                  <p className="text-[11px] tracking-[0.25em] font-extrabold uppercase text-white/70">
                                    Our Services
                                  </p>
                                  <p className="text-[22px] font-extrabold leading-tight">
                                    Fast & Reliable<br />Handyman Help
                                  </p>
                                </div>
                              </div>

                              <p className="text-white/70 text-[13px] leading-relaxed">
                                Choose any service below. We’ll get you a quick quote and schedule.
                              </p>

                              <div className="mt-8 space-y-3">
                                <div className="flex items-center gap-3 text-[12px] font-bold text-white/85">
                                  <span className="w-2 h-2 rounded-full bg-[#f6c343]" />
                                  Same-Day Availability
                                </div>
                                <div className="flex items-center gap-3 text-[12px] font-bold text-white/85">
                                  <span className="w-2 h-2 rounded-full bg-[#f6c343]" />
                                  Transparent Pricing
                                </div>
                                <div className="flex items-center gap-3 text-[12px] font-bold text-white/85">
                                  <span className="w-2 h-2 rounded-full bg-[#f6c343]" />
                                  Verified Professionals
                                </div>
                              </div>

                              <button
                                onClick={() => openBookingModal()}
                                className="mt-10 w-full py-3.5 rounded-full bg-[#f6c343] text-[#0b1220] font-extrabold text-[13px] hover:bg-white transition shadow-lg"
                              >
                                Get A Quote
                              </button>
                            </div>

                            {/* Right Services List (ALL servicesData) */}
                            <div className="w-[66%] p-10 bg-white">
                              <div className="flex items-center justify-between mb-4">
                                <h4 className="text-[16px] font-extrabold text-slate-900">
                                  Browse Services
                                </h4>
                                <span className="text-[11px] font-bold text-slate-500">
                                  Total: {servicesData?.length || 0}
                                </span>
                              </div>

                              {/* Scrollable grid */}
                              <div className="grid grid-cols-2 gap-x-8 gap-y-1 pr-2 h-[330px] overflow-y-auto">
                                {(servicesData || []).map((s) => (
                                  <Link
                                    key={s.id || s.slug || s.title}
                                    to={`/service/${s.slug}`}
                                    className="group py-2 flex items-center justify-between border-b border-slate-100 hover:border-[#f6c343] transition"
                                  >
                                    <span className="text-[13px] font-semibold text-slate-700 group-hover:text-slate-950">
                                      {s.title}
                                    </span>
                                    <FiPlus className="text-slate-300 group-hover:text-[#f6c343] transition group-hover:rotate-90" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                const active = location.pathname === item.to;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`text-[14px] font-semibold transition ${active ? "text-white" : "text-white/85 hover:text-white"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-5">
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full border border-white/25 grid place-items-center">
                  <FiMail />
                </div>
                <div className="leading-tight">
                  <div className="text-[12px] opacity-80 font-semibold">Email Us</div>
                  <a className="text-[15px] font-bold" href="mailto:info@fixappliancepro.shop">
                    info@fixappliancepro.shop
                  </a>
                </div>
              </div>

              <button
                onClick={() => openBookingModal()}
                className="px-7 py-3 rounded-full bg-[#f6c343] text-[#0b1220] font-extrabold text-[13px] hover:bg-white transition shadow-lg"
              >
                Get A Quote
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-11 h-11 rounded-full bg-[#f6c343] text-[#0b1220] grid place-items-center shadow-lg"
              aria-label="Open Menu"
            >
              <FiMenu className="text-xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[500] lg:hidden transition ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-[86%] max-w-sm bg-[#06162f] text-white p-6 transition-transform duration-500 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between mb-8">
            <img src="/logo/logo.png" alt="Logo" className="h-10" />
            <button
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 grid place-items-center"
              aria-label="Close Menu"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          <div className="space-y-2">
            <Link to="/" className="block px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition font-semibold">
              Home
            </Link>
            <Link to="/about" className="block px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition font-semibold">
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <button
              onClick={() => setMobileServicesOpen((p) => !p)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition font-semibold"
            >
              <span>Services</span>
              <FiChevronDown className={`transition ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileServicesOpen && (
              <div className="mt-2 max-h-[260px] overflow-y-auto rounded-xl bg-white/5 p-2 space-y-1">
                {(servicesData || []).map((s) => (
                  <Link
                    key={s.id || s.slug || s.title}
                    to={`/service/${s.slug}`}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition text-[14px] text-white/90"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/page" className="block px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition font-semibold">
              Page
            </Link>
            <Link to="/shop" className="block px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition font-semibold">
              Shop
            </Link>
            <Link to="/contact" className="block px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition font-semibold">
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => {
              setMobileOpen(false);
              openBookingModal();
            }}
            className="mt-6 w-full py-4 rounded-full bg-[#f6c343] text-[#0b1220] font-extrabold"
          >
            Get A Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;