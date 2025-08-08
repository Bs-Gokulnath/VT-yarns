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



import React, { useState, useEffect } from "react";

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

  // Trigger smooth transition after render
  useEffect(() => {
    if (isCombined && activeCert) {
      const timeout = setTimeout(() => setShowPreview(true), 50); // small delay for animation
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
        <div className="mx-auto w-16 h-[5px] rounded-full bg-green-600 mb-2"></div>
      </div>

      {/* Display Section */}
      {!isCombined ? (
        <div className="flex flex-row justify-center items-center gap-8 md:gap-16 w-full transition-all duration-700">
          {LOGOS.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Certification Logo ${idx + 1}`}
              className={`object-contain cursor-pointer hover:scale-105 transition duration-300 ${
                // cert5 image size increased to match others
                idx === 4 ? "w-[200px] h-[430px]" : "w-[200px] h-[430px]"
              }`}
              draggable={false}
              onClick={() => handleCombine(src)}
            />
          ))}
        </div>
      ) : (
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-2 w-full max-w-5xl transition-all duration-700">
          {/* Combined Circular Tile on Left */}
          <div
            onClick={handleExpand}
            className="cursor-pointer w-[150px] h-[150px] rounded-full bg-green-100 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-500"
          >
            <span className="text-xl font-semibold text-green-800">Certificates</span>
          </div>

          {/* Certificate Preview on Right */}
          {activeCert && (
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img
                src={activeCert}
                alt="Active Certification Preview"
                className={`w-[300px] h-[450px] object-contain rounded-md shadow-md transition-all duration-700 ease-in-out transform ${
                  showPreview ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
