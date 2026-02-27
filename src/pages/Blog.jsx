import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import { FiArrowRight, FiCalendar, FiBookOpen } from 'react-icons/fi';
import { PiNewspaperClippingLight, PiMagnifyingGlassLight } from 'react-icons/pi';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Our Blog | Fix Appliancepro - Repair Tips & Guides</title>
        <meta name="description" content="Helpful tips for maintaining your home appliances. Learn how to keep your fridges, washing machines, and ACs running longer." />
      </Helmet>

      {/* Clean & Light Hero Section */}
      <section className="relative pt-44 pb-32 bg-slate-50/50 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[4px]">Maintenance Hub</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tighter">
            Helpful tips for <br />
            Your <span className="text-amber-500 underline decoration-slate-200 underline-offset-8 italic">Appliance Care.</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Stay updated with our expert advice on how to keep your home appliances running smoothly and prevent common issues.
          </p>
        </div>
      </section>

      {/* Blog Listing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {blogsData.map((blog) => (
              <Link
                to={`/blog/${blog.id}`}
                key={blog.id}
                className="group flex flex-col"
              >
                {/* Image Container */}
                <div className="relative rounded-[2.5rem] overflow-hidden mb-8 aspect-[4/3] shadow-sm bg-white border border-slate-50">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-xl">
                    <span className="text-slate-900 text-[10px] font-black uppercase tracking-widest">{blog.category || 'Maintenance'}</span>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-6 mb-5 text-slate-400">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
                    <FiCalendar className="text-amber-500" /> {blog.date}
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
                    <FiBookOpen className="text-amber-500" /> 5 Min Read
                  </div>
                </div>

                {/* Blog Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-6 group-hover:text-amber-600 transition-colors duration-300 capitalize">
                  {blog.title}
                </h3>

                {/* Read More Link */}
                <div className="mt-auto inline-flex items-center gap-3 text-slate-500 group-hover:text-amber-600 font-bold text-sm transition-all border-b-2 border-transparent group-hover:border-amber-400 pb-0.5">
                  Read full story <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Banner */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 lg:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>

            <div className="relative z-10 space-y-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Want our latest <br />
                <span className="text-amber-400 italic">Repair guides?</span>
              </h2>

              <div className="flex flex-col md:flex-row max-w-xl mx-auto items-center p-2 bg-white/5 border border-white/10 rounded-[2rem] shadow-2xl">
                <input type="email" placeholder="Your email address" className="bg-transparent border-none text-white text-lg px-8 py-4 focus:ring-0 w-full outline-none placeholder:text-slate-600" />
                <button className="bg-amber-400 text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[12px] hover:bg-white transition-all w-full md:w-auto shadow-xl">
                  Join Hub
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
