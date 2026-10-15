import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Leaf, FlaskConical, HeartHandshake } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal, EASE } from "../components/Motion";
import { SERVICE_CATEGORIES, IMAGES } from "../constants/content";

const PILLARS = [
  {
    icon: Leaf,
    title: "Traceable Botanicals",
    body: "Every active is sourced from named growers — Provençal neroli, Atlas vetiver, first-press jojoba — and logged by harvest date.",
  },
  {
    icon: FlaskConical,
    title: "Composed In-House",
    body: "Our apothecary blends are made in small weekly batches at the atelier. Nothing sits on a shelf longer than fourteen days.",
  },
  {
    icon: HeartHandshake,
    title: "Conscious by Design",
    body: "Never tested on animals, free of synthetic fragrance, and patch-tested with you during every consultation.",
  },
];

export default function Services() {
  const [active, setActive] = useState(SERVICE_CATEGORIES[0].id);
  const category = SERVICE_CATEGORIES.find((c) => c.id === active);

  return (
    <div className="pb-24 lg:pb-36">
      <PageHero
        testid="services-heading"
        image={IMAGES.heroServices}
        eyebrow="The Treatment Menu"
        lines={[
          { text: "Rituals of" },
          { text: "refinement", className: "italic text-gold" },
        ]}
        lead="Every treatment is a private composition — one patron, one artist, one unhurried hour. Prices include consultation and our house apothecary blends."
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mt-20 lg:mt-28">
        <Reveal>
          <div
            data-testid="services-tabs"
            className="flex flex-wrap gap-3 border-b border-gold/10 pb-6"
          >
            {SERVICE_CATEGORIES.map((c) => (
              <button
                key={c.id}
                data-testid={`service-tab-${c.id}`}
                onClick={() => setActive(c.id)}
                className={`text-[11px] uppercase tracking-[0.24em] font-mono px-5 py-3 border transition-all duration-300 ${
                  active === c.id
                    ? "border-gold text-gold bg-gold/5"
                    : "border-cream/10 text-sand hover:border-gold/40 hover:text-cream"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-14"
          >
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl sm:text-4xl text-cream" data-testid="service-category-title">
                {category.title}
              </h2>
              <p className="mt-4 text-sand font-light leading-relaxed">{category.intro}</p>
            </div>

            <div className="mt-12">
              {category.treatments.map((t, i) => (
                <motion.div
                  key={t.name}
                  data-testid={`service-item-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 * i, ease: EASE }}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 lg:py-10 border-t border-gold/10 hover:bg-gold/[0.03] transition-colors duration-500 px-2 -mx-2"
                >
                  <div className="md:col-span-1">
                    <span className="font-mono text-xs text-gold/60 tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="font-serif text-2xl sm:text-3xl text-cream group-hover:text-gold transition-colors duration-300">
                      {t.name}
                    </h3>
                    <p className="mt-3 text-sm text-sand font-light leading-relaxed max-w-xl">
                      {t.description}
                    </p>
                  </div>
                  <div className="md:col-span-3 flex md:flex-col gap-2 md:text-right text-sm font-mono tracking-wider">
                    <span className="text-ash">{t.duration}</span>
                    <span className="text-gold text-base">{t.price}</span>
                  </div>
                  <div className="md:col-span-2 flex md:justify-end items-start">
                    <Link
                      to="/contact"
                      data-testid={`service-enquire-${i}`}
                      className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] font-mono text-sand hover:text-gold transition-colors"
                    >
                      Enquire
                      <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-24 lg:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-5">
            <div className="gold-frame group">
              <div className="overflow-hidden bg-obsidian-card">
                <img
                  src={IMAGES.apothecaryTray}
                  alt="The atelier apothecary"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover photo-tint transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6">Ingredient Integrity</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream tracking-tight leading-tight">
                What touches your skin is <span className="italic text-gold">beyond question</span>
              </h2>
            </Reveal>
            <div className="mt-10 space-y-8">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={0.1 * i}>
                  <div data-testid={`pillar-${i}`} className="flex items-start gap-5 pb-8 border-b border-gold/10">
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-gold/25 text-gold">
                      <p.icon size={16} strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-cream">{p.title}</h3>
                      <p className="mt-2 text-sm text-sand font-light leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="mt-20 lg:mt-28 border border-gold/15 bg-obsidian-card p-10 lg:p-14 flex flex-wrap items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-3xl text-cream">
              Unsure where to <span className="italic text-gold">begin</span>?
            </h3>
            <p className="mt-3 text-sand font-light max-w-md">
              Our concierge composes bespoke programmes for every patron. A short
              conversation is all it takes.
            </p>
          </div>
          <Link
            to="/contact"
            data-testid="services-cta-button"
            className="inline-flex items-center gap-3 bg-gold text-obsidian-deep text-[11px] uppercase tracking-[0.28em] font-mono px-8 py-4 hover:bg-gold-bright transition-colors duration-300"
          >
            Speak to the Concierge
            <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
