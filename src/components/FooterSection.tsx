import { useLanguage } from "@/lib/i18n";
import { MapPin, Phone, Mail } from "lucide-react";

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-wood text-wood-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="font-heading text-xl text-gold italic mb-6">
            &bdquo;{t.footer.slogan}&ldquo;
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-wood-foreground/70 mb-8">
          <a href="tel:0878400681" className="flex items-center gap-2 hover:text-gold transition-colors">
            <Phone size={14} /> 087 8400681
          </a>
          <a href="mailto:sava.moskov@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
            <Mail size={14} /> sava.moskov@gmail.com
          </a>
          <a
            href="https://www.google.com/maps/place/Veliko+Tarnovo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <MapPin size={14} /> Google Maps
          </a>
        </div>

        <div className="text-center text-xs text-wood-foreground/40">
          &copy; {new Date().getFullYear()} {"\u041B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u0430\u0442\u0430 \u043A\u044A\u0449\u0430 \u201E\u0421\u0432\u0435\u0442\u0438 \u0421\u0430\u0432\u0430\u201C \u2013 \u0412\u0435\u043B\u0438\u043A\u043E \u0422\u044A\u0440\u043D\u043E\u0432\u043E"}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
