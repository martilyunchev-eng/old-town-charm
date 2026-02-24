import { LanguageProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoomsSection from "@/components/RoomsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import SpaSection from "@/components/SpaSection";
import ParkingSection from "@/components/ParkingSection";
import LocationSection from "@/components/LocationSection";
import GallerySection from "@/components/GallerySection";
import ViewsSection from "@/components/ViewsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <LanguageProvider>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <AmenitiesSection />
      <SpaSection />
      <ParkingSection />
      <LocationSection />
      <GallerySection />
      <ViewsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </LanguageProvider>
);

export default Index;
