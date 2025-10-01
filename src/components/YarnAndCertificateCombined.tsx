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

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      if (!yarnSectionRef.current) return;
      
      const rect = yarnSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Start animation when section is 70% visible
      const triggerPoint = windowHeight * 0.7;
      
      if (sectionTop < triggerPoint && sectionTop > -sectionHeight) {
        // Show center yarn first
        if (!showCenterYarn) {
          setShowCenterYarn(true);
        }
        
        // Calculate progress through the section
        const progress = Math.min(1, Math.max(0, (triggerPoint - sectionTop) / (windowHeight * 0.5)));
        const totalLogos = LOGOS.length;
        const logosToShow = Math.floor(progress * totalLogos);
        
        // Add logos one by one with delay
        if (logosToShow > visibleLogos.length) {
          setTimeout(() => {
            setVisibleLogos(Array.from({ length: logosToShow }, (_, i) => i));
          }, 200);
        }
      } else if (sectionTop > triggerPoint) {
        // Reset when scrolled back up
        setShowCenterYarn(false);
        setVisibleLogos([]);
      }
    };

    window.addEventListener('scroll', handleScroll);
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

          <div className="relative w-full lg:max-w-[1800px] lg:mx-auto overflow-hidden">
            <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-4 px-2 sm:px-4 lg:px-6 py-6 mt-[-40px]">
              {/* LEFT: circular yarn logos */}
              <div
                className="relative w-full md:w-1/2 min-w-[1000px] h-[500px] flex items-center justify-center overflow-hidden"
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

              {/* RIGHT: yarn collection content */}
              <div
                className="w-full md:w-1/2 relative z-10 flex flex-col justify-center items-start pl-10 pr-2 pb-4 space-y-4"
              >
                {/* <span className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                  Yarn Collection
                </span> */}

                <div className="w-full flex flex-col gap-4">
                  {/* Count Range card - moved to top */}
                  <div className="w-full">
                    <h4 className="text-xl md:text-2xl font-bold text-green-700 mb-2  underline-offset-4">
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
                    <h4 className="text-xl md:text-2xl font-bold text-green-700 mb-2  underline-offset-4">
                      VARIETY
                    </h4>
                    <ul className="text-lg md:text-xl text-gray-800 list-disc list-inside space-y-1 pl-2 font-semibold">
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
          paddingBottom: 80,
          background: 'linear-gradient(to bottom, #ffffff, #f9fafb)'
        }}
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide mb-3">
            CERTIFICATIONS
          </h2>
          <div className="mx-auto w-24 h-[6px] rounded-full bg-green-600"></div>
        </div>

        {/* Horizontal strip of certificate logos - like partners strip */}
        <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-16 mt-12 mb-8 px-4 py-6">
          {CERT_LOGOS.map((src, idx) => (
            <div
              key={src}
              onClick={() => handleCombine(src)}
              className="cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-80 flex-shrink-0"
            >
              <img
                src={src}
                alt={`Certification Logo ${idx + 1}`}
                className="h-16 w-auto md:h-20 lg:h-24 object-contain  hover:grayscale-0 transition-all duration-300"
                draggable={false}
              />
            </div>
          ))}
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
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={handleExpand}
          >
            <div 
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleExpand}
                className="absolute top-4 right-4 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 z-10 shadow-lg"
                aria-label="Close preview"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Certificate content */}
              <div className="p-6 h-full">
                {activePreview.type === "pdf" ? (
                  <iframe
                    src={activePreview.url}
                    title="Certificate PDF Preview"
                    className="w-full h-[80vh] rounded-lg border-0"
                  />
                ) : (
                  <img
                    src={activePreview.url}
                    alt="Active Certification Preview"
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
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