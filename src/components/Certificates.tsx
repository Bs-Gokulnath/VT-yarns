import { useState, useEffect, useRef } from "react";

const LOGOS = [
  "/assets/cert1.png",
  "/assets/cert2.png",
  "/assets/cert3.png",
  "/assets/cert4.png",
  "/assets/cert5.png",
];

// Map specific certificate thumbnails to their corresponding PDF previews
const CERT_PDF_MAP: Record<string, string> = {
  "/assets/cert1.png": "/assets/OEKO_Certificate.pdf",
  "/assets/cert4.png": "/assets/CONTROLUNION_Certificate.pdf",
  "/assets/cert5.png": "/assets/CONTROLUNION_Certificate.pdf",
};

type Preview = { type: "image" | "pdf"; url: string } | null;

export default function LogoCertificationSection() {
  const [isCombined, setIsCombined] = useState(false);
  const [activeThumb, setActiveThumb] = useState<string | null>(null);
  const [activePreview, setActivePreview] = useState<Preview>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleCombine = (src: string) => {
    setActiveThumb(src);
    const pdfUrl = CERT_PDF_MAP[src];
    if (pdfUrl) {
      setActivePreview({ type: "pdf", url: pdfUrl });
    } else {
      setActivePreview({ type: "image", url: src });
    }
    setIsCombined(true);
  };

  const handleExpand = () => {
    setIsCombined(false);
    setActiveThumb(null);
    setActivePreview(null);
    setShowPreview(false);
  };

  useEffect(() => {
    if (isCombined && activePreview) {
      const timeout = setTimeout(() => setShowPreview(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [isCombined, activePreview]);

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

  return (
    <section 
      ref={sectionRef}
      id="certificates" 
      className="w-full bg-white flex flex-col items-center px-4 scroll-mt-24" 
      style={{ scrollMarginTop: '100px' }}
    >
      {/* Title */}
      <div 
        className={`text-center mb-10 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide mb-2">
          CERTIFICATIONS
        </h2>
        <div className="mx-auto w-20 h-[6px] rounded-full bg-green-600 mb-2"></div>
      </div>

      {/* Display Section */}
      {!isCombined ? (
        <div 
          className={`w-full max-w-5xl transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* First row: first 3 logos centered */}
          <div className="flex justify-center gap-12 mb-10 flex-wrap">
            {LOGOS.slice(0, 3).map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Certification Logo ${idx + 1}`}
                className={`object-contain cursor-pointer hover:scale-105 transition duration-300 transition-all duration-700 ease-out delay-${idx * 200} ${
                  idx === 1
                    ? "w-[140px] sm:w-[180px] md:w-[220px]"
                    : "w-[160px] sm:w-[200px] md:w-[260px]"
                } h-auto max-h-[350px] md:max-h-[480px] ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                draggable={false}
                onClick={() => handleCombine(src)}
              />
            ))}
          </div>

          {/* Second row: next 2 logos centered below first row */}
          <div className="flex justify-center gap-12 flex-wrap">
            {LOGOS.slice(3).map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Certification Logo ${idx + 4}`}
                className={`object-contain cursor-pointer hover:scale-105 transition duration-300 transition-all duration-700 ease-out delay-${(idx + 3) * 200} ${
                  idx === 0
                    ? "w-[140px] sm:w-[180px] md:w-[220px]"
                    : "w-[160px] sm:w-[200px] md:w-[260px]"
                } h-auto max-h-[350px] md:max-h-[480px] ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                draggable={false}
                onClick={() => handleCombine(src)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div 
          className={`relative flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-5xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Active Thumb on Left */}
          {activeThumb && (
            <div
              onClick={handleExpand}
              className="cursor-pointer w-[160px] sm:w-[200px] md:w-[260px] h-auto rounded-md shadow-lg hover:scale-105 transition-transform duration-500"
            >
              <img
                src={activeThumb}
                alt="Active Certification"
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          )}

          {/* Preview on Right - PDF or Image */}
          {activePreview && (
            <div className="w-full md:w-1/2 flex justify-center items-center px-4">
              <div className="w-full max-w-[450px] h-[600px] bg-white border border-gray-300 rounded-lg p-4 flex flex-col relative">
                {/* Close Button */}
                <button
                  onClick={handleExpand}
                  className="absolute top-2 right-2 w-8 h-8 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 z-10 shadow-lg"
                  aria-label="Close preview"
                >
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </button>
                
                {/* Preview Content */}
                <div className="w-full h-full flex justify-center items-center">
                  {activePreview.type === "pdf" ? (
                    <iframe
                      src={activePreview.url}
                      title="Certificate PDF Preview"
                      className={`w-full h-full rounded-md transition-all duration-700 ease-in-out ${
                        showPreview ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    />
                  ) : (
                    <img
                      src={activePreview.url}
                      alt="Active Certification Preview"
                      className={`max-w-full max-h-full object-contain rounded-md transition-all duration-700 ease-in-out transform ${
                        showPreview ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
