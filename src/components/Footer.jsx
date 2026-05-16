export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6 "  style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e40af 100%)" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
         
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Care Whirlpool</h2>
          <p className="text-gray-400">
            Patna's most trusted service center for all home appliances. 
            Quality service at your doorstep with 100% satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/services" className="hover:text-blue-400 transition">Our Services</a></li>
            <li><a href="tel:+919942470813" className="hover:text-blue-400 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-gray-400">
            <li>📍 Patna, Bihar, India</li>
            <li>📞 +91 9942470813</li>
            <li>📧mdsou42@gmail.com </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 pt-8 border-t border-gray-800 text-gray-500 text-sm">
        © 2026 Care Whirlpool Service Center. All rights reserved.
      </div>
    </footer>
  );
}