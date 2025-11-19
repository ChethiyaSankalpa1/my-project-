"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, Users, Phone, Mail, User, CheckCircle, MapPin } from 'lucide-react';

const TourBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    travelers: '',
    packageType: '',
    vehicleType: '',
    message: '',
    pickupLocation: ''
  });
  
  const [userCoords, setUserCoords] = useState(null);
  
  const [submitted, setSubmitted] = useState(false);

  // Get user's GPS coordinates (for reference, but user selects from dropdown)
  useEffect(() => {
    // Try to get location from localStorage first (set by Footer)
    const storedLocation = localStorage.getItem('userLocation');
    if (storedLocation) {
      const location = JSON.parse(storedLocation);
      setUserCoords(location);
    } else {
      // Fallback: get location directly
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coords = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            setUserCoords(coords);
          },
          (error) => {
            // Silently handle error
          }
        );
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Include user's GPS coordinates in booking data
      const bookingData = {
        ...formData,
        userCoordinates: userCoords,
        pickupLocation: formData.pickupLocation
      };
      
      // Send booking data to API
      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();
      
      if (result.success) {
        console.log('Booking submitted successfully');
        console.log('Emails sent:', result.emailsSent);
        if (result.emailError) {
          console.warn('Email error:', result.emailError);
        }
        console.log('Admin email:', result.emails.admin);
        console.log('Customer email:', result.emails.customer);
        setSubmitted(true);
        
        // Reset after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            travelDate: '',
            travelers: '',
            packageType: '',
            vehicleType: '',
            message: '',
            pickupLocation: ''
          });
        }, 5000);
      } else {
        alert('Failed to submit booking. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('An error occurred. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12 px-4 animate-fade-in">
        <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4 animate-bounce" />
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Booking Request Submitted!</h3>
        <p className="text-sm sm:text-base text-gray-600">
          Thank you for choosing J Toors. We will contact you shortly to confirm your booking.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-10">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
        Book Your Sri Lanka Tour
      </h3>
      <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8">
        Fill in your details and we'll get back to you within 24 hours
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                placeholder="+94 123 456 789"
              />
            </div>
          </div>

          {/* Travel Date */}
          <div>
            <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Travel Date *
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none" />
              <input
                type="date"
                id="travelDate"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                required
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Number of Travelers */}
          <div>
            <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-2">
              Number of Travelers *
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="number"
                id="travelers"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                required
                min="1"
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                placeholder="2"
              />
            </div>
          </div>

          {/* Package Type */}
          <div>
            <label htmlFor="packageType" className="block text-sm font-medium text-gray-700 mb-2">
              Select Tour Package
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <select
                id="packageType"
                name="packageType"
                value={formData.packageType}
                onChange={handleChange}
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-sm sm:text-base"
              >
                <option value="">Choose a package</option>
                <optgroup label="Day Tours">
                  <option value="ella-day">Ella One Day Tour</option>
                  <option value="haputale-day">Haputale One Day Tour</option>
                </optgroup>
                <optgroup label="Short Tours">
                  <option value="5d4n">5 Days / 4 Nights Highlights</option>
                  <option value="7d6n">7 Days / 6 Nights Complete</option>
                </optgroup>
                <optgroup label="Medium Tours">
                  <option value="10d9n">10 Days / 9 Nights Grand Tour</option>
                  <option value="14d13n">14 Days / 13 Nights Island Experience</option>
                </optgroup>
                <optgroup label="Long Tours">
                  <option value="17d16n">17 Days / 16 Nights Premium Journey</option>
                  <option value="21d20n">21 Days / 20 Nights Ultimate Tour</option>
                </optgroup>
                <option value="custom">Custom Package</option>
              </select>
            </div>
          </div>

          {/* Vehicle Type */}
          <div>
            <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-2">
              Select Vehicle Type
            </label>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              <select
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-sm sm:text-base"
              >
                <option value="">Choose vehicle</option>
                <option value="car">Car (1-3 passengers)</option>
                <option value="van">Van (4-7 passengers)</option>
                <option value="minibus">Mini Bus (8-14 passengers)</option>
                <option value="bus">Bus (15+ passengers)</option>
                <option value="luxury">Luxury Vehicle</option>
              </select>
            </div>
          </div>

          {/* Pickup Location */}
          <div className="sm:col-span-2">
            <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Location *
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none z-10" />
              <select
                id="pickupLocation"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-base appearance-none"
              >
                <option value="">Select pickup location</option>
                
                <optgroup label="Airports">
                  <option value="Bandaranaike International Airport">Bandaranaike Airport (Colombo)</option>
                  <option value="Mattala Rajapaksa International Airport">Mattala Airport</option>
                </optgroup>
                
                <optgroup label="Western Province">
                  <option value="Colombo">Colombo</option>
                  <option value="Negombo">Negombo</option>
                  <option value="Gampaha">Gampaha</option>
                  <option value="Kalutara">Kalutara</option>
                  <option value="Mount Lavinia">Mount Lavinia</option>
                </optgroup>
                
                <optgroup label="Southern Province">
                  <option value="Galle">Galle</option>
                  <option value="Matara">Matara</option>
                  <option value="Mirissa">Mirissa</option>
                  <option value="Unawatuna">Unawatuna</option>
                  <option value="Hikkaduwa">Hikkaduwa</option>
                  <option value="Bentota">Bentota</option>
                  <option value="Tangalle">Tangalle</option>
                </optgroup>
                
                <optgroup label="Central Province">
                  <option value="Kandy">Kandy</option>
                  <option value="Nuwara Eliya">Nuwara Eliya</option>
                  <option value="Hatton">Hatton</option>
                  <option value="Matale">Matale</option>
                </optgroup>
                
                <optgroup label="Uva Province">
                  <option value="Ella">Ella</option>
                  <option value="Bandarawela">Bandarawela</option>
                  <option value="Haputale">Haputale</option>
                  <option value="Badulla">Badulla</option>
                </optgroup>
                
                <optgroup label="Cultural Triangle">
                  <option value="Anuradhapura">Anuradhapura</option>
                  <option value="Polonnaruwa">Polonnaruwa</option>
                  <option value="Dambulla">Dambulla</option>
                  <option value="Sigiriya">Sigiriya</option>
                  <option value="Habarana">Habarana</option>
                </optgroup>
                
                <optgroup label="Eastern Province">
                  <option value="Trincomalee">Trincomalee</option>
                  <option value="Batticaloa">Batticaloa</option>
                  <option value="Arugam Bay">Arugam Bay</option>
                  <option value="Pasikuda">Pasikuda</option>
                </optgroup>
                
                <optgroup label="Wildlife Parks">
                  <option value="Yala">Yala</option>
                  <option value="Udawalawe">Udawalawe</option>
                </optgroup>
                
                <optgroup label="Other">
                  <option value="Jaffna">Jaffna</option>
                  <option value="Other">Other</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Special Requests or Questions (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-sm sm:text-base"
            placeholder="Let us know if you have any special requirements..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl uppercase tracking-wide text-sm sm:text-base"
        >
          Submit Booking Request
        </button>

        <p className="text-xs sm:text-sm text-gray-500 text-center mt-4">
          We'll respond within 24 hours • No payment required now
        </p>
      </form>
    </div>
  );
};

export default TourBookingForm;
