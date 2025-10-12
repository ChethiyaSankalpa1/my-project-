import { useRef, useEffect, useState } from 'react';

const SriLankaTourismExperience = () => {
  const testimonialsRef = useRef(null);
  const travelStoriesRef = useRef([]);
  const storiesHeaderRef = useRef(null);
  
  const [testimonials] = useState([
    {
      id: 1,
      name: "Emma Watson",
      role: "Solo Traveler",
      content: "Sri Lanka exceeded all my expectations! The ancient temples of Kandy and the stunning tea plantations in Nuwara Eliya were breathtaking. Every moment was perfectly curated.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "James Rodriguez",
      role: "Wildlife Photographer",
      content: "Yala National Park was incredible! Spotted leopards, elephants, and countless bird species. The guides were knowledgeable and passionate about conservation. Truly unforgettable!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Family Vacationer",
      content: "Our family trip to Sri Lanka was magical! The kids loved the elephant orphanage in Pinnawala and the beaches in Unawatuna. Perfect blend of culture and relaxation!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Adventure Enthusiast",
      content: "From hiking Adam's Peak to surfing in Arugam Bay, Sri Lanka offers incredible adventures! The hospitality of locals made every experience even more special.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Culture Explorer",
      content: "The cultural triangle was absolutely stunning! Sigiriya Rock Fortress and Dambulla Cave Temples left me speechless. Rich history everywhere you look.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ]);

  const [travelStories] = useState([
    {
      id: 1,
      title: "BEACH HOLIDAYS",
      subtitle: "DISCOVER SRI LANKA'S GOLDEN COAST",
      description: "Go beyond sun, sand and surf! Dive, snorkel, paddle and explore the golden beaches and enticing waters around the island...",
      image: "/beach2.jpg",
      size: "large"
    },
    {
      id: 2,
      title: "BACK PACKING",
      subtitle: "ROUGH IT OUT IN CEYLON",
      image: "/bagpac.jpeg",
      size: "small"
    },
    {
      id: 3,
      title: "HISTORY AND CULTURE",
      subtitle: "RICH HISTORY AND RICHER CULTURE",
      image: "/perahara.jpeg",
      size: "small"
    },
    {
      id: 4,
      title: "MISTY MOUNTAINS",
      subtitle: "ROLLING HILLS OF TEA AND JUNGLE",
      image: "/mountain.jpg",
      size: "medium"
    },
    {
      id: 5,
      title: "SAFARIS",
      subtitle: "THE WILD SIDE OF SRI LANKA",
      image: "/tiger.webp",
      size: "medium"
    }
  ]);

  // GSAP-style animations
  useEffect(() => {
    // Animate header
    const header = storiesHeaderRef.current;
    if (header) {
      header.style.opacity = '0';
      header.style.transform = 'translateY(40px)';
      
      setTimeout(() => {
        header.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
      }, 200);
    }

    // Animate story cards with stagger
    travelStoriesRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(60px) scale(0.8)';
        
        setTimeout(() => {
          card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';
        }, 400 + index * 200);
      }
    });

    // Auto-scroll testimonials
    const container = testimonialsRef.current;
    if (!container) return;

    let animationId;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      
      if (Math.abs(position) >= container.scrollWidth / 2) {
        position = 0;
      }
      
      container.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    const container = testimonialsRef.current;
    if (container) {
      container.style.animationPlayState = 'paused';
      container.style.filter = 'brightness(0.9)';
    }
  };

  const handleMouseLeave = () => {
    const container = testimonialsRef.current;
    if (container) {
      container.style.animationPlayState = 'running';
      container.style.filter = 'brightness(1)';
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Travel Stories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 md:mb-20" ref={storiesHeaderRef}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight">
              TRAVEL STORIES
            </h1>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 h-auto">
            {/* Beach Holidays - Large Card */}
            <div 
              ref={el => travelStoriesRef.current[0] = el}
              className="md:col-span-2 md:row-span-2 group cursor-pointer overflow-hidden rounded-3xl relative bg-cover bg-center min-h-[400px] md:min-h-[600px] transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${travelStories[0].image})` 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-black/90 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white w-full">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                  {travelStories[0].title}
                </h2>
                <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 font-medium tracking-wide">
                  {travelStories[0].subtitle}
                </p>
                <p className="text-sm md:text-base text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-lg">
                  {travelStories[0].description}
                </p>
                <button className="inline-flex items-center text-sm md:text-base font-bold text-white hover:text-emerald-400 transition-all duration-300 group/btn">
                  FIND OUT MORE
                  <div className="ml-3 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center group-hover/btn:border-emerald-400 group-hover/btn:bg-emerald-400 transition-all duration-300">
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Back Packing - Small Card */}
            <div 
              ref={el => travelStoriesRef.current[1] = el}
              className="group cursor-pointer overflow-hidden rounded-3xl relative bg-cover bg-center min-h-[250px] md:min-h-[290px] transform transition-all duration-700 hover:scale-[1.02] hover:shadow-xl"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${travelStories[1].image})` 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                  {travelStories[1].title}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4 font-medium tracking-wide">
                  {travelStories[1].subtitle}
                </p>
                <button className="inline-flex items-center text-xs md:text-sm font-bold text-white hover:text-emerald-400 transition-all duration-300 group/btn">
                  FIND OUT MORE
                  <div className="ml-2 w-6 h-6 rounded-full border border-white flex items-center justify-center group-hover/btn:border-emerald-400 transition-all duration-300">
                    <svg className="w-3 h-3 transform group-hover/btn:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* History and Culture - Small Card */}
            <div 
              ref={el => travelStoriesRef.current[2] = el}
              className="group cursor-pointer overflow-hidden rounded-3xl relative bg-cover bg-center min-h-[250px] md:min-h-[290px] transform transition-all duration-700 hover:scale-[1.02] hover:shadow-xl"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${travelStories[2].image})` 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                  HISTORY AND CULT...
                </h3>
                <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4 font-medium tracking-wide">
                  {travelStories[2].subtitle}
                </p>
                <button className="inline-flex items-center text-xs md:text-sm font-bold text-white hover:text-emerald-400 transition-all duration-300 group/btn">
                  FIND OUT MORE
                  <div className="ml-2 w-6 h-6 rounded-full border border-white flex items-center justify-center group-hover/btn:border-emerald-400 transition-all duration-300">
                    <svg className="w-3 h-3 transform group-hover/btn:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Misty Mountains - Medium Card */}
            <div 
              ref={el => travelStoriesRef.current[3] = el}
              className="group cursor-pointer overflow-hidden rounded-3xl relative bg-cover bg-center min-h-[300px] md:min-h-[350px] transform transition-all duration-700 hover:scale-[1.02] hover:shadow-xl"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${travelStories[3].image})` 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 p-5 md:p-7 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 leading-tight">
                  {travelStories[3].title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-5 font-medium tracking-wide">
                  {travelStories[3].subtitle}
                </p>
                <button className="inline-flex items-center text-sm md:text-base font-bold text-white hover:text-emerald-400 transition-all duration-300 group/btn">
                  FIND OUT MORE
                  <div className="ml-3 w-7 h-7 rounded-full border border-white flex items-center justify-center group-hover/btn:border-emerald-400 transition-all duration-300">
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Safaris - Medium Card */}
            <div 
              ref={el => travelStoriesRef.current[4] = el}
              className="group cursor-pointer overflow-hidden rounded-3xl relative bg-cover bg-center min-h-[300px] md:min-h-[350px] transform transition-all duration-700 hover:scale-[1.02] hover:shadow-xl"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${travelStories[4].image})` 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 p-5 md:p-7 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 leading-tight">
                  {travelStories[4].title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-5 font-medium tracking-wide">
                  {travelStories[4].subtitle}
                </p>
                <button className="inline-flex items-center text-sm md:text-base font-bold text-white hover:text-emerald-400 transition-all duration-300 group/btn">
                  FIND OUT MORE
                  <div className="ml-3 w-7 h-7 rounded-full border border-white flex items-center justify-center group-hover/btn:border-emerald-400 transition-all duration-300">
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-100">
  <div className="text-center mb-12 px-4">
    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
      Stories from Our Travelers
    </h3>
    <p className="text-slate-600 text-base max-w-md mx-auto">
      Real experiences from visitors who discovered the magic of Sri Lanka
    </p>
  </div>

  {/* Testimonials Grid */}
  <div className="px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((t) => (
        <div
          key={t.id}
          className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-slate-200 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col"
        >
          <div className="flex items-center mb-6">
            <img
              src={t.image}
              alt={`${t.name}'s profile`}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mr-4 ring-4 ring-emerald-100"
            />
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-slate-900">{t.name}</h4>
              <p className="text-sm text-emerald-600 font-medium">{t.role}</p>
            </div>
          </div>

          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < t.rating ? 'text-yellow-400' : 'text-slate-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
            "{t.content}"
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default SriLankaTourismExperience;