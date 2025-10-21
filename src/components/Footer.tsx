import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);

  const handleFooterClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount === 5) {
      navigate("/developer");
      setClickCount(0);
    }
  };

  return (
    <footer className="bg-black text-gray-300 py-12" onClick={handleFooterClick}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl font-bold mb-4 group cursor-pointer">
              <span style={{ fontFamily: "'Great Vibes', cursive" }} className="text-4xl text-yellow-400 inline-block group-hover:scale-110 transition-transform duration-300">S</span>
              <span className="text-yellow-400 ml-1 group-hover:tracking-wide transition-all duration-300">mart Water Solution</span>
            </div>
            <p className="text-gray-400 leading-relaxed hover:text-gray-200 transition-colors duration-300">
              Advanced water treatment solutions for a cleaner, healthier future.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 inline-block relative group"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 inline-block relative group"
                >
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 inline-block relative group"
                >
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 inline-block relative group"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919446690306"
                  className="hover:text-yellow-400 transition-all duration-300 flex items-center group"
                >
                  <span className="mr-2 group-hover:scale-110 transition-transform duration-300 inline-block">📞</span>
                  +91 9446690306
                </a>
              </li>
              <li>
                <a
                  href="mailto:smartwatersolutiontholanur@gmail.com"
                  className="hover:text-yellow-400 transition-all duration-300 flex items-center break-all group"
                >
                  <span className="mr-2 group-hover:scale-110 transition-transform duration-300 inline-block">✉️</span>
                  smartwatersolutiontholanur@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <a
                  href="https://maps.app.goo.gl/kRGZXkG3G7qWM5Qa8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-all duration-300 flex items-start group"
                >
                  <span className="mr-2 mt-1 group-hover:scale-110 transition-transform duration-300 inline-block">📍</span>
                  <div>
                    <div>Tholanur</div>
                    <div className="text-sm">Palakkad District, Kerala</div>
                  </div>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="hover:text-gray-300 transition-colors duration-300">© {currentYear} Smart Water Solution. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
