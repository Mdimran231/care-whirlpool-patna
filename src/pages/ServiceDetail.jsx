import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, ShieldCheck, Zap, MessageSquare, Star, ArrowLeft } from 'lucide-react';

// Data ko yahan import karein (Ensure path is correct)
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
  const { id } = useParams();
  const data = servicesData[id];

  useEffect(() => {
    // Page title dynamic set karein
    if (data) {
      document.title = `${data.title} - Cooling Refrigeration Patna`;
    }
    window.scrollTo(0, 0);
  }, [data]);

  // Agar data nahi milta, toh error/back button dikhayein
  if (!data) return (
    <div className="pt-48 text-center font-black text-2xl text-slate-500 min-h-screen bg-slate-50">
      Service not found! <br /> 
      <Link to="/" className="text-sky-500 text-sm flex items-center justify-center gap-2 mt-4">
        <ArrowLeft size={16}/> Back to Home
      </Link>
    </div>
  );

  return (
    <div className="pt-24 md:pt-40 pb-20 px-6 min-h-screen bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/40 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* LEFT: IMAGE SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="md:sticky md:top-40 z-10"
          >
            <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-[6px] md:border-[10px] border-white group aspect-[4/3]">
              <img src={data.image} alt={data.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl flex items-center gap-2 shadow-lg">
                <Star size={14} className="text-amber-500 fill-amber-500" />
                <span className="text-[10px] md:text-xs font-black text-slate-800">Verified Service</span>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="hidden md:grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center gap-4">
                <ShieldCheck className="text-sky-500" size={24} />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">30 Days Warranty</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center gap-4">
                <Clock className="text-sky-500" size={24} />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">60 Min Arrival</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: CONTENT SECTION */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 md:space-y-10">
            
            <div className="space-y-4">
              <span className="bg-sky-50 text-sky-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-sky-100">Patna Special</span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">{data.title}</h1>
              <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed">{data.desc}</p>
            </div>

            {/* Price & Booking Card */}
            <div className="p-6 md:p-8 rounded-[2.5rem] md:rounded-[3rem] bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/20 rounded-full blur-3xl" />
              <div className="text-center sm:text-left">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Estimated</p>
                <p className="text-4xl md:text-5xl font-black text-white">{data.price === "Quote" ? "On Call" : `₹${data.price}`}</p>
              </div>
              <button 
                onClick={() => window.open(`https://wa.me/919942470813?text=Hi, I want to book ${data.title} in Patna.`)}
                className="w-full sm:w-auto bg-sky-500 hover:bg-white hover:text-slate-900 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl md:rounded-[2rem] font-black transition-all shadow-xl flex items-center justify-center gap-3"
              >
                Book on WhatsApp <MessageSquare size={22} />
              </button>
            </div>

            {/* Features List */}
            <div className="bg-white p-7 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-sm">
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-6 md:mb-8 flex items-center gap-3">
                <Zap size={20} className="text-sky-500" /> What is Included?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-10">
                {data.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-green-500 shrink-0" />
                    <span className="text-sm font-bold text-slate-600">{f}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;