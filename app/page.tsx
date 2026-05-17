"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Testimonials from "@/components/ui/testimonials-demo";

export default function Home() {
  type Lang = "sl" | "mk" | "sr" | "hr" | "en" | "it";

  const languageOptions: { code: Lang; label: string }[] = [
    { code: "sl", label: "SL" },
    { code: "mk", label: "MK" },
    { code: "sr", label: "SR" },
    { code: "hr", label: "HR" },
    { code: "en", label: "EN" },
    { code: "it", label: "IT" },
  ];

  const i18n = {
    sl: {
      languageLabel: "Jezik",
      nav: {
        services: "Storitve",
        packages: "Paketi",
        gallery: "Galerija",
        about: "O nas",
        reviews: "Mnenja",
        contact: "Kontakt",
        reserve: "Rezerviraj termin",
      },
      hero: {
        badge: "Novo Mesto · Slovenija",
        lead: "Globinsko čiščenje in nega vozil",
        l1: "Vaš avto",
        l2: "si zasluži",
        l3: "najboljše.",
        desc: "Branislav Javorski s.p. — profesionalno poliranje, keramični premaz in čiščenje vozil. Premium rezultati v Novem mestu.",
        ctaServices: "Oglej si storitve",
        specialistRole: "Avto Detailing Specialist",
      },
      pillars: [
        {
          t: "Globinsko čiščenje",
          d: "Vsak centimeter vozila — znotraj in zunaj. Visokotlačno in parno čiščenje.",
        },
        {
          t: "Keramični premaz",
          d: "Profesionalna aplikacija Gyeon in Koch Chemie. Zaščita za 2–5 let.",
        },
        {
          t: "Strojno poliranje",
          d: "Korekcija laka — mikropraske, oksidacija, dolge proge. Zrcalni sijaj.",
        },
      ],
      servicesSection: {
        eyebrow: "Naše storitve",
        titleTop: "Vse, kar vaš",
        titleBottom: "avto\npotrebuje.",
        desc: "Od hitrih osvežitev do celovite transformacije vozila. Vsaka storitev je po dogovoru in prilagojena vašim potrebam — z najboljšimi produkti Koch Chemie, Gyeon, Meguiar's in Sonax.",
      },
      services: [
        {
          n: "01",
          title: "Globinsko čiščenje zunanjosti",
          desc: "Celovita dekontaminacija — od predpranja z alkalnim čistilom do zaščitnega premaza. Minimalno 3 stopnje pranja.",
          points: [
            "Predpranja z alkalnim čistilom",
            "Pranje s pH nevtralnim šamponom",
            "Dekontaminacija z glino",
            "Zaščitni quick detailer",
          ],
        },
        {
          n: "02",
          title: "Globinsko čiščenje notranjosti",
          desc: "Sedeži, oblazinjenje, armatura in vsi vogali. Z ozonsko obdelavo za trajno odpravo vonjav.",
          points: [
            "Globinsko sesanje",
            "Razmaščevanje plastik in stekla",
            "Čiščenje med vrati",
            "Ozonska obdelava",
          ],
        },
        {
          n: "03",
          title: "Strojno poliranje laka",
          desc: "Korekcija laka z rotacijsko in ekscentrično brusilko. Mikropraske, oksidacija — vse izgine.",
          points: [
            "Enkratno poliranje",
            "Dvostopenjska korekcija",
            "Večstopenjska korekcija",
            "4–25 ur izvedbe",
          ],
        },
        {
          n: "04",
          title: "Keramični premaz",
          desc: "Profesionalna aplikacija Gyeon in Koch Chemie. Hidrofobni efekt in zaščita za 2–5 let.",
          points: [
            "Poliranje pred nanosom",
            "Profesionalni nanos keramike",
            "Zaščita plastik in gum",
            "Garancija 2–5 let",
          ],
        },
        {
          n: "05",
          title: "Kompleksni VIP paket",
          desc: "Vse pod eno streho — celovito čiščenje, poliranje in keramika. Za absolutno najboljše. 1–2 dneva.",
          points: [
            "Globinsko čiščenje znotraj + zunaj",
            "Strojno poliranje",
            "Keramični premaz",
            "Nega platišč in gum",
          ],
        },
      ],
      packagesSection: {
        eyebrow: "Avto Detailing Brane s.p.",
        titleTop: "Paketi storitev",
        titleBottom: "Brez cenika,\njasno po paketih.",
        desc: "Izberi paket glede na stanje vozila in željeni rezultat. Vse kartice spodaj prikazujejo storitve brez cen.",
        cleaningTitle: "Paketi čiščenja",
        polishTitle: "Paketi poliranja",
        vipLabel: "VIP Premium",
        resultLabel: "Rezultat:",
        additionalTitle: "Dodatne storitve",
        byAgreement: "Po dogovoru",
      },
      cleaningPackages: [
        {
          name: "Osnovno čiščenje",
          items: [
            "Zunanje pranje vozila",
            "Sušenje vozila",
            "Čiščenje platišč in pnevmatik",
            "Sesanje notranjosti",
            "Brisanje prahu in plastik",
            "Čiščenje stekel",
            "Osvežitev notranjosti",
          ],
        },
        {
          name: "Premium čiščenje",
          items: [
            "Vse iz paketa Osnovno čiščenje",
            "Temeljito čiščenje platišč",
            "Čiščenje vratnih robov",
            "Detajlno čiščenje armature in vseh plastik",
            "Nega notranjih plastik",
            "Zaščita pnevmatik (sijaj)",
            "Dezodoracija vozila",
          ],
        },
        {
          name: "Komplet detailing",
          items: [
            "Vse iz paketa Premium čiščenje",
            "Globinsko čiščenje sedežev in tekstila",
            "Čiščenje težje dostopnih delov",
            "Dekontaminacija laka",
            "Zaščita laka (quick wax)",
            "Premium osvežitev vozila",
          ],
        },
      ],
      polishPackages: [
        {
          name: "Osnovno poliranje",
          items: [
            "Enostopenjsko strojno poliranje",
            "Odstranjevanje manjših prask",
            "Povečanje sijaja laka",
          ],
        },
        {
          name: "Premium poliranje",
          items: [
            "Večstopenjsko poliranje",
            "Korekcija manjših in srednjih prask",
            "Obnova globine barve",
            "Zaščita laka po poliranju",
          ],
        },
        {
          name: "Prestige korekcija laka",
          items: [
            "Profesionalna večstopenjska korekcija laka",
            "Maksimalna odstranitev prask",
            "Obnova visokega sijaja",
            "Dolgotrajna zaščita laka",
          ],
        },
      ],
      vipPackage: {
        name: "VIP Premium Paket",
        subtitle: "Kompletna premium nega vozila",
        items: [
          "Premium čiščenje",
          "Premium poliranje",
          "Detajlno čiščenje notranjosti",
          "Zaščita laka",
          "Nega plastik in pnevmatik",
          "Premium parfumiranje vozila",
          "Končni detailing vseh detajlov",
        ],
        result: "Vozilo kot novo - popolnoma čisto, zaščiteno in sijoče.",
      },
      additionalServices: [
        {
          name: "Čiščenje motornega prostora",
          items: [
            "Varno čiščenje motorja",
            "Odstranjevanje maščobe in umazanije",
            "Nega plastičnih delov",
          ],
        },
        {
          name: "Poliranje žarometov",
          items: [
            "Odstranjevanje motnosti in porumenelosti",
            "Obnova prosojnosti",
            "Zaščita po poliranju",
          ],
        },
        {
          name: "Dezinfekcija notranjosti",
          items: [
            "Dezinfekcija vseh površin",
            "Odstranjevanje bakterij in neprijetnih vonjav",
          ],
        },
        {
          name: "Dezinfekcija prezračevalnega sistema",
          items: [
            "Čiščenje ventilacijskih odprtin",
            "Odstranjevanje neprijetnih vonjav iz klime",
            "Antibakterijska zaščita",
          ],
        },
      ],
      processSection: { eyebrow: "Postopek" },
      processSteps: [
        {
          n: "01",
          t: "Dogovor termina",
          d: "Pokličite ali pišite — skupaj poiščemo termin, ki vam ustreza.",
        },
        {
          n: "02",
          t: "Pregled vozila",
          d: "Ob prihodu opravimo ogled stanja laka in notranjosti.",
        },
        {
          n: "03",
          t: "Izvedba storitve",
          d: "Ekološki pristop z najboljšimi produkti Koch Chemie, Gyeon, Meguiar's.",
        },
        {
          n: "04",
          t: "Prevzem",
          d: "Vozilo prejmete z brezhibnim sijajem. Garancija zadovoljstva.",
        },
      ],
      gallerySection: {
        eyebrow: "Naše delo · Pravi rezultati",
        titleTop: "Galerija",
        titleBottom: "Rezultati\ngovorijo sami.",
        desc: "Vsaka fotografija — resnično vozilo, resnično delo. Brez filtrov, brez trika.",
        labels: [
          "Zunanje čiščenje · Mercedes",
          "Notranjost · BMW",
          "Keramični premaz · SUV",
          "Poliranje · Mercedes",
        ],
      },
      aboutSection: {
        eyebrow: "Branislav Javorski s.p.",
        titleTop: "O nas",
        titleBottom: "Strast do\navtomobilov.",
        p1: "Pri Avto Detailing Brane avtomobilom vračamo popolnost. Naša strast do detailinga, natančnost pri vsakem koraku in uporaba vrhunskih profesionalnih izdelkov zagotavljajo rezultate, ki presegajo pričakovanja. Specializirani smo za celovito nego in zaščito vozil - od temeljitega globinskega čiščenja notranjosti, profesionalnega poliranja laka in obnove sijaja, do naprednih zaščitnih premazov, ki vašemu vozilu zagotavljajo dolgotrajno zaščito in brezhiben videz.",
        p2: "Vsak avtomobil obravnavamo individualno, z največjo mero skrbnosti in pozornosti do najmanjših detajlov. Naš cilj ni le čist in sijoč avtomobil, temveč občutek ponosa in zadovoljstva vsakič, ko sedete za volan. Zaupanje naših strank gradimo na kakovosti, doslednosti in profesionalnem pristopu, saj verjamemo, da je pravi detailing več kot storitev - je predanost popolnosti. Avto Detailing Brane - kjer natančnost, kakovost in strast ustvarjajo popoln videz vašega vozila.",
        locationLabel: "Lokacija",
        phoneLabel: "Telefon",
        hoursLabel: "Delovni čas",
        hoursValue: "Po dogovoru",
        googleLabel: "Ocena Google",
        productsLabel: "Produkti, ki jih uporabljamo",
      },
      reviewsSection: {
        eyebrow: "Google ocene · 5.0 ★",
        titleTop: "Mnenja strank",
        titleBottom: "Resnične ocene,\nbrez spodbude.",
      },
      ctaSection: {
        top: "Vaš avto čaka",
        bottom: "pravo obravnavo.",
      },
      contactSection: {
        eyebrow: "Avto Detailing Brane · Novo Mesto",
        titleTop: "Kontakt",
        titleBottom: "Stopite\nv stik.",
        addressLabel: "Naslov",
        hoursLabel: "Delovni čas",
        hoursValue: "Po dogovoru — pokličite za termin",
        mapsButton: "Odpri v Google Zemljevidih",
        formEyebrow: "Pošljite povpraševanje",
        formTitle: "Odgovorimo v 24 urah.",
        nameLabel: "Ime in priimek",
        phoneLabel: "Telefon",
        emailLabel: "E-pošta",
        vehicleLabel: "Vozilo (znamka in model)",
        serviceLabel: "Storitev",
        servicePlaceholder: "Izberite storitev …",
        serviceOptions: [
          "Globinsko čiščenje zunanjosti",
          "Globinsko čiščenje notranjosti",
          "Strojno poliranje laka",
          "Keramični premaz",
          "Kompleksni VIP paket",
          "Posvet",
        ],
        messageLabel: "Sporočilo",
        sendButton: "Pošlji povpraševanje",
        alert: "Hvala! Sporočilo je bilo poslano — odgovorimo v 24 urah.",
      },
      footer: {
        sub: "Branislav Javorski s.p. · Novo Mesto",
        rights: "Vse pravice pridržane.",
      },
    },
    mk: {
      languageLabel: "Jазик",
      nav: {
        services: "Услуги",
        packages: "Пакети",
        gallery: "Галерија",
        about: "За нас",
        reviews: "Рецензии",
        contact: "Контакт",
        reserve: "Резервирај термин",
      },
      hero: {
        badge: "Ново Место · Словенија",
        lead: "Длабинско чистење и нега на возила",
        l1: "Вашиот автомобил",
        l2: "заслужува",
        l3: "најдоброто.",
        desc: "Branislav Javorski s.p. — професионално полирање, керамичка заштита и чистење возила. Премиум резултати во Ново Место.",
        ctaServices: "Погледни услуги",
        specialistRole: "Специјалист за авто детeјлинг",
      },
      pillars: [
        {
          t: "Длабинско чистење",
          d: "Секој сантиметар од возилото — внатре и надвор.",
        },
        {
          t: "Керамичка заштита",
          d: "Професионална апликација со заштита 2–5 години.",
        },
        { t: "Машинско полирање", d: "Корекција на лакот и висок сјај." },
      ],
      servicesSection: {
        eyebrow: "Наши услуги",
        titleTop: "Се што му треба на",
        titleBottom: "вашиот\nавтомобил.",
        desc: "Од брзо освежување до целосна трансформација на возилото.",
      },
      services: [
        {
          n: "01",
          title: "Длабинско чистење на екстериер",
          desc: "Целосна деконтаминација и заштита на површината.",
          points: [
            "Предперење",
            "pH неутрален шампон",
            "Глина деконтаминација",
            "Quick detailer",
          ],
        },
        {
          n: "02",
          title: "Длабинско чистење на ентериер",
          desc: "Седишта, текстил, пластики и тешко достапни делови.",
          points: [
            "Длабинско правосмукање",
            "Одмастување пластики",
            "Чистење врати",
            "Озон третман",
          ],
        },
        {
          n: "03",
          title: "Машинско полирање",
          desc: "Корекција на лакот и отстранување микро гребнатини.",
          points: ["Едностепено", "Двостепено", "Повеќестепено", "4–25 часа"],
        },
        {
          n: "04",
          title: "Керамичка заштита",
          desc: "Професионална апликација со хидрофобен ефект.",
          points: [
            "Подготовка и полирање",
            "Нанесување керамика",
            "Заштита пластики",
            "Гаранција 2–5 години",
          ],
        },
        {
          n: "05",
          title: "VIP комплексен пакет",
          desc: "Чистење, полирање и керамика во еден пакет.",
          points: [
            "Внатрешно + надворешно чистење",
            "Машинско полирање",
            "Керамичка заштита",
            "Нега на бандажи и гуми",
          ],
        },
      ],
      packagesSection: {
        eyebrow: "Avto Detailing Brane s.p.",
        titleTop: "Пакети услуги",
        titleBottom: "Без ценовник,\nјасно по пакети.",
        desc: "Избери пакет според состојбата на возилото и посакуваниот резултат.",
        cleaningTitle: "Пакети за чистење",
        polishTitle: "Пакети за полирање",
        vipLabel: "VIP Премиум",
        resultLabel: "Резултат:",
        additionalTitle: "Дополнителни услуги",
        byAgreement: "По договор",
      },
      cleaningPackages: [
        {
          name: "Основно чистење",
          items: [
            "Надворешно перење",
            "Сушење",
            "Бандажи и гуми",
            "Правосмукање ентериер",
            "Бришење прашина",
            "Чистење стакла",
            "Освежување ентериер",
          ],
        },
        {
          name: "Премиум чистење",
          items: [
            "Се од основниот пакет",
            "Темелно чистење бандажи",
            "Рабови на врати",
            "Детално чистење пластики",
            "Нега на пластики",
            "Сјај за гуми",
            "Дезодорација",
          ],
        },
        {
          name: "Комплет детeјлинг",
          items: [
            "Се од премиум пакет",
            "Длабинско чистење седишта",
            "Тешко достапни делови",
            "Деконтаминација лак",
            "Quick wax заштита",
            "Премиум освежување",
          ],
        },
      ],
      polishPackages: [
        {
          name: "Основно полирање",
          items: [
            "Едностепено машинско полирање",
            "Отстранување мали гребнатини",
            "Поголем сјај",
          ],
        },
        {
          name: "Премиум полирање",
          items: [
            "Повеќестепено полирање",
            "Корекција мали и средни гребнатини",
            "Обнова на длабочина на боја",
            "Заштита по полирање",
          ],
        },
        {
          name: "Prestige корекција",
          items: [
            "Професионална повеќестепена корекција",
            "Максимално отстранување гребнатини",
            "Висок сјај",
            "Долготрајна заштита",
          ],
        },
      ],
      vipPackage: {
        name: "VIP Премиум Пакет",
        subtitle: "Комплетна премиум нега на возилото",
        items: [
          "Премиум чистење",
          "Премиум полирање",
          "Детално чистење ентериер",
          "Заштита на лак",
          "Нега на пластики и гуми",
          "Премиум парфемирање",
          "Финален детeјлинг",
        ],
        result: "Возило како ново — целосно чисто, заштитено и сјајно.",
      },
      additionalServices: [
        {
          name: "Чистење моторен простор",
          items: [
            "Безбедно чистење мотор",
            "Отстранување маснотии",
            "Нега на пластични делови",
          ],
        },
        {
          name: "Полирање фарови",
          items: [
            "Отстранување матност",
            "Обнова проѕирност",
            "Заштита по полирање",
          ],
        },
        {
          name: "Дезинфекција ентериер",
          items: ["Дезинфекција површини", "Отстранување бактерии и мириси"],
        },
        {
          name: "Дезинфекција клима",
          items: [
            "Чистење отвори",
            "Отстранување мириси",
            "Антибактериска заштита",
          ],
        },
      ],
      processSection: { eyebrow: "Постапка" },
      processSteps: [
        {
          n: "01",
          t: "Договор на термин",
          d: "Јавете се или пишете за слободен термин.",
        },
        {
          n: "02",
          t: "Преглед на возило",
          d: "Правиме визуелен преглед пред почеток.",
        },
        {
          n: "03",
          t: "Изведба",
          d: "Професионални производи и внимателна работа.",
        },
        { n: "04", t: "Преземање", d: "Го добивате возилото чисто и сјајно." },
      ],
      gallerySection: {
        eyebrow: "Наша работа · Вистински резултати",
        titleTop: "Галерија",
        titleBottom: "Резултатите\nзборуваат сами.",
        desc: "Секоја фотографија е реален резултат.",
        labels: [
          "Надворешно чистење · Mercedes",
          "Ентериер · BMW",
          "Керамика · SUV",
          "Полирање · Mercedes",
        ],
      },
      aboutSection: {
        eyebrow: "Branislav Javorski s.p.",
        titleTop: "За нас",
        titleBottom: "Страст за\nавтомобили.",
        p1: "Јас сум Branislav Javorski, сопственик и единствен детeјлер во Avto Detailing Brane.",
        p2: "Секое возило го работам лично, со целосно внимание и премиум производи.",
        locationLabel: "Локација",
        phoneLabel: "Телефон",
        hoursLabel: "Работно време",
        hoursValue: "По договор",
        googleLabel: "Google оцена",
        productsLabel: "Производи што ги користиме",
      },
      reviewsSection: {
        eyebrow: "Google рецензии · 5.0 ★",
        titleTop: "Рецензии",
        titleBottom: "Реални оценки,\nбез поттик.",
      },
      ctaSection: { top: "Вашиот автомобил чека", bottom: "правилен третман." },
      contactSection: {
        eyebrow: "Avto Detailing Brane · Novo Mesto",
        titleTop: "Контакт",
        titleBottom: "Стапете\nво контакт.",
        addressLabel: "Адреса",
        hoursLabel: "Работно време",
        hoursValue: "По договор — јавете се за термин",
        mapsButton: "Отвори во Google Maps",
        formEyebrow: "Испратете барање",
        formTitle: "Одговараме во рок од 24 часа.",
        nameLabel: "Име и презиме",
        phoneLabel: "Телефон",
        emailLabel: "Е-пошта",
        vehicleLabel: "Возило (марка и модел)",
        serviceLabel: "Услуга",
        servicePlaceholder: "Избери услуга …",
        serviceOptions: [
          "Длабинско чистење надворешност",
          "Длабинско чистење внатрешност",
          "Машинско полирање",
          "Керамичка заштита",
          "VIP пакет",
          "Консултација",
        ],
        messageLabel: "Порака",
        sendButton: "Испрати барање",
        alert: "Благодариме! Пораката е испратена — одговараме во 24 часа.",
      },
      footer: {
        sub: "Branislav Javorski s.p. · Novo Mesto",
        rights: "Сите права се задржани.",
      },
    },
    sr: {
      languageLabel: "Jezik",
      nav: {
        services: "Usluge",
        packages: "Paketi",
        gallery: "Galerija",
        about: "O nama",
        reviews: "Recenzije",
        contact: "Kontakt",
        reserve: "Rezerviši termin",
      },
      hero: {
        badge: "Novo Mesto · Slovenija",
        lead: "Dubinsko čišćenje i nega vozila",
        l1: "Vaš auto",
        l2: "zaslužuje",
        l3: "najbolje.",
        desc: "Branislav Javorski s.p. — profesionalno poliranje, keramička zaštita i čišćenje vozila. Premium rezultati u Novom Mestu.",
        ctaServices: "Pogledaj usluge",
        specialistRole: "Auto Detailing Specijalista",
      },
      pillars: [
        {
          t: "Dubinsko čišćenje",
          d: "Svaki centimetar vozila — spolja i iznutra.",
        },
        {
          t: "Keramička zaštita",
          d: "Profesionalna aplikacija i zaštita 2–5 godina.",
        },
        { t: "Mašinsko poliranje", d: "Korekcija laka i visok sjaj." },
      ],
      servicesSection: {
        eyebrow: "Naše usluge",
        titleTop: "Sve što vaš",
        titleBottom: "auto\ntraži.",
        desc: "Od brzog osveženja do kompletne transformacije vozila.",
      },
      services: [
        {
          n: "01",
          title: "Dubinsko čišćenje eksterijera",
          desc: "Kompletna dekontaminacija i zaštita površine.",
          points: [
            "Predpranje",
            "pH neutralni šampon",
            "Dekontaminacija glinom",
            "Quick detailer",
          ],
        },
        {
          n: "02",
          title: "Dubinsko čišćenje enterijera",
          desc: "Sedišta, tekstil, plastike i teško dostupni delovi.",
          points: [
            "Dubinsko usisavanje",
            "Odmašćivanje plastike",
            "Čišćenje rubova vrata",
            "Ozonski tretman",
          ],
        },
        {
          n: "03",
          title: "Mašinsko poliranje",
          desc: "Korekcija laka i uklanjanje mikroogrebotina.",
          points: [
            "Jednostepeno",
            "Dvostepena korekcija",
            "Višestepena korekcija",
            "4–25 sati",
          ],
        },
        {
          n: "04",
          title: "Keramička zaštita",
          desc: "Profesionalna aplikacija sa hidrofobnim efektom.",
          points: [
            "Priprema i poliranje",
            "Nanošenje keramike",
            "Zaštita plastika",
            "Garancija 2–5 godina",
          ],
        },
        {
          n: "05",
          title: "Kompleksni VIP paket",
          desc: "Čišćenje, poliranje i keramika u jednom paketu.",
          points: [
            "Dubinsko čišćenje unutra + spolja",
            "Mašinsko poliranje",
            "Keramička zaštita",
            "Nega felni i guma",
          ],
        },
      ],
      packagesSection: {
        eyebrow: "Avto Detailing Brane s.p.",
        titleTop: "Paketi usluga",
        titleBottom: "Bez cenovnika,\njasno po paketima.",
        desc: "Izaberite paket prema stanju vozila i željenom rezultatu.",
        cleaningTitle: "Paketi čišćenja",
        polishTitle: "Paketi poliranja",
        vipLabel: "VIP Premium",
        resultLabel: "Rezultat:",
        additionalTitle: "Dodatne usluge",
        byAgreement: "Po dogovoru",
      },
      cleaningPackages: [
        {
          name: "Osnovno čišćenje",
          items: [
            "Spoljašnje pranje",
            "Sušenje vozila",
            "Čišćenje felni i guma",
            "Usisavanje enterijera",
            "Brisanje prašine i plastike",
            "Čišćenje stakala",
            "Osveženje enterijera",
          ],
        },
        {
          name: "Premium čišćenje",
          items: [
            "Sve iz osnovnog paketa",
            "Temeljno čišćenje felni",
            "Čišćenje rubova vrata",
            "Detaljno čišćenje armature i plastika",
            "Nega unutrašnjih plastika",
            "Zaštita guma (sjaj)",
            "Dezodoracija vozila",
          ],
        },
        {
          name: "Komplet detailing",
          items: [
            "Sve iz premium paketa",
            "Dubinsko čišćenje sedišta i tekstila",
            "Čišćenje teško dostupnih delova",
            "Dekontaminacija laka",
            "Zaštita laka (quick wax)",
            "Premium osveženje",
          ],
        },
      ],
      polishPackages: [
        {
          name: "Osnovno poliranje",
          items: [
            "Jednostepeno mašinsko poliranje",
            "Uklanjanje manjih ogrebotina",
            "Povećanje sjaja laka",
          ],
        },
        {
          name: "Premium poliranje",
          items: [
            "Višestepeno poliranje",
            "Korekcija manjih i srednjih ogrebotina",
            "Obnova dubine boje",
            "Zaštita laka nakon poliranja",
          ],
        },
        {
          name: "Prestige korekcija laka",
          items: [
            "Profesionalna višestepena korekcija",
            "Maksimalno uklanjanje ogrebotina",
            "Obnova visokog sjaja",
            "Dugotrajna zaštita laka",
          ],
        },
      ],
      vipPackage: {
        name: "VIP Premium Paket",
        subtitle: "Kompletna premium nega vozila",
        items: [
          "Premium čišćenje",
          "Premium poliranje",
          "Detaljno čišćenje enterijera",
          "Zaštita laka",
          "Nega plastika i guma",
          "Premium parfemiranje",
          "Završni detailing detalja",
        ],
        result: "Vozilo kao novo — potpuno čisto, zaštićeno i sjajno.",
      },
      additionalServices: [
        {
          name: "Čišćenje motornog prostora",
          items: [
            "Bezbedno čišćenje motora",
            "Uklanjanje masnoće i prljavštine",
            "Nega plastičnih delova",
          ],
        },
        {
          name: "Poliranje farova",
          items: [
            "Uklanjanje zamućenja i žutila",
            "Obnova providnosti",
            "Zaštita nakon poliranja",
          ],
        },
        {
          name: "Dezinfekcija enterijera",
          items: [
            "Dezinfekcija svih površina",
            "Uklanjanje bakterija i neprijatnih mirisa",
          ],
        },
        {
          name: "Dezinfekcija ventilacije",
          items: [
            "Čišćenje ventilacionih otvora",
            "Uklanjanje mirisa iz klime",
            "Antibakterijska zaštita",
          ],
        },
      ],
      processSection: { eyebrow: "Proces" },
      processSteps: [
        {
          n: "01",
          t: "Dogovor termina",
          d: "Pozovite ili pišite — biramo termin koji vam odgovara.",
        },
        {
          n: "02",
          t: "Pregled vozila",
          d: "Pre početka radimo pregled stanja.",
        },
        {
          n: "03",
          t: "Izvođenje usluge",
          d: "Radimo sa premium proizvodima i ekološkim pristupom.",
        },
        {
          n: "04",
          t: "Preuzimanje",
          d: "Preuzimate vozilo sa besprekornim sjajem.",
        },
      ],
      gallerySection: {
        eyebrow: "Naš rad · Pravi rezultati",
        titleTop: "Galerija",
        titleBottom: "Rezultati\ngovore sami.",
        desc: "Svaka fotografija je stvaran rezultat, bez filtera.",
        labels: [
          "Spoljašnje čišćenje · Mercedes",
          "Enterijer · BMW",
          "Keramička zaštita · SUV",
          "Poliranje · Mercedes",
        ],
      },
      aboutSection: {
        eyebrow: "Branislav Javorski s.p.",
        titleTop: "O nama",
        titleBottom: "Strast prema\nautomobilima.",
        p1: "Ja sam Branislav Javorski, vlasnik i jedini detailer u Avto Detailing Brane.",
        p2: "Svako vozilo radim lično, od prvog pranja do završnog detalja.",
        locationLabel: "Lokacija",
        phoneLabel: "Telefon",
        hoursLabel: "Radno vreme",
        hoursValue: "Po dogovoru",
        googleLabel: "Google ocena",
        productsLabel: "Proizvodi koje koristimo",
      },
      reviewsSection: {
        eyebrow: "Google ocene · 5.0 ★",
        titleTop: "Recenzije klijenata",
        titleBottom: "Stvarne ocene,\nbez podsticaja.",
      },
      ctaSection: { top: "Vaš auto čeka", bottom: "pravi tretman." },
      contactSection: {
        eyebrow: "Avto Detailing Brane · Novo Mesto",
        titleTop: "Kontakt",
        titleBottom: "Javite se\nbez čekanja.",
        addressLabel: "Adresa",
        hoursLabel: "Radno vreme",
        hoursValue: "Po dogovoru — pozovite za termin",
        mapsButton: "Otvori u Google mapama",
        formEyebrow: "Pošaljite upit",
        formTitle: "Odgovaramo u roku od 24h.",
        nameLabel: "Ime i prezime",
        phoneLabel: "Telefon",
        emailLabel: "E-pošta",
        vehicleLabel: "Vozilo (marka i model)",
        serviceLabel: "Usluga",
        servicePlaceholder: "Izaberite uslugu …",
        serviceOptions: [
          "Dubinsko čišćenje eksterijera",
          "Dubinsko čišćenje enterijera",
          "Mašinsko poliranje",
          "Keramička zaštita",
          "VIP paket",
          "Konsultacija",
        ],
        messageLabel: "Poruka",
        sendButton: "Pošalji upit",
        alert: "Hvala! Poruka je poslata — odgovaramo u roku od 24h.",
      },
      footer: {
        sub: "Branislav Javorski s.p. · Novo Mesto",
        rights: "Sva prava zadržana.",
      },
    },
    hr: {
      languageLabel: "Jezik",
      nav: {
        services: "Usluge",
        packages: "Paketi",
        gallery: "Galerija",
        about: "O nama",
        reviews: "Recenzije",
        contact: "Kontakt",
        reserve: "Rezerviraj termin",
      },
      hero: {
        badge: "Novo Mesto · Slovenija",
        lead: "Dubinsko čišćenje i njega vozila",
        l1: "Vaš auto",
        l2: "zaslužuje",
        l3: "najbolje.",
        desc: "Branislav Javorski s.p. — profesionalno poliranje, keramička zaštita i čišćenje vozila.",
        ctaServices: "Pogledaj usluge",
        specialistRole: "Auto detailing specijalist",
      },
      pillars: [
        {
          t: "Dubinsko čišćenje",
          d: "Svaki centimetar vozila — iznutra i izvana.",
        },
        {
          t: "Keramička zaštita",
          d: "Profesionalna aplikacija i zaštita 2–5 godina.",
        },
        { t: "Strojno poliranje", d: "Korekcija laka i visok sjaj." },
      ],
      servicesSection: {
        eyebrow: "Naše usluge",
        titleTop: "Sve što vaš",
        titleBottom: "auto\ntreba.",
        desc: "Od brzog osvježenja do potpune transformacije vozila.",
      },
      services: [
        {
          n: "01",
          title: "Dubinsko čišćenje eksterijera",
          desc: "Potpuna dekontaminacija i zaštita površine.",
          points: [
            "Predpranje",
            "pH neutralni šampon",
            "Dekontaminacija glinom",
            "Quick detailer",
          ],
        },
        {
          n: "02",
          title: "Dubinsko čišćenje interijera",
          desc: "Sjedala, tekstil, plastike i teško dostupni dijelovi.",
          points: [
            "Dubinsko usisavanje",
            "Odmašćivanje plastike",
            "Čišćenje rubova vrata",
            "Ozonski tretman",
          ],
        },
        {
          n: "03",
          title: "Strojno poliranje",
          desc: "Korekcija laka i uklanjanje mikroogrebotina.",
          points: [
            "Jednostupanjsko",
            "Dvostupanjska korekcija",
            "Višestupanjska korekcija",
            "4–25 sati",
          ],
        },
        {
          n: "04",
          title: "Keramička zaštita",
          desc: "Profesionalna aplikacija s hidrofobnim učinkom.",
          points: [
            "Priprema i poliranje",
            "Nanošenje keramike",
            "Zaštita plastike",
            "Jamstvo 2–5 godina",
          ],
        },
        {
          n: "05",
          title: "Kompleksni VIP paket",
          desc: "Čišćenje, poliranje i keramika u jednom paketu.",
          points: [
            "Dubinsko čišćenje unutra + vani",
            "Strojno poliranje",
            "Keramička zaštita",
            "Njega felgi i guma",
          ],
        },
      ],
      packagesSection: {
        eyebrow: "Avto Detailing Brane s.p.",
        titleTop: "Paketi usluga",
        titleBottom: "Bez cjenika,\njasno po paketima.",
        desc: "Odaberite paket prema stanju vozila i željenom rezultatu.",
        cleaningTitle: "Paketi čišćenja",
        polishTitle: "Paketi poliranja",
        vipLabel: "VIP Premium",
        resultLabel: "Rezultat:",
        additionalTitle: "Dodatne usluge",
        byAgreement: "Po dogovoru",
      },
      cleaningPackages: [
        {
          name: "Osnovno čišćenje",
          items: [
            "Vanjsko pranje vozila",
            "Sušenje vozila",
            "Čišćenje felgi i guma",
            "Usisavanje interijera",
            "Brisanje prašine i plastike",
            "Čišćenje stakala",
            "Osvježenje interijera",
          ],
        },
        {
          name: "Premium čišćenje",
          items: [
            "Sve iz osnovnog paketa",
            "Temeljito čišćenje felgi",
            "Čišćenje rubova vrata",
            "Detaljno čišćenje armature i plastika",
            "Njega unutarnjih plastika",
            "Zaštita guma (sjaj)",
            "Dezodoracija vozila",
          ],
        },
        {
          name: "Komplet detailing",
          items: [
            "Sve iz premium paketa",
            "Dubinsko čišćenje sjedala i tekstila",
            "Čišćenje teško dostupnih dijelova",
            "Dekontaminacija laka",
            "Zaštita laka (quick wax)",
            "Premium osvježenje",
          ],
        },
      ],
      polishPackages: [
        {
          name: "Osnovno poliranje",
          items: [
            "Jednostupanjsko strojno poliranje",
            "Uklanjanje manjih ogrebotina",
            "Povećanje sjaja laka",
          ],
        },
        {
          name: "Premium poliranje",
          items: [
            "Višestupanjsko poliranje",
            "Korekcija manjih i srednjih ogrebotina",
            "Obnova dubine boje",
            "Zaštita laka nakon poliranja",
          ],
        },
        {
          name: "Prestige korekcija laka",
          items: [
            "Profesionalna višestupanjska korekcija",
            "Maksimalno uklanjanje ogrebotina",
            "Obnova visokog sjaja",
            "Dugotrajna zaštita laka",
          ],
        },
      ],
      vipPackage: {
        name: "VIP Premium Paket",
        subtitle: "Kompletna premium njega vozila",
        items: [
          "Premium čišćenje",
          "Premium poliranje",
          "Detaljno čišćenje interijera",
          "Zaštita laka",
          "Njega plastika i guma",
          "Premium parfemiranje",
          "Završni detailing detalja",
        ],
        result: "Vozilo kao novo — potpuno čisto, zaštićeno i sjajno.",
      },
      additionalServices: [
        {
          name: "Čišćenje motornog prostora",
          items: [
            "Sigurno čišćenje motora",
            "Uklanjanje masnoće i prljavštine",
            "Njega plastičnih dijelova",
          ],
        },
        {
          name: "Poliranje farova",
          items: [
            "Uklanjanje zamućenja i žutila",
            "Obnova prozirnosti",
            "Zaštita nakon poliranja",
          ],
        },
        {
          name: "Dezinfekcija interijera",
          items: [
            "Dezinfekcija svih površina",
            "Uklanjanje bakterija i neugodnih mirisa",
          ],
        },
        {
          name: "Dezinfekcija ventilacije",
          items: [
            "Čišćenje ventilacijskih otvora",
            "Uklanjanje mirisa iz klime",
            "Antibakterijska zaštita",
          ],
        },
      ],
      processSection: { eyebrow: "Proces" },
      processSteps: [
        {
          n: "01",
          t: "Dogovor termina",
          d: "Nazovite ili pišite — dogovaramo termin.",
        },
        {
          n: "02",
          t: "Pregled vozila",
          d: "Prije početka radimo procjenu stanja.",
        },
        {
          n: "03",
          t: "Izvođenje usluge",
          d: "Koristimo premium proizvode i precizan pristup.",
        },
        {
          n: "04",
          t: "Preuzimanje",
          d: "Preuzimate vozilo s besprijekornim sjajem.",
        },
      ],
      gallerySection: {
        eyebrow: "Naš rad · Pravi rezultati",
        titleTop: "Galerija",
        titleBottom: "Rezultati\ngovore sami.",
        desc: "Svaka fotografija je stvaran rezultat, bez filtera.",
        labels: [
          "Vanjsko čišćenje · Mercedes",
          "Interijer · BMW",
          "Keramička zaštita · SUV",
          "Poliranje · Mercedes",
        ],
      },
      aboutSection: {
        eyebrow: "Branislav Javorski s.p.",
        titleTop: "O nama",
        titleBottom: "Strast prema\nautomobilima.",
        p1: "Ja sam Branislav Javorski, vlasnik i jedini detailer u Avto Detailing Brane.",
        p2: "Svako vozilo radim osobno, od prvog pranja do završnog detalja.",
        locationLabel: "Lokacija",
        phoneLabel: "Telefon",
        hoursLabel: "Radno vrijeme",
        hoursValue: "Po dogovoru",
        googleLabel: "Google ocjena",
        productsLabel: "Proizvodi koje koristimo",
      },
      reviewsSection: {
        eyebrow: "Google recenzije · 5.0 ★",
        titleTop: "Recenzije klijenata",
        titleBottom: "Stvarne ocjene,\nbez poticaja.",
      },
      ctaSection: { top: "Vaš auto čeka", bottom: "pravi tretman." },
      contactSection: {
        eyebrow: "Avto Detailing Brane · Novo Mesto",
        titleTop: "Kontakt",
        titleBottom: "Javite se\nodmah.",
        addressLabel: "Adresa",
        hoursLabel: "Radno vrijeme",
        hoursValue: "Po dogovoru — nazovite za termin",
        mapsButton: "Otvori u Google kartama",
        formEyebrow: "Pošaljite upit",
        formTitle: "Odgovaramo u roku od 24 sata.",
        nameLabel: "Ime i prezime",
        phoneLabel: "Telefon",
        emailLabel: "E-pošta",
        vehicleLabel: "Vozilo (marka i model)",
        serviceLabel: "Usluga",
        servicePlaceholder: "Odaberite uslugu …",
        serviceOptions: [
          "Dubinsko čišćenje eksterijera",
          "Dubinsko čišćenje interijera",
          "Strojno poliranje",
          "Keramička zaštita",
          "VIP paket",
          "Konzultacija",
        ],
        messageLabel: "Poruka",
        sendButton: "Pošalji upit",
        alert: "Hvala! Poruka je poslana — odgovaramo u roku od 24 sata.",
      },
      footer: {
        sub: "Branislav Javorski s.p. · Novo Mesto",
        rights: "Sva prava pridržana.",
      },
    },
    en: {
      languageLabel: "Language",
      nav: {
        services: "Services",
        packages: "Packages",
        gallery: "Gallery",
        about: "About",
        reviews: "Reviews",
        contact: "Contact",
        reserve: "Book now",
      },
      hero: {
        badge: "Novo Mesto · Slovenia",
        lead: "Deep car cleaning and detailing",
        l1: "Your car",
        l2: "deserves",
        l3: "the best.",
        desc: "Branislav Javorski s.p. — professional polishing, ceramic coating, and detailing. Premium results in Novo Mesto.",
        ctaServices: "View services",
        specialistRole: "Auto Detailing Specialist",
      },
      pillars: [
        { t: "Deep cleaning", d: "Every inch of your car — inside and out." },
        {
          t: "Ceramic coating",
          d: "Professional application with 2–5 year protection.",
        },
        {
          t: "Machine polishing",
          d: "Paint correction and mirror-like gloss.",
        },
      ],
      servicesSection: {
        eyebrow: "Our services",
        titleTop: "Everything your",
        titleBottom: "car\nneeds.",
        desc: "From quick refreshes to full vehicle transformation.",
      },
      services: [
        {
          n: "01",
          title: "Deep exterior cleaning",
          desc: "Full decontamination and surface protection.",
          points: [
            "Pre-wash",
            "pH neutral shampoo",
            "Clay decontamination",
            "Protective quick detailer",
          ],
        },
        {
          n: "02",
          title: "Deep interior cleaning",
          desc: "Seats, textile, plastics, and hard-to-reach areas.",
          points: [
            "Deep vacuuming",
            "Plastic and glass degreasing",
            "Door jamb cleaning",
            "Ozone treatment",
          ],
        },
        {
          n: "03",
          title: "Machine polishing",
          desc: "Paint correction and swirl removal.",
          points: [
            "Single-stage polishing",
            "Two-stage correction",
            "Multi-stage correction",
            "4–25 hours",
          ],
        },
        {
          n: "04",
          title: "Ceramic coating",
          desc: "Professional coating with hydrophobic protection.",
          points: [
            "Polishing preparation",
            "Ceramic application",
            "Plastic and rubber protection",
            "2–5 year warranty",
          ],
        },
        {
          n: "05",
          title: "Complete VIP package",
          desc: "Cleaning, polishing, and ceramic coating in one package.",
          points: [
            "Inside + outside deep cleaning",
            "Machine polishing",
            "Ceramic coating",
            "Wheel and tire care",
          ],
        },
      ],
      packagesSection: {
        eyebrow: "Avto Detailing Brane s.p.",
        titleTop: "Service packages",
        titleBottom: "No price list,\nclear package scope.",
        desc: "Choose a package based on your vehicle condition and desired finish.",
        cleaningTitle: "Cleaning packages",
        polishTitle: "Polishing packages",
        vipLabel: "VIP Premium",
        resultLabel: "Result:",
        additionalTitle: "Additional services",
        byAgreement: "By agreement",
      },
      cleaningPackages: [
        {
          name: "Basic cleaning",
          items: [
            "Exterior wash",
            "Vehicle drying",
            "Wheel and tire cleaning",
            "Interior vacuuming",
            "Dust and plastic wipe",
            "Glass cleaning",
            "Interior refresh",
          ],
        },
        {
          name: "Premium cleaning",
          items: [
            "Everything from Basic",
            "Deep wheel cleaning",
            "Door jamb cleaning",
            "Detailed dashboard and plastic cleaning",
            "Interior plastic care",
            "Tire shine protection",
            "Vehicle deodorization",
          ],
        },
        {
          name: "Complete detailing",
          items: [
            "Everything from Premium",
            "Deep seat and textile cleaning",
            "Hard-to-reach area cleaning",
            "Paint decontamination",
            "Paint protection (quick wax)",
            "Premium interior refresh",
          ],
        },
      ],
      polishPackages: [
        {
          name: "Basic polishing",
          items: [
            "Single-stage machine polishing",
            "Minor scratch removal",
            "Enhanced paint gloss",
          ],
        },
        {
          name: "Premium polishing",
          items: [
            "Multi-stage polishing",
            "Minor and medium scratch correction",
            "Color depth restoration",
            "Post-polish paint protection",
          ],
        },
        {
          name: "Prestige paint correction",
          items: [
            "Professional multi-stage correction",
            "Maximum scratch removal",
            "High-gloss restoration",
            "Long-lasting paint protection",
          ],
        },
      ],
      vipPackage: {
        name: "VIP Premium Package",
        subtitle: "Complete premium vehicle care",
        items: [
          "Premium cleaning",
          "Premium polishing",
          "Detailed interior cleaning",
          "Paint protection",
          "Plastic and tire care",
          "Premium fragrance",
          "Final detail finishing",
        ],
        result: "Car like new — perfectly clean, protected, and glossy.",
      },
      additionalServices: [
        {
          name: "Engine bay cleaning",
          items: [
            "Safe engine cleaning",
            "Grease and dirt removal",
            "Plastic part conditioning",
          ],
        },
        {
          name: "Headlight polishing",
          items: [
            "Haze and yellowing removal",
            "Clarity restoration",
            "Protection after polishing",
          ],
        },
        {
          name: "Interior disinfection",
          items: [
            "Disinfection of all surfaces",
            "Removal of bacteria and bad odors",
          ],
        },
        {
          name: "Ventilation system disinfection",
          items: [
            "Vent cleaning",
            "A/C odor removal",
            "Antibacterial protection",
          ],
        },
      ],
      processSection: { eyebrow: "Process" },
      processSteps: [
        {
          n: "01",
          t: "Booking",
          d: "Call or message us and pick a convenient slot.",
        },
        {
          n: "02",
          t: "Vehicle inspection",
          d: "We inspect paint and interior condition on arrival.",
        },
        {
          n: "03",
          t: "Service execution",
          d: "Eco-conscious approach with premium products.",
        },
        { n: "04", t: "Pickup", d: "You receive a spotless, glossy vehicle." },
      ],
      gallerySection: {
        eyebrow: "Our work · Real results",
        titleTop: "Gallery",
        titleBottom: "Results\nspeak for themselves.",
        desc: "Every photo is a real vehicle and a real result.",
        labels: [
          "Exterior cleaning · Mercedes",
          "Interior · BMW",
          "Ceramic coating · SUV",
          "Polishing · Mercedes",
        ],
      },
      aboutSection: {
        eyebrow: "Branislav Javorski s.p.",
        titleTop: "About us",
        titleBottom: "Passion for\ncars.",
        p1: "I am Branislav Javorski, owner and the only detailer at Avto Detailing Brane in Novo Mesto.",
        p2: "I personally work on every vehicle, from first wash to final coating detail.",
        locationLabel: "Location",
        phoneLabel: "Phone",
        hoursLabel: "Working hours",
        hoursValue: "By appointment",
        googleLabel: "Google rating",
        productsLabel: "Products we use",
      },
      reviewsSection: {
        eyebrow: "Google reviews · 5.0 ★",
        titleTop: "Customer reviews",
        titleBottom: "Real ratings,\nno incentives.",
      },
      ctaSection: {
        top: "Your car is waiting",
        bottom: "for the right treatment.",
      },
      contactSection: {
        eyebrow: "Avto Detailing Brane · Novo Mesto",
        titleTop: "Contact",
        titleBottom: "Get\nin touch.",
        addressLabel: "Address",
        hoursLabel: "Working hours",
        hoursValue: "By appointment — call to book",
        mapsButton: "Open in Google Maps",
        formEyebrow: "Send an inquiry",
        formTitle: "We respond within 24 hours.",
        nameLabel: "Full name",
        phoneLabel: "Phone",
        emailLabel: "Email",
        vehicleLabel: "Vehicle (make and model)",
        serviceLabel: "Service",
        servicePlaceholder: "Select a service …",
        serviceOptions: [
          "Deep exterior cleaning",
          "Deep interior cleaning",
          "Machine polishing",
          "Ceramic coating",
          "VIP package",
          "Consultation",
        ],
        messageLabel: "Message",
        sendButton: "Send inquiry",
        alert:
          "Thank you! Your message has been sent — we reply within 24 hours.",
      },
      footer: {
        sub: "Branislav Javorski s.p. · Novo Mesto",
        rights: "All rights reserved.",
      },
    },
    it: {
      languageLabel: "Lingua",
      nav: {
        services: "Servizi",
        packages: "Pacchetti",
        gallery: "Galleria",
        about: "Chi siamo",
        reviews: "Recensioni",
        contact: "Contatto",
        reserve: "Prenota",
      },
      hero: {
        badge: "Novo Mesto · Slovenia",
        lead: "Pulizia profonda e cura auto",
        l1: "La tua auto",
        l2: "merita",
        l3: "il meglio.",
        desc: "Branislav Javorski s.p. — lucidatura professionale, trattamento ceramico e detailing. Risultati premium a Novo Mesto.",
        ctaServices: "Vedi servizi",
        specialistRole: "Specialista Auto Detailing",
      },
      pillars: [
        {
          t: "Pulizia profonda",
          d: "Ogni centimetro dell'auto, dentro e fuori.",
        },
        {
          t: "Trattamento ceramico",
          d: "Applicazione professionale con protezione 2–5 anni.",
        },
        {
          t: "Lucidatura meccanica",
          d: "Correzione vernice e brillantezza elevata.",
        },
      ],
      servicesSection: {
        eyebrow: "I nostri servizi",
        titleTop: "Tutto ciò di cui",
        titleBottom: "la tua auto\nha bisogno.",
        desc: "Dal refresh veloce alla trasformazione completa del veicolo.",
      },
      services: [
        {
          n: "01",
          title: "Pulizia profonda esterni",
          desc: "Decontaminazione completa e protezione superficie.",
          points: [
            "Prelavaggio",
            "Shampoo pH neutro",
            "Decontaminazione con clay",
            "Quick detailer protettivo",
          ],
        },
        {
          n: "02",
          title: "Pulizia profonda interni",
          desc: "Sedili, tessuti, plastiche e aree difficili.",
          points: [
            "Aspirazione profonda",
            "Sgrassatura plastiche e vetri",
            "Pulizia battute porte",
            "Trattamento ozono",
          ],
        },
        {
          n: "03",
          title: "Lucidatura meccanica",
          desc: "Correzione vernice e rimozione micrograffi.",
          points: [
            "Monostadio",
            "Correzione a due stadi",
            "Correzione multistadio",
            "4–25 ore",
          ],
        },
        {
          n: "04",
          title: "Trattamento ceramico",
          desc: "Applicazione professionale con effetto idrofobico.",
          points: [
            "Preparazione e lucidatura",
            "Applicazione ceramica",
            "Protezione plastiche",
            "Garanzia 2–5 anni",
          ],
        },
        {
          n: "05",
          title: "Pacchetto VIP completo",
          desc: "Pulizia, lucidatura e ceramica in un unico pacchetto.",
          points: [
            "Pulizia profonda interna + esterna",
            "Lucidatura meccanica",
            "Trattamento ceramico",
            "Cura cerchi e pneumatici",
          ],
        },
      ],
      packagesSection: {
        eyebrow: "Avto Detailing Brane s.p.",
        titleTop: "Pacchetti servizi",
        titleBottom: "Senza listino prezzi,\nchiaro per pacchetto.",
        desc: "Scegli il pacchetto in base allo stato del veicolo e al risultato desiderato.",
        cleaningTitle: "Pacchetti pulizia",
        polishTitle: "Pacchetti lucidatura",
        vipLabel: "VIP Premium",
        resultLabel: "Risultato:",
        additionalTitle: "Servizi aggiuntivi",
        byAgreement: "Su accordo",
      },
      cleaningPackages: [
        {
          name: "Pulizia base",
          items: [
            "Lavaggio esterno",
            "Asciugatura",
            "Pulizia cerchi e pneumatici",
            "Aspirazione interni",
            "Rimozione polvere",
            "Pulizia vetri",
            "Rinfresco interni",
          ],
        },
        {
          name: "Pulizia premium",
          items: [
            "Tutto dal pacchetto base",
            "Pulizia profonda cerchi",
            "Pulizia battute porte",
            "Pulizia dettagliata cruscotto e plastiche",
            "Cura plastiche interne",
            "Protezione pneumatici effetto lucido",
            "Deodorizzazione",
          ],
        },
        {
          name: "Detailing completo",
          items: [
            "Tutto dal pacchetto premium",
            "Pulizia profonda sedili e tessuti",
            "Pulizia zone difficili",
            "Decontaminazione vernice",
            "Protezione vernice (quick wax)",
            "Rinfresco premium",
          ],
        },
      ],
      polishPackages: [
        {
          name: "Lucidatura base",
          items: [
            "Lucidatura meccanica monostadio",
            "Rimozione piccoli graffi",
            "Aumento brillantezza vernice",
          ],
        },
        {
          name: "Lucidatura premium",
          items: [
            "Lucidatura multistadio",
            "Correzione graffi piccoli e medi",
            "Ripristino profondità colore",
            "Protezione post-lucidatura",
          ],
        },
        {
          name: "Correzione Prestige",
          items: [
            "Correzione professionale multistadio",
            "Massima rimozione graffi",
            "Ripristino alta brillantezza",
            "Protezione duratura",
          ],
        },
      ],
      vipPackage: {
        name: "Pacchetto VIP Premium",
        subtitle: "Cura premium completa del veicolo",
        items: [
          "Pulizia premium",
          "Lucidatura premium",
          "Pulizia dettagliata interni",
          "Protezione vernice",
          "Cura plastiche e pneumatici",
          "Profumazione premium",
          "Detailing finale",
        ],
        result: "Auto come nuova — perfettamente pulita, protetta e brillante.",
      },
      additionalServices: [
        {
          name: "Pulizia vano motore",
          items: [
            "Pulizia motore sicura",
            "Rimozione grasso e sporco",
            "Cura parti plastiche",
          ],
        },
        {
          name: "Lucidatura fari",
          items: [
            "Rimozione opacità e ingiallimento",
            "Ripristino trasparenza",
            "Protezione post lucidatura",
          ],
        },
        {
          name: "Disinfezione interni",
          items: [
            "Disinfezione di tutte le superfici",
            "Rimozione batteri e cattivi odori",
          ],
        },
        {
          name: "Disinfezione ventilazione",
          items: [
            "Pulizia bocchette",
            "Rimozione odori da clima",
            "Protezione antibatterica",
          ],
        },
      ],
      processSection: { eyebrow: "Processo" },
      processSteps: [
        {
          n: "01",
          t: "Prenotazione",
          d: "Chiama o scrivi per fissare il tuo appuntamento.",
        },
        {
          n: "02",
          t: "Ispezione veicolo",
          d: "Controlliamo vernice e interni all'arrivo.",
        },
        {
          n: "03",
          t: "Esecuzione servizio",
          d: "Approccio professionale con prodotti premium.",
        },
        {
          n: "04",
          t: "Ritiro",
          d: "Ritiri il veicolo con finitura impeccabile.",
        },
      ],
      gallerySection: {
        eyebrow: "Il nostro lavoro · Risultati reali",
        titleTop: "Galleria",
        titleBottom: "I risultati\nparlano da soli.",
        desc: "Ogni foto mostra un risultato reale.",
        labels: [
          "Pulizia esterna · Mercedes",
          "Interni · BMW",
          "Ceramica · SUV",
          "Lucidatura · Mercedes",
        ],
      },
      aboutSection: {
        eyebrow: "Branislav Javorski s.p.",
        titleTop: "Chi siamo",
        titleBottom: "Passione per\nle auto.",
        p1: "Sono Branislav Javorski, titolare e unico detailer di Avto Detailing Brane.",
        p2: "Lavoro personalmente su ogni auto, dal primo lavaggio all'ultimo dettaglio.",
        locationLabel: "Posizione",
        phoneLabel: "Telefono",
        hoursLabel: "Orario",
        hoursValue: "Su appuntamento",
        googleLabel: "Valutazione Google",
        productsLabel: "Prodotti che utilizziamo",
      },
      reviewsSection: {
        eyebrow: "Recensioni Google · 5.0 ★",
        titleTop: "Recensioni clienti",
        titleBottom: "Recensioni reali,\nsenza incentivi.",
      },
      ctaSection: {
        top: "La tua auto aspetta",
        bottom: "il trattamento giusto.",
      },
      contactSection: {
        eyebrow: "Avto Detailing Brane · Novo Mesto",
        titleTop: "Contatto",
        titleBottom: "Mettiti\nin contatto.",
        addressLabel: "Indirizzo",
        hoursLabel: "Orario",
        hoursValue: "Su appuntamento — chiama per prenotare",
        mapsButton: "Apri in Google Maps",
        formEyebrow: "Invia richiesta",
        formTitle: "Rispondiamo entro 24 ore.",
        nameLabel: "Nome e cognome",
        phoneLabel: "Telefono",
        emailLabel: "Email",
        vehicleLabel: "Veicolo (marca e modello)",
        serviceLabel: "Servizio",
        servicePlaceholder: "Seleziona un servizio …",
        serviceOptions: [
          "Pulizia profonda esterni",
          "Pulizia profonda interni",
          "Lucidatura meccanica",
          "Trattamento ceramico",
          "Pacchetto VIP",
          "Consulenza",
        ],
        messageLabel: "Messaggio",
        sendButton: "Invia richiesta",
        alert:
          "Grazie! Il messaggio è stato inviato — rispondiamo entro 24 ore.",
      },
      footer: {
        sub: "Branislav Javorski s.p. · Novo Mesto",
        rights: "Tutti i diritti riservati.",
      },
    },
  } as const;

  const galleryImages = [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
  ];

  const languageStorageKey = "adb-lang";
  const [lang, setLang] = useState<Lang>("sl");
  const t = i18n[lang];

  const services = t.services;
  const processSteps = t.processSteps;
  const cleaningPackages = t.cleaningPackages;
  const polishPackages = t.polishPackages;
  const vipPackage = t.vipPackage;
  const additionalServices = t.additionalServices;
  const pillars = t.pillars;

  const gallery = galleryImages.map((src, i) => ({
    src,
    label: t.gallerySection.labels[i],
  }));

  const servicesTitleBottom = t.servicesSection.titleBottom.split("\n");
  const packagesTitleBottom = t.packagesSection.titleBottom.split("\n");
  const galleryTitleBottom = t.gallerySection.titleBottom.split("\n");
  const aboutTitleBottom = t.aboutSection.titleBottom.split("\n");
  const reviewsTitleBottom = t.reviewsSection.titleBottom.split("\n");
  const contactTitleBottom = t.contactSection.titleBottom.split("\n");

  const [isPreloading, setIsPreloading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [processProgress, setProcessProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [disableParallax, setDisableParallax] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(
    null,
  );
  const processSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const savedLang = window.localStorage.getItem(languageStorageKey);

    if (
      savedLang &&
      languageOptions.some((option) => option.code === savedLang)
    ) {
      setLang(savedLang as Lang);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, lang);
  }, [lang]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsPreloading(false);
    }, 1200);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY || 0);

        const processSection = processSectionRef.current;
        if (processSection) {
          const rect = processSection.getBoundingClientRect();
          const viewportHeight = window.innerHeight || 1;
          const start = viewportHeight * 0.88;
          // Finish progress earlier so the last step reaches full state in view.
          const end = -rect.height * 0.2;
          const rawProgress = (start - rect.top) / (start - end);
          const clampedProgress = Math.min(1, Math.max(0, rawProgress));

          setProcessProgress((prev) => {
            if (Math.abs(prev - clampedProgress) < 0.005) return prev;
            return clampedProgress;
          });
        }

        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    applyPreference();
    mediaQuery.addEventListener("change", applyPreference);

    return () => {
      mediaQuery.removeEventListener("change", applyPreference);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const applyBreakpoint = () => {
      setDisableParallax(mediaQuery.matches);
    };

    applyBreakpoint();
    mediaQuery.addEventListener("change", applyBreakpoint);

    return () => {
      mediaQuery.removeEventListener("change", applyBreakpoint);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (mediaQuery.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    closeOnDesktop();
    mediaQuery.addEventListener("change", closeOnDesktop);

    return () => {
      mediaQuery.removeEventListener("change", closeOnDesktop);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (activeGalleryIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveGalleryIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveGalleryIndex((prev) => {
          if (prev === null) return prev;
          return (prev + 1) % gallery.length;
        });
      } else if (event.key === "ArrowLeft") {
        setActiveGalleryIndex((prev) => {
          if (prev === null) return prev;
          return (prev - 1 + gallery.length) % gallery.length;
        });
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeGalleryIndex, gallery.length]);

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -7% 0px",
      },
    );

    for (const element of revealElements) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const heroParallax = disableParallax ? 0 : Math.min(scrollY * 0.16, 130);
  const orbParallaxA = disableParallax ? 0 : Math.min(scrollY * 0.1, 180);
  const orbParallaxB = disableParallax ? 0 : Math.min(scrollY * 0.06, 140);
  const servicesParallax = disableParallax
    ? 0
    : Math.min(Math.max((scrollY - 260) * 0.04, 0), 56);
  const packagesParallax = disableParallax
    ? 0
    : Math.min(Math.max((scrollY - 760) * -0.032, -52), 0);
  const galleryParallax = disableParallax
    ? 0
    : Math.min(Math.max((scrollY - 1380) * 0.035, 0), 64);
  const contactParallax = disableParallax
    ? 0
    : Math.min(Math.max((scrollY - 2300) * -0.03, -44), 0);

  const goToNextGallery = () => {
    setActiveGalleryIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % gallery.length;
    });
  };

  const goToPrevGallery = () => {
    setActiveGalleryIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + gallery.length) % gallery.length;
    });
  };

  return (
    <>
      <div
        className={`preloader ${isPreloading ? "is-visible" : "is-hidden"}`}
        aria-hidden={!isPreloading}
      >
        <div className="preloader-mark" />
        <p className="preloader-title">AVTO DETAILING BRANE</p>
        <p className="preloader-sub">Premium finish in motion</p>
      </div>

      <div className="parallax-orbs" aria-hidden="true">
        <span
          className="parallax-orb orb-a"
          style={{ transform: `translate3d(0, ${orbParallaxA}px, 0)` }}
        />
        <span
          className="parallax-orb orb-b"
          style={{ transform: `translate3d(0, ${orbParallaxB}px, 0)` }}
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-[90] backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-5 flex items-center justify-between gap-2 sm:gap-4">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="display text-cream text-sm sm:text-base lg:text-lg tracking-[0.04em]">
              AVTO DETAILING BRANE
            </span>
            <span className="hidden sm:inline text-muted-foreground text-xs tracking-[0.2em]">
              S.P.
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-8 text-xs tracking-[0.18em] uppercase">
            <a href="#storitve" className="hover:text-gold transition">
              {t.nav.services}
            </a>
            <a href="#paketi" className="hover:text-gold transition">
              {t.nav.packages}
            </a>
            <a href="#galerija" className="hover:text-gold transition">
              {t.nav.gallery}
            </a>
            <a href="#o-nas" className="hover:text-gold transition">
              {t.nav.about}
            </a>
            <a href="#mnenja" className="hover:text-gold transition">
              {t.nav.reviews}
            </a>
            <a href="#kontakt" className="hover:text-gold transition">
              {t.nav.contact}
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden lg:block">
              <label htmlFor="lang" className="sr-only">
                {t.languageLabel}
              </label>
              <select
                id="lang"
                name="lang"
                value={lang}
                onChange={(e) => setLang(e.target.value as Lang)}
                className="bg-background/80 border border-input pl-3 pr-7 py-[0.6rem] text-[0.68rem] tracking-[0.14em] text-cream uppercase focus:outline-none focus:border-gold"
                aria-label={t.languageLabel}
              >
                {languageOptions.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <a
              href="#kontakt"
              className="hidden lg:inline-block btn-gold !py-[0.6rem] !px-4 text-[0.68rem]"
            >
              {t.nav.reserve}
            </a>
            <button
              type="button"
              className="lg:hidden hamburger-button"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span
                className={`hamburger-line ${isMobileMenuOpen ? "is-open" : ""}`}
              />
              <span
                className={`hamburger-line ${isMobileMenuOpen ? "is-open" : ""}`}
              />
              <span
                className={`hamburger-line ${isMobileMenuOpen ? "is-open" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`lg:hidden mobile-menu-shell ${isMobileMenuOpen ? "is-open" : ""}`}
      >
        <button
          type="button"
          className="mobile-menu-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close navigation menu"
        />
        <div
          className="mobile-menu-panel"
          onClickCapture={(event) => {
            if ((event.target as HTMLElement).closest("a")) {
              setIsMobileMenuOpen(false);
            }
          }}
        >
          <div className="grid gap-3 text-xs tracking-[0.18em] uppercase">
            <a href="#storitve" className="mobile-menu-link">
              {t.nav.services}
            </a>
            <a href="#paketi" className="mobile-menu-link">
              {t.nav.packages}
            </a>
            <a href="#galerija" className="mobile-menu-link">
              {t.nav.gallery}
            </a>
            <a href="#o-nas" className="mobile-menu-link">
              {t.nav.about}
            </a>
            <a href="#mnenja" className="mobile-menu-link">
              {t.nav.reviews}
            </a>
            <a href="#kontakt" className="mobile-menu-link">
              {t.nav.contact}
            </a>
          </div>

          <a href="#kontakt" className="btn-gold mt-5 w-full text-center">
            {t.nav.reserve}
          </a>

          <div className="mt-auto pt-6 border-t border-border">
            <label htmlFor="lang-mobile" className="eyebrow block mb-2">
              {t.languageLabel}
            </label>
            <select
              id="lang-mobile"
              name="lang-mobile"
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="mobile-menu-language w-full bg-background/80 border border-input px-3 py-3 text-xs tracking-[0.12em] text-cream uppercase focus:outline-none focus:border-gold"
              aria-label={t.languageLabel}
            >
              {languageOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <section
        id="top"
        className="relative min-h-[92svh] sm:min-h-screen flex items-end overflow-hidden"
      >
        <Image
          src="/hero-car.jpg"
          alt="Premium detailing — vozilo v Novem mestu"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: `translate3d(0, ${-heroParallax}px, 0) scale(1.08)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />

        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 lg:pb-24 pt-28 sm:pt-32 grid lg:grid-cols-12 gap-8 sm:gap-10 items-end">
          <div className="lg:col-span-8 reveal reveal-1">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="hairline" />
              <span className="eyebrow">{t.hero.badge}</span>
            </div>
            <h1 className="text-cream">
              <span className="serif-italic block text-2xl sm:text-3xl md:text-5xl text-cream/80 mb-2 sm:mb-3">
                {t.hero.lead}
              </span>
              <span className="display block text-[2.35rem] sm:text-[3.2rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.9]">
                {t.hero.l1}
                <br />
                {t.hero.l2}
                <br />
                <span className="text-gold">{t.hero.l3}</span>
              </span>
            </h1>
            <p className="mt-6 sm:mt-8 max-w-lg text-muted-foreground text-sm sm:text-base leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#kontakt"
                className="btn-gold w-full sm:w-auto text-center"
              >
                {t.nav.reserve}
              </a>
              <a
                href="#storitve"
                className="btn-ghost w-full sm:w-auto text-center"
              >
                {t.hero.ctaServices}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block reveal reveal-2">
            <div className="relative aspect-[4/5] overflow-hidden border border-gold/30">
              <Image
                src="/portrait.jpg"
                alt="Branislav Javorski pri delu"
                fill
                className="w-full h-full object-cover"
                style={{
                  transform: `translate3d(0, ${heroParallax * 0.32}px, 0) scale(1.02)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="display text-cream text-xl">Branislav Javorski</p>
                <p className="eyebrow mt-1">{t.hero.specialistRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-3">
          {pillars.map((it, i) => (
            <div
              key={it.t}
              className={`reveal py-12 lg:py-16 lg:px-10 ${i > 0 ? "md:border-l border-border" : ""}`}
              style={{ animationDelay: `${120 + i * 90}ms` }}
            >
              <div className="serif-italic text-gold text-3xl mb-4">
                0{i + 1}
              </div>
              <h3 className="display text-cream text-2xl mb-3">{it.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {it.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="storitve" className="py-20 sm:py-24 lg:py-36">
        <div
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 parallax-layer"
          style={{ transform: `translate3d(0, ${servicesParallax}px, 0)` }}
        >
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="hairline" />
                <span className="eyebrow">{t.servicesSection.eyebrow}</span>
              </div>
              <h2>
                <span className="serif-italic text-cream/70 text-3xl md:text-4xl block mb-2">
                  {t.servicesSection.titleTop}
                </span>
                <span className="display text-cream text-5xl md:text-6xl">
                  {servicesTitleBottom[0]}
                  <br />
                  {servicesTitleBottom[1]}
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-muted-foreground text-base leading-relaxed">
                {t.servicesSection.desc}
              </p>
            </div>
          </div>

          <div className="border-t border-border">
            {services.map((s) => (
              <div
                key={s.n}
                className="reveal service-interactive grid md:grid-cols-12 gap-6 py-10 border-b border-border group transition px-2 md:px-0"
                style={{ animationDelay: `${80 + Number(s.n) * 70}ms` }}
              >
                <div className="md:col-span-1 serif-italic text-gold text-2xl">
                  {s.n}
                </div>
                <div className="md:col-span-4">
                  <h3 className="display text-cream text-2xl md:text-3xl group-hover:text-gold transition">
                    {s.title}
                  </h3>
                </div>
                <div className="md:col-span-4 text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </div>
                <div className="md:col-span-3">
                  <ul className="space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="text-cream/80 text-xs flex gap-2">
                        <span className="text-gold">·</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="paketi"
        className="py-20 sm:py-24 lg:py-36 border-y border-border bg-card/20"
      >
        <div
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 parallax-layer"
          style={{ transform: `translate3d(0, ${packagesParallax}px, 0)` }}
        >
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="hairline" />
                <span className="eyebrow">{t.packagesSection.eyebrow}</span>
              </div>
              <h2>
                <span className="serif-italic text-cream/70 text-3xl md:text-4xl block mb-2">
                  {t.packagesSection.titleTop}
                </span>
                <span className="display text-cream text-5xl md:text-6xl">
                  {packagesTitleBottom[0]}
                  <br />
                  {packagesTitleBottom[1]}
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-muted-foreground text-base leading-relaxed">
                {t.packagesSection.desc}
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="hairline" />
              <span className="eyebrow">{t.packagesSection.cleaningTitle}</span>
            </div>
            <div className="grid lg:grid-cols-3 gap-4">
              {cleaningPackages.map((pkg, idx) => (
                <article
                  key={pkg.name}
                  className="reveal border border-border bg-background/70 p-6 lg:p-7"
                  style={{
                    animationDelay: `${140 + idx * 100}ms`,
                  }}
                >
                  <h3 className="display text-cream text-2xl mb-5">
                    {pkg.name}
                  </h3>
                  <ul className="space-y-3">
                    {pkg.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-cream/85 flex gap-3 leading-relaxed"
                      >
                        <span className="text-gold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="hairline" />
              <span className="eyebrow">{t.packagesSection.polishTitle}</span>
            </div>
            <div className="grid lg:grid-cols-3 gap-4">
              {polishPackages.map((pkg, idx) => (
                <article
                  key={pkg.name}
                  className="reveal border border-border bg-background/70 p-6 lg:p-7"
                  style={{
                    animationDelay: `${160 + idx * 100}ms`,
                  }}
                >
                  <h3 className="display text-cream text-2xl mb-5">
                    {pkg.name}
                  </h3>
                  <ul className="space-y-3">
                    {pkg.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-cream/85 flex gap-3 leading-relaxed"
                      >
                        <span className="text-gold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-4 mb-20">
            <article className="lg:col-span-8 border border-gold/35 bg-background/80 p-7 lg:p-10">
              <p className="eyebrow mb-3">{t.packagesSection.vipLabel}</p>
              <h3 className="display text-cream text-3xl mb-2">
                {vipPackage.name}
              </h3>
              <p className="text-muted-foreground mb-6">
                {vipPackage.subtitle}
              </p>
              <ul className="grid md:grid-cols-2 gap-y-3 gap-x-6">
                {vipPackage.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-cream/90 flex gap-3 leading-relaxed"
                  >
                    <span className="text-gold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 pt-6 border-t border-border text-cream">
                <span className="text-gold">
                  {t.packagesSection.resultLabel}
                </span>{" "}
                {vipPackage.result}
              </p>
            </article>

            <article className="lg:col-span-4 border border-border bg-background/70 p-7 lg:p-8">
              <p className="eyebrow mb-3">
                {t.packagesSection.additionalTitle}
              </p>
              <h3 className="display text-cream text-2xl mb-6">
                {t.packagesSection.byAgreement}
              </h3>
              <div className="space-y-6">
                {additionalServices.map((service) => (
                  <div
                    key={service.name}
                    className="border-t border-border pt-4 first:border-t-0 first:pt-0"
                  >
                    <p className="text-cream font-medium mb-3">
                      {service.name}
                    </p>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="text-xs text-cream/80 flex gap-3 leading-relaxed"
                        >
                          <span className="text-gold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        ref={processSectionRef}
        className="py-24 sm:py-28 lg:py-32 border-y border-border bg-card/30"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <span className="hairline" />
            <span className="eyebrow">{t.processSection.eyebrow}</span>
          </div>
          <div className="process-progress hidden md:block" aria-hidden="true">
            <span
              className="process-progress-fill"
              style={{ transform: `scaleX(${0.08 + processProgress * 0.92})` }}
            />
          </div>

          <div className="md:hidden grid gap-4 sm:gap-5 mt-2">
            <div
              className="absolute left-8 top-[6.4rem] bottom-8 w-px bg-border/70"
              aria-hidden="true"
            />
            <div className="space-y-4 sm:space-y-5 relative">
              {processSteps.map((s, i) => {
                const stepProgress = Math.max(
                  0,
                  Math.min(1, (processProgress - i * 0.2) / 0.33),
                );
                const translateY = 18 - stepProgress * 18;
                const scale = 0.98 + stepProgress * 0.02;
                const opacity = 0.72 + stepProgress * 0.28;

                return (
                  <div
                    key={s.n}
                    className={`process-step-card bg-background/95 border border-border p-6 sm:p-7 rounded-sm relative pl-14 ${stepProgress > 0.95 ? "is-active" : ""}`}
                    style={
                      prefersReducedMotion || disableParallax
                        ? undefined
                        : {
                            transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                            opacity,
                            filter: `blur(${(1 - stepProgress) * 0.5}px)`,
                          }
                    }
                  >
                    <span
                      className="absolute left-6 top-8 h-3 w-3 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    <div className="serif-italic text-gold text-3xl mb-3">
                      {s.n}
                    </div>
                    <h4 className="display text-cream text-xl mb-3">{s.t}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {s.d}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {processSteps.map((s, i) => {
              const stepProgress = Math.max(
                0,
                Math.min(1, (processProgress - i * 0.2) / 0.33),
              );
              const translateY = 40 - stepProgress * 40;
              const scale = 0.96 + stepProgress * 0.04;
              const opacity = 0.62 + stepProgress * 0.38;

              return (
                <div
                  key={s.n}
                  className={`process-step-card bg-background p-8 lg:p-10 ${stepProgress > 0.95 ? "is-active" : ""}`}
                  style={
                    prefersReducedMotion || disableParallax
                      ? undefined
                      : {
                          transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                          opacity,
                          filter: `blur(${(1 - stepProgress) * 1.6}px)`,
                        }
                  }
                >
                  <div className="serif-italic text-gold text-3xl mb-6">
                    {s.n}
                  </div>
                  <h4 className="display text-cream text-xl mb-3">{s.t}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {s.d}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="galerija" className="py-20 sm:py-24 lg:py-36">
        <div
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 parallax-layer"
          style={{ transform: `translate3d(0, ${galleryParallax}px, 0)` }}
        >
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="hairline" />
                <span className="eyebrow">{t.gallerySection.eyebrow}</span>
              </div>
              <h2>
                <span className="serif-italic text-cream/70 text-3xl md:text-4xl block mb-2">
                  {t.gallerySection.titleTop}
                </span>
                <span className="display text-cream text-5xl md:text-6xl">
                  {galleryTitleBottom[0]}
                  <br />
                  {galleryTitleBottom[1]}
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-muted-foreground text-base leading-relaxed">
                {t.gallerySection.desc}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {gallery.map((g, i) => (
              <figure
                key={g.label}
                className={`relative overflow-hidden group gallery-tile ${i === 0 ? "lg:col-span-2 lg:row-span-2 aspect-square" : "aspect-[4/3]"}`}
              >
                <Image
                  src={g.src}
                  alt={g.label}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-80" />
                <button
                  type="button"
                  className="gallery-open-button"
                  onClick={() => setActiveGalleryIndex(i)}
                  aria-label={`Open image ${i + 1} in fullscreen`}
                />
                <figcaption className="absolute bottom-4 left-4 right-4 eyebrow text-cream/90">
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {activeGalleryIndex !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen gallery"
        >
          <button
            type="button"
            className="gallery-lightbox-backdrop"
            onClick={() => setActiveGalleryIndex(null)}
            aria-label="Close fullscreen gallery"
          />
          <div className="gallery-lightbox-panel" role="document">
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={() => setActiveGalleryIndex(null)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <line
                  x1="1"
                  y1="1"
                  x2="13"
                  y2="13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="13"
                  y1="1"
                  x2="1"
                  y2="13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className="gallery-lightbox-nav left"
              onClick={goToPrevGallery}
              aria-label="Previous image"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="gallery-lightbox-media">
              <Image
                key={gallery[activeGalleryIndex].src}
                src={gallery[activeGalleryIndex].src}
                alt={gallery[activeGalleryIndex].label}
                fill
                className="gallery-lightbox-image"
              />
            </div>

            <button
              type="button"
              className="gallery-lightbox-nav right"
              onClick={goToNextGallery}
              aria-label="Next image"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <p className="gallery-lightbox-caption">
              {gallery[activeGalleryIndex].label}
            </p>
          </div>
        </div>
      )}

      <section
        id="o-nas"
        className="py-20 sm:py-24 lg:py-36 border-y border-border"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden border border-gold/20">
              <Image
                src="/detail-polish.jpg"
                alt="Branislav Javorski pri delu"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">{t.aboutSection.eyebrow}</span>
            </div>
            <h2 className="mb-8">
              <span className="serif-italic text-cream/70 text-3xl md:text-4xl block mb-2">
                {t.aboutSection.titleTop}
              </span>
              <span className="display text-cream text-5xl md:text-6xl">
                {aboutTitleBottom[0]}
                <br />
                {aboutTitleBottom[1]}
              </span>
            </h2>
            <div className="space-y-5 text-muted-foreground text-base leading-relaxed max-w-2xl">
              <p>{t.aboutSection.p1}</p>
              <p>{t.aboutSection.p2}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-12 pt-10 border-t border-border">
              <div>
                <p className="eyebrow mb-2">{t.aboutSection.locationLabel}</p>
                <p className="text-cream">
                  Ul. Slavka Gruma 42
                  <br />
                  8000 Novo Mesto
                </p>
              </div>
              <div>
                <p className="eyebrow mb-2">{t.aboutSection.phoneLabel}</p>
                <a
                  href="tel:031014910"
                  className="text-cream hover:text-gold transition"
                >
                  031 014 910
                </a>
              </div>
              <div>
                <p className="eyebrow mb-2">{t.aboutSection.hoursLabel}</p>
                <p className="text-cream">{t.aboutSection.hoursValue}</p>
              </div>
              <div>
                <p className="eyebrow mb-2">{t.aboutSection.googleLabel}</p>
                <p className="text-gold">★★★★★ 5.0</p>
              </div>
            </div>

            <div className="mt-12">
              <p className="eyebrow mb-4">{t.aboutSection.productsLabel}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 display text-cream text-xl">
                <span>Koch Chemie</span>
                <span className="text-gold">·</span>
                <span>Gyeon</span>
                <span className="text-gold">·</span>
                <span>Meguiar's</span>
                <span className="text-gold">·</span>
                <span>Sonax</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mnenja" className="py-20 sm:py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">{t.reviewsSection.eyebrow}</span>
          </div>
          <h2 className="mb-16">
            <span className="serif-italic text-cream/70 text-3xl md:text-4xl block mb-2">
              {t.reviewsSection.titleTop}
            </span>
            <span className="display text-cream text-5xl md:text-6xl">
              {reviewsTitleBottom[0]}
              <br />
              {reviewsTitleBottom[1]}
            </span>
          </h2>

          <Testimonials />
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-32 border-y border-border bg-card/40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="serif-italic text-cream/70 text-3xl md:text-4xl mb-2">
            {t.ctaSection.top}
          </p>
          <h2 className="display text-cream text-5xl md:text-7xl mb-10">
            {t.ctaSection.bottom}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="#kontakt"
              className="btn-gold w-full sm:w-auto text-center"
            >
              {t.nav.reserve}
            </a>
            <a
              href="tel:031014910"
              className="btn-ghost w-full sm:w-auto text-center"
            >
              031 014 910
            </a>
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-20 sm:py-24 lg:py-36">
        <div
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 parallax-layer"
          style={{ transform: `translate3d(0, ${contactParallax}px, 0)` }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">{t.contactSection.eyebrow}</span>
          </div>
          <h2 className="mb-16">
            <span className="serif-italic text-cream/70 text-3xl md:text-4xl block mb-2">
              {t.contactSection.titleTop}
            </span>
            <span className="display text-cream text-5xl md:text-6xl">
              {contactTitleBottom[0]}
              <br />
              {contactTitleBottom[1]}
            </span>
          </h2>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="eyebrow mb-2">{t.contactSection.addressLabel}</p>
                <p className="text-cream text-lg">
                  Ulica Slavka Gruma 42
                  <br />
                  8000 Novo Mesto, Slovenija
                </p>
              </div>
              <div>
                <p className="eyebrow mb-2">{t.contactSection.phoneLabel}</p>
                <a
                  href="tel:+38631014910"
                  className="display text-gold text-2xl sm:text-3xl hover:opacity-80 transition break-all"
                >
                  +386 31 014 910
                </a>
              </div>
              <div>
                <p className="eyebrow mb-2">{t.contactSection.hoursLabel}</p>
                <p className="text-cream text-lg">
                  {t.contactSection.hoursValue}
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="https://maps.google.com/?q=Ulica+Slavka+Gruma+42,+8000+Novo+Mesto,+Slovenia"
                  target="_blank"
                  rel="noopener"
                  className="btn-ghost"
                >
                  {t.contactSection.mapsButton}
                </a>
              </div>
            </div>

            <form
              className="lg:col-span-7 bg-card/50 border border-border p-8 lg:p-10 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert(t.contactSection.alert);
              }}
            >
              <p className="eyebrow mb-2">{t.contactSection.formEyebrow}</p>
              <h3 className="display text-cream text-2xl mb-6">
                {t.contactSection.formTitle}
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="eyebrow block mb-2">
                    {t.contactSection.nameLabel}
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="w-full bg-background border border-input px-4 py-3 text-cream focus:outline-none focus:border-gold transition"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="eyebrow block mb-2">
                    {t.contactSection.phoneLabel}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full bg-background border border-input px-4 py-3 text-cream focus:outline-none focus:border-gold transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="eyebrow block mb-2">
                  {t.contactSection.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full bg-background border border-input px-4 py-3 text-cream focus:outline-none focus:border-gold transition"
                />
              </div>

              <div>
                <label htmlFor="vehicle" className="eyebrow block mb-2">
                  {t.contactSection.vehicleLabel}
                </label>
                <input
                  id="vehicle"
                  name="vehicle"
                  className="w-full bg-background border border-input px-4 py-3 text-cream focus:outline-none focus:border-gold transition"
                />
              </div>

              <div>
                <label htmlFor="service" className="eyebrow block mb-2">
                  {t.contactSection.serviceLabel}
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="contact-select w-full bg-background border border-input pl-4 pr-12 py-3 text-cream focus:outline-none focus:border-gold transition"
                >
                  <option value="" disabled>
                    {t.contactSection.servicePlaceholder}
                  </option>
                  {t.contactSection.serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow block mb-2">
                  {t.contactSection.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-background border border-input px-4 py-3 text-cream focus:outline-none focus:border-gold transition resize-none"
                />
              </div>

              <button type="submit" className="btn-gold w-full sm:w-auto">
                {t.contactSection.sendButton}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 sm:py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <div>
            <p className="display text-cream text-lg">AVTO DETAILING BRANE</p>
            <p className="text-muted-foreground text-xs mt-1">{t.footer.sub}</p>
          </div>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Avto Detailing Brane. {t.footer.rights}
          </p>
        </div>
      </footer>
    </>
  );
}
