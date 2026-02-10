import {
  FaBalanceScale,
  FaClipboardCheck,
  FaDraftingCompass,
  FaMapMarkedAlt,
  FaCertificate,
} from "react-icons/fa";
import { homeContent } from "@/data/pages/home";

const iconMap = {
  australianStandards: FaDraftingCompass,
  nccAligned: FaClipboardCheck,
  councilSupport: FaMapMarkedAlt,
  engineeringCert: FaCertificate,
  consumerGuarantees: FaBalanceScale,
};

export default function ComplianceSection() {
  const { compliance } = homeContent;

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--background-elevated)] py-[var(--spacing-xl)]">
      <div className="mx-auto w-full max-w-[var(--content-max-width)] px-[var(--spacing-md)] md:px-[var(--spacing-lg)]">
        <div className="flex flex-col gap-[var(--spacing-sm)] text-center">
          <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
            {compliance.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[var(--color-muted)] md:text-lg">
            {compliance.subtitle}
          </p>
        </div>
        <div className="mt-[var(--spacing-lg)] grid grid-cols-1 gap-[var(--spacing-lg)] text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-[var(--spacing-md)]">
          {compliance.items.map((item) => {
            const Icon =
              iconMap[item.icon as keyof typeof iconMap] ?? FaDraftingCompass;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center gap-[var(--spacing-xs)] px-[var(--spacing-sm)] lg:border-l lg:border-[var(--color-border)] lg:px-[var(--spacing-md)] lg:first:border-l-0"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-[var(--border)] bg-[var(--background)]">
                  <Icon className="text-xl text-[var(--color-primary)]" />
                </div>
                <h3 className="text-base font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
