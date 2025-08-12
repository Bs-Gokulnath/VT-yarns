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



// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center bg-white"
//     >
//       {/* Container with limited width and white background creating left & right white spacing */}
//       <div className="relative w-full max-w-[1420px] mx-auto bg-black min-h-[85vh] mt-12 flex items-center justify-center overflow-hidden "> 
//         {/* Background Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover rounded-4xl"
//           src="https://www.shutterstock.com/shutterstock/videos/1081876547/preview/stock-footage-sewing-spools-managed-by-factory-machine-close-up.webm"
//           autoPlay
//           loop
//           muted
//           playsInline
//         ></video>

//         {/* Overlay */}
//         <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

//         {/* Content */}
//         <div className="relative px-6 text-center text-white z-10 w-full max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//             Spinning <span className="block">Sustainable Future</span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-xl mx-auto leading-relaxed">
//             For a healthier and greener way of living
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


// import {useEffect, useState } from "react";

// export default function HeroSection() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     // Trigger the animation shortly after mount
//     const timer = setTimeout(() => setVisible(true), 100); // slight delay for smoothness
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center bg-white"
//     >
//       {/* Container with limited width and white background creating left & right white spacing */}
//       <div className="relative w-full max-w-[1420px] mx-auto bg-black min-h-[85vh] mt-12 flex items-center justify-center overflow-hidden "> 
//         {/* Background Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover rounded-4xl"
//           src="https://www.shutterstock.com/shutterstock/videos/1081876547/preview/stock-footage-sewing-spools-managed-by-factory-machine-close-up.webm"
//           autoPlay
//           loop
//           muted
//           playsInline
//         ></video>

//         {/* Overlay */}
//         <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

//         {/* Content */}
//         <div
//           className={`relative px-6 text-center text-white z-10 w-full max-w-4xl mx-auto transition-opacity duration-1500 ease-in-out ${
//             visible ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//             Spinning <span className="block">Sustainable Future</span>
//           </h1>
//           {/* <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-xl mx-auto leading-relaxed">
//             For a healthier and greener way of living
//           </p> */}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // First, wait for the header to be fully rendered and stable
    const headerTimer = setTimeout(() => {
      setIsLoading(false);
      // Then trigger the hero animation after header is ready
      const heroTimer = setTimeout(() => setVisible(true), 200);
      return () => clearTimeout(heroTimer);
    }, 800); // Wait 800ms for header to be fully rendered

    return () => clearTimeout(headerTimer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white"
    >
      {/* Main Container */}
      <div className="relative w-full max-w-[1420px] mx-auto bg-black min-h-[96vh] mt-12 flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://www.shutterstock.com/shutterstock/videos/1081876547/preview/stock-footage-sewing-spools-managed-by-factory-machine-close-up.webm"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Loading State */}
        {isLoading && (
          <div className="relative z-20 flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
          </div>
        )}

        {/* Content - Only show after loading and with fade-in animation */}
        {!isLoading && (
          <div
            className={`relative px-6 text-center text-white z-10 w-full max-w-4xl mx-auto transition-all duration-1500 ease-in-out ${
              visible 
                ? "opacity-100 transform translate-y-0" 
                : "opacity-0 transform translate-y-8"
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Spinning <span className="block">Sustainable Future</span>
            </h1>
          </div>
        )}

        {/* Bottom Equal Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 80"
            preserveAspectRatio="none"
          >
            {/* Even shallower curve */}
            <path
              d="M0,0 C480,30 1440,30 1920,0 L1920,80 L0,80 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
