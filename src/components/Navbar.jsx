import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react'; // Import add kiya gaya hai

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-4 pt-4">
      {/* Floating Glassmorphism Container */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-5xl mx-auto bg-white/60 backdrop-blur-2xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2rem] px-6 py-4 flex items-center justify-between"
      >

        {/* Logo */}
        <div className="text-2xl font-black text-slate-900 tracking-tighter ml-2 cursor-pointer">
          Care<span className="text-sky-500">Whirlpool</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 font-bold text-slate-600">
          <a href="/" className="hover:text-sky-600 transition-colors">Home</a>
          <a href="/services" className="hover:text-sky-600 transition-colors">Services</a>
          <a href="/contact" className="hover:text-sky-600 transition-colors">Contact</a>
          <a href="/about" className="hover:text-sky-600 transition-colors">About</a>
          
          {/* Call Now Button - Desktop */}
          <a
            href="tel:+919942470813"
            className="bg-sky-500 text-white py-3 px-8 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-sky-600 transition-all shadow-lg active:scale-95"
          >
            <Phone size={18} className="fill-current" />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-900 text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 mx-4 bg-white/90 backdrop-blur-xl border border-white/40 rounded-[2rem] p-6 text-center shadow-2xl"
          >
            <div className="flex flex-col gap-6 font-bold text-slate-800">
              <a href="/" onClick={() => setIsOpen(false)} className="hover:text-sky-600">Home</a>
              <a href="/services" onClick={() => setIsOpen(false)} className="hover:text-sky-600">Services</a>
              <a href="/contact" onClick={() => setIsOpen(false)} className="hover:text-sky-600">Contact</a>
              <a href="/about" onClick={() => setIsOpen(false)} className="hover:text-sky-600">About</a>
              
              {/* Call Now Button - Mobile */}
              <a
                href="tel:+919942470813"
                className="bg-sky-500 text-white py-4 px-8 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95"
              >
                <Phone size={20} className="fill-current" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}