import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import { aboutSectionContent } from "@/data/sections/about";
import { featuresSectionContent } from "@/data/sections/features";

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)]">
      <main>
        <AboutSection content={aboutSectionContent} />
        <FeaturesCarousel
          content={featuresSectionContent}
          hasControls={true}
          hasPredominateInfo={true}
          cardsPerView={3}
        />
        <ContactSection />
      </main>
    </div>
  );
}
