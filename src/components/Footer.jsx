import { Link } from "react-router-dom";
import { STUDIO } from "../constants/content";

export const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-gold/10 bg-obsidian-light">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl text-cream">
            Maison <span className="italic text-gold">Lumière</span>
          </p>
          <p className="mt-4 text-sm text-sand font-light leading-relaxed max-w-sm">
            {STUDIO.tagline}. An atelier of light, silence and gold on the Rue
            Saint-Honoré — where beauty is composed, never applied.
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow mb-5">Navigate</p>
          <ul className="space-y-3 text-sm text-sand font-light">
            <li><Link data-testid="footer-link-home" to="/" className="hover:text-gold transition-colors">Maison</Link></li>
            <li><Link data-testid="footer-link-services" to="/services" className="hover:text-gold transition-colors">Rituals</Link></li>
            <li><Link data-testid="footer-link-gallery" to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link data-testid="footer-link-contact" to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow mb-5">Visit</p>
          <p className="text-sm text-sand font-light leading-relaxed">{STUDIO.address}</p>
          <p className="mt-3 text-sm text-sand font-light">{STUDIO.hours}</p>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow mb-5">Enquiries</p>
          <a data-testid="footer-phone" href={`tel:${STUDIO.phone.replace(/\s/g, "")}`} className="block text-sm text-sand font-light hover:text-gold transition-colors">
            {STUDIO.phone}
          </a>
          <a data-testid="footer-email" href={`mailto:${STUDIO.email}`} className="mt-3 block text-sm text-sand font-light hover:text-gold transition-colors break-all">
            {STUDIO.email}
          </a>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-ash font-mono tracking-wider">
          © {new Date().getFullYear()} Maison Lumière — Paris
        </p>
        <p className="text-xs text-ash font-mono tracking-wider">
          Instagram · Pinterest · Vogue Beauty
        </p>
      </div>
    </div>
  </footer>
);
