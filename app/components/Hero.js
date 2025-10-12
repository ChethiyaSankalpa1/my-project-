import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users, Star } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef({});
  
  const setRef = (index, type, element) => {
    if (!slideRefs.current[index]) {
      slideRefs.current[index] = {};
    }
    slideRefs.current[index][type] = element;
  };

  // Animation function
  const animateSlide = (index) => {
    const elements = slideRefs.current[index];
    if (!elements) return;

    const timeline = gsap.timeline();

    if (elements.subtitle) {
      timeline.fromTo(elements.subtitle,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }

    if (elements.title) {
      timeline.fromTo(elements.title,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
    }

    if (elements.description) {
      timeline.fromTo(elements.description,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
    }

    if (elements.buttons) {
      timeline.fromTo(elements.buttons,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
    }
  };

  // Trigger animation when slide changes
  useEffect(() => {
    animateSlide(currentSlide);
  }, [currentSlide]);
  
  // Sample background images - replace with your actual Sri Lankan destination images
  const slides = [
    {
      image: '/bac1.jpg',
      title: 'Discover Paradise',
      subtitle: 'Sri Lanka Awaits',
      description: 'Ancient temples, golden beaches, and emerald tea plantations'
    },
    {
      image: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=2940',
      title: 'Heritage & Culture',
      subtitle: 'Timeless Wonders',
      description: 'UNESCO World Heritage sites and 2,500 years of history'
    },
    {
      image: '/bac2.jpg',
      title: 'Wildlife Adventures',
      subtitle: 'Nature\'s Sanctuary',
      description: 'Elephants, leopards, and pristine national parks'
    },
    {
      image: '/bac3.jpg',
      title: 'Tropical Beaches',
      subtitle: 'Coastal Bliss',
      description: 'Crystal waters and palm-fringed shores'
    }
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        {/* Navigation Header */}
        {/* Main Content */}
        <div className="flex-1 flex items-center px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 absolute'
                }`}
              >
                {index === currentSlide && (
                  <>
                    <h3 className="text-amber-400 font-medium tracking-[0.3em] text-xs md:text-sm mb-4 opacity-0" ref={el => setRef(index, 'subtitle', el)}>
                      {slide.subtitle.toUpperCase()}
                    </h3>
                    <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight opacity-0" ref={el => setRef(index, 'title', el)}>
                      {slide.title}
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed opacity-0" ref={el => setRef(index, 'description', el)}>
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4 opacity-0" ref={el => setRef(index, 'buttons', el)}>
                      <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Explore Tours
                      </button>
                      <button className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-medium transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="px-6 md:px-12 lg:px-20 pb-8">
          {/* Quick Stats */}
          <div className="hidden md:flex gap-8 mb-8 text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">25+ Destinations</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">365 Days Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="text-sm">10k+ Happy Travelers</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span className="text-sm">4.9 Rating</span>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-12 h-1 bg-amber-400'
                      : 'w-6 h-1 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;