"use client";

import Image from "next/image";

export default function Home() {
  const services = [
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
  ];

  const reviews = [
    {
      text: "Avto je šel k njemu kot na wellness vikend, prišel nazaj pa kot da je naredil 3 tedne detoxa, masaže, savne in še facelift zraven. Brez pripomb, samo čista zmaga!",
      name: "M. S.",
      initials: "MS",
    },
    {
      text: "Gospodu Branetu dajem kapo dol — mi je avto očistil znotraj in zunaj, spoliral in dal keramično zaščito. Avto zgleda kot NOV. ZELO PRIPOROČAM.",
      name: "A. R.",
      initials: "AR",
    },
    {
      text: "Avto je star 19 let in je že spet kot nov. Hvala Braneta zato ker je hitro in zelo lepo zrihtal moj BOLiD da je spet kot nov.",
      name: "I. B.",
      initials: "IB",
    },
  ];

  const gallery = [
    { src: "/gallery-1.jpg", label: "Zunanje čiščenje · Mercedes" },
    { src: "/gallery-2.jpg", label: "Notranjost · BMW" },
    { src: "/gallery-3.jpg", label: "Keramični premaz · SUV" },
    { src: "/gallery-4.jpg", label: "Poliranje · Mercedes" },
  ];

  const processSteps = [
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
  ];

  const pillars = [
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
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="display text-cream text-lg tracking-[0.04em]">
              AVTO DETAILING BRANE
            </span>
            <span className="text-muted-foreground text-xs tracking-[0.2em]">
              S.P.
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-8 text-xs tracking-[0.18em] uppercase">
            <a href="#storitve" className="hover:text-gold transition">
              Storitve
            </a>
            <a href="#galerija" className="hover:text-gold transition">
              Galerija
            </a>
            <a href="#o-nas" className="hover:text-gold transition">
              O nas
            </a>
            <a href="#mnenja" className="hover:text-gold transition">
              Mnenja
            </a>
            <a href="#kontakt" className="hover:text-gold transition">
              Kontakt
            </a>
          </div>
          <a href="#kontakt" className="btn-gold !py-3 !px-5 text-[0.7rem]">
            Rezerviraj termin
          </a>
        </div>
      </nav>

      <section
        id="top"
        className="relative min-h-screen flex items-end overflow-hidden"
      >
        <Image
          src="/hero-car.jpg"
          alt="Premium detailing — vozilo v Novem mestu"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />

        <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24 pt-32 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="hairline" />
              <span className="eyebrow">Novo Mesto · Slovenija</span>
            </div>
            <h1 className="text-cream">
              <span className="serif-italic block text-3xl md:text-5xl text-cream/80 mb-3">
                Globinsko čiščenje in nega vozil
              </span>
              <span className="display block text-[3.2rem] md:text-[5.5rem] lg:text-[7rem]">
                Vaš avto
                <br />
                si zasluži
                <br />
                <span className="text-gold">najboljše.</span>
              </span>
            </h1>
            <p className="mt-8 max-w-lg text-muted-foreground text-base leading-relaxed">
              Branislav Javorski s.p. — profesionalno poliranje, keramični
              premaz in čiščenje vozil. Premium rezultati v Novem mestu.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#kontakt" className="btn-gold">
                Rezerviraj termin
              </a>
              <a href="#storitve" className="btn-ghost">
                Oglej si storitve
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden border border-gold/30">
              <Image
                src="/portrait.jpg"
                alt="Branislav Javorski pri delu"
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="display text-cream text-xl">Branislav Javorski</p>
                <p className="eyebrow mt-1">Avto Detailing Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-3">
          {pillars.map((it, i) => (
            <div
              key={it.t}
              className={`py-12 lg:py-16 lg:px-10 ${i > 0 ? "md:border-l border-border" : ""}`}
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

      <section id="storitve" className="py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="hairline" />
                <span className="eyebrow">Naše storitve</span>
              </div>
              <h2>
                <span className="serif-italic text-cream/70 text-3xl md:text-4xl block mb-2">
                  Vse, kar vaš
                </span>
                <span className="display text-cream text-5xl md:text-6xl">
                  avto
                  <br />
                  potrebuje.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-muted-foreground text-base leading-relaxed">
                Od hitrih osvežitev do celovite transformacije vozila. Vsaka
                storitev je po dogovoru in prilagojena vašim potrebam — z
                najboljšimi produkti Koch Chemie, Gyeon, Meguiar's in Sonax.
              </p>
            </div>
          </div>

          <div className="border-t border-border">
            {services.map((s) => (
              <div
                key={s.n}
                className="grid md:grid-cols-12 gap-6 py-10 border-b border-border group hover:bg-card/40 transition px-2 md:px-0"
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

      <section className="py-24 lg:py-32 border-y border-border bg-card/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-12">
            <span className="hairline" />
            <span className="eyebrow">Postopek</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {processSteps.map((s) => (
              <div key={s.n} className="bg-background p-8 lg:p-10">
                <div className="serif-italic text-gold text-3xl mb-6">
                  {s.n}
                </div>
                <h4 className="display text-cream text-xl mb-3">{s.t}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galerija" className="py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="hairline" />
                <span className="eyebrow">Naše delo · Pravi rezultati</span>
              </div>
              <h2>
                <span className="serif-italic text-cream/70 text-3xl md:text-4xl block mb-2">
                  Galerija
                </span>
                <span className="display text-cream text-5xl md:text-6xl">
                  Rezultati
                  <br />
                  govorijo sami.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-muted-foreground text-base leading-relaxed">
                Vsaka fotografija — resnično vozilo, resnično delo. Brez
                filtrov, brez trika.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {gallery.map((g, i) => (
              <figure
                key={g.label}
                className={`relative overflow-hidden group ${i === 0 ? "lg:col-span-2 lg:row-span-2 aspect-square" : "aspect-[4/3]"}`}
              >
                <Image
                  src={g.src}
                  alt={g.label}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-80" />
                <figcaption className="absolute bottom-4 left-4 right-4 eyebrow text-cream/90">
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="o-nas" className="py-24 lg:py-36 border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
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
              <span className="eyebrow">Branislav Javorski s.p.</span>
            </div>
            <h2 className="mb-8">
              <span className="serif-italic text-cream/70 text-3xl md:text-4xl block mb-2">
                O nas
              </span>
              <span className="display text-cream text-5xl md:text-6xl">
                Strast do
                <br />
                avtomobilov.
              </span>
            </h2>
            <div className="space-y-5 text-muted-foreground text-base leading-relaxed max-w-2xl">
              <p>
                Sem{" "}
                <span className="text-cream font-medium">
                  Branislav Javorski
                </span>
                , lastnik in edini detajler pri Avto Detailing Brane v Novem
                mestu. Detajliranje je moja strast — danes pa jo živim poklicno,
                z vsem kar imam.
              </p>
              <p>
                Vsak avto dobim sam, z lastnimi rokami. Vsako vozilo dobi vso
                mojo pozornost — od prvega pranja do zadnje kapljice keramičnega
                premaza. Delam z najboljšo tehnologijo in ekološko prijaznimi
                produkti.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-12 pt-10 border-t border-border">
              <div>
                <p className="eyebrow mb-2">Lokacija</p>
                <p className="text-cream">
                  Ul. Slavka Gruma 42
                  <br />
                  8000 Novo Mesto
                </p>
              </div>
              <div>
                <p className="eyebrow mb-2">Telefon</p>
                <a
                  href="tel:031014910"
                  className="text-cream hover:text-gold transition"
                >
                  031 014 910
                </a>
              </div>
              <div>
                <p className="eyebrow mb-2">Delovni čas</p>
                <p className="text-cream">Po dogovoru</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Ocena Google</p>
                <p className="text-gold">★★★★★ 5.0</p>
              </div>
            </div>

            <div className="mt-12">
              <p className="eyebrow mb-4">Produkti, ki jih uporabljamo</p>
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

      <section id="mnenja" className="py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">Google ocene · 5.0 ★</span>
          </div>
          <h2 className="mb-16">
            <span className="serif-italic text-cream/70 text-3xl md:text-4xl block mb-2">
              Mnenja strank
            </span>
            <span className="display text-cream text-5xl md:text-6xl">
              Resnične ocene,
              <br />
              brez spodbude.
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {reviews.map((r) => (
              <article
                key={r.name}
                className="bg-background p-8 lg:p-10 flex flex-col"
              >
                <div className="text-gold tracking-[0.3em] mb-6">★★★★★</div>
                <p className="text-cream/90 text-base leading-relaxed flex-1 italic">
                  "{r.text}"
                </p>
                <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold text-xs tracking-wider">
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-cream text-sm">{r.name}</p>
                    <p className="eyebrow text-[0.6rem]">Google · 2026</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 border-y border-border bg-card/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p className="serif-italic text-cream/70 text-3xl md:text-4xl mb-2">
            Vaš avto čaka
          </p>
          <h2 className="display text-cream text-5xl md:text-7xl mb-10">
            pravo obravnavo.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#kontakt" className="btn-gold">
              Rezerviraj termin
            </a>
            <a href="tel:031014910" className="btn-ghost">
              031 014 910
            </a>
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">Avto Detailing Brane · Novo Mesto</span>
          </div>
          <h2 className="mb-16">
            <span className="serif-italic text-cream/70 text-3xl md:text-4xl block mb-2">
              Kontakt
            </span>
            <span className="display text-cream text-5xl md:text-6xl">
              Stopite
              <br />v stik.
            </span>
          </h2>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="eyebrow mb-2">Naslov</p>
                <p className="text-cream text-lg">
                  Ulica Slavka Gruma 42
                  <br />
                  8000 Novo Mesto, Slovenija
                </p>
              </div>
              <div>
                <p className="eyebrow mb-2">Telefon</p>
                <a
                  href="tel:+38631014910"
                  className="display text-gold text-3xl hover:opacity-80 transition"
                >
                  +386 31 014 910
                </a>
              </div>
              <div>
                <p className="eyebrow mb-2">Delovni čas</p>
                <p className="text-cream text-lg">
                  Po dogovoru — pokličite za termin
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="https://maps.google.com/?q=Ulica+Slavka+Gruma+42,+8000+Novo+Mesto,+Slovenia"
                  target="_blank"
                  rel="noopener"
                  className="btn-ghost"
                >
                  Odpri v Google Zemljevidih
                </a>
              </div>
            </div>

            <form
              className="lg:col-span-7 bg-card/50 border border-border p-8 lg:p-10 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Hvala! Sporočilo je bilo poslano — odgovorimo v 24 urah.",
                );
              }}
            >
              <p className="eyebrow mb-2">Pošljite povpraševanje</p>
              <h3 className="display text-cream text-2xl mb-6">
                Odgovorimo v 24 urah.
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="eyebrow block mb-2">
                    Ime in priimek
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="w-full bg-background border border-input px-4 py-3 text-cream focus:outline-none focus:border-gold transition"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="eyebrow block mb-2">
                    Telefon
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
                  E-pošta
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
                  Vozilo (znamka in model)
                </label>
                <input
                  id="vehicle"
                  name="vehicle"
                  className="w-full bg-background border border-input px-4 py-3 text-cream focus:outline-none focus:border-gold transition"
                />
              </div>

              <div>
                <label htmlFor="service" className="eyebrow block mb-2">
                  Storitev
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-background border border-input px-4 py-3 text-cream focus:outline-none focus:border-gold transition"
                >
                  <option>Izberite storitev …</option>
                  <option>Globinsko čiščenje zunanjosti</option>
                  <option>Globinsko čiščenje notranjosti</option>
                  <option>Strojno poliranje laka</option>
                  <option>Keramični premaz</option>
                  <option>Kompleksni VIP paket</option>
                  <option>Posvet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow block mb-2">
                  Sporočilo
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-background border border-input px-4 py-3 text-cream focus:outline-none focus:border-gold transition resize-none"
                />
              </div>

              <button type="submit" className="btn-gold w-full sm:w-auto">
                Pošlji povpraševanje
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <div>
            <p className="display text-cream text-lg">AVTO DETAILING BRANE</p>
            <p className="text-muted-foreground text-xs mt-1">
              Branislav Javorski s.p. · Novo Mesto
            </p>
          </div>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Avto Detailing Brane. Vse pravice
            pridržane.
          </p>
        </div>
      </footer>
    </>
  );
}
