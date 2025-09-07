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
            <p className="text-blue-100 text-sm lg:text-lg">Your trusted partner for quality cleaning solutions</p>
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
                Welcome to Bhagyashree Sales, your trusted partner for high-quality cleaning and household products. 
                Located in Akurdi, Pune, Maharashtra, we have been serving customers with premium cleaning solutions 
                that make your home and workplace spotless and hygienic.
              </p>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Our extensive product range includes floor cleaners, dish cleaners, naphthalene balls, floor wipers, 
                and cotton mops from renowned brands like Tiger. We are committed to providing products that deliver 
                exceptional cleaning performance while being safe for your family and environment.
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
                  To provide high-quality, affordable cleaning solutions that help maintain hygiene and cleanliness 
                  in homes and workplaces across Maharashtra and beyond.
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
                    Quality products from trusted brands
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    Competitive and fair pricing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    Exceptional customer service
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    Environmental responsibility
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
                  <p className="text-xs lg:text-sm text-blue-700">Premium concentrated cleaners for all floor types</p>
                </div>
                <div className="bg-green-50 p-3 lg:p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2 text-sm lg:text-base">Dish Cleaners</h4>
                  <p className="text-xs lg:text-sm text-green-700">Effective dishwashing solutions for spotless utensils</p>
                </div>
                <div className="bg-purple-50 p-3 lg:p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2 text-sm lg:text-base">Naphthalene Balls</h4>
                  <p className="text-xs lg:text-sm text-purple-700">Protection against insects and moths</p>
                </div>
                <div className="bg-orange-50 p-3 lg:p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2 text-sm lg:text-base">Floor Wipers</h4>
                  <p className="text-xs lg:text-sm text-orange-700">Durable cleaning tools for efficient floor maintenance</p>
                </div>
                <div className="bg-teal-50 p-3 lg:p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-900 mb-2 text-sm lg:text-base">Cotton Mops</h4>
                  <p className="text-xs lg:text-sm text-teal-700">High-quality mops for thorough cleaning</p>
                </div>
                <div className="bg-red-50 p-3 lg:p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2 text-sm lg:text-base">Branded Products</h4>
                  <p className="text-xs lg:text-sm text-red-700">Trusted brands like Tiger for reliable quality</p>
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
                    <p className="text-xs lg:text-sm text-gray-600">+91 98765 43210</p>
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
                "At Bhagyashree Sales, customer satisfaction is our top priority. We ensure competitive pricing, 
                reliable quality, and prompt service to meet all your cleaning needs."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;