import { useEffect, useState, useRef } from "react";

// Organized manufacturing data with multiple images per category
const MANUFACTURING_DATA = {
  "BLOW ROOM": [
    { src: "/assets/manufacturing/blow-room.jpg", alt: "Blow Room Process 1" },
    { src: "/assets/new30-9-25/b5.jpg", alt: "Blow Room Process 1" },
    { src: "/assets/new30-9-25/b2.jpg", alt: "Blow Room Process 2" },
    { src: "/assets/new30-9-25/b3.jpg", alt: "Blow Room Process 3" },
  ],
  "CARDING": [
    { src: "/assets/new30-9-25/c4.jpg", alt: "Carding Process 1" },
    { src: "/assets/new30-9-25/c3.jpg", alt: "Carding Process 2" },
    { src: "/assets/new30-9-25/c2.jpg", alt: "Carding Process 3" },
    { src: "/assets/new30-9-25/c1.jpg", alt: "Carding Process 4" },
  ],
  "DRAWING": [
    { src: "/assets/new30-9-25/d2.jpg", alt: "Spinning Process 1" },
    { src: "/assets/new30-9-25/d1.jpg", alt: "Spinning Process 2" },
    { src: "/assets/new30-9-25/d3.jpg", alt: "Spinning Process 3" },
    { src: "/assets/new30-9-25/d4.jpg", alt: "Spinning Process 4" },
    { src: "/assets/new30-9-25/d5.jpg", alt: "Spinning Process 4" },

  ],
  "RING SPINNING": [
    { src: "/assets/new30-9-25/r9.jpg", alt: "Ring Spinning Process 1" },
    { src: "/assets/new30-9-25/r4.jpg", alt: "Ring Spinning Process 2" },
    { src: "/assets/new30-9-25/r7.jpg", alt: "Ring Spinning Process 3" },
    { src: "/assets/new30-9-25/r6.jpg", alt: "Ring Spinning Process 4" },
  ],
  "AUTO CONER": [
    { src: "/assets/new30-9-25/a1.jpg", alt: "Auto Coner Process 1" },
    { src: "/assets/manufacturing/auto coner.jpeg", alt: "Auto Coner Process 2" },
    { src: "/assets/manufacturing/auto coner.jpeg", alt: "Auto Coner Process 3" },
    { src: "/assets/manufacturing/auto coner.jpeg", alt: "Auto Coner Process 4" },
  ],
  "VORTEX": [
    { src: "/assets/manufacturing/vortex_main.jpg", alt: "Warping Process 1" },
    { src: "/assets/new30-9-25/v2.jpg", alt: "Warping Process 2" },
    { src: "/assets/new30-9-25/v1.jpg", alt: "Warping Process 3" },
    { src: "/assets/new30-9-25/v1.jpg", alt: "Warping Process 4" },
  ],
  "WARPING": [
    { src: "/assets/new30-9-25/w2.jpg", alt: "Sizing Process 1" },
    { src: "/assets/new30-9-25/w1.jpg", alt: "Sizing Process 2" },
    { src: "/assets/new30-9-25/w2.jpg", alt: "Sizing Process 3" },
    { src: "/assets/new30-9-25/w1.jpg", alt: "Sizing Process 4" },
  ],
  "SIZING": [
    { src: "/assets/new30-9-25/s5.jpg", alt: "Vortex Main Process 1" },
    { src: "/assets/new30-9-25/s4.jpg", alt: "Vortex Main Process 2" },
    { src: "/assets/new30-9-25/s3.jpg", alt: "Vortex Main Process 3" },
    { src: "/assets/new30-9-25/s2.jpg", alt: "Vortex Main Process 4" },
  ],
};

// Create display array for the main view
const MANUFACTURING_IMAGES = Object.entries(MANUFACTURING_DATA).map(([category, images]) => ({
  src: images[0].src, // Use first image as thumbnail
  alt: category,
  category: category,
}));

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string }[];
  category: string;
}

function ImageModal({ isOpen, onClose, images, category }: ModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Reset to first image when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setIsPaused(false);
    }
  }, [isOpen]);

  // Auto slideshow effect
  useEffect(() => {
    if (!isOpen || images.length <= 1 || isPaused) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // Change image every 4 seconds (increased from 3)

    return () => clearInterval(slideInterval);
  }, [isOpen, images.length, isPaused]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div 
      className="fixed inset-0 backdrop-blur-lg bg-white bg-opacity-10 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        // Close modal when clicking on backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-lg overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>


        {/* Image container */}
        <div 
          className="relative h-96 md:h-[500px] bg-gray-100"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            onError={(e) => {
              e.currentTarget.src = "/assets/placeholder.jpg"; // Fallback image
            }}
          />

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70 transition-colors text-xl"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70 transition-colors text-xl"
                aria-label="Next image"
              >
                →
              </button>
            </>
          )}

          {/* Image counter overlay */}
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
          

          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-white shadow-lg"
                      : "bg-white bg-opacity-50 hover:bg-opacity-75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ManufacturingSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    images: [] as { src: string; alt: string }[],
    category: "",
  });
  const sectionRef = useRef<HTMLElement>(null);

  const openModal = (category: string) => {
    const images = MANUFACTURING_DATA[category as keyof typeof MANUFACTURING_DATA] || [];
    setModalState({
      isOpen: true,
      images,
      category,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      images: [],
      category: "",
    });
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const displayedImages = MANUFACTURING_IMAGES;

  return (
    <section
      ref={sectionRef}
      id="manufacturing"
      className="w-full bg-white py-12 flex flex-col items-center scroll-mt-24"
      style={{ overflowX: "hidden", scrollMarginTop: '100px' }}
    >
      {/* Title */}
      <div 
        className={`text-center mb-12 px-4 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          MANUFACTURING
        </h2>
        <div className="mx-auto w-16 h-[5px] rounded-full bg-green-600 mb-2"></div>
      </div>

      {/* Layout */}
      <div 
        className={`w-full flex justify-center px-2 sm:px-4 md:px-0 transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {isMobile ? (
          // MOBILE: grid with 2 images per row, same size
          <div className="grid grid-cols-2 gap-4">
            {displayedImages.map((item, idx) => {
              const isHovered = hoverIndex === idx;

              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center transition-all duration-700 ease-out delay-${idx * 100} ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <div className="w-full aspect-square overflow-hidden max-w-[150px]">
                    <img
                      src={item.src}
                      alt={item.alt}
                      draggable={false}
                      onError={(e) => (e.currentTarget.style.display = "none")}
                      onClick={() => openModal(item.category)}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out cursor-pointer"
                      style={{
                        transformOrigin: "center bottom",
                        transition: "transform 0.5s ease",
                        transform: isHovered
                          ? "scale(1.5) translateY(-10px)"
                          : "scale(1)",
                        position: isHovered ? "relative" : "static",
                        zIndex: isHovered ? 50 : 0,
                      }}
                    />
                  </div>
                  <div className="mt-2 text-center font-bold text-gray-800 text-sm sm:text-base">
                    {item.alt}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // DESKTOP: original alternating layout
          <div className="flex relative flex-row">
            {displayedImages.map((item, idx) => {
              const isHovered = hoverIndex === idx;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center transition-all duration-700 ease-out delay-${idx * 100} ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{
                    overflow: "visible",
                    position: "relative",
                    zIndex: isHovered ? 50 : 0,
                    transition: "z-index 0.3s ease",
                  }}
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  {idx % 2 === 0 ? (
                    <>
                      <div className="w-36 h-36 flex items-center justify-center font-bold text-gray-800 text-center select-none text-xl">
                        {item.alt}
                      </div>
                      <div className="w-36 h-36 overflow-visible">
                        <img
                          src={item.src}
                          alt={item.alt}
                          draggable={false}
                          onError={(e) =>
                            (e.currentTarget.style.display = "none")
                          }
                          onClick={() => openModal(item.category)}
                          className="w-full h-full object-cover transition-transform duration-500 ease-in-out cursor-pointer"
                          style={{
                            transformOrigin: "center bottom",
                            transition: "transform 0.5s ease",
                            transform: isHovered
                              ? "scale(1.8) translateY(-20px)"
                              : "scale(1)",
                            position: isHovered ? "relative" : "static",
                            zIndex: isHovered ? 50 : 0,
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-36 h-36 overflow-visible">
                        <img
                          src={item.src}
                          alt={item.alt}
                          draggable={false}
                          onError={(e) =>
                            (e.currentTarget.style.display = "none")
                          }
                          onClick={() => openModal(item.category)}
                          className="w-full h-full object-cover transition-transform duration-500 ease-in-out cursor-pointer"
                          style={{
                            transformOrigin: "center bottom",
                            transition: "transform 0.5s ease",
                            transform: isHovered
                              ? "scale(1.8) translateY(-20px)"
                              : "scale(1)",
                            position: isHovered ? "relative" : "static",
                            zIndex: isHovered ? 50 : 0,
                          }}
                        />
                      </div>
                      <div className="w-36 h-16 flex items-center justify-center font-bold text-gray-800 text-center select-none text-xl mt-10">
                        {item.alt}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        images={modalState.images}
        category={modalState.category}
      />
    </section>
  );
}
