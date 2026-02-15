import HeroSection from '../components/HeroSection';
import UniversitiesSection from '../components/UniversitiesSection';
import SupportSection from '../components/SupportSection';
import DestinationsSection from '../components/DestinationsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import RequirementsSection from '../components/RequirementsSection';
import MediaSection from '../components/MediaSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="section-divider" />
      <UniversitiesSection />
      <div className="section-divider" />
      <SupportSection />
      <div className="section-divider" />
      <DestinationsSection />
      <div className="section-divider" />
      <HowItWorksSection />
      <div className="section-divider" />
      <RequirementsSection />
      <div className="section-divider" />
      <MediaSection />
      <div className="section-divider" />
      <FAQSection />
      <Footer />
    </main>
  );
}
