// import { useState, useEffect } from "react";

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
//     <section className="relative w-full py-8 bg-white">
//       <div className="px-[50px]">
//         {/* Section title with video background clip */}
//         <div className="text-center mb-4 relative h-22 flex items-center justify-center">
//           <video
//             className="absolute inset-0 w-full h-full object-cover opacity-80"
//             src="https://www.shutterstock.com/shutterstock/videos/1107376703/preview/stock-footage-panoramic-cinematic-shot-cotton-thread-manufacturing-in-a-textile-oil-factory-organic-cotton-yarn.webm"
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//           <h2
//             className="relative text-6xl md:text-4xl font-extrabold text-transparent bg-clip-text z-10"
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

//         {/* Section container */}
//         <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden">
//           <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-4 px-6 py-6">
//             {/* Left: animated logos */}
//             <div className="relative w-full md:w-1/2 min-w-[330px] h-[480px] bg-white">
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
//                                 M 30 ${startY} Q 120 ${startY - 40} 210 ${startY - 20} T 370 ${startY};
//                                 M 30 ${startY} Q 120 ${startY - 65} 210 ${startY} T 370 ${startY}`}
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

//             {/* Right: Yarn content with background and reduced text size */}
//             <div
//               className="w-full md:w-1/2 h-[450px] relative z-10 flex flex-col justify-center items-start p-4 text-white space-y-3 overflow-y-auto"
//               style={{
//                 backgroundImage: `url(${bgImageUrl})`,
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundAttachment: "fixed",
//               }}
//             >
//               <span className="text-blue-200 font-medium text-xs tracking-wide uppercase">
//                 Yarn Collection
//               </span>

//               {/* COUNT RANGE */}
//               <div className="mt-2">
//                 <h4 className="text-base font-semibold text-white mb-1 underline underline-offset-4">
//                   Count Range
//                 </h4>
//                 <p className="text-xs drop-shadow">
//                   RING SPUN NE 12 - NE 80<br />
//                   OPEN END NE 2 - NE 30
//                 </p>
//               </div>

//               {/* VARIETY */}
//               <div className="mt-1">
//                 <h4 className="text-base font-semibold text-white mb-1 underline underline-offset-4">
//                   Variety
//                 </h4>
//                 <ul className="text-xs list-disc list-inside drop-shadow space-y-0.5">
//                   <li>RING</li>
//                   <li>COMPACT</li>
//                   <li>SIRO COMPACT</li>
//                   <li>VORTEX</li>
//                   <li>OPEN END</li>
//                   <li>SLUB</li>
//                   <li>HIGH TWIST</li>
//                   <li>TFO</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








// import { useState, useEffect } from "react";

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

// export default function YarnsSection() {
//   const [animTime, setAnimTime] = useState(0);
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     if (!expanded) return;
//     let frame;
//     const animate = () => {
//       setAnimTime((prev) => (prev + 0.01) % 1);
//       frame = requestAnimationFrame(animate);
//     };
//     frame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frame);
//   }, [expanded]);

//   const center = { x: 200, y: 240 }; // SVG center
//   const bgImageUrl = "/assets/yarnbg.png";

//   return (
//     <section className="relative w-full py-8 bg-white">
//       <div className="px-[50px]">
//         <div className="text-center mb-4 relative h-22 flex items-center justify-center">
//           <video
//             className="absolute inset-0 w-full h-full object-cover opacity-80"
//             src="https://www.shutterstock.com/shutterstock/videos/1107376703/preview/stock-footage-panoramic-cinematic-shot-cotton-thread-manufacturing-in-a-textile-oil-factory-organic-cotton-yarn.webm"
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//           <h2
//             className="relative text-6xl md:text-4xl font-extrabold text-transparent bg-clip-text z-10"
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

//         <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden">
//           <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-4 px-6 py-6">
//             <div className="relative w-full md:w-1/2 min-w-[330px] h-[480px] bg-white flex items-center justify-center">
//               {!expanded && (
//                 <button
//                   onClick={() => setExpanded(true)}
//                   className="w-32 h-32 bg-blue-200 text-blue-900 font-bold text-lg rounded-full shadow-lg border-4 border-blue-300 hover:scale-105 transition-all duration-300 flex items-center justify-center z-30"
//                 >
//                   Yarns
//                 </button>
//               )}

//               {expanded && (
//                 <div className="relative w-full h-full">
//                   <svg
//                     viewBox="0 0 400 480"
//                     className="absolute left-0 top-0 w-full h-full select-none pointer-events-none"
//                   >
//                     {LOGOS.map((logo, idx) => {
//                       const angle = (animTime + idx / LOGOS.length) * 2 * Math.PI;
//                       const radius = 100 + (idx % 3) * 30; // Varied orbit
//                       const x = center.x + radius * Math.cos(angle);
//                       const y = center.y + radius * Math.sin(angle);
//                       return (
//                         <image
//                           key={logo.src}
//                           href={logo.src}
//                           alt={logo.alt}
//                           x={x - 24}
//                           y={y - 24}
//                           width={48}
//                           height={48}
//                           className="rounded-full shadow-xl"
//                         />
//                       );
//                     })}

//                     <circle
//                       cx={center.x}
//                       cy={center.y}
//                       r={40}
//                       fill="#bfdbfe"
//                       stroke="#3b82f6"
//                       strokeWidth={4}
//                     />
//                     <text
//                       x={center.x}
//                       y={center.y + 5}
//                       textAnchor="middle"
//                       fontSize="14"
//                       fill="#1e3a8a"
//                       fontWeight="bold"
//                     >
//                       Yarns
//                     </text>
//                   </svg>

//                   <button
//                     onClick={() => setExpanded(false)}
//                     className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-200 text-gray-700 rounded-full shadow hover:bg-gray-300 transition-all"
//                   >
//                     Collapse
//                   </button>
//                 </div>
//               )}
//             </div>

//             <div
//               className="w-full md:w-1/2 h-[450px] relative z-10 flex flex-col justify-center items-start p-4 text-white space-y-3 overflow-y-auto"
//               style={{
//                 backgroundImage: `url(${bgImageUrl})`,
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundAttachment: "fixed",
//               }}
//             >
//               <span className="text-blue-200 font-medium text-xs tracking-wide uppercase">
//                 Yarn Collection
//               </span>
//               <div className="mt-2">
//                 <h4 className="text-base font-semibold text-white mb-1 underline underline-offset-4">
//                   Count Range
//                 </h4>
//                 <p className="text-xs drop-shadow">
//                   RING SPUN NE 12 - NE 80<br />
//                   OPEN END NE 2 - NE 30
//                 </p>
//               </div>
//               <div className="mt-1">
//                 <h4 className="text-base font-semibold text-white mb-1 underline underline-offset-4">
//                   Variety
//                 </h4>
//                 <ul className="text-xs list-disc list-inside drop-shadow space-y-0.5">
//                   <li>RING</li>
//                   <li>COMPACT</li>
//                   <li>SIRO COMPACT</li>
//                   <li>VORTEX</li>
//                   <li>OPEN END</li>
//                   <li>SLUB</li>
//                   <li>HIGH TWIST</li>
//                   <li>TFO</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// import { useState, useEffect } from "react";

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

// export default function YarnsSection() {
//   const [animTime, setAnimTime] = useState(0);
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     if (!expanded) return;
//     let frame;
//     const animate = () => {
//       setAnimTime((prev) => (prev + 0.003) % 1); // slower rotation
//       frame = requestAnimationFrame(animate);
//     };
//     frame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frame);
//   }, [expanded]);

//   const center = { x: 200, y: 240 }; // SVG center
//   const bgImageUrl = "/assets/yarnbg.png";

//   return (
//     <section className="relative w-full py-8 bg-white">
//       <div className="px-[50px]">
//         {/* Title */}
//         <div className="text-center mb-4 relative h-22 flex items-center justify-center">
//           <video
//             className="absolute inset-0 w-full h-full object-cover opacity-80"
//             src="https://www.shutterstock.com/shutterstock/videos/1107376703/preview/stock-footage-panoramic-cinematic-shot-cotton-thread-manufacturing-in-a-textile-oil-factory-organic-cotton-yarn.webm"
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//           <h2
//             className="relative text-6xl md:text-4xl font-extrabold text-transparent bg-clip-text z-10"
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

//         {/* Content */}
//         <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden">
//           <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-4 px-6 py-6">
            
//             {/* LEFT SIDE */}
//             <div className="relative w-full md:w-1/2 min-w-[330px] h-[480px] bg-white flex items-center justify-center">
              
//               {/* BEFORE CLICK — Rotating Yarn Image */}
//               {!expanded && (
//                 <img
//                   src="/assets/yarn.png"
//                   alt="Yarn"
//                   onClick={() => setExpanded(true)}
//                   className="w-72 h-72 rounded-full cursor-pointer animate-spin-slow hover:scale-105 transition-transform duration-300"
//                 />
//               )}

//               {/* AFTER CLICK — Solar System Animation */}
//               {expanded && (
//                 <div className="relative w-full h-full">
//                   <svg
//                     viewBox="0 0 400 480"
//                     className="absolute left-0 top-0 w-full h-full select-none pointer-events-none"
//                   >
//                     {LOGOS.map((logo, idx) => {
//                       const angle =
//                         (animTime + idx / LOGOS.length) * 2 * Math.PI;
//                       const radius = 100 + (idx % 3) * 30;
//                       const x = center.x + radius * Math.cos(angle);
//                       const y = center.y + radius * Math.sin(angle);
//                       return (
//                         <image
//                           key={logo.src}
//                           href={logo.src}
//                           alt={logo.alt}
//                           x={x - 32} // bigger size
//                           y={y - 32}
//                           width={64}
//                           height={64}
//                           className="rounded-full shadow-xl"
//                         />
//                       );
//                     })}

//                     {/* Center Yarn Image (Click to Collapse) */}
//                     <image
//                       href="/assets/yarn-circle.png"
//                       x={center.x - 50}
//                       y={center.y - 50}
//                       width={100}
//                       height={100}
//                       className="rounded-full cursor-pointer"
//                       onClick={() => setExpanded(false)}
//                       style={{ pointerEvents: "auto" }}
//                     />
//                   </svg>
//                 </div>
//               )}
//             </div>

//             {/* RIGHT SIDE */}
//             <div
//               className="w-full md:w-1/2 h-[450px] relative z-10 flex flex-col justify-center items-start p-4 text-white space-y-3 overflow-y-auto"
//               style={{
//                 backgroundImage: `url(${bgImageUrl})`,
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundAttachment: "fixed",
//               }}
//             >
//               <span className="text-blue-200 font-medium text-xs tracking-wide uppercase">
//                 Yarn Collection
//               </span>
//               <div className="mt-2">
//                 <h4 className="text-base font-semibold text-white mb-1 underline underline-offset-4">
//                   Count Range
//                 </h4>
//                 <p className="text-xs drop-shadow">
//                   RING SPUN NE 12 - NE 80<br />
//                   OPEN END NE 2 - NE 30
//                 </p>
//               </div>
//               <div className="mt-1">
//                 <h4 className="text-base font-semibold text-white mb-1 underline underline-offset-4">
//                   Variety
//                 </h4>
//                 <ul className="text-xs list-disc list-inside drop-shadow space-y-0.5">
//                   <li>RING</li>
//                   <li>COMPACT</li>
//                   <li>SIRO COMPACT</li>
//                   <li>VORTEX</li>
//                   <li>OPEN END</li>
//                   <li>SLUB</li>
//                   <li>HIGH TWIST</li>
//                   <li>TFO</li>
//                 </ul>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* Add to your CSS or Tailwind config */
// <style jsx global>{`
//   .animate-spin-slow {
//     animation: spin 12s linear infinite; /* slower spin */
//   }
//   @keyframes spin {
//     from { transform: rotate(0deg); }
//     to { transform: rotate(360deg); }
//   }
// `}</style>





// import { useState, useEffect } from "react";

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

// export default function YarnsSection() {
//   const [animTime, setAnimTime] = useState(0);
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     if (!expanded) return;
//     let frame;
//     const animate = () => {
//       setAnimTime((prev) => (prev + 0.003) % 1); // slower rotation
//       frame = requestAnimationFrame(animate);
//     };
//     frame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frame);
//   }, [expanded]);

//   const center = { x: 200, y: 240 }; // SVG center
//   const bgImageUrl = "/assets/yarnbg.png";

//   return (
//     <section className="relative w-full py-8 bg-white">
//       <div className="px-[50px]">
//         {/* Title */}
//         {/* <div className="text-center mb-4 relative h-22 flex items-center justify-center">
//           <video
//             className="absolute inset-0 w-full h-full object-cover opacity-80"
//             src="https://www.shutterstock.com/shutterstock/videos/1107376703/preview/stock-footage-panoramic-cinematic-shot-cotton-thread-manufacturing-in-a-textile-oil-factory-organic-cotton-yarn.webm"
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//           <h2
//             className="relative text-6xl md:text-4xl font-extrabold text-transparent bg-clip-text z-10"
//             style={{
//               backgroundImage:
//                 "linear-gradient(to right, rgb(255, 255, 255), rgba(255,255,255,0.8))",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             YARNS
//           </h2>
//         </div> */}

//         <div className="text-center">
//           {/* <span className="text-green-600 font-semibold text-sm tracking-wider uppercase pt-10">
//             OUR COMMITMENT
//           </span> */}
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
//             Yarns
//           </h2>
//         </div>

//         {/* Content */}
//         <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden">
//           <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-4 px-6 py-6">
            
//             {/* LEFT SIDE */}
//             <div className="relative w-full md:w-1/2 min-w-[330px] h-[480px] bg-white flex items-center justify-center">
              
//               {/* BEFORE CLICK — Rotating Yarn Image */}
//               {!expanded && (
//                 <img
//                   src="/assets/yarn.png"
//                   alt="Yarn"
//                   onClick={() => setExpanded(true)}
//                   className="w-72 h-72 rounded-full cursor-pointer animate-spin-slow hover:scale-105 transition-transform duration-300"
//                 />
//               )}

//               {/* AFTER CLICK — Solar System Animation */}
//               {expanded && (
//                 <div className="relative w-full h-full">
//                   <svg
//                     viewBox="0 0 400 480"
//                     className="absolute left-0 top-0 w-full h-full select-none pointer-events-none"
//                   >
//                     {LOGOS.map((logo, idx) => {
//                       const angle =
//                         (animTime + idx / LOGOS.length) * 2 * Math.PI;
//                       const radius = 100 + (idx % 3) * 30;
//                       const x = center.x + radius * Math.cos(angle);
//                       const y = center.y + radius * Math.sin(angle);
//                       return (
//                         <image
//                           key={logo.src}
//                           href={logo.src}
//                           alt={logo.alt}
//                           x={x - 32} // bigger size
//                           y={y - 32}
//                           width={64}
//                           height={64}
//                           className="rounded-full shadow-xl"
//                         />
//                       );
//                     })}

//                     {/* Center Yarn Image (Click to Collapse) */}
//                     <image
//                       href="/assets/yarn-circle.png"
//                       x={center.x - 50}
//                       y={center.y - 50}
//                       width={100}
//                       height={100}
//                       className="rounded-full cursor-pointer"
//                       onClick={() => setExpanded(false)}
//                       style={{ pointerEvents: "auto" }}
//                     />
//                   </svg>
//                 </div>
//               )}
//             </div>

//             {/* RIGHT SIDE */}
//             <div
//               className="w-full md:w-1/2 h-[450px] relative z-10 flex flex-col justify-center items-start p-4 text-white space-y-3 overflow-y-auto"
//               style={{
//                 backgroundImage: `url(${bgImageUrl})`,
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundAttachment: "fixed",
//               }}
//             >
//               <span className="text-blue-200 font-medium text-xs tracking-wide uppercase">
//                 Yarn Collection
//               </span>
//               <div className="mt-2">
//                 <h4 className="text-base font-semibold text-white mb-1 underline underline-offset-4">
//                   Count Range
//                 </h4>
//                 <p className="text-xs drop-shadow">
//                   RING SPUN NE 12 - NE 80<br />
//                   OPEN END NE 2 - NE 30
//                 </p>
//               </div>
//               <div className="mt-1">
//                 <h4 className="text-base font-semibold text-white mb-1 underline underline-offset-4">
//                   Variety
//                 </h4>
//                 <ul className="text-xs list-disc list-inside drop-shadow space-y-0.5">
//                   <li>RING</li>
//                   <li>COMPACT</li>
//                   <li>SIRO COMPACT</li>
//                   <li>VORTEX</li>
//                   <li>OPEN END</li>
//                   <li>SLUB</li>
//                   <li>HIGH TWIST</li>
//                   <li>TFO</li>
//                 </ul>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* Add to your CSS or Tailwind config */
// <style jsx global>{`
//   .animate-spin-slow {
//     animation: spin 12s linear infinite; /* slower spin */
//   }
//   @keyframes spin {
//     from { transform: rotate(0deg); }
//     to { transform: rotate(360deg); }
//   }
// `}</style>



// import { useState, useEffect } from "react";

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

// export default function YarnsSection() {
//   const [animTime, setAnimTime] = useState(0);
//   const [expanded, setExpanded] = useState(true);

//   useEffect(() => {
//     let frame;
//     const animate = () => {
//       setAnimTime((prev) => (prev + 0.0008) % 1); // very slow rotation
//       frame = requestAnimationFrame(animate);
//     };
//     frame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frame);
//   }, []);

//   const center = { x: 200, y: 240 };
//   const bgImageUrl = "/assets/yarnbg.png";

//   return (
//     <section className="relative w-full py-8 bg-white">
//       <div className="px-[50px]">
//         <div className="text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
//             Yarns
//           </h2>
//         </div>

//         <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden">
//           <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-4 px-6 py-6">
            
//             {/* LEFT SIDE — Solar System Animation */}
//             <div className="relative w-full md:w-1/2 min-w-[330px] h-[480px] bg-white flex items-center justify-center">
//               <div className="relative w-full h-full">
//                 <svg
//                   viewBox="0 0 400 480"
//                   className="absolute left-0 top-0 w-full h-full select-none pointer-events-none"
//                 >
//                   {LOGOS.map((logo, idx) => {
//                     const angle =
//                       (animTime + idx / LOGOS.length) * 2 * Math.PI;
//                     const radius = 200; // increased spacing
//                     const x = center.x + radius * Math.cos(angle);
//                     const y = center.y + radius * Math.sin(angle);
//                     return (
//                       <image
//                         key={logo.src}
//                         href={logo.src}
//                         alt={logo.alt}
//                         x={x - 48} // bigger size
//                         y={y - 48}
//                         width={96}
//                         height={96}
//                         className="rounded-full shadow-2xl"
//                       />
//                     );
//                   })}

//                   {/* Center Yarn Circle with Text */}
//                   <circle
//                     cx={center.x}
//                     cy={center.y}
//                     r={60}
//                     fill="#2E8A10" // green color
//                     stroke="#006400" // darker green border
//                     strokeWidth={4}
//                   />
//                   <text
//                     x={center.x}
//                     y={center.y + 6}
//                     textAnchor="middle"
//                     fontSize="18"
//                     fontWeight="bold"
//                     fill="#fff"
//                   >
//                     Yarn
//                   </text>
//                 </svg>
//               </div>
//             </div>

//             {/* RIGHT SIDE — Description */}
//             <div
//               className="w-full md:w-1/2 h-[450px] relative z-10 flex flex-col justify-center items-start p-4 text-white space-y-3 overflow-y-auto"
//               style={{
//                 backgroundImage: `url(${bgImageUrl})`,
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundAttachment: "fixed",
//               }}
//             >
//               <span className="text-blue-200 font-medium text-xs tracking-wide uppercase">
//                 Yarn Collection
//               </span>
//               <div className="mt-2">
//                 <h4 className="text-base font-semibold text-white mb-1 underline underline-offset-4">
//                   Count Range
//                 </h4>
//                 <p className="text-xs drop-shadow">
//                   RING SPUN NE 12 - NE 80<br />
//                   OPEN END NE 2 - NE 30
//                 </p>
//               </div>
//               <div className="mt-1">
//                 <h4 className="text-base font-semibold text-white mb-1 underline underline-offset-4">
//                   Variety
//                 </h4>
//                 <ul className="text-xs list-disc list-inside drop-shadow space-y-0.5">
//                   <li>RING</li>
//                   <li>COMPACT</li>
//                   <li>SIRO COMPACT</li>
//                   <li>VORTEX</li>
//                   <li>OPEN END</li>
//                   <li>SLUB</li>
//                   <li>HIGH TWIST</li>
//                   <li>TFO</li>
//                 </ul>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// import { useState, useEffect } from "react";

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

// export default function YarnsSection() {
//   const [animTime, setAnimTime] = useState(0);

//   useEffect(() => {
//     let frame;
//     const animate = () => {
//       setAnimTime((prev) => (prev + 0.0008) % 1);
//       frame = requestAnimationFrame(animate);
//     };
//     frame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frame);
//   }, []);

//   const center = { x: 200, y: 240 };
//   const bgImageUrl = "/assets/yarnbg.png";

//   return (
//     <section className="relative w-full py-8 bg-white">
//       <div className="px-[50px]">
//         <div className="text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
//             YARNS
//           </h2>
//         </div>

//         <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden">
//           <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-4 px-6 py-6">
            
//             {/* LEFT SIDE — Solar System Animation */}
//             <div className="relative w-full md:w-1/2 min-w-[330px] h-[480px] bg-white flex items-center justify-center">
//               <div className="relative w-full h-full">
//                 <svg
//                   viewBox="0 0 400 480"
//                   className="absolute left-0 top-0 w-full h-full select-none pointer-events-none"
//                 >
//                   {LOGOS.map((logo, idx) => {
//                     const angle =
//                       (animTime + idx / LOGOS.length) * 2 * Math.PI;
//                     const radius = 200;
//                     const x = center.x + radius * Math.cos(angle);
//                     const y = center.y + radius * Math.sin(angle);
//                     return (
//                       <image
//                         key={logo.src}
//                         href={logo.src}
//                         alt={logo.alt}
//                         x={x - 48}
//                         y={y - 48}
//                         width={96}
//                         height={96}
//                         className="rounded-full shadow-2xl"
//                       />
//                     );
//                   })}
//                   <circle
//                     cx={center.x}
//                     cy={center.y}
//                     r={60}
//                     fill="#2E8A10"
//                     stroke="#006400"
//                     strokeWidth={4}
//                   />
//                   <text
//                     x={center.x}
//                     y={center.y + 6}
//                     textAnchor="middle"
//                     fontSize="20"
//                     fontWeight="bold"
//                     fill="#fff"
//                   >
//                     Yarn
//                   </text>
//                 </svg>
//               </div>
//             </div>

//             {/* RIGHT SIDE — Description, Variety (on right), Count Range (on left) */}
//             <div
//               className="w-full md:w-1/2 h-[450px] relative z-10 flex flex-col justify-center items-start p-4 space-y-6 overflow-y-auto"
//               style={{
//                 backgroundImage: `url(${bgImageUrl})`,
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundAttachment: "fixed",
//               }}
//             >
//               <span className="text-blue-300 font-semibold text-lg tracking-wide uppercase">
//                 Yarn Collection
//               </span>
              
//               {/* Side-by-side blocks: Count Range left, Variety right */}
//               <div className="w-full flex flex-col md:flex-row gap-6 mb-4">
//                 {/* Count Range - left */}
//                 <div className="flex-1   rounded-xl px-6 py-4 shadow-lg">
//                   <h4 className="text-xl md:text-2xl font-bold text-green-100 mb-2 underline underline-offset-4">
//                     Count Range
//                   </h4>
//                   <p className="text-lg md:text-xl text-white  drop-shadow font-semibold">
//                     RING SPUN NE 12 - NE 80<br />
//                     OPEN END NE 2 - NE 30
//                   </p>
//                 </div>
//                 {/* Variety - right */}
//                 <div className="flex-1   rounded-xl px-6 py-4 shadow-lg">
//                   <h4 className="text-xl md:text-2xl font-bold text-green-100 mb-2 underline underline-offset-4">
//                     Variety
//                   </h4>
//                   <ul className="text-lg md:text-xl text-white list-disc list-inside space-y-1 pl-2 font-semibold">
//                     <li>RING</li>
//                     <li>COMPACT</li>
//                     <li>SIRO COMPACT</li>
//                     <li>VORTEX</li>
//                     <li>OPEN END</li>
//                     <li>SLUB</li>
//                     <li>HIGH TWIST</li>
//                     <li>TFO</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






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
  const [speed, setSpeed] = useState(0.2); // degrees per frame base speed
  const containerRef = useRef<HTMLDivElement>(null);

  const center = { x: 200, y: 240 }; // yarn image center in SVG coords
  const yarnImageSize = 120;

  useEffect(() => {
    let frame: number;

    const animate = () => {
      // update orbiting logos animation time
      setAnimTime((prev) => (prev + 0.0008) % 1);

      // update yarn rotation based on speed
      setRotation((prev) => (prev + speed) % 360);

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [speed]);

  // Handle mouse movement inside the container div
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Get bounding rect of SVG container
      const rect = container.getBoundingClientRect();

      // Calculate mouse position relative to SVG coordinates
      // We assume SVG is full width/height of container
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate distance from mouse to yarn center
      const dx = mouseX - center.x;
      const dy = mouseY - center.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Max distance to consider for rotation effect (like radius of yarn image)
      const maxDist = yarnImageSize / 2;

      // If cursor inside the yarn image radius, increase speed
      if (dist <= maxDist) {
        // Closer to center => faster rotation, max speed 5 deg/frame
        const newSpeed = 0.2 + (1 - dist / maxDist) * 4.8;
        setSpeed(newSpeed);
      } else {
        // Outside yarn radius, reset to base speed
        setSpeed(0.2);
      }
    };

    const handleMouseLeave = () => {
      setSpeed(0.2); // reset speed when mouse leaves container
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
    <section className="relative w-full py-8 bg-white">
      <div className="px-[50px]">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            YARNS
          </h2>
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-[1600px] mx-auto overflow-hidden"
          style={{ height: 480 }}
        >
          <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-4 px-6 py-6">
            {/* LEFT SIDE — Solar System Animation */}
            <div className="relative w-full md:w-1/2 min-w-[330px] h-[480px] bg-white flex items-center justify-center">
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
                        alt={logo.alt}
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
                    href="/assets/yarn.png" // update path if needed
                    x={center.x - yarnImageSize / 2}
                    y={center.y - yarnImageSize / 2}
                    width={yarnImageSize}
                    height={yarnImageSize}
                    className="pointer-events-none select-none"
                    alt="Yarn"
                    style={{ transformOrigin: `${center.x}px ${center.y}px`, transform: `rotate(${rotation}deg)` }}
                  />
                </svg>
              </div>
            </div>

            {/* RIGHT SIDE — Description, Variety (on right), Count Range (on left) */}
            <div
              className="w-full md:w-1/2 h-[450px] relative z-10 flex flex-col justify-center items-start p-4 space-y-6 overflow-y-auto"
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
