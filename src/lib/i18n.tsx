import React, { createContext, useContext, useState } from "react";

export type Language = "bg" | "en" | "ro";

const Q = "\u201E";
const QC = "\u201C";

const translations = {
  bg: {
    logo: `Легендарна къща ${Q}Св. Сава${QC}`,
    nav: { about: "За къщата", rooms: "Стаи", amenities: "Удобства", gallery: "Галерия", location: "Локация", contact: "Контакти" },
    hero: {
      title: "Легендарната къща Св. Сава",
      subtitle: "там където духът на Търново оживява",
      desc: "Бутикова къща със стаи и апартаменти за гости в сърцето на Велико Търново – съчетание на възрожденска атмосфера, уют и съвременен комфорт.",
      cta1: "Направи запитване",
      cta2: "Разгледай стаите",
    },
    about: {
      title: "За къщата",
      p1: `Легендарната къща ${Q}Свети Сава${QC} се намира в историческата част на Велико Търново – сред калдъръмени уличкии, старинни фасади и неповторима атмосфера.`,
      p2: "Разположена на ул. Ген. Гурко, в архитектурния резерват на стария град, къщата предлага панорамни гледки към река Янтра и старите квартали.",
      p3: "Тук времето сякаш забавя своя ход. Ще усетите спокойствие, тишина и уют, които превръщат всяка нощувка в истинско преживяване.",
      p4: "Къщата съчетава автентичния дух на старопрестолния град с удобствата на съвременното настаняване – идеално място за романтична почивка, уикенд бягство или семейно пътуване.",
    },
    locationIntro: {
      title: "В сърцето на старопрестолния град",
      subtitle: "Легендарната ул. Гурко",
    },
    rooms: {
      title: "Стаи и настаняване",
      room1: "Стая 101 – Двойна супериорна, Етаж 1",
      room1floor: "Етаж 1",
      room1features: [
        "Двойна супериорна Етаж 1",
        "Голямо двойно легло",
        "с кухненски бокс (с мивка и керамичен плот)",
        "БЕЗ балкон, но с красива гледка към улицата и стария град",
      ],
      room2: "Апартамент 201 – Етаж 2",
      room2floor: "Етаж 2",
      room2features: [
        "С две спални",
        "Кухненски бокс (с мивка и керамичен плот)",
        "С БАЛКОН",
      ],
      room3: "Тройно студио 301 и 302",
      room3floor: "Етаж 3",
      room3features: [
        "Голямо двойно легло",
        "Допълнително единично легло",
        "Барплот",
        "Подово отопление в банята",
        "Без балкон",
        "Гледка към реката, моста и паметника Асеневци",
        "Самостоятелна баня",
      ],
    },
    sharedAmenities: {
      title: "Във всички стаи",
      items: [
        "Микровълнова с грил",
        "Кана за вода",
        "Сешоар",
        "Климатик",
        "TV",
        "WiFi",
        "Маса и столове",
        "Съдове и прибори",
        "Кърпи",
      ],
    },
    amenities: {
      title: "Удобства",
      items: [
        "Безплатен високоскоростен Wi-Fi",
        "Централна локация в архитектурния резерват",
        "Smart TV с 250+ канала във всяка стая",
        "Еспресо машина, кафе 2в1/3в1 и чай",
        "Микровълнова с грил (в избрани стаи)",
        "Перално помещение с перална, сушилня и ютия",
        "Тиха и спокойна атмосфера",
        "Спално бельо и допълнителни възглавници",
        "Подходящо за двойки и семейства",
        "Препоръчани ресторанти и музеи",
      ],
    },
    spa: {
      title: "Допълнителни възможности",
      p1: "В непосредствена близост до къщата се намира хотел със СПА център, басейн и уелнес зона.",
      p2: "Нашите гости могат да се възползват от тези услуги срещу допълнително заплащане и при наличност.",
      p3: "СПА услугите не са включени в цената на нощувката.",
      p4: "Тази възможност позволява да съчетаете уюта на възрожденската къща с модерно релакс изживяване.",
    },
    parking: {
      title: "Паркиране и достъп",
      items: [
        `Около механа ${Q}Тихият Кът${QC} – всяко свободно място (НЕ влизайте в ул. Гурко – тясна е)`,
        "Ул. Хаджи Димитър – по цялата дължина",
        `Ул. Николай Павлович – паралелна на Хаджи Димитър (30–40 м до къщата)`,
      ],
      note: "Препоръчваме да паркирате на някоя от съседните улици и да се разходите пеша до къщата – разстоянието е около 3–5 минути.",
      mapLink: "https://maps.app.goo.gl/m1bFsBE2Qa1UrSYZA",
    },
    accommodation: {
      title: "Инструкции за настаняване",
      bg: "Настаняване – Български",
      en: "Accommodation – English",
      ro: "Cazare – Română",
    },
    pdf: "Изтегли инструкции за самонастаняване",
    location: {
      title: "В сърцето на старопрестолния град",
      desc: "Къщата се намира на ул. Генерал Гурко – в сърцето на архитектурния резерват на Велико Търново, сред над 200-годишни възрожденски къщи с характерни еркери и дървени чардаци. Калдъръмената улица се вие по склона над река Янтра, откривайки панорамни гледки към Паметника на Асеневци и старите квартали.",
      desc2: "В непосредствена близост са Археологическият музей, крепостта Царевец, Арбанаси, както и най-тясната улица в България. Това е място, където историята се усеща на всяка крачка.",
      distances: [
        ["Царевец", "~1.5 км"],
        ["Археологически музей", "~700 м"],
        [`Църква ${Q}Св. 40 мъченици${QC}`, "~1.4 км"],
        ["Паметник на Асеневци", "~900 м"],
        ["Най-тясната улица в България", "~200 м"],
        ["Арбанаси", "~5 км"],
        ["Център", "~500 м"],
        ["Автогара", "~2 км"],
      ] as [string, string][],
    },
    views: {
      title: "Гледки и атмосфера",
      subtitle: "Градът, който остава в сърцето",
      desc: "От панорамните гледки към река Янтра до вечерните светлини на Царевец – тук всяка разходка е преживяване.",
      gurkoTitle: "Легендарната улица Генерал Гурко",
      gurkoP1: "Улица Генерал Гурко е една от най-красивите и емблематични улици на Велико Търново. Калдъръмената улица се вие по склона над река Янтра, обградена от автентични възрожденски къщи с характерни еркери, дървени чардаци и цветя по фасадите.",
      gurkoP2: "От улицата се откриват захласващи панорамни гледки към река Янтра, старите квартали и хълмовете наоколо. Това е мястото, където историята и красотата се преплитат във всяка крачка.",
    },
    gallery: { title: "Галерия" },
    contact: {
      title: "Контакти и резервации",
      address: "Велико Търново, ул. ген. Гурко 13",
      name: "Име",
      phone: "Телефон",
      email: "Имейл",
      dates: "Дати на настаняване",
      message: "Съобщение",
      send: "Изпрати запитване",
      closing: "Очакваме Ви, за да изживеете магията на старо Търново.",
    },
    footer: {
      slogan: "Повече от нощувка – преживяване.",
    },
  },
  en: {
    logo: `Legendary House ${Q}St. Sava${QC}`,
    nav: { about: "About", rooms: "Rooms", amenities: "Amenities", gallery: "Gallery", location: "Location", contact: "Contact" },
    hero: {
      title: "Legendary House St. Sava",
      subtitle: "where the spirit of Tarnovo comes alive",
      desc: "A boutique guesthouse with rooms and apartments in the heart of Veliko Tarnovo – a blend of Revival atmosphere, warmth, and modern comfort.",
      cta1: "Make an inquiry",
      cta2: "View rooms",
    },
    about: {
      title: "About the House",
      p1: `The Legendary House ${Q}Sveti Sava${QC} is located in the historic part of Veliko Tarnovo – among cobblestone streets, antique facades, and a unique atmosphere.`,
      p2: "Situated on Gen. Gurko Street, in the architectural reserve of the old town, the house offers panoramic views of the Yantra River and the old quarters.",
      p3: "Here, time seems to slow down. You will feel peace, silence, and warmth that turn every night into a true experience.",
      p4: "The house combines the authentic spirit of the old capital with modern accommodation amenities – the perfect place for a romantic getaway, weekend escape, or family trip.",
    },
    locationIntro: {
      title: "In the heart of the old capital",
      subtitle: "The legendary Gurko Street",
    },
    rooms: {
      title: "Rooms & Accommodation",
      room1: "Room 101 – Double Superior, Floor 1",
      room1floor: "Floor 1",
      room1features: [
        "Double Superior Floor 1",
        "Large double bed",
        "with kitchenette (with sink and ceramic hob)",
        "NO balcony, but with a beautiful view of the street and the old town",
      ],
      room2: "Apartment 201 – Floor 2",
      room2floor: "Floor 2",
      room2features: [
        "Two bedrooms",
        "Kitchenette (with sink and ceramic hob)",
        "WITH BALCONY",
      ],
      room3: "Triple Studio 301 & 302",
      room3floor: "Floor 3",
      room3features: [
        "Large double bed",
        "Additional single bed",
        "Bar counter",
        "Underfloor heating in bathroom",
        "No balcony",
        "View of the river, bridge and Asenevtsi monument",
        "Private bathroom",
      ],
    },
    sharedAmenities: {
      title: "In all rooms",
      items: [
        "Microwave with grill",
        "Electric kettle",
        "Hair dryer",
        "Air conditioning",
        "TV",
        "WiFi",
        "Table and chairs",
        "Dishes and cutlery",
        "Towels",
      ],
    },
    amenities: {
      title: "Amenities",
      items: [
        "Free high-speed Wi-Fi",
        "Central location in the architectural reserve",
        "Smart TV with 250+ channels in every room",
        "Espresso machine, coffee 2in1/3in1 & tea",
        "Microwave with grill (select rooms)",
        "Laundry room with washer, dryer & iron",
        "Quiet and peaceful atmosphere",
        "Bed linen and extra pillows",
        "Suitable for couples and families",
        "Recommended restaurants and museums",
      ],
    },
    spa: {
      title: "Additional Options",
      p1: "A hotel with a SPA center, pool, and wellness area is located near the house.",
      p2: "Our guests can take advantage of these services for an additional fee and subject to availability.",
      p3: "SPA services are not included in the room rate.",
      p4: "This option allows you to combine the comfort of the Revival house with a modern relaxation experience.",
    },
    parking: {
      title: "Parking & Access",
      items: [
        `Near ${Q}Tihiyat Kat${QC} tavern – any free spot (Do NOT enter Gurko Street – it's narrow)`,
        "Hadji Dimitar Street – along its entire length",
        "Nikolay Pavlovich Street – parallel to Hadji Dimitar (30–40 m to the house)",
      ],
      note: "We recommend parking on one of the neighboring streets and walking to the house – it's about 3–5 minutes on foot.",
      mapLink: "https://maps.app.goo.gl/m1bFsBE2Qa1UrSYZA",
    },
    accommodation: {
      title: "Check-in Instructions",
      bg: "Check-in – Bulgarian",
      en: "Accommodation – English",
      ro: "Cazare – Română",
    },
    pdf: "Download self check-in instructions",
    location: {
      title: "In the heart of the old capital",
      desc: "The house is located on Gen. Gurko Street – in the heart of the architectural reserve of Veliko Tarnovo, among 200-year-old Revival houses with characteristic bay windows and wooden balconies. The cobblestone street winds along the slope above the Yantra River, revealing panoramic views toward the Monument of Asenevtsi and the old quarters.",
      desc2: "Nearby are the Archaeological Museum, Tsarevets Fortress, Arbanasi, as well as the narrowest street in Bulgaria. This is a place where history is felt with every step.",
      distances: [
        ["Tsarevets", "~1.5 km"],
        ["Archaeological Museum", "~700 m"],
        ["Church of the 40 Martyrs", "~1.4 km"],
        ["Asen Monument", "~900 m"],
        ["Narrowest street in Bulgaria", "~200 m"],
        ["Arbanasi", "~5 km"],
        ["City Center", "~500 m"],
        ["Bus Station", "~2 km"],
      ] as [string, string][],
    },
    views: {
      title: "Views & Atmosphere",
      subtitle: "The city that stays in your heart",
      desc: "From the panoramic views of the Yantra River to the evening lights of Tsarevets – every walk here is an experience.",
      gurkoTitle: "The Legendary General Gurko Street",
      gurkoP1: "General Gurko Street is one of the most beautiful and iconic streets of Veliko Tarnovo. The cobblestone road winds along the slope above the Yantra River, lined with authentic Revival houses featuring characteristic bay windows, wooden balconies, and flowers on the facades.",
      gurkoP2: "From the street, breathtaking panoramic views open up toward the Yantra River, the old quarters, and the surrounding hills. This is where history and beauty intertwine with every step.",
    },
    gallery: { title: "Gallery" },
    contact: {
      title: "Contact & Reservations",
      address: "Veliko Tarnovo, Gen. Gurko St. 13",
      name: "Name",
      phone: "Phone",
      email: "Email",
      dates: "Check-in dates",
      message: "Message",
      send: "Send inquiry",
      closing: "We look forward to welcoming you to experience the magic of old Tarnovo.",
    },
    footer: {
      slogan: "More than a stay – an experience.",
    },
  },
  ro: {
    logo: `Casa Legendară ${Q}Sf. Sava${QC}`,
    nav: { about: "Despre", rooms: "Camere", amenities: "Facilități", gallery: "Galerie", location: "Locație", contact: "Contact" },
    hero: {
      title: "Casa Legendară Sf. Sava",
      subtitle: "unde spiritul vechiului Târnovo prinde viață",
      desc: "O casă de oaspeți boutique cu camere și apartamente în inima orașului Veliko Târnovo – o combinație de atmosferă renascentistă, căldură și confort modern.",
      cta1: "Trimite o cerere",
      cta2: "Vezi camerele",
    },
    about: {
      title: "Despre casă",
      p1: `Casa legendară ${Q}Sfântul Sava${QC} este situată în partea istorică a orașului Veliko Târnovo – printre străzi pavate, fațade antice și o atmosferă unică.`,
      p2: "Situată pe strada Gen. Gurko, în rezervația arhitecturală a orașului vechi, casa oferă vederi panoramice asupra râului Yantra și cartierele vechi.",
      p3: "Aici, timpul pare să încetinească. Veți simți liniștea, tăcerea și căldura care transformă fiecare noapte într-o experiență autentică.",
      p4: "Casa combină spiritul autentic al vechii capitale cu facilitățile cazării moderne – locul ideal pentru o escapadă romantică, un weekend de evadare sau o călătorie în familie.",
    },
    locationIntro: {
      title: "În inima vechii capitale",
      subtitle: "Legendara stradă Gurko",
    },
    rooms: {
      title: "Camere și cazare",
      room1: "Camera 101 – Double Superior",
      room1: "Camera 101 – Double Superior, Etajul 1",
      room1floor: "Etajul 1",
      room1features: [
        "Double Superior Etajul 1",
        "Pat dublu mare",
        "cu chicinetă (cu chiuvetă și plită ceramică)",
        "FĂRĂ balcon, dar cu vedere frumoasă spre stradă și orașul vechi",
      ],
      room2: "Apartament 201 – Etajul 2",
      room2floor: "Etajul 2",
      room2features: [
        "Cu două dormitoare",
        "Chicineta (cu chiuvetă și plită ceramică)",
        "CU BALCON",
      ],
      room3: "Studio Triplu 301 și 302",
      room3floor: "Etajul 3",
      room3features: [
        "Pat dublu mare",
        "Pat single suplimentar",
        "Bar",
        "Încălzire în pardoseală în baie",
        "Fără balcon",
        "Vedere spre râu, pod și monumentul Asenevtsi",
        "Baie privată",
      ],
    },
    sharedAmenities: {
      title: "În toate camerele",
      items: [
        "Cuptor cu microunde și grill",
        "Fierbător de apă",
        "Uscător de păr",
        "Aer condiționat",
        "TV",
        "WiFi",
        "Masă și scaune",
        "Vase și tacâmuri",
        "Prosoape",
      ],
    },
    amenities: {
      title: "Facilități",
      items: [
        "Wi-Fi gratuit de mare viteză",
        "Locație centrală în rezervația arhitecturală",
        "Smart TV cu 250+ canale în fiecare cameră",
        "Espressor, cafea 2în1/3în1 și ceai",
        "Cuptor cu microunde și grill (camere selectate)",
        "Spălătorie cu mașină, uscător și fier de călcat",
        "Atmosferă liniștită și pașnică",
        "Lenjerie de pat și perne suplimentare",
        "Potrivit pentru cupluri și familii",
        "Restaurante și muzee recomandate",
      ],
    },
    spa: {
      title: "Opțiuni suplimentare",
      p1: "Un hotel cu centru SPA, piscină și zonă de wellness se află în apropierea casei.",
      p2: "Oaspeții noștri pot beneficia de aceste servicii contra cost și în funcție de disponibilitate.",
      p3: "Serviciile SPA nu sunt incluse în tariful camerei.",
      p4: "Această opțiune vă permite să combinați confortul casei renascenţiste cu o experiență modernă de relaxare.",
    },
    parking: {
      title: "Parcare și acces",
      items: [
        `Lângă taverna ${Q}Tihiyat Kat${QC} – orice loc liber (NU intrați pe str. Gurko – este îngustă)`,
        "Strada Hadji Dimitar – pe toată lungimea",
        "Strada Nikolay Pavlovich – paralelă cu Hadji Dimitar (30–40 m de casă)",
      ],
      note: "Vă recomandăm să parcați pe una dintre străzile vecine și să mergeți pe jos până la casă – durează circa 3–5 minute.",
      mapLink: "https://maps.app.goo.gl/m1bFsBE2Qa1UrSYZA",
    },
    accommodation: {
      title: "Instrucțiuni de cazare",
      bg: "Настаняване – Български",
      en: "Accommodation – English",
      ro: "Cazare – Română",
    },
    pdf: "Descarcă instrucțiunile de self check-in",
    location: {
      title: "În inima vechii capitale",
      desc: "Casa este situată pe strada Gen. Gurko – în inima rezervației arhitecturale din Veliko Târnovo, printre case renascenţiste de peste 200 de ani, cu balcoane din lemn caracteristice. Strada pavată se întinde de-a lungul versantului de deasupra râului Yantra, oferind vederi panoramice spre Monumentul Asen.",
      desc2: "În apropiere se află Muzeul Arheologic, Cetatea Tsarevets, Arbanasi, precum și cea mai îngustă stradă din Bulgaria. Aici istoria se simte la fiecare pas.",
      distances: [
        ["Tsarevets", "~1.5 km"],
        ["Muzeul Arheologic", "~700 m"],
        ["Biserica celor 40 de mucenici", "~1.4 km"],
        ["Monumentul Asen", "~900 m"],
        ["Cea mai îngustă stradă din Bulgaria", "~200 m"],
        ["Arbanasi", "~5 km"],
        ["Centrul orașului", "~500 m"],
        ["Autogara", "~2 km"],
      ] as [string, string][],
    },
    views: {
      title: "Priveliste si atmosferă",
      subtitle: "Orașul care rămâne în inimă",
      desc: "De la vederile panoramice asupra râului Yantra până la luminile de seară ale Tsarevets – fiecare plimbare aici este o experiență.",
      gurkoTitle: "Legendara stradă General Gurko",
      gurkoP1: "Strada General Gurko este una dintre cele mai frumoase și emblematice străzi din Veliko Târnovo. Drumul pavat se întinde de-a lungul versantului de deasupra râului Yantra, înconjurat de case autentice în stil Renascenţist cu balcoane din lemn și flori pe fațade.",
      gurkoP2: "De pe stradă se deschid vederi panoramice uimitoare spre râul Yantra, cartierele vechi și dealurile împrejurătoare. Aici istoria și frumusețea se împletesc la fiecare pas.",
    },
    gallery: { title: "Galerie" },
    contact: {
      title: "Contact și rezervări",
      address: "Veliko Târnovo, str. Gen. Gurko 13",
      name: "Nume",
      phone: "Telefon",
      email: "Email",
      dates: "Date de cazare",
      message: "Mesaj",
      send: "Trimite cererea",
      closing: "Vă așteptăm să trăiți magia vechiului Târnovo.",
    },
    footer: {
      slogan: "Mai mult decât o noapte – o experiență.",
    },
  },
};

type Translations = typeof translations.bg;

const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  t: Translations;
}>({
  lang: "bg",
  setLang: () => {},
  t: translations.bg,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("bg");
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
