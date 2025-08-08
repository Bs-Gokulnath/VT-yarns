const MANUFACTURING_IMAGES = [
  { src: "/assets/manufacturing/blow-room.jpg", alt: "Blow Room" },
  { src: "/assets/manufacturing/carding.jpg", alt: "Carding" },
  { src: "/assets/manufacturing/spinning.jpeg", alt: "Spinning" },
  { src: "/assets/manufacturing/ring spin-1.jpg", alt: "Ring Spinning" },
  { src: "/assets/manufacturing/auto coner.jpeg", alt: "Auto Coner" },
  { src: "/assets/manufacturing/warping.jpg", alt: "Warping" },
  { src: "/assets/manufacturing/sizing.jpeg", alt: "Sizing" },
  { src: "/assets/manufacturing/vortex_main.jpg", alt: "Vortex Main" },
  { src: "/assets/manufacturing/ring spin.webp", alt: "Ring Spinning Process" },
];

export default function ManufacturingSection() {
  return (
    <section id="products" className="w-full bg-white py-12 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-18 mt-[-45px]">
        Manufacturing
      </h2>

      {/* Zig-Zag Row of Images */}
      <div className="flex justify-center gap-1">
        {MANUFACTURING_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={`group transition-all duration-300 transform ${
              idx % 2 === 0 ? "translate-y-6" : "-translate-y-6"
            }`}
          >
            <div
              className="w-24 md:w-32 h-80 md:h-100 bg-gray-100 overflow-hidden 
                         transition-all duration-300 ease-in-out 
                         group-hover:w-28 md:group-hover:w-60 
                         group-hover:scale-110 group-hover:shadow-2xl relative"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                draggable={false}
                onError={(e) => {
                  console.error(`Failed to load image: ${img.src}`);
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => {
                  console.log(`Successfully loaded image: ${img.src}`);
                }}
              />
              {/* Hover overlay with image name */}
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-start justify-center">
                <div className="text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0">
                  <p className="text-sm md:text-3xl font-semibold">{img.alt}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
