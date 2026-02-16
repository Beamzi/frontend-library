import FeaturesGrid from "@/components/FeaturesGrid";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import Hero from "@/components/Hero";
import ComplianceSection from "@/components/ComplianceSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ServicesSection from "@/components/ServicesSection";
import { homeContent } from "@/data/pages/home";

export default function Home() {
  return (
    <div className="bg-[var(--background)]">
      <main>
        <Hero />
        <ProcessSection />

        <ServicesSection content={homeContent.services} />
        <TestimonialsCarousel />

        <ComplianceSection />
        <FeaturesCarousel
          content={homeContent.features}
          hasControls={true}
          hasPredominateInfo={true}
        />

        {/* <FeaturesGrid content={homeContent.features} /> */}
      </main>
    </div>
  );
}
