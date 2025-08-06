// import React from "react";

// export default function SustainabilitySection() {
//   const commitments = [
//     {
//       icon: 'ri-leaf-line',
//       title: 'Our Operations',
//       description: "APR is also contributing its bit to step with the FSC's Sustainable Framework and align with all required certifications, which include the Forest Management (FM) Certification.",
//       color: 'text-green-600',
//       videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your video 1 URL
//       hoverText: "Our operations emphasize responsible sourcing and certified sustainable forestry practices to minimize environmental footprint.",
//     },
//     {
//       icon: 'ri-shield-check-line',
//       title: 'Our Responsibility',
//       description: "As one of the largest producers of Viscose Staple Fiber globally, we recognize our responsibility towards climate action and work responsibly.",
//       color: 'text-green-600',
//       videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm", // Replace with your video 2 URL
//       hoverText: "We are committed to reducing emissions and resource consumption while promoting sustainable manufacturing processes worldwide.",
//     },
//     {
//       icon: 'ri-heart-line',
//       title: 'Our Impact',
//       description: "We believe in the power of responsibility and sustainability. Through implementing more efficient practices, we reduce environmental impact.",
//       color: 'text-green-600',
//       videoSrc: "https://media.w3.org/2010/05/sintel/trailer.mp4", // Replace with your video 3 URL
//       hoverText: "By adopting innovative solutions and continuous improvements, we positively impact community and environment alike.",
//     }
//   ];


//   const stats = [
//     { number: '294,872+', unit: 'MT', label: 'Annual Production Capacity' },
//     { number: '1,179+', unit: '', label: 'Job Created' },
//     { number: '1,233', unit: '', label: 'Employees' }
//   ];

//   return (
//     <section id="sustainability" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <div className="mb-6">
//             <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
//               OUR COMMITMENT
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight max-w-3xl mx-auto">
//             Sustainability
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {commitments.map((commitment, index) => (
//             <div
//               key={index}
//               className="relative rounded-lg overflow-hidden cursor-pointer h-80 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
//             >
//               {/* Background Video */}
//               <video
//                 className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.4] transition-opacity duration-300"
//                 src={commitment.videoSrc}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 preload="auto"
//               />

//               {/* Overlay that appears on hover */}
//               <div
//                 className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-white text-center"
//               >
//                 <p className="text-lg">{commitment.hoverText}</p>
//               </div>

//               {/* Content: sits above video */}
//               <div className="relative z-10 p-8 bg-white bg-opacity-90 rounded-lg m-4 shadow-md hover:bg-opacity-0 hover:text-white transition-colors duration-300">
//                 <div className={`w-16 h-16 ${commitment.color} bg-green-50 rounded-full flex items-center justify-center mb-6`}>
//                   <i className={`${commitment.icon} text-2xl`}></i>
//                 </div>

//                 <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-white">
//                   {commitment.title}
//                 </h3>

//                 <p className="text-gray-600 leading-relaxed transition-colors duration-300 hover:text-white">
//                   {commitment.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="text-center">
//               <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <i className="ri-bar-chart-line text-2xl text-green-600"></i>
//               </div>

//               <div className="text-4xl font-bold text-green-600 mb-2">
//                 {stat.number}
//                 {stat.unit && <span className="text-lg text-gray-500 ml-1">{stat.unit}</span>}
//               </div>
//               <p className="text-gray-600 font-medium">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useRef } from "react";

export default function SustainabilitySection() {
  const commitments = [
    {
      icon: 'ri-leaf-line',
      title: 'Our Operations',
      description: "APR is also contributing its bit to step with the FSC's Sustainable Framework and align with all required certifications, which include the Forest Management (FM) Certification.",
      color: 'text-green-600',
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your video 1 URL
      hoverText: "Our operations emphasize responsible sourcing and certified sustainable forestry practices to minimize environmental footprint.",
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Our Responsibility',
      description: "As one of the largest producers of Viscose Staple Fiber globally, we recognize our responsibility towards climate action and work responsibly.",
      color: 'text-green-600',
      videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm", // Replace with your video 2 URL
      hoverText: "We are committed to reducing emissions and resource consumption while promoting sustainable manufacturing processes worldwide.",
    },
    {
      icon: 'ri-heart-line',
      title: 'Our Impact',
      description: "We believe in the power of responsibility and sustainability. Through implementing more efficient practices, we reduce environmental impact.",
      color: 'text-green-600',
      videoSrc: "https://media.w3.org/2010/05/sintel/trailer.mp4", // Replace with your video 3 URL
      hoverText: "By adopting innovative solutions and continuous improvements, we positively impact community and environment alike.",
    }
  ];

  // Create refs array to control videos
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

  // Handler to play video on hover
  const handleMouseEnter = (index: number) => {
    const vid = videoRefs.current[index];
    if (vid) {
      vid.play();
    }
  };

  // Handler to pause video on mouse leave
  const handleMouseLeave = (index: number) => {
    const vid = videoRefs.current[index];
    if (vid) {
      vid.pause();
      vid.currentTime = 0; // optionally reset to start
    }
  };

  const stats = [
    { number: '294,872+', unit: 'MT', label: 'Annual Production Capacity' },
    { number: '1,179+', unit: '', label: 'Job Created' },
    { number: '1,233', unit: '', label: 'Employees' }
  ];

  return (
    <section id="sustainability" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
              OUR COMMITMENT
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight max-w-3xl mx-auto">
            Sustainability
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden cursor-pointer h-80 flex flex-col justify-between"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Background Video (paused by default) */}
              <video
                ref={el => (videoRefs.current[index] = el)}
                className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.4] transition-opacity duration-300"
                src={commitment.videoSrc}
                loop
                muted
                playsInline
                preload="auto"
                // video starts paused by default, will play on hover
                // disables autoplay so user doesn't preload
                autoPlay={false}
              />

              {/* Overlay that appears on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-white text-center pointer-events-none">
                <p className="text-lg">{commitment.hoverText}</p>
              </div>

              {/* Content: above video & overlay */}
              <div className="relative z-10 p-8 bg-white bg-opacity-90 rounded-lg m-4 shadow-md hover:bg-opacity-0 hover:text-white transition-colors duration-300">
                <div className={`w-16 h-16 ${commitment.color} bg-green-50 rounded-full flex items-center justify-center mb-6`}>
                  <i className={`${commitment.icon} text-2xl`}></i>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-white">
                  {commitment.title}
                </h3>

                <p className="text-gray-600 leading-relaxed transition-colors duration-300 hover:text-white">
                  {commitment.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-bar-chart-line text-2xl text-green-600"></i>
              </div>

              <div className="text-4xl font-bold text-green-600 mb-2">
                {stat.number}
                {stat.unit && <span className="text-lg text-gray-500 ml-1">{stat.unit}</span>}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
