"use client";

import { FaBuilding, FaHome, FaLayerGroup, FaTree } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";
import {
  getViewportRevealVariants,
  defaultViewport,
} from "@/lib/viewport-reveal";
import type { ServicesSectionContent } from "@/data/sections/services";

const iconMap = {
  shed: FaHome,
  patio: FaTree,
  mezzanine: FaLayerGroup,
  grannyFlat: FaBuilding,
};

export default function ServicesSection({
  content,
}: {
  content: ServicesSectionContent;
}) {
  const { eyebrow, title, subtitle, items } = content;
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);

  return (
    <section className="bg-[var(--background)] py-[var(--spacing-xl)]">
      <div className="mx-auto w-full max-w-[var(--content-max-width)] px-[var(--spacing-md)] md:px-[var(--spacing-lg)]">
        <motion.div
          className="grid grid-cols-1 gap-[var(--spacing-md)] lg:grid-cols-2 lg:gap-[var(--spacing-sm)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-[var(--spacing-sm)] text-center lg:col-span-2"
          >
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mx-auto max-w-2xl text-base text-[var(--foreground)] md:text-lg">
                {subtitle}
              </p>
            ) : null}
          </motion.div>
          {items.map((item) => {
            const Icon =
              iconMap[item.icon as keyof typeof iconMap] ?? FaHome;

            return (
              <motion.article
                key={item.title}
                variants={itemVariants}
                className="flex flex-col gap-[var(--spacing-sm)] rounded-[var(--radius-lg)] border-[var(--border)] bg-[var(--background-elevated)] p-[var(--spacing-lg)] shadow-[var(--shadow-md)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--background)]">
                  <Icon className="text-2xl text-[var(--color-primary)]" />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  {item.description}
                </p>
                <ul className="flex flex-col gap-[var(--spacing-xs)] pl-[var(--spacing-md)] text-sm text-[var(--foreground)]">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="list-disc">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
