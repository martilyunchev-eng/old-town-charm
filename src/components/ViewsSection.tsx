import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/lib/i18n";

import viewsPanorama from "@/assets/views-panorama.png";
import viewsBalcony from "@/assets/views-balcony.png";
import viewsMonument from "@/assets/views-monument.png";
import viewsCoffee from "@/assets/views-coffee.png";
import viewsGurko from "@/assets/views-gurko.png";
import viewsYantra from "@/assets/views-yantra.png";

const mainImages = [viewsPanorama, viewsBalcony, viewsMonument, viewsCoffee];
const gurkoImages = [viewsGurko, viewsYantra, viewsBalcony];
const allImages = [...mainImages, ...gurkoImages];

const ViewsSection = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selected === null) return;
    setSelected((selected + dir + allImages.length) % allImages.length);
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-3">
            <span className="text-primary">{t.views.title}</span>
          </h2>
          <p className="font-heading text-xl md:text-2xl text-center text-gold italic mb-4">
            {t.views.subtitle}
          </p>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
            {t.views.desc}
          </p>
        </AnimatedSection>

        {/* Featured panoramic image */}
        <AnimatedSection>
          <div
            className="overflow-hidden rounded-lg cursor-pointer group mb-4"
            onClick={() => setSelected(0)}
          >
            <img
              src={mainImages[0]}
              alt={t.views.title}
              className="w-full h-64 md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </AnimatedSection>

        {/* 3 supporting images */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-20">
          {mainImages.slice(1).map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className="overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelected(i + 1)}
              >
                <img
                  src={img}
                  alt={`${t.views.title} ${i + 2}`}
                  className="w-full h-32 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Gurko Street subsection */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimatedSection>
            <h3 className="font-heading text-2xl md:text-3xl text-primary mb-6">
              {t.views.gurkoTitle}
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t.views.gurkoP1}</p>
              <p>{t.views.gurkoP2}</p>
              <p>{t.views.gurkoP3}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              {gurkoImages.map((img, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-lg cursor-pointer group ${i === 0 ? "col-span-2" : ""}`}
                  onClick={() => setSelected(mainImages.length + i)}
                >
                  <img
                    src={img}
                    alt={`${t.views.gurkoTitle} ${i + 1}`}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      i === 0 ? "h-48 md:h-64" : "h-32 md:h-44"
                    }`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground"
              onClick={() => setSelected(null)}
            >
              <X size={32} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground"
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            >
              <ChevronLeft size={40} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground"
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
            >
              <ChevronRight size={40} />
            </button>
            <motion.img
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={allImages[selected]}
              alt="Fullscreen view"
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ViewsSection;
