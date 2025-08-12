import { useState, useEffect, useRef } from "react";

const LOGOS = [
  { src: "/assets/viscose.png", alt: "Viscose" },
  { src: "/assets/modal.png", alt: "Modal" },
  { src: "/assets/excel.jpg", alt: "Excel" },
  { src: "/assets/liveco.png", alt: "Liveco" },
  { src: "/assets/bamboo.jpg", alt: "Bamboo" },
  { src: "/assets/circulose.png", alt: "Circulose" },
  { src: "/assets/tencel.png", alt: "Tencel" },
  { src: "/assets/ecovera.png", alt: "Ecovera" },
  { src: "/assets/refinra.png", alt: "Refinra" },
];

export default function YarnsSection() {
  const [animTime, setAnimTime] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [speed, setSpeed] = useState(0.2);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const center = { x: 200, y: 240 };
  const yarnImageSize = 120;

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      setAnimTime((prev) => (prev + 0.0008) % 1);
      setRotation((prev) => (prev + speed) % 360);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [speed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const dx = mouseX - center.x;
      const dy = mouseY - center.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = yarnImageSize / 2;

      if (dist <= maxDist) {
        const newSpeed = 0.2 + (1 - dist / maxDist) * 4.8;
        setSpeed(newSpeed);
      } else {
        setSpeed(0.2);
      }
    };

    const handleMouseLeave = () => {
      setSpeed(0.2);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const bgImageUrl = "/assets/yarnbg.png";

  return (
    <section 
      ref={sectionRef}
      id="yarns" 
      className="relative w-full py-8 bg-white scroll-mt-24"
      style={{ scrollMarginTop: '100px' }}
    >
      <div className="px-[50px]">
        {/* Enhanced Title Section with Animation */}
        <div className={`text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-2">
            YARNS
          </h2>
          <div className="mx-auto w-16 h-[5px] rounded-full bg-green-600 mb-6"></div>
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-[1600px] mx-auto overflow-hidden"
          style={{ height: 480 }}
        >
          <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-4 px-6 py-6">
            {/* LEFT SIDE — Solar System Animation */}
            <div className={`relative w-full md:w-1/2 min-w-[330px] h-[480px] bg-white flex items-center justify-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
            }`}>
              <div className="relative w-full h-full">
                <svg
                  viewBox="0 0 400 480"
                  className="absolute left-0 top-0 w-full h-full select-none pointer-events-none"
                >
                  {/* Orbiting logos */}
                  {LOGOS.map((logo, idx) => {
                    const angle = (animTime + idx / LOGOS.length) * 2 * Math.PI;
                    const radius = 200;
                    const x = center.x + radius * Math.cos(angle);
                    const y = center.y + radius * Math.sin(angle);
                    return (
                      <image
                        key={logo.src}
                        href={logo.src}
                        x={x - 48}
                        y={y - 48}
                        width={96}
                        height={96}
                        className="rounded-full shadow-2xl"
                      />
                    );
                  })}

                  {/* Center Yarn Image with rotation */}
                  <image
                    href="/assets/yarn.png"
                    x={center.x - yarnImageSize / 2}
                    y={center.y - yarnImageSize / 2}
                    width={yarnImageSize}
                    height={yarnImageSize}
                    className="pointer-events-none select-none"
                    style={{ transformOrigin: `${center.x}px ${center.y}px`, transform: `rotate(${rotation}deg)` }}
                  />
                </svg>
              </div>
            </div>

            {/* RIGHT SIDE — Description with Animation */}
            <div
              className={`w-full md:w-1/2 h-[450px] relative z-10 flex flex-col justify-center items-start p-4 space-y-6 overflow-y-auto transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
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

              {/* Side-by-side blocks: Count Range left, Variety right */}
              <div className="w-full flex flex-col md:flex-row gap-6 mb-4">
                {/* Count Range - left */}
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
                {/* Variety - right */}
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
