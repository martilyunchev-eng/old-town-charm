import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/lib/i18n";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-4">
            <span className="text-primary">{t.location.title}</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            {t.location.desc}
          </p>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            {t.location.desc2}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {t.location.distances.map(([place, dist], i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="flex items-center justify-between p-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-gold shrink-0" />
                  <span className="text-foreground text-sm">{place}</span>
                </div>
                <span className="text-primary font-medium text-sm">{dist}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.1!2d25.6295!3d43.0833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a9291c1e1e1e1d%3A0x1!2sул.+Ген.+Гурко+13%2C+Велико+Търново!5e0!3m2!1sbg!2sbg!4v1!5m2!1sbg!2sbg"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Легендарната къща Свети Сава - Велико Търново"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LocationSection;
