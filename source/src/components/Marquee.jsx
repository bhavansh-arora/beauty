const ITEMS = [
  "Haute Beauté",
  "Botanical Precision",
  "Cellular Rituals",
  "Regenerative Art",
  "Paris · Est. 2012",
];

const Row = ({ ariaHidden = false }) => (
  <div className="flex items-center shrink-0" aria-hidden={ariaHidden}>
    {ITEMS.map((item, i) => (
      <span key={i} className="flex items-center">
        <span
          className={`font-serif text-4xl sm:text-5xl lg:text-6xl px-8 lg:px-12 whitespace-nowrap ${
            i % 2 === 0 ? "text-outline-gold italic" : "text-cream/90"
          }`}
        >
          {item}
        </span>
        <span className="block w-2 h-2 rotate-45 bg-gold/70 shrink-0" />
      </span>
    ))}
  </div>
);

export const Marquee = () => (
  <section
    data-testid="editorial-marquee"
    className="relative overflow-hidden border-y border-gold/10 bg-obsidian-deep py-8 lg:py-12 select-none"
  >
    <div className="flex w-max animate-marquee">
      <Row />
      <Row ariaHidden />
    </div>
  </section>
);
