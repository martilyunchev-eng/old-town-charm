import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/lib/i18n";

import room1 from "@/assets/room-1.png";
import room2 from "@/assets/room-2.png";
import room3 from "@/assets/room-3.png";
import room4 from "@/assets/room-4.png";
import balcony from "@/assets/balcony.png";
import bathroom1 from "@/assets/bathroom-1.png";
import bathroom2 from "@/assets/bathroom-2.png";
import kitchen from "@/assets/kitchen.png";
import dining from "@/assets/dining.png";

const images = [room1, room2, balcony, room3, bathroom1, room4, kitchen, dining, bathroom2];

const GallerySection = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selected === null) return;
    setSelected((selected + dir + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-16">
            <span className="text-primary">{t.gallery.title}</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div
                className={`overflow-hidden rounded-lg cursor-pointer group ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
                onClick={() => setSelected(i)}
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    i === 0 ? "h-64 md:h-[420px]" : "h-32 md:h-48"
                  }`}
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          ))}
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
              src={images[selected]}
              alt="Gallery fullscreen"
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
