import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground text-shadow-hero mb-6 leading-tight"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto font-light"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#rooms"
            className="px-8 py-3 border-2 border-primary-foreground/60 text-primary-foreground rounded font-medium hover:bg-primary-foreground/10 transition-all duration-300"
          >
            {t.hero.cta2}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
