// import React, { useState } from "react";

// // Example: 9 logo objects with src and preview image for hover
// const ARC_LOGOS = [
//   { logo: "/assets/viscose.png", preview: "/assets/viscose.png", alt: "Logo 1" },
//   { logo: "/assets/modal.png", preview: "/assets/modal.png", alt: "Logo 2" },
//   { logo: "/assets/excel.jpg", preview: "/assets/excel.jpg", alt: "Logo 3" },
//   { logo: "/assets/liveco.png", preview: "/assets/liveco.png", alt: "Logo 4" },
//   { logo: "/assets/bamboo.jpg", preview: "/assets/bamboo.jpg", alt: "Logo 5" },
//   { logo: "/assets/circulose.png", preview: "/assets/circulose.png", alt: "Logo 6" },
//   { logo: "/assets/tencel.png", preview: "/assets/tencel.png", alt: "Logo 7" },
//   { logo: "/assets/ecovera.png", preview: "/assets/ecovera.png", alt: "Logo 8" },
//   { logo: "/assets/refinra.png", preview: "/assets/refinra.png", alt: "Logo 9" },
// ];

// // Positions along an arc (tweak as needed for your exact slope)
// const ARC_POSITIONS = [
//   { top: "5%", left: "5%" },
//   { top: "13%", left: "11%" },
//   { top: "22.5%", left: "17%" },
//   { top: "33.5%", left: "22%" },
//   { top: "46%", left: "27%" },
//   { top: "59.5%", left: "29%" },
//   { top: "73.5%", left: "29%" },
//   { top: "86%", left: "25%" },
//   { top: "94%", left: "17%" },
// ];

// export default function YarnsSection() {
//   // Track which logo is hovered (null=none)
//   const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

//   // Image shown in center: hover preview, else default
//   const activePreview =
//     hoveredIdx != null
//       ? ARC_LOGOS[hoveredIdx].preview
//       : "/assets/yarn_default_preview.png"; // Use a generic preview image if no hover

//   return (
//     <section className="w-full bg-gray-50 flex flex-col items-center pt-0 md:pt-12 px-0">
//       {/* YARNS video strip at top */}
//       <div
//         className="w-full relative z-30 flex flex-col items-center overflow-hidden"
//         style={{ height: "84px" }}
//       >
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           src="https://www.shutterstock.com/shutterstock/videos/1107376703/preview/stock-footage-panoramic-cinematic-shot-cotton-thread-manufacturing-in-a-textile-oil-factory-organic-cotton-yarn.webm"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative flex justify-center items-center w-full h-full">
//           <span
//             className="text-white text-4xl md:text-5xl font-extrabold tracking-wide"
//             style={{ letterSpacing: "0.12em" }}
//           >
//             YARNS
//           </span>
//         </div>
//       </div>

//       {/* Main yarns bar */}
//       <div
//         className="
//           relative w-full
//           max-w-[1440px]
//           min-h-[480px]
//           flex flex-col md:flex-row
//           items-center justify-between
//           mt-[-74px] md:mt-[-100px]
//           z-20
//           px-4 sm:px-12 lg:px-24
//           py-12
//           bg-white rounded-3xl
//           overflow-visible
//         "
//       >
//         {/* Left slope/arc area */}
//         <div className="relative flex items-center justify-center w-full md:w-[470px] lg:w-[520px] h-[420px] shrink-0">
//           {/* SVG Slope background */}
//           <svg
//             viewBox="0 0 340 420"
//             className="absolute left-0 top-0 w-full h-full select-none pointer-events-none"
//             style={{ zIndex: 1 }}
//             aria-hidden
//           >
//             <path
//               d="M 0 0 Q 20 200 120 420 Q 105 235 340 70 V 420 H 0 Z"
//               fill="#f3f4f6"
//             />
//           </svg>
//           {/* Arc logos */}
//           {ARC_LOGOS.map((logo, idx) => (
//             <button
//               key={logo.logo + idx}
//               type="button"
//               className="absolute group"
//               style={{
//                 top: ARC_POSITIONS[idx].top,
//                 left: ARC_POSITIONS[idx].left,
//                 zIndex: 5,
//               }}
//               onMouseEnter={() => setHoveredIdx(idx)}
//               onMouseLeave={() => setHoveredIdx(null)}
//               tabIndex={0}
//               aria-label={logo.alt}
//             >
//               <div
//                 className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center ring-2 ring-white hover:ring-blue-400 transition shadow
//                   ${hoveredIdx === idx ? "scale-110 ring-4 ring-blue-400" : ""}
//                 `}
//                 style={{ boxShadow: "0 2px 12px 0 rgba(0,0,0,0.09)" }}
//               >
//                 <img
//                   src={logo.logo}
//                   alt={logo.alt}
//                   className="w-10 h-10 object-contain rounded-full"
//                   draggable={false}
//                 />
//               </div>
//             </button>
//           ))}
//           {/* Center hover image preview */}
//           <div
//             className="absolute left-[38%] top-[30%] w-[145px] h-[145px] flex items-center justify-center transition-all duration-300"
//             style={{
//               zIndex: 2,
//               // Optional border for clarity
//               borderRadius: "50%",
//               background: "rgba(255,255,255,0.82)",
//               boxShadow: "0 2px 20px 0 rgba(0,0,0,0.07)",
//             }}
//           >
//             <img
//               src={activePreview}
//               alt="Preview"
//               className="w-[96px] h-[96px] object-contain rounded-full pointer-events-none transition-transform duration-200"
//               style={{
//                 transform: hoveredIdx != null ? "scale(1.09)" : "scale(1)",
//               }}
//               loading="lazy"
//               draggable={false}
//             />
//           </div>
//         </div>
//         {/* Main text content */}
//         <div className="flex-1 flex flex-col justify-center items-start px-0 sm:px-10 py-24">
//           <span className="text-blue-700 font-semibold text-base tracking-wider uppercase mb-2">
//             Yarn Collection
//           </span>
//           <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//             Premium Yarns for Every Need
//           </h2>
//           <p className="text-base sm:text-xl text-gray-700 mb-12 max-w-2xl">
//             Our yarns are crafted with quality, sustainability, and comfort at their core.
//             <br className="hidden sm:block" />
//             Choose from a curated selection of premium fibers engineered for performance in every creation.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React, { useState } from "react";

// // 9 logos and their preview images (update paths as needed)
// const ARC_LOGOS = [
//   { logo: "/assets/viscose.png", preview: "/assets/viscose.png", alt: "Viscose" },
//   { logo: "/assets/modal.png", preview: "/assets/modal.png", alt: "Modal" },
//   { logo: "/assets/excel.jpg", preview: "/assets/excel.jpg", alt: "Excel" },
//   { logo: "/assets/liveco.png", preview: "/assets/liveco.png", alt: "Liveco" },
//   { logo: "/assets/bamboo.jpg", preview: "/assets/bamboo.jpg", alt: "Bamboo" },
//   { logo: "/assets/circulose.png", preview: "/assets/circulose.png", alt: "Circulose" },
//   { logo: "/assets/tencel.png", preview: "/assets/tencel.png", alt: "Tencel" },
//   { logo: "/assets/ecovera.png", preview: "/assets/ecovera.png", alt: "Ecovera" },
//   { logo: "/assets/refinra.png", preview: "/assets/refinra.png", alt: "Refinra" },
// ];

// // Arc positions for outside the slope
// const ARC_POSITIONS = [
//   { top: "6%", left: "-6%" },
//   { top: "17%", left: "-13%" },
//   { top: "33%", left: "-18%" },
//   { top: "51%", left: "-20%" },
//   { top: "70%", left: "-17%" },
//   { top: "85%", left: "-11%" },
//   { top: "93%", left: "-3%" },
//   { top: "70%", left: "17%" },
//   { top: "20%", left: "17%" },
// ];

// export default function YarnsSection() {
//   const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

//   return (
//     <section className="w-full bg-gray-50 flex flex-col items-center pt-0 md:pt-12 px-0">
//       {/* Video Yarns banner */}
//       <div className="w-full relative z-30 flex flex-col items-center overflow-hidden" style={{ height: "84px" }}>
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           src="https://www.shutterstock.com/shutterstock/videos/1107376703/preview/stock-footage-panoramic-cinematic-shot-cotton-thread-manufacturing-in-a-textile-oil-factory-organic-cotton-yarn.webm"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative flex justify-center items-center w-full h-full">
//           <span className="text-white text-4xl md:text-5xl font-extrabold tracking-wide" style={{ letterSpacing: "0.12em" }}>
//             YARNS
//           </span>
//         </div>
//       </div>

//       {/* Main Yarns bar content */}
//       <div className="relative w-full max-w-[1440px] min-h-[480px] flex flex-col md:flex-row items-center justify-between mt-[-74px] md:mt-[-100px] z-20 px-4 sm:px-12 lg:px-24 py-12 bg-white rounded-3xl overflow-visible">
//         {/* Left slope area with arc logos and preview */}
//         <div className="relative flex items-center justify-center w-full md:w-[380px] lg:w-[460px] h-[420px] shrink-0">
//           {/* SVG slope background */}
//           <svg
//             viewBox="0 0 340 420"
//             className="absolute left-0 top-0 w-full h-full select-none pointer-events-none"
//             style={{ zIndex: 1 }}
//             aria-hidden
//           >
//             <path
//               d="M 66 25 Q 8 200 110 410 Q 130 260 320 100"
//               fill="none"
//               stroke="#e5e7eb"
//               strokeWidth="22"
//             />
//           </svg>
//           {/* Arc logos positioned just outside the curve */}
//           {ARC_LOGOS.map((logo, idx) => (
//             <button
//               key={logo.logo + idx}
//               type="button"
//               className="absolute group"
//               style={{
//                 top: ARC_POSITIONS[idx].top,
//                 left: ARC_POSITIONS[idx].left,
//                 zIndex: 2,
//               }}
//               onMouseEnter={() => setHoveredIdx(idx)}
//               onMouseLeave={() => setHoveredIdx(null)}
//               tabIndex={0}
//               aria-label={logo.alt}
//             >
//               <div
//                 className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center ring-2 ring-white hover:ring-blue-400 transition shadow-lg
//                   ${hoveredIdx === idx ? "scale-110 ring-4 ring-blue-400" : ""}
//                 `}
//                 style={{ boxShadow: "0 2px 12px 0 rgba(0,0,0,0.09)" }}
//               >
//                 <img
//                   src={logo.logo}
//                   alt={logo.alt}
//                   className="w-10 h-10 object-contain rounded-full"
//                   draggable={false}
//                 />
//               </div>
//             </button>
//           ))}
//           {/* Central preview area inside slope */}
//           <div
//             className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[132px] h-[132px] flex items-center justify-center rounded-full bg-white/85 shadow"
//             style={{ zIndex: 3 }}
//           >
//             {hoveredIdx == null ? (
//               <span className="text-xl font-bold text-blue-900 select-none">Yarns</span>
//             ) : (
//               <img
//                 src={ARC_LOGOS[hoveredIdx].preview}
//                 alt="Preview"
//                 className="w-[84px] h-[84px] object-contain rounded-full pointer-events-none transition-transform duration-200"
//                 style={{
//                   transform: hoveredIdx != null ? "scale(1.10)" : "scale(1)",
//                 }}
//                 loading="lazy"
//                 draggable={false}
//               />
//             )}
//           </div>
//         </div>
//         {/* Right content */}
//         <div className="flex-1 flex flex-col justify-center items-start px-0 sm:px-10 py-24">
//           <span className="text-blue-700 font-semibold text-base tracking-wider uppercase mb-2">
//             Yarn Collection
//           </span>
//           <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//             Premium Yarns for Every Need
//           </h2>
//           <p className="text-base sm:text-xl text-gray-700 mb-12 max-w-2xl">
//             Our yarns are crafted with quality, sustainability, and comfort at their core.
//             <br className="hidden sm:block" />
//             Choose from a curated selection of premium fibers engineered for performance in every creation.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React, { useState, useEffect } from "react";

// // Logo images (update paths as needed)
// const LOGOS = [
//   { src: "/assets/viscose.png", alt: "Viscose" },
//   { src: "/assets/modal.png", alt: "Modal" },
//   { src: "/assets/excel.jpg", alt: "Excel" },
//   { src: "/assets/liveco.png", alt: "Liveco" },
//   { src: "/assets/bamboo.jpg", alt: "Bamboo" },
//   { src: "/assets/circulose.png", alt: "Circulose" },
//   { src: "/assets/tencel.png", alt: "Tencel" },
//   { src: "/assets/ecovera.png", alt: "Ecovera" },
//   { src: "/assets/refinra.png", alt: "Refinra" },
// ];

// // Logo positions (x, y as % of container, 3x3 per wave)
// const LOGO_POSITIONS = [
//   // Top wave
//   { line: 0, x: 12, y: 16 },
//   { line: 0, x: 40, y: 10 },
//   { line: 0, x: 68, y: 16 },
//   // Middle wave
//   { line: 1, x: 19, y: 48 },
//   { line: 1, x: 50, y: 44 },
//   { line: 1, x: 78, y: 50 },
//   // Bottom wave
//   { line: 2, x: 12, y: 81 },
//   { line: 2, x: 40, y: 86 },
//   { line: 2, x: 68, y: 81 },
// ];

// export default function YarnsSection() {
//   // Only a small, slow wave
//   const [animTime, setAnimTime] = useState(0);
//   useEffect(() => {
//     let frame: number;
//     const animate = () => {
//       setAnimTime((prev) => (prev + 0.008) % 1); // slower than before
//       frame = requestAnimationFrame(animate);
//     };
//     frame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frame);
//   }, []);

//   // Small amplitude for gentle undulation
//   const yAmplitude = [4, 5, 3]; // in % of height
//   const xAmplitude = 0.8; // small subtle x movement

//   return (
//     <section className="w-full bg-gray-50 flex flex-col items-center pt-0 md:pt-12 px-0">
//       {/* YARNS video strip at top */}
//       <div
//         className="w-full relative z-30 flex flex-col items-center overflow-hidden"
//         style={{ height: "84px" }}
//       >
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           src="https://www.shutterstock.com/shutterstock/videos/1107376703/preview/stock-footage-panoramic-cinematic-shot-cotton-thread-manufacturing-in-a-textile-oil-factory-organic-cotton-yarn.webm"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative flex justify-center items-center w-full h-full">
//           <span className="text-white text-4xl md:text-5xl font-extrabold tracking-wide" style={{ letterSpacing: "0.12em" }}>
//             YARNS
//           </span>
//         </div>
//       </div>

//       {/* Main Section */}
//       <div className="relative w-full max-w-6xl min-h-[420px] h-[480px] flex mt-0 md:mt-[-38px]">
//         {/* Left: animated SVG wave lines with logos */}
//         <div className="relative flex-shrink-0 w-[44%] min-w-[330px] h-full">
//           {/* Animated SVG waves */}
//           <svg viewBox="0 0 400 480" className="absolute left-0 top-0 w-full h-full select-none pointer-events-none">
//             {/* Top wave */}
//             <path
//               d="M 30 70 Q 120 5 210 70 T 370 70"
//               stroke="#cbd5e1"
//               strokeWidth="5"
//               fill="none"
//             >
//               <animate
//                 attributeName="d"
//                 dur="6s"
//                 repeatCount="indefinite"
//                 values="
//                   M 30 70 Q 120 5 210 70 T 370 70;
//                   M 30 70 Q 120 26 210 54 T 370 70;
//                   M 30 70 Q 120 5 210 70 T 370 70
//                 "
//               />
//             </path>
//             {/* Middle wave */}
//             <path
//               d="M 30 240 Q 115 180 210 240 T 370 240"
//               stroke="#cbd5e1"
//               strokeWidth="5"
//               fill="none"
//             >
//               <animate
//                 attributeName="d"
//                 dur="6s"
//                 repeatCount="indefinite"
//                 begin="2s"
//                 values="
//                   M 30 240 Q 115 180 210 240 T 370 240;
//                   M 30 240 Q 115 202 210 220 T 370 240;
//                   M 30 240 Q 115 180 210 240 T 370 240
//                 "
//               />
//             </path>
//             {/* Bottom wave */}
//             <path
//               d="M 30 405 Q 120 350 210 405 T 370 405"
//               stroke="#cbd5e1"
//               strokeWidth="5"
//               fill="none"
//             >
//               <animate
//                 attributeName="d"
//                 dur="6s"
//                 repeatCount="indefinite"
//                 begin="4s"
//                 values="
//                   M 30 405 Q 120 350 210 405 T 370 405;
//                   M 30 405 Q 120 385 210 388 T 370 405;
//                   M 30 405 Q 120 350 210 405 T 370 405
//                 "
//               />
//             </path>
//           </svg>
//           {/* Moving, enlarged logos on the 3 waves */}
//           {LOGOS.map((logo, idx) => {
//             const pos = LOGO_POSITIONS[idx];
//             const t = (animTime + idx * 0.11) * (2 * Math.PI);
//             const x = pos.x + xAmplitude * Math.sin(t + pos.x / 11);
//             const y = pos.y + yAmplitude[pos.line] * Math.sin(t + pos.line * Math.PI / 2);
//             return (
//               <div
//                 key={logo.src + idx}
//                 className="absolute z-20"
//                 style={{
//                   left: `${x}%`,
//                   top: `${y}%`,
//                   transform: "translate(-50%, -50%)",
//                 }}
//               >
//                 <div
//                   className={`
//                     w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center border-2 border-gray-300 shadow-lg hover:scale-110 focus:scale-110 transition-transform duration-200
//                   `}
//                   tabIndex={0}
//                   aria-label={logo.alt}
//                 >
//                   <img
//                     src={logo.src}
//                     alt={logo.alt}
//                     className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full"
//                     draggable={false}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Right: original content */}
//         <div className="flex-1 flex flex-col justify-center items-start px-0 sm:px-10 py-24">
//           <span className="text-blue-700 font-semibold text-base tracking-wider uppercase mb-2">
//             Yarn Collection
//           </span>
//           <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//             Premium Yarns for Every Need
//           </h2>
//           <p className="text-base sm:text-xl text-gray-700 mb-12 max-w-2xl">
//             Our yarns are crafted with quality, sustainability, and comfort at their core.
//             <br className="hidden sm:block" />
//             Choose from a curated selection of premium fibers engineered for performance in every creation.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React, { useState, useEffect } from "react";

// // Logo images
// const LOGOS = [
//   { src: "/assets/viscose.png", alt: "Viscose" },
//   { src: "/assets/modal.png", alt: "Modal" },
//   { src: "/assets/excel.jpg", alt: "Excel" },
//   { src: "/assets/liveco.png", alt: "Liveco" },
//   { src: "/assets/bamboo.jpg", alt: "Bamboo" },
//   { src: "/assets/circulose.png", alt: "Circulose" },
//   { src: "/assets/tencel.png", alt: "Tencel" },
//   { src: "/assets/ecovera.png", alt: "Ecovera" },
//   { src: "/assets/refinra.png", alt: "Refinra" },
// ];

// // Logo positions
// const LOGO_POSITIONS = [
//   { line: 0, x: 12, y: 16 },
//   { line: 0, x: 40, y: 10 },
//   { line: 0, x: 68, y: 16 },
//   { line: 1, x: 19, y: 48 },
//   { line: 1, x: 50, y: 44 },
//   { line: 1, x: 78, y: 50 },
//   { line: 2, x: 12, y: 81 },
//   { line: 2, x: 40, y: 86 },
//   { line: 2, x: 68, y: 81 },
// ];

// export default function YarnsSection() {
//   const [animTime, setAnimTime] = useState(0);

//   useEffect(() => {
//     let frame: number;
//     const animate = () => {
//       setAnimTime((prev) => (prev + 0.008) % 1);
//       frame = requestAnimationFrame(animate);
//     };
//     frame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frame);
//   }, []);

//   const yAmplitude = [4, 5, 3];
//   const xAmplitude = 0.8;
//   const bgImageUrl = "/assets/yarnbg.png";

//   return (
//     <section className="relative w-full py-16 bg-white">
//       <div className="px-[50px]"> {/* 20px padding on left and right */}
//         {/* Section title with video background clip */}
//         <div className="text-center mb-10 relative h-28 flex items-center justify-center">
//           <video
//             className="absolute inset-0 w-full h-full object-cover opacity-80"
//             src="https://www.shutterstock.com/shutterstock/videos/1107376703/preview/stock-footage-panoramic-cinematic-shot-cotton-thread-manufacturing-in-a-textile-oil-factory-organic-cotton-yarn.webm"
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//           <h2
//             className="relative text-6xl md:text-5xl font-extrabold text-transparent bg-clip-text z-10"
//             style={{
//               backgroundImage:
//                 "linear-gradient(to right, rgb(255, 255, 255), rgba(255,255,255,0.8))",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             YARNS
//           </h2>
//         </div>

//         {/* Section container with background image */}
//         <div
//           className="relative w-full max-w-500 mx-auto overflow-hidden"
//           style={{
//             backgroundImage: `url(${bgImageUrl})`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundAttachment: "fixed", // <-- ✅ Fixed background
//           }}
//         >
//           <div className="relative w-full flex flex-col md:flex-row justify-between items-center gap-10 px-6 py-12 bg-white/80">
//             {/* Left: animated logos */}
//             <div className="relative w-full md:w-[44%] min-w-[330px] h-[480px]">
//               <svg
//                 viewBox="0 0 400 480"
//                 className="absolute left-0 top-0 w-full h-full select-none pointer-events-none"
//               >
//                 {[70, 240, 405].map((startY, i) => (
//                   <path
//                     key={i}
//                     d={`M 30 ${startY} Q 120 ${startY - 65} 210 ${startY} T 370 ${startY}`}
//                     stroke="#cbd5e1"
//                     strokeWidth="5"
//                     fill="none"
//                   >
//                     <animate
//                       attributeName="d"
//                       dur="6s"
//                       repeatCount="indefinite"
//                       begin={`${i * 2}s`}
//                       values={`M 30 ${startY} Q 120 ${startY - 65} 210 ${startY} T 370 ${startY};
//                                M 30 ${startY} Q 120 ${startY - 40} 210 ${startY - 20} T 370 ${startY};
//                                M 30 ${startY} Q 120 ${startY - 65} 210 ${startY} T 370 ${startY}`}
//                     />
//                   </path>
//                 ))}
//               </svg>

//               {LOGOS.map((logo, idx) => {
//                 const pos = LOGO_POSITIONS[idx];
//                 const t = (animTime + idx * 0.11) * 2 * Math.PI;
//                 const x = pos.x + xAmplitude * Math.sin(t + pos.x / 11);
//                 const y =
//                   pos.y +
//                   yAmplitude[pos.line] * Math.sin(t + (pos.line * Math.PI) / 2);
//                 return (
//                   <div
//                     key={logo.src + idx}
//                     className="absolute z-20"
//                     style={{
//                       left: `${x}%`,
//                       top: `${y}%`,
//                       transform: "translate(-50%, -50%)",
//                     }}
//                   >
//                     <div
//                       className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center border-2 border-gray-300 shadow-lg hover:scale-110 transition-transform duration-200"
//                       tabIndex={0}
//                       aria-label={logo.alt}
//                     >
//                       <img
//                         src={logo.src}
//                         alt={logo.alt}
//                         className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full"
//                         draggable={false}
//                       />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Right: Yarn content */}
//             <div className="flex-1 flex flex-col justify-start items-start space-y-6 max-w-xl z-10">
//               <span className="text-blue-700 font-semibold text-base tracking-wider uppercase">
//                 Yarn Collection
//               </span>
//               <h3 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
//                 Premium Yarns for Every Need
//               </h3>
//               <p className="text-base sm:text-xl text-gray-700">
//                 Our yarns are crafted with quality, sustainability, and comfort
//                 at their core. Choose from a curated selection of premium fibers
//                 engineered for performance in every creation.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from "react";

// Logo images
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

// Logo positions
const LOGO_POSITIONS = [
  { line: 0, x: 12, y: 16 },
  { line: 0, x: 40, y: 10 },
  { line: 0, x: 68, y: 16 },
  { line: 1, x: 19, y: 48 },
  { line: 1, x: 50, y: 44 },
  { line: 1, x: 78, y: 50 },
  { line: 2, x: 12, y: 81 },
  { line: 2, x: 40, y: 86 },
  { line: 2, x: 68, y: 81 },
];

export default function YarnsSection() {
  const [animTime, setAnimTime] = useState(0);

  useEffect(() => {
    let frame: number;
    const animate = () => {
      setAnimTime((prev) => (prev + 0.008) % 1);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const yAmplitude = [4, 5, 3];
  const xAmplitude = 0.8;
  const bgImageUrl = "/assets/yarnbg.png";

  return (
    <section className="relative w-full py-16 bg-white">
      <div className="px-[50px]">
        {/* Section title with video background clip */}
        <div className="text-center mb-10 relative h-28 flex items-center justify-center">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            src="https://www.shutterstock.com/shutterstock/videos/1107376703/preview/stock-footage-panoramic-cinematic-shot-cotton-thread-manufacturing-in-a-textile-oil-factory-organic-cotton-yarn.webm"
            autoPlay
            loop
            muted
            playsInline
          />
          <h2
            className="relative text-6xl md:text-5xl font-extrabold text-transparent bg-clip-text z-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(255, 255, 255), rgba(255,255,255,0.8))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            YARNS
          </h2>
        </div>

        {/* Section container */}
        <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden">
          <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-10 px-6 py-12">
            {/* Left: animated logos */}
            <div className="relative w-full md:w-1/2 min-w-[330px] h-[480px] bg-white">
              <svg
                viewBox="0 0 400 480"
                className="absolute left-0 top-0 w-full h-full select-none pointer-events-none"
              >
                {[70, 240, 405].map((startY, i) => (
                  <path
                    key={i}
                    d={`M 30 ${startY} Q 120 ${startY - 65} 210 ${startY} T 370 ${startY}`}
                    stroke="#cbd5e1"
                    strokeWidth="5"
                    fill="none"
                  >
                    <animate
                      attributeName="d"
                      dur="6s"
                      repeatCount="indefinite"
                      begin={`${i * 2}s`}
                      values={`M 30 ${startY} Q 120 ${startY - 65} 210 ${startY} T 370 ${startY};
                               M 30 ${startY} Q 120 ${startY - 40} 210 ${startY - 20} T 370 ${startY};
                               M 30 ${startY} Q 120 ${startY - 65} 210 ${startY} T 370 ${startY}`}
                    />
                  </path>
                ))}
              </svg>

              {LOGOS.map((logo, idx) => {
                const pos = LOGO_POSITIONS[idx];
                const t = (animTime + idx * 0.11) * 2 * Math.PI;
                const x = pos.x + xAmplitude * Math.sin(t + pos.x / 11);
                const y =
                  pos.y +
                  yAmplitude[pos.line] * Math.sin(t + (pos.line * Math.PI) / 2);
                return (
                  <div
                    key={logo.src + idx}
                    className="absolute z-20"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center border-2 border-gray-300 shadow-lg hover:scale-110 transition-transform duration-200"
                      tabIndex={0}
                      aria-label={logo.alt}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full"
                        draggable={false}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Yarn content with background and new content blocks */}
            <div
              className="w-full md:w-1/2 h-[480px] relative z-10 flex flex-col justify-center items-start p-8 text-white space-y-4 overflow-y-auto"
              style={{
                backgroundImage: `url(${bgImageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            >
              <span className="text-blue-200 font-semibold text-base tracking-wider uppercase">
                Yarn Collection
              </span>
              {/* COUNT RANGE */}
              <div className="mt-4">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 underline underline-offset-4">
                  Count Range
                </h4>
                <p className="text-sm sm:text-base drop-shadow">
                  RING SPUN NE 12 - NE 80<br />
                  OPEN END NE 2 - NE 30
                </p>
              </div>

              {/* VARIETY */}
              <div className="mt-2">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 underline underline-offset-4">
                  Variety
                </h4>
                <ul className="text-sm sm:text-base list-disc list-inside drop-shadow">
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
    </section>
  );
}
