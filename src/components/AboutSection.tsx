import { useRef, useState, useEffect } from "react";

// Count-up animation hook only starts when `start` is true
function useCountUp(end: number, start: boolean, duration = 2000) {
  const [value, setValue] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    if (!start) {
      setValue(0);
      return;
    }
    const startTime = performance.now();

    function animate(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    }

    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [end, start, duration]);

  return value;
}

function Stat({
  label,
  value,
  color,
  formatValue,
}: {
  label: string;
  value: number;
  color: string;
  formatValue?: (val: number) => React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      <span
        className={`text-4xl font-extrabold ${color} tracking-wide`}
        style={{ minHeight: "56px" }}
      >
        {formatValue ? formatValue(value) : value.toLocaleString()}
      </span>
      <span className="mt-2 text-gray-700 font-medium text-center">{label}</span>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Animations for counters
  const ringSpindles = useCountUp(14304, isVisible);
  const airjetSpinning = useCountUp(960, isVisible, 2200);
  const tonsPerMonth = useCountUp(800, isVisible, 2600);

  // NEW counters
  const sizing = useCountUp(2, isVisible, 1500);
  const warpers = useCountUp(4, isVisible, 1700);
  const power = useCountUp(8000000, isVisible, 2400); // "8 million units"

  // Formatter for power stat to show "8 Million"
  const formatPowerValue = (val: number) => {
    if (val >= 1_000_000) {
      return (val / 1_000_000).toFixed(0) + " Million";
    }
    return val.toLocaleString();
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full bg-white flex flex-col md:flex-row items-stretch min-h-[600px] px-2 sm:px-4 lg:px-16 scroll-mt-24"
      style={{ scrollMarginTop: '100px' }}
    >
      {/* Mobile: About Us heading above image */}
      <div className="block md:hidden w-full text-left mb-2">
        <h2
          className={`text-3xl font-extrabold text-gray-900 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ marginTop: "0.5rem" }}
        >
          About
        </h2>
      </div>

      {/* Left Side: Image */}
      <div className="md:w-1/2 w-full mb-4 md:mb-0 flex justify-center">
        <img
          src="/public/assets/sample1.png"
          alt="Factory workers"
          className="
            object-cover rounded-none md:rounded-l-2xl
            w-full
            max-w-[700px] h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px]
          "
          loading="lazy"
        />
      </div>

      {/* Right Side: About Content */}
      <div className="md:w-1/2 w-full flex items-start bg-white">
        <div className="w-full px-4 sm:px-6 md:px-8 py-2 md:py-6 max-w-3xl mx-auto">
          {/* Desktop: About Us heading here */}
          <h2
            className={`hidden md:block text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-left ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ marginTop: "0.5rem" }}
          >
            About
          </h2>

          <p
            className={`text-base sm:text-lg text-gray-600 mb-4 text-left max-w-xl ${
              isVisible ? "animate-fade-in-delay" : "opacity-0"
            }`}
          >
            VTS is a third-generation family company with a legacy of over half a century in the textile industry.
          </p>
          <p
            className={`text-gray-700 mb-3 text-left max-w-xl ${
              isVisible ? "animate-fade-in-delay2" : "opacity-0"
            }`}
          >
            The company also has a weaving preparatory division with
            <span className="font-semibold text-green-700"> 2 sizing</span> and
            <span className="font-semibold text-green-700"> 4 direct warping machines</span>.
          </p>
          <p
            className={`text-gray-600 text-base mb-6 text-left max-w-xl ${
              isVisible ? "animate-fade-in-delay3" : "opacity-0"
            }`}
          >
            The dynamic leadership team, dedicated workforce, and creative customers all play a pivotal role in the company's ongoing growth and success.
          </p>

          {/* DESKTOP 1st row of counters */}
          <div
            className={`hidden md:grid grid-cols-3 gap-6 md:gap-8 pt-4 md:pt-8 max-w-xl mx-auto pb-4 md:pb-0 ${
              isVisible ? "animate-fade-in-delay3" : "opacity-0"
            }`}
          >
            <Stat label="Ring Spindles" value={ringSpindles} color="text-green-600" />
            <Stat label="Airjet Spinning Positions" value={airjetSpinning} color="text-green-600" />
            <div className="flex justify-center">
              <Stat label="Tons per month" value={tonsPerMonth} color="text-green-600" />
            </div>
          </div>

          {/* DESKTOP 2nd row of counters */}
          <div
            className={`hidden md:grid grid-cols-3 gap-6 md:gap-8 pt-3 max-w-xl mx-auto ${
              isVisible ? "animate-fade-in-delay3" : "opacity-0"
            }`}
          >
            <Stat label="Sizing Machines" value={sizing} color="text-green-600" />
            <Stat label="Direct Warpers" value={warpers} color="text-green-600" />
            <div className="flex justify-center">
              <Stat
                label="Power (Units / Year)"
                value={power}
                color="text-green-600"
                formatValue={formatPowerValue}
              />
            </div>
          </div>

          {/* MOBILE 1st row: Ring Spindles & Airjet Spinning */}
          <div
            className={`grid grid-cols-2 gap-6 md:hidden pt-3 max-w-xl mx-auto ${
              isVisible ? "animate-fade-in-delay3" : "opacity-0"
            }`}
          >
            <Stat label="Ring Spindles" value={ringSpindles} color="text-green-600" />
            <Stat label="Airjet Spinning Positions" value={airjetSpinning} color="text-green-600" />
          </div>

          {/* MOBILE 2nd row: Tons, Sizing, Warpers */}
          <div
            className={`grid grid-cols-3 gap-6 md:hidden pt-3 max-w-xl mx-auto ${
              isVisible ? "animate-fade-in-delay3" : "opacity-0"
            }`}
          >
            <Stat label="Tons per month" value={tonsPerMonth} color="text-green-600" />
            <Stat label="Sizing Machines" value={sizing} color="text-green-600" />
            <Stat label="Direct Warpers" value={warpers} color="text-green-600" />
          </div>

          {/* MOBILE 3rd row: Power stat full width */}
          <div
            className={`pt-3 max-w-xl mx-auto md:hidden ${
              isVisible ? "animate-fade-in-delay3" : "opacity-0"
            }`}
          >
            <Stat
              label="Power (Units / Year)"
              value={power}
              color="text-green-600"
              formatValue={formatPowerValue}
            />
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in 0s both;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-in 0.2s both;
        }
        .animate-fade-in-delay2 {
          animation: fadeIn 1s ease-in 0.4s both;
        }
        .animate-fade-in-delay3 {
          animation: fadeIn 1s ease-in 0.6s both;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
