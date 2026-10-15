import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EASE } from "./Motion";
import { STUDIO } from "../constants/content";

const LINKS = [
  { to: "/", label: "Maison" },
  { to: "/services", label: "Rituals" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-obsidian/80 backdrop-blur-xl border-b border-gold/10 py-4"
            : "bg-obsidian/40 backdrop-blur-md py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          <Link to="/" data-testid="nav-logo" className="group flex items-baseline gap-2">
            <span className="font-serif text-xl sm:text-2xl tracking-wide text-cream">
              Maison <span className="italic text-gold">Lumière</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-9" data-testid="nav-desktop">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative text-[11px] uppercase tracking-[0.28em] font-mono transition-colors duration-300 hover:text-gold-bright ${
                    isActive ? "text-gold" : "text-sand"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              data-testid="nav-cta-button"
              className="ml-2 border border-gold/50 text-gold text-[11px] uppercase tracking-[0.28em] font-mono px-6 py-3 hover:bg-gold hover:text-obsidian transition-colors duration-400"
            >
              Enquire
            </Link>
          </nav>

          <button
            data-testid="nav-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-cream p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="nav-mobile-menu"
            className="fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-2xl flex flex-col justify-center px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {LINKS.map((l, i) => (
              <span key={l.to} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "110%" }}
                  transition={{ duration: 0.7, delay: 0.08 * i, ease: EASE }}
                >
                  <NavLink
                    to={l.to}
                    data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                    className="block font-serif text-5xl py-4 text-cream hover:text-gold transition-colors"
                  >
                    {l.label}
                  </NavLink>
                </motion.span>
              </span>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 eyebrow"
            >
              {STUDIO.address}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
