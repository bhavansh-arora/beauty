import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { EASE } from "./Motion";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=917017905835&text=Hi%2C+I%E2%80%99d+like+to+get+this+website+for+my+business.%0A%0AWebsite+Code%3A+LM-8642&utm_source=chatgpt.com";

export const StickyCta = () => (
  <motion.div
    data-testid="sticky-cta-bar"
    initial={{ y: 80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 2.8, ease: EASE }}
    className="fixed bottom-0 inset-x-0 z-40 border-t border-gold/20 bg-obsidian-deep/85 backdrop-blur-xl"
  >
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-3.5 flex items-center justify-between gap-4">
      <p className="font-serif text-base sm:text-lg text-cream truncate">
        Love this site? <span className="italic text-gold">Make it yours.</span>
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="sticky-cta-whatsapp-button"
        className="shrink-0 inline-flex items-center gap-2 bg-gold text-obsidian-deep text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-mono px-4 sm:px-6 py-2.5 hover:bg-gold-bright transition-colors duration-300"
      >
        <MessageCircle size={14} />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </div>
  </motion.div>
);
