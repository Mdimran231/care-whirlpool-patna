import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Clock, Award, CheckCircle2, MapPin, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { label: "Happy Clients", value: "5000+", icon: <Users className="w-5 h-5" /> },
    { label: "Expert Technicians", value: "25+", icon: <Zap className="w-5 h-5" /> },
    { label: "Years Experience", value: "10+", icon: <Award className="w-5 h-5" /> },
    { label: "Service Points", value: "Patna", icon: <MapPin className="w-5 h-5" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-sky-500 selection:text-white">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 bg-slate-950 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sky-400/10 blur-[100px] rounded-full" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-6 py-2 rounded-full border border-white/10 text-sky-400 text-xs font-bold uppercase tracking-[0.3em] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Serving Patna Since 2014
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8"
          >
            The Heart of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              Reliable Repair
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Care Whirlpool is more than just a repair service; we are a trusted partner for every household in Patna. We take full responsibility for your home comfort.
          </motion.p>
        </div>
      </section>

      {/* --- STATS SECTION (Floating Cards) --- */}
      <section className="relative -mt-16 px-6 z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group p-8 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 text-center flex flex-col items-center gap-3 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors duration-500">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- OUR STORY & MISSION --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500 to-blue-600 rounded-[4rem] blur-2xl opacity-10" />
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img src="about.jpg" alt="Our Team" className="w-full h-full object-cover aspect-square" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-slate-950 text-white p-10 rounded-[3rem] shadow-2xl hidden md:flex flex-col items-center">
              <span className="text-4xl font-black text-sky-400">10+</span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-60">Years of Trust</span>
            </div>
          </motion.div>
          
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-sky-600 font-black text-sm uppercase tracking-[0.3em]">Our Philosophy</h3>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Quality Repair, <br /> Fair Pricing.
              </h2>
            </div>
            
            <p className="text-slate-600 text-xl leading-relaxed font-medium">
              We realized that people in Patna struggled to find professional repairs at the right time and fair price. We decided to change that once and for all.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Certified Technicians",
                "30-Day Warranty",
                "Genuine Spare Parts",
                "60-Min Emergency"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="bg-green-500 rounded-full p-1 text-white">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-black text-slate-800 text-sm tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto bg-slate-950 rounded-[4rem] p-12 md:p-24 overflow-hidden relative border border-white/5 shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full" />
            <p className="text-slate-400 font-medium">Over 5000+ families in Patna trust our services</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8 relative z-10"
          >
            <FeatureCard 
              icon={<ShieldCheck size={40}/>} 
              title="Fully Insured" 
              desc="Your appliances are our responsibility. We guarantee safe, secure, and professional handling every time." 
            />
            <FeatureCard 
              icon={<Clock size={40}/>} 
              title="Punctual Service" 
              desc="We value your time. Our expert technicians are committed to arriving at your doorstep exactly on schedule." 
            />
            <FeatureCard 
              icon={<Users size={40}/>} 
              title="Local Experts" 
              desc="Being based in Patna, we truly understand the local climate and specific maintenance needs of your appliances." 
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
      className="p-10 bg-white/5 border border-white/10 rounded-[3rem] transition-all duration-300 group cursor-default"
    >
      <div className="text-sky-400 mb-8 p-4 bg-sky-400/10 w-fit rounded-3xl group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-400 leading-relaxed font-medium text-sm">{desc}</p>
    </motion.div>
  );
}