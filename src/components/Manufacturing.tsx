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
//   return (
//     <section id="products" className="w-full bg-white py-12 flex flex-col items-center">
//       {/* Title */}
      
//       <div className="text-center mb-16">
//           <span className="text-green-600 font-semibold text-sm tracking-wider uppercase pt-10">
//             OUR PRODUCTION
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
//             Manufacturing
//           </h2>
//         </div>

//       {/* Zig-Zag Row of Images */}
//       <div className="flex justify-center gap-1">
//         {MANUFACTURING_IMAGES.map((img, idx) => (
//           <div
//             key={idx}
//             className={`group transition-all duration-300 transform ${
//               idx % 2 === 0 ? "translate-y-6" : "-translate-y-6"
//             }`}
//           >
//             <div
//               className="w-24 md:w-32 h-80 md:h-90 bg-gray-100 overflow-hidden 
//                          transition-all duration-300 ease-in-out 
//                          group-hover:w-28 md:group-hover:w-60 
//                          group-hover:scale-110 group-hover:shadow-2xl relative"
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="w-full h-full object-cover"
//                 draggable={false}
//                 onError={(e) => {
//                   console.error(`Failed to load image: ${img.src}`);
//                   e.currentTarget.style.display = 'none';
//                 }}
//                 onLoad={() => {
//                   console.log(`Successfully loaded image: ${img.src}`);
//                 }}
//               />
//               {/* Hover overlay with image name */}
//               <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-start justify-center">
//                 <div className="text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0">
//                   <p className="text-sm md:text-3xl font-semibold">{img.alt}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



const MANUFACTURING_IMAGES = [
  { src: "/assets/manufacturing/blow-room.jpg", alt: "Blow Room" },
  { src: "/assets/manufacturing/carding.jpg", alt: "Carding" },
  { src: "/assets/manufacturing/spinning.jpeg", alt: "Spinning" },
  { src: "/assets/manufacturing/ring spin-1.jpg", alt: "Ring Spinning" },
  { src: "/assets/manufacturing/auto coner.jpeg", alt: "Auto Coner" },
  { src: "/assets/manufacturing/warping.jpg", alt: "Warping" },
  { src: "/assets/manufacturing/sizing.jpeg", alt: "Sizing" },
  { src: "/assets/manufacturing/vortex_main.jpg", alt: "Vortex Main" },
  { src: "/assets/manufacturing/ring spin.webp", alt: "Ring Spinning" },
];

export default function ManufacturingSection() {
  return (
    <section
      id="products"
      className="w-full bg-white py-12 flex flex-col items-center"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase pt-10">
          OUR PRODUCTION
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
          Manufacturing
        </h2>
      </div>

      {/* Zig-Zag Row of Images */}
      <div className="flex flex-wrap justify-center gap-1 px-2 md:px-0">
        {MANUFACTURING_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={`group transition-all duration-300 transform ${
              idx % 2 === 0 ? "translate-y-3 md:translate-y-6" : "-translate-y-3 md:-translate-y-6"
            }`}
          >
            <div
              className="w-20 sm:w-24 md:w-32 h-56 sm:h-72 md:h-80 bg-gray-100 overflow-hidden 
                         transition-all duration-300 ease-in-out 
                         group-hover:w-24 sm:group-hover:w-28 md:group-hover:w-60 
                         group-hover:scale-105 md:group-hover:scale-110 
                         group-hover:shadow-2xl relative"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                draggable={false}
                onError={(e) => {
                  console.error(`Failed to load image: ${img.src}`);
                  e.currentTarget.style.display = "none";
                }}
                onLoad={() => {
                  console.log(`Successfully loaded image: ${img.src}`);
                }}
              />
              {/* Hover overlay with image name */}
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-black group-hover:bg-opacity-50 transition-all duration-300 flex items-start justify-center">
                <div className="text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 md:-translate-y-4 group-hover:translate-y-0">
                  <p className="text-xs sm:text-sm md:text-3xl font-semibold">
                    {img.alt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
