/* =========================================================
   DECØY DEVICES — sdílená data webu (index.html + product.html)
   ---------------------------------------------------------
   Zdroje parametrů (sloupec "s" ve specifikacích):
     "doc" = převzato z dokumentace projektu (README / schéma)
     "ds"  = typická hodnota z datasheetu použitého obvodu
     "tbd" = zatím neměřeno — doplnit po měření prototypu
   ========================================================= */

const TS = "TEATRO\\\\\\SVJÖTLO";

const I18N = {
  cs: {
    div_sound: "ZVUK",
    div_light: "SVĚTLO",
    div_video: "VIDEO",
    enter_section: "VSTOUPIT >>>",
    sec_pedals: "PEDÁLY",
    sec_blog: "BLOK",
    sec_merch: "TRIČKA & MERCH",
    new_post_btn: "+ NAPSAT PŘÍSPĚVEK",
    save_post_btn: "ULOŽIT PŘÍSPĚVEK",
    cancel_btn: "ZRUŠIT",
    post_title_ph: "Nadpis příspěvku...",
    post_body_ph: "Sem piš text, poznámky z vývoje nebo report ze zkoušky...",
    specs_btn: "PARAMETRY",
    detail_btn: "DETAIL →",
    soon_badge: "PROTOTYP / PŘIPRAVUJEME",
    specs_heading: "TECHNICKÉ PARAMETRY",
    key_specs: "KLÍČOVÉ PARAMETRY",
    all_specs: "VŠECHNY PARAMETRY",
    param: "PARAMETR",
    value: "HODNOTA",
    source: "ZDROJ",
    src_doc: "NÁVRH",
    src_ds: "DATASHEET",
    src_tbd: "MĚŘÍ SE",
    back_to: "ZPĚT NA",
    about: "O MODULU",
    use_cases: "K ČEMU HO POUŽÍT",
    gallery: "GALERIE",
    controls: "OVLÁDÁNÍ & KONEKTORY",
    works_with: "FUNGUJE S",
    status: "STAV",
    people: "LIDÉ",
    not_found: "Produkt nenalezen.",
    prev_prod: "PŘEDCHOZÍ",
    next_prod: "DALŠÍ",
    browse_section: "LISTOVAT V SEKCI",
    legend:
      "NÁVRH = hodnota z dokumentace návrhu · DATASHEET = typická hodnota použitého obvodu · MĚŘÍ SE = doplníme po měření prototypu",
    page_title_home: "DECØY DEVICES — Světlo · Zvuk · Video",
    sec_num_modular: "01 // MODULÁR",
    sec_num_pedals: "02 // PEDÁLY",
    sec_num_blog: "03 // POZNÁMKY & DENÍK",
    sec_num_teatro: "04 // KOLEKTIV & SCÉNA",
    sec_num_merch: "05 // OBLEČENÍ & OBJEKTY",
    sec_num_crew: "// TÝM",
    pcb_faceplate: "PCB ČELNÍ PANEL",
    founders_credit: "ZAKLADATELÉ DECØY: VOJTĚCH DIVOKÝ & LADISLAV MAREŠ",
    app_num_use: "01 // POUŽITÍ",
    app_num_io: "02 // PANEL & KONEKTORY",
    app_num_elec: "03 // ELEKTRICKÉ & VÝKONNOSTNÍ PARAMETRY",
    app_num_eco: "04 // EKOSYSTÉM",
    prev_img: "Předchozí obrázek",
    next_img: "Další obrázek",
    close_btn: "Zavřít",
    diff_num: "// REVIZE vs. PŮVODNÍ VERZE",
    diff_heading: "ROZDÍLY OPROTI PŮVODNÍ VERZI",
    diff_feature: "OBLAST / PARAMETR",
    diff_orig: "PŮVODNÍ ELEMENTS (v0.3)",
    diff_v04: "DECØY ELEMENTS v0.4",
    diff_impact: "PŘÍNOS",
  },
  en: {
    div_sound: "SOUND",
    div_light: "LIGHT",
    div_video: "VIDEO",
    enter_section: "ENTER >>>",
    sec_pedals: "PEDALS",
    sec_blog: "JOURNAL",
    sec_merch: "TEES & MERCH",
    new_post_btn: "+ NEW ENTRY",
    save_post_btn: "SAVE ENTRY",
    cancel_btn: "CANCEL",
    post_title_ph: "Entry title...",
    post_body_ph: "Write notes, devlog thoughts, or rehearsal reports here...",
    specs_btn: "SPECS",
    detail_btn: "DETAIL →",
    soon_badge: "PROTOTYPE / UPCOMING",
    specs_heading: "TECHNICAL SPECIFICATIONS",
    key_specs: "KEY SPECIFICATIONS",
    all_specs: "FULL SPECIFICATIONS",
    param: "PARAMETER",
    value: "VALUE",
    source: "SOURCE",
    src_doc: "DESIGN",
    src_ds: "DATASHEET",
    src_tbd: "TBD",
    back_to: "BACK TO",
    about: "ABOUT",
    use_cases: "WHAT IT'S FOR",
    gallery: "GALLERY",
    controls: "CONTROLS & CONNECTORS",
    works_with: "WORKS WITH",
    status: "STATUS",
    people: "PEOPLE",
    not_found: "Product not found.",
    prev_prod: "PREVIOUS",
    next_prod: "NEXT",
    browse_section: "BROWSE SECTION",
    legend:
      "DESIGN = value from design documentation · DATASHEET = typical value of the IC used · TBD = to be filled in after prototype measurement",
    page_title_home: "DECØY DEVICES — Light · Sound · Video",
    sec_num_modular: "01 // MODULAR",
    sec_num_pedals: "02 // STOMPBOXES",
    sec_num_blog: "03 // NOTES & JOURNAL",
    sec_num_teatro: "04 // COLLECTIVE & STAGE",
    sec_num_merch: "05 // APPAREL & OBJECTS",
    sec_num_crew: "// CREW",
    pcb_faceplate: "PCB FACEPLATE",
    founders_credit: "DECØY FOUNDERS: VOJTĚCH DIVOKÝ & LADISLAV MAREŠ",
    app_num_use: "01 // APPLICATIONS",
    app_num_io: "02 // FRONT PANEL I/O",
    app_num_elec: "03 // ELECTRICAL & PERFORMANCE",
    app_num_eco: "04 // ECOSYSTEM",
    prev_img: "Previous image",
    next_img: "Next image",
    close_btn: "Close",
    diff_num: "// REVISION vs. ORIGINAL",
    diff_heading: "DIFFERENCES VS. ORIGINAL",
    diff_feature: "FEATURE / PARAMETER",
    diff_orig: "ORIGINAL ELEMENTS (v0.3)",
    diff_v04: "DECØY ELEMENTS v0.4",
    diff_impact: "IMPACT",
  },
};

/* Pomocník pro dvojjazyčný řádek specifikace */
const S = (cs, en, v, s = "doc", key = false) => ({ p: { cs, en }, v, s, key });

function specVal(v, lang) {
  return typeof v === "string" ? v : v[lang] || v.cs;
}

const PRODUCTS = {
  /* ------------------------------------------------------- ZVUK */
  "the-in": {
    division: "AUD",
    name: "THE IN",
    hp: "16 HP",
    serial: "DD-AU01 // AUD.IN.01",
    status: { cs: "Schéma + panel + firmware", en: "Schematic + panel + firmware" },
    image: "assets/products/the-in/preview.png",
    tagline: {
      cs: "Jediný vstup, co kdy budeš potřebovat.",
      en: "The only input you'll ever need.",
    },
    short: {
      cs: "Mikrofon, nástroj, linka, CV, Gate, MIDI, USB i záznam na microSD v jednom 16 HP panelu.",
      en: "Mic, instrument, line, CV, Gate, MIDI, USB and microSD recording in a single 16 HP panel.",
    },
    long: {
      cs: [
        "THE IN je vstupní brána do moduláru. Místo několika samostatných modulů — mikrofonního předzesilovače, nástrojového bufferu, převodníku MIDI na CV a zvukové karty — máš všechno v jednom panelu se společným displejem a ovládáním.",
        "Kanál 1 přijme dynamický i kondenzátorový mikrofon (phantom +48 V, PAD −20 dB, HPF), kanál 2 kytaru nebo baskytaru přímo bez DI boxu, kanály 3 a 4 linkový stereo signál. Spodní část panelu tvoří DC-vázané CV vstupy a Gate/Clock/Reset, takže do racku dostaneš i řídicí signály z jiných zařízení.",
        "Celý vstupní signál můžeš rovnou nahrávat na microSD kartu jako WAV, posílat přes USB-C do počítače, nebo naopak přehrávat podklady a MIDI soubory zpátky do racku.",
      ],
      en: [
        "THE IN is the front door to your modular. Instead of separate modules — mic preamp, instrument buffer, MIDI-to-CV converter and audio interface — everything lives in one panel with a shared display and controls.",
        "Channel 1 takes dynamic and condenser mics (+48 V phantom, −20 dB PAD, HPF), channel 2 takes guitar or bass directly without a DI box, channels 3 and 4 take stereo line level. The bottom of the panel hosts DC-coupled CV inputs and Gate/Clock/Reset, so control signals from other gear get into the rack too.",
        "Everything can be recorded straight to microSD as WAV, streamed to a computer over USB-C, or you can play backing tracks and MIDI files back into the rack.",
      ],
    },
    useCases: [
      {
        t: { cs: "Zpěv do moduláru", en: "Vocals into the modular" },
        d: {
          cs: "Mikrofon přímo do racku bez externího pultu — hlas zpracuješ filtry, delayi a granulárními moduly.",
          en: "Mic straight into the rack without an external desk — process your voice with filters, delays and granular modules.",
        },
      },
      {
        t: { cs: "Kytara jako zdroj", en: "Guitar as a source" },
        d: {
          cs: "Hi-Z vstup pro kytaru nebo baskytaru; obálku a výšku tónu pak můžeš použít k modulaci syntezátoru.",
          en: "Hi-Z input for guitar or bass; use its envelope and pitch to modulate your synth voices.",
        },
      },
      {
        t: { cs: "Synchronizace s DAW", en: "Sync with a DAW" },
        d: {
          cs: "USB-C audio a MIDI v jednom kabelu: tempo, noty i zvuk z počítače rovnou do racku.",
          en: "USB-C audio and MIDI over one cable: tempo, notes and sound from the computer straight into the rack.",
        },
      },
      {
        t: { cs: "Záznam zkoušky", en: "Rehearsal recording" },
        d: {
          cs: "Nahrávání vstupů na microSD bez počítače — ideální pro zkoušky a divadelní provoz.",
          en: "Record inputs to microSD without a computer — ideal for rehearsals and theatre shows.",
        },
      },
    ],
    controls: {
      cs: [
        "CH1 MIC/LINE — combo XLR/TRS, GAIN, +48 V, PAD, CLIP LED",
        "CH2 INST/LINE — 6,35 mm TS, GAIN, přepínač HI-Z / LINE",
        "CH3 / CH4 LINE L/R — 3,5 mm, ATTEN",
        "4× CV IN, 4× GATE, CLK IN, RST IN",
        "MIDI IN — DIN-5 + 3,5 mm TRS",
        "USB-C, slot microSD, OLED, enkodér SELECT, tlačítka MENU a CAL",
      ],
      en: [
        "CH1 MIC/LINE — combo XLR/TRS, GAIN, +48 V, PAD, CLIP LED",
        "CH2 INST/LINE — 6.35 mm TS, GAIN, HI-Z / LINE switch",
        "CH3 / CH4 LINE L/R — 3.5 mm, ATTEN",
        "4× CV IN, 4× GATE, CLK IN, RST IN",
        "MIDI IN — DIN-5 + 3.5 mm TRS",
        "USB-C, microSD slot, OLED, SELECT encoder, MENU and CAL buttons",
      ],
    },
    specs: [
      S("Šířka / výška", "Width / height", "16 HP (81,08 mm) / 3U"),
      S("Audio vstupy", "Audio inputs", { cs: "4 kanály (MIC, INST, LINE L/R)", en: "4 channels (MIC, INST, LINE L/R)" }, "doc", true),
      S("Rozlišení audio převodníku", "Audio converter resolution", "24 bit", "doc", true),
      S("Vzorkovací frekvence", "Sample rate", "48 kHz", "doc", true),
      S("Dynamický rozsah A/D", "A/D dynamic range", "≈ 110 dB (typ.)", "ds", true),
      S("Phantomové napájení", "Phantom power", { cs: "+48 V, přepínatelné", en: "+48 V, switchable" }),
      S("PAD / HPF", "PAD / HPF", { cs: "−20 dB / ano", en: "−20 dB / yes" }),
      S("Zisk mikrofonního předzesilovače", "Mic preamp gain", "—", "tbd"),
      S("Vstupní impedance MIC", "MIC input impedance", "—", "tbd"),
      S("Vstupní impedance INST (Hi-Z)", "INST input impedance (Hi-Z)", "—", "tbd", true),
      S("Vstupní impedance LINE", "LINE input impedance", "—", "tbd"),
      S("CV vstupy — rozsah", "CV inputs — range", { cs: "±10,24 V, DC-vázané", en: "±10.24 V, DC-coupled" }, "doc", true),
      S("CV vstupy — rozlišení", "CV inputs — resolution", "16 bit", "doc", true),
      S("CV vstupy — vstupní impedance", "CV inputs — input impedance", "1 MΩ", "ds"),
      S("CV vstupy — vzorkování", "CV inputs — sampling", { cs: "až 500 kS/s (celkem)", en: "up to 500 kS/s (total)" }, "ds"),
      S("Gate / Clock / Reset", "Gate / Clock / Reset", { cs: "ochrana proti záp. napětí a přepětí", en: "reverse-voltage and overvoltage protection" }),
      S("MIDI", "MIDI", { cs: "IN — DIN-5 + TRS, optoizolované", en: "IN — DIN-5 + TRS, opto-isolated" }),
      S("USB", "USB", "USB-C, USB 2.0 FS — Audio Class + MIDI"),
      S("Záznam / přehrávání", "Record / playback", "microSD: WAV 24 bit / 48 kHz, .mid, .clk"),
      S("Displej", "Display", "OLED 1,54″, 128 × 64"),
      S("Aktualizace firmwaru", "Firmware update", { cs: "z microSD karty, bez programátoru", en: "via microSD card, no programmer needed" }),
      S("Odběr +12 V / −12 V", "Current draw +12 V / −12 V", "—", "tbd", true),
    ],
    gallery: [
      { src: "assets/products/the-in/preview.png", cap: { cs: "Čelní panel — náhled", en: "Front panel — preview" } },
      { src: "assets/diagrams/the-in-pipeline.svg", cap: { cs: "Signálová cesta & nahrávání", en: "Signal & recording pipeline" } },
    ],
    related: ["the-out", "dmx-out"],
  },

  "the-out": {
    division: "AUD",
    name: "THE OUT",
    hp: "20 HP",
    serial: "DD-AU02 // REV 2.0",
    status: { cs: "Schéma + panel + firmware", en: "Schematic + panel + firmware" },
    image: "assets/products/the-out/preview.png",
    tagline: {
      cs: "Jediný výstup, co kdy budeš potřebovat.",
      en: "The only output you'll ever need.",
    },
    short: {
      cs: "4kanálový mix, symetrické XLR do PA, dvoje sluchátka, interní klik a USB zvukovka.",
      en: "4-channel mixer, balanced XLR to PA, dual headphones, internal click and USB audio interface.",
    },
    long: {
      cs: [
        "THE OUT je poslední modul v řetězci — tam, kde zvuk opouští rack. Levá polovina panelu je mixážní: dva stereo páry s hlasitostí a přepínačem MONO / ST. Pravá polovina obsluhuje displej, sluchátka a hlavní výstupy.",
        "Hlavní výstupy jsou symetrické na kombinovaných konektorech XLR / 6,35 mm, takže modul připojíš přímo do PA nebo zvukové karty bez dalších převodníků. Sluchátka mají vlastní hlasitost a dva konektory současně — pro tebe i pro spoluhráče.",
        "Zabudovaný klik (metronom) se synchronizuje z CLICK IN nebo z USB a můžeš ho poslat jen do sluchátek, do hlavního výstupu, do USB, nebo všude. Publikum tak klik neslyší, zatímco kapela ano.",
      ],
      en: [
        "THE OUT is the last module in the chain — where sound leaves the rack. The left half of the panel is a mixer: two stereo pairs with level and a MONO / ST switch. The right half handles the display, headphones and main outputs.",
        "Main outputs are balanced on combo XLR / 6.35 mm connectors, so it plugs straight into a PA or audio interface without extra converters. Headphones have their own level and two jacks at once — for you and a bandmate.",
        "The built-in click (metronome) syncs to CLICK IN or USB and can be routed to headphones only, main out, USB, or everywhere. The audience doesn't hear it, the band does.",
      ],
    },
    useCases: [
      {
        t: { cs: "Živé hraní bez pultu", en: "Live without a desk" },
        d: {
          cs: "Symetrický výstup rovnou do PA — modulár se chová jako hotový nástroj s line výstupem.",
          en: "Balanced output straight to the PA — the modular behaves like a finished instrument with line out.",
        },
      },
      {
        t: { cs: "Klik jen pro kapelu", en: "Click for the band only" },
        d: {
          cs: "Metronom do sluchátek, ale ne do sálu. Pět zvuků kliku a nastavitelný routing.",
          en: "Metronome in the headphones, not in the hall. Five click sounds and flexible routing.",
        },
      },
      {
        t: { cs: "Nahrávání do počítače", en: "Recording to a computer" },
        d: {
          cs: "USB-C zvuková karta: mix z racku jde přímo do DAW, zpět přichází podklady.",
          en: "USB-C audio interface: the rack mix goes straight to the DAW, backing tracks come back.",
        },
      },
      {
        t: { cs: "Divadelní provoz", en: "Theatre playback" },
        d: {
          cs: "Přehrávání nahrávek z microSD a odposlech pro dva lidi najednou.",
          en: "Playback from microSD and monitoring for two people at once.",
        },
      },
    ],
    controls: {
      cs: [
        "MIX 1-2 a MIX 3-4 — vstupy IN 1R/2L a IN 3R/4L, hlasitost CH 1–4, přepínač MONO / ST",
        "4× CV IN, 2× GATE IN, CLICK IN",
        "USB LVL, tlačítka MUTE a LOCK",
        "OLED, slot microSD, enkodér ROUTE / CLK",
        "HP VOL + sluchátka 3,5 mm a 6,3 mm",
        "MAIN LVL, CLIP LED, OUT L / OUT R — XLR / TS combo",
        "USB-C, MIDI OUT (TRS)",
      ],
      en: [
        "MIX 1-2 and MIX 3-4 — IN 1R/2L and IN 3R/4L, CH 1–4 level, MONO / ST switch",
        "4× CV IN, 2× GATE IN, CLICK IN",
        "USB LVL, MUTE and LOCK buttons",
        "OLED, microSD slot, ROUTE / CLK encoder",
        "HP VOL + 3.5 mm and 6.3 mm headphones",
        "MAIN LVL, CLIP LED, OUT L / OUT R — XLR / TS combo",
        "USB-C, MIDI OUT (TRS)",
      ],
    },
    specs: [
      S("Šířka / výška", "Width / height", "20 HP (101,30 mm) / 3U"),
      S("Mix", "Mixer", { cs: "4 kanály (2 stereo páry), MONO / ST", en: "4 channels (2 stereo pairs), MONO / ST" }, "doc", true),
      S("Rozlišení D/A převodníku", "D/A converter resolution", "24 bit", "doc", true),
      S("Vzorkovací frekvence", "Sample rate", "48 kHz", "doc", true),
      S("Dynamický rozsah D/A", "D/A dynamic range", "≈ 113 dB (typ.)", "ds", true),
      S("Hlavní výstup", "Main output", { cs: "symetrický, XLR / 6,35 mm TS combo", en: "balanced, XLR / 6.35 mm TS combo" }, "doc", true),
      S("Nominální výstupní úroveň", "Nominal output level", "+4 dBu", "doc", true),
      S("Maximální výstupní úroveň", "Maximum output level", "—", "tbd"),
      S("Výstupní impedance", "Output impedance", "—", "tbd"),
      S("Sluchátkový výstup", "Headphone output", { cs: "3,5 mm + 6,3 mm současně", en: "3.5 mm + 6.3 mm simultaneous" }),
      S("Dynamický rozsah sluch. zesilovače", "Headphone amp dynamic range", "≈ 120 dB (typ.)", "ds"),
      S("Doporučená impedance sluchátek", "Recommended headphone impedance", "—", "tbd"),
      S("Vstupní impedance audio vstupů", "Audio input impedance", "—", "tbd"),
      S("CV vstupy", "CV inputs", "4× ±10,24 V, 16 bit, 1 MΩ", "ds"),
      S("Klik", "Click", { cs: "5 zvuků; routing PHONES / MAIN / USB / ALL", en: "5 sounds; routing PHONES / MAIN / USB / ALL" }),
      S("USB", "USB", "USB-C — Audio Class + MIDI"),
      S("MIDI", "MIDI", "OUT — 3,5 mm TRS"),
      S("Záznam / přehrávání", "Record / playback", "microSD: WAV, MIDI, .clk"),
      S("Displej", "Display", "OLED 1,54″, 128 × 64"),
      S("Odběr +12 V / −12 V", "Current draw +12 V / −12 V", "—", "tbd", true),
    ],
    gallery: [
      { src: "assets/products/the-out/preview.png", cap: { cs: "Čelní panel — náhled", en: "Front panel — preview" } },
      { src: "assets/diagrams/the-out-pipeline.svg", cap: { cs: "Mix, klik & PA výstup", en: "Mixer, click & PA pipeline" } },
    ],
    related: ["the-in", "elements-v04"],
  },

  "elements-v04": {
    division: "AUD",
    name: "ELEMENTS v0.4",
    hp: "34 HP",
    serial: "DD-EL04 // REV 0.4",
    status: { cs: "Panel v0.4 + firmware", en: "Panel v0.4 + firmware" },
    image: "assets/products/elements-v04/split_panels_preview.png",
    tagline: {
      cs: "Modální syntezátor s fyzikálním modelováním — 2× Exciter, 8× Resonator, 480 MHz DSP.",
      en: "Modal physical modeling synthesizer — 2× Exciter, 8× Resonator, 480 MHz DSP.",
    },
    short: {
      cs: "Kompletní 34 HP hlas fyzikálního modelování: Classic & Industrial Exciter, 8 rezonátorů (Elements + Rings + Kammerl Spectral Clouds), 16bit CV a 24bit/48 kHz audio.",
      en: "Complete 34 HP physical modeling voice: Classic & Industrial Exciters, 8 resonators (Elements + Rings + Kammerl Spectral Clouds), 16-bit CV, and 24-bit/48 kHz audio.",
    },
    long: {
      cs: [
        "ELEMENTS v0.4 je kompletní 34 HP fyzikálně-modelovací syntezátor na jedné společné desce s dvoubarevným čelním panelem (černá část Exciter a bílá část Resonator). Na rozdíl od klasických subtraktivních syntezátorů nevytváří zvuk oscilátory, ale fyzikální interakcí zdroje energie (Exciter) a rezonančního tělesa (Resonator). Každý parametr má vlastní CV vstup s atenuvertorem (rozsah ±8 V) a precizní 16bitové snímání bez kvantizačních schodů.",
        "Sekce EXCITER nabízí na rozdíl od původní verze dvě přepínatelné sady generátorů (tlačítko Exciter Model): 1. CLASSIC (fyzikální model smyčce Bow s granulárním třením a LP filtrem, dechový generátor Blow s procházením spekter a perkusivní Strike s paličkami, kladívky, kartáčky, trsátky i odrazovým modelem částic) a 2. INDUSTRIAL (kovové tření FRICTION, digitální granulární BURST a průmyslové SAMPLES). Společná obálka Contour a vstup Strength řídí dynamiku úderu i průběžného buzení, zatímco tlačítko Play umožňuje ruční spouštění a testování.",
        "Sekce RESONATOR je v revizi v0.4 rozšířena z původních 3 modelů na celkem 8 algoritmů (tlačítko Resonator Model s LED indikací a ukládáním do paměti): 0. Modal (64 zero-delay feedback SVF filtrů — desky, tyče, membrány, zvony + 8 smyčcových vlnovodů s nelineární BowTable), 1. String (digitální vlnovod 2048 vzorků s 2-tap FIR DampingFilter a all-pass disperzním filtrem tuhosti StiffnessDelayLine), 2. Strings (5hlasý sympatický cluster paralelních vlnovodů), 3. Sympathetic String Quantized (port z Rings — 5 strun kvantizovaných do půltónových akordů), 4. String & Reverb (disperzní struna přímo do 4-tap all-pass reverbu), 5. FM Voice (2operátorový sinusový FM hlas se zpětnou vazbou a dvojitou obálkou), 6. String Synth (12hlasý Solina ensemble se 3pásmovým formantovým filtrem, chorusem a reverbem) a 7. Kammerl Spectral Clouds (vícepásmová banka náhodně modulovaných filtrů a fázově randomizovaný modální reverb). Navíc nechybí skrytý Easter Egg režim (OminousVoice: 2× 2op FM s 8× převzorkováním, FIR downsamplerem a Spatializerem).",
        "Dva nezávislé audio vstupy umožňují zpracovat externí signál z racku nebo z THE IN buď přes obálku a difuzér exciteru (Exciter IN), nebo přímo do rezonátoru (Resonator IN). Stereo výstup L/R nabízí vestavěný algoritmický reverb Space s virtuálním snímáním ze dvou bodů tělesa, případně rozdělení na čistý Exciter (L) a čistý Resonator (R).",
      ],
      en: [
        "ELEMENTS v0.4 is a complete 34 HP physical-modeling synthesizer on a single motherboard with a two-tone front panel (black Exciter side and white Resonator side). Rather than classic oscillators and filters, it models sound as an interaction between an energy source (Exciter) and a physical body (Resonator). Every parameter features a dedicated CV input with attenuverter (±8 V) sampled by 16-bit SAR ADCs with zero stepping.",
        "Unlike the original module, the EXCITER provides two selectable excitation engines via a dedicated Exciter Model button: 1. CLASSIC (friction Bow with particle density & LP filter, turbulent Blow scanning across spectra, and percussive Strike morphing across sticks, hammers, brushes, plectrums, and bouncy particles) and 2. INDUSTRIAL (metal-on-metal FRICTION, digital granular BURST, and industrial SAMPLES). The Contour envelope and Strength CV govern attack and sustain dynamics alongside the manual Play button.",
        "The RESONATOR expands from 3 original algorithms to 8 selectable models via the Resonator Model button (with LED feedback and persistent memory): 0. Modal (64 zero-delay feedback SVF band-pass modes + 8 bowed waveguides with nonlinear BowTable), 1. String (2048-sample waveguide with 2-tap FIR DampingFilter and all-pass StiffnessDelayLine dispersion), 2. Strings (5-voice parallel sympathetic waveguides), 3. Sympathetic String Quantized (Rings port — 5 strings quantized to semitone chord tables), 4. String & Reverb (dispersive string straight into 4-tap all-pass reverb), 5. FM Voice (2-op sine FM with feedback & dual decay envelopes), 6. String Synth (12-voice Solina ensemble with 3-band formant filter, chorus & reverb), and 7. Kammerl Spectral Clouds (multiband modulated filter bank & phase-randomized modal reverb). It also retains the hidden Easter Egg (OminousVoice: 2× 2-op FM with 8× oversampling, FIR downsampler & Spatializer).",
        "Two external audio inputs let you route signals from the rack or THE IN either through the exciter envelope/diffuser (Exciter IN) or straight into the resonator body (Resonator IN). Stereo outputs L/R include the Space algorithmic reverb and virtual dual-point stereo pickup, or can split raw Exciter and raw Resonator signals.",
      ],
    },
    useCases: [
      {
        t: { cs: "Akustické & organické nástroje", en: "Acoustic & organic instruments" },
        d: {
          cs: "Smyčce, dechy, drnkací struny i hybridní nástroje reagující na dynamiku (Strength) a 1 V/Oct stejně živě jako akustický nástroj.",
          en: "Bowed strings, winds, plucked bodies, and hybrid instruments responding dynamically to Strength and 1 V/Oct.",
        },
      },
      {
        t: { cs: "Industriální kov & perkuse", en: "Industrial metal & percussion" },
        d: {
          cs: "Přepni Exciter na Industrial (Friction / Burst / Samples) a rezonátor na Modal nebo FM Voice pro kovové údery, zvonky a surové textury.",
          en: "Switch Exciter to Industrial (Friction / Burst / Samples) with Modal or FM Voice for metallic hits, bells, and raw textures.",
        },
      },
      {
        t: { cs: "Rings & Spectral Clouds v jednom", en: "Rings & Spectral Clouds in one" },
        d: {
          cs: "Přímý výběr ze 4 portovaných algoritmů Rings (Sympathetic, String+Reverb, FM, String Synth) i spektrálního granulátoru Kammerl Spectral Clouds.",
          en: "Direct access to 4 ported Rings engines (Sympathetic, String+Reverb, FM, String Synth) plus Kammerl Spectral Clouds.",
        },
      },
      {
        t: { cs: "Externí audio přes rezonátor", en: "External audio through resonator" },
        d: {
          cs: "Zapoj bicí automat, kytaru nebo hlas z THE IN do vstupu Resonator IN a nech je rozezvučet 64pásmovou kovovou nebo skleněnou deskou.",
          en: "Patch a drum machine, guitar, or vocals from THE IN into Resonator IN to excite a 64-mode plate, string, or glass body.",
        },
      },
    ],
    controls: {
      cs: [
        "EXCITER — Bow (Level, Timbre), Blow (Level, Flow, Timbre), Strike (Level, Mallet, Timbre) + Contour",
        "RESONATOR — Coarse, Fine, FM, Geometry, Brightness, Damping, Position, Space",
        "3 tlačítka — Play (manuální Gate/ladění), Exciter Model (Classic / Industrial), Resonator Model (8 algoritmů)",
        "CV vstupy s atenuvertory pro všechny parametry Exciteru i Resonatoru (16bit snímání)",
        "1 V/Oct, Gate, Strength, FM IN",
        "Audio vstupy: Exciter IN (přes obálku/difuzér) a Resonator IN (přímo do rezonátoru)",
        "Výstupy: Stereo Audio Out L / R (24bit / 48 kHz přes TI PCM3060 + OPA1664D)",
      ],
      en: [
        "EXCITER — Bow (Level, Timbre), Blow (Level, Flow, Timbre), Strike (Level, Mallet, Timbre) + Contour",
        "RESONATOR — Coarse, Fine, FM, Geometry, Brightness, Damping, Position, Space",
        "3 buttons — Play (manual Gate/tune), Exciter Model (Classic / Industrial), Resonator Model (8 algorithms)",
        "Dedicated CV inputs with attenuverters for all Exciter & Resonator parameters (16-bit sampling)",
        "1 V/Oct, Gate, Strength, FM IN",
        "Audio inputs: Exciter IN (via envelope/diffuser) and Resonator IN (direct into resonator)",
        "Outputs: Stereo Audio Out L / R (24-bit / 48 kHz via TI PCM3060 + OPA1664D)",
      ],
    },
    comparison: [
      {
        f: { cs: "Čelní panel", en: "Front panel" },
        orig: { cs: "Jednobarevný hliníkový panel 34 HP", en: "Single-color 34 HP aluminum panel" },
        v04: { cs: "Dvoubarevný PCB panel: černý Exciter + bílý Resonator (34 HP)", en: "Two-tone PCB panel: black Exciter + white Resonator (34 HP)" },
        imp: { cs: "Optické oddělení budiče a rezonátoru v estetice DECØY DEVICES", en: "Visual separation of exciter and resonator in DECØY DEVICES aesthetic" },
      },
      {
        f: { cs: "Výběr modelů (tlačítka)", en: "Model selection (buttons)" },
        orig: { cs: "1 tlačítko (Play); skryté přepínání kombinací", en: "1 button (Play); hidden combo switching" },
        v04: { cs: "3 tlačítka: Play + dedikovaný Exciter Model + Resonator Model s LED indikací", en: "3 buttons: Play + dedicated Exciter Model + Resonator Model with LED feedback" },
        imp: { cs: "Okamžité přepínání enginů na pódiu i automatické uložení do paměti", en: "Instant live model switching with automatic non-volatile memory save" },
      },
      {
        f: { cs: "Exciter modely", en: "Exciter engines" },
        orig: { cs: "1 sada (Classic Bow / Blow / Strike)", en: "1 engine (Classic Bow / Blow / Strike)" },
        v04: { cs: "2 sady: Classic + Industrial (Friction / Burst / Samples)", en: "2 engines: Classic + Industrial (Friction / Burst / Samples)" },
        imp: { cs: "Od akustických smyčců a paliček až po kovové tření a industriální samply", en: "From acoustic strings and mallets to metallic friction and industrial samples" },
      },
      {
        f: { cs: "Resonator algoritmy", en: "Resonator algorithms" },
        orig: { cs: "3 modely (Modal, String, Strings)", en: "3 models (Modal, String, Strings)" },
        v04: { cs: "8 modelů: 3× Elements + 4× port z Rings + Kammerl Spectral Clouds", en: "8 models: 3× Elements + 4× Rings ports + Kammerl Spectral Clouds" },
        imp: { cs: "Kvantizované akordy, FM hlas, Solina string synth i spektrální granulace v jednom modulu", en: "Quantized chords, FM voice, Solina string synth, and spectral granulation in one module" },
      },
      {
        f: { cs: "Výpočetní jádro (MCU)", en: "Processing core (MCU)" },
        orig: { cs: "STM32F405 @ 168 MHz (192 kB RAM, 1 MB Flash)", en: "STM32F405 @ 168 MHz (192 kB RAM, 1 MB Flash)" },
        v04: { cs: "STM32H743 @ 480 MHz (1 MB RAM, 2 MB Flash, L1 cache, 64bit FPU)", en: "STM32H743 @ 480 MHz (1 MB RAM, 2 MB Flash, L1 cache, double-precision FPU)" },
        imp: { cs: "2,85× vyšší takt, 5,3× více RAM pro delší buffery a náročné DSP algoritmy", en: "2.85× higher clock, 5.3× more RAM for larger delay/reverb buffers & complex DSP" },
      },
      {
        f: { cs: "Audio kodek & výstupní op-amp", en: "Audio codec & output stage" },
        orig: { cs: "Wolfson WM8731 (I2C) + LME49720", en: "Wolfson WM8731 (I2C) + LME49720" },
        v04: { cs: "TI PCM3060 (24bit, hardwarový režim) + TI OPA1664D (THD+N 0,00006 %)", en: "TI PCM3060 (24-bit, hardware mode) + TI OPA1664D (THD+N 0.00006%)" },
        imp: { cs: "Imunní vůči zásekům I2C sběrnice, nižší šumové dno a latence ~0,33 ms", en: "Immune to I2C bus hangs, lower noise floor, and ~0.33 ms audio latency" },
      },
      {
        f: { cs: "Rozlišení CV & potenciometrů", en: "CV & pot ADC resolution" },
        orig: { cs: "12 bit (4 096 kroků)", en: "12-bit (4,096 steps)" },
        v04: { cs: "16 bit SAR ADC (65 536 kroků) pro CV i všech 32 kanálů potenciometrů", en: "16-bit SAR ADC (65,536 steps) for CV inputs and all 32 pot channels" },
        imp: { cs: "16× jemnější snímání 1 V/Oct a naprosto plynulé otáčení knobů bez schodů", en: "16× finer 1 V/Oct tracking and completely smooth parameter sweeps" },
      },
      {
        f: { cs: "LED modulace (kamera/pódium)", en: "LED PWM (camera/stage)" },
        orig: { cs: "Nízkofrekvenční timer PWM", en: "Low-frequency timer PWM" },
        v04: { cs: "Vysokofrekvenční TIM1 PWM ≈ 133 kHz", en: "High-frequency TIM1 PWM ≈ 133 kHz" },
        imp: { cs: "Nulové blikání a pruhy na kameře při živém natáčení a projekcích", en: "Zero flicker or rolling shutter banding in video captures and stage rigs" },
      },
    ],
    specs: [
      S("Šířka / výška", "Width / height", "34 HP (172,5 mm × 128,5 mm) / 3U"),
      S("Hloubka modulu", "Module depth", "25 mm", "doc"),
      S("Architektura rezonátoru", "Resonator architecture", { cs: "8 algoritmů vč. 64 ZDF SVF filtrů, Rings a Spectral Clouds", en: "8 algorithms incl. 64 ZDF SVF modes, Rings & Spectral Clouds" }, "doc", true),
      S("Generátory exciteru", "Exciter generators", { cs: "2 enginy: Classic (Bow/Blow/Strike) & Industrial (Friction/Burst/Samples)", en: "2 engines: Classic (Bow/Blow/Strike) & Industrial (Friction/Burst/Samples)" }, "doc", true),
      S("Audio převodník & vzorkování", "Audio codec & sample rate", { cs: "24 bit / 48 kHz (TI PCM3060, latence ~0,33 ms)", en: "24-bit / 48 kHz (TI PCM3060, ~0.33 ms latency)" }, "doc", true),
      S("Výstupní zesilovač", "Output op-amp", "TI OPA1664D (THD+N 0,00006 %)", "ds"),
      S("Rozlišení CV & knobů", "CV & pot ADC resolution", { cs: "16 bit SAR ADC (65 536 kroků)", en: "16-bit SAR ADC (65,536 steps)" }, "doc", true),
      S("Pitch tracking", "Pitch tracking", { cs: "1 V/Oct + FM vstup s atenuvertorem", en: "1 V/Oct + FM input with attenuverter" }, "doc", true),
      S("CV vstupy — rozsah", "CV inputs — range", { cs: "±8 V (s atenuvertorem na každém vstupu)", en: "±8 V (attenuverter on every input)" }, "doc", true),
      S("Vstupní impedance", "Input impedance", "100 kΩ", "doc", true),
      S("Úroveň audio vstupů", "Audio input level", "10 Vpp (Exciter IN & Resonator IN)", "doc"),
      S("LED PWM frekvence", "LED PWM frequency", "≈ 133 kHz (flicker-free)", "doc"),
      S("Odběr +12 V / −12 V", "Current draw +12 V / −12 V", "130 mA / 10 mA", "doc", true),
    ],
    credit: {
      cs: "Vychází z Mutable Instruments Elements (Émilie Gillet, CC-BY-SA 3.0) — DECØY DEVICES v0.4.",
      en: "Based on Mutable Instruments Elements (Émilie Gillet, CC-BY-SA 3.0) — DECØY DEVICES v0.4.",
    },
    gallery: [
      { src: "assets/products/elements-v04/split_panels_preview.png", cap: { cs: "Čelní panel v0.4 (černý Exciter + bílý Resonator)", en: "Front panel v0.4 (black Exciter + white Resonator)" } },
      { src: "assets/products/elements-v04/Exciter_preview.png", cap: { cs: "Exciter panel (20 HP, černá)", en: "Exciter panel (20 HP, black)" } },
      { src: "assets/products/elements-v04/Resonator_preview.png", cap: { cs: "Resonator panel (14 HP, bílá)", en: "Resonator panel (14 HP, white)" } },
      { src: "assets/diagrams/elements-v04-firmware.svg?v=20261116u", cap: { cs: "Hlavní architektura firmwaru (2× Exciter + 8× Resonator)", en: "Main firmware architecture (2× Exciter + 8× Resonator)" } },
      { src: "assets/diagrams/elements-v04-exciter-classic.svg?v=20261116u", cap: { cs: "Exciter Mode 1 // CLASSIC — Bow · Blow · Strike", en: "Exciter Mode 1 // CLASSIC — Bow · Blow · Strike" } },
      { src: "assets/diagrams/elements-v04-exciter-industrial.svg?v=20261116u", cap: { cs: "Exciter Mode 2 // INDUSTRIAL — Friction · Burst · Samples", en: "Exciter Mode 2 // INDUSTRIAL — Friction · Burst · Samples" } },
      { src: "assets/diagrams/elements-v04-m0-modal.svg?v=20261116u", cap: { cs: "Resonator 0 // MODAL — 64 Zero-Delay Feedback SVF", en: "Resonator 0 // MODAL — 64 Zero-Delay Feedback SVF" } },
      { src: "assets/diagrams/elements-v04-m1-string.svg?v=20261116u", cap: { cs: "Resonator 1 // STRING — Nonlinear Dispersive Waveguide", en: "Resonator 1 // STRING — Nonlinear Dispersive Waveguide" } },
      { src: "assets/diagrams/elements-v04-m2-strings.svg?v=20261116u", cap: { cs: "Resonator 2 // STRINGS — 5-Voice Sympathetic Cluster", en: "Resonator 2 // STRINGS — 5-Voice Sympathetic Cluster" } },
      { src: "assets/diagrams/elements-v04-m3-sympathetic.svg?v=20261116u", cap: { cs: "Resonator 3 // RINGS — Quantized Sympathetic Chords", en: "Resonator 3 // RINGS — Quantized Sympathetic Chords" } },
      { src: "assets/diagrams/elements-v04-m4-string-rev.svg?v=20261116u", cap: { cs: "Resonator 4 // RINGS — Inharmonic String & Reverb", en: "Resonator 4 // RINGS — Inharmonic String & Reverb" } },
      { src: "assets/diagrams/elements-v04-m5-fm.svg?v=20261116u", cap: { cs: "Resonator 5 // RINGS — 2-Operator FM Voice & Feedback", en: "Resonator 5 // RINGS — 2-Operator FM Voice & Feedback" } },
      { src: "assets/diagrams/elements-v04-m6-solina.svg?v=20261116u", cap: { cs: "Resonator 6 // RINGS — Polyphonic Solina String Synth", en: "Resonator 6 // RINGS — Polyphonic Solina String Synth" } },
      { src: "assets/diagrams/elements-v04-m7-clouds.svg?v=20261116u", cap: { cs: "Resonator 7 // KAMMERL — Spectral Clouds & Reverb", en: "Resonator 7 // KAMMERL — Spectral Clouds & Reverb" } },
    ],
    related: ["the-in", "the-out", "cue-frames"],
  },

  /* ------------------------------------------------------- SVĚTLO */
  "dmx-out": {
    division: "LUX",
    name: "DMX_OUT",
    hp: "12 HP",
    serial: "DD-LX04 // LUX.4CH.DMX512",
    status: { cs: "Schéma + PCB + panel", en: "Schematic + PCB + panel" },
    image: "assets/products/dmx-out/preview.png",
    tagline: {
      cs: "Z napětí světlo. 512 kanálů jedním XLR.",
      en: "Voltage into light. 512 channels over one XLR.",
    },
    short: {
      cs: "Srdce světelného racku — převádí CV z patchbayů po síťových kabelech na DMX512.",
      en: "Heart of the lighting rack — turns CV from patchbays over network cables into DMX512.",
    },
    long: {
      cs: [
        "DMX_OUT propojuje modulární syntezátor se scénickým osvětlením. Cokoli, co v racku vytváří napětí — LFO, obálky, sekvencery, náhodné generátory — může přímo řídit stmívače, barvy a pohyb hlav.",
        "Aby rack nezarostl desítkami kabelů, CV se nesbírá jacky na tomto modulu, ale v samostatných Patchbay modulech (8 až 128 kanálů). Ty se k DMX_OUT připojují obyčejným stíněným síťovým kabelem. Čtyři porty znamenají až celé DMX univerzum — 512 kanálů.",
        "Každý port má vlastní DIP přepínač s počáteční DMX adresou, takže adresování zvládneš bez počítače i přímo na place. Poslední páčka zapíná testovací obrazec pro rychlou kontrolu světel. LED indikaci lze ztlumit pro tmavé jeviště.",
      ],
      en: [
        "DMX_OUT connects a modular synthesizer to stage lighting. Anything that produces voltage in the rack — LFOs, envelopes, sequencers, random generators — can directly drive dimmers, colours and moving heads.",
        "To keep the rack free of dozens of cables, CV isn't collected on this module but in separate Patchbay modules (8 to 128 channels), which connect to DMX_OUT with an ordinary shielded network cable. Four ports mean up to a full DMX universe — 512 channels.",
        "Each port has its own DIP switch for the DMX start address, so patching works without a computer, right on site. The last switch enables a test pattern for a quick fixture check. LED indicators can be dimmed for a dark stage.",
      ],
    },
    useCases: [
      {
        t: { cs: "Světlo hraje s hudbou", en: "Light plays with the music" },
        d: {
          cs: "Stejná obálka, která otevírá filtr, rozsvítí reflektor — světlo a zvuk z jednoho zdroje.",
          en: "The same envelope that opens a filter fires a spotlight — light and sound from one source.",
        },
      },
      {
        t: { cs: "Divadelní inscenace", en: "Theatre productions" },
        d: {
          cs: "Pomalé přechody, dýchající světlo a náhodné změny řízené analogově místo cue listu.",
          en: "Slow fades, breathing light and random changes driven by voltage instead of a cue list.",
        },
      },
      {
        t: { cs: "Klub a festival", en: "Club and festival" },
        d: {
          cs: "Modulár jako světelný pult pro VJ/LJ — LFO synchronizované s tempem řídí celé rampy.",
          en: "The modular as a lighting desk for VJ/LJ — tempo-synced LFOs drive entire trusses.",
        },
      },
      {
        t: { cs: "Instalace", en: "Installations" },
        d: {
          cs: "Dlouhodobé site-specific instalace, kde se světlo řídí senzory převedenými na CV.",
          en: "Long-running site-specific installations where light follows sensors converted to CV.",
        },
      },
    ],
    controls: {
      cs: [
        "XLR-3 — DMX512 výstup + stavová LED",
        "4× LINK PORT (RJ45) s LED aktivity",
        "4× DIP přepínač 9 bitů — 8 bitů adresa, 9. bit TEST",
        "Přepínač jasu LED (plný / tlumený)",
      ],
      en: [
        "XLR-3 — DMX512 output + status LED",
        "4× LINK PORT (RJ45) with activity LEDs",
        "4× 9-bit DIP switch — 8 bits address, 9th bit TEST",
        "LED brightness switch (full / dimmed)",
      ],
    },
    specs: [
      S("Šířka / výška", "Width / height", "12 HP / 3U"),
      S("Výstup", "Output", { cs: "DMX512-A (RS-485), XLR-3", en: "DMX512-A (RS-485), XLR-3" }, "doc", true),
      S("Přenosová rychlost", "Data rate", "250 kbit/s", "doc"),
      S("Počet kanálů", "Channel count", { cs: "až 512 (1 univerzum)", en: "up to 512 (1 universe)" }, "doc", true),
      S("Obnovovací frekvence", "Refresh rate", { cs: "≈ 44 Hz při 512 kanálech", en: "≈ 44 Hz at 512 channels" }, "doc"),
      S("Vstupy", "Inputs", { cs: "4× RJ45 link port (Patchbay / CUE_FRAMES)", en: "4× RJ45 link port (Patchbay / CUE_FRAMES)" }, "doc", true),
      S("Rozlišení snímání CV", "CV sampling resolution", { cs: "12 bit, s oversamplingem až 16 bit", en: "12 bit, up to 16 bit with oversampling" }, "doc", true),
      S("Vstupní impedance CV (Patchbay)", "CV input impedance (Patchbay)", "100 kΩ", "doc"),
      S("Šířka pásma CV (Patchbay)", "CV bandwidth (Patchbay)", "≈ 1,46 kHz (−3 dB)", "doc"),
      S("Adresování", "Addressing", { cs: "4× 9bit DIP — start. adresa na port + TEST", en: "4× 9-bit DIP — start address per port + TEST" }),
      S("Kabeláž", "Cabling", { cs: "stíněný Cat5e / Cat6", en: "shielded Cat5e / Cat6" }),
      S("Napájení", "Power", { cs: "pouze +12 V (−12 V nevyužito)", en: "+12 V only (−12 V unused)" }, "doc", true),
      S("Odběr +12 V", "Current draw +12 V", "—", "tbd", true),
    ],
    gallery: [
      { src: "assets/products/dmx-out/preview.png", cap: { cs: "Čelní panel — náhled", en: "Front panel — preview" } },
      { src: "assets/products/dmx-out/frontpanel_3d.png", cap: { cs: "Panel — 3D render", en: "Panel — 3D render" } },
      { src: "assets/products/dmx-out/pcb_render_hi.png", cap: { cs: "Osazená deska — 3D render", en: "Assembled PCB — 3D render" } },
      { src: "assets/diagrams/dmx-out-pipeline.svg", cap: { cs: "Převod CV na DMX512-A", en: "CV-to-DMX512-A pipeline" } },
    ],
    related: ["cue-frames", "lux-core"],
  },

  "lux-core": {
    division: "LUX",
    name: "LUX_CORE",
    hp: "14 HP",
    serial: "DD-LC01 // LUX-CORE-H7",
    status: { cs: "Koncept + panel", en: "Concept + panel" },
    image: "assets/products/lux-core/preview.png",
    tagline: {
      cs: "Looper pro světlo. Nahraj, zpomal, otoč.",
      en: "A looper for light. Record, slow down, reverse.",
    },
    short: {
      cs: "Nahrává DMX pohyby, zpomaluje a obrací čas, prolíná scény a rozumí typům svítidel.",
      en: "Records DMX movement, slows and reverses time, blends scenes and understands fixture types.",
    },
    long: {
      cs: [
        "LUX_CORE pracuje se světlem jako páskový looper se zvukem. Nahraješ pohyb hlav, barevné přechody nebo stroboskop a pak smyčku zpomalíš, zrychlíš, zastavíš nebo pustíš pozpátku — ručně i napětím z racku.",
        "Klíčem je knihovna profilů svítidel. Modul ví, který kanál je stmívač, který 16bitový Pan/Tilt a který gobo kolo. Při zpomalení proto pohyb hlavy plynule interpoluje, zatímco gobo a barevné kolo přeskakují čistě mezi polohami a nezastaví se mezi nimi.",
        "Vstupy přijímá současně z Patchbay modulů (RJ45) i z DMX pultu nebo DMX_OUT (XLR) a umí je slučovat — například nahranou trajektorii doplnit živým LFO z moduláru.",
      ],
      en: [
        "LUX_CORE treats light the way a tape looper treats sound. Record moving-head paths, colour fades or strobe bursts, then slow the loop down, speed it up, freeze it or play it backwards — by hand or with voltage from the rack.",
        "The key is a fixture-profile library. The module knows which channel is a dimmer, which is 16-bit Pan/Tilt and which is a gobo wheel. When slowed down, head movement is smoothly interpolated while gobo and colour wheels snap cleanly between slots instead of stopping halfway.",
        "It takes input from Patchbay modules (RJ45) and from a DMX desk or DMX_OUT (XLR) at the same time, and merges them — for example adding a live LFO from the modular on top of a recorded path.",
      ],
    },
    useCases: [
      {
        t: { cs: "Choreografie hlav", en: "Moving-head choreography" },
        d: {
          cs: "Nahraj trajektorii jednou, pak ji vrstvi, zpomaluj a rozkládej vlnou přes více svítidel.",
          en: "Record a path once, then layer it, slow it and fan it out as a wave across fixtures.",
        },
      },
      {
        t: { cs: "Zpomalený čas", en: "Slow motion" },
        d: {
          cs: "Plynulé zpomalení až na desetinu rychlosti bez schodů — vhodné pro taneční a divadelní scény.",
          en: "Smooth slow-down to a tenth of the speed without stepping — great for dance and theatre.",
        },
      },
      {
        t: { cs: "Rytmický stroboskop", en: "Rhythmic strobe" },
        d: {
          cs: "Zkrácení smyčky na desítky milisekund a synchronizace s clockem z racku.",
          en: "Shrink the loop to tens of milliseconds and sync it to the rack clock.",
        },
      },
      {
        t: { cs: "Slučování zdrojů", en: "Merging sources" },
        d: {
          cs: "DMX z pultu + CV z moduláru v jednom výstupu (HTP, LTP, prolínání, maskování).",
          en: "DMX from a desk + CV from the modular in one output (HTP, LTP, crossfade, masking).",
        },
      },
    ],
    controls: {
      cs: [
        "OLED, enkodér SELECT, tlačítka PROF a PATCH, slot microSD",
        "SPEED (střed), START, LENGTH",
        "REC, PLAY, DUB, CLR + LED smyčky",
        "CV matice 3×3: CLK, REC, SPEED, START, LEN, BLEND, DIM CV, FIXT CV, EOC OUT",
        "PATCH RJ45 IN, DMX IN (XLR), DMX OUT (XLR)",
      ],
      en: [
        "OLED, SELECT encoder, PROF and PATCH buttons, microSD slot",
        "SPEED (center), START, LENGTH",
        "REC, PLAY, DUB, CLR + loop LED",
        "3×3 CV matrix: CLK, REC, SPEED, START, LEN, BLEND, DIM CV, FIXT CV, EOC OUT",
        "PATCH RJ45 IN, DMX IN (XLR), DMX OUT (XLR)",
      ],
    },
    specs: [
      S("Šířka / výška", "Width / height", "14 HP (70,9 mm) / 3U"),
      S("DMX vstup / výstup", "DMX in / out", { cs: "XLR-3, galvanicky oddělené", en: "XLR-3, galvanically isolated" }, "doc", true),
      S("DMX univerzum", "DMX universe", { cs: "512 kanálů, 250 kbit/s", en: "512 channels, 250 kbit/s" }, "doc"),
      S("Patchbay vstup", "Patchbay input", "RJ45 (Patchbay / CUE_FRAMES)"),
      S("Rozlišení záznamu", "Recording resolution", { cs: "44 / 88 snímků/s", en: "44 / 88 frames/s" }, "doc", true),
      S("Interní interpolace", "Internal interpolation", "200 Hz, 16 bit Pan/Tilt", "doc", true),
      S("Rychlost přehrávání", "Playback speed", "−200 % … 0 % (freeze) … +200 %", "doc", true),
      S("Délka smyčky", "Loop length", "25 ms – 120 s", "doc", true),
      S("Prolnutí smyčky", "Loop crossfade", "0 – 500 ms", "doc"),
      S("Režimy slučování", "Merge modes", "HTP, LTP, Blend CV, Additive, Mask"),
      S("CV vstupy", "CV inputs", "8× ±10 V", "doc"),
      S("Vstupní impedance CV", "CV input impedance", "—", "tbd"),
      S("EOC výstup", "EOC output", "trigger +5 V"),
      S("Displej", "Display", "OLED 1,54″, 128 × 64"),
      S("Úložiště", "Storage", { cs: "microSD — profily svítidel, banky smyček", en: "microSD — fixture profiles, loop banks" }),
      S("Odběr +12 V / −12 V", "Current draw +12 V / −12 V", "—", "tbd", true),
    ],
    gallery: [
      { src: "assets/products/lux-core/preview.png", cap: { cs: "Čelní panel — náhled", en: "Front panel — preview" } },
      { src: "assets/diagrams/lux-core-looper.svg", cap: { cs: "Světelný looper & profily svítidel", en: "Light looper & fixture profiles" } },
    ],
    related: ["dmx-out", "cue-frames"],
  },

  "cue-frames": {
    division: "LUX",
    divisions: ["LUX", "AUD"],
    name: "CUE_FRAMES",
    hp: "20 HP",
    serial: "DD-CF01 // 8CH.DAC",
    status: { cs: "Schéma + panel (LUX / AUD)", en: "Schematic + panel (LUX / AUD)" },
    image: "assets/products/cue-frames/preview.png?v=20261116o",
    imageByDiv: {
      LUX: "assets/products/cue-frames/preview.png?v=20261116o",
      AUD: "assets/products/cue-frames/preview_black.png?v=20261116o",
      VID: "assets/products/cue-frames/preview.png?v=20261116o",
    },
    tagline: {
      cs: "Osm knobů. Jeden firmware pro světlo, zvuk i video.",
      en: "Eight knobs. One firmware for light, sound, and video.",
    },
    short: {
      cs: "64 scén s plynulým morfem, 8× LFO, 8× VCO, krokový sekvencer i generátor chaosu — stejný hardware pro světlo, zvuk i video.",
      en: "64 morphing scenes, 8× LFO, 8× VCO, step sequencer, and chaos generator — same hardware for light, sound, and video.",
    },
    long: {
      cs: [
        "CUE_FRAMES je univerzální 8kanálový CV/audio modul se stejným hardwarem i firmwarem pro divize Světlo i Zvuk. Nový čelní panel přidává tlačítka MODE a OPT, vstup V/OCT a popis všech 8 režimů přímo pod osmi LED diodami (FRAMES, VCO, LFO, SEQ, CLK.LFO, TIDES 2, CHAOS, BOUNCE).",
        "Výběr režimu: stiskem/držením tlačítka MODE se hlavním velkým knobem FRAME vybere jeden z 8 režimů (indikovaný příslušnou LED). V režimu VCO určuje hlavní knob FRAME množství rozladění (detune), v ostatních režimech morf scén, fázový posun nebo energii chaosu.",
        "Nastavení OPT: tlačítkem OPT se upravují parametry přímo osmi knoby CH 1–8. Rozložení je napříč režimy sjednocené pro rychlou orientaci: CH 1 = tvar vlny/křivky, CH 2 = rychlost/oktáva/sklon, CH 3 = rozptyl/fáze/detune, CH 4 = fold/swing/warp, CH 5 = kvantizace/sync/zámek, CH 6 = glide/vyhlazení/tilt, CH 7 = hloubka/FM/modulace, CH 8 = rozsah a polarita výstupu. Všech 8 kanálů lze navíc poslat po RJ45 přímo do DMX_OUT.",
      ],
      en: [
        "CUE_FRAMES is a universal 8-channel CV/audio controller sharing the same hardware and firmware across Light and Sound. The updated front panel adds MODE and OPT buttons, a calibrated V/OCT input, and silkscreen labels for all 8 modes directly beneath the 8 LEDs (FRAMES, VCO, LFO, SEQ, CLK.LFO, TIDES 2, CHAOS, BOUNCE).",
        "Mode selection: using the MODE button together with the main FRAME knob selects one of the 8 modes shown on the 8 LEDs. In VCO mode the main FRAME knob controls detune spread; in other modes it controls scene morphing, phase spread, or chaos energy.",
        "OPT parameters: using the OPT button maps each of the 8 CH 1–8 knobs individually. Controls follow a consistent layout across modes: CH 1 = Wave/Curve, CH 2 = Rate/Octave/Slope, CH 3 = Spread/Phase/Detune, CH 4 = Fold/Swing/Warp, CH 5 = Quantize/Sync/Lock, CH 6 = Glide/Smooth/Tilt, CH 7 = Depth/FM/Mod, CH 8 = Output Range/Polarity. All 8 channels also stream over RJ45 straight into DMX_OUT.",
      ],
    },
    useCases: [
      {
        t: { cs: "8× VCO s V/OCT & Detune", en: "8× VCO with V/OCT & Detune" },
        d: {
          cs: "Osm hlasů laděných přes vstup V/OCT; tlačítko OPT volí z 8 průběhů vln a hlavní knob FRAME plynule dávkuje rozladění.",
          en: "Eight voices tracked via V/OCT; OPT selects from 8 waveforms while the main FRAME knob dials in detune spread.",
        },
      },
      {
        t: { cs: "Tides 2 (8× Tidal Slope)", en: "Tides 2 (8× Tidal Slope)" },
        d: {
          cs: "Osm vzájemně provázaných funkčních generátorů v LFO i audio pásmu (V/OCT); knob FRAME posouvá fázi, poměry frekvencí nebo tvar vlny.",
          en: "Eight coupled function generators at LFO or audio rates (V/OCT); FRAME shifts phase, frequency ratios, or waveshape.",
        },
      },
      {
        t: { cs: "Bouncing Ball, Turing & Chaos", en: "Bouncing Ball, Turing & Chaos" },
        d: {
          cs: "Fyzikální odrážení míčku s gravitací (skvělé pro ratchety i stroboskopická světla), Turing Machine a chaotické atraktory.",
          en: "Gravity-bounce physics (great for ratchets and stage strobes), Turing Machine loops, and chaotic attractors.",
        },
      },
      {
        t: { cs: "Poly-LFO, Sekvencer & DMX", en: "Poly-LFO, Sequencer & DMX" },
        d: {
          cs: "Clocked LFO s 8 rytmickými poměry, 8kanálový sekvencer i 64 uložených světelných scén posílaných po RJ45 do DMX_OUT.",
          en: "Clocked LFO with 8 rhythmic ratios, 8-channel sequencer, and 64 stored lighting scenes sent over RJ45 to DMX_OUT.",
        },
      },
    ],
    controls: {
      cs: [
        "CH 1–8 — potenciometry s 8 stavovými LED (indikace módů 1–8 a podvoleb 1–8)",
        "FRAME — velký knob s RGB LED (morf scén / rozladění VCO / fázový posun / chaos)",
        "ADD / DEL — uložení a smazání scény, LED KEY",
        "MODE / OPT — dvě tlačítka pro přepínání 8 režimů a 8 podvoleb nastavení",
        "MODULATION — atenuverter",
        "FRAME CV IN, V/OCT IN, STEP OUT, TRIG IN",
        "OUT 1–8 — 8× CV / audio výstup + RJ45 link do DMX_OUT",
      ],
      en: [
        "CH 1–8 — potentiometers with 8 status LEDs (indicating modes 1–8 and sub-options 1–8)",
        "FRAME — large knob with RGB LED (scene morph / VCO detune / phase spread / chaos)",
        "ADD / DEL — store and delete scene, KEY LED",
        "MODE / OPT — two buttons cycling 8 modes and 8 sub-settings",
        "MODULATION — attenuverter",
        "FRAME CV IN, V/OCT IN, STEP OUT, TRIG IN",
        "OUT 1–8 — 8× CV / audio outputs + RJ45 link to DMX_OUT",
      ],
    },
    specs: [
      S("Šířka / výška", "Width / height", "20 HP (101,4 mm) / 3U"),
      S("CV / Audio výstupy", "CV / Audio outputs", "8×", "doc", true),
      S("Rozlišení D/A", "D/A resolution", "12 bit", "doc", true),
      S("Výstupní rozsah", "Output range", { cs: "0 – 10 V (varianta 0 – 5 V)", en: "0 – 10 V (0 – 5 V option)" }, "doc", true),
      S("Výstupní impedance", "Output impedance", "1 kΩ", "doc", true),
      S("Režimy (tlačítko MODE)", "Modes (MODE button)", { cs: "8 režimů na 8 LED (Frames, VCO, LFO, Seq, Clocked LFO, Tides 2, Chaos/Turing, Bouncing Ball)", en: "8 modes on 8 LEDs (Frames, VCO, LFO, Seq, Clocked LFO, Tides 2, Chaos/Turing, Bouncing Ball)" }, "doc", true),
      S("Nastavení (tlačítko OPT)", "Settings (OPT button)", { cs: "8 podvoleb v každém režimu (průběhy vln, poměry, směry, křivky)", en: "8 sub-options per mode (waveforms, ratios, directions, curves)" }, "doc", true),
      S("Ladění & vstupy", "Pitch & inputs", { cs: "V/OCT (1 V/Oct), FRAME CV IN, TRIG IN, STEP OUT", en: "V/OCT (1 V/Oct), FRAME CV IN, TRIG IN, STEP OUT" }, "doc", true),
      S("Volitelný výstup", "Optional output", { cs: "RJ45 přímo do DMX_OUT", en: "RJ45 direct to DMX_OUT" }),
      S("Odběr +12 V / −12 V", "Current draw +12 V / −12 V", "—", "tbd", true),
    ],
    credit: {
      cs: "Vychází z Mutable Instruments Frames (Émilie Gillet, CC-BY-SA 3.0).",
      en: "Based on Mutable Instruments Frames (Émilie Gillet, CC-BY-SA 3.0).",
    },
    gallery: [
      { src: "assets/products/cue-frames/preview.png?v=20261116o", cap: { cs: "Hlavní výrobní panel — LUX (bílý)", en: "Main production panel — LUX (white)" } },
      { src: "assets/products/cue-frames/preview_black.png?v=20261116o", cap: { cs: "Hlavní výrobní panel — AUD (černý)", en: "Main production panel — AUD (black)" } },
      { src: "assets/diagrams/cue-frames-firmware.svg?v=20261116s", cap: { cs: "Hlavní architektura firmwaru (8 módů)", en: "Main 8-mode firmware architecture" } },
      { src: "assets/products/cue-frames/modes/mode1_frames.png?v=20261116o", cap: { cs: "Režim 1 // FRAMES (OPT na CH 1–8)", en: "Mode 1 // FRAMES (OPT on CH 1–8)" } },
      { src: "assets/products/cue-frames/modes/mode2_vco.png?v=20261116o", cap: { cs: "Režim 2 // VCO (OPT na CH 1–8)", en: "Mode 2 // VCO (OPT on CH 1–8)" } },
      { src: "assets/products/cue-frames/modes/mode3_lfo.png?v=20261116o", cap: { cs: "Režim 3 // LFO (OPT na CH 1–8)", en: "Mode 3 // LFO (OPT on CH 1–8)" } },
      { src: "assets/products/cue-frames/modes/mode4_seq.png?v=20261116o", cap: { cs: "Režim 4 // SEQ (OPT na CH 1–8)", en: "Mode 4 // SEQ (OPT on CH 1–8)" } },
      { src: "assets/products/cue-frames/modes/mode5_clk_lfo.png?v=20261116o", cap: { cs: "Režim 5 // CLK.LFO (OPT na CH 1–8)", en: "Mode 5 // CLK.LFO (OPT on CH 1–8)" } },
      { src: "assets/products/cue-frames/modes/mode6_tides_2.png?v=20261116o", cap: { cs: "Režim 6 // TIDES 2 (OPT na CH 1–8)", en: "Mode 6 // TIDES 2 (OPT on CH 1–8)" } },
      { src: "assets/products/cue-frames/modes/mode7_chaos.png?v=20261116o", cap: { cs: "Režim 7 // CHAOS (OPT na CH 1–8)", en: "Mode 7 // CHAOS (OPT on CH 1–8)" } },
      { src: "assets/products/cue-frames/modes/mode8_bounce.png?v=20261116o", cap: { cs: "Režim 8 // BOUNCE (OPT na CH 1–8)", en: "Mode 8 // BOUNCE (OPT on CH 1–8)" } },
      { src: "assets/diagrams/cue-frames-modes.svg?v=20261116o", cap: { cs: "Přehled 8 režimů (MODE) & OPT matice", en: "8 modes (MODE) & OPT matrix overview" } },
    ],
    galleryByDiv: {
      LUX: [
        { src: "assets/products/cue-frames/preview.png?v=20261116o", cap: { cs: "Hlavní výrobní panel — LUX (bílý)", en: "Main production panel — LUX (white)" } },
        { src: "assets/diagrams/cue-frames-firmware.svg?v=20261116t", cap: { cs: "Hlavní architektura firmwaru (8 módů)", en: "Main 8-mode firmware architecture" } },
        { src: "assets/products/cue-frames/modes/mode1_frames.png?v=20261116o", cap: { cs: "Režim 1 // FRAMES (OPT na CH 1–8)", en: "Mode 1 // FRAMES (OPT on CH 1–8)" } },
        { src: "assets/diagrams/cue-frames-m1-frames.svg?v=20261116t", cap: { cs: "Mode 1 // FRAMES — Hlavní funkce (Keyframes)", en: "Mode 1 // FRAMES — Core Keyframe Function" } },
        { src: "assets/diagrams/cue-frames-modes.svg?v=20261116o", cap: { cs: "Přehled 8 režimů (MODE) & OPT matice", en: "8 modes (MODE) & OPT matrix overview" } },
      ],
      AUD: [
        { src: "assets/products/cue-frames/preview_black.png?v=20261116o", cap: { cs: "Hlavní výrobní panel — AUD (černý)", en: "Main production panel — AUD (black)" } },
        { src: "assets/diagrams/cue-frames-firmware.svg?v=20261116t", cap: { cs: "Hlavní architektura firmwaru (8 módů)", en: "Main 8-mode firmware architecture" } },
        { src: "assets/diagrams/cue-frames-m1-frames.svg?v=20261116t", cap: { cs: "Mode 1 // FRAMES — Hlavní funkce (Keyframes)", en: "Mode 1 // FRAMES — Core Keyframe Function" } },
        { src: "assets/products/cue-frames/modes/mode2_vco.png?v=20261116o", cap: { cs: "Režim 2 // VCO (panel)", en: "Mode 2 // VCO (panel)" } },
        { src: "assets/diagrams/cue-frames-m2-vco.svg?v=20261116t", cap: { cs: "Mode 2 // 8-Voice Detuned Oscillator Bank", en: "Mode 2 // 8-Voice Detuned Oscillator Bank" } },
        { src: "assets/products/cue-frames/modes/mode3_lfo.png?v=20261116o", cap: { cs: "Režim 3 // LFO (panel)", en: "Mode 3 // LFO (panel)" } },
        { src: "assets/diagrams/cue-frames-m3-lfo.svg?v=20261116t", cap: { cs: "Mode 3 // 8-Channel Free Poly-LFO", en: "Mode 3 // 8-Channel Free Poly-LFO" } },
        { src: "assets/products/cue-frames/modes/mode4_seq.png?v=20261116o", cap: { cs: "Režim 4 // SEQ (panel)", en: "Mode 4 // SEQ (panel)" } },
        { src: "assets/diagrams/cue-frames-m4-seq.svg?v=20261116t", cap: { cs: "Mode 4 // 8-Channel Step & Motion Sequencer", en: "Mode 4 // 8-Channel Step & Motion Sequencer" } },
        { src: "assets/products/cue-frames/modes/mode5_clk_lfo.png?v=20261116o", cap: { cs: "Režim 5 // CLK.LFO (panel)", en: "Mode 5 // CLK.LFO (panel)" } },
        { src: "assets/diagrams/cue-frames-m5-clk-lfo.svg?v=20261116t", cap: { cs: "Mode 5 // Clocked Multi-Division LFO", en: "Mode 5 // Clocked Multi-Division LFO" } },
        { src: "assets/products/cue-frames/modes/mode6_tides_2.png?v=20261116o", cap: { cs: "Režim 6 // TIDES 2 (panel)", en: "Mode 6 // TIDES 2 (panel)" } },
        { src: "assets/diagrams/cue-frames-m6-tides2.svg?v=20261116t", cap: { cs: "Mode 6 // TIDES 2 — 8-Channel Tidal Slope Generator", en: "Mode 6 // TIDES 2 — 8-Channel Tidal Slope Generator" } },
        { src: "assets/products/cue-frames/modes/mode7_chaos.png?v=20261116o", cap: { cs: "Režim 7 // CHAOS (panel)", en: "Mode 7 // CHAOS (panel)" } },
        { src: "assets/diagrams/cue-frames-m7-chaos.svg?v=20261116t", cap: { cs: "Mode 7 // Lorenz Attractor & Turing Loop", en: "Mode 7 // Lorenz Attractor & Turing Loop" } },
        { src: "assets/products/cue-frames/modes/mode8_bounce.png?v=20261116o", cap: { cs: "Režim 8 // BOUNCE (panel)", en: "Mode 8 // BOUNCE (panel)" } },
        { src: "assets/diagrams/cue-frames-m8-bounce.svg?v=20261116t", cap: { cs: "Mode 8 // Gravity Bouncing Ball & ByteBeat", en: "Mode 8 // Gravity Bouncing Ball & ByteBeat" } },
        { src: "assets/diagrams/cue-frames-modes.svg?v=20261116o", cap: { cs: "Přehled 8 režimů (MODE) & OPT matice", en: "8 modes (MODE) & OPT matrix overview" } },
      ],
    },
    related: ["dmx-out", "lux-core", "the-in", "the-out"],
  },
};

const PEOPLE = [
  {
    name: "Vojtěch Divoký",
    role: {
      cs: "Spoluzakladatel DECØY DEVICES · zvukař",
      en: "Co-founder, DECØY DEVICES · sound engineer",
    },
    handle: "@divokyvojta",
    url: "https://www.instagram.com/divokyvojta/",
  },
  {
    name: "Ladislav Mareš",
    role: {
      cs: "Spoluzakladatel DECØY DEVICES · hardware & vývoj · Synthetic Sex Drive",
      en: "Co-founder, DECØY DEVICES · hardware & dev · Synthetic Sex Drive",
    },
    handle: "@syntheticsexdrive",
    url: "https://www.instagram.com/syntheticsexdrive/",
  },
  {
    name: "Adam Veit",
    role: {
      cs: `Zakladatel ${TS} & DHOGH · osvětlovač`,
      en: `Founder, ${TS} & DHOGH · lighting designer`,
    },
    handle: "@adam_veit",
    url: "https://www.instagram.com/adam_veit/",
  },
];

function getLang() {
  return localStorage.getItem("decoy_lang") || "cs";
}

function setLang(lang) {
  localStorage.setItem("decoy_lang", lang);
}

function srcLabel(s, lang) {
  const d = I18N[lang];
  return s === "ds" ? d.src_ds : s === "tbd" ? d.src_tbd : d.src_doc;
}

function getSectionProductNav(id, divKey) {
  const p = PRODUCTS[id];
  if (!p) return null;
  const activeDiv = divKey || p.division;
  const sameDiv = Object.keys(PRODUCTS).filter((k) => {
    const prod = PRODUCTS[k];
    return prod.divisions ? prod.divisions.includes(activeDiv) : prod.division === activeDiv;
  });
  const list = sameDiv.length > 1 ? sameDiv : Object.keys(PRODUCTS);
  const index = list.indexOf(id);
  const safeIndex = index >= 0 ? index : 0;
  const prevId = list[(safeIndex - 1 + list.length) % list.length];
  const nextId = list[(safeIndex + 1) % list.length];
  return {
    list,
    index: safeIndex,
    total: list.length,
    prevId,
    nextId,
    prev: PRODUCTS[prevId],
    next: PRODUCTS[nextId],
  };
}

/* =========================================================
   PATIČKA VOLNĚ INSPIROVANÁ SPODKEM MODULU (DECØY DEVICES)
   ========================================================= */
function renderModuleFooterHTML(divKey = "AUD", serialLeft = "AUD // 01", serialRight = "TEATRO\\\\\\SVJÖTLO") {
  const motifClass = divKey === "LUX" ? "mf-motif-lux" : divKey === "VID" ? "mf-motif-vid" : "mf-motif-aud";

  // Jemný minimalistický čárový akcent
  const weights = [3, 1.5, 5, 1.5, 2, 4, 1.5, 3, 5, 1.5, 3, 2, 4, 1.5, 3];
  let bx = 0;
  const rects = weights
    .map((w) => {
      const r = `<rect x="${bx.toFixed(1)}" y="0" width="${w.toFixed(1)}" height="10" fill="currentColor"/>`;
      bx += w + 2.8;
      return r;
    })
    .join("");

  return `
    <div class="mod-footer">
      <div class="mf-accent-strip ${motifClass}" aria-hidden="true">
        <span class="mf-accent-line"></span>
        <span class="mf-accent-core"></span>
        <span class="mf-accent-line"></span>
      </div>

      <div class="mf-meta-row">
        <div class="mf-left-group">
          <span class="mf-reg">+</span>
          <span class="mf-serial-left">${serialLeft}</span>
        </div>

        <div class="mf-brand-group">
          <span class="mf-brand-text">DECØY DEVICES</span>
        </div>

        <div class="mf-right-group">
          <svg class="mf-barcode-svg" viewBox="0 0 ${bx.toFixed(1)} 10" height="10" aria-hidden="true">
            ${rects}
          </svg>
          <span class="mf-serial-right">${serialRight}</span>
          <span class="mf-reg">+</span>
        </div>
      </div>
    </div>
  `;
}

