"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export function MotionSection({ children, className = "", id, ...props }) {
  return (
    <motion.section
      id={id}
      className={className}
      {...fadeUp}
      {...props}
    >
      {children}
    </motion.section>
  );
}
