// src/components/ScrollReveal.tsx
import { motion, Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollReveal = ({ children, className = "", delay = 0 }: ScrollRevealProps) => {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
      transition={{ delay }}
      className={className}
      layout // helps with smooth reflow on page
      style={{ willChange: "transform, opacity" }} // reduces flicker
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
