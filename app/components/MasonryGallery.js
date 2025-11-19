"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const MasonryGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/gallery');
      
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
      console.error('Error fetching gallery:', err);
      loadLocalImages();
    } finally {
      setLoading(false);
    }
  };

  const loadLocalImages = () => {
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

  // Masonry layout configuration - different heights for variety
  const getImageClass = (index) => {
    const patterns = [
      'row-span-2', // tall
      'row-span-1', // normal
      'row-span-1', // normal
      'row-span-2', // tall
      'row-span-1', // normal
      'row-span-2', // tall
      'row-span-1', // normal
      'row-span-1', // normal
    ];
    return patterns[index % patterns.length];
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-2">
            Our Gallery
          </h2>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Masonry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${getImageClass(index)}`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default MasonryGallery;
