import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Phone, MessageCircle, CreditCard } from 'lucide-react';
import { FaBolt, FaUserTie, FaWallet, FaShieldAlt } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';
import Navbar from '../components/Navbar';
import { servicesData } from '../data/servicesData';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const servicesRef = useRef(null);

    const features = [
        { icon: <FaBolt />, title: "60-min Response", desc: "Patna mein sabse tez service." },
        { icon: <FaUserTie />, title: "Expert Techs", desc: "Certified & experienced staff." },
        { icon: <FaWallet />, title: "Best Pricing", desc: "Zero hidden charges, fair rates." },
        { icon: <FaShieldAlt />, title: "Warranty", desc: "Service par full peace of mind." },
    ];

    useEffect(() => {
        gsap.fromTo(contentRef.current.children,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power4.out" }
        );

        gsap.to(imageRef.current, {
            y: -30,
            duration: 2.5,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        });

        gsap.to(".animated-bg", {
            backgroundPosition: "200% center",
            duration: 10,
            repeat: -1,
            ease: "linear"
        });
    }, []);

    return (
        <div className="bg-slate-50 min-h-screen selection:bg-blue-500 selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <header className="relative px-6 pt-32 pb-20 md:pt-48 md:pb-32 text-white overflow-hidden animated-bg"
                style={{
                    background: "linear-gradient(270deg, #0f172a, #1e3a8a, #1e40af, #0f172a)",
                    backgroundSize: "400% 400%"
                }}>

                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 opacity-20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500 opacity-10 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
                    <div ref={contentRef} className="md:w-1/2 space-y-8 text-center md:text-left z-20">
                        <div className="flex flex-col md:flex-row gap-3 items-center md:items-start">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-blue-200 text-sm font-semibold tracking-wide">
                                <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping"></span>
                                #1 Appliance Repair in Patna
                            </div>
                            {/* Hero Visiting Charge Badge */}
                            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/30 text-amber-200 text-sm font-bold">
                                <CreditCard size={14} /> Visiting Charge: ₹299
                            </div>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                            Care Whirlpool <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                                Service Center
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-blue-100/80 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
                            Expert Repair for All Your Home Appliances. Specialized in Cooling Systems with a guaranteed 60-minute arrival time.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-4">
                            <motion.a
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                href="https://wa.me/919942470813"
                                className="bg-emerald-500 hover:bg-emerald-400 px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-colors shadow-xl shadow-emerald-900/20"
                            >
                                <MessageCircle className="w-6 h-6" /> WhatsApp Now
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                href="tel:+919942470813"
                                className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-colors shadow-xl"
                            >
                                <Phone className="w-5 h-5" /> Call Expert
                            </motion.a>
                        </div>
                    </div>

                    <div ref={imageRef} className="md:w-1/2 mt-16 md:mt-0 relative flex justify-center items-center">
                        <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-[100px] scale-125"></div>
                        <img
                            src="/hero.png"
                            alt="Whirlpool Appliances"
                            className="w-full h-auto object-contain relative z-10 filter drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)] scale-110 md:scale-125 origin-center md:origin-right"
                        />
                    </div>
                </div>
            </header>

            {/* Services Section */}
            <section className="py-24 px-6 relative bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center mb-16 space-y-4 text-center">
                        <h3 className="text-blue-600 font-black tracking-widest uppercase text-sm italic">Premium Solutions</h3>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900">Our Expertise</h2>
                        <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
                        
                        {/* Main Visiting Charge Highlight */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="mt-6 flex items-center gap-3 bg-blue-50 border border-blue-100 px-6 py-3 rounded-2xl"
                        >
                            <div className="bg-blue-600 p-2 rounded-lg text-white">
                                <FaWallet />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] uppercase font-bold text-blue-400 leading-none mb-1">Standard Rates</p>
                                <p className="text-blue-900 font-black text-lg leading-none">₹299 <span className="text-sm font-medium text-blue-600">Visiting Charge</span></p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {Object.entries(servicesData).slice(0, 6).map(([id, service]) => (
                            <div key={id} className="hover:scale-[1.02] transition-transform duration-300">
                                <ServiceCard
                                    id={id}
                                    title={service.title}
                                    desc={service.desc}
                                    image={service.image}
                                />
                            </div>
                        ))}
                    </div>

                    {Object.keys(servicesData).length > 6 && (
                        <div className="mt-16 text-center">
                            <a href="/services" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl">
                                View All Services
                            </a>
                        </div>
                    )}
                </div>
            </section>

            {/* Brand Section */}
            <section className="py-24 bg-slate-950 text-white overflow-hidden border-y border-white/5 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center text-sky-400 font-black text-xs uppercase tracking-[0.5em] mb-20 opacity-80"
                    >
                        Authorized Care for Major Brands
                    </motion.p>

                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-16 md:gap-x-20">
                        {[
                            { name: "LG", color: "hover:text-[#a50034]" },
                            { name: "SAMSUNG", color: "hover:text-[#034ea2]" },
                            { name: "VOLTAS", color: "hover:text-[#005da4]" },
                            { name: "DAIKIN", color: "hover:text-[#00a1e4]" },
                            { name: "WHIRLPOOL", color: "hover:text-[#ed1c24]" },
                            { name: "HITACHI", color: "hover:text-[#ff0000]" },
                            { name: "HAIER", color: "hover:text-[#005da4]" },
                            { name: "GODREJ", color: "hover:text-[#00aeef]" },
                            { name: "BLUE STAR", color: "hover:text-[#004a91]" }
                        ].map((brand, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 0.4, scale: 1 }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1.2,
                                    filter: "drop-shadow(0 0 15px rgba(56, 189, 248, 0.4))"
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: idx * 0.05,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                className={`cursor-default transition-all duration-300`}
                            >
                                <span className={`text-4xl md:text-6xl font-black tracking-tighter italic ${brand.color} select-none`}>
                                    {brand.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50" />
            </section>

            {/* Hot Action Banner */}
            <section className="py-16 px-6 -mt-10 relative z-20">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="max-w-5xl mx-auto rounded-[3rem] p-1 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 shadow-2xl"
                >
                    <div className="bg-white/95 backdrop-blur-xl rounded-[2.85rem] px-8 py-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="space-y-4 text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                Garmi Se <span className="text-blue-600">Pareshan?</span>
                            </h2>
                            <p className="text-xl text-slate-500 font-medium italic">Abhi call karein aur 60 min mein cooling payein! ❄️</p>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-5">
                            <a href="tel:+919942470813" className="group relative">
                                <div className="absolute -inset-1 bg-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                                <div className="relative flex items-center gap-4 bg-slate-900 text-white px-10 py-6 rounded-2xl shadow-2xl transition-all active:scale-95">
                                    <Zap className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                                    <span className="text-3xl md:text-4xl font-black tracking-tighter">+91 9942470813</span>
                                </div>
                            </a>
                            <div className="flex items-center gap-3">
                                <span className="flex h-3 w-3 rounded-full bg-green-500"></span>
                                <span className="text-slate-600 font-bold uppercase text-xs tracking-widest">Available Now in Patna</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Why Choose Us */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center mb-16">Why Choose Us?</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 group text-center md:text-left"
                            >
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}