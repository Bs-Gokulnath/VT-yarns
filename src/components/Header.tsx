import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll listener for active section
  useEffect(() => {
    const sections = [
      "about",
      "yarns",
      "manufacturing",
      "sustainability",
      "certifications",
      "contact",
    ];
    const handleScroll = () => {
      let current = "";
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", id: "about", label: "ABOUT" },
    { href: "#yarns", id: "yarns", label: "YARNS" },
    { href: "#certificates", id: "certificates", label: "CERTIFICATIONS" },
    { href: "#manufacturing", id: "manufacturing", label: "MANUFACTURING" },
    { href: "#sustainability", id: "sustainability", label: "SUSTAINABILITY" },
    { href: "#contact", id: "contact", label: "CONTACT" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 lg:px-18 py-4">
        <div className="flex items-center justify-between">
          {/* ✅ Video always visible for both desktop & mobile */}
          <div className="flex items-center space-x-3">
            <video
              src="/assets/VTS logo2.mp4" // make sure file name has no spaces
              autoPlay
              loop
              muted={true}
              playsInline
              preload="auto"
              className="w-40 h-12 object-cover"
              style={{ borderRadius: "0px" }}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className={`transition duration-300 font-medium mr-8 last:mr-0 ${
                  activeSection === link.id
                    ? "text-green-500"
                    : "text-gray-700 hover:text-green-500"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50 ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-gray-800 hover:text-green-600 transition-colors focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col pt-4">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className={`transition duration-300 font-medium mb-6 last:mb-0 ${
                    activeSection === link.id
                      ? "text-green-500"
                      : "text-gray-700 hover:text-green-500"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
