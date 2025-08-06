// import React, { useEffect, useRef, useState } from "react";

// // Count-up animation hook
// function useCountUp(end: number, duration = 2000) {
//   const [value, setValue] = useState(0);
//   const raf = useRef(0);

//   useEffect(() => {
//     const start = performance.now();

//     function animate(now: number) {
//       const progress = Math.min((now - start) / duration, 1);
//       setValue(Math.floor(progress * end));
//       if (progress < 1) {
//         raf.current = requestAnimationFrame(animate);
//       } else {
//         setValue(end);
//       }
//     }

//     raf.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(raf.current);
//   }, [end, duration]);

//   return value;
// }

// export default function AboutSection() {
//   const ringSpindles = useCountUp(14304);
//   const airjetSpinning = useCountUp(960, 2200);
//   const tonsPerMonth = useCountUp(800, 2600);

//   return (
//     <section className="w-full bg-white flex flex-col md:flex-row items-stretch min-h-[600px] px-4 sm:px-8 lg:px-16">
//       {/* Left Side: Image */}
//       <div className="md:w-1/2 w-full mb-8 md:mb-0 flex justify-center">
//         <img
//           src="/public/assets/sample1.png"
//           alt="Factory workers"
//           className="w-full max-w-[700px] h-auto object-cover rounded-none md:rounded-l-2xl"
//           loading="lazy"
//         />
//       </div>

//       {/* Right Side: About Content */}
//       <div className="md:w-1/2 w-full flex items-center bg-white">
//         <div className="w-full px-4 sm:px-6 md:px-8 py-10 md:py-12 max-w-3xl mx-auto">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-left animate-fade-in">
//             About Us
//           </h2>
//           <p className="text-base sm:text-lg text-gray-600 mb-6 text-left animate-fade-in-delay max-w-xl">
//             VTS is a third-generation family company with a legacy of over half a century in the textile industry.
//           </p>
//           <p className="text-gray-700 mb-4 animate-fade-in-delay2 text-left max-w-xl">
//             The company also has a weaving preparatory division with
//             <span className="font-semibold text-green-700"> 2 sizing</span> and
//             <span className="font-semibold text-green-700"> 4 direct warping machines</span>.
//           </p>
//           <p className="text-gray-600 text-base mb-10 animate-fade-in-delay3 text-left max-w-xl">
//             The dynamic leadership team, dedicated workforce, and creative customers all play a pivotal role in the company&apos;s ongoing growth and success.
//           </p>
//           {/* Stats */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 animate-fade-in-delay3 max-w-xl">
//             <Stat label="Ring Spindles" value={ringSpindles} color="text-green-600" />
//             <Stat label="Airjet Spinning Positions" value={airjetSpinning} color="text-green-600" />
//             <Stat label="Tons per month" value={tonsPerMonth} color="text-green-600" />
//           </div>
//         </div>
//       </div>

//       {/* Animation Keyframes - Place at end of Section */}
//       <style jsx>{`
//         .animate-fade-in { animation: fadeIn 1s ease-in 0s both; }
//         .animate-fade-in-delay { animation: fadeIn 1s ease-in 0.2s both; }
//         .animate-fade-in-delay2 { animation: fadeIn 1s ease-in 0.4s both; }
//         .animate-fade-in-delay3 { animation: fadeIn 1s ease-in 0.6s both; }
//         @keyframes fadeIn {
//           0% { opacity: 0; transform: translateY(16px);}
//           100% { opacity: 1; transform: translateY(0);}
//         }
//       `}</style>
//     </section>
//   );
// }

// function Stat({ label, value, color }: { label: string; value: number; color: string }) {
//   return (
//     <div className="flex flex-col items-center">
//       <span className={`text-4xl font-extrabold ${color} tracking-wide`} style={{ minHeight: "56px" }}>
//         {value.toLocaleString()}
//       </span>
//       <span className="mt-2 text-gray-700 font-medium text-center">{label}</span>
//     </div>
//   );
// }


import React, { useEffect, useRef, useState } from "react";

// Count-up animation hook; only start animating when `start` is true
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

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Observe when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
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

  // Start animations only when visible
  const ringSpindles = useCountUp(14304, isVisible);
  const airjetSpinning = useCountUp(960, isVisible, 2200);
  const tonsPerMonth = useCountUp(800, isVisible, 2600);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white flex flex-col md:flex-row items-stretch min-h-[600px] px-4 sm:px-8 lg:px-16"
    >
      {/* Left Side: Image */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0 flex justify-center">
        <img
          src="/public/assets/sample1.png"
          alt="Factory workers"
          className="w-full max-w-[700px] h-[500px] object-cover rounded-none md:rounded-l-2xl"
          loading="lazy"
        />
      </div>

      {/* Right Side: About Content */}
      <div className="md:w-1/2 w-full flex items-center bg-white">
        <div className="w-full px-4 sm:px-6 md:px-8 py-10 md:py-12 max-w-3xl mx-auto ">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-left mt-[-100px] ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            About Us
          </h2>
          <p
            className={`text-base sm:text-lg text-gray-600 mb-6 text-left max-w-xl ${
              isVisible ? "animate-fade-in-delay" : "opacity-0"
            }`}
          >
            VTS is a third-generation family company with a legacy of over half a century in the textile industry.
          </p>
          <p
            className={`text-gray-700 mb-4 text-left max-w-xl ${
              isVisible ? "animate-fade-in-delay2" : "opacity-0"
            }`}
          >
            The company also has a weaving preparatory division with
            <span className="font-semibold text-green-700"> 2 sizing</span> and
            <span className="font-semibold text-green-700"> 4 direct warping machines</span>.
          </p>
          <p
            className={`text-gray-600 text-base mb-10 text-left max-w-xl ${
              isVisible ? "animate-fade-in-delay3" : "opacity-0"
            }`}
          >
            The dynamic leadership team, dedicated workforce, and creative customers all play a pivotal role in the company&apos;s ongoing growth and success.
          </p>
          {/* Stats */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 max-w-xl ${
              isVisible ? "animate-fade-in-delay3" : "opacity-0"
            }`}
          >
            <Stat label="Ring Spindles" value={ringSpindles} color="text-green-600" />
            <Stat label="Airjet Spinning Positions" value={airjetSpinning} color="text-green-600" />
            <Stat label="Tons per month" value={tonsPerMonth} color="text-green-600" />
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
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

function Stat({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className={`text-4xl font-extrabold ${color} tracking-wide`} style={{ minHeight: "56px" }}>
        {value.toLocaleString()}
      </span>
      <span className="mt-2 text-gray-700 font-medium text-center">{label}</span>
    </div>
  );
}
