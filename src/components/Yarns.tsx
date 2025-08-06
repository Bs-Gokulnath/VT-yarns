// // import React from "react";

// // // Logo images (update paths as needed)
// // const CHAKRA_LOGOS = [
// //   "/assets/bamboo.jpg",
// //   "/assets/download.jpg",
// //   "/assets/birla_cellulose_99fde4a4bc.webp",
// //   "/assets/images.png",
// //   "/assets/refinra.png",
// //   "/assets/liveco.png",
// //   "/assets/ecovera.png",
// //   "/assets/circulose.png",
// //   "/assets/vts-logo.png",
// // ];

// // // Chakra logo placement for a 260x260px chakra image
// // const POSITIONS = [
// //   { left: "18%", top: "85%" },
// //   { left: "5%", top: "62%" },
// //   { left: "7%", top: "36%" },
// //   { left: "22%", top: "17%" },
// //   { left: "49%", top: "10%" },
// //   { left: "75%", top: "17%" },
// //   { left: "92%", top: "36%" },
// //   { left: "94%", top: "62%" },
// //   { left: "81%", top: "85%" },
// // ];

// // function ChakraWithLogos() {
// //   return (
// //     <div className="relative w-[300px] h-[450px] flex items-center justify-center mx-auto mt-[60px]">
// //       <img
// //         src="/assets/chakra.png"
// //         alt="Yarn Chakra"
// //         className="absolute left-0 top-0 w-full h-full select-none pointer-events-none"
// //         draggable={false}
// //         style={{ zIndex: 1 }}
// //       />
// //       {CHAKRA_LOGOS.map((src, i) => (
// //         <div
// //           key={src + i}
// //           className="absolute w-16 h-16 rounded-full bg-white flex items-center justify-center ring-2 ring-white hover:ring-blue-400 transition"
// //           style={{
// //             left: POSITIONS[i].left,
// //             top: POSITIONS[i].top,
// //             transform: "translate(-50%, -50%)",
// //             zIndex: 2,
// //           }}
// //         >
// //           <img
// //             src={src}
// //             alt={`Yarn Logo #${i + 1}`}
// //             className="w-14 h-14 object-contain rounded-full"
// //             loading="lazy"
// //             draggable={false}
// //           />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default function YarnsSection() {
// //   return (
// //     <section className="w-full bg-gray-50 flex flex-col items-center pt-0 md:pt-12 px-0">
// //       {/* Full-width black strip with YARNS text (no shadow) */}
// //       <div className="w-full relative z-30 flex flex-col items-center">
// //         <div
// //           className="w-full bg-black flex justify-center items-center"
// //           style={{ height: "84px" }}
// //         >
// //           <span
// //             className="text-white text-4xl md:text-5xl font-extrabold tracking-wide"
// //             style={{
// //               letterSpacing: "0.12em",
// //             }}
// //           >
// //             YARNS
// //           </span>
// //         </div>
// //       </div>

// //       {/* Main Yarns bar content - BIGGER AND WIDER, NO SHADOW */}
// //       <div
// //         className="
// //           relative w-full
// //           max-w-[1440px] 
// //           min-h-[480px]
// //           flex flex-col md:flex-row
// //           items-center justify-between
// //           mt-[-74px] md:mt-[-100px]
// //           z-20
// //           px-4 sm:px-12 lg:px-24
// //           py-12
// //         "
// //       >
// //         {/* Chakra + Logos */}
// //         <div className="flex flex-col items-center justify-center w-full md:w-[340px] shrink-0 py-6 md:py-0">
// //           <ChakraWithLogos />
// //         </div>
// //         {/* Text Content */}
// //         <div className="flex-1 flex flex-col justify-center items-start px-0 sm:px-10 py-24">
// //           <span className="text-blue-700 font-semibold text-base tracking-wider uppercase mb-2">
// //             Yarn Collection
// //           </span>
// //           <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
// //             Premium Yarns for Every Need
// //           </h2>
// //           <p className="text-base sm:text-xl text-gray-700 mb-12 max-w-2xl">
// //             Our yarns are crafted with quality, sustainability, and comfort at their core.
// //             <br className="hidden sm:block" />
// //             Choose from a curated selection of premium fibers engineered for performance in every creation.
// //           </p>
// //           <button className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer whitespace-nowrap">
// //             Learn More
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// import React from "react";

// // Logo images (update paths as needed)
// const CHAKRA_LOGOS = [
//   "/assets/bamboo.jpg",
//   "/assets/download.jpg",
//   "/assets/birla_cellulose_99fde4a4bc.webp",
//   "/assets/images.png",
//   "/assets/refinra.png",
//   "/assets/liveco.png",
//   "/assets/ecovera.png",
//   "/assets/circulose.png",
//   "/assets/vts-logo.png",
// ];

// // Chakra logo placement for a 260x260px chakra image
// const POSITIONS = [
//   { left: "18%", top: "85%" },
//   { left: "5%", top: "62%" },
//   { left: "7%", top: "36%" },
//   { left: "22%", top: "17%" },
//   { left: "49%", top: "10%" },
//   { left: "75%", top: "17%" },
//   { left: "92%", top: "36%" },
//   { left: "94%", top: "62%" },
//   { left: "81%", top: "85%" },
// ];

// function ChakraWithLogos() {
//   return (
//     <div className="relative w-[300px] h-[450px] flex items-center justify-center mx-auto mt-[60px]">
//       <img
//         src="/assets/chakra.png"
//         alt="Yarn Chakra"
//         className="absolute left-0 top-0 w-full h-full select-none pointer-events-none"
//         draggable={false}
//         style={{ zIndex: 1 }}
//       />
//       {CHAKRA_LOGOS.map((src, i) => (
//         <div
//           key={src + i}
//           className="absolute w-16 h-16 rounded-full bg-white flex items-center justify-center ring-2 ring-white hover:ring-blue-400 transition"
//           style={{
//             left: POSITIONS[i].left,
//             top: POSITIONS[i].top,
//             transform: "translate(-50%, -50%)",
//             zIndex: 2,
//           }}
//         >
//           <img
//             src={src}
//             alt={`Yarn Logo #${i + 1}`}
//             className="w-14 h-14 object-contain rounded-full"
//             loading="lazy"
//             draggable={false}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function YarnsSection() {
//   return (
//     <section className="w-full bg-gray-50 flex flex-col items-center pt-0 md:pt-12 px-0">
//       {/* Full-width video strip with YARNS text */}
//       <div className="w-full relative z-30 flex flex-col items-center overflow-hidden" style={{ height: "84px" }}>
//         {/* Video Background */}
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           src="https://www.shutterstock.com/shutterstock/videos/1107376703/preview/stock-footage-panoramic-cinematic-shot-cotton-thread-manufacturing-in-a-textile-oil-factory-organic-cotton-yarn.webm"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//         {/* Optionally, a subtle overlay for readability */}
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative flex justify-center items-center w-full h-full">
//           <span
//             className="text-white text-4xl md:text-5xl font-extrabold tracking-wide"
//             style={{
//               letterSpacing: "0.12em",
//             }}
//           >
//             YARNS
//           </span>
//         </div>
//       </div>

//       {/* Main Yarns bar content - BIGGER AND WIDER, NO SHADOW */}
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
//         "
//       >
//         {/* Chakra + Logos */}
//         <div className="flex flex-col items-center justify-center w-full md:w-[340px] shrink-0 py-6 md:py-0">
//           <ChakraWithLogos />
//         </div>
//         {/* Text Content */}
//         <div className="flex-1 flex flex-col justify-center items-start px-0 sm:px-10 py-34">
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
//           <button className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer whitespace-nowrap">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";

// Logo images (update paths as needed)
const CHAKRA_LOGOS = [
  "/assets/bamboo.jpg",
  "/assets/download.jpg",
  "/assets/birla_cellulose_99fde4a4bc.webp",
  "/assets/images.png",
  "/assets/refinra.png",
  "/assets/liveco.png",
  "/assets/ecovera.png",
  "/assets/circulose.png",
  "/assets/vts-logo.png",
];

// LOGO POSITIONS — now very close to the chakra edge
const POSITIONS = [
  { left: "19%", top: "84%" },
  { left: "6%", top: "62%" },
  { left: "10%", top: "37%" },
  { left: "27%", top: "19%" },
  { left: "50%", top: "13%" },
  { left: "73%", top: "19%" },
  { left: "90%", top: "37%" },
  { left: "93%", top: "62%" },
  { left: "81%", top: "84%" },
];

function ChakraWithLogos() {
  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center mx-auto mt-[32px]">
      {/* Chakra image */}
      <img
        src="/assets/chakra.png"
        alt="Yarn Chakra"
        className="absolute left-0 top-0 w-full h-full select-none pointer-events-none"
        draggable={false}
        style={{ zIndex: 1 }}
      />
      {CHAKRA_LOGOS.map((src, i) => (
        <div
          key={src + i}
          className="absolute w-14 h-14 rounded-full bg-white flex items-center justify-center ring-2 ring-white hover:ring-blue-400 transition"
          style={{
            left: POSITIONS[i].left,
            top: POSITIONS[i].top,
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <img
            src={src}
            alt={`Yarn Logo #${i + 1}`}
            className="w-12 h-12 object-contain rounded-full"
            loading="lazy"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}

export default function YarnsSection() {
  return (
    <section className="w-full bg-gray-50 flex flex-col items-center pt-0 md:pt-12 px-0">
      {/* Full-width video strip with YARNS text */}
      <div className="w-full relative z-30 flex flex-col items-center overflow-hidden" style={{ height: "84px" }}>
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.shutterstock.com/shutterstock/videos/1107376703/preview/stock-footage-panoramic-cinematic-shot-cotton-thread-manufacturing-in-a-textile-oil-factory-organic-cotton-yarn.webm"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative flex justify-center items-center w-full h-full">
          <span
            className="text-white text-4xl md:text-5xl font-extrabold tracking-wide"
            style={{
              letterSpacing: "0.12em",
            }}
          >
            YARNS
          </span>
        </div>
      </div>

      {/* Main Yarns bar content - bigger & wider, logo circles snug on chakra */}
      <div
        className="
          relative w-full
          max-w-[1440px] 
          min-h-[480px]
          flex flex-col md:flex-row
          items-center justify-between
          mt-[-74px] md:mt-[-100px]
          z-20
          px-4 sm:px-12 lg:px-24
          py-12
        "
      >
        {/* Chakra + Logos */}
        <div className="flex flex-col items-center justify-center w-full md:w-[340px] shrink-0 py-6 md:py-0">
          <ChakraWithLogos />
        </div>
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start px-0 sm:px-10 py-24">
          <span className="text-blue-700 font-semibold text-base tracking-wider uppercase mb-2">
            Yarn Collection
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Premium Yarns for Every Need
          </h2>
          <p className="text-base sm:text-xl text-gray-700 mb-12 max-w-2xl">
            Our yarns are crafted with quality, sustainability, and comfort at their core.
            <br className="hidden sm:block" />
            Choose from a curated selection of premium fibers engineered for performance in every creation.
          </p>
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer whitespace-nowrap">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
