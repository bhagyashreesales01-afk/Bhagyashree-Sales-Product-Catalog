import { MapPin, Phone, Mail, Clock, Award, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f1c2e] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/* Inline SVG Logo */}
<img
  src="/assets/company/logo.svg"
  alt="Bhagyashree Sales Logo"
                  className="w-8 h-8 lg:w-10 lg:h-10 object-contain rounded-lg"
/>


              <div>
                <h3 
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Bhagyashree Sales
                </h3>
                <p className="text-xs text-gray-300">Since 2011</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Your trusted partner for premium cleaning and household products. 
              Delivering quality solutions for homes and businesses across Maharashtra.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-1 bg-blue-900/30 px-2 py-1 rounded-full">
                <Award className="w-3 h-3 text-white" />
                <span className="text-xs text-white">ISO Certified</span>
              </div>
              <div className="flex items-center gap-1 bg-green-900/30 px-2 py-1 rounded-full">
                <Shield className="w-3 h-3 text-white" />
                <span className="text-xs text-white">Quality Assured</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h4 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <a 
                    href="tel:+919850293070" 
                    className="text-sm text-white hover:text-blue-400 transition-colors"
                  >
                    +91 9850293070 / +91 9359102181
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <div className="space-y-1">
                    <a 
                      href="mailto:bhagyashreesales19@gmail.com" 
                      className="block text-sm text-white hover:text-blue-400 transition-colors"
                    >
                       bhagyashreesales19@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="lg:col-span-1">
            <h4 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-white" />
              Our Location
            </h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-white leading-relaxed">
                  Flat No 305, Sr No 36/1/A,<br />
                  Good Earth Apartment, Akurdi,<br />
                  Pune-411035, Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          {/* Business Hours & Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-white" />
              Business Hours
            </h4>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Mon - Sat:</span>
                <span className="text-white">10:00 AM - 7:00 PM</span>
              </div>
              {/* <div className="flex justify-between text-sm">
                <span className="text-gray-300">Sunday:</span>
                <span className="text-white">Closed</span>
              </div> */}
            </div>

            {/* Quick Links */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-400">
                © 2011 - 2025 Bhagyashree Sales. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-right">
              <p className="text-xs text-gray-500">
                Established 2011 • Maharashtra, India
              </p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400">Available for Orders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
