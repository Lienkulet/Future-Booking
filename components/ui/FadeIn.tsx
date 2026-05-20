"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  mount?: boolean;
}

export default function FadeIn({ children, delay = 0, className, mount = false }: FadeInProps) {
  const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const, delay };

  if (mount) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
