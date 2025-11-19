"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users, Star } from 'lucide-react';

const TourHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/bac3.jpg',
      category: 'SRI LANKA AWAITS',
      title: 'Discover Paradise',
      description: 'Ancient temples, golden beaches, and emerald tea plantations',
      stats: { destinations: '25+', days: '365', travelers: '10k+', rating: '4.9' }
    },
    {
      image: '/bac2.jpg',
      category: 'EXPLORE SRI LANKA',
      title: 'Unforgettable Journeys',
      description: 'Experience the beauty and culture of the pearl of the Indian Ocean',
      stats: { destinations: '25+', days: '365', travelers: '10k+', rating: '4.9' }
    },
    {
      image: '/beach.jpg',
      category: 'COASTAL PARADISE',
      title: 'Tropical Beaches',
      description: 'Relax on pristine beaches and enjoy the Indian Ocean breeze',
      stats: { destinations: '25+', days: '365', travelers: '10k+', rating: '4.9' }
    },
    {
      image: '/beach2.jpg',
      category: 'SEASIDE ESCAPES',
      title: 'Beach Getaways',
      description: 'Sun, sand, and unforgettable coastal experiences',
      stats: { destinations: '25+', days: '365', travelers: '10k+', rating: '4.9' }
    },
    {
      image: '/elephants.webp',
      category: 'NATURE\'S SANCTUARY',
      title: 'Wildlife Adventures',
      description: 'Elephants, leopards, and pristine national parks',
      stats: { destinations: '25+', days: '365', travelers: '10k+', rating: '4.9' }
    }
  ];

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-12 lg:px-20">
        <div className="max-w-3xl">
          {/* Logo and Brand Name */}
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="J Toors" className="h-12 sm:h-16 w-auto" />
            <div>
              <h2 className="text-white text-2xl sm:text-3xl font-bold">J Toors</h2>
              <p className="text-white/80 text-xs sm:text-sm">Explore Sri Lanka</p>
            </div>
          </div>
          
          <p className="text-yellow-400 text-xs sm:text-sm font-semibold mb-4 tracking-widest">
            {slides[currentSlide].category}
          </p>
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-2xl">
            {slides[currentSlide].description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={scrollToBooking}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </button>
            <button 
              onClick={scrollToBooking}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Explore Tours
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 sm:gap-6 md:gap-8">
            <div className="flex items-center gap-2 text-white">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold text-xs sm:text-sm md:text-base">{slides[currentSlide].stats.destinations} Destinations</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold text-xs sm:text-sm md:text-base">{slides[currentSlide].stats.days} Days Service</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold text-xs sm:text-sm md:text-base">{slides[currentSlide].stats.travelers} Happy Travelers</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-xs sm:text-sm md:text-base">{slides[currentSlide].stats.rating} Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-orange-500' : 'w-6 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TourHero;
