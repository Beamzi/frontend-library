export const processSectionContent = {
  eyebrow: "How It Works",
  title: "A Simple Path to a Custom Shed",
  subtitle:
    "Design your shed with our online tool, submit for pricing, and let us handle the build from there.",
  cta: {
    label: "Get started",
    href: "/design-shed",
  },
  steps: [
    {
      step: "Step 1",
      icon: "design",
      title: "Design Your Shed",
      description:
        "Use our 3D configurator to choose the size, layout, doors, and finishes.",
    },
    {
      step: "Step 2",
      icon: "submit",
      title: "Submit for Quote",
      description:
        "Send your design and contact details so we can prepare a detailed estimate.",
    },
    {
      step: "Step 3",
      icon: "review",
      title: "Engineering Review",
      description:
        "We confirm specs, site needs, and timeline before moving into production.",
    },
    {
      step: "Step 4",
      icon: "delivery",
      title: "Manufacture & Delivery",
      description:
        "Your shed is built to spec and delivered ready for installation.",
    },
  ],
};

export type ProcessSectionContent = typeof processSectionContent;
