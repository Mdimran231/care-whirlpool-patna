import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Contact from '../pages/Contact';
import Services from '../pages/Services';

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
           <a href="https://wa.me/918540038107" 
            className="bg-slate-900 text-white px-7 py-3 rounded-full hover:bg-sky-600 transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-slate-900"
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
            <div className="flex flex-col gap-4 font-bold text-slate-800">
              <a href="/" onClick={() => setIsOpen(false)}>Home</a>
              <a href="/services" onClick={() => setIsOpen(false)}>Services</a>
              <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
              <a href="/about" onClick={() => setIsOpen(false)}>About</a>
              <a href="https://wa.me/919942470813" className="bg-sky-500 text-white py-3 rounded-full">Book Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}