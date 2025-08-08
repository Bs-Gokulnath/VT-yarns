import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ComfortSection from './components/Yarns';
import ProductsSection from './components/Manufacturing';
import SustainabilitySection from './components/SustainabilitySection';
import NewsSection from './components/Certificates';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('nav a[href^="#"]');
      
      let current = '';
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('text-blue-600');
        link.classList.add('text-gray-700');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.remove('text-gray-700');
          link.classList.add('text-blue-600');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ComfortSection />
      <ProductsSection />
      <SustainabilitySection />
      <NewsSection />
      <Footer />
    </div>
  );
}