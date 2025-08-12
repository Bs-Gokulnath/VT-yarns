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