"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { MapPin, Shield, Users, DollarSign, Award, Heart, Compass, Star } from 'lucide-react'

const About = () => {
  return (
    <main className="pt-20">
      <AboutContent />
    </main>
  );
};

const AboutContent = () => {
  const scrollIconRef = useRef(null)
  const discoverSectionRef = useRef(null)
  const imageGridRef = useRef(null)
  const promisesSectionRef = useRef(null)
  const opportunitiesSectionRef = useRef(null)
  const ctaSectionRef = useRef(null)

  useEffect(() => {
    let script = null;
    let scrollTriggerScript = null;

    // Load GSAP and ScrollTrigger from CDN
    script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
    script.async = true
    document.body.appendChild(script)

    scrollTriggerScript = document.createElement('script')
    scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'
    scrollTriggerScript.async = true
    document.body.appendChild(scrollTriggerScript)

    scrollTriggerScript.onload = () => {
      if (window.gsap && window.ScrollTrigger) {
        const gsap = window.gsap
        const ScrollTrigger = window.ScrollTrigger
        
        gsap.registerPlugin(ScrollTrigger)

        // Discover Section
        if (discoverSectionRef.current) {
          gsap.fromTo(
            discoverSectionRef.current,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: discoverSectionRef.current,
                start: 'top 80%',
                end: 'top 30%',
                toggleActions: 'play none none none',
                once: true
              }
            }
          )
        }

        // Image Grid
        if (imageGridRef.current) {
          const images = imageGridRef.current.querySelectorAll('.image-card')
          images.forEach((img, index) => {
            gsap.fromTo(
              img,
              { opacity: 0, y: 50, scale: 0.9 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: imageGridRef.current,
                  start: 'top 75%',
                  toggleActions: 'play none none none',
                  once: true
                }
              }
            )
          })
        }

        // Promises Section
        if (promisesSectionRef.current) {
          const cards = promisesSectionRef.current.querySelectorAll('.promise-card')
          gsap.fromTo(
            promisesSectionRef.current.querySelector('h3'),
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: promisesSectionRef.current,
                start: 'top 75%',
                once: true
              }
            }
          )
          
          cards.forEach((card, index) => {
            gsap.fromTo(
              card,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: promisesSectionRef.current,
                  start: 'top 70%',
                  once: true
                }
              }
            )
          })
        }

        // Opportunities Section
        if (opportunitiesSectionRef.current) {
          const oppCards = opportunitiesSectionRef.current.querySelectorAll('.opportunity-card')
          gsap.fromTo(
            opportunitiesSectionRef.current.querySelector('h3'),
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: opportunitiesSectionRef.current,
                start: 'top 75%',
                once: true
              }
            }
          )
          
          oppCards.forEach((card, index) => {
            gsap.fromTo(
              card,
              { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
              {
                opacity: 1,
                x: 0,
                duration: 0.7,
                delay: index * 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: opportunitiesSectionRef.current,
                  start: 'top 70%',
                  once: true
                }
              }
            )
          })
        }

        // CTA Section
        if (ctaSectionRef.current) {
          gsap.fromTo(
            ctaSectionRef.current,
            { opacity: 0, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ctaSectionRef.current,
                start: 'top 80%',
                once: true
              }
            }
          )
        }
      }
    }

    return () => {
      if (script && document.body.contains(script)) {
        document.body.removeChild(script)
      }
      if (scrollTriggerScript && document.body.contains(scrollTriggerScript)) {
        document.body.removeChild(scrollTriggerScript)
      }
    }
  }, [])

  const promises = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Low Price & Friendly",
      description: "Affordable packages without compromising quality. We believe everyone deserves to explore Sri Lanka's wonders."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trusted Guides",
      description: "Experienced local guides with deep knowledge of Sri Lankan culture, history, and hidden gems."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "Your safety is our priority. We follow strict safety protocols and provide 24/7 support during your journey."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Service",
      description: "Exceptional service standards ensuring memorable experiences from booking to your safe return home."
    }
  ]

  const opportunities = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Diverse Destinations",
      description: "From pristine beaches to misty mountains, ancient temples to wildlife safaris"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Cultural Immersion",
      description: "Experience authentic Sri Lankan traditions, festivals, and warm hospitality"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Customized Tours",
      description: "Tailored itineraries matching your preferences, budget, and travel style"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Hidden Treasures",
      description: "Discover secret spots and local favorites beyond typical tourist trails"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-x-hidden">
      {/* Hero Section with Image */}
      <div className="relative h-[70vh] sm:h-[80vh] md:h-screen md:max-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/templeofthetooth.jpg" 
            alt="Compass in hand" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 leading-tight"
            >
              ABOUT US
            </h1>
            <p 
              className="text-teal-300 text-base sm:text-lg md:text-xl font-light tracking-wide"
            >
              Your Ultimate Guide to Sri Lanka Tourism
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Discover Section */}
        <div ref={discoverSectionRef} className="py-12 sm:py-16 md:py-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-700 mb-6 sm:mb-8">
            Discover the Thrill of Adventure with J Toors
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-700">
                Welcome to J Toors, where your Sri Lankan adventure begins! We are passionate about showcasing the breathtaking beauty and rich cultural heritage of Sri Lanka, the Pearl of the Indian Ocean.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                From the ancient cities of Anuradhapura and Polonnaruwa to the stunning beaches of Mirissa and Unawatuna, from the misty tea plantations of Nuwara Eliya to the wildlife of Yala National Park, we bring you the best of Sri Lanka.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Our team of dedicated professionals ensures that every journey is crafted with care, attention to detail, and a deep respect for local communities and the environment.
              </p>
            </div>
            <div className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800" 
                alt="Sigiriya Rock Fortress" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white bg-opacity-90 px-3 sm:px-4 py-2 rounded">
                <p className="text-xs sm:text-sm font-semibold text-gray-800">Sigiriya Rock Fortress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sri Lanka Images Grid */}
        <div ref={imageGridRef} className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Experience Sri Lanka&apos;s Wonders</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="image-card relative h-56 sm:h-64 rounded-lg overflow-hidden shadow-lg group">
              <img 
                src="pasikuda.jpg" 
                alt="Sri Lankan Beach" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <h4 className="text-lg sm:text-xl font-bold">Golden Beaches</h4>
                <p className="text-xs sm:text-sm">Crystal clear waters</p>
              </div>
            </div>
            <div className="image-card relative h-56 sm:h-64 rounded-lg overflow-hidden shadow-lg group">
              <img 
                src="/tea.jpg" 
                alt="Tea Plantations" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <h4 className="text-lg sm:text-xl font-bold">Tea Country</h4>
                <p className="text-xs sm:text-sm">Lush green highlands</p>
              </div>
            </div>
            <div className="image-card relative h-56 sm:h-64 rounded-lg overflow-hidden shadow-lg group sm:col-span-2 md:col-span-1">
              <img 
                src="/elephants.webp" 
                alt="Wildlife" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <h4 className="text-lg sm:text-xl font-bold">Wild Safari</h4>
                <p className="text-xs sm:text-sm">Majestic elephants</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Promises Section */}
        <div ref={promisesSectionRef} className="mb-12 sm:mb-16 md:mb-20 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10 md:mb-12">Our Promises to You</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {promises.map((promise, index) => (
              <div key={index} className="promise-card bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-teal-600 mb-3 sm:mb-4">{promise.icon}</div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{promise.title}</h4>
                <p className="text-sm sm:text-base text-gray-600">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Great Opportunities Section */}
        <div ref={opportunitiesSectionRef} className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3 sm:mb-4">Great Opportunities for Travelers</h3>
          <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4">
            Every journey with J Toors opens doors to unforgettable experiences and creates memories that last a lifetime.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="opportunity-card flex items-start p-4 sm:p-5 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-teal-500">
                <div className="text-teal-600 mr-3 sm:mr-4 mt-1">{opportunity.icon}</div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">{opportunity.title}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{opportunity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        {/* CTA Section */}
            <div 
            ref={ctaSectionRef} 
            className="relative h-[28rem] sm:h-[32rem] md:h-96 flex items-center justify-center rounded-2xl overflow-hidden my-16 sm:my-20"
            >
            <img 
                src="/about.jpg"
                alt="Mountain landscape" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-center text-white">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                Ready to Start Your Next Adventure?
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl opacity-90">
                Join the Thrilliz community today and unlock the ultimate experiences!
                </p>
                <button className="bg-teal-500 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-teal-600 transition-colors duration-300 shadow-xl">
                Get Started Now
                </button>
            </div>
            </div>

      </div>
    </div>
  )
}

export default About