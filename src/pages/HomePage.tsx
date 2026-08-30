import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { FeaturedWorkSection } from '../components/FeaturedWorkSection';
import { DirectInquirySection } from '../components/DirectInquirySection';

export function HomePage() {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <HeroSection onScrollToAbout={scrollToAbout} />
      <AboutSection />
      <FeaturedWorkSection />
      <DirectInquirySection />
    </div>
  );
}
