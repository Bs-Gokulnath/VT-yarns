// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center bg-black"
//     >
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="https://www.shutterstock.com/shutterstock/videos/1081876547/preview/stock-footage-sewing-spools-managed-by-factory-machine-close-up.webm"
//         autoPlay
//         loop
//         muted
//         playsInline
//       ></video>

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

//       {/* Content */}
//       <div className="relative container mx-auto px-6 text-center text-white z-10">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//             Spinning{' '}
//             <span className="block">Sustainable Future</span>
//           </h1>

//           <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
//             For a healthier and greener way of living
//           </p>

//         </div>
//       </div>
//     </section>
//   );
// }



export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white"
    >
      {/* Container with limited width and white background creating left & right white spacing */}
      <div className="relative w-full max-w-[1420px] mx-auto bg-black min-h-[85vh] mt-12 flex items-center justify-center overflow-hidden "> 
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover rounded-4xl"
          src="https://www.shutterstock.com/shutterstock/videos/1081876547/preview/stock-footage-sewing-spools-managed-by-factory-machine-close-up.webm"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Content */}
        <div className="relative px-6 text-center text-white z-10 w-full max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Spinning <span className="block">Sustainable Future</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-xl mx-auto leading-relaxed">
            For a healthier and greener way of living
          </p>
        </div>
      </div>
    </section>
  );
}
