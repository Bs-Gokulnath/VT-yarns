export default function Footer() {
  // Smooth scroll function for footer navigation
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer id="contact" className="bg-transparent pt-10 pb-10">
      {/* Boxed green footer area */}
      <div className="bg-green-900 mx-auto max-w-360 px-4 md:px-12 pt-10 pb-0 mb-2">
        {/* Brochure Banner Row */}
        <div className="bg-green-800 rounded-xl px-5 py-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2 text-white">VTS Brochure</h3>
              <p className="text-green-200">
                Download our comprehensive corporate brochure to learn more about our company and products.
              </p>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
              Download Brochure
            </button>
          </div>
        </div>

        {/* Main Footer Links and Info */}
        <div className="py-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and short about */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">

                {/* VTS Logo image here */}
                <img
                  src="/assets/vts-logo.png"
                  alt="VTS Logo"
                  className="h-15 w-auto object-contain"
                  style={{maxWidth: "110px"}}
                />
              </div>
              <p className="text-green-200 mb-6">
                Leading manufacturer of sustainable viscose rayon fibers, committed to environmental responsibility and innovation.
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-3">
                <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="text-green-200 hover:text-white transition-colors cursor-pointer">About</a></li>
                <li><a href="#yarns" onClick={(e) => handleSmoothScroll(e, 'yarns')} className="text-green-200 hover:text-white transition-colors cursor-pointer">Yarns</a></li>
                <li><a href="#manufacturing" onClick={(e) => handleSmoothScroll(e, 'manufacturing')} className="text-green-200 hover:text-white transition-colors cursor-pointer">Manufacturing</a></li>
                <li><a href="#sustainability" onClick={(e) => handleSmoothScroll(e, 'sustainability')} className="text-green-200 hover:text-white transition-colors cursor-pointer">Sustainability</a></li>
                <li><a href="#certificates" onClick={(e) => handleSmoothScroll(e, 'certificates')} className="text-green-200 hover:text-white transition-colors cursor-pointer">Certifications</a></li>
                <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="text-green-200 hover:text-white transition-colors cursor-pointer">Contact Us</a></li>
              </ul>
            </div>

            {/* Head Office */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Head Office</h4>
              <ul className="space-y-3 text-green-200">
                <li>South Hanumantharayan Koil Street</li>
                <li>Erode District</li>
                <li>Tamil Nadu</li>
                <li>India - 638001</li>
                <li className="mt-2">00 91 424 2220094 / 95 / 96</li>
                <li>sales@vtsyarns.com</li>
              </ul>
            </div>

            {/* Factory Address */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Factory Address</h4>
              <ul className="space-y-3 text-green-200">
                <li>SF No 249 &amp; 250, Kapparamalai Kadu</li>
                <li>Thattankuttai Panchayat</li>
                <li>Komarapalayam</li>
                <li>Namakkal District</li>
                <li>Tamil Nadu, India - 638183</li>
              </ul>
            </div>

            {/* Inquiries */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Inquiries</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="text-green-200 hover:text-white transition-colors cursor-pointer">
                    Fill an inquiry form
                  </a>
                </li>
                <li>
                  <a href="mailto:sales@vtsyarns.com" className="text-green-200 hover:text-white transition-colors cursor-pointer">
                    Email us directly
                  </a>
                </li>
                <li>
                  <a href="tel:+914242220094" className="text-green-200 hover:text-white transition-colors cursor-pointer">
                    Call us now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom: copyright and legal */}
        <div className="border-t border-green-800 py-6 mt-2">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-green-200">
            <p>&copy; {new Date().getFullYear()} VT Yarns. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </a>
              <p> | </p>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </a>
              <p> | </p>

              <a href="#" className="hover:text-white transition-colors cursor-pointer">
                Cookie Policy
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



