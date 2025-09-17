import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Award, Users, Target } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#E8F9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        {/* Back Button */}
        <div className="mb-4 lg:mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium text-sm lg:text-base"
          >
            <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 lg:px-8 py-6 lg:py-8">
            <h1 
              className="text-2xl lg:text-4xl font-bold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About Bhagyashree Sales
            </h1>
            <p className="text-blue-100 text-sm lg:text-lg">Delivering trusted cleaning and household essentials since 2011</p>
          </div>

          {/* Content */}
          <div className="px-4 lg:px-8 py-6 lg:py-8">
            {/* Company Overview */}
            <div className="mb-6 lg:mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                </div>
                <h2 className="text-lg lg:text-xl font-semibold text-gray-900">Our Story</h2>
              </div>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4">
                Established in 2011, Bhagyashree Sales has steadily built a well-recognized name as a trusted 
                Trader, Wholesaler, and Distributor of premium cleaning and household products. Over the years, 
                we have developed strong relationships with both our suppliers and customers, ensuring that every 
                product we deliver reflects our commitment to quality and reliability.
              </p>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                From floor cleaners and boric acid powder to floor wipers, naphthalene balls, decorative candles, 
                and dish wash cleaners, we provide a diverse range of products to meet the everyday needs of homes 
                and businesses alike. Our dedication to excellence has helped us earn the trust of our clients across 
                Maharashtra and beyond.
              </p>
            </div>

            {/* Mission & Values */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  Our mission is to deliver high-quality and affordable cleaning solutions that not only keep homes 
                  and workplaces spotless but also create a healthier and more hygienic environment for everyone. 
                  We aim to be the go-to supplier for customers who value reliability, quality, and long-term trust.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Our Values</h3>
                </div>
                <ul className="text-sm lg:text-base text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    Commitment to quality products and reliable service
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    Building long-term trust with customers and partners
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    Offering fair pricing without compromising on standards
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    Responsibility towards community and environment
                  </li>
                </ul>
              </div>
            </div>

            {/* Product Categories */}
            <div className="mb-6 lg:mb-8">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">Our Product Range</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                <div className="bg-blue-50 p-3 lg:p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2 text-sm lg:text-base">Floor Cleaners</h4>
                  <p className="text-xs lg:text-sm text-blue-700">Effective and concentrated formulas for sparkling floors</p>
                </div>
                <div className="bg-green-50 p-3 lg:p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2 text-sm lg:text-base">Boric Acid Powder</h4>
                  <p className="text-xs lg:text-sm text-green-700">Versatile solution for household cleaning and pest control</p>
                </div>
                <div className="bg-purple-50 p-3 lg:p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2 text-sm lg:text-base">Naphthalene Balls</h4>
                  <p className="text-xs lg:text-sm text-purple-700">Long-lasting protection against insects and moths</p>
                </div>
                <div className="bg-orange-50 p-3 lg:p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2 text-sm lg:text-base">Floor Wipers</h4>
                  <p className="text-xs lg:text-sm text-orange-700">Durable and efficient cleaning tools for everyday use</p>
                </div>
                <div className="bg-teal-50 p-3 lg:p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-900 mb-2 text-sm lg:text-base">Dish Wash Cleaners</h4>
                  <p className="text-xs lg:text-sm text-teal-700">Powerful cleaners for spotless and grease-free utensils</p>
                </div>
                <div className="bg-red-50 p-3 lg:p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2 text-sm lg:text-base">Decorative Candles</h4>
                  <p className="text-xs lg:text-sm text-red-700">Elegant candles to brighten and beautify your spaces</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-4 lg:p-6">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">Get In Touch</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-xs lg:text-sm">Address</h4>
                    <p className="text-xs lg:text-sm text-gray-600">Akurdi, Pune, Maharashtra</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-xs lg:text-sm">Phone</h4>
                    <p className="text-xs lg:text-sm text-gray-600">+91 9359102181</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-xs lg:text-sm">Email</h4>
                    <p className="text-xs lg:text-sm text-gray-600">info@bhagyashreesales.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Commitment Statement */}
            <div className="mt-6 lg:mt-8 text-center">
              <p className="text-sm lg:text-lg text-gray-700 font-medium italic">
                "At Bhagyashree Sales, we believe in delivering products that bring together quality, affordability, 
                and trust. Since 2011, our focus has remained the same: to serve our customers with integrity, 
                consistency, and care."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
