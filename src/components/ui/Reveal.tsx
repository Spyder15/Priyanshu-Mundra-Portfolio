import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
}

const variants = {
  up: { hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.7, rotate: -3 }, show: { opacity: 1, scale: 1, rotate: 0 } },
};

/** Wraps children with a punchy scroll-triggered entrance animation. */
const Reveal = ({ children, delay = 0, className = "", direction = "up" }: RevealProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: "some" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    variants={variants[direction]}
  >
    {children}
  </motion.div>
);

export default Reveal;
