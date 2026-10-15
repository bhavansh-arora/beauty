import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "../components/PageHero";
import { Reveal, EASE } from "../components/Motion";
import { STUDIO, SERVICE_CATEGORIES, FAQS, IMAGES } from "../constants/content";

const API = `${import.meta.env.VITE_BACKEND_URL}/api`;

const INFO = [
  { icon: MapPin, label: "The Atelier", value: STUDIO.address, testid: "contact-address" },
  { icon: Clock, label: "Hours", value: STUDIO.hours, testid: "contact-hours" },
  { icon: Phone, label: "Telephone", value: STUDIO.phone, testid: "contact-phone" },
  { icon: Mail, label: "Concierge", value: STUDIO.email, testid: "contact-email" },
];

const inputClass =
  "w-full bg-obsidian-deep border border-cream/10 px-5 py-4 text-sm text-cream placeholder:text-ash font-light focus:outline-none focus:border-gold/60 transition-colors duration-300";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", date: "", message: "" });
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Your enquiry has been received. Our concierge will write to you within one working day.");
      setForm({ name: "", email: "", phone: "", service: "", date: "", message: "" });
    } catch (err) {
      toast.error("Something interrupted your message. Please try again, or telephone the atelier directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pb-24 lg:pb-36">
      <PageHero
        testid="contact-heading"
        image={IMAGES.heroContact}
        eyebrow="Private Enquiries"
        lines={[
          { text: "Write to" },
          { text: "the maison", className: "italic text-gold" },
        ]}
        lead="Appointments are limited and composed individually. Share a few words about yourself and the ritual you seek — our concierge replies personally."
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mt-20 lg:mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            {INFO.map((item, i) => (
              <Reveal key={item.label} delay={0.08 * i}>
                <div
                  data-testid={item.testid}
                  className="flex items-start gap-5 py-7 border-t border-gold/10"
                >
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-gold/25 text-gold">
                    <item.icon size={16} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="eyebrow">{item.label}</p>
                    <p className="mt-2 font-serif text-xl text-cream">{item.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.4}>
              <p className="mt-10 text-sm text-sand font-light leading-relaxed max-w-sm">
                The atelier sits discreetly above a courtyard on the Rue
                Saint-Honoré. Look for the deep-green door with no name — only a
                small brass <span className="italic font-serif">L</span>.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <form
                data-testid="contact-form"
                onSubmit={onSubmit}
                className="border border-gold/15 bg-obsidian-card p-8 lg:p-12"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="eyebrow block mb-3">Name *</label>
                    <input
                      id="contact-name"
                      data-testid="contact-name-input"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="eyebrow block mb-3">Email *</label>
                    <input
                      id="contact-email"
                      data-testid="contact-email-input"
                      type="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="eyebrow block mb-3">Telephone</label>
                    <input
                      id="contact-phone"
                      data-testid="contact-phone-input"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+33 ..."
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="eyebrow block mb-3">Ritual of Interest</label>
                    <select
                      id="contact-service"
                      data-testid="contact-service-select"
                      value={form.service}
                      onChange={set("service")}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="">Not yet decided</option>
                      {SERVICE_CATEGORIES.map((c) =>
                        c.treatments.map((t) => (
                          <option key={t.name} value={t.name}>{t.name}</option>
                        ))
                      )}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="contact-date" className="eyebrow block mb-3">Preferred Date</label>
                    <input
                      id="contact-date"
                      data-testid="contact-date-input"
                      type="date"
                      value={form.date}
                      onChange={set("date")}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="contact-message" className="eyebrow block mb-3">Your Message *</label>
                  <textarea
                    id="contact-message"
                    data-testid="contact-message-input"
                    required
                    rows={6}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us about your skin, your rituals, or simply the occasion..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <motion.button
                  data-testid="contact-submit-button"
                  type="submit"
                  disabled={sending}
                  whileTap={{ scale: 0.98 }}
                  transition={{ ease: EASE }}
                  className="mt-8 group inline-flex items-center gap-3 bg-gold text-obsidian-deep text-[11px] uppercase tracking-[0.28em] font-mono px-10 py-5 hover:bg-gold-bright transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Send Enquiry"}
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
                <p className="mt-5 text-xs text-ash font-mono tracking-wider">
                  Replies within one working day · Discretion assured
                </p>
              </form>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 lg:mt-32 max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-6">Before You Write</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream tracking-tight leading-tight">
              Questions, <span className="italic text-gold">answered</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="mt-10">
            <Accordion type="single" collapsible data-testid="faq-accordion">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  data-testid={`faq-item-${i}`}
                  className="border-gold/10"
                >
                  <AccordionTrigger className="font-serif text-xl text-cream hover:text-gold hover:no-underline text-left py-6">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sand font-light leading-relaxed pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
