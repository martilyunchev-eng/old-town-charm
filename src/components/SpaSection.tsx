import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/lib/i18n";
import { Sparkles } from "lucide-react";

const SpaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <AnimatedSection>
          <Sparkles className="mx-auto text-gold mb-4" size={32} />
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
            <span className="text-primary">{t.spa.title}</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{t.spa.p1}</p>
            <p>{t.spa.p2}</p>
            <p className="text-sm italic">{t.spa.p3}</p>
            <p>{t.spa.p4}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SpaSection;
