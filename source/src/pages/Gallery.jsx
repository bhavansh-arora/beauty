import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal, EASE } from "../components/Motion";
import { GALLERY_ITEMS, GALLERY_FILTERS, IMAGES } from "../constants/content";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);
  const items = filter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === filter);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir) =>
      setOpenIndex((i) => (i === null ? null : (i + dir + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, step]);

  return (
    <div className="pb-24 lg:pb-36">
      <PageHero
        testid="gallery-heading"
        image={IMAGES.heroGallery}
        eyebrow="The Portfolio"
        lines={[
          { text: "Studies in" },
          { text: "light & skin", className: "italic text-gold" },
        ]}
        lead="Fragments from the atelier — portraits, rituals and still lifes, captured between appointments. Select any frame to view it in the spotlight."
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mt-20 lg:mt-28">
        <Reveal>
          <div data-testid="gallery-filters" className="flex flex-wrap gap-3 border-b border-gold/10 pb-6">
            {GALLERY_FILTERS.map((f) => (
              <button
                key={f}
                data-testid={`gallery-filter-${f.toLowerCase()}`}
                onClick={() => { setFilter(f); setOpenIndex(null); }}
                className={`text-[11px] uppercase tracking-[0.24em] font-mono px-5 py-3 border transition-all duration-300 ${
                  filter === f
                    ? "border-gold text-gold bg-gold/5"
                    : "border-cream/10 text-sand hover:border-gold/40 hover:text-cream"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance]"
          >
            {items.map((item, i) => (
              <div key={item.src} className="mb-6 break-inside-avoid">
                <button
                  data-testid={`gallery-item-${i}`}
                  onClick={() => setOpenIndex(i)}
                  className="group block w-full text-left gold-frame"
                >
                  <div className="overflow-hidden bg-obsidian-card">
                    <img
                      src={item.src}
                      alt={item.caption}
                      loading="lazy"
                      className={`w-full object-cover photo-tint transition-all duration-[1.2s] ease-out group-hover:scale-110 group-hover:opacity-90 ${
                        item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                      }`}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-serif text-lg text-cream/90 group-hover:text-gold transition-colors duration-300">
                        {item.caption}
                      </p>
                      <p className="mt-1 font-mono text-[10px] tracking-widest text-ash uppercase">
                        {item.category}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-ash">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {openIndex !== null && items[openIndex] && (
          <motion.div
            data-testid="gallery-lightbox"
            className="fixed inset-0 z-[80] bg-obsidian-deep/95 backdrop-blur-xl flex items-center justify-center p-5 sm:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={close}
          >
            <button
              data-testid="lightbox-close"
              onClick={close}
              aria-label="Close"
              className="absolute top-6 right-6 text-sand hover:text-gold transition-colors p-2"
            >
              <X size={26} />
            </button>
            <button
              data-testid="lightbox-prev"
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              aria-label="Previous"
              className="absolute left-4 sm:left-10 text-sand hover:text-gold transition-colors p-3"
            >
              <ChevronLeft size={30} />
            </button>
            <button
              data-testid="lightbox-next"
              onClick={(e) => { e.stopPropagation(); step(1); }}
              aria-label="Next"
              className="absolute right-4 sm:right-10 text-sand hover:text-gold transition-colors p-3"
            >
              <ChevronRight size={30} />
            </button>
            <motion.figure
              key={openIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="gold-frame gold-glow">
                <img
                  src={items[openIndex].src}
                  alt={items[openIndex].caption}
                  className="w-full max-h-[72vh] object-cover"
                />
              </div>
              <figcaption className="mt-6 flex items-center justify-between">
                <span className="font-serif text-xl text-cream italic">
                  {items[openIndex].caption}
                </span>
                <span className="font-mono text-xs tracking-widest text-ash">
                  {String(openIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
