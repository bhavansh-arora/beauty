import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Motion";
import { Marquee } from "../components/Marquee";
import { IMAGES, TESTIMONIALS, EXPERIENCE_STEPS, STUDIO } from "../constants/content";

const Hero = () => (
  <PageHero
    full
    testid="hero-section"
    image={IMAGES.heroHome}
    eyebrow={`${STUDIO.tagline} — Est. 2012`}
    lines={[
      { text: "Beauty," },
      { text: "composed", className: "italic text-gold" },
      { text: "in light." },
    ]}
    lead="A private atelier of haute cosmetology on the Rue Saint-Honoré. Facial architecture, botanical alchemy and rituals of stillness — composed for the few who seek the extraordinary."
  >
    <div className="mt-10 flex flex-wrap items-center gap-5">
      <Link
        to="/services"
        data-testid="hero-cta-services"
        className="group inline-flex items-center gap-3 bg-gold text-obsidian-deep text-[11px] uppercase tracking-[0.28em] font-mono px-8 py-4 hover:bg-gold-bright transition-colors duration-300"
      >
        Explore Rituals
        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
      <Link
        to="/contact"
        data-testid="hero-cta-contact"
        className="inline-flex items-center gap-3 border border-cream/25 text-cream text-[11px] uppercase tracking-[0.28em] font-mono px-8 py-4 hover:border-gold hover:text-gold transition-colors duration-300 backdrop-blur-sm"
      >
        Private Enquiry
      </Link>
    </div>
    <div className="mt-16 pt-8 border-t border-cream/10 grid grid-cols-2 md:grid-cols-4 gap-8" data-testid="hero-stats">
      {[
        ["12", "Years of Artistry"],
        ["40+", "Signature Rituals"],
        ["3.2k", "Devoted Patrons"],
        ["4.9", "Average Rating"],
      ].map(([num, label]) => (
        <div key={label}>
          <p className="font-serif text-4xl lg:text-5xl text-gold">{num}</p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.28em] font-mono text-cream/60">{label}</p>
        </div>
      ))}
    </div>
  </PageHero>
);

const CHAPTERS = [
  {
    num: "01",
    title: "The Sanctuary",
    body: "We believe beauty is not applied — it is composed. Every ritual at Maison Lumière begins with silence: a consultation of light, skin and intention before a single touch.",
    img: IMAGES.studioInterior,
  },
  {
    num: "02",
    title: "Cellular Alchemy",
    body: "The face is structure before it is surface. Our sculptors study bone, muscle and lymph as a cartographer studies terrain — then redraw the map with their hands.",
    img: IMAGES.spaStones,
  },
  {
    num: "03",
    title: "Timeless Elegance",
    body: "Chlorophyll, champagne enzymes, cold-pressed neroli. Our apothecary blends are composed in-house, in small batches, and never repeated twice in the same season.",
    img: IMAGES.amberElixir,
  },
];

const Manifesto = () => (
  <section data-testid="manifesto-section" className="py-24 lg:py-36">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <Reveal>
        <p className="eyebrow mb-6">The Manifesto</p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream tracking-tight max-w-2xl leading-tight">
          Three chapters of <span className="italic text-gold">devotion</span>
        </h2>
      </Reveal>
      <div className="mt-16 lg:mt-24">
        {CHAPTERS.map((c, i) => (
          <Reveal key={c.num} delay={0.05 * i}>
            <div
              data-testid={`manifesto-chapter-${c.num}`}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-12 lg:py-16 border-t border-gold/10 items-center"
            >
              <div className={`md:col-span-3 ${i % 2 === 1 ? "md:order-3 md:col-start-10" : ""}`}>
                <span className="font-serif text-7xl lg:text-8xl text-outline-gold leading-none">{c.num}</span>
              </div>
              <div className={`md:col-span-4 ${i % 2 === 1 ? "md:order-1 md:col-start-1" : ""}`}>
                <h3 className="font-serif text-2xl sm:text-3xl text-cream">{c.title}</h3>
                <p className="mt-4 text-sand font-light leading-relaxed">{c.body}</p>
              </div>
              <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2 md:col-start-5" : ""}`}>
                <div className="gold-frame group">
                  <div className="overflow-hidden bg-obsidian-card">
                    <img
                      src={c.img}
                      alt={c.title}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover photo-tint transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const SPOTLIGHTS = [
  { img: IMAGES.facialMask, name: "The Renewal Ceremony", meta: "Haute Skincare — from €180" },
  { img: IMAGES.serumDropper, name: "Signature Sculpting Facial", meta: "Facial Architecture — from €240" },
  { img: IMAGES.jadeRoller, name: "Emerald Leaf Ceremony", meta: "House Signature — €350" },
];

const Spotlight = () => (
  <section data-testid="spotlight-section" className="py-24 lg:py-36 bg-obsidian-light">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-6">In the Spotlight</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream tracking-tight leading-tight">
            Rituals of the <span className="italic text-gold">season</span>
          </h2>
        </div>
        <Link
          to="/services"
          data-testid="spotlight-view-all"
          className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] font-mono text-sand hover:text-gold transition-colors"
        >
          The full menu
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        {SPOTLIGHTS.map((s, i) => (
          <Reveal
            key={s.name}
            delay={0.1 * i}
            className={i === 1 ? "md:col-span-5 md:mt-16" : "md:col-span-4"}
          >
            <Link to="/services" data-testid={`spotlight-card-${i}`} className="group block">
              <div className="gold-frame">
                <div className="overflow-hidden bg-obsidian-card">
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className={`w-full object-cover photo-tint transition-transform duration-[1.2s] ease-out group-hover:scale-110 ${
                      i === 1 ? "aspect-[3/4]" : "aspect-[4/5]"
                    }`}
                  />
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-cream group-hover:text-gold transition-colors duration-300">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-xs font-mono tracking-wider text-ash">{s.meta}</p>
                </div>
                <ArrowRight
                  size={18}
                  className="mt-1 text-gold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section data-testid="experience-section" className="py-24 lg:py-36">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <Reveal>
        <p className="eyebrow mb-6">The Experience</p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream tracking-tight leading-tight max-w-2xl">
          One hour, four <span className="italic text-gold">movements</span>
        </h2>
      </Reveal>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 border border-gold/10">
        {EXPERIENCE_STEPS.map((s, i) => (
          <Reveal key={s.num} delay={0.08 * i} className="h-full">
            <div
              data-testid={`experience-step-${i}`}
              className="group h-full bg-obsidian p-8 lg:p-10 hover:bg-obsidian-card transition-colors duration-500"
            >
              <span className="font-serif text-5xl text-gold/50 group-hover:text-gold transition-colors duration-500">
                {s.num}
              </span>
              <h3 className="mt-8 font-serif text-2xl text-cream">{s.title}</h3>
              <p className="mt-4 text-sm text-sand font-light leading-relaxed">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section data-testid="testimonials-section" className="py-24 lg:py-36 bg-obsidian-light">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <Reveal>
        <p className="eyebrow mb-6">Whispers</p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream tracking-tight leading-tight max-w-2xl">
          Words from our <span className="italic text-gold">patrons</span>
        </h2>
      </Reveal>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={0.12 * i}>
            <blockquote
              data-testid={`testimonial-${i}`}
              className="h-full border border-gold/10 bg-obsidian p-8 lg:p-10 flex flex-col hover:border-gold/30 transition-colors duration-500"
            >
              <span className="block w-10 h-px bg-gold" />
              <p className="mt-6 font-serif text-xl lg:text-2xl text-cream/90 italic leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <footer className="mt-8">
                <p className="text-sm text-gold font-mono tracking-wider">{t.name}</p>
                <p className="mt-1 text-xs text-ash font-mono tracking-wider">{t.role}</p>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const ClosingCta = () => (
  <section data-testid="closing-cta" className="relative py-32 lg:py-48 overflow-hidden">
    <div className="absolute inset-0">
      <img src={IMAGES.candlelight} alt="" className="w-full h-full object-cover photo-tint opacity-40" />
      <div className="absolute inset-0 vignette" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
    </div>
    <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
      <Reveal>
        <p className="eyebrow mb-8">The Invitation</p>
        <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-cream tracking-tight leading-[1.05]">
          Begin your <span className="italic text-gold">ritual</span>
        </h2>
        <p className="mt-8 text-cream/70 font-light max-w-lg mx-auto leading-relaxed">
          Consultations are private, unhurried and by appointment only. Write to
          our concierge and we will compose the rest.
        </p>
        <Link
          to="/contact"
          data-testid="closing-cta-button"
          className="mt-12 inline-flex items-center gap-3 bg-gold text-obsidian-deep text-[11px] uppercase tracking-[0.28em] font-mono px-10 py-5 hover:bg-gold-bright transition-colors duration-300"
        >
          Reserve a Consultation
          <ArrowRight size={14} />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Manifesto />
      <Spotlight />
      <Experience />
      <Testimonials />
      <ClosingCta />
    </>
  );
}
