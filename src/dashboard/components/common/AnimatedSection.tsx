import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
};

const directions = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
};

export default function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
