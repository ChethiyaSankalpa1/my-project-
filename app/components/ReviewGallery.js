"use client";
import { useState, useEffect } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

const ReviewGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchReviewImages();
  }, []);

  const fetchReviewImages = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/review-gallery');
      
      if (response.ok) {
        const data = await response.json();
        if (data.images && data.images.length > 0) {
          setImages(data.images);
        } else {
          loadLocalImages();
        }
      } else {
        loadLocalImages();
      }
    } catch (err) {
      console.error('Error fetching review images:', err);
      loadLocalImages();
    } finally {
      setLoading(false);
    }
  };

  const loadLocalImages = () => {
    // Fallback images from public folder
    const localImages = [
      '/sigiriya.jpeg',
      '/elephants.webp',
      '/beach2.jpg',
      '/temple.jpg',
      '/dunhida.webp',
      '/ninearch.jpg',
      '/tea.jpg',
      '/templeofthetooth.jpg',
      '/anuradhapura.jpg',
      '/polonnaruwa.jpg',
      '/pasikuda.jpg',
      '/portcity.jpg',
      '/riverston.jpg',
      '/yapahuwa.jpeg',
      '/Nallur.jpg',
      '/perahara.jpeg',
      '/beach1.jpeg',
      '/tiger.webp',
      '/anciant.jpeg',
      '/bagpac.jpeg'
    ].slice(0, 20);
    
    setImages(localImages);
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
  };

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage, currentIndex]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-orange-500" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="text-orange-500">Our Gallery</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Photos from our happy travelers
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Masonry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onClick={() => openLightbox(index)}
                  style={{ height: index % 3 === 0 ? '300px' : '200px' }}
                >
                  <img
                    src={img}
                    alt={`Review image ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
              <span className="text-white font-medium">
                {currentIndex + 1} / {images.length}
              </span>
            </div>

            {/* Previous Button */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 p-3 bg-white/10 hover:bg-orange-500/80 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
            )}

            {/* Image */}
            <img
              src={selectedImage}
              alt={`Review image ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 p-3 bg-white/10 hover:bg-orange-500/80 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewGallery;
