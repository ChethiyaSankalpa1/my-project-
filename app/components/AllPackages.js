"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, MapPin, Clock, Hotel, Car } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AllPackages = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Quick fade-in for section title
      gsap.fromTo(
        sectionRef.current?.querySelector('.section-title'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          }
        }
      );

      // Fast, simple card animations
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { 
              opacity: 0, 
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              delay: index * 0.05,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 92%',
                once: true,
              }
            }
          );
        }
      });
    }
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const packages = {
    dayTours: [
      {
        id: 'ella-day',
        title: 'Ella One Day Tour',
        duration: '1 Day',
        price: 'Contact for pricing',
        image: '/ninearch.jpg',
        summary: 'Experience the breathtaking beauty of Ella with iconic Nine Arch Bridge, stunning waterfalls, and panoramic mountain views.',
        highlights: [
          'Nine Arch Bridge photography',
          'Little Adam\'s Peak hike (45 min easy)',
          'Ravana Falls visit and swim',
          'Ella Rock viewpoint',
          'Ella Town exploration'
        ],
        itinerary: '07:00 AM - Hotel pickup | 08:00 AM - Nine Arch Bridge | 10:00 AM - Little Adam\'s Peak | 12:00 PM - Lunch | 01:30 PM - Ravana Falls | 03:00 PM - Ella Town | 04:30 PM - Return',
        includes: 'Private air-conditioned vehicle, English-speaking driver, parking fees',
        transport: 'Private vehicle (8-9 hours total)'
      },
      {
        id: 'haputale-day',
        title: 'Haputale One Day Tour',
        duration: '1 Day',
        price: 'Contact for pricing',
        image: '/tea.jpg',
        summary: 'Discover Haputale\'s colonial charm, world-famous Lipton\'s Seat, and breathtaking mountain vistas.',
        highlights: [
          'Lipton\'s Seat sunrise viewpoint',
          'Adisham Bungalow monastery',
          'Dambatenne Tea Factory tour',
          'Haputale Town walk',
          'Panoramic mountain views'
        ],
        itinerary: '05:30 AM - Early pickup for sunrise | 06:30 AM - Lipton\'s Seat | 08:00 AM - Breakfast | 09:30 AM - Adisham Bungalow | 11:00 AM - Tea Factory | 12:30 PM - Lunch | 02:00 PM - Town walk | 03:30 PM - Return',
        includes: 'Private vehicle, driver, entrance fees, sunrise viewpoint access',
        transport: 'Private vehicle (9-10 hours total)'
      }
    ],
    
    shortTours: [
      {
        id: '5d4n',
        title: '5 Days / 4 Nights Highlights Tour',
        duration: '5 Days / 4 Nights',
        price: 'Contact for pricing',
        image: '/sigiriya.jpeg',
        summary: 'Perfect introduction covering Sigiriya, Kandy Temple of the Tooth, tea plantations, and Yala Safari.',
        highlights: [
          'Sigiriya Rock Fortress climb',
          'Dambulla Cave Temple',
          'Temple of the Tooth - Kandy',
          'Kandy cultural dance show',
          'Royal Botanical Gardens',
          'Tea plantation & factory visit',
          'Scenic train ride Nuwara Eliya to Ella',
          'Nine Arch Bridge',
          'Yala National Park Safari'
        ],
        itinerary: 'Day 1: Airport → Sigiriya, village safari | Day 2: Sigiriya Rock, Dambulla Temple → Kandy, cultural show | Day 3: Temple of Tooth, Botanical Gardens → Nuwara Eliya, tea visit | Day 4: Train to Ella, Nine Arch Bridge → Yala | Day 5: Morning safari → Airport',
        includes: '4 nights accommodation (3-star hotels), daily breakfast, private transport, safari jeep, train tickets, entrance fees, English driver',
        transport: 'Private air-conditioned vehicle, scenic train, safari jeep'
      },
      {
        id: '7d6n',
        title: '7 Days / 6 Nights Complete Tour',
        duration: '7 Days / 6 Nights',
        price: 'Contact for pricing',
        image: '/templeofthetooth.jpg',
        summary: 'Comprehensive tour with cultural sites, hill country, wildlife safari, and beach relaxation.',
        highlights: [
          'Negombo Beach',
          'Sigiriya Rock & Dambulla',
          'Kandy Temple & Cultural Show',
          'Tea Country - Nuwara Eliya',
          'Gregory Lake & Ramboda Falls',
          'Scenic train to Ella',
          'Ravana Falls',
          'Yala Safari',
          'Mirissa Beach',
          'Galle Fort UNESCO site'
        ],
        itinerary: 'Day 1: Airport → Negombo beach | Day 2: → Sigiriya Rock, Dambulla, village tour | Day 3: → Kandy, Temple of Tooth, cultural show | Day 4: → Nuwara Eliya, tea plantation, Gregory Lake | Day 5: Train to Ella, Nine Arch Bridge → Yala | Day 6: Morning safari → Mirissa beach | Day 7: Galle Fort → Airport',
        includes: '6 nights accommodation, daily breakfast, all transport, safari, train tickets, entrance fees, cultural show',
        transport: 'Private vehicle, scenic train, safari jeep, total journey coverage'
      }
    ],
    
    mediumTours: [
      {
        id: '10d9n',
        title: '10 Days / 9 Nights Grand Tour',
        duration: '10 Days / 9 Nights',
        price: 'Contact for pricing',
        image: '/anuradhapura.jpg',
        summary: 'Extensive exploration including ancient cities Anuradhapura & Polonnaruwa, cultural triangle, hill country, wildlife, and beaches.',
        highlights: [
          'Negombo Beach',
          'Anuradhapura ancient city (UNESCO)',
          'Sri Maha Bodhi tree',
          'Polonnaruwa ruins cycling tour',
          'Sigiriya Rock Fortress',
          'Pidurangala Rock sunset',
          'Dambulla Cave Temple',
          'Kandy Temple of the Tooth',
          'Royal Botanical Gardens',
          'Nuwara Eliya tea country',
          'World\'s End - Horton Plains (optional)',
          'Scenic train journey',
          'Ella adventures',
          'Yala Safari',
          'Bentota Beach',
          'Galle Fort'
        ],
        itinerary: 'Day 1: Airport → Negombo | Day 2: → Anuradhapura ancient city tour | Day 3: → Sigiriya Rock climb | Day 4: Polonnaruwa cycling, Dambulla | Day 5: → Kandy Temple, cultural show | Day 6: → Nuwara Eliya tea plantation, Gregory Lake | Day 7: Train to Ella, Nine Arch, Little Adam\'s Peak | Day 8: → Yala, afternoon safari | Day 9: Morning safari → Bentota beach | Day 10: Galle Fort → Airport',
        includes: '9 nights accommodation (3/4-star), daily breakfast, all transport, 2 safaris, train tickets, cycling in Polonnaruwa, all entrance fees, cultural shows',
        transport: 'Private air-conditioned vehicle, scenic train, safari jeeps, bicycles'
      },
      {
        id: '14d13n',
        title: '14 Days / 13 Nights Complete Island Experience',
        duration: '14 Days / 13 Nights',
        price: 'Contact for pricing',
        image: '/portcity.jpg',
        summary: 'Ultimate Sri Lanka covering Cultural Triangle, Trincomalee east coast, Kandy, tea country, wildlife parks, and beaches.',
        highlights: [
          'Negombo fish market & Dutch Canal',
          'Wilpattu National Park',
          'Anuradhapura ancient city complete',
          'Trincomalee - Koneswaram Temple',
          'Fort Frederick',
          'Marble Beach & Nilaveli Beach',
          'Pigeon Island snorkeling (optional)',
          'Polonnaruwa UNESCO site',
          'Minneriya/Kaudulla elephant gathering',
          'Sigiriya & Dambulla',
          'Kandy cultural experience',
          'Ambuluwawa Tower (360° views)',
          'Gem Museum & Batik workshop',
          'Nuwara Eliya & tea estates',
          'Horton Plains - World\'s End',
          'Ella complete (Rock, Bridge, Falls)',
          'Yala Safari',
          'Udawalawe elephant park',
          'Mirissa whale watching',
          'Galle Fort, Turtle Hatchery',
          'Madu River boat safari',
          'Bentota beach',
          'Colombo city tour'
        ],
        itinerary: 'Day 1-2: Negombo, Wilpattu | Day 3-4: Anuradhapura, Trincomalee (Beaches, Temple) | Day 5-6: Polonnaruwa, Minneriya safari, Sigiriya | Day 7-8: Dambulla → Kandy (Temple, Botanical Gardens, Ambuluwawa, cultural shows) | Day 9-10: Tea country, Nuwara Eliya, Horton Plains, train to Ella | Day 11-12: Ella adventures → Yala & Udawalawe safaris | Day 13: Mirissa whale watching, Galle Fort, Turtle Hatchery, Madu River | Day 14: Bentota beach, Colombo city tour → Airport',
        includes: '13 nights accommodation (mix of 3-4 star), daily breakfast, all private transport, multiple safaris (Wilpattu, Minneriya/Kaudulla, Yala, Udawalawe), train tickets, boat safaris, whale watching, all entrance fees, cultural shows, snorkeling equipment',
        transport: 'Private air-conditioned vehicle, scenic trains, multiple safari jeeps, boats'
      }
    ],
    
    longTours: [
      {
        id: '17d16n',
        title: '17 Days / 16 Nights Premium Sri Lanka Journey',
        duration: '17 Days / 16 Nights',
        price: 'Contact for pricing',
        image: '/temple.jpg',
        summary: 'An exceptional extended journey combining cultural heritage, stunning landscapes, wildlife encounters, and coastal relaxation with carefully curated experiences.',
        highlights: [
          'Negombo coastal experience',
          'Ancient kingdoms - Anuradhapura & Polonnaruwa',
          'Sigiriya Rock Fortress & Pidurangala sunset',
          'Dambulla Golden Temple',
          'Minneriya elephant gathering safari',
          'Pinnawala Elephant Orphanage',
          'Sacred Temple of the Tooth - Kandy',
          'Cultural performances & traditional crafts',
          'Royal Botanical Gardens',
          'Scenic tea country - Nuwara Eliya',
          'Tea plantation & factory experience',
          'Horton Plains & World\'s End trek',
          'Picturesque train journey to Ella',
          'Nine Arch Bridge & Little Adam\'s Peak',
          'Ravana Falls & Ravana Cave',
          'Yala National Park safari experience',
          'Udawalawe National Park',
          'South coast beaches - Mirissa & Unawatuna',
          'Galle Fort UNESCO heritage',
          'Turtle conservation center',
          'Madu River boat safari',
          'Colombo city highlights tour'
        ],
        itinerary: 'Day 1-2: Airport → Negombo (beach relaxation, fish market, Dutch Canal) | Day 3-4: → Anuradhapura (ancient city exploration, sacred sites, Sri Maha Bodhi) → Polonnaruwa (cycling tour, Royal Palace ruins) | Day 5-6: Minneriya elephant safari → Sigiriya Rock climb → Pidurangala sunset → Dambulla Cave Temple | Day 7-8: → Pinnawala Elephants → Kandy (Temple of Tooth relic, cultural dance, Royal Botanical Gardens, Kandy Lake evening walk, gem & batik workshops) | Day 9-10: → Nuwara Eliya (tea plantations, Dambatenne Factory, Gregory Lake, Ramboda Falls) → Horton Plains World\'s End early morning trek | Day 11-12: Scenic train journey to Ella → Ella exploration (Nine Arch Bridge, Little Adam\'s Peak, Ravana Falls & Cave, Ella Rock viewpoint) | Day 13-14: → Yala National Park (full day safari experience) → Udawalawe (elephant transit home, safari) | Day 15: → Mirissa (beach time, optional whale watching season) → Unawatuna beach | Day 16: Galle Fort (lighthouse, ramparts, colonial architecture) → Kosgoda Turtle Hatchery → Madu River mangrove safari → beach relaxation | Day 17: → Colombo city tour (temples, colonial buildings, shopping districts, Galle Face Green) → Airport departure',
        includes: '16 nights accommodation (3-4 star hotels & beach resorts), daily breakfast & select meals, private air-conditioned vehicle throughout journey, professional English-speaking driver/guide, multiple wildlife safaris (Minneriya, Yala, Udawalawe) with experienced trackers, scenic train tickets, boat safaris (Madu River), all entrance fees to monuments & national parks, cultural shows, village experiences, cycling equipment, parking & highway tolls',
        transport: 'Private air-conditioned vehicle, scenic mountain train, safari jeeps, river boats, bicycles'
      },
      {
        id: '21d20n',
        title: '21 Days / 20 Nights Ultimate Sri Lanka',
        duration: '21 Days / 20 Nights',
        price: 'Contact for pricing',
        image: '/beach.jpg',
        summary: 'The most comprehensive tour covering every corner of Sri Lanka from ancient kingdoms and misty mountains to wildlife adventures and coastal serenity.',
        highlights: [
          'Complete Cultural Triangle (Anuradhapura, Polonnaruwa, Sigiriya, Dambulla)',
          'East Coast - Trincomalee beaches & temples',
          'Pinnawala Elephant Orphanage',
          'Kandy complete experience',
          'Ambuluwawa Tower',
          'Gem Museum & Batik workshops',
          'Tea country extensive (Nuwara Eliya, Haputale)',
          'Lipton\'s Seat & Dambatenne Tea Factory',
          'Adisham Bungalow',
          'Horton Plains - World\'s End',
          'Complete Ella (Rock, Bridge, Little Adam\'s Peak, Ravana Falls & Cave)',
          'Multiple wildlife safaris (Wilpattu, Minneriya, Yala, Udawalawe)',
          'Full south coast (Mirissa, Galle, Bentota)',
          'Whale watching expedition',
          'Turtle Hatchery',
          'Madu River safari',
          'Comprehensive Colombo city tour',
          'Multiple scenic train journeys',
          'Village experiences & canoe rides'
        ],
        itinerary: 'Day 1-3: Negombo (fish market, Dutch Canal, beach) → Wilpattu safari | Day 4-6: Anuradhapura (complete ancient city, Sri Maha Bodhi, stupas) → Trincomalee (Koneswaram Temple, Fort Frederick, Marble Beach, Nilaveli, Pigeon Island snorkeling) | Day 7-9: → Polonnaruwa (cycling tour) → Minneriya/Kaudulla safari → Sigiriya (Rock climb, Pidurangala, village tour) → Dambulla Cave Temple | Day 10-12: → Pinnawala Elephants → Kandy (Temple of Tooth, cultural shows, Botanical Gardens, Kandy Lake, Ambuluwawa Tower, Gem Museum, Batik workshop) | Day 13-15: → Nuwara Eliya (tea plantations, factory, Gregory Lake, Ramboda Falls, Horton Plains - World\'s End) → train to Nanu Oya → Haputale (Lipton\'s Seat, Dambatenne Tea Factory, Adisham Bungalow) → Ella | Day 16-17: Ella complete exploration (Nine Arch Bridge, Ella Rock hike, Little Adam\'s Peak, Ravana Falls & Cave, train experience) | Day 18-19: → Yala Safari → Udawalawe elephant park | Day 20: → Mirissa (whale watching) → Galle Fort (lighthouse, colonial streets) → Kosgoda (Turtle Hatchery) → Madu River boat safari → Bentota beach | Day 21: Bentota relaxation → Colombo city tour (Gangaramaya Temple, Independence Square, Galle Face Green, Pettah Market) → Airport drop-off',
        includes: '20 nights premium accommodation (mix of 3-4 star hotels & beach resorts), daily breakfast, all meals in remote areas, private air-conditioned vehicle throughout, English-speaking driver/guide, multiple wildlife safaris with experienced trackers, all scenic train tickets, boat safaris, whale watching boat, snorkeling equipment, all entrance fees to monuments & parks, cultural shows, village experiences with canoe & bullock cart, cycling equipment in Polonnaruwa, parking fees, highway tolls, government taxes',
        transport: 'Dedicated private air-conditioned vehicle, multiple scenic train journeys, safari jeeps for all parks, boats for river & whale watching, bicycles, traditional village transport (canoe, bullock cart)'
      }
    ]
  };

  const PackageCard = ({ pkg, category, index }) => {
    return (
      <div 
        ref={(el) => (cardsRef.current[index] = el)}
        className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-[1.03] transition-all duration-500 group border border-gray-100 hover:border-orange-200"
      >
        {/* Image */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <img 
            src={pkg.image} 
            alt={pkg.title} 
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
          />
          <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm">
            {pkg.duration}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6">
            <h3 className="text-white text-xl sm:text-2xl font-bold">{pkg.title}</h3>
            <p className="text-orange-300 text-sm sm:text-base font-semibold mt-1">{pkg.price}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <p className="text-gray-600 text-sm sm:text-base mb-4">{pkg.summary}</p>

          {/* Highlights */}
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
              <span className="text-sm sm:text-base">Tour Highlights</span>
            </h4>
            <div className="grid grid-cols-1 gap-1.5">
              {pkg.highlights.slice(0, 5).map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            {pkg.highlights.length > 5 && (
              <p className="text-xs sm:text-sm text-orange-500 mt-2">+ {pkg.highlights.length - 5} more highlights</p>
            )}
          </div>

          {/* View Details Button */}
          <Link 
            href={`/packages/${pkg.id}`}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all text-sm sm:text-base"
          >
            View Full Details <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section id="packages" ref={sectionRef} className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 section-title">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Tour Packages</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Meticulously crafted tours from express 5-day introductions to immersive 21-day grand journeys
          </p>
        </div>

        {/* Day Tours */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 relative inline-block">
            <span className="relative z-10">Day Tours</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-200 opacity-50 -z-10"></span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {packages.dayTours.map((pkg, idx) => (
              <PackageCard key={pkg.id} pkg={pkg} category="day" index={idx} />
            ))}
          </div>
        </div>

        {/* Short Tours */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 relative inline-block">
            <span className="relative z-10">Short Tours (5-7 Days)</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-200 opacity-50 -z-10"></span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {packages.shortTours.map((pkg, idx) => (
              <PackageCard key={pkg.id} pkg={pkg} category="short" index={idx + 2} />
            ))}
          </div>
        </div>

        {/* Medium Tours */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 relative inline-block">
            <span className="relative z-10">Medium Tours (10-14 Days)</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-200 opacity-50 -z-10"></span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {packages.mediumTours.map((pkg, idx) => (
              <PackageCard key={pkg.id} pkg={pkg} category="medium" index={idx + 4} />
            ))}
          </div>
        </div>

        {/* Long Tours */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 relative inline-block">
            <span className="relative z-10">Long Tours (17-21 Days)</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-200 opacity-50 -z-10"></span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {packages.longTours.map((pkg, idx) => (
              <PackageCard key={pkg.id} pkg={pkg} category="long" index={idx + 6} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllPackages;
