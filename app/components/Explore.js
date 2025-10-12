import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, Users, Star, ChevronRight } from 'lucide-react';
import CircularGallery from './CircularGallery';

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const galleryRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading and text
      gsap.fromTo([headingRef.current, textRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate gallery container
      gsap.fromTo(galleryRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate button
      gsap.fromTo(buttonRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="packages" 
      ref={sectionRef} 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/bac1.jpg')]"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 
            ref={headingRef} 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Explore Sri Lanka Like Never Before
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p 
            ref={textRef} 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Discover the perfect Sri Lankan adventure tailored just for you
          </p>
        </div>

        

        {/* Circular Gallery */}
        <div ref={galleryRef} className="relative flex justify-center items-center mb-12">
          <div className="w-full max-w-5xl mx-auto h-[500px]">
            <CircularGallery bend={0} textColor="#f59e0b" borderRadius={0.05} scrollEase={0.02} />
          </div>
        </div>

        {/* CTA Button */}
        <div ref={buttonRef} className="text-center">
          <button className="group bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium py-4 px-10 rounded-full transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center mx-auto shadow-lg hover:shadow-xl">
            <span>View All Packages</span>
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Explore;