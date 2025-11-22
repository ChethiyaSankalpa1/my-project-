"use client";
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2024-10-15",
      text: "Amazing experience with J Tours! Our driver was knowledgeable and friendly. The 14-day tour exceeded all expectations. Highly recommend!",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      date: "2024-09-28",
      text: "Best decision for our Sri Lanka trip! The itinerary was perfect, covering all major attractions. Great value for money and excellent service.",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emma Williams",
      rating: 5,
      date: "2024-09-10",
      text: "Absolutely fantastic tour! The Ella train ride was breathtaking and the safari at Yala was incredible. J Tours made our honeymoon unforgettable.",
      avatar: "EW"
    },
    {
      id: 4,
      name: "David Brown",
      rating: 5,
      date: "2024-08-22",
      text: "Professional, punctual, and passionate about showing us the best of Sri Lanka. The cultural experiences in Kandy were a highlight!",
      avatar: "DB"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      rating: 5,
      date: "2024-08-05",
      text: "10/10 experience! From ancient temples to pristine beaches, every day was an adventure. Our guide went above and beyond.",
      avatar: "LA"
    },
    {
      id: 6,
      name: "James Wilson",
      rating: 5,
      date: "2024-07-18",
      text: "Incredible value and service. The accommodations were comfortable, the food was delicious, and the sights were spectacular!",
      avatar: "JW"
    }
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" 
              alt="Google" 
              className="h-8 w-8"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Google <span className="text-orange-500">Reviews</span>
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
          </div>
          <p className="text-gray-600">Based on our customer reviews</p>
          <p className="text-sm text-orange-600 mt-2 italic">
            * Real Google reviews will be displayed once our business profile is public
          </p>
        </div>

        <div className="hidden md:block relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleReviews().map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              aria-label="Previous reviews"
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-orange-500 hover:text-white text-gray-700 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextReview}
              aria-label="Next reviews"
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-orange-500 hover:text-white text-gray-700 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="md:hidden">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex gap-1 mb-3">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">"{reviews[currentIndex].text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
                {reviews[currentIndex].avatar}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{reviews[currentIndex].name}</p>
                <p className="text-sm text-gray-500">{new Date(reviews[currentIndex].date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevReview}
              aria-label="Previous review"
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-orange-500 hover:text-white text-gray-700 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextReview}
              aria-label="Next review"
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-orange-500 hover:text-white text-gray-700 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
