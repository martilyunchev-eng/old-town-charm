import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/lib/i18n";
import room101_1 from "@/assets/room101-1.png";
import room101_2 from "@/assets/room101-2.png";
import room101_3 from "@/assets/room101-3.png";
import room101_4 from "@/assets/room101-4.png";
import room101_5 from "@/assets/room101-5.png";
import room101_6 from "@/assets/room101-6.png";
import room101_7 from "@/assets/room101-7.png";
import apt201_1 from "@/assets/apt201-1.png";
import apt201_2 from "@/assets/apt201-2.png";
import apt201_3 from "@/assets/apt201-3.png";
import apt201_4 from "@/assets/apt201-4.png";
import apt201_5 from "@/assets/apt201-5.png";
import apt201_6 from "@/assets/apt201-6.png";
import apt201_7 from "@/assets/apt201-7.png";
import apt201_8 from "@/assets/apt201-8.png";
import apt201_9 from "@/assets/apt201-9.png";
import apt201_10 from "@/assets/apt201-10.png";

const RoomsSection = () => {
  const { t } = useLanguage();

  const rooms = [
    {
      name: t.rooms.room1,
      floor: t.rooms.room1floor,
      features: t.rooms.room1features,
      mainImg: room101_1,
      imgs: [room101_2, room101_3, room101_4, room101_5, room101_6, room101_7],
    },
    {
      name: t.rooms.room2,
      floor: t.rooms.room2floor,
      features: t.rooms.room2features,
      mainImg: null,
      imgs: [],
    },
    {
      name: t.rooms.room3,
      floor: t.rooms.room3floor,
      features: t.rooms.room3features,
      mainImg: null,
      imgs: [],
    },
  ];

  return (
    <section id="rooms" className="py-20 md:py-28 bg-background">
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
                {room.mainImg ? (
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
                ) : (
                  <div className={`flex items-center justify-center h-64 md:h-80 rounded-lg border border-dashed border-muted-foreground/30 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <p className="text-muted-foreground text-sm">Снимки ще бъдат добавени скоро</p>
                  </div>
                )}

                {/* Info */}
                <div className={`flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="font-heading text-2xl text-foreground mb-1">{room.name}</h3>
                  <p className="text-sm text-gold font-medium mb-6">{room.floor}</p>
                  <ul className="space-y-2">
                    {room.features.map((feat, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
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
