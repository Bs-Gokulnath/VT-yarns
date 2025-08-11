// import React, { useState, useEffect } from "react";

// const LOGOS = [
//   "/assets/cert1.png",
//   "/assets/cert2.png",
//   "/assets/cert3.png",
//   "/assets/cert4.png",
//   "/assets/cert5.png",
// ];

// export default function LogoCertificationSection() {
//   const [isCombined, setIsCombined] = useState(false);
//   const [activeCert, setActiveCert] = useState<string | null>(null);
//   const [showPreview, setShowPreview] = useState(false);

//   const handleCombine = (src: string) => {
//     setActiveCert(src);
//     setIsCombined(true);
//   };

//   const handleExpand = () => {
//     setIsCombined(false);
//     setActiveCert(null);
//     setShowPreview(false);
//   };

//   // Trigger smooth transition after render
//   useEffect(() => {
//     if (isCombined && activeCert) {
//       const timeout = setTimeout(() => setShowPreview(true), 50); // small delay for animation
//       return () => clearTimeout(timeout);
//     }
//   }, [isCombined, activeCert]);

//   return (
//     <section className="w-full bg-white flex flex-col items-center px-4">
//       {/* Title */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide mb-2">
//           CERTIFICATIONS
//         </h2>
//         <div className="mx-auto w-16 h-[5px] rounded-full bg-green-600 mb-2"></div>
//       </div>

//       {/* Display Section */}
//       {!isCombined ? (
//         <div className="flex flex-row justify-center items-center gap-8 md:gap-16 w-full transition-all duration-700">
//           {LOGOS.map((src, idx) => (
//             <img
//               key={src}
//               src={src}
//               alt={`Certification Logo ${idx + 1}`}
//               className={`object-contain cursor-pointer hover:scale-105 transition duration-300 ${
//                 idx === 4 ? "w-[100px] h-[100px]" : "w-[200px] h-[430px]"
//               }`}
//               draggable={false}
//               onClick={() => handleCombine(src)}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="relative flex flex-col md:flex-row justify-between items-center gap-2 w-full max-w-5xl transition-all duration-700">
//           {/* Combined Circular Tile on Left */}
//           <div
//             onClick={handleExpand}
//             className="cursor-pointer w-[150px] h-[150px] rounded-full bg-green-100 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-500"
//           >
//             <span className="text-xl font-semibold text-green-800">Certificates</span>
//           </div>

//           {/* Certificate Preview on Right */}
//           {activeCert && (
//             <div className="w-full md:w-1/2 flex justify-center items-center">
//               <img
//                 src={activeCert}
//                 alt="Active Certification Preview"
//                 className={`w-[300px] h-[300px] object-contain rounded-md shadow-md transition-all duration-700 ease-in-out transform ${
//                   showPreview ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//                 }`}
//               />
//             </div>
//           )}
//         </div>
//       )}
//     </section>
//   );
// }



// import { useState, useEffect } from "react";

// const LOGOS = [
//   "/assets/cert1.png",
//   "/assets/cert2.png",
//   "/assets/cert3.png",
//   "/assets/cert4.png",
//   "/assets/cert5.png",
// ];

// export default function LogoCertificationSection() {
//   const [isCombined, setIsCombined] = useState(false);
//   const [activeCert, setActiveCert] = useState<string | null>(null);
//   const [showPreview, setShowPreview] = useState(false);

//   const handleCombine = (src: string) => {
//     setActiveCert(src);
//     setIsCombined(true);
//   };

//   const handleExpand = () => {
//     setIsCombined(false);
//     setActiveCert(null);
//     setShowPreview(false);
//   };

//   // Trigger smooth transition after render
//   useEffect(() => {
//     if (isCombined && activeCert) {
//       const timeout = setTimeout(() => setShowPreview(true), 50); // small delay for animation
//       return () => clearTimeout(timeout);
//     }
//   }, [isCombined, activeCert]);

//   return (
//     <section className="w-full bg-white flex flex-col items-center px-4">
//       {/* Title */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide mb-2">
//           CERTIFICATIONS
//         </h2>
//         <div className="mx-auto w-16 h-[5px] rounded-full bg-green-600 mb-2"></div>
//       </div>

//       {/* Display Section */}
//       {!isCombined ? (
//         <div className="flex flex-row justify-center items-center gap-8 md:gap-16 w-full transition-all duration-700">
//           {LOGOS.map((src, idx) => (
//             <img
//               key={src}
//               src={src}
//               alt={`Certification Logo ${idx + 1}`}
//               className={`object-contain cursor-pointer hover:scale-105 transition duration-300 ${
//                 // cert5 image size increased to match others
//                 idx === 4 ? "w-[200px] h-[430px]" : "w-[200px] h-[430px]"
//               }`}
//               draggable={false}
//               onClick={() => handleCombine(src)}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="relative flex flex-col md:flex-row justify-between items-center gap-2 w-full max-w-5xl transition-all duration-700">
//           {/* Combined Circular Tile on Left */}
//           <div
//             onClick={handleExpand}
//             className="cursor-pointer w-[150px] h-[150px] rounded-full bg-green-100 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-500"
//           >
//             <span className="text-xl font-semibold text-green-800">Certificates</span>
//           </div>

//           {/* Certificate Preview on Right */}
//           {activeCert && (
//             <div className="w-full md:w-1/2 flex justify-center items-center">
//               <img
//                 src={activeCert}
//                 alt="Active Certification Preview"
//                 className={`w-[300px] h-[450px] object-contain rounded-md shadow-md transition-all duration-700 ease-in-out transform ${
//                   showPreview ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//                 }`}
//               />
//             </div>
//           )}
//         </div>
//       )}
//     </section>
//   );
// }







// import { useState, useEffect } from "react";

// const LOGOS = [
//   "/assets/cert1.png",
//   "/assets/cert2.png",
//   "/assets/cert3.png",
//   "/assets/cert4.png",
//   "/assets/cert5.png",
// ];

// export default function LogoCertificationSection() {
//   const [isCombined, setIsCombined] = useState(false);
//   const [activeCert, setActiveCert] = useState<string | null>(null);
//   const [showPreview, setShowPreview] = useState(false);

//   const handleCombine = (src: string) => {
//     setActiveCert(src);
//     setIsCombined(true);
//   };

//   const handleExpand = () => {
//     setIsCombined(false);
//     setActiveCert(null);
//     setShowPreview(false);
//   };

//   // Trigger smooth transition after render
//   useEffect(() => {
//     if (isCombined && activeCert) {
//       const timeout = setTimeout(() => setShowPreview(true), 50); // small delay for animation
//       return () => clearTimeout(timeout);
//     }
//   }, [isCombined, activeCert]);

//   return (
//     <section className="w-full bg-white flex flex-col items-center px-4">
//       {/* Title */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide mb-2">
//           CERTIFICATIONS
//         </h2>
//         <div className="mx-auto w-16 h-[5px] rounded-full bg-green-600 mb-2"></div>
//       </div>

//       {/* Display Section */}
//       {!isCombined ? (
//         <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-16 w-full transition-all duration-700">
//           {LOGOS.map((src, idx) => (
//             <img
//               key={src}
//               src={src}
//               alt={`Certification Logo ${idx + 1}`}
//               className={`object-contain cursor-pointer hover:scale-105 transition duration-300 ${
//                 idx === 4
//                   ? "w-[120px] sm:w-[150px] md:w-[200px] h-auto max-h-[300px] md:max-h-[430px]"
//                   : "w-[120px] sm:w-[150px] md:w-[200px] h-auto max-h-[300px] md:max-h-[430px]"
//               }`}
//               draggable={false}
//               onClick={() => handleCombine(src)}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-5xl transition-all duration-700">
//           {/* Combined Circular Tile on Left */}
//           <div
//             onClick={handleExpand}
//             className="cursor-pointer w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full bg-green-100 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-500"
//           >
//             <span className="text-sm sm:text-lg md:text-xl font-semibold text-green-800">
//               Certificates
//             </span>
//           </div>

//           {/* Certificate Preview on Right */}
//           {activeCert && (
//             <div className="w-full md:w-1/2 flex justify-center items-center px-2">
//               <img
//                 src={activeCert}
//                 alt="Active Certification Preview"
//                 className={`w-[220px] sm:w-[280px] md:w-[300px] h-auto max-h-[350px] sm:max-h-[400px] md:max-h-[450px] object-contain rounded-md shadow-md transition-all duration-700 ease-in-out transform ${
//                   showPreview
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-4"
//                 }`}
//               />
//             </div>
//           )}
//         </div>
//       )}
//     </section>
//   );
// }





import { useState, useEffect } from "react";

const LOGOS = [
  "/assets/cert1.png",
  "/assets/cert2.png",
  "/assets/cert3.png",
  "/assets/cert4.png",
  "/assets/cert5.png",
];

export default function LogoCertificationSection() {
  const [isCombined, setIsCombined] = useState(false);
  const [activeCert, setActiveCert] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleCombine = (src: string) => {
    setActiveCert(src);
    setIsCombined(true);
  };

  const handleExpand = () => {
    setIsCombined(false);
    setActiveCert(null);
    setShowPreview(false);
  };

  useEffect(() => {
    if (isCombined && activeCert) {
      const timeout = setTimeout(() => setShowPreview(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [isCombined, activeCert]);

  return (
    <section className="w-full bg-white flex flex-col items-center px-4">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide mb-2">
          CERTIFICATIONS
        </h2>
        <div className="mx-auto w-20 h-[6px] rounded-full bg-green-600 mb-2"></div>
      </div>

      {/* Display Section */}
      {!isCombined ? (
        <div className="w-full max-w-5xl">
          {/* First row: first 3 logos centered */}
          <div className="flex justify-center gap-12 mb-10 flex-wrap">
            {LOGOS.slice(0, 3).map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Certification Logo ${idx + 1}`}
                className={`object-contain cursor-pointer hover:scale-105 transition duration-300 ${
                  idx === 1 // cert 2 smaller
                    ? "w-[140px] sm:w-[180px] md:w-[220px]"
                    : "w-[160px] sm:w-[200px] md:w-[260px]"
                } h-auto max-h-[350px] md:max-h-[480px]`}
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
                className={`object-contain cursor-pointer hover:scale-105 transition duration-300 ${
                  idx === 0 // cert 4 smaller
                    ? "w-[140px] sm:w-[180px] md:w-[220px]"
                    : "w-[160px] sm:w-[200px] md:w-[260px]"
                } h-auto max-h-[350px] md:max-h-[480px]`}
                draggable={false}
                onClick={() => handleCombine(src)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-5xl transition-all duration-700">
          {/* Active Certificate Image on Left */}
          {activeCert && (
            <div
              onClick={handleExpand}
              className="cursor-pointer w-[160px] sm:w-[200px] md:w-[260px] h-auto rounded-md shadow-lg hover:scale-105 transition-transform duration-500"
            >
              <img
                src={activeCert}
                alt="Active Certification"
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          )}

          {/* Certificate Preview on Right - Document style */}
          {activeCert && (
            <div className="w-full md:w-1/2 flex justify-center items-center px-4">
              <div className="w-full max-w-[450px] h-[600px] bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex justify-center items-center">
                <img
                  src={activeCert}
                  alt="Active Certification Preview"
                  className={`max-w-full max-h-full object-contain rounded-md transition-all duration-700 ease-in-out transform ${
                    showPreview ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
