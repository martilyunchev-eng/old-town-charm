import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/lib/i18n";
import { Car, AlertTriangle, Navigation, MapPin, FileDown, Info } from "lucide-react";

const parkingIcons = [Car, AlertTriangle, Navigation, MapPin];

const ParkingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-12">
            <span className="text-primary">{t.parking.title}</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {t.parking.items.map((item, i) => {
            const Icon = parkingIcons[i];
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                  <Icon size={20} className="text-gold shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection>
          <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10 mb-12">
            <Info size={18} className="text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground italic">{t.parking.note}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-wood text-wood-foreground rounded hover:bg-wood/90 transition-colors duration-300"
            >
              <FileDown size={18} />
              {t.pdf}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ParkingSection;
