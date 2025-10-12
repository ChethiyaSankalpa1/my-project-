import React, { useEffect, useRef } from 'react';
import { Camera, Mountain, Waves } from 'lucide-react';

const About = () => {
  const counterRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.counter');
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
              if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = target;
              }
            };
            updateCounter();
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });
    if (counterRef.current) observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, []);

  const tourHighlights = [
    {
      icon: Mountain,
      title: "Ancient Wonders",
      description: "Explore historic temples, ancient cities, and UNESCO World Heritage sites",
      image: "/anciant.jpeg"
    },
    {
      icon: Waves,
      title: "Pristine Beaches",
      description: "Relax on golden sandy beaches and enjoy crystal clear waters",
      image: "/beach1.jpeg"
    },
    {
      icon: Camera,
      title: "Wildlife Safari",
      description: "Witness elephants, leopards, and exotic birds in their natural habitat",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Dream Tour</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for unforgettable Sri Lankan adventures since 2013
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/temple.jpg"
                alt="Sri Lanka Temple"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                <p className="text-sm font-semibold text-blue-600">Est. 2013</p>
              </div>
            </div>
            
            {/* Small gallery images */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="h-20 md:h-24 rounded-lg overflow-hidden">
                <img 
                  src="/tea.jpg"
                  alt="Tea Plantation"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="h-20 md:h-24 rounded-lg overflow-hidden">
                <img 
                  src="/pasikuda.jpg"
                  alt="Sri Lankan Beach"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Discover the Pearl of Indian Ocean
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dream Tour is your gateway to experiencing the authentic beauty of Sri Lanka. 
                We create personalized journeys that showcase stunning landscapes, rich culture, 
                and warm hospitality that make Sri Lanka truly special.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From ancient temples to pristine beaches, misty mountains to wildlife sanctuaries, 
                we&apos;ll help you discover the magic of this incredible island nation.
              </p>
            </div>

            {/* Stats */}
            <div ref={counterRef} className="grid grid-cols-3 gap-4 md:gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="counter text-2xl md:text-3xl font-bold text-blue-600 mb-1" data-target="11">0</div>
                <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="counter text-2xl md:text-3xl font-bold text-green-600 mb-1" data-target="3000">0</div>
                <div className="text-xs md:text-sm text-gray-600">Happy Travelers</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="counter text-2xl md:text-3xl font-bold text-purple-600 mb-1" data-target="150">0</div>
                <div className="text-xs md:text-sm text-gray-600">Destinations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tour Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            What Makes Sri Lanka Special
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {tourHighlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 md:h-52 overflow-hidden">
                  <img 
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <highlight.icon className="text-blue-600 mr-3" size={24} />
                    <h4 className="text-lg md:text-xl font-bold text-gray-900">{highlight.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;