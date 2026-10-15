import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskedLines, FadeIn } from "./Motion";

export const PageHero = ({ image, eyebrow, lines, lead, children, testid, full = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.2]);
  const booted = typeof window !== "undefined" && window.__mlBooted;
  const base = booted ? 0.15 : 2.1;

  return (
    <section
      ref={ref}
      data-testid={testid}
      className={`relative ${full ? "min-h-screen" : "min-h-[88vh]"} flex items-end overflow-hidden`}
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <motion.img
          src={image}
          alt=""
          initial={{ scale: 1.15, opacity: 0.4 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, delay: booted ? 0 : 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover photo-tint"
        />
      </motion.div>
      <div className="absolute inset-0 hero-scrim" />
      <div className="absolute inset-0 hero-scrim-top" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pb-20 lg:pb-28 pt-48">
        <FadeIn delay={base}>
          <p className="eyebrow mb-6" data-testid={`${testid}-eyebrow`}>{eyebrow}</p>
        </FadeIn>
        <MaskedLines
          lines={lines}
          delay={base + 0.15}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.0] text-cream"
          data-testid={`${testid}-title`}
        />
        {lead && (
          <FadeIn delay={base + 0.75}>
            <p className="mt-7 max-w-xl text-base sm:text-lg text-cream/80 font-light leading-relaxed">
              {lead}
            </p>
          </FadeIn>
        )}
        {children && <FadeIn delay={base + 0.95}>{children}</FadeIn>}
      </div>
    </section>
  );
};
