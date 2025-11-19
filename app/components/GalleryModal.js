"use client";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import gsap from "gsap";

const GalleryModal = ({ isOpen, onClose }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      fetchGalleryImages();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const fetchGalleryImages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Try to fetch from Google Business Profile API
      const response = await fetch('/api/gallery');
      
      if (response.ok) {
        const data = await response.json();
        if (data.images && data.images.length > 0) {
          setImages(data.images);
        } else {
          // Fallback to local images
          loadLocalImages();
        }
      } else {
        // Fallback to local images
        loadLocalImages();
      }
    } catch (err) {
      console.error('Error fetching gallery:', err);
      // Fallback to local images
      loadLocalImages();
    } finally {
      setLoading(false);
    }
  };

  const loadLocalImages = () => {
    // Fallback images from public folder
    const localImages = [
      '/sigiriya.jpeg',
      '/temple.jpg',
      '/beach2.jpg',
      '/elephants.webp',
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
    ].slice(0, 20); // Limit to 20 images
    
    setImages(localImages);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, images.length]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[110] p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
        aria-label="Close gallery"
      >
        <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-[105] bg-gradient-to-b from-black/80 to-transparent p-6">
        <div className="flex items-center gap-3 max-w-7xl mx-auto">
          <Camera className="w-6 h-6 text-orange-500" />
          <h2 className="text-2xl font-bold text-white">
            J Toors Gallery
          </h2>
          <span className="text-sm text-white/60 ml-auto">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center h-full px-4 pt-20 pb-8">
        {loading ? (
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white text-lg">Loading gallery...</p>
          </div>
        ) : images.length > 0 ? (
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 z-[110] p-3 bg-white/10 hover:bg-orange-500/80 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 z-[110] p-3 bg-white/10 hover:bg-orange-500/80 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          </div>
        ) : (
          <div className="text-center">
            <Camera className="w-16 h-16 text-white/40 mx-auto mb-4" />
            <p className="text-white text-xl">No images available</p>
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {!loading && images.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 z-[105] bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex gap-2 overflow-x-auto max-w-7xl mx-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-white/10">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-orange-500 scale-110'
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryModal;
