import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/lib/i18n";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-8">
            <span className="text-primary">{t.contact.title}</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-foreground">
                <MapPin size={20} className="text-gold shrink-0" />
                <span>{t.contact.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-gold shrink-0" />
                <a href="tel:+359878400681" className="text-foreground hover:text-primary transition-colors">
                  +359 878 400681
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MessageCircle size={18} className="text-gold shrink-0" />
                <span>Viber / WhatsApp</span>
              </div>
              <a
                href="mailto:stsavahouse@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} className="text-gold" />
                <span>stsavahouse@gmail.com</span>
              </a>

              <p className="font-heading text-xl text-primary italic mt-8">
                {t.contact.closing}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder={t.contact.name}
                required
                className="w-full px-4 py-3 rounded bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              />
              <input
                type="tel"
                placeholder={t.contact.phone}
                className="w-full px-4 py-3 rounded bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              />
              <input
                type="email"
                placeholder={t.contact.email}
                required
                className="w-full px-4 py-3 rounded bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              />
              <input
                type="text"
                placeholder={t.contact.dates}
                className="w-full px-4 py-3 rounded bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              />
              <textarea
                placeholder={t.contact.message}
                rows={4}
                className="w-full px-4 py-3 rounded bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
              >
                {submitted ? "✓" : t.contact.send}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
