import ServicesSection from "@/components/ServicesSection";
import { servicesSectionContent } from "@/data/sections/services";

export default function ServicesPage() {
  return (
    <div className="bg-[var(--background)]">
      <main>
        <ServicesSection content={servicesSectionContent} />
      </main>
    </div>
  );
}
