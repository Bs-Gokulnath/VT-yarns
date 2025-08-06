export default function NewsSection() {
  const news = [
    {
      image: 'https://readdy.ai/api/search-image?query=Modern%20textile%20manufacturing%20facility%20interior%20with%20advanced%20machinery%20and%20equipment%2C%20professional%20industrial%20photography%2C%20clean%20bright%20environment%20with%20workers%20in%20safety%20gear%2C%20sustainable%20production%20setting%20with%20natural%20lighting&width=400&height=250&seq=news1&orientation=landscape',
      title: 'Sure Runco Textile Industry',
      description: 'The newest edition of APR News newsletter is here! Our second quarter has seen sustainable innovations and partnerships.',
      category: 'Industry News'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Corporate%20business%20meeting%20with%20executives%20discussing%20sustainability%20initiatives%2C%20professional%20conference%20room%20setting%20with%20presentation%20displays%2C%20modern%20office%20environment%20with%20natural%20lighting%2C%20focus%20on%20collaboration%20and%20innovation&width=400&height=250&seq=news2&orientation=landscape',
      title: 'New APR Investment: Kamsma Textile Industry Develops High-Quality Viscose Products',
      description: 'Since 2010, APR has collaborated with various textile manufacturers to develop high-quality viscose products.',
      category: 'Investment'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Sustainable%20forest%20management%20and%20renewable%20wood%20harvesting%20operations%2C%20environmental%20conservation%20photography%2C%20workers%20managing%20responsible%20forestry%20practices%2C%20green%20forest%20background%20with%20natural%20lighting%20highlighting%20sustainability&width=400&height=250&seq=news3&orientation=landscape',
      title: 'Investment Success: APR Group',
      description: 'APR Group, a leading textile and apparel manufacturer, has shown remarkable growth in sustainable practices.',
      category: 'Success Story'
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay informed about our latest developments, partnerships, and sustainability initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article key={index} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}