import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/lib/i18n";
import { Bed, Bath, Wind, Tv, Wifi, Coffee, Eye, WashingMachine, Microwave, Sofa, UtensilsCrossed, Building } from "lucide-react";
import room1 from "@/assets/room-1.png";
import room2 from "@/assets/room-2.png";
import room3 from "@/assets/room-3.png";
import room4 from "@/assets/room-4.png";
import bathroom1 from "@/assets/bathroom-1.png";
import kitchen from "@/assets/kitchen.png";

const RoomsSection = () => {
  const { t } = useLanguage();
  const f = t.rooms.features;

  const rooms = [
    {
      name: t.rooms.room1,
      desc: t.rooms.room1desc,
      floor: t.rooms.room1floor,
      mainImg: room1,
      imgs: [bathroom1, room4],
      features: [f.bed, f.bathroom, f.ac, f.tv, f.wifi, f.balcony, f.view, f.coffee],
    },
    {
      name: t.rooms.room2,
      desc: t.rooms.room2desc,
      floor: t.rooms.room2floor,
      mainImg: room2,
      imgs: [kitchen, room3],
      features: [f.bed, f.sofa, f.bathroom, f.ac, f.tv, f.wifi, f.kitchen, f.microwave, f.coffee, f.balcony, f.dining, f.laundry],
    },
    {
      name: t.rooms.room3,
      desc: t.rooms.room3desc,
      floor: t.rooms.room3floor,
      mainImg: room3,
      imgs: [room4, room1],
      features: [f.bed, f.twinBed, f.bathroom, f.ac, f.tv, f.wifi, f.kitchen, f.coffee, f.dining, f.laundry],
    },
  ];

  const featureIcons: Record<string, React.ReactNode> = {
    [f.bed]: <Bed size={16} />, [f.twinBed]: <Bed size={16} />,
    [f.bathroom]: <Bath size={16} />,
    [f.ac]: <Wind size={16} />, [f.tv]: <Tv size={16} />,
    [f.wifi]: <Wifi size={16} />, [f.kitchen]: <Coffee size={16} />,
    [f.coffee]: <Coffee size={16} />, [f.balcony]: <Eye size={16} />,
    [f.view]: <Eye size={16} />, [f.laundry]: <WashingMachine size={16} />,
    [f.microwave]: <Microwave size={16} />, [f.sofa]: <Sofa size={16} />,
    [f.dining]: <UtensilsCrossed size={16} />, [f.floor]: <Building size={16} />,
  };

  return (
    <section id="rooms" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-16">
            <span className="text-primary">{t.rooms.title}</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-20">
          {rooms.map((room, i) => (
            <AnimatedSection key={i} delay={0.1}>
              <div className={`grid md:grid-cols-2 gap-8 items-start ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                {/* Images */}
                <div className={`grid grid-cols-2 gap-3 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="col-span-2">
                    <img
                      src={room.mainImg}
                      alt={room.name}
                      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  {room.imgs.map((img, j) => (
                    <img
                      key={j}
                      src={img}
                      alt={`${room.name} - ${j + 2}`}
                      className="w-full h-36 md:h-44 object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  ))}
                </div>

                {/* Info */}
                <div className={`flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="font-heading text-2xl text-foreground mb-1">{room.name}</h3>
                  <p className="text-sm text-gold font-medium mb-4">{room.floor}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{room.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {room.features.map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-gold">{featureIcons[feat] || <Coffee size={16} />}</span>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
