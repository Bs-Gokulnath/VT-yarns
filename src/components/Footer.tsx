export default function Footer() {
  const footerLinks = {
    company: [
      'About APR',
      'Our History',
      'Leadership Team',
      'Careers',
      'News & Media'
    ],
    products: [
      'Viscose Staple Fiber',
      'Textile Solutions',
      'Quality Standards',
      'Technical Support',
      'Product Catalog'
    ],
    sustainability: [
      'Environmental Policy',
      'Forest Stewardship',
      'Certifications',
      'Community Impact',
      'Sustainability Report'
    ],
    support: [
      'Customer Service',
      'Technical Support',
      'Documentation',
      'Contact Us',
      'Feedback'
    ]
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="bg-blue-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">APR Corporate Brochure</h3>
              <p className="text-blue-200">Download our comprehensive corporate brochure to learn more about our company and products.</p>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <span className="text-blue-900 font-bold">APR</span>
                </div>
                <span className="text-xl font-bold">Asia Pacific Rayon</span>
              </div>
              <p className="text-blue-200 mb-6">
                Leading manufacturer of sustainable viscose rayon fibers, committed to environmental responsibility and innovation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-youtube-fill text-lg"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Sustainability</h4>
              <ul className="space-y-3">
                {footerLinks.sustainability.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-blue-200">
            <p>&copy; 2024 Asia Pacific Rayon. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}