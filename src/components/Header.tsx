import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage, Language } from "@/lib/i18n";

const langs: Language[] = ["bg", "en", "ro"];
const langLabels: Record<Language, string> = { bg: "BG", en: "EN", ro: "RO" };

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#rooms", label: t.nav.rooms },
    { href: "#amenities", label: t.nav.amenities },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#location", label: t.nav.location },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-wood/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-lg text-primary-foreground tracking-wide">
          Свети Сава
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-wood-foreground/80 hover:text-gold transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language toggle */}
        <div className="hidden md:flex items-center gap-1">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-2 py-1 text-xs font-medium rounded transition-colors duration-200 ${
                lang === l
                  ? "bg-gold text-accent-foreground"
                  : "text-wood-foreground/60 hover:text-wood-foreground"
              }`}
            >
              {langLabels[l]}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-wood-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-wood overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-wood-foreground/80 hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2 border-t border-wood-foreground/20">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setOpen(false); }}
                    className={`px-3 py-1 text-sm rounded ${
                      lang === l ? "bg-gold text-accent-foreground" : "text-wood-foreground/60"
                    }`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
