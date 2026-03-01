import { LanguageProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LocationIntroSection from "@/components/LocationIntroSection";
import RoomsSection from "@/components/RoomsSection";
import SharedAmenitiesSection from "@/components/SharedAmenitiesSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import SpaSection from "@/components/SpaSection";
import ParkingSection from "@/components/ParkingSection";
import AccommodationSection from "@/components/AccommodationSection";
import GallerySection from "@/components/GallerySection";
import ViewsSection from "@/components/ViewsSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <LanguageProvider>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <LocationIntroSection />
      <RoomsSection />
      <SharedAmenitiesSection />
      <AmenitiesSection />
      <SpaSection />
      <ParkingSection />
      <AccommodationSection />
      <GallerySection />
      <ViewsSection />
      <LocationSection />
      <ContactSection />
    </main>
    <FooterSection />
  </LanguageProvider>
);

export default Index;
