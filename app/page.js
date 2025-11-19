"use client";
import React from "react";
import TourHero from "./components/TourHero";
import AllPackages from "./components/AllPackages";
import TourBookingForm from "./components/TourBookingForm";
import GoogleReviews from "./components/GoogleReviews";
import About from "./components/About";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ReviewGallery from "./components/ReviewGallery";

const Page = () => {
  return (
    <main className="scroll-smooth">
      {/* Hero Section with Book Now button */}
      <section id="home">
        <TourHero />
      </section>

      {/* About J Toors */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-orange-500">J Toors</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We offer a meticulously crafted portfolio of Sri Lanka tours, ranging from an express 5-day introduction to an immersive 21-day grand journey. 
              Your adventure begins with convenient airport welcomes and utilizes private, air-conditioned vehicles throughout, with scenic train rides and dedicated safari jeeps. 
              Explore ancient wonders like Sigiriya Rock Fortress, Dambulla caves, and UNESCO-listed ruins of Polonnaruwa. 
              Experience the cultural heart in Kandy with the Temple of the Tooth, witness elephant gatherings in national parks, 
              and journey through the cool hill country to tea plantations in Nuwara Eliya and the picturesque village of Ella. 
              Enjoy wildlife safaris in Yala, relax on golden beaches in Mirissa, explore the historic Galle Fort, 
              and conclude with a comprehensive Colombo city tour—ensuring a complete and unforgettable Sri Lankan experience from ancient kingdoms and misty mountains to wildlife adventures and coastal serenity.
            </p>
          </div>

          {/* Explore Destinations Section */}
          <div className="mt-16 relative py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8" style={{
            backgroundImage: "url('/bac1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  Explore Sri Lanka Like Never Before
                </h2>
                <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
                  Discover the perfect Sri Lankan adventure tailored just for you
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
                <div className="group relative h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-2 animate-slide-up">
                  <img src="/elephants.webp" alt="Pinnawala" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-yellow-400 group-hover:text-orange-400 transition-colors">Pinnawala</h3>
                  </div>
                </div>

                <div className="group relative h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <img src="/dunhida.webp" alt="Dunhida" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-yellow-400 group-hover:text-orange-400 transition-colors">Dunhida</h3>
                  </div>
                </div>

                <div className="group relative h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <img src="/temple.jpg" alt="Yapahuwa" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-yellow-400 group-hover:text-orange-400 transition-colors">Yapahuwa</h3>
                  </div>
                </div>

                <div className="group relative h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <img src="/sigiriya.jpeg" alt="Sigiriya" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-yellow-400 group-hover:text-orange-400 transition-colors">Sigiriya</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Tour Packages */}
      <AllPackages />

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Review Gallery - Images from Google Business */}
      <ReviewGallery />

      {/* Booking Form */}
      <section id="booking" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <TourBookingForm />
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
    </main>
  );
};

export default Page;
