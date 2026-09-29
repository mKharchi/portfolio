"use client";

import { motion } from "motion/react";

/**
 * Wraps any section with a scroll-triggered fade-in + slide-up animation.
 * Respects `prefers-reduced-motion` via Framer Motion's built-in support.
 */
const FadeInSection = ({ children, className = "", id, delay = 0 }) => (
  <motion.section
    id={id}
    className={className}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    {children}
  </motion.section>
);

export default FadeInSection;
