import { useEffect, useState, useRef } from "react";

const MANUFACTURING_IMAGES = [
  { src: "/assets/manufacturing/blow-room.jpg", alt: "BLOW ROOM" },
  { src: "/assets/manufacturing/carding.jpg", alt: "CARDING" },
  { src: "/assets/manufacturing/spinning.jpeg", alt: "SPINNING" },
  { src: "/assets/manufacturing/ring spin-1.jpg", alt: "RING SPINNING" },
  { src: "/assets/manufacturing/auto coner.jpeg", alt: "AUTO CONER" },
  { src: "/assets/manufacturing/warping.jpg", alt: "WARPING" },
  { src: "/assets/manufacturing/sizing.jpeg", alt: "SIZING" },
  { src: "/assets/manufacturing/vortex_main.jpg", alt: "VORTEX MAIN" },
  { src: "/assets/manufacturing/ring spin.webp", alt: "RING SPINNING" },
];

export default function ManufacturingSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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
                      <div className="w-36 h-16 flex items-center justify-center font-bold text-gray-800 text-center select-none text-xl">
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
    </section>
  );
}
