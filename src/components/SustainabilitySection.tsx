
export default function SustainabilitySection() {
  const commitments = [
    {
      icon: 'ri-leaf-line',
      title: 'Our Operations',
      description: 'APR is also contributing its bit to step with the FSC\'s Sustainable Framework and align with all required certifications, which include the Forest Management (FM) Certification.',
      color: 'text-green-600'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Our Responsibility',
      description: 'As one of the largest producers of Viscose Staple Fiber globally, we recognize our responsibility towards climate action and work responsibly.',
      color: 'text-green-600'
    },
    {
      icon: 'ri-heart-line',
      title: 'Our Impact',
      description: 'We believe in the power of responsibility and sustainability. Through implementing more efficient practices, we reduce environmental impact.',
      color: 'text-green-600'
    }
  ];

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
            Sustainability is fundamental to APR.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {commitments.map((commitment, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className={`w-16 h-16 ${commitment.color} bg-green-50 rounded-full flex items-center justify-center mb-6`}>
                <i className={`${commitment.icon} text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{commitment.title}</h3>
              <p className="text-gray-600 leading-relaxed">{commitment.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4`}>
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
