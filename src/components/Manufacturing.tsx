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

//   // Show images on mobile: first 6 (2 rows x 3 columns), else all 9 (3 rows x 3 columns)
//   const imagesToShow = isMobile
//     ? MANUFACTURING_IMAGES.slice(0, 6)
//     : MANUFACTURING_IMAGES;

//   // Build chessboard grid (3 cols per row)
//   const columns = 3;
//   const rows = [];
//   for (let i = 0; i < imagesToShow.length; i += columns) {
//     rows.push(imagesToShow.slice(i, i + columns));
//   }

//   // Add extra tiles to the end of the first row
//   if (rows.length > 0) {
//     rows[0].push({ alt: "EXTRA TEXT", src: "/assets/manufacturing/blow-room.jpg" });
//     rows[0].push({ alt: "EXTRA IMAGE", src: "/assets/manufacturing/another-extra-image.jpg" });
//   }

//   // Add extra tiles to the second row
//   if (rows.length > 1) {
//     rows[1].push({ alt: "ADDED IMAGE", src: "/assets/manufacturing/extra-row2-image.jpg" });
//     rows[1].push({ alt: "ADDED TEXT", src: "/assets/manufacturing/blank.jpg" }); // blank image for text only
//     rows[1].push({ alt: "ADDED IMAGE", src: "/assets/manufacturing/extra-row2-image2.jpg" });
//   }

//   // Add extra tiles to the third row as requested
//   if (rows.length > 2) {
//     rows[2].push({ alt: "NEW TEXT", src: "/assets/manufacturing/blank.jpg" }); // text only
//     rows[2].push({ alt: "NEW IMAGE", src: "/assets/manufacturing/extra-row3-image.jpg" });
//     rows[2].push({ alt: "NEW TEXT", src: "/assets/manufacturing/blank.jpg" }); // text only
//   }

//   return (
//     <section
//       id="products"
//       className="w-full bg-white py-12 flex flex-col items-center"
//     >
//       {/* Title */}
//       <div className="text-center mb-8">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//           MANUFACTURING
//         </h2>
//       </div>

//       {/* Chessboard grid */}
//       <div className="flex flex-col items-center">
//         {rows.map((row, rowIdx) => (
//           <div
//             key={rowIdx}
//             className={`flex flex-row justify-center ${
//               rowIdx === 0 ? "-ml-36" : ""
//             }`} // shift first row left
//           >
//             {row.map((item, colIdx) => {
//               // Chessboard: Odd rows start with image, even rows with text
//               const showImage = (rowIdx + colIdx) % 2 === 0;
//               return (
//                 <div key={colIdx} className="flex flex-col items-center">
//                   {showImage ? (
//                     <>
//                       <div className="w-28 h-28 md:w-36 md:h-36 bg-gray-100 overflow-hidden flex items-center justify-center">
//                         {/* If the src is a blank or intentionally missing, don't render an image */}
//                         {item.src !== "/assets/manufacturing/blank.jpg" ? (
//                           <img
//                             src={item.src}
//                             alt={item.alt}
//                             className="w-full h-full object-cover"
//                             draggable={false}
//                             style={{
//                               transition: "transform 0.4s",
//                             }}
//                           />
//                         ) : (
//                           <span />
//                         )}
//                       </div>
//                     </>
//                   ) : (
//                     <>
//                       <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center font-bold text-gray-800 bg-white text-center select-none">
//                         {item.alt}
//                       </div>
//                     </>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




// import { useEffect, useState } from "react";

// const MANUFACTURING_IMAGES = [
//   { src: "/assets/manufacturing/blow-room.jpg", alt: "BLOW ROOM" }, // 1
//   { src: "/assets/manufacturing/carding.jpg", alt: "CARDING" }, // 2
//   { src: "/assets/manufacturing/carding.jpg", alt: "CARDING" }, // 3 (duplicate as requested)
//   { src: "/assets/manufacturing/ring spin-1.jpg", alt: "RING SPINNING" }, // 4
//   { src: "/assets/manufacturing/vortex_main.jpg", alt: "VORTEX MAIN" }, // 5
//   { src: "/assets/manufacturing/auto coner.jpeg", alt: "AUTO CONER" }, // 6
//   { src: "/assets/manufacturing/warping.jpg", alt: "WARPING" }, // 7
//   { src: "/assets/manufacturing/sizing.jpeg", alt: "SIZING" }, // 8
//   { src: "/assets/manufacturing/sizing.jpeg", alt: "SIZING" }, // 9 (duplicate as requested)
// ];

// export default function ManufacturingSection() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Show images on mobile: first 6 (2 rows x 3 columns), else all 9 (3 rows x 3 columns)
//   const imagesToShow = isMobile
//     ? MANUFACTURING_IMAGES.slice(0, 6)
//     : MANUFACTURING_IMAGES;

//   // Build chessboard grid (3 cols per row)
//   const columns = 3;
//   const rows = [];
//   for (let i = 0; i < imagesToShow.length; i += columns) {
//     rows.push(imagesToShow.slice(i, i + columns));
//   }

//   // Add extra tiles to the end of the first row
//   if (rows.length > 0) {
//     rows[0].push({ alt: "EXTRA TEXT", src: "/assets/manufacturing/blow-room.jpg" });
//     rows[0].push({ alt: "EXTRA IMAGE", src: "/assets/manufacturing/another-extra-image.jpg" });
//   }

//   // Add extra tiles to the second row
//   if (rows.length > 1) {
//     rows[1].push({ alt: "ADDED IMAGE", src: "/assets/manufacturing/extra-row2-image.jpg" });
//     rows[1].push({ alt: "ADDED TEXT", src: "/assets/manufacturing/blank.jpg" }); // blank image for text only
//     rows[1].push({ alt: "ADDED IMAGE", src: "/assets/manufacturing/extra-row2-image2.jpg" });
//   }

//   // Add extra tiles to the third row as requested
//   if (rows.length > 2) {
//     rows[2].push({ alt: "NEW TEXT", src: "/assets/manufacturing/blank.jpg" }); // text only
//     rows[2].push({ alt: "NEW IMAGE", src: "/assets/manufacturing/extra-row3-image.jpg" });
//     rows[2].push({ alt: "NEW TEXT", src: "/assets/manufacturing/blank.jpg" }); // text only
//   }

//   return (
//     <section
//       id="products"
//       className="w-full bg-white py-12 flex flex-col items-center"
//     >
//       {/* Title */}
//       <div className="text-center mb-8">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//           MANUFACTURING
//         </h2>
//       </div>

//       {/* Chessboard grid */}
//       <div className="flex flex-col items-center">
//         {rows.map((row, rowIdx) => (
//           <div
//             key={rowIdx}
//             className={`flex flex-row justify-center ${
//               rowIdx === 0 ? "-ml-36" : ""
//             }`} // shift first row left
//           >
//             {row.map((item, colIdx) => {
//               // Chessboard: Odd rows start with image, even rows with text
//               const showImage = (rowIdx + colIdx) % 2 === 0;
//               return (
//                 <div key={colIdx} className="flex flex-col items-center">
//                   {showImage ? (
//                     <>
//                       <div className="w-28 h-28 md:w-36 md:h-36 bg-gray-100 overflow-hidden flex items-center justify-center">
//                         {/* If the src is a blank or intentionally missing, don't render an image */}
//                         {item.src !== "/assets/manufacturing/blank.jpg" ? (
//                           <img
//                             src={encodeURI(item.src)}
//                             alt={item.alt}
//                             className="w-full h-full object-cover"
//                             draggable={false}
//                             onError={(e) => (e.currentTarget.style.display = "none")}
//                             style={{
//                               transition: "transform 0.4s",
//                             }}
//                           />
//                         ) : (
//                           <span />
//                         )}
//                       </div>
//                     </>
//                   ) : (
//                     <>
//                       <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center font-bold text-gray-800 bg-white text-center select-none">
//                         {item.alt}
//                       </div>
//                     </>
//                   )}
//                 </div>
//               );
//             })}
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
//   const [hoverIndex, setHoverIndex] = useState(null); // track which image is hovered

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
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
//           MANUFACTURING
//         </h2>
//       </div>

//       {/* Chessboard layout */}
//       <div className="w-full flex justify-center">
//         <div className="flex relative" style={{ gap: 0 }}>
//           {displayedImages.map((item, idx) => {
//             const isHovered = hoverIndex === idx;
//             return (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center"
//                 style={{
//                   overflow: "visible",
//                   position: "relative",
//                   zIndex: isHovered ? 50 : 0, // bring hovered item to front
//                   transition: "z-index 0.3s ease",
//                 }}
//                 onMouseEnter={() => setHoverIndex(idx)}
//                 onMouseLeave={() => setHoverIndex(null)}
//               >
//                 {idx % 2 === 0 ? (
//                   <>
//                     {/* Text */}
//                     <div className="w-26 h-16 md:w-36 md:h-36 flex items-center justify-center font-bold text-gray-800  text-center select-none">
//                       {item.alt}
//                     </div>

//                     {/* Image */}
//                     <div
//                       className="w-26 h-28 md:w-36 md:h-36 overflow-visible"
//                       style={{ overflow: "visible" }}
//                     >
//                       <img
//                         src={item.src}
//                         alt={item.alt}
//                         draggable={false}
//                         onError={(e) => (e.currentTarget.style.display = "none")}
//                         className="w-full h-full object-cover transition-transform duration-500 ease-in-out cursor-pointer"
//                         style={{ transformOrigin: "center bottom" }}
//                         // scale up and move up on hover
//                         style={{
//                           transformOrigin: "center bottom",
//                           transition: "transform 0.5s ease",
//                           transform: isHovered
//                             ? "scale(1.8) translateY(-20px)"
//                             : "scale(1)",
//                           position: isHovered ? "relative" : "static",
//                           zIndex: isHovered ? 50 : 0,
//                         }}
//                       />
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     {/* Image */}
//                     <div
//                       className="w-26 h-28 md:w-36 md:h-36 overflow-visible"
//                       style={{ overflow: "visible" }}
//                     >
//                       <img
//                         src={item.src}
//                         alt={item.alt}
//                         draggable={false}
//                         onError={(e) => (e.currentTarget.style.display = "none")}
//                         className="w-full h-full object-cover transition-transform duration-500 ease-in-out cursor-pointer"
//                         style={{
//                           transformOrigin: "center bottom",
//                           transition: "transform 0.5s ease",
//                           transform: isHovered
//                             ? "scale(1.8) translateY(-20px)"
//                             : "scale(1)",
//                           position: isHovered ? "relative" : "static",
//                           zIndex: isHovered ? 50 : 0,
//                         }}
//                       />
//                     </div>

//                     {/* Text */}
//                     <div className="w-26 h-16 md:w-36 md:h-16 flex items-center justify-center font-bold text-gray-800  text-center select-none">
//                       {item.alt}
//                     </div>
//                   </>
//                 )}
//               </div>
//             );
//           })}
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
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedImages = MANUFACTURING_IMAGES;

  return (
    <section
      id="products"
      className="w-full bg-white py-12 flex flex-col items-center"
      style={{ overflowX: "hidden" }}
    >
      {/* Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          MANUFACTURING
        </h2>
        <div className="mx-auto w-16 h-[5px] rounded-full bg-green-600 mb-2"></div>

      </div>

      {/* Layout */}
      <div className="w-full flex justify-center px-2 sm:px-4 md:px-0">
        {isMobile ? (
          // MOBILE: grid with 2 images per row, same size
          <div className="grid grid-cols-2 gap-4">
            {displayedImages.map((item, idx) => {
              const isHovered = hoverIndex === idx;
              const isLastOdd =
                idx === displayedImages.length - 1 &&
                displayedImages.length % 2 !== 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center ${
                    isLastOdd ? "col-span-2 flex justify-center" : ""
                  }`}
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <div className="w-full aspect-square overflow-hidden max-w-[150px]">
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
                          ? "scale(1.5) translateY(-10px)"
                          : "scale(1)",
                        position: isHovered ? "relative" : "static",
                        zIndex: isHovered ? 50 : 0,
                      }}
                    />
                  </div>
                  <div className="mt-2 text-center font-bold text-gray-800 text-sm sm:text-base">
                    {item.alt}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // DESKTOP: original alternating layout
          <div className="flex relative flex-row">
            {displayedImages.map((item, idx) => {
              const isHovered = hoverIndex === idx;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center"
                  style={{
                    overflow: "visible",
                    position: "relative",
                    zIndex: isHovered ? 50 : 0,
                    transition: "z-index 0.3s ease",
                  }}
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  {idx % 2 === 0 ? (
                    <>
                      <div className="w-36 h-36 flex items-center justify-center font-bold text-gray-800 text-center select-none text-xl">
                        {item.alt}
                      </div>
                      <div className="w-36 h-36 overflow-visible">
                        <img
                          src={item.src}
                          alt={item.alt}
                          draggable={false}
                          onError={(e) =>
                            (e.currentTarget.style.display = "none")
                          }
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
                    </>
                  ) : (
                    <>
                      <div className="w-36 h-36 overflow-visible">
                        <img
                          src={item.src}
                          alt={item.alt}
                          draggable={false}
                          onError={(e) =>
                            (e.currentTarget.style.display = "none")
                          }
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
                      <div className="w-36 h-16 flex items-center justify-center font-bold text-gray-800 text-center select-none text-xl">
                        {item.alt}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
