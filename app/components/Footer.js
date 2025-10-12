import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full h-auto overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('/bac1.jpg')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          
          {/* Left Section - Social Media */}
          <div className="flex flex-col items-start md:items-start">
            <h3 className="text-white text-sm font-medium tracking-wide mb-4 uppercase">
              Connect with us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition-colors duration-300">
                <MapPin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Center Section - Site Name / Branding */}
          <div className="text-center md:text-center">
            <p className="text-white text-xs font-light tracking-wide mb-2 uppercase">
              Welcome to
            </p>
            <div className="bg-white px-4 py-3 rounded-sm inline-block">
              <div className="text-gray-800 font-bold text-lg tracking-tight">
                DREAM TOUR
              </div>
              <div className="text-gray-600 text-sm font-medium tracking-wide">
                Explore Sri Lanka
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Credits */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 text-white text-xs">
          <div className="flex items-center space-x-2">
            <span className="font-light">POWERED BY</span>
            <span className="font-medium tracking-wide">Dream Tour</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-light">CONCEPT AND DESIGN BY</span>
            <span className="font-medium tracking-wide text-blue-400">Sahan Mewantha</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
