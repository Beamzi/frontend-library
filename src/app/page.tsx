import FeaturesGrid from "@/components/FeaturesGrid";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import GalleryCarousel from "@/components/GalleryCarousel";
import Hero from "@/components/Hero";
import ComplianceSection from "@/components/ComplianceSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ServicesSection from "@/components/ServicesSection";
import { complianceSectionContent } from "@/data/sections/compliance";
import { gallerySectionContent } from "@/data/sections/gallery";
import { heroSectionContent } from "@/data/sections/hero";
import { processSectionContent } from "@/data/sections/process";
import { servicesSectionContent } from "@/data/sections/services";
import { testimonialsSectionContent } from "@/data/sections/testimonials";

export default function Home() {
  return (
    <div className="bg-[var(--background)]">
      <main>
        <Hero content={heroSectionContent} />
        <ProcessSection content={processSectionContent} />

        <ServicesSection content={servicesSectionContent} />
        <TestimonialsCarousel content={testimonialsSectionContent} />

        <ComplianceSection content={complianceSectionContent} />
        <GalleryCarousel
          content={gallerySectionContent}
          hasControls={true}
          hasPredominateInfo={true}
        />

        {/* <FeaturesGrid content={featuresSectionContent} /> */}

      </main>
    </div>
  );
}
