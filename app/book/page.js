"use client";
import React from 'react';
import TourBookingForm from '../components/TourBookingForm';

const BookNowPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your <span className="text-orange-500">Sri Lanka Tour</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Fill in your details and we'll get back to you within 24 hours
          </p>
        </div>

        {/* Booking Form Component */}
        <TourBookingForm />
      </div>
    </div>
  );
};

export default BookNowPage;
