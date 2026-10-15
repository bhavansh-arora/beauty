import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EASE } from "./Motion";

export const Preloader = ({ onDone }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const dur = 1500;
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 300);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      data-testid="preloader"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="fixed inset-0 z-[200] bg-obsidian-deep flex flex-col items-center justify-center overflow-hidden"
    >
      <span className="block overflow-hidden">
        <motion.span
          className="block font-serif text-3xl sm:text-4xl text-cream tracking-wide"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: EASE }}
        >
          Maison <span className="italic text-gold">Lumière</span>
        </motion.span>
      </span>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 eyebrow"
      >
        Haute Cosmetology — Paris
      </motion.p>
      <div className="absolute bottom-10 left-0 right-0 px-8 sm:px-12 flex items-end justify-between">
        <motion.div
          className="h-px bg-gold/60"
          style={{ width: `${count}%` }}
          transition={{ ease: "linear" }}
        />
        <span className="ml-6 font-serif text-5xl sm:text-6xl text-gold/80 tabular-nums leading-none">
          {count}
        </span>
      </div>
    </motion.div>
  );
};
