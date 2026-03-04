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
          <a href="tel:+359878400681" className="flex items-center gap-2 hover:text-gold transition-colors">
            <Phone size={14} /> +359 878 400681
          </a>
          <a href="mailto:stsavahouse@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
            <Mail size={14} /> stsavahouse@gmail.com
          </a>
          <a
            href="https://maps.app.goo.gl/PxAyaUiWcR1ZRAnZ7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <MapPin size={14} /> Google Maps
          </a>
        </div>

        <div className="text-center text-xs text-wood-foreground/40">
          &copy; {new Date().getFullYear()} Св. Сава „Легендарна къща" – Велико Търново
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
