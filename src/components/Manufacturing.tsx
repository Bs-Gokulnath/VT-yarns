
// const MANUFACTURING_IMAGES = [
//   { src: "/assets/manufacturing/blow-room.jpg", alt: "Blow Room" },
//   { src: "/assets/manufacturing/carding.jpg", alt: "Carding" },
//   { src: "/assets/manufacturing/spinning.jpeg", alt: "Spinning" },
//   { src: "/assets/manufacturing/ring spin-1.jpg", alt: "Ring Spinning" },
//   { src: "/assets/manufacturing/auto coner.jpeg", alt: "Auto Coner" },
//   { src: "/assets/manufacturing/warping.jpg", alt: "Warping" },
//   { src: "/assets/manufacturing/sizing.jpeg", alt: "Sizing" },
//   { src: "/assets/manufacturing/vortex_main.jpg", alt: "Vortex Main" },
//   { src: "/assets/manufacturing/ring spin.webp", alt: "Ring Spinning" },
// ];

// import { useEffect, useState } from "react";

// export default function ManufacturingSection() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768); // md breakpoint
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const displayedImages = isMobile
//     ? MANUFACTURING_IMAGES.slice(0, -1) // Remove last one in mobile
//     : MANUFACTURING_IMAGES;

//   return (
//     <section
//       id="products"
//       className="w-full bg-white py-12 flex flex-col items-center"
//     >
//       {/* Title */}
//       <div className="text-center mb-16">
//         <span className="text-green-600 font-semibold text-sm tracking-wider uppercase pt-10">
//           OUR PRODUCTION
//         </span>
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
//           Manufacturing
//         </h2>
//       </div>

//       {/* Zig-Zag Row of Images */}
//       <div className="flex flex-wrap justify-center gap-1 px-2 md:px-0">
//         {displayedImages.map((img, idx) => (
//           <div
//             key={idx}
//             className={`group transition-all duration-300 transform ${
//               idx % 2 === 0
//                 ? "translate-y-3 md:translate-y-6"
//                 : "-translate-y-3 md:-translate-y-6"
//             }`}
//           >
//             <div
//               className={`w-20 sm:w-24 md:w-32 ${
//                 isMobile ? "h-68" : "h-58 sm:h-72 md:h-80"
//               } bg-gray-100 overflow-hidden 
//                          transition-all duration-300 ease-in-out 
//                          group-hover:w-24 sm:group-hover:w-28 md:group-hover:w-60 
//                          group-hover:scale-105 md:group-hover:scale-110 
//                          group-hover:shadow-2xl relative`}
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="w-full h-full object-cover"
//                 draggable={false}
//                 onError={(e) => {
//                   console.error(`Failed to load image: ${img.src}`);
//                   e.currentTarget.style.display = "none";
//                 }}
//                 onLoad={() => {
//                   console.log(`Successfully loaded image: ${img.src}`);
//                 }}
//               />
//               {/* Hover overlay with image name */}
//               <div className="absolute inset-0 bg-opacity-0 group-hover:bg-black group-hover:bg-opacity-50 transition-all duration-300 flex items-start justify-center">
//                 <div className="text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 md:-translate-y-4 group-hover:translate-y-0">
//                   <p className="text-xs sm:text-sm md:text-3xl font-semibold">
//                     {img.alt}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// import { useEffect, useState } from "react";

// const MANUFACTURING_IMAGES = [
//   { src: "/assets/manufacturing/blow-room.jpg", alt: "Blow Room" },
//   { src: "/assets/manufacturing/carding.jpg", alt: "Carding" },
//   { src: "/assets/manufacturing/spinning.jpeg", alt: "Spinning" },
//   { src: "/assets/manufacturing/ring spin-1.jpg", alt: "Ring Spinning" },
//   { src: "/assets/manufacturing/auto coner.jpeg", alt: "Auto Coner" },
//   { src: "/assets/manufacturing/warping.jpg", alt: "Warping" },
//   { src: "/assets/manufacturing/sizing.jpeg", alt: "Sizing" },
//   { src: "/assets/manufacturing/vortex_main.jpg", alt: "Vortex Main" },
//   { src: "/assets/manufacturing/ring spin.webp", alt: "Ring Spinning" },
// ];

// export default function ManufacturingSection() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768); // md breakpoint
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const displayedImages = isMobile
//     ? MANUFACTURING_IMAGES.slice(0, -1) // Remove last one in mobile
//     : MANUFACTURING_IMAGES;

//   return (
//     <section
//       id="products"
//       className="w-full bg-white py-12 flex flex-col items-center"
//     >
//       {/* Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
//           MANUFACTURING
//         </h2>
//       </div>

//       {/* Zig-Zag Row of Images */}
//       <div className="flex flex-wrap justify-center gap-1 px-2 md:px-0">
//         {displayedImages.map((img, idx) => (
//           <div
//             key={idx}
//             className={`group transition-all duration-300 transform ${
//               idx % 2 === 0
//                 ? "translate-y-3 md:translate-y-6"
//                 : "-translate-y-3 md:-translate-y-6"
//             }`}
//           >
//             <div
//               className={`w-20 sm:w-24 md:w-32 ${
//                 isMobile ? "h-68" : "h-58 sm:h-72 md:h-80"
//               } bg-gray-100 overflow-hidden 
//                          transition-all duration-300 ease-in-out 
//                          group-hover:w-24 sm:group-hover:w-28 md:group-hover:w-60 
//                          group-hover:scale-105 md:group-hover:scale-110 
//                          group-hover:shadow-2xl relative`}
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="w-full h-full object-cover"
//                 draggable={false}
//                 onError={(e) => {
//                   console.error(`Failed to load image: ${img.src}`);
//                   e.currentTarget.style.display = "none";
//                 }}
//                 onLoad={() => {
//                   console.log(`Successfully loaded image: ${img.src}`);
//                 }}
//               />
//               {/* Hover overlay with image name (keep image visible!) */}
//               <div className="absolute inset-0 bg-black/35 group-hover:bg-black/35 transition-all duration-300 flex items-start justify-center">
//                 <div className="text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 md:-translate-y-4 group-hover:translate-y-0">
//                   <p className="text-xs sm:text-sm md:text-3xl font-semibold">
//                     {img.alt}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// import { useEffect, useState } from "react";

// const MANUFACTURING_IMAGES = [
//   { src: "/assets/manufacturing/blow-room.jpg", alt: "BLOW ROOM" },
//   { src: "/assets/manufacturing/carding.jpg", alt: "CARDING" },
//   { src: "/assets/manufacturing/spinning.jpeg", alt: "SPINNING" },
//   { src: "/assets/manufacturing/ring spin-1.jpg", alt: "RING SPINNING" },
//   { src: "/assets/manufacturing/auto coner.jpeg", alt: "AUTO CONER" },
//   { src: "/assets/manufacturing/warping.jpg", alt: "WARPING" },
//   { src: "/assets/manufacturing/sizing.jpeg", alt: "SIZING" },
//   { src: "/assets/manufacturing/vortex_main.jpg", alt: "VORTEX MAIN" },
//   { src: "/assets/manufacturing/ring spin.webp", alt: "RING SPINNING" },
// ];

// export default function ManufacturingSection() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const displayedImages = isMobile
//     ? MANUFACTURING_IMAGES.slice(0, -1)
//     : MANUFACTURING_IMAGES;

//   return (
//     <section id="products" className="w-full bg-white py-12 flex flex-col items-center">
//       {/* Title */}
//       <div className="text-center mb-12">
//         <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
//           OUR PRODUCTION
//         </span>
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
//           Manufacturing
//         </h2>
//       </div>

//       {/* Chessboard layout - alternating text and image */}
//       <div className="w-full flex justify-center overflow-x-auto">
//         <div className="flex">
//           {displayedImages.map((item, idx) => (
//             <div key={idx} className="flex flex-col items-center">
//               {/* If idx is even: text top + image bottom */}
//               {/* If idx is odd: image top + text bottom */}
//               {idx % 2 === 0 ? (
//                 <>
//                   {/* Text box */}
//                   <div className=" w-26 h-16 md:w-36 md:h-16 flex items-center justify-center font-bold text-gray-800 bg-white text-center select-none">
//                     {item.alt}
//                   </div>
//                   {/* Image box */}
//                   <div className="w-26 h-28 md:w-36 md:h-36 overflow-hidden bg-gray-100">
//                     <img
//                       src={item.src}
//                       alt={item.alt}
//                       className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
//                       draggable={false}
//                       onError={(e) => (e.currentTarget.style.display = "none")}
//                     />
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   {/* Image box */}
//                   <div className="w-26 h-28 md:w-36 md:h-36 overflow-hidden bg-gray-100">
//                     <img
//                       src={item.src}
//                       alt={item.alt}
//                       className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
//                       draggable={false}
//                       onError={(e) => (e.currentTarget.style.display = "none")}
//                     />
//                   </div>
//                   {/* Text box */}
//                   <div className=" w-26 h-16 md:w-36 md:h-16 flex items-center justify-center font-bold text-gray-800 bg-white text-center select-none">
//                     {item.alt}
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import { useEffect, useState } from "react";

// const MANUFACTURING_IMAGES = [
//   { src: "/assets/manufacturing/blow-room.jpg", alt: "BLOW ROOM" },
//   { src: "/assets/manufacturing/carding.jpg", alt: "CARDING" },
//   { src: "/assets/manufacturing/spinning.jpeg", alt: "SPINNING" },
//   { src: "/assets/manufacturing/ring spin-1.jpg", alt: "RING SPINNING" },
//   { src: "/assets/manufacturing/auto coner.jpeg", alt: "AUTO CONER" },
//   { src: "/assets/manufacturing/warping.jpg", alt: "WARPING" },
//   { src: "/assets/manufacturing/sizing.jpeg", alt: "SIZING" },
//   { src: "/assets/manufacturing/vortex_main.jpg", alt: "VORTEX MAIN" },
//   { src: "/assets/manufacturing/ring spin.webp", alt: "RING SPINNING" },
// ];

// export default function ManufacturingSection() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const displayedImages = isMobile
//     ? MANUFACTURING_IMAGES.slice(0, -1)
//     : MANUFACTURING_IMAGES;

//   return (
//     <section
//       id="products"
//       className="w-full bg-white py-12 flex flex-col items-center"
//       style={{ overflowX: "auto" }}
//     >
//       {/* Title */}
//       <div className="text-center mb-12">
//         <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
//           OUR PRODUCTION
//         </span>
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
//           Manufacturing
//         </h2>
//       </div>

//       {/* Chessboard layout */}
//       <div className="w-full flex justify-center">
//         <div className="flex relative" style={{ gap: 0 }}>
//           {displayedImages.map((item, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col items-center relative z-0"
//               style={{ overflow: "visible" }}
//             >
//               {idx % 2 === 0 ? (
//                 <>
//                   {/* Text */}
//                   <div className="w-26 h-16 md:w-36 md:h-16 flex items-center justify-center font-bold text-gray-800 bg-white text-center select-none">
//                     {item.alt}
//                   </div>

//                   {/* Image */}
//                   <div
//                     className="w-26 h-28 md:w-36 md:h-36 bg-gray-100 overflow-visible"
//                     style={{ overflow: "visible" }}
//                   >
//                     <img
//                       src={item.src}
//                       alt={item.alt}
//                       draggable={false}
//                       onError={(e) => (e.currentTarget.style.display = "none")}
//                       className="w-full h-full object-cover transition-transform duration-500 ease-in-out cursor-pointer"
//                       style={{ transformOrigin: "center bottom" }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.transform = "scale(1.8) translateY(-20px)";
//                         e.currentTarget.style.zIndex = "50";
//                         e.currentTarget.style.position = "relative";
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.transform = "scale(1)";
//                         e.currentTarget.style.zIndex = "0";
//                         e.currentTarget.style.position = "static";
//                       }}
//                     />
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   {/* Image */}
//                   <div
//                     className="w-26 h-28 md:w-36 md:h-36 bg-gray-100 overflow-visible"
//                     style={{ overflow: "visible" }}
//                   >
//                     <img
//                       src={item.src}
//                       alt={item.alt}
//                       draggable={false}
//                       onError={(e) => (e.currentTarget.style.display = "none")}
//                       className="w-full h-full object-cover transition-transform duration-500 ease-in-out cursor-pointer"
//                       style={{ transformOrigin: "center bottom" }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.transform = "scale(1.8) translateY(-20px)";
//                         e.currentTarget.style.zIndex = "50";
//                         e.currentTarget.style.position = "relative";
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.transform = "scale(1)";
//                         e.currentTarget.style.zIndex = "0";
//                         e.currentTarget.style.position = "static";
//                       }}
//                     />
//                   </div>

//                   {/* Text */}
//                   <div className="w-26 h-16 md:w-36 md:h-16 flex items-center justify-center font-bold text-gray-800 bg-white text-center select-none">
//                     {item.alt}
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import { useEffect, useState } from "react";

const MANUFACTURING_IMAGES = [
  { src: "/assets/manufacturing/blow-room.jpg", alt: "BLOW ROOM" },
  { src: "/assets/manufacturing/carding.jpg", alt: "CARDING" },
  { src: "/assets/manufacturing/spinning.jpeg", alt: "SPINNING" },
  { src: "/assets/manufacturing/ring spin-1.jpg", alt: "RING SPINNING" },
  { src: "/assets/manufacturing/auto coner.jpeg", alt: "AUTO CONER" },
  { src: "/assets/manufacturing/warping.jpg", alt: "WARPING" },
  { src: "/assets/manufacturing/sizing.jpeg", alt: "SIZING" },
  { src: "/assets/manufacturing/vortex_main.jpg", alt: "VORTEX MAIN" },
  { src: "/assets/manufacturing/ring spin.webp", alt: "RING SPINNING" },
];

export default function ManufacturingSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null); // track which image is hovered

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedImages = isMobile
    ? MANUFACTURING_IMAGES.slice(0, -1)
    : MANUFACTURING_IMAGES;

  return (
    <section
      id="products"
      className="w-full bg-white py-12 flex flex-col items-center"
      style={{ overflowX: "auto" }}
    >
      {/* Title */}
      <div className="text-center mb-12">
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
          OUR PRODUCTION
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
          Manufacturing
        </h2>
      </div>

      {/* Chessboard layout */}
      <div className="w-full flex justify-center">
        <div className="flex relative" style={{ gap: 0 }}>
          {displayedImages.map((item, idx) => {
            const isHovered = hoverIndex === idx;
            return (
              <div
                key={idx}
                className="flex flex-col items-center"
                style={{
                  overflow: "visible",
                  position: "relative",
                  zIndex: isHovered ? 50 : 0, // bring hovered item to front
                  transition: "z-index 0.3s ease",
                }}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {idx % 2 === 0 ? (
                  <>
                    {/* Text */}
                    <div className="w-26 h-16 md:w-36 md:h-36 flex items-center justify-center font-bold text-gray-800 bg-white text-center select-none">
                      {item.alt}
                    </div>

                    {/* Image */}
                    <div
                      className="w-26 h-28 md:w-36 md:h-36 bg-gray-100 overflow-visible"
                      style={{ overflow: "visible" }}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        draggable={false}
                        onError={(e) => (e.currentTarget.style.display = "none")}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out cursor-pointer"
                        style={{ transformOrigin: "center bottom" }}
                        // scale up and move up on hover
                        style={{
                          transformOrigin: "center bottom",
                          transition: "transform 0.5s ease",
                          transform: isHovered
                            ? "scale(1.8) translateY(-20px)"
                            : "scale(1)",
                          position: isHovered ? "relative" : "static",
                          zIndex: isHovered ? 50 : 0,
                        }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image */}
                    <div
                      className="w-26 h-28 md:w-36 md:h-36 bg-gray-100 overflow-visible"
                      style={{ overflow: "visible" }}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        draggable={false}
                        onError={(e) => (e.currentTarget.style.display = "none")}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out cursor-pointer"
                        style={{
                          transformOrigin: "center bottom",
                          transition: "transform 0.5s ease",
                          transform: isHovered
                            ? "scale(1.8) translateY(-20px)"
                            : "scale(1)",
                          position: isHovered ? "relative" : "static",
                          zIndex: isHovered ? 50 : 0,
                        }}
                      />
                    </div>

                    {/* Text */}
                    <div className="w-26 h-16 md:w-36 md:h-16 flex items-center justify-center font-bold text-gray-800 bg-white text-center select-none">
                      {item.alt}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
