import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ManufacturingSection from './components/Manufacturing';
import SustainabilitySection from './components/SustainabilitySection';
import Footer from './components/Footer';
import YarnAndCertificateCombined from './components/YarnAndCertificateCombined';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      {/* <YarnsSection/> */}
      <YarnAndCertificateCombined/>
      {/* <CertificationSection /> */}
      <ManufacturingSection />
      <SustainabilitySection />

      <Footer />
    </div>
  );
}