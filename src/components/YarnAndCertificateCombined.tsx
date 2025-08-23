import { useState, useEffect, useRef } from "react";

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

const CERT_PDF_MAP = {
  "/assets/cert1.png": "/assets/OEKO_Certificate.pdf",
  "/assets/cert4.png": "/assets/CONTROLUNION_Certificate.pdf",
  "/assets/cert5.png": "/assets/CONTROLUNION_Certificate.pdf",
};

export default function YarnAndCertificateCombined() {
  const titleRef = useRef(null);
  const yarnSectionCenterRef = useRef(null);
  const travelingYarnRef = useRef(null);
  const certSectionYarnRef = useRef(null);
  const yarnSectionRef = useRef(null);
  const certSectionRef = useRef(null);

  const [animationProgress, setAnimationProgress] = useState(0);
  const [travelProgress, setTravelProgress] = useState(0);
  const [showCircleLogos, setShowCircleLogos] = useState(false);
  const [showCertLogos, setShowCertLogos] = useState(false);
  const [visibleCertLogos, setVisibleCertLogos] = useState([]);

  // Certificate preview state (inline, like your original)
  const [isCombined, setIsCombined] = useState(false);
  const [activeThumb, setActiveThumb] = useState(null);
  const [activePreview, setActivePreview] = useState(null);

  // Utils
  const clamp = (min, v, max) => Math.max(min, Math.min(max, v));
  const interpolate = (start, end, t) => start + (end - start) * t;

  function getElementCenter(el) {
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2 + window.scrollX,
      y: rect.top + rect.height / 2 + window.scrollY,
      width: rect.width,
      height: rect.height,
    };
  }

  // Geometry for yarn & logos
  const yarnSectionCenterX = 260,
    yarnSectionCenterY = 240,
    yarnRadius = 180,
    logoSize = 78;

  function generateLogoPositions(cx, cy, r, count) {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const angle = (2 * Math.PI * i) / count;
      positions.push({
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
      });
    }
    return positions;
  }

  const yarnLogoPositions = generateLogoPositions(
    yarnSectionCenterX,
    yarnSectionCenterY,
    yarnRadius,
    LOGOS.length
  );

  // Geometry for certificates - semi-circle arrangement
  const certContainerW = 800,
    certContainerH = 450,
    certCenterX = certContainerW / 2,
    yarnBaseY = 50,
    certRadius = 250,
    certSize = 140;

  // Semi-circle positions for 5 certificates (downward arc)
  const generateSemiCirclePositions = () => {
    const positions = [];
    const totalCerts = 5;
    // Create a downward semi-circle with more spacing
    // Adjust angles to create wider arc for more spacing
    const startAngle = Math.PI - Math.PI/6;  // 150 degrees (slightly inward from left)
    const endAngle = Math.PI/6;              // 30 degrees (slightly inward from right)
    const angleRange = startAngle - endAngle;
    const angleStep = -angleRange / (totalCerts - 1);
    
    for (let i = 0; i < totalCerts; i++) {
      const angle = startAngle + (angleStep * i);
      positions.push({
        left: certCenterX + certRadius * Math.cos(angle) - certSize / 2,
        top: yarnBaseY + 120 + certRadius * Math.sin(angle) - certSize / 2,
      });
    }
    return positions;
  };

  const certPositions = generateSemiCirclePositions();

  // Trigger certificate animation when yarn arrives
  useEffect(() => {
    if (travelProgress === 1 && !showCertLogos) {
      setShowCertLogos(true);
      // Animate certificates one by one
      const animateLogos = async () => {
        for (let i = 0; i < CERT_LOGOS.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 200)); // Delay between each logo
          setVisibleCertLogos(prev => [...prev, i]);
        }
      };
      animateLogos();
    }
  }, [travelProgress, showCertLogos]);

  // Reset certificates when scrolling back up
  useEffect(() => {
    if (travelProgress < 1) {
      setShowCertLogos(false);
      setVisibleCertLogos([]);
    }
  }, [travelProgress]);

  // Smooth scroll-driven animation loop with rAF
  useEffect(() => {
    let rafId;

    const update = () => {
      const scrollY = window.scrollY;
      const titleCenter = getElementCenter(titleRef.current);
      const yarnCenter = getElementCenter(yarnSectionCenterRef.current);
      const certYarnCenter = getElementCenter(certSectionYarnRef.current);

      // 1) Heading -> Yarn center
      let t = 0;
      if (titleCenter && yarnCenter) {
        const startScroll = titleCenter.y - window.innerHeight / 2;
        const endScroll = yarnCenter.y - window.innerHeight / 2;
        t = clamp(0, (scrollY - startScroll) / (endScroll - startScroll), 1);
      }
      setAnimationProgress(t);
      setShowCircleLogos(t > 0.98);

      // 2) Yarn center -> Certificates yarn
      let travel = 0;
      if (t >= 1 && yarnCenter && certYarnCenter) {
        const windowCenterY = scrollY + window.innerHeight / 2;
        const yarnY = yarnCenter.y;
        const certY = certYarnCenter.y;
        if (windowCenterY >= yarnY && windowCenterY <= certY) {
          travel = (windowCenterY - yarnY) / (certY - yarnY);
        } else if (windowCenterY > certY) travel = 1;
      } else {
        travel = 0;
      }
      setTravelProgress(travel);

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const yarnSizeYarnSection = 270;
  const yarnSizeCertSection = 240;

  // Only show the traveling yarn WHEN MOVING (prevents initial overlap on first load)
  const getTravelingStyle = () => {
    const titleCoords = getElementCenter(titleRef.current);
    const centerCoords = getElementCenter(yarnSectionCenterRef.current);
    const certCoords = getElementCenter(certSectionYarnRef.current);

    // Phase 1: from heading to center (only if 0 < t < 1)
    if (titleCoords && centerCoords && animationProgress > 0 && animationProgress < 1) {
      const x = interpolate(titleCoords.x, centerCoords.x, animationProgress);
      const y = interpolate(titleCoords.y, centerCoords.y, animationProgress);
      const size = interpolate(60, yarnSizeYarnSection, animationProgress);
      return {
        position: "absolute",
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: interpolate(0.2, 1, animationProgress),
        filter: "drop-shadow(0 8px 16px rgba(0,0,0,.14))",
        willChange: "transform, opacity",
      };
    }

    // Phase 2: from center to certificates (only if 0 < travel < 1)
    if (centerCoords && certCoords && animationProgress === 1 && travelProgress > 0 && travelProgress < 1) {
      const x = interpolate(centerCoords.x, certCoords.x, travelProgress);
      const y = interpolate(centerCoords.y, certCoords.y, travelProgress);
      const size = interpolate(yarnSizeYarnSection, yarnSizeCertSection, travelProgress);
      return {
        position: "absolute",
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 1,
        filter: "drop-shadow(0 8px 15px rgba(0,0,0,0.15))",
        willChange: "transform",
      };
    }

    // Otherwise: hide (prevents first-load overlap)
    return null;
  };

  // Get certificate animation style - emerge from behind yarn
  const getCertAnimationStyle = (idx) => {
    const isVisible = visibleCertLogos.includes(idx);
    const centerX = certCenterX;
    const centerY = yarnBaseY + 120;
    
    // Animation stages for each certificate
    const baseStyle = {
      position: 'absolute',
      width: certSize,
      height: certSize,
      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      cursor: 'pointer',
    };
    
    if (!showCertLogos || !isVisible) {
      // Hidden state - behind the yarn
      return {
        ...baseStyle,
        left: centerX - certSize / 2,
        top: centerY - certSize / 2,
        opacity: 0,
        transform: 'scale(0.3) translateZ(-100px)',
        zIndex: 0,
      };
    }
    
    // Visible state - animated to position
    return {
      ...baseStyle,
      left: certPositions[idx].left,
      top: certPositions[idx].top,
      opacity: 1,
      transform: 'scale(1) translateZ(0)',
      zIndex: 5,
    };
  };

  // Certificate preview handlers
  const handleCombine = (src) => {
    setActiveThumb(src);
    const pdfUrl = CERT_PDF_MAP[src];
    if (pdfUrl) setActivePreview({ type: "pdf", url: pdfUrl });
    else setActivePreview({ type: "image", url: src });
    setIsCombined(true);
  };

  const handleExpand = () => {
    setIsCombined(false);
    setActiveThumb(null);
    setActivePreview(null);
  };

  // Render
  const travelingStyle = getTravelingStyle();

  return (
    <>
      {/* Traveling Yarn — rendered only while moving */}
      {travelingStyle && (
        <img
          ref={travelingYarnRef}
          src="/assets/yarn.png"
          alt="Traveling Yarn Logo"
          style={travelingStyle}
          draggable={false}
        />
      )}

      {/* YARNS section */}
      <section ref={yarnSectionRef} id="yarns" className="relative w-full py-8 bg-white scroll-mt-24">
        <div className="px-[50px]">
          <div className="text-center mb-8" ref={titleRef}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">YARNS</h2>
            <div className="mx-auto w-16 h-[5px] rounded-full bg-green-600 mb-6"></div>
          </div>

          <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden">
            <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-4 px-6 py-6">
              {/* LEFT: circular yarn logos */}
              <div
                className="relative w-full md:w-1/2 min-w-[330px] h-[540px] flex items-center justify-center"
                style={{ minHeight: "540px" }}
              >
                {/* Invisible landing spot (for measuring) */}
                <div
                  ref={yarnSectionCenterRef}
                  style={{
                    position: "absolute",
                    left: 260 - 270 / 2,
                    top: 240 - 270 / 2,
                    width: 270,
                    height: 270,
                    pointerEvents: "none",
                    opacity: 0,
                  }}
                />

                {/* Show static yarn only when fully landed at center and not traveling */}
                {animationProgress === 1 && travelProgress <= 0.001 && (
                  <img
                    src="/assets/yarn.png"
                    alt="Yarn"
                    style={{
                      position: "absolute",
                      left: 260 - 270 / 2,
                      top: 240 - 270 / 2,
                      width: 270,
                      height: 270,
                      pointerEvents: "none",
                      opacity: 1,
                      zIndex: 10,
                      transition: "opacity 0.15s",
                    }}
                    draggable={false}
                  />
                )}

                {/* Circle logos */}
                {yarnLogoPositions.map((pos, idx) => (
                  <img
                    key={LOGOS[idx].src}
                    src={LOGOS[idx].src}
                    alt={LOGOS[idx].alt}
                    style={{
                      position: "absolute",
                      left: pos.x - logoSize / 2,
                      top: pos.y - logoSize / 2,
                      width: logoSize,
                      height: logoSize,
                      borderRadius: "50%",
                      boxShadow: "0 2px 12px rgba(0,0,0,.15)",
                      background: "white",
                      zIndex: 7,
                      opacity: showCircleLogos ? 1 : 0,
                      transform: showCircleLogos ? "scale(1)" : "scale(0.9)",
                      transition: `opacity 0.46s ${showCircleLogos ? 0.09 * idx + 0.11 : 0}s, transform 0.46s`,
                    }}
                    draggable={false}
                  />
                ))}
              </div>

              {/* RIGHT: original content block restored */}
              <div
                className="w-full md:w-1/2 h-[450px] relative z-10 flex flex-col justify-center items-start p-4 space-y-6 overflow-y-auto"
                style={{
                  backgroundImage: `url(/assets/yarnbg.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundAttachment: "fixed",
                }}
              >
                <span className="text-blue-300 font-semibold text-lg tracking-wide uppercase">
                  Yarn Collection
                </span>

                <div className="w-full flex flex-col md:flex-row gap-6 mb-4">
                  {/* Count Range card */}
                  <div className="flex-1 rounded-xl px-6 py-4 shadow-lg">
                    <h4 className="text-xl md:text-2xl font-bold text-green-100 mb-2 underline underline-offset-4">
                      Count Range
                    </h4>
                    <p className="text-lg md:text-xl text-white drop-shadow font-semibold">
                      RING SPUN NE 12 - NE 80
                      <br />
                      OPEN END NE 2 - NE 30
                    </p>
                  </div>

                  {/* Variety card */}
                  <div className="flex-1 rounded-xl px-6 py-4 shadow-lg">
                    <h4 className="text-xl md:text-2xl font-bold text-green-100 mb-2 underline underline-offset-4">
                      Variety
                    </h4>
                    <ul className="text-lg md:text-xl text-white list-disc list-inside space-y-1 pl-2 font-semibold">
                      <li>RING</li>
                      <li>COMPACT</li>
                      <li>SIRO COMPACT</li>
                      <li>VORTEX</li>
                      <li>OPEN END</li>
                      <li>SLUB</li>
                      <li>HIGH TWIST</li>
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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide mb-3">
            CERTIFICATIONS
          </h2>
          <div className="mx-auto w-24 h-[6px] rounded-full bg-green-600"></div>
        </div>

        <div
          className="relative"
          style={{ 
            width: certContainerW, 
            height: certContainerH, 
            margin: "0 auto", 
            maxWidth: "100vw",
            perspective: "1000px"
          }}
        >
          {/* Yarn logo in center - always on top */}
          <img
            ref={certSectionYarnRef}
            src="/assets/yarn.png"
            alt="Yarn Logo"
            className="absolute left-1/2 -translate-x-1/2 object-contain"
            style={{
              top: yarnBaseY,
              width: yarnSizeCertSection,
              height: (yarnSizeCertSection * 145) / 160,
              zIndex: 10,
              pointerEvents: "none",
              opacity: travelProgress === 1 ? 1 : 0,
              transition: "opacity 0.33s",
            }}
            draggable={false}
          />

          {/* Certificate logos - emerge from behind yarn */}
          {CERT_LOGOS.map((src, idx) => (
            <div
              key={src}
              style={getCertAnimationStyle(idx)}
              onClick={() => handleCombine(src)}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '3px solid #22c55e',
                  padding: '8px',
                  background: 'white',
                  boxShadow: '0 4px 15px rgba(34, 197, 94, 0.2)',
                  transition: 'all 0.3s ease',
                }}
                className="hover:shadow-2xl hover:scale-105"
              >
                <img
                  src={src}
                  alt={`Certification Logo ${idx + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'contain',
                    background: 'white',
                  }}
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Inline combined preview (restored) */}
        {isCombined && activePreview && (
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-5xl transition-all duration-700 mt-10">
            {activeThumb && (
              <div
                onClick={handleExpand}
                className="cursor-pointer w-[160px] sm:w-[200px] md:w-[260px] h-auto rounded-md shadow-lg hover:scale-105 transition-transform duration-500"
              >
                <img src={activeThumb} alt="Active Certification" className="w-full h-auto object-contain rounded-md" />
              </div>
            )}

            <div className="w-full md:w-1/2 flex justify-center items-center px-4">
              <div className="w-full max-w-[450px] h-[600px] bg-white border border-gray-300 rounded-lg p-4 flex flex-col relative">
                <button
                  onClick={handleExpand}
                  className="absolute top-2 right-2 w-8 h-8 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 z-10 shadow-lg"
                  aria-label="Close preview"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="w-full h-full flex justify-center items-center">
                  {activePreview.type === "pdf" ? (
                    <iframe
                      src={activePreview.url}
                      title="Certificate PDF Preview"
                      className="w-full h-full rounded-md transition-all duration-700 ease-in-out"
                    />
                  ) : (
                    <img
                      src={activePreview.url}
                      alt="Active Certification Preview"
                      className="max-w-full max-h-full object-contain rounded-md transition-all duration-700 ease-in-out"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}