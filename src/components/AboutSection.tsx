import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/lib/i18n";
import balconyImg from "@/assets/balcony.png";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
              <span className="text-primary">{t.about.title}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              <p>{t.about.p4}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={balconyImg}
                alt="Гледка от балкона на къщата"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
