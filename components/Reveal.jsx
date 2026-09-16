"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useIntroDone } from "@/lib/intro";

const EASE = [0.22, 1, 0.36, 1];

// Fades and lifts its children in once the intro loader is gone and the element is on screen
const Reveal = ({ children, delay = 0, y = 24, className, ...props }) => {
  const ref = useRef(null);
  const introDone = useIntroDone();
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      animate={introDone && inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.8, delay, ease: EASE }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
