import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // 1. Link import karein

export default function ServiceCard({ id, title, desc, image }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
    >
      {/* Service Image */}
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      
      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{desc}</p>
        
        {/* 2. "Book Now" ke sath "View Details" ka Link add karein */}
        <div className="flex gap-3">
          <a 
            href={`https://wa.me/918540038107?text=Hi, I want to book ${title}.`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold text-center hover:bg-blue-700 transition"
          >
            Book Now
          </a>
          
          {/* Ye dynamic link specific service page par le jayega */}
          <Link 
            to={`/service/${id}`} 
            className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-full font-semibold text-center hover:bg-blue-50 transition"
          >
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}