import { motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

export const Reveal = ({ children, delay = 0, y = 40, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const MaskedLines = ({ lines, delay = 0, as: Tag = "h1", className = "", ...rest }) => (
  <Tag className={className} {...rest}>
    {lines.map((line, i) => (
      <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
        <motion.span
          className={`block will-change-transform ${line.className || ""}`}
          initial={{ y: "115%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.1, delay: delay + i * 0.18, ease: EASE }}
        >
          {line.text}
        </motion.span>
      </span>
    ))}
  </Tag>
);

export const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
