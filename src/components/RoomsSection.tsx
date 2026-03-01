import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/lib/i18n";
import room101_1 from "@/assets/room101-1.png";
import room101_2 from "@/assets/room101-2.png";
import room101_3 from "@/assets/room101-3.png";
import room101_4 from "@/assets/room101-4.png";
import room101_5 from "@/assets/room101-5.png";
import room101_6 from "@/assets/room101-6.png";
import room101_7 from "@/assets/room101-7.png";
import suite201_1 from "@/assets/suite201-1.png";
import suite201_2 from "@/assets/suite201-2.png";
import suite201_3 from "@/assets/suite201-3.png";
import studio301_1 from "@/assets/studio301-1.png";
import studio301_2 from "@/assets/studio301-2.png";
import studio301_3 from "@/assets/studio301-3.png";
import room302_1 from "@/assets/room302-1.png";
import room302_2 from "@/assets/room302-2.png";
import room302_3 from "@/assets/room302-3.png";
import room302_4 from "@/assets/room302-4.png";
import room302_5 from "@/assets/room302-5.png";
import room302_6 from "@/assets/room302-6.png";
import room302_7 from "@/assets/room302-7.png";
import balconyImg from "@/assets/balcony.png";

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
      mainImg: suite201_1,
      imgs: [suite201_2, suite201_3, balconyImg],
    },
    {
      name: t.rooms.room3,
      floor: t.rooms.room3floor,
      features: t.rooms.room3features,
      mainImg: studio301_1,
      imgs: [studio301_2, studio301_3],
    },
    {
      name: t.rooms.room4,
      floor: t.rooms.room4floor,
      features: t.rooms.room4features,
      mainImg: room302_1,
      imgs: [room302_2, room302_3, room302_4, room302_5, room302_6, room302_7],
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
