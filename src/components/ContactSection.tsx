import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/lib/i18n";
import { Phone, Mail } from "lucide-react";

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
            <div className="space-y-6">
              <a
                href="tel:0878400681"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Phone size={20} className="text-gold" />
                <span>087 8400681</span>
              </a>
              <a
                href="mailto:sava.moskov@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} className="text-gold" />
                <span>sava.moskov@gmail.com</span>
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
