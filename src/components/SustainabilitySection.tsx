import React from "react";

type Commitment = {
  icon?: string;
  title?: string;
  description?: string;
  color?: string;
  videoSrc: string;
  isWide?: boolean;
};

export default function SustainabilitySection() {
  const commitments: Commitment[] = [
    {
      // First card (Wide): TRACEABLE using local video
      videoSrc: "/assets/liva-infographic.mp4",
      isWide: true,
    },
    {
      // Solar Energy Card
      icon: "ri-shield-check-line",
      title: "SOLAR ENERGY",
      description: "LAND SOLAR - 3 MW\nROOF TOP - 2 MW",
      color: "text-green-600",
      videoSrc:
        "https://www.shutterstock.com/shutterstock/videos/3398510419/preview/stock-footage-drone-shot-of-engineers-inspecting-solar-panels-in-a-field.webm",
    },
    {
      // Wind Energy Card
      icon: "ri-heart-line",
      title: "WIND ENERGY",
      description:
        "VESTAS RRB - 225 KVA X 1\nSUZLON - 350 KVA X 2\nPIONEER - 750 KVA X 1",
      color: "text-green-600",
      videoSrc:
        "https://www.shutterstock.com/shutterstock/videos/1110948261/preview/stock-footage-aerial-footage-of-wind-turbines-that-gracefully-spin-in-one-direction.webm",
    },
  ];

  return (
    <section id="sustainability" className="py-20 bg-gray-100 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold text-sm tracking-wider uppercase pt-10">
            OUR COMMITMENT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Sustainability
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 ml-4 mr-4">
          {commitments.map((item, index) => (
            <div
              key={index}
              className={`group relative h-[400px] overflow-hidden shadow-lg cursor-pointer ${
                item.isWide
                  ? "col-span-12 md:col-span-6"
                  : "col-span-12 md:col-span-3"
              }`}
            >
              <video
                className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 brightness-100"
                src={item.videoSrc}
                autoPlay
                loop
                muted
                playsInline
              ></video>

              {item.isWide ? (
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                  <h3 className="text-4xl font-bold tracking-widest">
                    TRACEABLE
                  </h3>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div
                    className={`w-8 h-8 ${item.color} bg-white rounded-full flex items-center justify-center mb-4`}
                  >
                    <i className={`${item.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90 whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
