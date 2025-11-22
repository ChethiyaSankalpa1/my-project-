"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Youtube, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    // Get user's current location ONCE (not continuously)
    if (navigator.geolocation) {
      // Get position only once on component mount
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(newLocation);
          setLocationError(null);
          
          // Store in localStorage so booking form can access it
          localStorage.setItem('userLocation', JSON.stringify(newLocation));
        },
        (error) => {
          // Silently handle location permission denial
          setLocationError('Location access denied');
          // Default to Colombo, Sri Lanka if location denied
          const defaultLocation = { lat: 6.9271, lng: 79.8612 };
          setUserLocation(defaultLocation);
          localStorage.setItem('userLocation', JSON.stringify(defaultLocation));
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // Cache for 5 minutes
        }
      );
    } else {
      setLocationError('Geolocation not supported');
      const defaultLocation = { lat: 6.9271, lng: 79.8612 };
      setUserLocation(defaultLocation);
      localStorage.setItem('userLocation', JSON.stringify(defaultLocation));
    }
  }, []);

  return (
    <footer className="relative w-full h-auto overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bac1.jpg')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* Logo Section */}
            <div className="flex flex-col items-center md:items-start">
              <img src="/logo.png" alt="J Tours Logo" className="h-24 w-auto object-contain mb-6 drop-shadow-2xl brightness-0 invert" />
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-orange-500 flex items-center justify-center text-white transition-all duration-300">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-orange-500 flex items-center justify-center text-white transition-all duration-300">
                  <Instagram size={18} />
                </a>
                <a href="https://wa.me/94703206081" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-green-500 flex items-center justify-center text-white transition-all duration-300">
                  <MessageCircle size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-orange-500 flex items-center justify-center text-white transition-all duration-300">
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Pages Column */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Pages</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-white/80 hover:text-orange-400 transition-colors inline-block">Home</Link></li>
                <li><Link href="/about" className="text-white/80 hover:text-orange-400 transition-colors inline-block">About Us</Link></li>
                <li><Link href="/packages" className="text-white/80 hover:text-orange-400 transition-colors inline-block">Tour Packages</Link></li>
                <li><Link href="/contact" className="text-white/80 hover:text-orange-400 transition-colors inline-block">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/80">
                  <Mail className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <a href="mailto:j.tours.rent@gmail.com" className="hover:text-orange-400 transition-colors break-all">j.tours.rent@gmail.com</a>
                </li>
                <li className="flex items-start gap-2 text-white/80">
                  <MessageCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <a href="https://wa.me/94703206081" className="hover:text-orange-400 transition-colors">+94 70 320 6081</a>
                </li>
                <li className="flex items-start gap-2 text-white/80">
                  <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>Colombo, Sri Lanka</span>
                </li>
              </ul>
            </div>

            {/* Map Column */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Your Location</h3>
              {userLocation ? (
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-xl border-2 border-white/20">
                    <iframe
                      width="100%"
                      height="180"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://maps.google.com/maps?q=${userLocation.lat},${userLocation.lng}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
                      title="Your Location Map"
                    />
                  </div>
                  {locationError && (
                    <p className="text-xs text-orange-400 mt-2">Using default location</p>
                  )}
                </div>
              ) : (
                <div className="bg-white/10 rounded-lg h-[180px] flex items-center justify-center">
                  <div className="animate-pulse text-center">
                    <MapPin className="w-6 h-6 text-orange-400 mx-auto mb-1" />
                    <p className="text-white text-xs">Loading...</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-white/20 pt-6 text-center">
            <p className="text-white/60 text-sm">
              © 2024 J Tours - All Rights Reserved | Powered by <span className="text-orange-400">J Tours</span> | Design by <span className="text-blue-400">Sahan Mewantha</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
