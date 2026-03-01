import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/lib/i18n";
import { Microwave, Droplets, Wind as HairDryer, Wind, Tv, Wifi, UtensilsCrossed, CookingPot, Bath } from "lucide-react";

const icons = [Microwave, Droplets, HairDryer, Wind, Tv, Wifi, UtensilsCrossed, CookingPot, Bath];

const SharedAmenitiesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <h2 className="font-heading text-2xl md:text-3xl text-center text-foreground mb-10">
            <span className="text-primary">{t.sharedAmenities.title}</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {t.sharedAmenities.items.map((item, i) => {
            const Icon = icons[i] || Wifi;
            return (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background hover:shadow-md transition-shadow duration-300">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
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

export default SharedAmenitiesSection;
