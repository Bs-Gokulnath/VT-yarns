import { useEffect, useState, useRef, useCallback } from "react";

// Custom CSS for hiding scrollbars
const scrollbarHideCSS = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
`;

// Manufacturing specifications for each process
const MANUFACTURING_SPECS = {
  "BLOW ROOM": {
    // manufacturer: "TRUTZSCHLER",
    specs: [
      "TRUTZSCHLER",
      "BALE OPENER - BO A 2300",
      "MULTI MIXER - MPM-8",
      "CLEANOMAT - CL C1 1600",
      "PRE CLEANER - BOE 1200",
      "",
      "LMW",
      "UNIMIX - LB7/4R",
      "FLEXI CLEAN - LB5/6"
    ]
  },
  "CARDING": {
    // manufacturer: "TRUTZSCHLER",
    specs: [
      "TRUTZSCHLER - TC-10",
      "LMW - LC 636S CDS",
    ]
  },
  "DRAWING": {
    // manufacturer: "TRUTZSCHLER", 
    specs: [
      "LMW",
      "BREAKER DRAWING  - LDB 3",
      "FINISHER DRAWING - LDF3S",

    ]
  },
  "RING SPINNING": {
    // manufacturer: "TRUTZSCHLER",
    specs: [
      "LMW",
      "SIMPLEX - 4280 A",
      "RING FRAME - LR9AX",
      "COMPACT - LR9AX-SPINPACT",
      "SIRO COMPACT - LRJ9SX",

    ]
  },
  "AUTO CONER": {
    // manufacturer: "MURATEC",
    specs: [
      "MURATEC",
      "AUTO CONER - QPRO EX",
      "LENGTH & COUNT CONTROL - PLC21",
      "CONTAMINATION & HARINESS CONTROL - ZENITH PLUS",

    ]
  },
  "VORTEX": {
    // manufacturer: "MURATEC",
    specs: [
      "VORTEX 870 - 240 SPINDLESMURATEC",
      "VORTEX - 870EX",
    ]
  },
  "WARPING": {
    // manufacturer: "BENNINGER",
    specs: [
      "BENNINGER",
      "768 CREEL - 1800MM - BENDIRECT",
      "PRASHANT WEST POINT",
      "912 CREEL - 2200MM - MPB 1000",

    ]
  },
  "SIZING": {
    // manufacturer: "BENNINGER",
    specs: [
      "BENNINGER",
      "24 BEAMS - 2800MM - BENSIZE TEC",
      "PRASANTH WEST POINT",
      "24 BEAMS - 3600MM - PACESETTER-A",

    ]
  }
};

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

interface ManufacturingImage {
  src: string;
  alt: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: ManufacturingImage[];
}

function ImageModal({ isOpen, onClose, images }: ModalProps) {
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
          className="relative h-96 md:h-[500px] bg-white"
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

export default function Manufacturing() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalState, setModalState] = useState({
    isOpen: false,
    images: [] as { src: string; alt: string }[],
    category: "",
  });
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const displayedImages = MANUFACTURING_IMAGES;

  // Inject custom CSS for hiding scrollbars
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = scrollbarHideCSS;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

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

  const scrollToImage = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const imageWidth = 800 + 32; // 800px width + 32px gap
      const scrollPosition = index * imageWidth;
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const nextImage = useCallback(() => {
    const nextIndex = (currentImageIndex + 1) % displayedImages.length;
    setCurrentImageIndex(nextIndex);
    scrollToImage(nextIndex);
  }, [currentImageIndex, displayedImages.length, scrollToImage]);

  const prevImage = useCallback(() => {
    const prevIndex = currentImageIndex === 0 ? displayedImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    scrollToImage(prevIndex);
  }, [currentImageIndex, displayedImages.length, scrollToImage]);



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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevImage();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextImage, prevImage]);

  // Track scroll position to update current image index
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const imageWidth = 800 + 32; // 800px width + 32px gap
      const scrollPosition = container.scrollLeft;
      const newIndex = Math.round(scrollPosition / imageWidth);
      if (newIndex !== currentImageIndex && newIndex >= 0 && newIndex < displayedImages.length) {
        setCurrentImageIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentImageIndex, displayedImages.length]);

  return (
    <section
      ref={sectionRef}
      id="manufacturing"
      className="w-full bg-white py-12 flex flex-col items-center scroll-mt-20"
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

      {/* Horizontal Scrolling Layout */}
      <div 
        className={`w-full overflow-hidden transition-all duration-1000 ease-out delay-300 relative ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
          aria-label="Next image"
        >
          →
        </button>

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-8 pb-4" 
          style={{ 
            scrollSnapType: 'x mandatory',
            paddingLeft: 'clamp(64px, 15vw, 320px)',
            paddingRight: 'clamp(64px, 15vw, 320px)'
          }}
        >
          {displayedImages.map((item, idx) => {
            const specs = MANUFACTURING_SPECS[item.category as keyof typeof MANUFACTURING_SPECS];
            const isHovered = hoverIndex === idx;
            
            return (
              <div
                key={idx}
                className={`relative flex-shrink-0 shadow-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                onClick={() => openModal(item.category)}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
                style={{
                  width: '800px',
                  height: '500px',
                  scrollSnapAlign: 'start'
                }}
              >
                {/* Full Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    draggable={false}
                  />
                </div>
                
                {/* Dark Overlay for better text visibility on hover */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                  isHovered ? 'opacity-60' : 'opacity-20'
                }`}></div>
                
                {/* Content Overlay - Only visible on hover */}
                <div className={`absolute inset-0 p-8 flex flex-col justify-between transition-all duration-500 ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {/* Title Section */}
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-4 tracking-wide drop-shadow-lg">
                      {item.category}
                    </h3>
                    <div className="w-16 h-1 bg-green-400 rounded mb-6"></div>
                    
                    {/* First spec as manufacturer/title */}
                    <div className="mb-4">
                      <span className="text-lg font-semibold text-green-300 uppercase tracking-wider drop-shadow">
                        {specs.specs[0]}
                      </span>
                    </div>
                  </div>
                  
                  {/* Specifications */}
                  <div className="space-y-2">
                    {specs.specs.slice(1, 6).map((spec, specIdx) => (
                      <div key={specIdx}>
                        {spec && (
                          <div className="flex items-start">
                            {/* <span className="text-green-400 mr-3 text-sm mt-1 drop-shadow">▸</span> */}
                            <span className="text-white font-medium text-base drop-shadow">{spec}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Click indicator */}
                  <div className="text-center">
                    <div className="inline-block text-sm text-green-300 bg-black bg-opacity-50 px-4 py-2 rounded-full drop-shadow">
                      Gallery →
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        images={modalState.images}
      />
    </section>
  );
}
