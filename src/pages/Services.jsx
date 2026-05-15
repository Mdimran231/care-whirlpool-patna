import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData'; // Data import
import ServiceCard from '../components/ServiceCard'; // Component import

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sky-600 font-black tracking-widest uppercase text-sm"
          >
            Our Expertise
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mt-4 mb-6"
          >
            Premium Services <br />
            <span className="text-slate-400">in Patna</span>
          </motion.h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(servicesData).map(([id, service], index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard 
                id={id}
                title={service.title}
                desc={service.desc}
                image={service.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}