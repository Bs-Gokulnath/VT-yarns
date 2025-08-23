// import { useState, useEffect, useRef } from "react";

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
//   const [rotation, setRotation] = useState(0);
//   const [speed, setSpeed] = useState(0.2);
//   const [isVisible, setIsVisible] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const sectionRef = useRef<HTMLElement>(null);

//   const center = { x: 200, y: 240 };
//   const yarnImageSize = 120;

//   // Intersection Observer to detect when section is visible
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     let frame: number;

//     const animate = () => {
//       setAnimTime((prev) => (prev + 0.0008) % 1);
//       setRotation((prev) => (prev + speed) % 360);
//       frame = requestAnimationFrame(animate);
//     };

//     frame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frame);
//   }, [speed]);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleMouseMove = (e: MouseEvent) => {
//       const rect = container.getBoundingClientRect();
//       const mouseX = e.clientX - rect.left;
//       const mouseY = e.clientY - rect.top;
//       const dx = mouseX - center.x;
//       const dy = mouseY - center.y;
//       const dist = Math.sqrt(dx * dx + dy * dy);
//       const maxDist = yarnImageSize / 2;

//       if (dist <= maxDist) {
//         const newSpeed = 0.2 + (1 - dist / maxDist) * 4.8;
//         setSpeed(newSpeed);
//       } else {
//         setSpeed(0.2);
//       }
//     };

//     const handleMouseLeave = () => {
//       setSpeed(0.2);
//     };

//     container.addEventListener("mousemove", handleMouseMove);
//     container.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       container.removeEventListener("mousemove", handleMouseMove);
//       container.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   const bgImageUrl = "/assets/yarnbg.png";

//   return (
//     <section 
//       ref={sectionRef}
//       id="yarns" 
//       className="relative w-full py-8 bg-white scroll-mt-24"
//       style={{ scrollMarginTop: '100px' }}
//     >
//       <div className="px-[50px]">
//         {/* Enhanced Title Section with Animation */}
//         <div className={`text-center transition-all duration-1000 ease-out ${
//           isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
//         }`}>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-2">
//             YARNS
//           </h2>
//           <div className="mx-auto w-16 h-[5px] rounded-full bg-green-600 mb-6"></div>
//         </div>

//         <div
//           ref={containerRef}
//           className="relative w-full max-w-[1600px] mx-auto overflow-hidden"
//           style={{ height: 480 }}
//         >
//           <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-4 px-6 py-6">
//             {/* LEFT SIDE — Solar System Animation */}
//             <div className={`relative w-full md:w-1/2 min-w-[330px] h-[480px] bg-white flex items-center justify-center transition-all duration-1000 delay-300 ${
//               isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
//             }`}>
//               <div className="relative w-full h-full">
//                 <svg
//                   viewBox="0 0 400 480"
//                   className="absolute left-0 top-0 w-full h-full select-none pointer-events-none"
//                 >
//                   {/* Orbiting logos */}
//                   {LOGOS.map((logo, idx) => {
//                     const angle = (animTime + idx / LOGOS.length) * 2 * Math.PI;
//                     const radius = 200;
//                     const x = center.x + radius * Math.cos(angle);
//                     const y = center.y + radius * Math.sin(angle);
//                     return (
//                       <image
//                         key={logo.src}
//                         href={logo.src}
//                         x={x - 48}
//                         y={y - 48}
//                         width={96}
//                         height={96}
//                         className="rounded-full shadow-2xl"
//                       />
//                     );
//                   })}

//                   {/* Center Yarn Image with rotation */}
//                   <image
//                     href="/assets/yarn.png"
//                     x={center.x - yarnImageSize / 2}
//                     y={center.y - yarnImageSize / 2}
//                     width={yarnImageSize}
//                     height={yarnImageSize}
//                     className="pointer-events-none select-none"
//                     style={{ transformOrigin: `${center.x}px ${center.y}px`, transform: `rotate(${rotation}deg)` }}
//                   />
//                 </svg>
//               </div>
//             </div>

//             {/* RIGHT SIDE — Description with Animation */}
//             <div
//               className={`w-full md:w-1/2 h-[450px] relative z-10 flex flex-col justify-center items-start p-4 space-y-6 overflow-y-auto transition-all duration-1000 delay-500 ${
//                 isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
//               }`}
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
//                 <div className="flex-1 rounded-xl px-6 py-4 shadow-lg">
//                   <h4 className="text-xl md:text-2xl font-bold text-green-100 mb-2 underline underline-offset-4">
//                     Count Range
//                   </h4>
//                   <p className="text-lg md:text-xl text-white drop-shadow font-semibold">
//                     RING SPUN NE 12 - NE 80
//                     <br />
//                     OPEN END NE 2 - NE 30
//                   </p>
//                 </div>
//                 {/* Variety - right */}
//                 <div className="flex-1 rounded-xl px-6 py-4 shadow-lg">
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




// import { useState, useEffect, useRef } from "react";

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
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   // Intersection Observer for fade-in animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const bgImageUrl = "/assets/yarnbg.png";

//   return (
//     <section
//       ref={sectionRef}
//       id="yarns"
//       className="relative w-full py-8 bg-white scroll-mt-24"
//       style={{ scrollMarginTop: "100px" }}
//     >
//       <div className="px-[50px]">
//         {/* Title */}
//         <div
//           className={`text-center transition-all duration-1000 ease-out ${
//             isVisible
//               ? "opacity-100 transform translate-y-0"
//               : "opacity-0 transform translate-y-8"
//           }`}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-2">
//             YARNS
//           </h2>
//           <div className="mx-auto w-16 h-[5px] rounded-full bg-green-600 mb-6"></div>
//         </div>

//         <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden">
//           <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-4 px-6 py-6">
//             {/* LEFT SIDE — Semi-circle Static Layout */}
//             <div
//               className={`relative w-full md:w-1/2 min-w-[330px] h-[480px] flex items-center justify-center transition-all duration-1000 delay-300 ${
//                 isVisible
//                   ? "opacity-100 transform translate-x-0"
//                   : "opacity-0 transform -translate-x-8"
//               }`}
//             >
//               <svg
//                 viewBox="0 0 500 500"
//                 className="w-full h-full"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {/* Semi-circle path (invisible, for positioning reference) */}
//                 <path
//                   d="M 150 100 A 200 200 0 0 1 150 400"
//                   fill="none"
//                   stroke="transparent"
//                   strokeWidth="2"
//                   id="semiPath"
//                 />

//                 {/* Dotted connector lines */}
//                 {LOGOS.map((_, idx) => {
//                   const angleStep = 180 / (LOGOS.length - 1);
//                   const angle = (-90 + idx * angleStep) * (Math.PI / 180);
//                   const centerX = 150;
//                   const centerY = 250;
//                   const radius = 200;
//                   const logoX = centerX + radius * Math.cos(angle);
//                   const logoY = centerY + radius * Math.sin(angle);
//                   return (
//                     <line
//                       key={`line-${idx}`}
//                       x1={centerX}
//                       y1={centerY}
//                       x2={logoX}
//                       y2={logoY}
//                       stroke="#999"
//                       strokeWidth="1.5"
//                       strokeDasharray="4,4"
//                     />
//                   );
//                 })}

//                 {/* Logos along path (full actual size visible) */}
//                 {LOGOS.map((logo, idx) => {
//                   const angleStep = 180 / (LOGOS.length - 1);
//                   const angle = (-90 + idx * angleStep) * (Math.PI / 180);
//                   const centerX = 150;
//                   const centerY = 250;
//                   const radius = 200;
//                   const x = centerX + radius * Math.cos(angle);
//                   const y = centerY + radius * Math.sin(angle);
//                   const size = 66; // increased size
//                   return (
//                     <image
//                       key={logo.src}
//                       href={logo.src}
//                       x={x - size / 2}
//                       y={y - size / 2}
//                       width={size}
//                       height={size}
//                       preserveAspectRatio="xMidYMid meet"
//                     />
//                   );
//                 })}

//                 {/* Center Yarn circle */}
//                 <circle cx="150" cy="250" r="70" fill="#f0f0f0" />
//                 <text
//                   x="150"
//                   y="255"
//                   textAnchor="middle"
//                   fontSize="20"
//                   fontWeight="bold"
//                   fill="#333"
//                 >
//                   YARN
//                 </text>
//               </svg>
//             </div>

//             {/* RIGHT SIDE — Text */}
//             <div
//               className={`w-full md:w-1/2 h-[450px] relative z-10 flex flex-col justify-center items-start p-4 space-y-6 overflow-y-auto transition-all duration-1000 delay-500 ${
//                 isVisible
//                   ? "opacity-100 transform translate-x-0"
//                   : "opacity-0 transform translate-x-8"
//               }`}
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

//               <div className="w-full flex flex-col md:flex-row gap-6 mb-4">
//                 {/* Count Range */}
//                 <div className="flex-1 rounded-xl px-6 py-4 shadow-lg">
//                   <h4 className="text-xl md:text-2xl font-bold text-green-100 mb-2 underline underline-offset-4">
//                     Count Range
//                   </h4>
//                   <p className="text-lg md:text-xl text-white drop-shadow font-semibold">
//                     RING SPUN NE 12 - NE 80
//                     <br />
//                     OPEN END NE 2 - NE 30
//                   </p>
//                 </div>

//                 {/* Variety */}
//                 <div className="flex-1 rounded-xl px-6 py-4 shadow-lg">
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


// import { useState, useEffect, useRef } from "react";

// const LOGOS = [
//   { src: "/assets/viscose.png", alt: "Viscose" },
//   { src: "/assets/modal.png", alt: "Modal" },
//   { src: "/assets/excel.png", alt: "Excel" },
//   { src: "/assets/liveco.png", alt: "Liveco" },
//   { src: "/assets/bamboo.jpg", alt: "Bamboo" },
//   { src: "/assets/circulose.png", alt: "Circulose" },
//   { src: "/assets/tencel.png", alt: "Tencel" },
//   { src: "/assets/ecovera.png", alt: "Ecovera" },
//   { src: "/assets/refinra.png", alt: "Refinra" },
// ];

// export default function YarnsSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
//   const sectionRef = useRef<HTMLElement>(null);

//   // Intersection Observer for fade-in animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const bgImageUrl = "/assets/yarnbg.png";

//   return (
//     <section
//       ref={sectionRef}
//       id="yarns"
//       className="relative w-full py-8 bg-white scroll-mt-24"
//       style={{ scrollMarginTop: "100px" }}
//     >
//       <div className="px-[50px]">
//         {/* Title */}
//         <div
//           className={`text-center transition-all duration-1000 ease-out ${
//             isVisible
//               ? "opacity-100 transform translate-y-0"
//               : "opacity-0 transform translate-y-8"
//           }`}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-2">
//             YARNS
//           </h2>
//           <div className="mx-auto w-16 h-[5px] rounded-full bg-green-600 mb-6"></div>
//         </div>

//         <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden">
//           <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-4 px-6 py-6">
//             {/* LEFT SIDE — Semi-circle Static Layout */}
//             <div
//               className={`relative w-full md:w-1/2 min-w-[330px] h-[480px] flex items-center justify-center transition-all duration-1000 delay-300 ${
//                 isVisible
//                   ? "opacity-100 transform translate-x-0"
//                   : "opacity-0 transform -translate-x-8"
//               }`}
//             >
//               <svg
//                 viewBox="0 0 500 500"
//                 className="w-full h-full"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {/* Semi-circle path (invisible, for positioning reference) */}
//                 <path
//                   d="M 150 100 A 200 200 0 0 1 150 400"
//                   fill="none"
//                   stroke="transparent"
//                   strokeWidth="2"
//                   id="semiPath"
//                 />

//                 {/* Dotted connector lines */}
//                 {LOGOS.map((_, idx) => {
//                   const angleStep = 180 / (LOGOS.length - 1);
//                   const angle = (-90 + idx * angleStep) * (Math.PI / 180);
//                   const centerX = 150;
//                   const centerY = 250;
//                   const radius = 200;
//                   const logoX = centerX + radius * Math.cos(angle);
//                   const logoY = centerY + radius * Math.sin(angle);
//                   return (
//                     <line
//                       key={`line-${idx}`}
//                       x1={centerX}
//                       y1={centerY}
//                       x2={logoX}
//                       y2={logoY}
//                       stroke="#999"
//                       strokeWidth="1.5"
//                       strokeDasharray="4,4"
//                     />
//                   );
//                 })}

//                 {/* Logos along path (full actual size visible with hover preview) */}
//                 {LOGOS.map((logo, idx) => {
//                   const angleStep = 180 / (LOGOS.length - 1);
//                   const angle = (-90 + idx * angleStep) * (Math.PI / 180);
//                   const centerX = 150;
//                   const centerY = 250;
//                   const radius = 200;
//                   const x = centerX + radius * Math.cos(angle);
//                   const y = centerY + radius * Math.sin(angle);
//                   const size = 66;
//                   return (
//                     <image
//                       key={logo.src}
//                       href={logo.src}
//                       x={x - size / 2}
//                       y={y - size / 2}
//                       width={size}
//                       height={size}
//                       preserveAspectRatio="xMidYMid meet"
//                       style={{ cursor: "pointer" }}
//                       onMouseEnter={() => setHoveredLogo(logo.src)}
//                       onMouseLeave={() => setHoveredLogo(null)}
//                     />
//                   );
//                 })}

//                 {/* Center Yarn Circle with Hover Preview */}
//                 <circle cx="150" cy="250" r="70" fill="#f0f0f0" />
//                 {hoveredLogo ? (
//                   <image
//                     href={hoveredLogo}
//                     x={150 - 50}
//                     y={250 - 50}
//                     width={100}
//                     height={100}
//                     preserveAspectRatio="xMidYMid meet"
//                   />
//                 ) : (
//                   <text
//                     x="150"
//                     y="255"
//                     textAnchor="middle"
//                     fontSize="20"
//                     fontWeight="bold"
//                     fill="#333"
//                   >
//                     YARN
//                   </text>
//                 )}
//               </svg>
//             </div>

//             {/* RIGHT SIDE — Text */}
//             <div
//               className={`w-full md:w-1/2 h-[450px] relative z-10 flex flex-col justify-center items-start p-4 space-y-6 overflow-y-auto transition-all duration-1000 delay-500 ${
//                 isVisible
//                   ? "opacity-100 transform translate-x-0"
//                   : "opacity-0 transform translate-x-8"
//               }`}
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

//               <div className="w-full flex flex-col md:flex-row gap-6 mb-4">
//                 {/* Count Range */}
//                 <div className="flex-1 rounded-xl px-6 py-4 shadow-lg">
//                   <h4 className="text-xl md:text-2xl font-bold text-green-100 mb-2 underline underline-offset-4">
//                     Count Range
//                   </h4>
//                   <p className="text-lg md:text-xl text-white drop-shadow font-semibold">
//                     RING SPUN NE 12 - NE 80
//                     <br />
//                     OPEN END NE 2 - NE 30
//                   </p>
//                 </div>

//                 {/* Variety */}
//                 <div className="flex-1 rounded-xl px-6 py-4 shadow-lg">
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




// import { useState, useEffect, useRef } from "react";

// const LOGOS = [
//   { src: "/assets/viscose.png", alt: "Viscose" },
//   { src: "/assets/modal.png", alt: "Modal" },
//   { src: "/assets/excel.png", alt: "Excel" },
//   { src: "/assets/liveco.png", alt: "Liveco" },
//   { src: "/assets/bamboo.jpg", alt: "Bamboo" },
//   { src: "/assets/circulose.png", alt: "Circulose" },
//   { src: "/assets/tencel.png", alt: "Tencel" },
//   { src: "/assets/ecovera.png", alt: "Ecovera" },
//   { src: "/assets/refinra.png", alt: "Refinra" },
// ];

// export default function YarnsSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
//   const [logos, setLogos] = useState(LOGOS);
//   const sectionRef = useRef<HTMLElement>(null);

//   // Intersection Observer for fade-in animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // Animation: shift logos every second
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setLogos((prev) => {
//         const newArr = [...prev];
//         const first = newArr.shift(); // remove first
//         if (first) newArr.push(first); // add to end
//         return newArr;
//       });
//     }, 1000); // 1 second per shift
//     return () => clearInterval(interval);
//   }, []);

//   const bgImageUrl = "/assets/yarnbg.png";

//   return (
//     <section
//       ref={sectionRef}
//       id="yarns"
//       className="relative w-full py-8 bg-white scroll-mt-24"
//       style={{ scrollMarginTop: "100px" }}
//     >
//       <div className="px-[50px]">
//         {/* Title */}
//         <div
//           className={`text-center transition-all duration-1000 ease-out ${
//             isVisible
//               ? "opacity-100 transform translate-y-0"
//               : "opacity-0 transform translate-y-8"
//           }`}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//             YARNS
//           </h2>
//           <div className="mx-auto w-16 h-[5px] rounded-full bg-green-600 mb-6"></div>
//         </div>

//         <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden">
//           <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch gap-4 px-6 py-6">
//             {/* LEFT SIDE — Semi-circle Static Layout */}
//             <div
//               className={`relative w-full md:w-1/2 min-w-[330px] h-[480px] flex items-center justify-center transition-all duration-1000 delay-300 ${
//                 isVisible
//                   ? "opacity-100 transform translate-x-0"
//                   : "opacity-0 transform -translate-x-8"
//               }`}
//             >
//               <svg
//                 viewBox="0 0 500 500"
//                 className="w-full h-full"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {/* Semi-circle path (invisible) */}
//                 <path
//                   d="M 150 100 A 200 200 0 0 1 150 400"
//                   fill="none"
//                   stroke="transparent"
//                   strokeWidth="2"
//                   id="semiPath"
//                 />

//                 {/* Dotted connector lines */}
//                 {logos.map((_, idx) => {
//                   const angleStep = 180 / (logos.length - 1);
//                   const angle = (-90 + idx * angleStep) * (Math.PI / 180);
//                   const centerX = 150;
//                   const centerY = 250;
//                   const radius = 200;
//                   const logoX = centerX + radius * Math.cos(angle);
//                   const logoY = centerY + radius * Math.sin(angle);
//                   return (
//                     <line
//                       key={`line-${idx}`}
//                       x1={centerX}
//                       y1={centerY}
//                       x2={logoX}
//                       y2={logoY}
//                       stroke="#999"
//                       strokeWidth="1.5"
//                       strokeDasharray="4,4"
//                     />
//                   );
//                 })}

//                 {/* Logos along path */}
//                 {logos.map((logo, idx) => {
//                   const angleStep = 180 / (logos.length - 1);
//                   const angle = (-90 + idx * angleStep) * (Math.PI / 180);
//                   const centerX = 150;
//                   const centerY = 250;
//                   const radius = 200;
//                   const x = centerX + radius * Math.cos(angle);
//                   const y = centerY + radius * Math.sin(angle);
//                   const size = 66;
//                   return (
//                     <image
//                       key={`${logo.src}-${idx}`}
//                       href={logo.src}
//                       x={x - size / 2}
//                       y={y - size / 2}
//                       width={size}
//                       height={size}
//                       preserveAspectRatio="xMidYMid meet"
//                       style={{ cursor: "pointer" }}
//                       onMouseEnter={() => setHoveredLogo(logo.src)}
//                       onMouseLeave={() => setHoveredLogo(null)}
//                     />
//                   );
//                 })}

//                 {/* Center Yarn Circle */}
//                 <circle cx="150" cy="250" r="70" fill="#f0f0f0" />
//                 {hoveredLogo ? (
//                   <image
//                     href={hoveredLogo}
//                     x={150 - 50}
//                     y={250 - 50}
//                     width={100}
//                     height={100}
//                     preserveAspectRatio="xMidYMid meet"
//                   />
//                 ) : (
//                   <text
//                     x="150"
//                     y="255"
//                     textAnchor="middle"
//                     fontSize="20"
//                     fontWeight="bold"
//                     fill="#333"
//                   >
//                     YARN
//                   </text>
//                 )}
//               </svg>
//             </div>

//             {/* RIGHT SIDE — Text */}
//             <div
//               className={`w-full md:w-1/2 h-[450px] relative z-10 flex flex-col justify-center items-start p-4 space-y-6 overflow-y-auto transition-all duration-1000 delay-500 ${
//                 isVisible
//                   ? "opacity-100 transform translate-x-0"
//                   : "opacity-0 transform translate-x-8"
//               }`}
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

//               <div className="w-full flex flex-col md:flex-row gap-6 mb-4">
//                 {/* Count Range */}
//                 <div className="flex-1 rounded-xl px-6 py-4 shadow-lg">
//                   <h4 className="text-xl md:text-2xl font-bold text-green-100 mb-2 underline underline-offset-4">
//                     Count Range
//                   </h4>
//                   <p className="text-lg md:text-xl text-white drop-shadow font-semibold">
//                     RING SPUN NE 12 - NE 80
//                     <br />
//                     OPEN END NE 2 - NE 30
//                   </p>
//                 </div>

//                 {/* Variety */}
//                 <div className="flex-1 rounded-xl px-6 py-4 shadow-lg">
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

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const yarnAreaRef = useRef(null);

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
    let logoTimer;
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
  const getLogoPositions = (cx, cy, r, count) => {
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
