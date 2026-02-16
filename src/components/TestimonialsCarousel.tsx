"use client";

import { homeContent } from "@/data/pages/home";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  getViewportRevealVariants,
  defaultViewport,
} from "@/lib/viewport-reveal";
import styles from "./TestimonialsCarousel.module.css";

export default function TestimonialsCarousel() {
  const { testimonials } = homeContent;
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);
  const loopItems = [...testimonials.items, ...testimonials.items];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[var(--background)] py-[var(--spacing-xl)]">
      <div className="mx-auto w-full max-w-[var(--content-max-width)] px-[var(--spacing-md)] md:px-[var(--spacing-lg)]">
        <motion.div
          className="flex flex-col gap-[var(--spacing-md)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-[var(--spacing-sm)] text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              {testimonials.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
              {testimonials.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[var(--foreground)] md:text-lg -mb-[var(--spacing-md)]">
              {testimonials.subtitle}
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className={`${styles.carousel} mt-[var(--spacing-lg)] py-[var(--spacing-md)]`}
          >
          <div className={styles.track}>
            {loopItems.map((item, index) => {
              const isDuplicate = index >= testimonials.items.length;

              return (
                <article
                  key={`${item.name}-${index}`}
                  className={`${styles.card} ${
                    hoveredIndex === index ? "card-hovered" : ""
                  }`}
                  aria-hidden={isDuplicate}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <p className="text-sm text-[var(--color-muted)]">
                    {item.quote}
                  </p>
                  <div className="mt-auto flex flex-col gap-[var(--spacing-xs)]">
                    <p className="text-base font-semibold text-[var(--foreground)]">
                      {item.name}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                      {item.location}
                    </p>
                    <p className="text-sm text-[var(--foreground)]">
                      {item.project}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
