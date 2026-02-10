import SplitImageText from "@/components/SplitImageText";
import { contactSectionContent } from "@/data/sections/contact";
import { FaBuilding, FaEnvelope, FaIdCard, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const contactIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Phone: FaPhone,
  Email: FaEnvelope,
  Location: FaMapMarkerAlt,
  "Business name": FaBuilding,
  ABN: FaIdCard,
  "QBCC licence": FaIdCard,
};

export default function AboutContactSection() {
  const contactCards = (
    <div className="grid gap-[var(--spacing-md)]">
      <div className="card">
        <h3 className="text-xl font-semibold text-[var(--foreground)]">
          {contactSectionContent.contactDetails.title}
        </h3>
        <ul className="mt-[var(--spacing-sm)] grid gap-[var(--spacing-xs)] text-sm text-[var(--foreground)]">
          {contactSectionContent.contactDetails.items.map((item) => {
            const Icon = contactIconMap[item.label];

            return (
            <li key={`${item.label}-${item.value}`}>
              <div className="flex items-center gap-[var(--spacing-xs)] text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                {Icon ? <Icon className="text-[var(--color-primary)]" /> : null}
                <span>{item.label}</span>
              </div>
              {item.href ? (
                <a className="mt-[var(--spacing-xs)] inline-flex hover:underline" href={item.href}>
                  {item.value}
                </a>
              ) : (
                <p className="mt-[var(--spacing-xs)]">{item.value}</p>
              )}
              {item.note ? (
                <p className="mt-[var(--spacing-xs)] text-xs text-[var(--color-muted)]">
                  {item.note}
                </p>
              ) : null}
            </li>
          );
          })}
        </ul>
      </div>
      <div className="card">
        <h3 className="text-xl font-semibold text-[var(--foreground)]">
          {contactSectionContent.businessDetails.title}
        </h3>
        <ul className="mt-[var(--spacing-sm)] grid gap-[var(--spacing-xs)] text-sm text-[var(--foreground)]">
          {contactSectionContent.businessDetails.items.map((item) => {
            const Icon = contactIconMap[item.label];

            return (
            <li key={`${item.label}-${item.value}`}>
              <div className="flex items-center gap-[var(--spacing-xs)] text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                {Icon ? <Icon className="text-[var(--color-primary)]" /> : null}
                <span>{item.label}</span>
              </div>
              <p className="mt-[var(--spacing-xs)]">{item.value}</p>
            </li>
          );
          })}
        </ul>
      </div>
    </div>
  );

  return (
    <SplitImageText
      eyebrow={contactSectionContent.eyebrow}
      title={contactSectionContent.title}
      description={contactSectionContent.subtitle}
      media={contactCards}
      imagePosition="right"
    />
  );
}
