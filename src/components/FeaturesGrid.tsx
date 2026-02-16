"use client";

import {
  FaHammer,
  FaHome,
  FaPencilRuler,
  FaShieldAlt,
  FaTree,
  FaTruck,
} from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";
import {
  getViewportRevealVariants,
  defaultViewport,
} from "@/lib/viewport-reveal";
import type { FeaturesSectionContent } from "@/data/sections/features";

const iconMap = {
  durableBuilds: FaHammer,
  customDesign: FaPencilRuler,
  backyardReady: FaTree,
  storageSolutions: FaHome,
  weatherReady: FaShieldAlt,
  deliveredReady: FaTruck,
};

export default function FeaturesGrid({
  content,
}: {
  content: FeaturesSectionContent;
}) {
  const features = content;
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);

  return (
    <section className="bg-[var(--background)] py-[var(--spacing-xl)]">
      <div className="mx-auto w-full max-w-[var(--content-max-width)] px-[var(--spacing-md)] md:px-[var(--spacing-lg)]">
        <motion.div
          className="grid grid-cols-1 gap-[var(--spacing-md)] md:grid-cols-2 lg:grid-cols-3 lg:gap-[var(--spacing-sm)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-[var(--spacing-sm)] text-center md:col-span-2 lg:col-span-3"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              {features.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
              {features.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[var(--foreground)] md:text-lg">
              {features.subtitle}
            </p>
          </motion.div>
          {features.items.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? FaHome;

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="card group  flex flex-col gap-[var(--spacing-sm)] transition-shadow hover:shadow-[var(--shadow-lg)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)]  bg-[var(--background)]">
                  <Icon className="text-2xl text-[var(--color-primary)] transition-transform duration-200 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
