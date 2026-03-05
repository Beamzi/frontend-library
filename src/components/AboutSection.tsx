"use client";

import SplitImageText from "@/components/SplitImageText";
import type { AboutSectionContent } from "@/data/sections/about";
import { motion, useReducedMotion } from "motion/react";
import {
  getViewportRevealVariants,
  defaultViewport,
} from "@/lib/viewport-reveal";

interface AboutSectionProps {
  content: AboutSectionContent;
}

export default function AboutSection({ content }: AboutSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);

  return (
    <motion.div
      className="flex flex-col"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
    >
      {content.sections.map((section, index) => {
        return (
          <motion.div key={section.id} variants={itemVariants}>
            <SplitImageText
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
              highlights={section.highlights}
              image={section.image}
              imagePosition={
                section.imagePosition as "left" | "right" | undefined
              }
              imagePriority={index === 0}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
