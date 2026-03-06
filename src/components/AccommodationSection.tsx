import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/lib/i18n";
import { FileDown } from "lucide-react";

const AccommodationSection = () => {
  const { t } = useLanguage();

  const files = [
    { label: t.accommodation.bg, href: "/docs/checkin-bg.docx" },
    { label: t.accommodation.en, href: "/docs/checkin-en.docx" },
    { label: t.accommodation.ro, href: "/docs/checkin-ro.docx" },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <h2 className="font-heading text-2xl md:text-3xl text-center text-foreground mb-10">
            <span className="text-primary">{t.accommodation.title}</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-4">
          {files.map((file, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <a
                href={file.href}
                download
                className="flex items-center justify-center gap-2 px-4 py-4 bg-card border border-border rounded-lg hover:shadow-md hover:border-primary/30 transition-all duration-300 text-center"
              >
                <FileDown size={18} className="text-gold shrink-0" />
                <span className="text-sm text-foreground font-medium">{file.label}</span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
