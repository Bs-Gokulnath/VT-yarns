import { useState, useRef, useEffect } from "react";

const LOGOS = [
  { src: "/assets/viscose.png", alt: "Viscose" },
  { src: "/assets/modal.png", alt: "Modal" },
  { src: "/assets/excel.png", alt: "Excel" },
  { src: "/assets/liveco.png", alt: "Liveco" },
  { src: "/assets/bamboo.jpg", alt: "Bamboo" },
  { src: "/assets/circulose.png", alt: "Circulose" },
  { src: "/assets/tencel.png", alt: "Tencel" },
  { src: "/assets/ecovera.png", alt: "Ecovera" },
  { src: "/assets/refinra.png", alt: "Refinra" },
];

const CERT_LOGOS = [
  "/assets/cert1.png",
  "/assets/cert2.png",
  "/assets/cert3.png",
  "/assets/cert4.png",
  "/assets/cert5.png",
];

const CERT_PDF_MAP: Record<string, string> = {
  "/assets/cert1.png": "/assets/OEKO_Certificate.pdf",
  "/assets/cert4.png": "/assets/CONTROLUNION_Certificate.pdf",
  "/assets/cert5.png": "/assets/CONTROLUNION_Certificate.pdf",
};

type Preview = { type: "image" | "pdf"; url: string } | null;

export default function YarnAndCertificateCombined() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const yarnSectionCenterRef = useRef<HTMLDivElement>(null);
  const certSectionYarnRef = useRef<HTMLImageElement>(null);
  const yarnSectionRef = useRef<HTMLElement>(null);
  const certSectionRef = useRef<HTMLElement>(null);

  // Animation state for logos
  const [visibleLogos, setVisibleLogos] = useState<number[]>([]);
  const [showCenterYarn, setShowCenterYarn] = useState(false);

  // Certificate preview state
  const [isCombined, setIsCombined] = useState(false);
  const [activePreview, setActivePreview] = useState<Preview>(null);



  // Geometry for yarn & logos - 5+4 layout (5 in first row, 4 centered in second row)
  const logoSize = 170;
  const gridSpacing = 190;
  const gridStartX = 150;
  const gridStartY = 150;

  function generateGridPositions() {
    const positions = [];
    
    // First row: 5 logos
    for (let col = 0; col < 5; col++) {
      positions.push({
        x: gridStartX + col * gridSpacing,
        y: gridStartY,
      });
    }
    
    // Second row: 4 logos centered relative to first row
    const secondRowOffset = gridSpacing / 2; // Half spacing to center 4 logos under 5
    for (let col = 0; col < 4; col++) {
      positions.push({
        x: gridStartX + secondRowOffset + col * gridSpacing,
        y: gridStartY + gridSpacing,
      });
    }
    
    return positions;
  }

  const yarnLogoPositions = generateGridPositions();

  // Scroll animation effect - triggers every time section comes into view
  useEffect(() => {
    const handleScroll = () => {
      if (!yarnSectionRef.current) return;
      
      const rect = yarnSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Start animation when section is 60% visible
      const triggerPoint = windowHeight * 0.6;
      const exitPoint = windowHeight * 0.8;
      
      // Check if section is in viewport
      const isInViewport = sectionTop < triggerPoint && sectionTop > -sectionHeight + exitPoint;
      
      if (isInViewport) {
        // Always start fresh animation when entering viewport
        if (visibleLogos.length === 0) {
          setShowCenterYarn(true);
          
          // Animate logos sequentially with staggered delay
          LOGOS.forEach((_, index) => {
            setTimeout(() => {
              setVisibleLogos(prev => {
                if (!prev.includes(index)) {
                  return [...prev, index].sort((a, b) => a - b);
                }
                return prev;
              });
            }, index * 150); // 150ms delay between each logo
          });
        }
      } else {
        // Reset when completely out of viewport
        if (sectionTop > triggerPoint || sectionTop < -sectionHeight + exitPoint) {
          setShowCenterYarn(false);
          setVisibleLogos([]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleLogos.length, showCenterYarn]);

  // Certificate section setup
  const yarnSizeCertSection = 240;



  // Certificate preview handlers
  const handleCombine = (src: string) => {
    const pdfUrl = CERT_PDF_MAP[src];
    if (pdfUrl) setActivePreview({ type: "pdf", url: pdfUrl });
    else setActivePreview({ type: "image", url: src });
    setIsCombined(true);
  };

  const handleExpand = () => {
    setIsCombined(false);
    setActivePreview(null);
  };



  return (
    <>
      {/* Traveling Yarn Animation Removed */}

      {/* YARNS section */}
      <section ref={yarnSectionRef} id="yarns" className="relative w-full py-8 bg-white scroll-mt-24">
        <div className="px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center mb-8" ref={titleRef}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              YARNS
            </h2>
            <div className="mx-auto w-16 h-[5px] rounded-full bg-green-600 mb-6"></div>
          </div>

          <div className="relative w-full max-w-full overflow-hidden">
            <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-4 px-2 sm:px-4 lg:px-6 py-6 mt-[-40px]">
              {/* LEFT: yarn logos */}
              <div className="relative w-full md:w-3/5 lg:w-2/3 xl:w-3/4 overflow-hidden">
                
                {/* Mobile Grid Layout: 4+3+2+1 */}
                <div className="md:hidden w-full py-8">
                  {/* Row 1: 4 logos */}
                  <div className="grid grid-cols-4 gap-4 mb-6 px-2">
                    {LOGOS.slice(0, 4).map((logo, idx) => (
                      <div
                        key={logo.src}
                        className={`flex justify-center transition-all duration-700 ease-out ${
                          visibleLogos.includes(idx) ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        }`}
                        style={{ 
                          transitionDelay: `${idx * 0.1}s`
                        }}
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-green-500 bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center p-1">
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="w-full h-full object-contain"
                            style={{
                              width: idx === 0 ? '95%' : idx === 2 ? '90%' : idx === 1 ? '60%' : '80%',
                              height: idx === 0 ? '95%' : idx === 2 ? '90%' : idx === 1 ? '60%' : '80%',
                            }}
                            draggable={false}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Row 2: 3 logos */}
                  <div className="grid grid-cols-3 gap-6 mb-6 px-8">
                    {LOGOS.slice(4, 7).map((logo, idx) => (
                      <div
                        key={logo.src}
                        className={`flex justify-center transition-all duration-700 ease-out ${
                          visibleLogos.includes(idx + 4) ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        }`}
                        style={{ 
                          transitionDelay: `${(idx + 4) * 0.1}s`
                        }}
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-green-500 bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center p-1">
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="w-full h-full object-contain"
                            style={{
                              width: '80%',
                              height: '80%',
                            }}
                            draggable={false}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Row 3: 2 logos */}
                  <div className="grid grid-cols-2 gap-8 mb-6 px-16">
                    {LOGOS.slice(7, 9).map((logo, idx) => (
                      <div
                        key={logo.src}
                        className={`flex justify-center transition-all duration-700 ease-out ${
                          visibleLogos.includes(idx + 7) ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        }`}
                        style={{ 
                          transitionDelay: `${(idx + 7) * 0.1}s`
                        }}
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-green-500 bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center p-1">
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="w-4/5 h-4/5 object-contain"
                            draggable={false}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop Layout: Original absolute positioning (hidden on mobile) */}
                <div
                  className="hidden md:flex items-center justify-center h-[500px] md:w-[1200px] lg:w-[1400px] xl:w-[1600px]"
                  style={{ minHeight: "500px" }}
                >
                  {/* Reference for scroll animation */}
                  <div
                    ref={yarnSectionCenterRef}
                    style={{
                      position: "absolute",
                      left: gridStartX + gridSpacing,
                      top: gridStartY + gridSpacing,
                      width: logoSize,
                      height: logoSize,
                      pointerEvents: "none",
                      opacity: 0,
                    }}
                  />

                  {/* Circle logos - appear one by one */}
                  {yarnLogoPositions.map((pos, idx) => (
                    <div
                      key={LOGOS[idx].src}
                      style={{
                        position: "absolute",
                        left: pos.x - logoSize / 2,
                        top: pos.y - logoSize / 2,
                        width: logoSize,
                        height: logoSize,
                        opacity: visibleLogos.includes(idx) ? 1 : 0,
                        transform: visibleLogos.includes(idx) ? 'scale(1)' : 'scale(0.3)',
                        transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${idx * 0.1}s`,
                        zIndex: 7,
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          border: '3px solid #22c55e',
                          background: 'white',
                          boxShadow: '0 4px 15px rgba(34, 197, 94, 0.2)',
                          overflow: 'hidden',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '4px',
                        }}
                        className="hover:shadow-2xl hover:scale-105 transition-all duration-300"
                      >
                        <img
                          src={LOGOS[idx].src}
                          alt={LOGOS[idx].alt}
                          style={{
                            width: idx === 0 ? '98%' : idx === 2 ? '95%' : idx === 1 ? '65%' : '85%',
                            height: idx === 0 ? '98%' : idx === 2 ? '95%' : idx === 1 ? '65%' : '85%',
                            objectFit: 'contain',
                            objectPosition: 'center',
                          }}
                          draggable={false}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: yarn collection content */}
              <div
                className="w-full md:w-2/5 lg:w-1/3 xl:w-1/4 relative z-10 flex flex-col justify-center items-start md:items-end pl-10 md:pl-0 md:pr-8 lg:pr-12 xl:pr-16 pr-2 pb-4 space-y-4"
              >
                {/* <span className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                  Yarn Collection
                </span> */}

                <div className="w-full flex flex-col gap-4 md:text-right">
                  {/* Count Range card - moved to top */}
                  <div className="w-full">
                    <h4 className="text-xl md:text-2xl font-bold text-green-700 mb-2 underline-offset-4">
                      COUNT RANGE
                    </h4>
                    <p className="text-lg md:text-xl text-gray-800 font-semibold">
                      RING SPUN NE 12 - NE 80
                      <br />
                      OPEN END NE 2 - NE 30
                    </p>
                  </div>

                  {/* Variety card - moved below */}
                  <div className="w-full">
                    <h4 className="text-xl md:text-2xl font-bold text-green-700 mb-2 underline-offset-4">
                      VARIETY
                    </h4>
                    <ul className="text-lg md:text-xl text-gray-800 space-y-1 font-semibold md:list-none list-disc list-inside pl-2 md:pl-0">
                      <li>VORTEX</li>
                      <li>COMPACT</li>
                      <li>SIRO COMPACT</li>
                      {/* <li>RING</li> */}
                      <li>HIGH TWIST</li>
                      <li>OPEN END</li>
                      <li>SLUB</li>
                      
                      <li>TFO</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* END right block */}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS section */}
      <section
        ref={certSectionRef}
        id="certificates"
        className="w-full bg-white flex flex-col items-center px-4 scroll-mt-24"
        style={{ 
          scrollMarginTop: "100px", 
          position: "relative", 
          paddingBottom: 150,
          backgroundColor: '#ffffff'
        }}
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide mb-3">
            CERTIFICATIONS
          </h2>
          <div className="mx-auto w-24 h-[6px] rounded-full bg-green-600"></div>
        </div>

        {/* Certificate logos - responsive layout */}
        <div className="mt-12 mb-8 px-4 py-6">
          {/* Mobile view: Grid layout (2+2+1) */}
          <div className="grid grid-cols-2 gap-6 justify-items-center md:hidden">
            {CERT_LOGOS.map((src, idx) => (
              <div
                key={src}
                onClick={() => handleCombine(src)}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 flex-shrink-0 ${
                  idx === 4 ? 'col-span-2 flex justify-center' : ''
                }`}
              >
                <img
                  src={src}
                  alt={`Certification Logo ${idx + 1}`}
                  className={`object-contain transition-all duration-300 ${
                    idx < 4 ? 'h-28 w-auto sm:h-32' : 'h-20 w-auto sm:h-22'
                  }`}
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Desktop view: Horizontal layout */}
          <div className="hidden md:flex justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {CERT_LOGOS.map((src, idx) => (
              <div
                key={src}
                onClick={() => handleCombine(src)}
                className="cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-80 flex-shrink-0"
              >
                <img
                  src={src}
                  alt={`Certification Logo ${idx + 1}`}
                  className={`object-contain hover:grayscale-0 transition-all duration-300 ${
                    idx < 4 ? 'h-20 w-auto md:h-24 lg:h-28' : 'h-14 w-auto md:h-16 lg:h-20'
                  }`}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hidden reference for yarn positioning (if needed for other functionality) */}
        <img
          ref={certSectionYarnRef}
          src="/assets/yarn.png"
          alt="Yarn Logo Reference"
          className="opacity-0 absolute -z-10 pointer-events-none"
          style={{
            width: yarnSizeCertSection,
            height: (yarnSizeCertSection * 145) / 160,
          }}
          draggable={false}
        />

        {/* Modal overlay for certificate preview */}
        {isCombined && activePreview && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={handleExpand}
          >
            <div 
              className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleExpand}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 z-10 shadow-lg touch-manipulation"
                aria-label="Close preview"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Certificate content */}
              <div className="p-3 sm:p-6 h-full">
                {activePreview.type === "pdf" ? (
                  <iframe
                    src={activePreview.url}
                    title="Certificate PDF Preview"
                    className="w-full h-[85vh] sm:h-[80vh] rounded-lg border-0"
                  />
                ) : (
                  <img
                    src={activePreview.url}
                    alt="Active Certification Preview"
                    className="w-full h-auto max-h-[85vh] sm:max-h-[80vh] object-contain rounded-lg"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}