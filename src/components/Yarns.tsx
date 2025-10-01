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

export default function YarnsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [logoDelta, setLogoDelta] = useState({ x: 0, y: 0 });
  const [showLogos, setShowLogos] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const yarnAreaRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for animation every scroll-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setShowLogos(false); // reset logo display when leaving
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // After yarn animation, show logos one by one
  useEffect(() => {
    let logoTimer: number;
    if (isVisible) {
      logoTimer = setTimeout(() => {
        setShowLogos(true);
      }, 1400); // Wait for yarn animation (1.4s)
    }
    return () => clearTimeout(logoTimer);
  }, [isVisible]);

  // Calculate movement delta from "YARNS" center to yarn image center
  useEffect(() => {
    function updateDelta() {
      if (titleRef.current && yarnAreaRef.current) {
        // Find heading center (YARNS text)
        const headingRect = titleRef.current.getBoundingClientRect();
        const headingCenterX = headingRect.left + headingRect.width / 2;
        const headingCenterY = headingRect.top + headingRect.height / 2;
        // Find yarn image center
        const yarnRect = yarnAreaRef.current.getBoundingClientRect();
        const yarnCenterX = yarnRect.left + yarnRect.width / 2;
        const yarnCenterY = yarnRect.top + yarnRect.height / 2;
        // Delta from heading to yarn image position
        setLogoDelta({
          x: headingCenterX - yarnCenterX,
          y: headingCenterY - yarnCenterY,
        });
      }
    }
    setTimeout(updateDelta, 200); // Let layout settle
    window.addEventListener("resize", updateDelta);
    return () => window.removeEventListener("resize", updateDelta);
  }, []);

  const bgImageUrl = "/assets/yarnbg.png";

  // Helper: Get logo positions (circle)
  const getLogoPositions = (cx: number, cy: number, r: number, count: number) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const angle = (2 * Math.PI * i) / count;
      positions.push({
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
      });
    }
    return positions;
  };

  // Layout: bigger yarnSize
  const centerX = 260;
  const centerY = 240;
  const yarnSize = 270;
  const radius = 180;
  const logoSize = 78;

  const logoPositions = getLogoPositions(centerX, centerY, radius, LOGOS.length);

  return (
    <section
      ref={sectionRef}
      id="yarns"
      className="relative w-full py-8 bg-white scroll-mt-24"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="px-[50px]">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            YARNS
          </h2>
          <div className="mx-auto w-16 h-[5px] rounded-full bg-green-600 mb-6"></div>
        </div>
        <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden">
          <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-4 px-6 py-6">
            {/* LEFT SIDE — Yarn "Sun" + Logos "Planets" */}
            <div
              ref={yarnAreaRef}
              className={`relative w-full md:w-1/2 min-w-[330px] h-[540px] flex items-center justify-center transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 transform translate-x-0"
                  : "opacity-0 transform -translate-x-8"
              }`}
              style={{ minHeight: "540px" }}
            >
              {/* Yarn Image with animation from heading */}
              <img
                src="/assets/yarn.png"
                alt="Yarn"
                style={{
                  position: "absolute",
                  left: centerX - yarnSize / 2,
                  top: centerY - yarnSize / 2,
                  width: yarnSize,
                  height: yarnSize,
                  transition:
                    "opacity 1.2s, transform 1.4s cubic-bezier(0.7,0,0.2,1)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate(0,0) scale(1)"
                    : `translate(${logoDelta.x}px,${logoDelta.y}px) scale(0.55)`,
                  zIndex: 10,
                }}
                draggable={false}
              />
              {/* Logos as Planets: staggered, only after yarn is in position */}
              {logoPositions.map((pos, idx) => (
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
                    transition: `opacity 0.7s ${showLogos ? 0.09 * idx + 0.1 : 0}s`,
                    opacity: showLogos ? 1 : 0,
                    zIndex: 7,
                  }}
                  draggable={false}
                />
              ))}
            </div>
            {/* RIGHT SIDE — Text */}
            <div
              className={`w-full md:w-1/2 h-[450px] relative z-10 flex flex-col justify-center items-start p-4 space-y-6 overflow-y-auto transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 transform translate-x-0"
                  : "opacity-0 transform translate-x-8"
              }`}
              style={{
                backgroundImage: `url(${bgImageUrl})`,
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
                {/* Count Range */}
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
                {/* Variety */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
