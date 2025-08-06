export default function ComfortSection() {
  const features = [
    { icon: 'ri-leaf-line', title: '100% Natural', color: 'text-green-600' },
    { icon: 'ri-recycle-line', title: 'Renewable', color: 'text-green-600' },
    { icon: 'ri-shield-check-line', title: 'Biodegradable', color: 'text-green-600' }
  ];

  const benefits = [
    { icon: 'ri-drop-line', title: 'Fiber Comfort', color: 'text-blue-600' },
    { icon: 'ri-temp-cold-line', title: 'Dry feeling', color: 'text-blue-600' },
    { icon: 'ri-heart-line', title: 'Breathable', color: 'text-red-500' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Soft%20white%20cotton%20textile%20fibers%20being%20processed%20in%20modern%20manufacturing%20equipment%2C%20close-up%20macro%20photography%20of%20natural%20renewable%20fiber%20materials%2C%20clean%20industrial%20setting%20with%20soft%20lighting%2C%20minimal%20background%20highlighting%20texture%20and%20quality&width=600&height=800&seq=comfort1&orientation=portrait"
              alt="Textile Production"
              className="w-full h-[600px] object-cover object-top rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                WHY CHOOSE
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Comfort and Satisfaction to all
            </h2>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 ${feature.color} bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <i className={`${feature.icon} text-xl`}></i>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{feature.title}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 ${benefit.color} bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <i className={`${benefit.icon} text-xl`}></i>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{benefit.title}</p>
                </div>
              ))}
            </div>
            
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}