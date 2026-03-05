import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/lib/i18n";
import viewsGurko from "@/assets/views-gurko.png";
import viewsYantra from "@/assets/views-yantra.png";

const LocationIntroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-3">
            <span className="text-primary">{t.locationIntro.title}</span>
          </h2>
          <p className="font-heading text-xl md:text-2xl text-center text-gold italic mb-8">
            {t.locationIntro.subtitle}
          </p>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-4 leading-relaxed">
            {t.locationIntro.p1}
          </p>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            {t.locationIntro.p2}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4">
          <AnimatedSection delay={0.1}>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={viewsGurko}
                alt="Ул. Гурко"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={viewsYantra}
                alt="Река Янтра"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default LocationIntroSection;
