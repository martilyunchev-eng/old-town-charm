import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/lib/i18n";
import { Wifi, MapPin, Tv, Coffee, Microwave, WashingMachine, Volume2, BedDouble, Heart, UtensilsCrossed } from "lucide-react";

const icons = [Wifi, MapPin, Tv, Coffee, Microwave, WashingMachine, Volume2, BedDouble, Heart, UtensilsCrossed];

const AmenitiesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="amenities" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-16">
            <span className="text-primary">{t.amenities.title}</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {t.amenities.items.map((item, i) => {
            const Icon = icons[i] || Wifi;
            return (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-card hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
