import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Company Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              src="/assets/vts-logo.png" // Make sure your logo is in the public folder
              alt="Company Logo"
              className="w-40 h-12 object-contain"
            />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium mr-8"
            >
              About
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium mr-8"
            >
              Yarns
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium mr-8"
            >
              Manufacturing
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium mr-8"
            >
              Sustainability
            </a>
            <a
              href="#news"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium mr-8"
            >
              Certifications
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              className="block lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col pt-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium mb-6"
              >
                About
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium mb-6"
              >
                Yarns
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium mb-6"
              >
                Manufacturing
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium mb-6"
              >
                Sustainability
              </a>
              <a
                href="#news"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium mb-6"
              >
                Certifications
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
