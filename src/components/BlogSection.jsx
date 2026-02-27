import React from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import { FiArrowRight, FiCalendar, FiBookOpen } from 'react-icons/fi';

const BlogSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden" id="blog">
      <div className="max-w-[1800px] mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#f6c343]"></span>
              <span className="text-[#2d7ed6] font-extrabold text-[12px] uppercase tracking-[0.35em]">
                Latest Updates
              </span>
            </div>
            <h2 className="text-3xl md:text-[50px] font-extrabold text-[#0b1220] leading-tight tracking-tight">
              News, Tips & <span className="text-[#2d7ed6]">Maintenance Guides.</span>
            </h2>
          </div>
          <Link 
            to="/blog" 
            className="group flex items-center gap-4 bg-[#f8fafc] px-8 py-4 rounded-full text-[#0b1220] font-extrabold hover:bg-[#2d7ed6] hover:text-white transition-all shadow-sm"
          >
            <span>Read All Articles</span>
            <FiArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogsData.slice(0, 3).map((blog) => (
            <Link 
              to={`/blog/${blog.id}`} 
              key={blog.id} 
              className="group flex flex-col h-full bg-[#f8fafc] rounded-[40px] overflow-hidden border border-slate-100 hover:border-[#2d7ed6] hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-[#2d7ed6] text-white px-4 py-2 rounded-xl shadow-lg">
                   <span className="text-[10px] font-extrabold uppercase tracking-widest">
                     {blog.category || 'Maintenance'}
                   </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-5 mb-6 text-slate-400">
                  <div className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-wider">
                    <FiCalendar className="text-[#f6c343]" />
                    {blog.date}
                  </div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                  <div className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-wider">
                    <FiBookOpen className="text-[#f6c343]" />
                    5 Min Read
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-[#0b1220] leading-snug mb-6 group-hover:text-[#2d7ed6] transition-colors duration-300">
                  {blog.title}
                </h3>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-3 text-[#2d7ed6] font-extrabold text-sm uppercase tracking-wider group-hover:gap-5 transition-all">
                   Read Full Story <FiArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-24 p-10 md:p-16 bg-[#06162f] rounded-[48px] relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-96 h-96 bg-[#2d7ed6]/10 rounded-full blur-[100px]"></div>
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-center lg:text-left max-w-lg">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Master Your Home Appliances</h3>
                <p className="text-white/60 font-medium text-lg">Subscribe to our newsletter for exclusive maintenance tips and discount offers.</p>
              </div>
              
              <div className="w-full lg:w-auto">
                <form className="flex flex-col sm:flex-row gap-4 p-2 bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-sm">
                   <input 
                     type="email" 
                     placeholder="Enter your email address" 
                     className="bg-transparent border-none text-white text-lg px-8 py-4 focus:ring-0 w-full lg:w-80 outline-none placeholder:text-white/30 font-medium" 
                   />
                   <button className="bg-[#f6c343] text-[#0b1220] px-10 py-4 rounded-full font-extrabold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl">
                      Subscribe Now
                   </button>
                </form>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
