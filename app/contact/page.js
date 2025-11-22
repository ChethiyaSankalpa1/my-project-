"use client";
import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import TourBookingForm from "../components/TourBookingForm";

const ContactPage = () => {
  return (
    <main className="scroll-smooth pt-20">
      {/* Page Header with Background */}
      <section className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bac1.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 drop-shadow-2xl">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-3xl mx-auto drop-shadow-lg">
              Get in touch with J Tours - Your Sri Lanka travel experts
            </p>
          </div>
        </div>
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* WhatsApp */}
            <a href="https://wa.me/94703206081" target="_blank" rel="noopener noreferrer" className="group text-center p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-500">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-green-500 transition-colors">
                <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">WhatsApp</h3>
              <p className="text-sm sm:text-base text-gray-600 hover:text-green-500 transition-colors">+94 70 320 6081</p>
            </a>
            
            {/* Phone */}
            <a href="tel:0703206081" className="group text-center p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-500">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-orange-500 transition-colors">
                <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Call Us</h3>
              <p className="text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors">0703206081</p>
            </a>
            {/* Email */}
            <a href="mailto:j.tours.rent@gmail.com" className="group text-center p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-500 transition-colors">
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Email</h3>
              <p className="text-xs sm:text-sm text-gray-600 hover:text-blue-500 transition-colors break-all px-2">j.tours.rent@gmail.com</p>
            </a>
            {/* Location - spans 2 columns on mobile grid */}
            <div className="group text-center p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-500 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-purple-500 transition-colors">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Available</h3>
              <p className="text-sm sm:text-base text-gray-600">24/7 Support</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Send Us a Message
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>
          <TourBookingForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
