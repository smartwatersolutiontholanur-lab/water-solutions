const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span style={{ fontFamily: "'Great Vibes', cursive" }} className="text-4xl text-white">S</span>
              <span className="text-white ml-1">mart Water Solution</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Advanced water treatment solutions for a cleaner, healthier future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+919446690306" 
                  className="hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">📞</span>
                  +91 9446690306
                </a>
              </li>
              <li>
                <a 
                  href="mailto:smartwatersolutiontholanur@gmail.com" 
                  className="hover:text-white transition-colors flex items-center break-all"
                >
                  <span className="mr-2">✉️</span>
                  smartwatersolutiontholanur@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <div>
                  <div>Tholanur</div>
                  <div className="text-sm">Palakkad District, Kerala</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© {currentYear} Smart Water Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
