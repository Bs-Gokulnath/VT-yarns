export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                OUR PRODUCTS
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Textile Fibre
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our high-quality viscose rayon fibers are produced using sustainable methods and renewable wood sources, ensuring comfort, durability, and environmental responsibility in every product.
            </p>
            
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap">
              Learn More
            </button>
          </div>
          
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=High-quality%20white%20viscose%20rayon%20textile%20fibers%20in%20industrial%20production%20setting%2C%20detailed%20macro%20photography%20showing%20fiber%20texture%20and%20quality%2C%20clean%20manufacturing%20environment%20with%20professional%20lighting%2C%20minimal%20background%20focusing%20on%20product%20quality&width=600&height=800&seq=products1&orientation=portrait"
              alt="Textile Fibre Products"
              className="w-full h-[600px] object-cover object-top rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}