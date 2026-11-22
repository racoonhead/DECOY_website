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
    sec_desktop: "DESKTOP",
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
    sec_num_desktop: "02 // DESKTOP",
    sec_num_pedals: "03 // PEDÁLY",
    sec_num_blog: "04 // POZNÁMKY & DENÍK",
    sec_num_teatro: "05 // KOLEKTIV & SCÉNA",
    sec_num_merch: "06 // OBLEČENÍ & OBJEKTY",
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
    ts_tab_design: "STAGE · SOUND · LIGHT",
    ts_tab_rental: "RENTÁL",
    ts_tab_custom: "ZAKÁZKOVÁ VÝROBA",
    ts_tab_events: "AKCE & TÝM",
  },
  en: {
    div_sound: "SOUND",
    div_light: "LIGHT",
    div_video: "VIDEO",
    enter_section: "ENTER >>>",
    sec_desktop: "DESKTOP",
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
    sec_num_desktop: "02 // DESKTOP",
    sec_num_pedals: "03 // STOMPBOXES",
    sec_num_blog: "04 // NOTES & JOURNAL",
    sec_num_teatro: "05 // COLLECTIVE & STAGE",
    sec_num_merch: "06 // APPAREL & OBJECTS",
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
    ts_tab_design: "STAGE · SOUND · LIGHT",
    ts_tab_rental: "RENTAL",
    ts_tab_custom: "CUSTOM FABRICATION",
    ts_tab_events: "EVENTS & CREW",
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
    image: "assets/products/the-in/preview.png?v=20261117q",
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
        "MIDI IN — 3,5 mm TRS + posuvný přepínač Type A / B",
        "USB-C, slot microSD, OLED, enkodér SELECT, tlačítka MENU a CAL",
      ],
      en: [
        "CH1 MIC/LINE — combo XLR/TRS, GAIN, +48 V, PAD, CLIP LED",
        "CH2 INST/LINE — 6.35 mm TS, GAIN, HI-Z / LINE switch",
        "CH3 / CH4 LINE L/R — 3.5 mm, ATTEN",
        "4× CV IN, 4× GATE, CLK IN, RST IN",
        "MIDI IN — 3.5 mm TRS + Type A / B slide switch",
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
      S("MIDI", "MIDI", { cs: "IN — 3,5 mm TRS (přepínač Type A / B), optoizolované", en: "IN — 3.5 mm TRS (Type A / B slide switch), opto-isolated" }),
      S("USB", "USB", "USB-C, USB 2.0 FS — Audio Class + MIDI"),
      S("Záznam / přehrávání", "Record / playback", "microSD: WAV 24 bit / 48 kHz, .mid, .clk"),
      S("Displej", "Display", "OLED 1,54″, 128 × 64"),
      S("Aktualizace firmwaru", "Firmware update", { cs: "z microSD karty, bez programátoru", en: "via microSD card, no programmer needed" }),
      S("Odběr +12 V / −12 V", "Current draw +12 V / −12 V", "—", "tbd", true),
    ],
    gallery: [
      { src: "assets/products/the-in/preview.png?v=20261117q", cap: { cs: "Čelní panel — náhled", en: "Front panel — preview" } },
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
      cs: "Kompletní 34 HP hlas fyzikálního modelování: Classic & Industrial Exciter, 8 rezonátorů (Modal, String, Sympatické akordy, 2-Op FM, String Synth, Spektrální granulátor), 16bit CV a 24bit/48 kHz audio.",
      en: "Complete 34 HP physical modeling voice: Classic & Industrial Exciters, 8 resonators (Modal, String, Sympathetic Chords, 2-Op FM, String Synth, Spectral Granulator), 16-bit CV, and 24-bit/48 kHz audio.",
    },
    long: {
      cs: [
        "ELEMENTS v0.4 je kompletní 34 HP fyzikálně-modelovací syntezátor na jedné společné desce s dvoubarevným čelním panelem (20 HP černá část Exciter a 14 HP bílá část Resonator). Na rozdíl od subtraktivních syntezátorů nevytváří zvuk klasickými oscilátory, ale fyzikální interakcí zdroje energie (Exciter) a rezonančního tělesa (Resonator). Každý parametr má vlastní CV vstup s atenuvertorem (±8 V) a 16bitovým snímáním bez kvantizačních schodů.",
        "EXCITER 1 — CLASSIC (tlačítko Exciter Model): nabízí trojici průběžných i perkusivních generátorů buzení. BOW generuje třecí stick-slip vlnu přes dvoupólový LP filtr (Bow Level, Timbre od temné po agresivní smyčcovou ostrost). BLOW modeluje turbulentní proudění vzduchu skenující dechová spektra od flétny po píšťalu (Blow Level, Flow, Timbre). STRIKE nabízí perkusivní úder přecházející přes paličky (Soft Felt, Hard Rubber, Wood Stick, Hammer, Brush), trsátka (Plectrum / Pluck) až po odrazové částice (Bouncy Particles) s vlastním Timbre LP filtrem. Společný CONTOUR volí mezi jednorázovou AD obálkou (< 12:00) a drženým smyčcem ASR (> 12:00), spolu se Strength CV a tlačítkem Play.",
        "EXCITER 2 — INDUSTRIAL: přepíná všech 8 potenciometrů levé sekce na syrové průmyslové buzení. FRICTION vytváří kovové tření a drnčení hřebenového filtru (Level, Tone), BURST generuje digitální granulární a bit-crushed šumové shluky s nastavitelnou hustotou a filtrem (Level, Density, Filter) a SAMPLES spouští banku 9 surových průmyslových samplů hit_01–hit_09 s plynulým přelaďováním v rozsahu ±1 oktávy (Level, Sample Select, Pitch).",
        "RESONATOR 0–2 (tlačítko Resonator Model s LED indikací a pamětí): 0. Modal kombinuje 64 paralelních zero-delay feedback SVF filtrů (plynulý morf mezi strunou, trubicí, deskou, membránou a zvonem) spolu s 8 smyčcovými vlnovody a nelineární tabulkou BowTable. 1. String je 2048vzorkový disperzní vlnovod s 2-tap FIR DampingFilter a all-pass filtrem tuhosti StiffnessDelayLine. 2. Strings spojuje 5 paralelních sympatických vlnovodů s plynulým rozkladem intervalů přes knob Geometry (Unison → Oktávy → Kvinty → Trojzvuky).",
        "RESONATOR 3–4 (Sympatické akordy & Reverb struna): 3. Quantized Sympathetic Chords zamyká všech 5 sympatických strun přes parametr Geometry do 8 přesných půltónových akordových tabulek: Octave, Fifth, Sus4, Minor, Min7, Maj7, Maj9 a Fourths. 4. Dispersive String & Reverb posílá neharmonickou tuhou strunu přímo do vestavěného 4-tap all-pass algoritmického reverbu s nastavitelnou šířkou stereo dozvuku L/R.",
        "RESONATOR 5–7 & Easter Egg: 5. 2-Op FM Voice je dvouoperátorový sinusový FM hlas se zpětnou vazbou (−100 % až +100 %) a dvojitou obálkou doznění (Geometry = FM poměr, Brightness = modulační index). 6. Polyphonic String Synth vytváří 12hlasý ansámbl přes 3pásmový formantový filtr, stereo ensemble chorus a reverb. 7. Spectral Granulator je vícepásmová banka náhodně modulovaných rezonančních filtrů s fázově rozostřeným modálním reverbem. Skrytý Easter Egg Ominous Voice přidává duální 2op FM syntézu s 8× převzorkováním, FIR downsamplerem a Spatializerem.",
        "Audio vstupy & výstupní sekce Space: dva nezávislé 10 Vpp vstupy umožňují prohnat externí signál z racku nebo THE IN buď přes obálku a difuzér exciteru (Exciter IN), nebo přímo do tělesa rezonátoru (Resonator IN). Pět makro parametrů (Geometry, Brightness, Damping, Position pro potlačení harmonických uzlů, Space) řídí charakter tělesa a stereo výstup L/R (24 bit / 48 kHz) nabízí buď duální snímání se Space reverbem, nebo rozdělení na čistý Exciter (L) a Resonator (R).",
      ],
      en: [
        "ELEMENTS v0.4 is a complete 34 HP physical-modeling synthesizer on a single motherboard with a two-tone front panel (20 HP black Exciter side and 14 HP white Resonator side). Rather than subtractive oscillators and filters, it models sound as a physical interaction between an energy source (Exciter) and a resonant body (Resonator). Every parameter features a dedicated CV input with attenuverter (±8 V) sampled by 16-bit SAR ADCs with zero stepping.",
        "EXCITER 1 — CLASSIC (Exciter Model button): provides three continuous and percussive excitation engines. BOW produces stick-slip friction routed through a 2-pole LP filter (Bow Level, Timbre from dark rosin to scratchy bow). BLOW scans turbulent airflow spectra from flute to whistle (Blow Level, Flow, Timbre). STRIKE morphs across soft felt mallets, rubber beaters, wooden sticks, hammers, brushes, plectrum plucks, and bouncy particles with a 2-pole LP filter. CONTOUR sweeps from one-shot AD pluck (< 12:00) to sustained ASR bow (> 12:00) alongside Strength CV and Play.",
        "EXCITER 2 — INDUSTRIAL: remaps all 8 left-hand pots to raw industrial excitation. FRICTION generates metal-on-metal scrape and comb feedback (Level, Tone), BURST fires digital granular and bit-crushed noise bursts (Level, Density, Filter), and SAMPLES triggers an onboard bank of 9 raw industrial hits (hit_01–hit_09) with ±1 octave pitch control (Level, Sample Select, Pitch).",
        "RESONATOR 0–2 (Resonator Model button with LED feedback & persistent memory): 0. Modal combines 64 parallel zero-delay feedback SVF band-pass filters (morphing seamlessly across string, tube, plate, membrane, and bell geometries) plus 8 bowed waveguides with nonlinear BowTable. 1. String implements a 2048-sample dispersive waveguide with 2-tap FIR DampingFilter and all-pass StiffnessDelayLine. 2. Strings stacks 5 parallel sympathetic waveguides with continuous Geometry chord spread.",
        "RESONATOR 3–4 (Quantized Chords & Reverb String): 3. Quantized Sympathetic Chords locks all 5 waveguide strings via Geometry across 8 semitone chord tables: Octave, Fifth, Sus4, Minor, Min7, Maj7, Maj9, and Fourths. 4. Dispersive String & Reverb feeds a stiff inharmonic waveguide straight into a 4-tap all-pass algorithmic stereo reverb with adjustable L/R width.",
        "RESONATOR 5–7 & Easter Egg: 5. 2-Op FM Voice builds a 2-operator sine FM carrier/modulator with −100% to +100% feedback and dual decay envelopes (Geometry = FM ratio, Brightness = mod index). 6. Polyphonic String Synth delivers a 12-voice ensemble through a 3-band formant filter, stereo chorus, and reverb. 7. Spectral Granulator runs a multiband randomly modulated resonant filter bank into a phase-smeared modal reverb. Hidden Easter Egg Ominous Voice adds a dual 2-op FM synth with 8× oversampling, FIR downsampler & Spatializer.",
        "External Audio & Space Output: two 10 Vpp audio inputs route external rack signals or THE IN either through the exciter envelope and diffuser (Exciter IN) or straight into the resonator body (Resonator IN). Five macro parameters (Geometry, Brightness, Damping, Position harmonic node sweep, and Space) shape the body, while the 24-bit/48 kHz L/R output provides dual-pickup stereo reverb or raw Exciter (L) / Resonator (R) split.",
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
        v04: { cs: "8 modelů: Modal, String, Strings, Sympatické akordy, String+Rev, 2-Op FM, String Synth, Spektrální granulátor", en: "8 models: Modal, String, Strings, Quantized Chords, String+Rev, 2-Op FM, String Synth, Spectral Granulator" },
        imp: { cs: "Kvantizované akordy, FM hlas, string synth i spektrální granulace v jednom modulu", en: "Quantized chords, FM voice, string synth, and spectral granulation in one module" },
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
      S("Architektura rezonátoru", "Resonator architecture", { cs: "8 algoritmů vč. 64 ZDF SVF filtrů, sympatických akordů, 2-Op FM, string synthu a spektrální granulace", en: "8 algorithms incl. 64 ZDF SVF modes, quantized chords, 2-Op FM, string synth & spectral granulator" }, "doc", true),
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
    longMedia: {
      1: {
        src: "assets/diagrams/dmx-out-inline-patching.svg?v=20261117g",
        cap: {
          cs: "4× RJ45 link porty (až 512 kanálů), 4× 9bit DIP adresování + TEST a přepínač jasu FULL / DIM",
          en: "4× RJ45 link ports (up to 512 ch), 4× 9-bit DIP addressing + TEST, and FULL / DIM LED toggle",
        },
      },
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
      S("Vstupy", "Inputs", { cs: "4× RJ45 link port (Patchbay 8–128 ch)", en: "4× RJ45 link port (Patchbay 8–128 ch)" }, "doc", true),
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
      { src: "assets/diagrams/dmx-out-pipeline.svg?v=20261117g", cap: { cs: "Převod CV na DMX512-A", en: "CV-to-DMX512-A pipeline" } },
    ],
    related: ["patchbay-8ch", "cue-frames", "lux-core"],
  },

  "patchbay-8ch": {
    division: "LUX",
    name: "PATCHBAY_8CH",
    hp: "8 HP",
    serial: "DD-LX05 // LUX.8CH.CV",
    status: { cs: "Schéma + PCB + 8 HP panel", en: "Schematic + PCB + 8 HP panel" },
    image: "assets/products/patchbay-8ch/preview.png",
    tagline: {
      cs: "Osm CV kanálů a jeden master fader do jednoho síťového kabelu.",
      en: "Eight CV channels and one master fader into a single network cable.",
    },
    short: {
      cs: "Kompaktní 8 HP vstupní expander pro DMX_OUT a LUX_CORE — převádí bipolární Eurorack napětí ±10 V na unipolární link 0–3,3 V přes RJ45 s dvoub. LED indikací a 45mm master faderem.",
      en: "Compact 8 HP input expander for DMX_OUT and LUX_CORE — scales bipolar ±10 V Eurorack CV down to a 0–3.3 V RJ45 link with bipolar LED metering and a 45 mm master fader.",
    },
    long: {
      cs: [
        "PATCHBAY_8CH slouží jako vstupní rozhraní světelné divize LUX. Místo tahání svazků patch kabelů přes celý rack zapojíte osm zdrojů CV (LFO, obálky, sekvencery) do 8 HP modulu a jedním stíněným Cat5e/Cat6 kabelem přes konektor RJ45 je pošlete přímo do DMX_OUT nebo LUX_CORE.",
        "Každý ze 8 vstupních kanálů má vstupní impedanci 100 kΩ a precizní rezistorovou váhovou síť (200 kΩ proti referenci −10 V z obvodu LM4040B10), která lineárně transformuje bipolární rozsah ±10 V na unipolární 0 až +3,3 V. Aktivní RC filtr (33 kΩ || 3,3 nF, f_c ≈ 1,46 kHz) na operačním zesilovači MCP6002 tlumí šum, zatímco klampovací diody BAT54S chrání analogové multiplexery.",
        "Každý kanál disponuje dvoustavovou bipolární LED indikací (červená / zelená podle polarity CV), zatímco integrovaný 45mm podsvícený fader Bourns PTL45 řídí společné celkové ztlumení (Master Dimmer) multiplexovaného signálu z obvodu MAX14662 (I²C adresa 0x4C) dříve, než odejde přes link port.",
      ],
      en: [
        "PATCHBAY_8CH is the front-end CV expander for the LUX lighting division. Instead of routing bundles of patch cables across your rack, plug eight CV sources (LFOs, envelopes, sequencers) into the 8 HP panel and send them over a single shielded Cat5e/Cat6 RJ45 cable directly into DMX_OUT or LUX_CORE.",
        "Each of the eight channels presents a 100 kΩ input impedance into a precision summing network referenced to −10 V (LM4040B10), linearly scaling bipolar ±10 V Eurorack signals into a unipolar 0–3.3 V ADC range. An active MCP6002 low-pass stage (33 kΩ || 3.3 nF, f_c ≈ 1.46 kHz) smooths noise, while BAT54S clamping diodes safeguard the multiplexer inputs.",
        "Every channel includes a bicolor polarity LED, and an illuminated 45 mm Bourns PTL45 fader acts as a global master dimmer across the multiplexed MAX14662 (I²C 0x4C) bus before the signal leaves through the RJ45 link port.",
      ],
    },
    useCases: [
      {
        t: { cs: "Rozšíření racku na jevišti", en: "Stage rack expansion" },
        d: {
          cs: "Umístěte Patchbay vedle modulátorů v libovolné řadě case a k DMX_OUT natáhněte jediný stíněný RJ45 kabel.",
          en: "Place the Patchbay right next to your modulation sources and run a single shielded RJ45 cable to DMX_OUT.",
        },
      },
      {
        t: { cs: "Okamžitý Master Blackout", en: "Instant Master Blackout" },
        d: {
          cs: "45mm fader plynule stáhne všech osm kanálů naráz — od jemných stmívání scény po rychlý výstřih tmy.",
          en: "The 45 mm fader smoothly scales all eight channels simultaneously from subtle dim fades to instant blackout.",
        },
      },
      {
        t: { cs: "Vizuální kontrola polarity", en: "Visual polarity check" },
        d: {
          cs: "Bipolární LED u každého jacku okamžitě ukáže kladnou i zápornou fázi LFO či obálek přímo na panelu.",
          en: "Per-channel bicolor LEDs instantly show both positive and negative LFO or envelope phases right on the panel.",
        },
      },
      {
        t: { cs: "Škálování až do univerza", en: "Scaling up to a full universe" },
        d: {
          cs: "Jeden ze čtyř modulů v rodině Patchbay (8 / 16 / 32 / 128 ch) — ideální pro kompaktní skiff sestavy.",
          en: "Smallest member of the Patchbay family (8 / 16 / 32 / 128 ch) — sized for compact performance skiffs.",
        },
      },
    ],
    controls: {
      cs: [
        "J1–J8 — 8× CV vstup (±10 V max, 3,5 mm TS jack)",
        "LED1–LED8 — 8× bipolární stavová LED (+ / − napětí)",
        "MASTER — 45 mm podsvícený tahový potenciometr (0–100 %)",
        "J9 — LUX RJ45 LINK PORT (stíněný 8P8C → DMX_OUT / LUX_CORE)",
      ],
      en: [
        "J1–J8 — 8× CV inputs (±10 V max, 3.5 mm TS jacks)",
        "LED1–LED8 — 8× bicolor polarity indicator LEDs (+ / − CV)",
        "MASTER — 45 mm illuminated slide fader (0–100% attenuation)",
        "J9 — LUX RJ45 LINK PORT (shielded 8P8C → DMX_OUT / LUX_CORE)",
      ],
    },
    specs: [
      S("Šířka / výška", "Width / height", "8 HP / 3U (40,44 × 128,5 mm)"),
      S("Počet kanálů", "Channel count", { cs: "8 analogových CV vstupů", en: "8 analog CV inputs" }, "doc", true),
      S("Rozsah vstupu CV", "CV input range", "±10 V (škálování na 0–3,3 V)", "doc", true),
      S("Vstupní impedance", "Input impedance", "100 kΩ", "doc", true),
      S("Šířka pásma (−3 dB)", "Bandwidth (−3 dB)", "≈ 1,46 kHz (33 kΩ || 3,3 nF, MCP6002)", "doc", true),
      S("Master fader", "Master fader", "Bourns PTL45-10R0 (45 mm, lineární 10 kΩ)", "doc", true),
      S("Multiplexer / sběrnice", "Multiplexer / bus", "MAX14662 (8:1 SPST, I²C adresa 0x4C)", "doc"),
      S("Reference & LDO", "Reference & LDO", "LM4040B10 (−10 V) + LM1117-3.3 (+3,3 V)", "doc"),
      S("Výstupní port", "Link port", { cs: "1× stíněný RJ45 (Cat5e/Cat6)", en: "1× shielded RJ45 (Cat5e/Cat6)" }, "doc", true),
      S("Napájení", "Power supply", { cs: "Eurorack +12 V / −12 V (ochrana 1N5819WS)", en: "Eurorack +12 V / −12 V (1N5819WS reverse-protected)" }, "doc", true),
      S("Odběr +12 V / −12 V", "Current draw +12 V / −12 V", "—", "tbd", true),
    ],
    gallery: [
      { src: "assets/products/patchbay-8ch/preview.png", cap: { cs: "Čelní panel 8 HP — náhled", en: "8 HP front panel — preview" } },
      { src: "assets/products/patchbay-8ch/frontpanel_3d.png", cap: { cs: "Panel — 3D render (matná bílá / stříbrný HASL)", en: "Panel — 3D render (matte white / silver HASL)" } },
      { src: "assets/products/patchbay-8ch/pcb_3d.png", cap: { cs: "Plošný spoj — horní strana (3D)", en: "PCB — top side (3D)" } },
      { src: "assets/products/patchbay-8ch/pcb_3d_back.png", cap: { cs: "Plošný spoj — spodní strana SMD (3D)", en: "PCB — bottom SMD side (3D)" } },
    ],
    related: ["dmx-out", "patchbay-16ch", "lux-core", "cue-frames"],
  },

  "patchbay-16ch": {
    division: "LUX",
    name: "PATCHBAY_16CH",
    hp: "12 HP",
    serial: "DD-LX06 // LUX.16CH.CV",
    status: { cs: "Rozpracováno (8+8 ch + 12 HP panel)", en: "Work in progress (16 ch + 12 HP panel)" },
    image: "assets/products/patchbay-16ch/preview.png",
    tagline: {
      cs: "Šestnáct CV kanálů a master fader po jediném Cat5/Cat6 kabelu.",
      en: "Sixteen CV channels and a master fader down a single Cat5/Cat6 cable.",
    },
    short: {
      cs: "12 HP šestnáctikanálový vstupní CV expandér pro DMX_OUT a LUX_CORE se dvěma sloupci bipolárních LED, dvěma multiplexery MAX14662 a 45mm master faderem.",
      en: "12 HP 16-channel CV input expander for DMX_OUT and LUX_CORE with dual 8-channel LED columns, twin MAX14662 multiplexers, and a 45 mm master fader.",
    },
    long: {
      cs: [
        "PATCHBAY_16CH zdvojnásobuje kapacitu kompaktního 8kanálového modulu v šířce pouhých 12 HP. Do jednoho stíněného RJ45 linku k modulům DMX_OUT nebo LUX_CORE soustředí rovnou šestnáct bipolárních Eurorack vstupů (±10 V) rozdělených do dvou přehledných bank po osmi kanálech (CH 01–08 a CH 09–16).",
        "Oba analogové bloky sdílejí napájecí větev (±12 V s Schottky ochranou 1N5819WS, LDO regulátorem LM1117LD-3.3 a −10 V referencí LM4040B10), přičemž každý kanál má vlastní váhovou síť 100 kΩ / 200 kΩ / 33 kΩ na CMOS zesilovačích MCP6002 (dolní propust 3,3 nF) a dvoustavovou LED indikaci polarity buzenou obvody LM358AS.",
        "Přepínání šestnácti kanálů zajišťuje dvojice osmikanálových I²C multiplexerů MAX14662 připojených ke společné analogové sběrnici přes 45mm podsvícený Master fader Bourns PTL45-10R0. Modul je momentálně ve fázi rozpracovaného návrhu desky (Rev 0.1).",
      ],
      en: [
        "PATCHBAY_16CH doubles the channel density of the 8 HP expander into a single 12 HP panel. It consolidates sixteen bipolar Eurorack CV inputs (±10 V) arranged in two 8-channel columns (CH 01–08 and CH 09–16) onto a single shielded RJ45 cable connected to DMX_OUT or LUX_CORE.",
        "Both 8-channel banks share a protected ±12 V supply (1N5819WS Schottky diodes, LM1117LD-3.3 regulator, and LM4040B10 −10 V reference), with per-channel 100 kΩ / 200 kΩ / 33 kΩ scaling stages on MCP6002 op-amps (3.3 nF low-pass filter) and LM358AS-driven bicolor polarity LEDs.",
        "Channel scanning is handled by twin MAX14662 I²C 8:1 analog switches feeding a shared illuminated 45 mm Bourns PTL45-10R0 Master Dimmer fader before the RJ45 link port. The module is currently an active hardware prototype (Rev 0.1).",
      ],
    },
    useCases: [
      {
        t: { cs: "Kompletní světelná banka v 12 HP", en: "Full lighting bank in 12 HP" },
        d: {
          cs: "Šestnáct nezávislých DMX parametrů (barvy RGBW, dimmery, goba, Pan/Tilt) obsloužíte jedním kompaktním modulem.",
          en: "Drive sixteen independent DMX parameters (RGBW washes, dimmers, gobos, Pan/Tilt) from one 12 HP module.",
        },
      },
      {
        t: { cs: "Společné stažení celé skupiny", en: "Master group fade" },
        d: {
          cs: "Jediným 45mm táhlem plynule ztlumíte všech 16 vstupních kanálů současně přímo před vstupem do ADC.",
          en: "Fade all 16 channels smoothly from a single 45 mm slider ahead of the link ADC.",
        },
      },
      {
        t: { cs: "Dvě oddělené banky 1–8 / 9–16", en: "Split 1–8 / 9–16 banks" },
        d: {
          cs: "Vertikální sloupcové uspořádání se stavovými LED usnadňuje rychlé přepojování v temném racku.",
          en: "Two vertical columns with paired LEDs make patching fast and legible on dark stages.",
        },
      },
      {
        t: { cs: "Škálování až do 512 kanálů", en: "Scaling up to 512 channels" },
        d: {
          cs: "Čtyři porty na DMX_OUT zvládnou více Patchbay modulů paralelně po běžných ethernetových kabelech.",
          en: "Combine multiple Patchbay units across DMX_OUT's four ports using ordinary Cat5e/Cat6 cables.",
        },
      },
    ],
    controls: {
      cs: [
        "J1–J8 (2× banka) — 16× CV vstup (±10 V, 3,5 mm TS jack)",
        "LED1–LED8 (2× sloupec) — 16× bipolární stavová LED (+ / − napětí)",
        "MASTER — 45 mm podsvícený tahový potenciometr (Bourns PTL45-10R0)",
        "J9 — LUX RJ45 LINK PORT (stíněný 8P8C → DMX_OUT / LUX_CORE)",
      ],
      en: [
        "J1–J8 (2× banks) — 16× CV inputs (±10 V, 3.5 mm TS jacks)",
        "LED1–LED8 (2× columns) — 16× bicolor polarity LEDs (+ / − CV)",
        "MASTER — 45 mm illuminated slide fader (Bourns PTL45-10R0)",
        "J9 — LUX RJ45 LINK PORT (shielded 8P8C → DMX_OUT / LUX_CORE)",
      ],
    },
    specs: [
      S("Šířka / výška", "Width / height", "12 HP / 3U (60,76 × 128,5 mm)"),
      S("Počet kanálů", "Channel count", { cs: "16 analogových CV vstupů (2× banka 8 ch)", en: "16 analog CV inputs (2× 8-ch banks)" }, "doc", true),
      S("Rozsah vstupu CV", "CV input range", "±10 V (škálování na 0–3,3 V)", "doc", true),
      S("Vstupní impedance", "Input impedance", "100 kΩ", "doc"),
      S("Šířka pásma (−3 dB)", "Bandwidth (−3 dB)", "≈ 1,46 kHz (33 kΩ || 3,3 nF, MCP6002)", "doc"),
      S("Master fader", "Master fader", "Bourns PTL45-10R0 (45 mm, 10 kΩ lin.)", "doc", true),
      S("Multiplexery", "Multiplexers", "2× MAX14662 (I²C 8:1 analogový spínač)", "doc"),
      S("Reference & LDO", "Reference & LDO", "LM4040B10 (−10 V) + LM1117LD-3.3 (+3,3 V)", "doc"),
      S("Výstupní port", "Link port", { cs: "1× stíněný RJ45 (Cat5e/Cat6)", en: "1× shielded RJ45 (Cat5e/Cat6)" }, "doc", true),
      S("Napájení", "Power supply", { cs: "Eurorack ±12 V (Schottky 1N5819WS)", en: "Eurorack ±12 V (1N5819WS Schottky)" }, "doc"),
      S("Stav návrhu", "Design status", { cs: "Rozpracováno — návrh PCB před finální revizí", en: "Work in progress — PCB prior to final audit" }, "tbd", true),
    ],
    gallery: [
      { src: "assets/products/patchbay-16ch/preview.png", cap: { cs: "Čelní panel 12 HP — náhled", en: "12 HP front panel — preview" } },
      { src: "assets/products/patchbay-16ch/frontpanel_3d.png", cap: { cs: "Panel — 3D render (matná bílá / stříbrný HASL)", en: "Panel — 3D render (matte white / silver HASL)" } },
      { src: "assets/products/patchbay-16ch/pcb_3d.png", cap: { cs: "Rozpracovaná PCB — horní strana (3D)", en: "WIP PCB — top side (3D)" } },
      { src: "assets/products/patchbay-16ch/pcb_3d_back.png", cap: { cs: "Rozpracovaná PCB — spodní SMD strana (3D)", en: "WIP PCB — bottom SMD side (3D)" } },
    ],
    related: ["patchbay-8ch", "dmx-out", "lux-core"],
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
      S("Patchbay vstup", "Patchbay input", "RJ45 (Patchbay 8–128 ch)"),
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
    ],
    related: ["patchbay-8ch", "dmx-out", "cue-frames"],
  },

  "cue-frames": {
    division: "LUX",
    divisions: ["LUX", "AUD"],
    name: "CUE_FRAMES",
    hp: "22 HP",
    serial: "DD-CF01 // 8CH.DAC",
    status: { cs: "Schéma + 22 HP panel (LUX / AUD)", en: "Schematic + 22 HP panel (LUX / AUD)" },
    image: "assets/products/cue-frames/preview.png?v=20261118",
    imageByDiv: {
      LUX: "assets/products/cue-frames/preview.png?v=20261118",
      AUD: "assets/products/cue-frames/preview_black.png?v=20261118",
      VID: "assets/products/cue-frames/preview.png?v=20261118",
    },
    tagline: {
      cs: "Osm knobů. Osm enginů na STM32F765. Jeden firmware pro světlo i zvuk.",
      en: "Eight knobs. Eight STM32F765 engines. One firmware for light and sound.",
    },
    short: {
      cs: "22 HP: 32 scén s morfem (Keyframer), krokový sekvencer, Random Sampler, Tidal Modulator, Poly-LFO, Euclidean, 8kanálový Function Generator i 16oscilátorový Poly VCO — plus hardwarově přepínané výstupy SUM 1-4 a SUM ALL.",
      en: "22 HP: 32 morphing cues (Keyframer), Step Sequencer, Random Sampler, Tidal Modulator, Poly-LFO, Euclidean, 8-channel Function Generator, and 16-oscillator Poly VCO — plus hardware-switched SUM 1-4 and SUM ALL outputs.",
    },
    long: {
      cs: [
        "CUE_FRAMES je univerzální 22 HP osmikanálový CV/audio modul na STM32F765VIT6 (Cortex-M7 @ 216 MHz) se stejným hardwarem i firmwarem pro divize Světlo (bílý LUX panel) i Zvuk (černý AUD panel). Panel nabízí 16 jacků včetně samostatných vstupů CLOCK a RESET, tlačítka MOD a OPT, indikační LED CUE u ADD/DEL a ikony 8 režimů přímo nad potenciometry CH 1–8.",
        "Chytré analogové sčítání a sjednocené ovládání: výstup SUM 1-4 trvale sčítá kanály 1–4, zatímco SUM ALL v nezapojeném stavu SUM 1-4 sčítá všech 8 kanálů (CH 1–8) a po zasunutí kabelu do SUM 1-4 automaticky čistě v analogu (izolovaný spínací kontakt + TMUX6119) vyloučí kanály 1–4 a sčítá pouze CH 5–8. Společná výstupní pipeline nabízí pickup potenciometrů, per-channel routing bez smyček, slew limiter, nezávislou kalibraci výstupů a USB-C správu 32 presetů.",
        "1. KEYFRAMER (CUES): až 32 scén ukládaných přes ADD/DEL (ADD ukládá aktuální výstupní hodnoty). 1:SHAPE volí křivku interpolace pro každý kanál (Linear, Exponential, Logarithmic, Step), 2:RATE rychlost auto-morfu, 3:SPREAD časový rozptyl kanálů (Fixture Fan), 4:SHIFT posun scény, 5:STEPS počet aktivních scén (2–32), 6:GLIDE vyhlazení (Pan/Tilt), 7:LOOP směr průchodu (Forward, Reverse, Ping-Pong, Random), 8:RANGE rozsah (0–5 V / 0–10 V).",
        "2. STEP SEQUENCER (SEQ): 8krokový sekvencer, kde knoby CH 1–8 nastavují napětí kroků 1–8 a na OUT 1–8 je aktivní krok (SUM ALL dává souhrnnou sekvenci). 1:SHAPE volí tvar výstupu kroku (Trigger 2 ms, Short Gate 25 %, Half Gate 50 %, Long Gate 75 %, Full Legato 100 %, Step CV Level), 2:RATE interní hodiny / dělička, 3:SPREAD rozptyl délek brány, 4:SHIFT transpozice/posun kroků, 5:STEPS délka sekvence (2–8 kroků), 6:GLIDE portamento mezi kroky, 7:LOOP směr (Forward, Reverse, Pendulum, Ping-Pong, Random Walk, Random), 8:RANGE napěťový rozsah.",
        "3. RANDOM SAMPLER: 8kanálový generátor náhody s Déjà Vu smyčkou (knob FRAME vlevo = stále nové hodnoty, uprostřed 12:00 = zamčená smyčka, vpravo = mutace zamčené smyčky). 1:SHAPE volí pravděpodobnostní rozdělení (Uniform Stepped, Bell / Gaussian, Bi-Modal Extremes, Stepped Ramp, Smooth Drift), 2:RATE rychlost hodin, 3:SPREAD rozptyl napětí CH 1–8, 4:SHIFT těžiště (Bias), 5:STEPS kvantizace stupnic (Unquantized, Chromatic, Major, Minor, Pentatonic, Whole-Tone, Octaves + 5ths), 6:GLIDE slew, 7:LOOP délka smyčky (2–16 kroků), 8:RANGE rozsah.",
        "4. TIDAL MODULATOR: 8 vzájemně provázaných funkčních generátorů v LFO i audio pásmu (V/OCT). 1:SHAPE volí tvar vlny (Triangle / Saw / Ramp, Sine, Exponential, Logarithmic, Wavefolded, Sub-Harmonic), 2:RATE základní frekvence, 3:SPREAD rozptyl poměrů frekvencí, 4:SHIFT sklon/symetrie (Attack/Decay Tilt), 5:STEPS sady poměrů (Free, Octaves ÷4..×4, 5ths & Octaves, Harmonic Series, Prime Ratios, Golden Ratio φ), 6:GLIDE wavefolder / vyhlazení, 7:LOOP režim (AD One-Shot, Looping Cycle, AR Gated), 8:RANGE (0–10 V / ±5 V).",
        "5. POLY LFO: 8 fázově rozložených LFO napojených na centrální ClockEngine a ResetEngine (dělení/násobení 1/16..8×, fázový reset přes RESET). 1:SHAPE volí průběh vlny (Sine, Triangle, Ramp Up, Ramp Down, Square, Sample & Hold, Smooth Random), 2:RATE frekvence / násobič hodin, 3:SPREAD frekvenční/rytmický rozptyl, 4:SHIFT symetrie vlny, 5:STEPS děličky clocku (1/16..8×), 6:GLIDE vyhlazení hran, 7:LOOP synchronizace (Free-Run, CLOCK Sync, RESET Phase), 8:RANGE (0–10 V / ±5 V).",
        "6. EUCLIDEAN: 8× Euklidovský rytmický generátor (knoby nastavují počet úderů na kanálech 1–8, FRAME rotuje rytmy, RESET nuluje pozice všech stop). 1:SHAPE volí tvar pulzu/obálky (1 ms Trigger, 10 ms Gate, 50 % Gate, Fast Decay Env, Log Decay Env), 2:RATE dělička hodin, 3:SPREAD rozptyl hustoty úderů, 4:SHIFT globální rotace (0–15), 5:STEPS délka cyklu (4–16 kroků), 6:GLIDE délka doznění, 7:LOOP polyrytmický režim (Standard Euclidean, Inverted Rests, Alternating, Accented Downbeat), 8:RANGE úroveň (0–5 V / 0–10 V).",
        "7. FUNCTION GENERATOR: 8 nezávislých obálek a tvarovaných CV generátorů (1 ms – 30 s) s plynulým bezskokovým morfingem křivek (Logarithmic, Exponential, Linear, S-Curve, Custom 17-point) a režimy AD, AR, ASR, LOOP, ONE-SHOT a GATE. Kanály lze vzájemně řetězit přes EOR/EOF události (s ochranou proti smyčkám v DAG grafu), fázově posouvat, zpožďovat (0–5 s), synchronizovat s CLOCK/RESET nebo využít jako interní modulační zdroje pro jiné kanály.",
        "8. POLY VCO: 16oscilátorový polyfonní aditivní/FM/wavefold syntezátor běžící při 2× převzorkování (96 kHz → 48 kHz) přes dedikovaný 24bitový Audio DAC (PCM5102A), přičemž všech 8 CV výstupů OUT 1–8 zůstává plně aktivních. Parametry ROOT (+ V/OCT), SCALE (16 vestavěných + 8 uživatelských harmonických i neharmonických spekter včetně zvonů a Zlatého řezu φ), SPREAD, DETUNE, TWIST (phase distortion), WARP (ADAA wavefolding), CROSS FM (thru-zero PM), FREEZE (Ratio / Absolute) a MIX.",
      ],
      en: [
        "CUE_FRAMES is a universal 22 HP 8-channel CV/audio module powered by STM32F765VIT6 (Cortex-M7 @ 216 MHz), sharing identical hardware and firmware across Light (matte white LUX panel) and Sound (matte black AUD panel). The 22 HP front panel provides 16 jacks including dedicated CLOCK and RESET inputs, MOD and OPT buttons, the CUE LED beside ADD/DEL, and the 8 mode icons positioned directly above potentiometers CH 1–8.",
        "Smart analog summing & unified control: SUM 1-4 permanently sums channels 1–4, while SUM ALL sums all 8 channels (CH 1–8) when SUM 1-4 is unplugged and automatically excludes CH 1–4 in hardware (isolated switch contact + TMUX6119) to output only CH 5–8 when SUM 1-4 is patched. A shared output pipeline provides pot pickup mode, loop-free channel routing, time-based slew limiting, per-channel DAC calibration, and USB-C management for 32+ CRC-protected presets.",
        "1. KEYFRAMER (CUES): up to 32 scenes stored via ADD/DEL (ADD captures current output values). 1:SHAPE selects per-channel interpolation (Linear, Exponential, Logarithmic, Step), 2:RATE auto-morph speed, 3:SPREAD fixture fan timing, 4:SHIFT scene offset, 5:STEPS active cue count (2–32), 6:GLIDE slew/inertia (Pan/Tilt), 7:LOOP playback direction (Forward, Reverse, Ping-Pong, Random), 8:RANGE scale (0–5 V / 0–10 V).",
        "2. STEP SEQUENCER (SEQ): 8-step sequencer where CH 1–8 set step levels and OUT 1–8 output the active step (SUM ALL provides the combined sequence CV). 1:SHAPE selects step output shape (Trigger 2 ms, Short Gate 25%, Half Gate 50%, Long Gate 75%, Full Legato 100%, Step CV Level), 2:RATE clock rate/divider, 3:SPREAD gate-width spread, 4:SHIFT step/pitch transpose, 5:STEPS sequence length (2–8), 6:GLIDE portamento, 7:LOOP direction (Forward, Reverse, Pendulum, Ping-Pong, Random Walk, Random), 8:RANGE output scale.",
        "3. RANDOM SAMPLER: 8-channel random shift register with Déjà Vu loop (FRAME CCW = fresh values, 12:00 = locked loop, CW = random mutation). 1:SHAPE selects probability distribution (Uniform Stepped, Bell / Gaussian, Bi-Modal Extremes, Stepped Ramp, Smooth Drift), 2:RATE clock rate, 3:SPREAD voltage spread across CH 1–8, 4:SHIFT voltage bias, 5:STEPS quantizer scales (Unquantized, Chromatic, Major, Minor, Pentatonic, Whole-Tone, Octaves + 5ths), 6:GLIDE slew, 7:LOOP loop length (2–16 steps), 8:RANGE output scale.",
        "4. TIDAL MODULATOR: 8 phase-coupled function generators at LFO or audio rates (V/OCT). 1:SHAPE selects waveshape (Triangle / Saw / Ramp, Sine, Exponential, Logarithmic, Wavefolded, Sub-Harmonic), 2:RATE base frequency, 3:SPREAD frequency ratio spread, 4:SHIFT attack/decay tilt, 5:STEPS ratio sets (Free, Octaves ÷4..×4, 5ths & Octaves, Harmonic Series, Prime Ratios, Golden Ratio φ), 6:GLIDE wavefolder / smoothness, 7:LOOP cycle mode (AD One-Shot, Looping Cycle, AR Gated), 8:RANGE (0–10 V / ±5 V).",
        "5. POLY LFO: 8 phase-spread LFOs driven by the centralized ClockEngine and ResetEngine (1/16..8× divisions/multiplications, deterministic phase reset). 1:SHAPE selects LFO waveforms (Sine, Triangle, Ramp Up, Ramp Down, Square, Sample & Hold, Smooth Random), 2:RATE frequency / clock multiplier, 3:SPREAD rhythmic/frequency spread, 4:SHIFT wave symmetry, 5:STEPS clock divisions (1/16..8×), 6:GLIDE edge slew, 7:LOOP sync mode (Free-Run, CLOCK Sync, RESET Phase), 8:RANGE (0–10 V / ±5 V).",
        "6. EUCLIDEAN: 8× Euclidean rhythm generator (CH 1–8 set hits per channel, FRAME rotates patterns, RESET resets all patterns). 1:SHAPE selects pulse/envelope shape (1 ms Trigger, 10 ms Gate, 50% Gate, Fast Decay Env, Log Decay Env), 2:RATE clock divider, 3:SPREAD hit density spread, 4:SHIFT global pattern rotation (0–15), 5:STEPS cycle length (4–16), 6:GLIDE decay/slew, 7:LOOP polyrhythm mode (Standard Euclidean, Inverted Rests, Alternating, Accented Downbeat), 8:RANGE gate level (0–5 V / 0–10 V).",
        "7. FUNCTION GENERATOR: 8 independent envelope and shaped CV generators (1 ms – 30 s) with glitch-free continuous curve morphing (Logarithmic, Exponential, Linear, S-Curve, Custom 17-point) across AD, AR, ASR, LOOP, ONE-SHOT, and GATE modes. Supports EOR/EOF channel chaining (with DAG cycle prevention), delay (0–5 s), phase offset, CLOCK/RESET sync, and cross-channel internal modulation.",
        "8. POLY VCO: 16-oscillator polyphonic additive/FM/wavefold synthesizer running 2× oversampled (96 kHz → 48 kHz) through a dedicated 24-bit Audio DAC (PCM5102A), keeping all 8 CV outputs OUT 1–8 fully active. Features ROOT (+ V/OCT), SCALE (16 built-in + 8 custom harmonic & inharmonic/bell/Golden Ratio φ spectra), SPREAD, DETUNE, TWIST (phase distortion), WARP (ADAA wavefolding), CROSS FM (thru-zero PM), FREEZE (Ratio / Absolute), and MIX.",
      ],
    },
    longMedia: {
      1: {
        srcByDiv: {
          LUX: "assets/diagrams/cue-frames-inline-panel-sum-lux.svg?v=20261118",
          AUD: "assets/diagrams/cue-frames-inline-panel-sum-aud.svg?v=20261118",
        },
        cap: {
          cs: "Architektura STM32F765VIT6: 8 módů přes MOD+FRAME, parametry OPT (1:SHAPE–8:RANGE) a automaticky přepínané analogové sčítačky SUM 1-4 / SUM ALL",
          en: "STM32F765VIT6 architecture: 8 modes via MOD+FRAME, unified OPT knobs (1:SHAPE–8:RANGE), and auto-switched analog summers SUM 1-4 / SUM ALL",
        },
      },
      3: {
        srcByDiv: {
          LUX: "assets/diagrams/cue-frames-inline-cues-seq-lux.svg?v=20261118",
          AUD: "assets/diagrams/cue-frames-inline-cues-seq-aud.svg?v=20261118",
        },
        cap: {
          cs: "Módy 1 & 2: 32 scén Keyframeru (Linear, Exponential, Logarithmic, Step) a Step Sequencer 1–8 + SUM ALL",
          en: "Modes 1 & 2: 32-cue Keyframer curves (Linear, Exponential, Logarithmic, Step) and Step Sequencer 1–8 + SUM ALL",
        },
      },
      7: {
        srcByDiv: {
          LUX: "assets/diagrams/cue-frames-inline-modulators-lux.svg?v=20261118",
          AUD: "assets/diagrams/cue-frames-inline-modulators-aud.svg?v=20261118",
        },
        cap: {
          cs: "Módy 3–6: Random Sampler (Déjà Vu), Tidal Modulator (poměry), fázový Poly LFO a Euclidean polyrytmy",
          en: "Modes 3–6: Random Sampler (Déjà Vu), Tidal Modulator (ratios), phase-spread Poly LFO, and Euclidean polyrhythms",
        },
      },
      8: {
        srcByDiv: {
          LUX: "assets/diagrams/cue-frames-inline-funcgen-lux.svg?v=20261118",
          AUD: "assets/diagrams/cue-frames-inline-funcgen-aud.svg?v=20261118",
        },
        cap: {
          cs: "Mód 7 (Function Generator): 6 režimů obálek (AD, AR, ASR, LOOP, ONE-SHOT, GATE), plynulý morf křivek a EOR/EOF řetězení (klikni pro zvětšení)",
          en: "Mode 7 (Function Generator): 6 envelope modes (AD, AR, ASR, LOOP, ONE-SHOT, GATE), glitch-free curve morphing, and EOR/EOF chaining (click to zoom)",
        },
      },
      9: {
        srcByDiv: {
          LUX: "assets/diagrams/cue-frames-inline-vco-chords-lux.svg?v=20261118",
          AUD: "assets/diagrams/cue-frames-inline-vco-chords-aud.svg?v=20261118",
        },
        cap: {
          cs: "Mód 8 (Poly VCO): 16 oscilátorů, TWIST / ADAA WARP / CROSS FM a dedikovaný 24bit Audio DAC (PCM5102A) při zachování OUT 1–8",
          en: "Mode 8 (Poly VCO): 16 oscillators, TWIST / ADAA WARP / CROSS FM, and dedicated 24-bit Audio DAC (PCM5102A) while keeping OUT 1–8 active",
        },
      },
    },
    useCases: [
      {
        t: { cs: "Keyframer: 32 světelných scén + 32 presetů", en: "Keyframer: 32 lighting cues + 32 presets" },
        d: {
          cs: "Ukládej až 32 scén na preset přes ADD/DEL (ADD snímá aktuální výstupy) a pro každý kanál zvol Linear, Exponential, Logarithmic nebo Step. SUM ALL automaticky odpojí CH 1–4 při zapojení SUM 1-4.",
          en: "Store up to 32 cues per preset via ADD/DEL (ADD captures live output values) with per-channel Linear, Exponential, Logarithmic, or Step curves. SUM ALL automatically drops CH 1–4 when SUM 1-4 is patched.",
        },
      },
      {
        t: { cs: "Function Generator: 8× obálka & řetězení", en: "Function Generator: 8× envelopes & chaining" },
        d: {
          cs: "Osm samostatných AD/AR/ASR/LOOP/ONE-SHOT/GATE generátorů s kaskádním EOR/EOF spouštěním, křížovou modulací bez cyklů, zpožděním a bezskokovým morfováním křivek.",
          en: "Eight independent AD/AR/ASR/LOOP/ONE-SHOT/GATE generators with EOR/EOF cascade chaining, cycle-safe cross-modulation, trigger delay, and glitch-free curve morphing.",
        },
      },
      {
        t: { cs: "Centrální CLOCK / RESET & Slew / Pickup", en: "Central CLOCK / RESET & Slew / Pickup" },
        d: {
          cs: "Dedikované vstupy CLOCK a RESET se Schmittovou úpravou řídí všechny synchronizované módy (1/16..8×), zatímco pot pickup, slew limiter a per-kanál kalibrace hlídají plynulost.",
          en: "Dedicated Schmitt-conditioned CLOCK and RESET inputs drive all synced modes (1/16..8×), while pot pickup mode, slew limiting, and per-channel calibration ensure smooth precision.",
        },
      },
      {
        t: { cs: "16oscilátorový Poly VCO + 8× CV výstupy", en: "16-oscillator Poly VCO + 8× CV outputs" },
        d: {
          cs: "Aditivní/FM/wavefold syntéza 16 oscilátorů s FREEZE a neharmonickými škálami běží přes 24bit Audio DAC (96 kHz interně), zatímco všech 8 CV výstupů OUT 1–8 zůstává volných.",
          en: "16-oscillator additive/FM/wavefold synthesis with FREEZE and inharmonic scales streams via a 24-bit Audio DAC (96 kHz internal) while all 8 CV outputs OUT 1–8 stay free.",
        },
      },
    ],
    controls: {
      cs: [
        "1:SHAPE – 8:RANGE — 8 potenciometrů s ikonami 8 módů přímo nad knoby a LED indikátory pod knoby (pickup + aktivita)",
        "FRAME — centrální velký knob s RGB LED (morf scén / Déjà Vu / časování / ROOT pitch)",
        "ADD / DEL + LED CUE — uložení/smazání scén, FREEZE a správa 32 presetů",
        "MOD / OPT — symetrická tlačítka pro výběr z 8 režimů, křížového routingu a 8 OPT parametrů",
        "MODULATION — atenuverter vstupu FRAME CV",
        "Vstupy & sync (3×2): FRAME CV IN, V/OCT IN, CLOCK IN, STEP OUT, TRIG IN, RESET IN",
        "Výstupy: OUT 1–8 (2× DAC8164) + automaticky přepínané SUM 1-4 / SUM ALL + USB-C servis (DFU, presety, kalibrace, MIDI)",
      ],
      en: [
        "1:SHAPE – 8:RANGE — 8 potentiometers with the 8 mode icons directly above and channel LEDs below (pickup + activity)",
        "FRAME — centered large knob with RGB LED (cue morph / Déjà Vu / timing / ROOT pitch)",
        "ADD / DEL + CUE LED — store/delete cues, FREEZE, and 32-preset management",
        "MOD / OPT — symmetrical buttons for 8 modes, channel routing, and 8 OPT parameters",
        "MODULATION — attenuverter for FRAME CV input",
        "Inputs & sync (3×2): FRAME CV IN, V/OCT IN, CLOCK IN, STEP OUT, TRIG IN, RESET IN",
        "Outputs: OUT 1–8 (2× DAC8164) + auto-switched SUM 1-4 / SUM ALL + USB-C service (DFU, presets, calibration, MIDI)",
      ],
    },
    specs: [
      S("Šířka / výška", "Width / height", "22 HP (111,56 mm) / 3U"),
      S("Procesor (MCU)", "Processor (MCU)", "STM32F765VIT6 (ARM Cortex-M7 @ 216 MHz, DP-FPU, LQFP-100)", "doc", true),
      S("CV / Audio výstupy", "CV / Audio outputs", { cs: "8× CV (OUT 1–8) + HW přepínaný SUM 1-4 / SUM ALL + 24bit Audio DAC (PCM5102A)", en: "8× CV (OUT 1–8) + HW-switched SUM 1-4 / SUM ALL + 24-bit Audio DAC (PCM5102A)" }, "doc", true),
      S("Rozlišení D/A", "D/A resolution", "14 bit CV (2× TI DAC8164, LDAC sync) · 24 bit Audio (PCM5102A)", "doc", true),
      S("Výstupní rozsah", "Output range", { cs: "0 – 10 V / ±10 V (per-kanál kalibrace + slew limiter)", en: "0 – 10 V / ±10 V (per-channel calibration + slew limiter)" }, "doc", true),
      S("Výstupní impedance", "Output impedance", "1 kΩ", "doc", true),
      S("Režimy (tlačítko MOD)", "Modes (MOD button)", { cs: "8 režimů (ikony nad knoby): Keyframer, Step Sequencer, Random Sampler, Tidal Modulator, Poly-LFO, Euclidean, Function Generator, Poly VCO", en: "8 modes (icons above pots): Keyframer, Step Sequencer, Random Sampler, Tidal Modulator, Poly-LFO, Euclidean, Function Generator, Poly VCO" }, "doc", true),
      S("Nastavení (tlačítko OPT)", "Settings (OPT button)", { cs: "Jednotná vrstva: 1:SHAPE, 2:RATE, 3:SPREAD, 4:SHIFT, 5:STEPS, 6:GLIDE, 7:LOOP, 8:RANGE + pickup", en: "Unified layer: 1:SHAPE, 2:RATE, 3:SPREAD, 4:SHIFT, 5:STEPS, 6:GLIDE, 7:LOOP, 8:RANGE + pickup" }, "doc", true),
      S("Ladění & vstupy", "Pitch & inputs", { cs: "V/OCT (1 V/Oct), FRAME CV IN, CLOCK IN, RESET IN, TRIG IN, STEP OUT", en: "V/OCT (1 V/Oct), FRAME CV IN, CLOCK IN, RESET IN, TRIG IN, STEP OUT" }, "doc", true),
      S("Servis & paměť", "Service & storage", { cs: "USB-C (DFU, záloha 32 presetů s CRC32, kalibrace, MIDI)", en: "USB-C (DFU, 32-preset CRC32 backup, calibration, MIDI)" }, "doc", true),
      S("Odběr +12 V / −12 V", "Current draw +12 V / −12 V", "—", "tbd", true),
    ],
    credit: {
      cs: "Vychází z Mutable Instruments Frames (Émilie Gillet, CC-BY-SA 3.0).",
      en: "Based on Mutable Instruments Frames (Émilie Gillet, CC-BY-SA 3.0).",
    },
    gallery: [
      { src: "assets/products/cue-frames/preview.png?v=20261118", cap: { cs: "Hlavní výrobní panel 22 HP — LUX (bílý)", en: "Main 22 HP production panel — LUX (white)" } },
      { src: "assets/products/cue-frames/preview_black.png?v=20261118", cap: { cs: "Hlavní výrobní panel 22 HP — AUD (černý)", en: "Main 22 HP production panel — AUD (black)" } },
      { src: "assets/diagrams/cue-frames-firmware-lux.svg?v=20261118", cap: { cs: "Architektura firmwaru — LUX (světelná verze)", en: "Firmware architecture — LUX (light version)" } },
      { src: "assets/diagrams/cue-frames-firmware-aud.svg?v=20261118", cap: { cs: "Architektura firmwaru — AUD (zvuková verze)", en: "Firmware architecture — AUD (audio version)" } },
      { src: "assets/diagrams/cue-frames-modes-lux.svg?v=20261118", cap: { cs: "Přehled 8 režimů — LUX", en: "8-mode overview — LUX" } },
      { src: "assets/diagrams/cue-frames-modes-aud.svg?v=20261118", cap: { cs: "Přehled 8 režimů — AUD", en: "8-mode overview — AUD" } },
    ],
    galleryByDiv: {
      LUX: [
        { src: "assets/products/cue-frames/preview.png?v=20261118", cap: { cs: "Čelní panel 22 HP — LUX (Matte White PCB)", en: "22 HP Front Panel — LUX (Matte White PCB)" } },
        { src: "assets/diagrams/cue-frames-firmware-lux.svg?v=20261118", cap: { cs: "Architektura STM32F765 & výstupy (LUX)", en: "STM32F765 architecture & outputs (LUX)" } },
        { src: "assets/diagrams/cue-frames-modes-lux.svg?v=20261118", cap: { cs: "Přehled 8 režimů (MOD) & vrstvy 1:SHAPE–8:RANGE", en: "8 modes (MOD) & 1:SHAPE–8:RANGE layer" } },
        { src: "assets/diagrams/cue-frames-m1-cues-lux.svg?v=20261118", cap: { cs: "Mode 1 // Keyframer — 32 světelných scén & křivky", en: "Mode 1 // Keyframer — 32 lighting cues & curves" } },
        { src: "assets/diagrams/cue-frames-m2-seq-lux.svg?v=20261118", cap: { cs: "Mode 2 // Step Sequencer — 8krokový chase & CV", en: "Mode 2 // Step Sequencer — 8-step chase & CV" } },
        { src: "assets/diagrams/cue-frames-m3-random-lux.svg?v=20261118", cap: { cs: "Mode 3 // Random Sampler — Déjà Vu náhodné smyčky", en: "Mode 3 // Random Sampler — Déjà Vu random loops" } },
        { src: "assets/diagrams/cue-frames-m4-tidal-lux.svg?v=20261118", cap: { cs: "Mode 4 // Tidal Modulator — 8× fázově posunutý svah", en: "Mode 4 // Tidal Modulator — 8× phase-shifted slope" } },
        { src: "assets/diagrams/cue-frames-m5-lfo-lux.svg?v=20261118", cap: { cs: "Mode 5 // Poly-LFO — Volné i clockované LFO", en: "Mode 5 // Poly-LFO — Free & clocked LFO" } },
        { src: "assets/diagrams/cue-frames-m6-euclid-lux.svg?v=20261118", cap: { cs: "Mode 6 // Euclidean — 8× Euklidovské rytmy & stroboskop", en: "Mode 6 // Euclidean — 8× Euclidean rhythms & strobe" } },
        { src: "assets/diagrams/cue-frames-m7-funcgen-lux.svg?v=20261118", cap: { cs: "Mode 7 // Function Generator — 8× AD/AR/ASR/LOOP & řetězení", en: "Mode 7 // Function Generator — 8× AD/AR/ASR/LOOP & chaining" } },
        { src: "assets/diagrams/cue-frames-m8-vco-lux.svg?v=20261118", cap: { cs: "Mode 8 // Poly VCO — 16oscilátorový ensemble (PCM5102A + 8× CV)", en: "Mode 8 // Poly VCO — 16-oscillator ensemble (PCM5102A + 8× CV)" } },
      ],
      AUD: [
        { src: "assets/products/cue-frames/preview_black.png?v=20261118", cap: { cs: "Čelní panel 22 HP — AUD (Matte Black PCB)", en: "22 HP Front Panel — AUD (Matte Black PCB)" } },
        { src: "assets/diagrams/cue-frames-firmware-aud.svg?v=20261118", cap: { cs: "Architektura STM32F765 & výstupy (AUD)", en: "STM32F765 architecture & outputs (AUD)" } },
        { src: "assets/diagrams/cue-frames-modes-aud.svg?v=20261118", cap: { cs: "Přehled 8 režimů (MOD) & vrstvy 1:SHAPE–8:RANGE", en: "8 modes (MOD) & 1:SHAPE–8:RANGE layer" } },
        { src: "assets/diagrams/cue-frames-m1-cues-aud.svg?v=20261118", cap: { cs: "Mode 1 // Keyframer — 32 scén & plynulý CV morf", en: "Mode 1 // Keyframer — 32 scenes & CV morphing" } },
        { src: "assets/diagrams/cue-frames-m2-seq-aud.svg?v=20261118", cap: { cs: "Mode 2 // Step Sequencer — 8krokový sekvencer (HW SUM = CV)", en: "Mode 2 // Step Sequencer — 8-step sequencer (HW SUM = CV)" } },
        { src: "assets/diagrams/cue-frames-m3-random-aud.svg?v=20261118", cap: { cs: "Mode 3 // Random Sampler — Déjà Vu generátor náhody", en: "Mode 3 // Random Sampler — Déjà Vu random generator" } },
        { src: "assets/diagrams/cue-frames-m4-tidal-aud.svg?v=20261118", cap: { cs: "Mode 4 // Tidal Modulator — 8× fázově posunutý svah", en: "Mode 4 // Tidal Modulator — 8× coupled slope generator" } },
        { src: "assets/diagrams/cue-frames-m5-lfo-aud.svg?v=20261118", cap: { cs: "Mode 5 // Poly-LFO — Volné i clockované LFO", en: "Mode 5 // Poly-LFO — Free & clocked LFO" } },
        { src: "assets/diagrams/cue-frames-m6-euclid-aud.svg?v=20261118", cap: { cs: "Mode 6 // Euclidean — 8× Euklidovský polyrytmický generátor", en: "Mode 6 // Euclidean — 8× Euclidean polyrhythm generator" } },
        { src: "assets/diagrams/cue-frames-m7-funcgen-aud.svg?v=20261118", cap: { cs: "Mode 7 // Function Generator — 8× AD/AR/ASR/LOOP & DAG mod", en: "Mode 7 // Function Generator — 8× AD/AR/ASR/LOOP & DAG mod" } },
        { src: "assets/diagrams/cue-frames-m8-vco-aud.svg?v=20261118", cap: { cs: "Mode 8 // Poly VCO — 16-osc aditivní/FM/wavefold + 8× CV", en: "Mode 8 // Poly VCO — 16-osc additive/FM/wavefold + 8× CV" } },
      ],
    },
    related: ["dmx-out", "lux-core", "the-in", "the-out"],
  },

  /* ------------------------------------------------------- VIDEO */
  "cube-seq": {
    division: "AUD",
    name: "CUBE_SEQ",
    hp: "22 HP",
    serial: "DD-CB01 // 3X3X3.PERM",
    status: { cs: "Schéma + DPS + panel 22 HP (Rev 1.0 · KiCad 10)", en: "Schematic + PCB + 22 HP panel (Rev 1.0 · KiCad 10)" },
    image: "assets/products/cube-seq/preview.png?v=20261118d",
    tagline: {
      cs: "Generativní 2D Rubikova kostka: 9× potů vč. KEY/OCT & rytmické sekce, 54 stupnic na LED matici.",
      en: "Generative 2D Rubik's Cube sequencer with 9 performance/rhythm pots, 54-LED scale picker & dual memories.",
    },
    short: {
      cs: "22 HP (Rev 1.0): 54-LED 2D projekce kostky (1·2·3 = Low/Mid/High), 4× EC11 enkodéry (AXIS X/Y/Z + SCALE), 9× potů (RATE/DIV, TRAV, STEPS, KEY, OCT + DEJA VU, PROB, RATCHET, DENSITY), 3× 1V/Oct CV + MOD CV + 3× Trigger.",
      en: "22 HP (Rev 1.0): 54-LED 2D cube on 3×3 rings (1·2·3 = Low/Mid/High), 4× EC11 encoders (AXIS X/Y/Z + SCALE), 9× pots (RATE/DIV, TRAV, STEPS, KEY, OCT + DEJA VU, PROB, RATCHET, DENSITY), 3× 1V/Oct CV + MOD CV + 3× Trigger.",
    },
    long: {
      cs: [
        "ZÁKLADNÍ PRINCIP & 2D PROJEKCE (22 HP): CUBE_SEQ převádí Rubikovu kostku 3×3×3 na generativní Eurorack sekvencer pomocí velké horně posazené 2D kruhové reprezentace (3 osy X, Y, Z × 3 soustředné kruhy 1 · 2 · 3, celkem 54 RGB LED viditelných současně). Systém striktně odděluje hudební role: barva políčka určuje tónovou identitu, prostorová vrstva (1 / 2 / 3) registr, SCALE intervalová pravidla, KEY tóninu (C–B), OCT oktávovou transpozici (−3 až +3) a TRAV pořadí čtení. Otáčením enkodérů AXIS X, AXIS Y a AXIS Z (stisk volí kruh 1 · 2 · 3) permutujete 20 políček o 90° podle teorie grup.",
        "TÓNOVÁ MAPA (6 BAREV, 3 KVINTOVÉ DVOJICE): Šest barev kostky tvoří tři dvojice protilehlých stran — Bílá ↔ Žlutá, Červená ↔ Oranžová a Modrá ↔ Zelená. Výchozí návrh C major pentatonic mapuje Bílá = C, Žlutá = G (kvinta C–G), Červená = D, Oranžová = A (kvinta D–A) a Modrá = E, Zelená = B (kvinta E–B). Každá barva má vlastní půltónový offset color_semitones[6] vůči kořenu KEY, zcela oddělený od 12bitové kvantizační masky.",
        "PROSTOROVÉ VRSTVY (1:LOW · 2:MID · 3:HIGH) & REŽIMY LAYER: Tři soustředné kruhy na každé ose definují registr — 1 (vnitřní kruh) = nízký registr, 2 (střední kruh) = střední registr a 3 (vnější kruh) = vysoký registr. Výchozí režim OCTAVE pracuje např. s C3, C4 a C5; tlačítko LAYER se čtveřicí LED (OCT · INT · CHD · UNI) přepíná mezi režimy OCTAVE, INTERVAL (0 / +7 / +12 st), CHORD a UNISON (0 / 0 / 0 st).",
        "SCALE – VÝBĚR 54 STUPNIC NA LED MATICI & KEY / OCT: Samostatně orámovaný enkodér SCALE (54 PRESETS / PUSH TO SELECT) přepíná matici 54 LED do Scale selection mode, kde každá LED představuje jednu z až 54 stupnic (Major, Minor, Pentatonic, Blues, Symmetric, Exotic, Chromatic a uživatelské mapy). Základní tón KEY (C–B) i oktávu OCT (−3..+3 okt) lze přitom měnit samostatnými potenciometry zcela nezávisle na zvolené stupnici.",
        "TRAV (9 REŽIMŮ) & ODDĚLENÁ RYTMICKÁ PAMĚŤ: Potenciometr TRAV vybírá buď jednu ze 6 stran kostky (U · D · F · B · L · R, kroky 1–9), nebo průchod celou kostkou (PENDULUM · SNAKE · RANDOM, kroky 1–54). Rytmická řada (DEJA VU · PROB · RATCHET 1×–8× · DENSITY) pracuje v oddělené RHYTHM MEMORY (princip Marbles) nezávisle na melodické PITCH MEMORY.",
        "15JACKOVÉ I/O (8 IN + 7 OUT): Horní řada INPUT nabízí CLK, RST, CW TR, AXIS, SCRMB, SOLVE, TRNSP CV (1V/Oct sčítané s KEY a OCT) a TRAV CV (plus tlačítka PLAY, SOLVE, SCRMB). Spodní řada OUTPUT dodává CV1–CV3 (1V/Oct), MOD CV (modulační výstup z 14bit DAC8164), TRG1, TRG2 a synchronizovaný accent ACC.",
      ],
      en: [
        "CORE PRINCIPLE & 2D PROJECTION (22 HP): CUBE_SEQ turns a 3×3×3 Rubik's Cube into a generative Eurorack sequencer via an oversized upper-centered 2D ring projection (3 axes X, Y, Z × 3 concentric rings 1 · 2 · 3, 54 RGB LEDs visible simultaneously). Musical roles are strictly separated: sticker color defines pitch identity, spatial layer (1 / 2 / 3) defines register, SCALE sets interval quantization, KEY picks root note (C–B), OCT sets octave transpose (−3 to +3), and TRAV selects read order. Turning AXIS X, Y, Z push encoders (push selects active ring 1 · 2 · 3) permutes 20 stickers by 90° under group theory.",
        "TONE MAP (6 COLORS, 3 FIFTH PAIRS): The cube's six colors form three opposite pairs — White ↔ Yellow, Red ↔ Orange, and Blue ↔ Green. Default C major pentatonic maps White = C, Yellow = G (C–G fifth), Red = D, Orange = A (D–A fifth), and Blue = E, Green = B (E–B fifth). Each color holds a dedicated semitone offset color_semitones[6] relative to KEY, strictly separated from the 12-bit quantization mask.",
        "SPATIAL LAYERS (1:LOW · 2:MID · 3:HIGH) & LAYER MODES: The three concentric rings per axis define register — 1 (inner ring) = low register, 2 (middle ring) = mid register, and 3 (outer ring) = high register. Default OCTAVE mode maps e.g. C3, C4, C5; the LAYER button with four LEDs (OCT · INT · CHD · UNI) cycles OCTAVE, INTERVAL (0 / +7 / +12 st), CHORD, and UNISON (0 / 0 / 0 st).",
        "SCALE – 54-LED MATRIX PICKER & KEY / OCT: The framed SCALE push-encoder (54 PRESETS / PUSH TO SELECT) switches all 54 cube LEDs into Scale selection mode across up to 54 presets (Major, Minor, Pentatonic, Blues, Symmetric, Exotic, Chromatic, and user maps). Separate dedicated KEY (C–B) and OCT (−3..+3 oct) potentiometers transpose independently of SCALE.",
        "TRAV (9 MODES) & INDEPENDENT RHYTHM MEMORY: TRAV selects either one of the 6 individual faces (U · D · F · B · L · R, 1–9 steps) or full-cube traversals (PENDULUM · SNAKE · RANDOM, 1–54 steps). The dedicated rhythm row (DEJA VU · PROB · RATCHET 1×–8× · DENSITY) runs in a separate RHYTHM MEMORY (Marbles-style) independently of melodic PITCH MEMORY.",
        "15-JACK I/O (8 IN + 7 OUT): The upper INPUT row provides CLK, RST, CW TR, AXIS, SCRMB, SOLVE, TRNSP CV (1 V/Oct summed with KEY & OCT), and TRAV CV alongside PLAY, SOLVE, and SCRMB buttons. The lower OUTPUT row delivers CV1–CV3 (1 V/Oct), MOD CV (14-bit DAC8164 modulation output), TRG1, TRG2, and synced accent ACC.",
      ],
    },
    useCases: [
      {
        t: { cs: "Permutační & vrstvené melodie", en: "Permutation & layered melodies" },
        d: {
          cs: "Otočením vrstvy 1/2/3 se mění prostorové rozmístění barev napříč registry OCTAVE, INTERVAL, CHORD nebo UNISON.",
          en: "Spinning layers 1/2/3 rearranges colors across OCTAVE, INTERVAL, CHORD, or UNISON registers while keeping the pitch pool.",
        },
      },
      {
        t: { cs: "Výběr z 54 stupnic + KEY / OCT", en: "54-scale LED matrix + KEY / OCT" },
        d: {
          cs: "Enkodér SCALE vybere ze 54 stupnic na matici LED, zatímco samostatné knoby KEY (C–B) a OCT (−3..+3) pohotově transponují tóninu i oktávu.",
          en: "SCALE picks from 54 presets on the LED matrix while dedicated KEY (C–B) and OCT (−3..+3) pots transpose key and octave independently.",
        },
      },
      {
        t: { cs: "9 trajektorií TRAV (strany i celá kostka)", en: "9 TRAV modes (faces & full cube)" },
        d: {
          cs: "Čti jednu ze 6 stran kostky (U/D/F/B/L/R, 1–9 kroků) nebo celou kostku přes PENDULUM, SNAKE či RANDOM (1–54 kroků).",
          en: "Read any single face (U/D/F/B/L/R, 1–9 steps) or traverse all 54 stickers via PENDULUM, SNAKE, or RANDOM (1–54 steps).",
        },
      },
      {
        t: { cs: "Rytmická sekce & 3× CV + MOD CV", en: "Rhythm engine & 3× CV + MOD CV" },
        d: {
          cs: "DEJA VU, PROB, RATCHET (1×–8×) a DENSITY generují živou rytmiku na TRG1/TRG2/ACC nezávisle na melodiích CV1–CV3 a MOD CV.",
          en: "DEJA VU, PROB, RATCHET (1×–8×), and DENSITY drive TRG1/TRG2/ACC in a dedicated rhythm memory alongside CV1–CV3 and MOD CV.",
        },
      },
    ],
    controls: {
      cs: [
        "3× enkodér s tlačítkem (AXIS X, AXIS Y, AXIS Z) + 9× LED vrstvy (1:LOW · 2:MID · 3:HIGH)",
        "1× enkodér s tlačítkem SCALE (zvýrazněný blok 54 PRESETS / PUSH TO SELECT — výběr až 54 stupnic na 54 LED kostky)",
        "4× tlačítko: PLAY, SOLVE, SCRMB, LAYER (+ 4× LED prostorových režimů OCT · INT · CHD · UNI)",
        "5× pot sekvenceru & tóniny: RATE / DIV, TRAV (9 režimů), STEPS (1–9 / 54), KEY (C–B), OCT (−3..+3)",
        "4× pot rytmické sekce: DEJA VU (NEW/LOOP/VAR), PROB (0–100 %), RATCHET (1×–8×), DENSITY (0–100 %)",
        "8× INPUT: CLK, RST, CW TR, AXIS, SCRMB, SOLVE, TRNSP (1V/OCT CV), TRAV (CV)",
        "7× OUTPUT: CV1 (1V/OCT), CV2 (1V/OCT), CV3 (1V/OCT), MOD CV, TRG1 (TRIG), TRG2 (TRIG), ACC (TRIG)",
      ],
      en: [
        "3× push-rotary encoders (AXIS X, Y, Z) + 9× layer LEDs (1:LOW · 2:MID · 3:HIGH concentric rings)",
        "1× push-rotary encoder SCALE (highlighted 54 PRESETS / PUSH TO SELECT block — 54-LED scale picker)",
        "4× buttons: PLAY, SOLVE, SCRMB, LAYER (+ 4× layer mode LEDs OCT · INT · CHD · UNI)",
        "5× sequencer & pitch pots: RATE / DIV, TRAV (9 modes), STEPS (1–9 / 54), KEY (C–B), OCT (−3..+3)",
        "4× rhythm pots: DEJA VU (NEW/LOOP/VAR), PROB (0–100%), RATCHET (1×–8×), DENSITY (0–100%)",
        "8× INPUT: CLK, RST, CW TR, AXIS, SCRMB, SOLVE, TRNSP (1V/OCT CV), TRAV (CV)",
        "7× OUTPUT: CV1 (1V/OCT), CV2 (1V/OCT), CV3 (1V/OCT), MOD CV, TRG1 (TRIG), TRG2 (TRIG), ACC (TRIG)",
      ],
    },
    specs: [
      S("Šířka / výška", "Width / height", { cs: "22 HP (111,46 mm × 128,5 mm) / 3U", en: "22 HP (111.46 mm × 128.5 mm) / 3U" }),
      S("LED matice", "LED matrix", { cs: "67× SK6812-EC15 RGB (54× kostka Perf/Scale mode + 9× vrstvy 1·2·3 + 4× Layer mode)", en: "67× SK6812-EC15 RGB (54× cube Perf/Scale mode + 9× slice 1·2·3 + 4× Layer mode)" }, "doc", true),
      S("Tónová mapa & tónina", "Tone map & key", { cs: "6 barev ve 3 kvintových párech (C–G, D–A, E–B) · KEY (C–B) · OCT (−3..+3) · OCT/INT/CHD/UNI", en: "6 colors in 3 fifth pairs (C–G, D–A, E–B) · KEY (C–B) · OCT (−3..+3) · OCT/INT/CHD/UNI" }, "doc", true),
      S("Knihovna stupnic", "Scale library", { cs: "Až 54 stupnic (Major, Minor, Pentatonic, Blues, Symmetric, Exotic, Chromatic + User)", en: "Up to 54 scales (Major, Minor, Pentatonic, Blues, Symmetric, Exotic, Chromatic + User)" }, "doc", true),
      S("Průchody & rytmika", "Traversal & rhythm", { cs: "TRAV (9): U·D·F·B·L·R / PENDULUM·SNAKE·RANDOM · RHYTHM MEMORY (Deja Vu, Prob, Ratchet 1–8×, Density)", en: "TRAV (9): U·D·F·B·L·R / PENDULUM·SNAKE·RANDOM · RHYTHM MEMORY (Deja Vu, Prob, Ratchet 1–8×, Density)" }, "doc", true),
      S("Výkonné jádro", "MCU core", { cs: "STM32G474RCT3 @ 170 MHz (shodný s DMX_OUT)", en: "STM32G474RCT3 @ 170 MHz (shared with DMX_OUT)" }, "doc"),
      S("CV převodník", "CV DAC", "TI DAC8164 (4× 14-bit SPI DAC) + OPA4172", "ds", true),
      S("Analogové výstupy", "Analog CV outputs", { cs: "3× 1 V/Oct Pitch (CV1–CV3) + 1× MOD CV", en: "3× 1 V/Oct Pitch (CV1–CV3) + 1× MOD CV" }, "doc", true),
      S("Trigger / Gate výstupy", "Trigger / Gate outputs", "3× +5 V (TRG1, TRG2, ACC)", "doc", true),
      S("Vstupy CV / Clock", "CV / Clock inputs", "8× 100 kΩ (CLK, RST, CW TR, AXIS, SCRMB, SOLVE, TRNSP, TRAV)", "doc"),
      S("KiCad projekt", "KiCad project", { cs: "Kompletní 4listové schéma + DPS, ARCHITECTURE.md & SCALES.md v AUDIO_eurorack/Cube_seq", en: "Full 4-sheet schematic + PCB, ARCHITECTURE.md & SCALES.md in AUDIO_eurorack/Cube_seq" }, "doc"),
      S("Napájení", "Power", { cs: "±12 V Eurorack (odhad ~230 mA +12 V LED max / 25 mA −12 V)", en: "±12 V Eurorack (est. ~230 mA +12 V LED max / 25 mA −12 V)" }, "tbd", true),
    ],
    gallery: [
      { src: "assets/products/cube-seq/preview.png?v=20261118d", cap: { cs: "Čelní panel 22 HP (Rev 1.0) — 9 potenciometrů (KEY, OCT, DEJA VU, PROB, RATCHET, DENSITY) & 15 I/O", en: "22 HP Front Panel (Rev 1.0) — 9 pots (KEY, OCT, DEJA VU, PROB, RATCHET, DENSITY) & 15 I/O" } },
      { src: "assets/diagrams/cube-seq-pipeline.svg?v=20261118d", cap: { cs: "Architektura CUBE_SEQ Rev 1.0: 4× EC11, 9× POT, 54 stupnic & 4× CV + 3× Gate", en: "CUBE_SEQ Rev 1.0 Architecture: 4× EC11, 9× POT, 54 scales & 4× CV + 3× Gate" } },
    ],
    related: ["cue-frames", "elements-v04", "the-in"],
  },

  "monobox": {
    division: "AUD",
    name: "MONOBOX",
    hp: "10 HP",
    serial: "DD-MB01 // REV 2.0",
    status: { cs: "Frontpanel 10 HP · revize PCB v přípravě", en: "10 HP front panel · PCB revision in progress" },
    image: "assets/products/monobox/preview.png?v=20261118a",
    tagline: {
      cs: "Vestavný 10 HP reproduktorový odposlech přímo do Eurorack skříně.",
      en: "Built-in 10 HP Eurorack speaker monitor for quick patching and rehearsal checks.",
    },
    short: {
      cs: "10 HP odposlech s oválným reproduktorem Visaton SC 5.9 OM (8 Ω / 10 W), 2vstupy (IN 1, IN 2), regulací hlasitosti VOL a hardwarovým přepínačem MUTE + LED ON.",
      en: "10 HP monitor with a Visaton SC 5.9 OM oval speaker (8 Ω / 10 W), dual inputs (IN 1, IN 2), VOL attenuator, and hardware MUTE switch + ON LED.",
    },
    long: {
      cs: [
        "MONOBOX (2W_module Rev 2.0) je kompaktní 10 HP reproduktorový modul navržený jako pohotový odposlech přímo v modulárním kufru — ideální pro testování patchů, ladění oscilátorů nebo samostatné hraní bez nutnosti zapojovat externí monitory či sluchátka.",
        "Horní a střední část čelního panelu nese čistě vycentrovanou akustickou hexagonální mřížku a montážní otvory 40,0 × 75,0 mm (4× M3) přesně pro širokopásmový oválný reproduktor Visaton SC 5.9 OM (8 Ω, 10 W RMS, 90 Hz – 20 kHz).",
        "Spodní ovládací lišta v jednotném designu DECØY DEVICES // AUDIO sjednocuje dva 3,5mm mono vstupy (IN 1, IN 2) do interního součtu, posuvný přepínač MUTE s LED indikací aktivního stavu ON a přehledný potenciometr hlasitosti VOL.",
      ],
      en: [
        "MONOBOX (2W_module Rev 2.0) is a compact 10 HP speaker module designed as an always-ready monitor right inside your Eurorack case — ideal for patch checks, tuning oscillators, or standalone sketching without external monitors or headphones.",
        "The upper and center sections feature a clean staggered hexagonal acoustic grille and 40.0 × 75.0 mm (4× M3) mounting pattern fitted for the Visaton SC 5.9 OM wideband oval driver (8 Ω, 10 W RMS, 90 Hz – 20 kHz).",
        "Along the bottom strip, in the unified DECØY DEVICES // AUDIO style, sit two 3.5 mm mono inputs (IN 1, IN 2) summed together, a hardware MUTE slide switch with an ON status LED, and a VOL level control.",
      ],
    },
    useCases: [
      {
        t: { cs: "Odposlech v kufru bez kabeláže", en: "Self-contained case monitoring" },
        d: {
          cs: "Okamžitý zvuk přímo z racku na cestách, ve zkušebně i při ladění modulu na stole.",
          en: "Instant sound straight out of the skiff on the road, in rehearsals, or at the workbench.",
        },
      },
      {
        t: { cs: "Rychlý A/B check dvou zdrojů", en: "Quick 2-channel sum check" },
        d: {
          cs: "Dva vstupy IN 1 a IN 2 umožňují porovnat nebo sečíst dva signály bez obsazení hlavního mixu.",
          en: "Dual inputs IN 1 and IN 2 let you monitor or sum two voices without occupying your main mixer.",
        },
      },
      {
        t: { cs: "Tiché přepínání přes MUTE", en: "Clean hardware MUTE" },
        d: {
          cs: "Mechanický přepínač MUTE s LED ON okamžitě umlčí výstup během přepojování kabelů.",
          en: "A physical MUTE slide switch with ON indicator silences the speaker cleanly while repatching.",
        },
      },
    ],
    controls: {
      cs: [
        "Reproduktor: Visaton SC 5.9 OM (8 Ω / 10 W, montáž 4× M3 v rastru 40,0 × 75,0 mm)",
        "IN 1, IN 2 — 2× 3,5mm audio vstup (součtový vstup)",
        "MUTE + ON LED — posuvný přepínač ztlumení a indikátor aktivního stavu",
        "VOL — potenciometr výstupní hlasitosti",
      ],
      en: [
        "Speaker: Visaton SC 5.9 OM (8 Ω / 10 W, 4× M3 mounting 40.0 × 75.0 mm)",
        "IN 1, IN 2 — dual 3.5 mm summed audio inputs",
        "MUTE + ON LED — hardware mute slide switch and active indicator",
        "VOL — output volume attenuator",
      ],
    },
    specs: [
      S("Šířka / výška", "Width / height", "10 HP (50,60 mm × 128,50 mm) / 3U"),
      S("Reproduktor", "Driver", "Visaton SC 5.9 OM (8 Ω, 10 W RMS, 90 Hz – 20 kHz)", "ds", true),
      S("Zesilovač (cíl revize)", "Amplifier (target)", "TI LM4950TS Mono-BTL (až 7,5 W @ 8 Ω)", "ds", true),
      S("Vstupy", "Inputs", "2× 3,5 mm mono (IN 1, IN 2)", "doc", true),
      S("Ovládání", "Controls", "VOL (potenciometr), MUTE (přepínač) + LED ON", "doc", true),
      S("Čelní panel", "Front panel", "Matně černá PCB, bílý silkscreen, HASL stříbro", "doc"),
      S("Napájení", "Power", "+12 V Eurorack (−12 V nezapojeno)", "doc", true),
    ],
    gallery: [
      { src: "assets/products/monobox/preview.png?v=20261118a", cap: { cs: "Čelní panel 10 HP — DECØY DEVICES AUDIO", en: "10 HP Front Panel — DECØY DEVICES AUDIO" } },
    ],
    related: ["the-out", "the-in", "cube-seq"],
  },

  "fvck-girl": {
    division: "VID",
    tab: "desktop",
    name: "FVCK_GIRL",
    hp: "DESKTOP · 112,5×233 mm",
    serial: "DD-FG01 // VID.SYN.AB",
    status: {
      cs: "Univerzální hlavní PCB (Varianta A + B) + firmware STM32",
      en: "Universal main PCB (Variant A + B) + STM32 firmware",
    },
    image: "assets/products/fvck-girl/preview.svg?v=20261119b",
    tagline: {
      cs: "Univerzální video syntezátor s jedním hmatovým panelem a dvěma výpočetními světy: Raspberry Pi Zero 2 W (Varianta A) nebo Tang Nano 20K FPGA (Varianta B) — s otevřenou cestou pro Orange Pi a Radxa.",
      en: "Universal video synthesizer pairing one tactile control deck with two compute worlds: Raspberry Pi Zero 2 W (Variant A) or Tang Nano 20K FPGA (Variant B) — built to scale to Orange Pi and Radxa.",
    },
    short: {
      cs: "Desktop video synth (112,5 × 233,05 mm): 8× otočný potenciometr, 4× podsvícený 45mm fader Bourns PTL45, 8× mechanické klávesy Cherry MX, enkodér EC11 a STM32C092. Dvě osazovací varianty PCB (RPi Zero 2 W / Tang Nano 20K) přes izolovaný 1 Mbaud UART.",
      en: "Desktop video synth (112.5 × 233.05 mm): 8× rotary pots, 4× backlit 45 mm Bourns PTL45 faders, 8× Cherry MX mechanical keys, EC11 encoder, and STM32C092. Two PCB assembly variants (RPi Zero 2 W / Tang Nano 20K) over isolated 1 Mbaud UART.",
    },
    long: {
      cs: [
        "KONCEPCE UNIVERZÁLNÍ HLAVNÍ PCB: FVCK_GIRL staví na jediné společné základní desce (112,5 × 233,05 mm), která odděluje hmatové ovládání od samotného video enginu. Horní zónu desky tvoří oddělená pozice AREA A (J_RPI) vlevo, napájecí vstup 5V USB-C IN s duálními LDO uprostřed a pozice AREA B (J_FPGA) vpravo; pod nimi leží enkodér EC11 (mode / param), 2 řady po 4 potenciometrech (RV3, RV4, RV1, RV2 nahoře · RV6, RV5, RV7, RV8 dole), 4 podsvícené 45mm fadery Bourns PTL45 (RV9–RV12) a 8 mechanických tlačítek Cherry MX (SW1–SW8). Vše čte přímo mikrořadič STM32C092RCT6TR bez multiplexeru (12× přímý 12bitový ADC s odděleným analogovým LDO +3V3A). Řídicí paket s kontrolním součtem proudí každých 16 ms rychlostí 1 Mbaud přes obousměrný izolátor SN74AVC4T245PW (ochrana proti zpětnému napájení vypnutého hostitele) do zvolené výpočetní pozice.",
        "VARIANTA A — RASPBERRY PI ZERO 2 W (GLSL / OPENFRAMEWORKS): Pozice J_RPI nese 40pinový GPIO konektor pro Raspberry Pi Zero 2 W (čtyřjádrový ARM Cortex-A53 + VideoCore IV GPU) s vlastním napájením přes microUSB 5 V a přímým mini-HDMI výstupem. Teoretické možnosti této varianty stojí na programovatelných GLSL ES shaderech a frameworku OpenFrameworks: komplexní 5-tap feedback blur (0–96 %), vícevrstvé míchání (LAYER 1 / LAYER 2), doménové deformace, fraktální a fluidní generátory, přehrávání video smyček či textur z microSD karty, ukládání presetů i bezdrátová synchronizace přes Wi-Fi / OSC / Web UI. Ideální pro organické, bohatě texturované vizuály a rychlé psaní vlastních shaderů.",
        "VARIANTA B — TANG NANO 20K (FPGA REAL-TIME ENGINE): Pozice J_FPGA hostí desku Sipeed Tang Nano 20K (Gowin GW2AR-18: 20 736 LUT, 48 DSP bloků, 64 Mb integrované SDRAM) napájenou z hlavního USB-C přes rozpojitelnou propojku SJ_FPGA_5V, s přímým HDMI výstupem bez operačního systému. Teoretické možnosti FPGA varianty spočívají v pravé hardwarové syntéze obrazu v reálném čase: deterministických 60 fps s nulovým jitterem, latence v řádu jednotlivých řádků (sub-frame odezva na pohyb faderu či stisk MX klávesy), okamžitý start pod 1 sekundu, přesné digitální oscilátory X/Y, hardwarový kaleidoskop, bit-crushing, XOR/solarize klíčování, scanline deformace a feedback smyčky přímo v SDRAM. Skvělá pro nekompromisní živé hraní, kde nesmí nic spadnout ani zamrznout.",
        "BUDOUCÍ VÝVOJ — ORANGE PI & RADXA (VÝKONNÉ ARM64 SBC): Protože ovládací deska s STM32 komunikuje po čistém 3,3 V UART protokolu a HDMI nevede přes hlavní PCB, je architektura FVCK_GIRL připravena na budoucí generaci výkonnějších jednodeskových počítačů — konkrétně řady Orange Pi (Zero 2W / 3B / 5 s čipy Allwinner H618 a Rockchip RK3566–RK3588) a Radxa (Zero 3W / Rock 5 s GPU Mali-G610 a integrovanou NPU až 6 TOPS). Teoreticky to otevře cestu k 1080p60 až 4K GLSL/Vulkan shaderům bez kompromisů, živému HDMI-IN nebo USB video vstupu (zpracování kamer a externích video synthů v reálném čase), vícevrstvému video mixu, síťovým protokolům NDI / Art-Net / OSC i experimentálním neuronovým efektům (real-time style-transfer, optický tok, segmentace scény) — při zachování naprosto stejného panelu i firmwaru STM32.",
      ],
      en: [
        "UNIVERSAL MAIN PCB CONCEPT: FVCK_GIRL is built around a single universal motherboard (112.5 × 233.05 mm) separating the tactile control surface from the video compute engine. The top section holds AREA A (J_RPI) on the left, the 5V USB-C IN supply with dual LDOs in the center, and AREA B (J_FPGA) on the right; below sit the EC11 encoder (mode / param), two rows of four pots (RV3, RV4, RV1, RV2 top · RV6, RV5, RV7, RV8 bottom), four backlit 45 mm Bourns PTL45 faders (RV9–RV12), and eight Cherry MX mechanical switches (SW1–SW8). All controls are scanned directly by an STM32C092RCT6TR without any multiplexer (12× direct 12-bit ADC powered by a dedicated +3V3A analog LDO). Checksummed UART control frames stream every 16 ms at 1 Mbaud through an SN74AVC4T245PW isolator (zero back-powering when the host is off) into the populated compute bay.",
        "VARIANT A — RASPBERRY PI ZERO 2 W (GLSL / OPENFRAMEWORKS): Bay J_RPI provides a 40-pin GPIO header for a Raspberry Pi Zero 2 W (quad-core ARM Cortex-A53 + VideoCore IV GPU) with independent 5 V microUSB power and direct mini-HDMI output. Theoretically, Variant A shines at programmable GLSL ES shaders and OpenFrameworks pipelines: 5-tap feedback blur (0–96%), multi-layer compositing (LAYER 1 / LAYER 2), domain warping, fractal and fluid generators, microSD video loop/texture playback, preset recall, and wireless Wi-Fi / OSC / Web UI control. Ideal for lush, organic visuals and rapid shader iteration.",
        "VARIANT B — TANG NANO 20K (FPGA REAL-TIME ENGINE): Bay J_FPGA mounts a Sipeed Tang Nano 20K (Gowin GW2AR-18: 20,736 LUTs, 48 DSP blocks, 64 Mb integrated SDRAM), powered from the main USB-C rail via a disconnectable SJ_FPGA_5V jumper, with direct HDMI output and zero operating system. Theoretically, the FPGA path unlocks true hardware real-time video synthesis: deterministic 60 fps with zero frame jitter, sub-frame scanline-level latency to every fader move and Cherry MX hit, instant < 1 s boot, cycle-accurate X/Y oscillators, hardware kaleidoscope, bit-level glitching, XOR/solarize keying, and SDRAM feedback loops. Built for rock-solid live shows where nothing can crash or stall.",
        "FUTURE ROADMAP — ORANGE PI & RADXA (HIGH-POWER ARM64 SBCs): Because the STM32 control deck speaks a clean 3.3 V UART protocol and HDMI never routes through the main PCB, FVCK_GIRL is naturally ready for next-generation ARM64 boards — specifically Orange Pi (Zero 2W / 3B / 5 on Allwinner H618 and Rockchip RK3566–RK3588) and Radxa (Zero 3W / Rock 5 with Mali-G610 GPU and up to 6 TOPS NPU). Theoretically, this unlocks uncompromising 1080p60 to 4K GLSL/Vulkan shaders, live HDMI-IN / USB capture (processing cameras and external video synths in real time), multi-layer video mixing, NDI / Art-Net / OSC networking, and real-time neural FX (style transfer, optical flow, live segmentation) — all using the exact same control surface and STM32 firmware.",
      ],
    },
    comparisonMeta: {
      num: { cs: "// VARIANTA A vs. VARIANTA B vs. BUDOUCNOST", en: "// VARIANT A vs. VARIANT B vs. ROADMAP" },
      heading: { cs: "POROVNÁNÍ VÝPOČETNÍCH VARIANT", en: "COMPUTE VARIANT COMPARISON" },
      col0: { cs: "OBLAST / PARAMETR", en: "FEATURE / PARAMETER" },
      col1: { cs: "VARIANTA A: RPI ZERO 2 W", en: "VARIANT A: RPI ZERO 2 W" },
      col2: { cs: "VARIANTA B: TANG NANO 20K", en: "VARIANT B: TANG NANO 20K" },
      col3: { cs: "BUDOUCNOST: ORANGE PI / RADXA", en: "FUTURE: ORANGE PI / RADXA" },
    },
    comparison: [
      {
        f: { cs: "Výpočetní jádro", en: "Compute core" },
        orig: { cs: "4× ARM Cortex-A53 (1 GHz) + VideoCore IV GPU, 512 MB RAM", en: "Quad ARM Cortex-A53 (1 GHz) + VideoCore IV GPU, 512 MB RAM" },
        v04: { cs: "Gowin GW2AR-18 FPGA (20 736 LUT, 48 DSP, 64 Mb SDRAM)", en: "Gowin GW2AR-18 FPGA (20,736 LUTs, 48 DSPs, 64 Mb SDRAM)" },
        imp: { cs: "Allwinner H618 / Rockchip RK3566–RK3588, Mali-G610 GPU + až 6 TOPS NPU", en: "Allwinner H618 / Rockchip RK3566–RK3588, Mali-G610 GPU + up to 6 TOPS NPU" },
      },
      {
        f: { cs: "Video engine", en: "Video engine" },
        orig: { cs: "OpenFrameworks (C++) + GLSL ES 2.0 shadery pod Linuxem", en: "OpenFrameworks (C++) + GLSL ES 2.0 shaders on Linux" },
        v04: { cs: "Čistá RTL / Verilog hardwarová video pipeline bez OS", en: "Pure RTL / Verilog hardware video pipeline, bare-metal (no OS)" },
        imp: { cs: "GLSL ES 3.2 / Vulkan, GStreamer / OpenFrameworks, NPU AI pipeline", en: "GLSL ES 3.2 / Vulkan, GStreamer / OpenFrameworks, NPU AI pipeline" },
      },
      {
        f: { cs: "Start & latence", en: "Boot & latency" },
        orig: { cs: "Start ~12–20 s (Linux); odezva 1–2 snímky (~16–33 ms)", en: "~12–20 s Linux boot; 1–2 frames latency (~16–33 ms)" },
        v04: { cs: "Okamžitý start < 1 s; sub-řádková / 0–1 snímková deterministická odezva", en: "Instant < 1 s boot; sub-line / 0–1 frame deterministic latency" },
        imp: { cs: "Start ~8–15 s; 1 snímek @ 60 fps i pro velmi náročné shadery", en: "~8–15 s boot; steady 1-frame @ 60 fps even for heavy shaders" },
      },
      {
        f: { cs: "Teoretické možnosti", en: "Theoretical capabilities" },
        orig: { cs: "5-tap feedback blur, fraktály, fluid/warp shadery, microSD smyčky, Wi-Fi/OSC", en: "5-tap feedback blur, fractals, fluid/warp shaders, microSD loops, Wi-Fi/OSC" },
        v04: { cs: "Hardwarové X/Y oscilátory, scanline glitch, bit-XOR, kaleidoskop, SDRAM feedback", en: "Hardware X/Y oscillators, scanline glitch, bit-XOR, kaleidoscope, SDRAM feedback" },
        imp: { cs: "1080p60–4K shadery, HDMI-IN / USB capture, multi-layer mix, NDI/Art-Net, AI style-transfer", en: "1080p60–4K shaders, HDMI-IN / USB capture, multi-layer mix, NDI/Art-Net, AI style-transfer" },
      },
      {
        f: { cs: "Napájení modulu", en: "Module power" },
        orig: { cs: "Vlastní microUSB PWR IN (5 V); galvanicky oddělené napájení od hlavní PCB", en: "Dedicated microUSB PWR IN (5 V); isolated from main PCB power rails" },
        v04: { cs: "Z hlavního USB-C přes rozpojitelnou propojku SJ_FPGA_5V", en: "Powered from main PCB USB-C via disconnectable SJ_FPGA_5V jumper" },
        imp: { cs: "Vlastní USB-C 5 V napájení SBC + společná GND a izolovaný 3,3 V UART", en: "Dedicated SBC USB-C 5 V supply + common GND and isolated 3.3 V UART" },
      },
      {
        f: { cs: "HDMI & rozhraní", en: "HDMI & I/O" },
        orig: { cs: "Přímý mini-HDMI z RPi (bez vedení přes PCB), microSD, Wi-Fi/BT", en: "Direct mini-HDMI from RPi (not routed on PCB), microSD, Wi-Fi/BT" },
        v04: { cs: "Přímý HDMI z Tang Nano 20K, USB-C debugger, microSD", en: "Direct HDMI from Tang Nano 20K, USB-C debugger, microSD" },
        imp: { cs: "Přímý plnohodnotný HDMI / micro-HDMI (+ HDMI-IN u Rock 5 / OPi 5), USB 3.0, GbE", en: "Direct full/micro-HDMI (+ HDMI-IN on Rock 5 / OPi 5), USB 3.0, GbE" },
      },
      {
        f: { cs: "Ideální použití", en: "Best suited for" },
        orig: { cs: "Komplexní generativní shadery, VJing, snadné psaní vlastního kódu", en: "Complex generative shaders, VJing, fast custom shader authoring" },
        v04: { cs: "Nezničitelný koncertní/divadelní nástroj s nulovým jitterem a syrovou estetikou", en: "Bulletproof live/stage instrument with zero jitter and raw hardware aesthetics" },
        imp: { cs: "Profesionální 4K projekce, živé zpracování kamer a AI/NPU vizuální experimenty", en: "Pro 4K projections, live camera processing, and real-time AI/NPU visual experiments" },
      },
    ],
    useCases: [
      {
        t: { cs: "Živé VJing & klubové projekce (Varianta A)", en: "Live VJing & club visuals (Variant A)" },
        d: {
          cs: "Plynulé GLSL shadery, 5-tap feedback blur a přepínání scén přes 8 mechanických kláves Cherry MX s okamžitou hmatovou odezvou.",
          en: "Fluid GLSL shaders, 5-tap feedback blur, and instant scene switching on 8 Cherry MX mechanical keys with tactile feedback.",
        },
      },
      {
        t: { cs: "Tvrdá FPGA syntéza bez OS (Varianta B)", en: "Bare-metal FPGA synthesis (Variant B)" },
        d: {
          cs: "Zapneš a do vteřiny hraješ v pevných 60 fps bez bootování Linuxu — surové scanline oscilátory, bitové glitche a hardwarový kaleidoskop.",
          en: "Power on and play at locked 60 fps in under a second with no OS boot — raw scanline oscillators, bit glitches, and hardware kaleidoscope.",
        },
      },
      {
        t: { cs: "Jedna deska, budoucí upgrade na Orange Pi / Radxa", en: "One deck, future Orange Pi / Radxa upgrade" },
        d: {
          cs: "Stejná ovládací deska s STM32 a 1 Mbaud izolovaným UARTem může v budoucnu řídit výkonné ARM64 desky pro 4K shadery, živé kamery i NPU efekty.",
          en: "The same STM32 control deck and isolated 1 Mbaud UART can drive future ARM64 boards for 4K shaders, live camera feeds, and NPU effects.",
        },
      },
      {
        t: { cs: "Scénická & divadelní synchronizace", en: "Stage & theatrical integration" },
        d: {
          cs: "Podsvícené 45mm fadery (LAYER 1, LAYER 2, HUE, SATURATION) čitelné ve tmě, FX HOLD pro rytmické akcenty a HUD / BYPASS pro čistý střih.",
          en: "Backlit 45 mm faders (LAYER 1, LAYER 2, HUE, SATURATION) readable in the dark, FX HOLD for rhythmic accents, and HUD / BYPASS for clean cuts.",
        },
      },
    ],
    controls: {
      cs: [
        "8× otočný potenciometr: LFO SPEED (0,04–10 Hz), LFO DEPTH, OSC X, OSC Y, BLUR, FEEDBACK (0–96 %), FX MIX, BRIGHTNESS",
        "4× podsvícený 45mm fader (Bourns PTL45-10R0, 3,3 V): LAYER 1, LAYER 2, HUE, SATURATION",
        "8× mechanické tlačítko Cherry MX: SHADER, RANDOMIZE, INVERT, FREEZE, FX HOLD, LFO SYNC, MIRROR, HUD / BYPASS (dlouhý stisk ≥ 0,5 s)",
        "1× otočný enkodér s tlačítkem (EC11E): výběr režimu a podrobných parametrů + stavová RGB LED (WS2812B-2020)",
        "Napájení hlavní PCB: USB-C 5 V sink (CC1/CC2 5,1 kΩ, PTC pojistka, TVS ochrana) + duální LDO (+3V3 dig / +3V3A ana)",
        "Výpočetní pozice (osazuje se vždy jedna): J_RPI (40pin GPIO) nebo J_FPGA (2×20pin + propojka SJ_FPGA_5V); HDMI vede přímo z modulu",
      ],
      en: [
        "8× rotary pots: LFO SPEED (0.04–10 Hz), LFO DEPTH, OSC X, OSC Y, BLUR, FEEDBACK (0–96%), FX MIX, BRIGHTNESS",
        "4× backlit 45 mm faders (Bourns PTL45-10R0, 3.3 V): LAYER 1, LAYER 2, HUE, SATURATION",
        "8× Cherry MX mechanical switches: SHADER, RANDOMIZE, INVERT, FREEZE, FX HOLD, LFO SYNC, MIRROR, HUD / BYPASS (long press ≥ 0.5 s)",
        "1× push-rotary encoder (EC11E): mode & parameter selection + RGB status LED (WS2812B-2020)",
        "Main PCB power: USB-C 5 V sink (CC1/CC2 5.1 kΩ, PTC fuse, TVS protection) + dual LDO (+3V3 dig / +3V3A analog)",
        "Compute bays (mutually exclusive assembly): J_RPI (40-pin GPIO) or J_FPGA (2×20-pin + SJ_FPGA_5V jumper); HDMI directly from compute module",
      ],
    },
    specs: [
      S("Rozměry hlavní PCB", "Main PCB dimensions", "112,5 × 233,05 mm (desktop formát)", "doc", true),
      S("Řídicí MCU", "Control MCU", "STM32C092RCT6TR (ARM Cortex-M0+, 48 MHz, 12× přímý 12-bit ADC)", "doc", true),
      S("Komunikace MCU ↔ Host", "MCU ↔ Host bus", "UART 3,3 V @ 1 Mbaud (16 ms paket s CRC/XOR) + HOST_READY, SN74AVC4T245PW + 330 Ω", "doc", true),
      S("Varianta A (VIDEO_SYNTH_RPI)", "Variant A (VIDEO_SYNTH_RPI)", { cs: "Raspberry Pi Zero 2 W · OpenFrameworks / GLSL · vlastní microUSB 5 V · mini-HDMI", en: "Raspberry Pi Zero 2 W · OpenFrameworks / GLSL · own 5 V microUSB · mini-HDMI" }, "doc", true),
      S("Varianta B (VIDEO_SYNTH_FPGA)", "Variant B (VIDEO_SYNTH_FPGA)", { cs: "Sipeed Tang Nano 20K (GW2AR-18) · FPGA video engine · 5 V přes SJ_FPGA_5V · HDMI", en: "Sipeed Tang Nano 20K (GW2AR-18) · FPGA video engine · 5 V via SJ_FPGA_5V · HDMI" }, "doc", true),
      S("Budoucí SBC platformy", "Future SBC roadmap", { cs: "Orange Pi (Zero 2W / 3B / 5) & Radxa (Zero 3W / Rock 5) — stejný UART protokol", en: "Orange Pi (Zero 2W / 3B / 5) & Radxa (Zero 3W / Rock 5) — same UART protocol" }, "doc", true),
      S("Ovládací prvky", "Controls", { cs: "8× Alpha pot + 4× Bourns PTL45 LED fader + 8× Cherry MX + EC11 enkodér", en: "8× Alpha pots + 4× Bourns PTL45 LED faders + 8× Cherry MX + EC11 encoder" }, "doc"),
      S("Napájení hlavní PCB", "Main PCB power", "USB-C 5 V sink (5,1 kΩ CC1/CC2), PTC 1,5 A, SMBJ5.0CA, 2× AP2112K-3.3", "doc", true),
      S("Podsvícení faderů", "Fader backlight", "3,3 V spínané MOSFETem 2N7002 (PA9 z MCU), oddělené od analogové větve", "doc"),
      S("MIDI / HDMI přes PCB", "MIDI / HDMI via PCB", { cs: "Bez MIDI · HDMI vždy přímo z výpočetního modulu", en: "No MIDI · HDMI always direct from compute module" }, "doc"),
    ],
    gallery: [
      { src: "assets/products/fvck-girl/preview.svg?v=20261119b", cap: { cs: "FVCK_GIRL — přesný layout čelního panelu 1:1 dle PCB (112,5 × 233,05 mm)", en: "FVCK_GIRL — exact 1:1 front panel layout from PCB (112.5 × 233.05 mm)" } },
      { src: "assets/products/fvck-girl/pcb_render.png?v=20261119a", cap: { cs: "3D render univerzální hlavní PCB (AREA A: J_RPI vlevo, AREA B: J_FPGA vpravo)", en: "3D render of universal main PCB (AREA A: J_RPI left, AREA B: J_FPGA right)" } },
    ],
    related: ["fvck-boy", "cue-frames"],
  },

  "fvck-boy": {
    division: "VID",
    tab: "desktop",
    name: "FVCK_BOY",
    hp: "CONSOLE · 367×241 mm",
    serial: "DD-FB01 // ARENA.CTRL",
    status: {
      cs: "Revize STM32H562 + kompletní firmware & PCB popisy",
      en: "STM32H562 revision + complete firmware & PCB overlays",
    },
    image: "assets/products/fvck-boy/01_ARENA_Resolume.png?v=20261120a",
    tagline: {
      cs: "Hardwarová konzole pro Resolume Arena na STM32H562VIT6 s obousměrnou RGB LED maticí (10×5), 87 spínači, 45 analogy a 4 vestavěnými režimy přes jediný enkodér.",
      en: "Hardware Resolume Arena controller built on STM32H562VIT6 with a bidirectional 10×5 RGB LED grid, 87 switches, 45 analog controls, and 4 onboard modes via a single encoder.",
    },
    short: {
      cs: "Konzole 367 × 241 mm: 10×5 Cherry MX RGB Clip Grid, 11 podsvícených faderů PTL45/60, 4×4 OneShot grid, joystick & EC11 enkodér. Primárně Resolume Arena (USB MIDI + OSC SysEx feedback), sekundárně MIDI Sequencer, WAV Sampler a 48 kHz DSP Synth.",
      en: "367 × 241 mm console: 10×5 Cherry MX RGB Clip Grid, 11 backlit PTL45/60 faders, 4×4 OneShot grid, joystick & EC11 encoder. Primary Resolume Arena mode (USB MIDI + OSC SysEx feedback), plus MIDI Sequencer, WAV Sampler, and 48 kHz DSP Synth.",
    },
    long: {
      cs: [
        "PRIMÁRNÍ REŽIM — RESOLUME ARENA CONTROLLER (AR): FVCK_BOY je navržen především jako nekompromisní hardwarový kontroler pro živé VJing a scénické odbavování v Resolume Arena. Ústřední 10×5 mechanický grid (Cherry MX + podsvícení WS2812B-2020) mapuje 10 sloupců × 5 vrstev přímo na klipy v Resolume, doplněný o 10 tlačítek Stop Clip, 10 layer stripů (45mm PTL45 fader + Transmission knob + Vertical pot), 60mm Master fader PTL60, 3 SubMastery (např. Hazer / Fan), 8 knobů Dashboard, 4×4 OneShot / Strobe grid, kontrolní sekci BPM (Play/Pause/Resync/Tap + SHIFT Ch2) a 2osý joystick pro plynulé scrollování.",
        "OBOUSMĚRNÁ KOMUNIKACE & STAVOVÝ AUTOMAT LED: Barva a jas každé z 50 buněk nekopírují jen poslední lokální stisk — autoritativně zobrazují skutečný stav Resolume Arena ze dvou možných cest zpětné vazby: buď přímo přes USB MIDI feedback, nebo přes přiložený Python bridge (resolume_osc_bridge.py), který čte OSC výstup z Resolume a posílá kompaktní SysEx pakety (F0 7D 46 42). Každá buňka rozlišuje stavy IDLE (~2 % pro prázdné sloty), AVAILABLE (~10 % barvy vrstvy), PRESSED (okamžitý 80ms bílý flash), PENDING (pulzující čekání na potvrzení s timeoutem 450 ms), ACTIVE (~90 % při přehrávání) a SELECTED, zatímco LED D82 indikuje stav spojení (oranžová = odpojeno, modrá = čeká na sync, tyrkysová = synchronizováno). Současně běží obousměrné MIDI směrování USB MIDI ↔ TRS Type-A MIDI (J10/J13).",
        "HARDWAROVÁ ARCHITEKTURA (REVIZE STM32H562VIT6): Nová revize opouští RP2350 ve prospěch MCU STM32H562VIT6 (Cortex-M33 @ 240 MHz, 2 MB Flash bez externí QSPI, 640 KB SRAM). Na 2vrstvém PCB (367 × 241 mm) je osazeno 9× 16kanálových multiplexerů CD74HC4067M pro čtení všech 87 tlačítek (Active-Low s RC filtry) a 45 analogových vstupů, samostatný LDO +3V3LED (U13 MIC29302AWU) pro řetězec 81× WS2812B + 4× WS2811, dva USB-C porty (datový J4 s ESD D67 + napájecí J1 s vypínačem SW86), DMX512 XLR-3 (MAX3485), TRS MIDI IN (optočlen 6N137) / OUT a šestice 3,5mm jacků s externím 16bitovým DAC8552 (U16), interním 12bitovým DAC (PA4/PA5) a 5V TTL trigery.",
        "SDÍLENÝ OS & SEKUNDÁRNÍ REŽIMY PŘES ENKODÉR ENC1: Sdílená vrstva firmware (Core/ + OS/) obsluhuje panelovou matici, MIDI i LED displej 10×5 (50px bitmapové menu). Stiskem enkodéru ENC1 lze kdykoli přepnout z Resolume kontroleru (AR) do dalších tří samostatných nástrojů: 5stopého generativního MIDI krokového sekvenceru (SQ — probability, ratchet, polymetrie, Euclidean), 50krokové WAV bicí mašiny (SM — interní 48 kHz DAC) a algoritmického DSP drum syntezátoru (SY — Kick, Snare, Hi-Hat s choke, Tom/Clap/FM přes 16bitový DAC8552 na J3/J9).",
      ],
      en: [
        "PRIMARY MODE — RESOLUME ARENA CONTROLLER (AR): FVCK_BOY is built first and foremost as a dedicated tactile live controller for Resolume Arena. Its central 10×5 mechanical switch matrix (Cherry MX + WS2812B-2020) maps 10 columns × 5 layers directly to clips, backed by 10 Stop Clip switches, 10 full channel strips (45 mm backlit PTL45 fader + Transmission knob + Vertical pot), a 60 mm PTL60 Master fader, 3 SubMasters (e.g. Hazer / Fan), 8 Dashboard knobs, a 4×4 OneShot / Strobe grid, transport & BPM controls (Play/Pause/Resync/Tap + SHIFT page 2), and an analog 2-axis joystick.",
        "BIDIRECTIONAL FEEDBACK & LED STATE MACHINE: Cell colors never just reflect local button presses—they represent the live, authoritative state of Resolume Arena via either native USB MIDI feedback or the included Python OSC-to-USB-MIDI Bridge (resolume_osc_bridge.py) over custom SysEx frames (F0 7D 46 42). Every cell distinguishes IDLE (~2% unassigned), AVAILABLE (~10% layer color), PRESSED (80 ms tactile flash), PENDING (pulsing confirmation wait with 450 ms timeout), ACTIVE (~90% playing), and SELECTED states, while D82 indicates link status (amber = disconnected, blue = awaiting sync, teal = synced), alongside bidirectional USB MIDI ↔ TRS Type-A MIDI Thru.",
        "HARDWARE REVISION (STM32H562VIT6): Moving from RP2350 to STM32H562VIT6 (Cortex-M33 @ 240 MHz, 2 MB internal Flash without external QSPI, 640 KB SRAM), the 367 × 241 mm PCB houses 9× CD74HC4067M 16-channel multiplexers scanning 87 switches and 45 analog channels, a dedicated +3V3LED rail (U13 MIC29302AWU) driving 81× WS2812B + 4× WS2811 fader LEDs, dual USB-C ports (J4 data + J1 power with SW86), DMX512 XLR-3 (MAX3485), 6N137-isolated TRS MIDI IN/OUT, and six 3.5 mm jacks driven by an external 16-bit DAC8552 (SPI2), internal 12-bit DACs, and 5V TTL triggers.",
        "SHARED OS & SECONDARY ENCODER MODES (ENC1): A common OS kernel (Core/ + OS/) handles hardware scanning, MIDI routing, and a 50 px (10×5) RGB menu overlay. Clicking ENC1 switches seamlessly between Resolume Arena (AR) and three standalone instruments: a 5-track generative MIDI step sequencer (SQ), a 50-step WAV sample drum machine (SM), and a pure 48 kHz DSP drum synthesizer (SY — Kick, Snare, Hats with choke, Tom/Clap/FM rendered via the onboard 16-bit DAC8552 to J3/J9).",
      ],
    },
    comparisonMeta: {
      num: { cs: "// 4 APLIKACE V JEDNOM FIRMWARE (MENU ENC1)", en: "// 4 APPS IN ONE FIRMWARE (ENC1 MENU)" },
      heading: { cs: "PŘEHLED VESTAVĚNÝCH REŽIMŮ", en: "ONBOARD APPLICATION MODES" },
      col0: { cs: "APLIKACE / KÓD", en: "APPLICATION / CODE" },
      col1: { cs: "ROLE & VÝSTUP", en: "ROLE & OUTPUT" },
      col2: { cs: "OVLÁDÁNÍ NA GRIDU 10×5", en: "10×5 GRID WORKFLOW" },
      col3: { cs: "KLÍČOVÁ FUNKCE", en: "KEY HIGHLIGHT" },
    },
    comparison: [
      {
        f: { cs: "01 // AR — ARENA (Hlavní)", en: "01 // AR — ARENA (Primary)" },
        orig: { cs: "Resolume Arena Controller přes USB MIDI + OSC SysEx + TRS Thru", en: "Resolume Arena Controller via USB MIDI + OSC SysEx + TRS Thru" },
        v04: { cs: "10 sloupců × 5 vrstev klipů (Ch 1 / SHIFT Ch 2) + Stop Clip + 4×4 Pads", en: "10 columns × 5 layers (Ch 1 / SHIFT Ch 2) + Stop Clip + 4×4 Pads" },
        imp: { cs: "Stav LED vždy odráží potvrzený stav Resolume (State 0..5 + D82 sync)", en: "LEDs always reflect confirmed Resolume state (State 0..5 + D82 sync)" },
      },
      {
        f: { cs: "02 // SQ — SEQUENCER", en: "02 // SQ — SEQUENCER" },
        orig: { cs: "Samostatný generativní MIDI sekvencer přes USB & TRS MIDI OUT", en: "Standalone generative MIDI sequencer over USB & TRS MIDI OUT" },
        v04: { cs: "5 nezávislých MIDI stop × 10 kroků (Step / Vel / Prob / Ratchet / Dens)", en: "5 independent MIDI tracks × 10 steps (Step / Vel / Prob / Ratchet / Dens)" },
        imp: { cs: "Polymetrie, Euclidean, Randomize + Undo, interní/externí MIDI Clock", en: "Polymetry, Euclidean, Randomize + Undo, internal/external MIDI Clock" },
      },
      {
        f: { cs: "03 // SM — SAMPLER", en: "03 // SM — SAMPLER" },
        orig: { cs: "5stopá bicí mašina přehrávající 16bit WAV PCM (interní DAC 48 kHz)", en: "5-track 16-bit WAV PCM drum machine (internal 48 kHz DAC)" },
        v04: { cs: "10–50 kroků na 5 stránkách (Kick / Snare / CHH / OHH / Perc + Live Pads)", en: "10–50 steps across 5 pages (Kick / Snare / CHH / OHH / Perc + Live Pads)" },
        imp: { cs: "Pitch, Reverse, Choke Group, Micro-timing, Euclidean & Kit/Pattern banky", en: "Pitch, Reverse, Choke Group, Micro-timing, Euclidean & Kit/Pattern banks" },
      },
      {
        f: { cs: "04 // SY — SYNTH", en: "04 // SY — SYNTH" },
        orig: { cs: "Čistá DSP bicí syntéza na STM32 přes 16bit DAC8552 @ 48 kHz -> J3/J9", en: "Pure STM32 DSP drum synthesis via 16-bit DAC8552 @ 48 kHz -> J3/J9" },
        v04: { cs: "10–50 kroků s per-step Pitch / Decay / Accent / Ratchet & Performance pady", en: "10–50 steps with per-step Pitch / Decay / Accent / Ratchet & Performance pads" },
        imp: { cs: "Kick/Snare/Hats + Track 5 Tom↔Clap↔FM, Parameter Drift & Master Comp/Lim", en: "Kick/Snare/Hats + Track 5 Tom↔Clap↔FM, Parameter Drift & Master Comp/Lim" },
      },
    ],
    useCases: [
      {
        t: { cs: "Živé odbavení Resolume Arena (Hlavní)", en: "Live Resolume Arena shows (Primary)" },
        d: {
          cs: "Okamžitý vizuální přehled obsazených, hrajících a vybraných klipů v 10 sloupcích a 5 vrstvách bez koukání na notebook — včetně synchronizace po změně myší v PC.",
          en: "Instant visual overview of available, active, and selected clips across 10 columns and 5 layers without staring at your laptop—even staying synced after mouse edits.",
        },
      },
      {
        t: { cs: "Hmatový mix, efekty & BPM Control", en: "Tactile mixing, FX & BPM control" },
        d: {
          cs: "10 podsvícených faderů PTL45 + Master PTL60, 10 Transmission + 10 Vertical potů, SubMastery pro hazer/fan, 8 Dashboard knobů a 16 OneShot/Strobe padů pod prsty.",
          en: "10 backlit PTL45 faders + Master PTL60, 10 Transmission + 10 Vertical pots, SubMasters for hazer/fan, 8 Dashboard knobs, and 16 OneShot/Strobe pads at hand.",
        },
      },
      {
        t: { cs: "Samostatný MIDI Sequencer pro rack i klub", en: "Standalone MIDI Sequencer for rack & stage" },
        d: {
          cs: "Přepnutím přes ENC1 na SQ se konzole změní na 5stopý polyrytmický MIDI sekvencer pro syntezátory přes USB i TRS Type-A MIDI.",
          en: "Spin ENC1 to SQ and the console turns into a 5-track polyrhythmic MIDI sequencer driving synths over USB and TRS Type-A MIDI.",
        },
      },
      {
        t: { cs: "Vestavěný WAV Sampler & DSP Drum Synth", en: "Built-in WAV Sampler & DSP Drum Synth" },
        d: {
          cs: "Režimy SM a SY mění kontroler v 50krokovou bicí mašinu bez PC — s 48 kHz výstupem přímo na jacky z vestavěných DAC převodníků.",
          en: "Modes SM and SY transform the controller into a 50-step standalone drum machine with direct 48 kHz audio from the onboard DACs.",
        },
      },
    ],
    controls: {
      cs: [
        "10×5 Clip / Step Grid (SW1..SW50): mechanické spínače Cherry MX s adresovatelnými RGB LED WS2812B-2020",
        "10× Stop Clip / Track Strip (SW51..SW60) & 4×4 OneShot / Mode Grid (SW64..SW82)",
        "10× podsvícený 45mm fader PTL45 (WS2811 LED) + 1× 60mm Master fader PTL60 (R147)",
        "10× otočný Layer Trans knob (RV2..RV11) + 10× vertikální pot Alps (R81..R90) + horizontální pot RV1",
        "8× Dashboard knob (RV13, 15..17, 19..22) + 3× SubMaster (RV12, 14, 18) + 5× taktické tlačítko (SW95..SW99)",
        "Control Strip (SHIFT SW61, BPM Play/Pause/Resync/Tap SW62..66) + 2osý joystick U14 + enkodér ENC1",
        "Konektory: USB-C Data (J4), USB-C Power + vypínač SW86 (J1), DMX512 XLR-3 (J2), TRS MIDI IN/OUT (J10/J13), 6× 3,5mm Audio/CV/Gate/Trig (J3, J5..J9)",
      ],
      en: [
        "10×5 Clip / Step Grid (SW1..SW50): Cherry MX mechanical switches with individually addressable WS2812B-2020 LEDs",
        "10× Stop Clip / Track Strip (SW51..SW60) & 4×4 OneShot / Mode Grid (SW64..SW82)",
        "10× backlit 45 mm PTL45 faders (WS2811 LEDs) + 1× 60 mm Master fader PTL60 (R147)",
        "10× rotary Layer Trans pots (RV2..RV11) + 10× vertical Alps pots (R81..R90) + horizontal pot RV1",
        "8× Dashboard knobs (RV13, 15..17, 19..22) + 3× SubMaster knobs (RV12, 14, 18) + 5× tactile buttons (SW95..SW99)",
        "Control Strip (SHIFT SW61, BPM Play/Pause/Resync/Tap SW62..66) + 2-axis joystick U14 + ENC1 rotary push-encoder",
        "Ports: USB-C Data (J4), USB-C Power + SW86 switch (J1), DMX512 XLR-3 (J2), TRS MIDI IN/OUT (J10/J13), 6× 3.5 mm Audio/CV/Gate/Trig (J3, J5..J9)",
      ],
    },
    specs: [
      S("Hlavní určení", "Primary role", { cs: "Resolume Arena Controller (obousměrný USB MIDI + OSC Bridge)", en: "Resolume Arena Controller (bidirectional USB MIDI + OSC Bridge)" }, "doc", true),
      S("Rozměry PCB / vrstvy", "PCB size / layers", "367,3 × 240,7 mm (obdélník) · 2vrstvá FR-4 · 453 pouzder", "doc", true),
      S("Řídicí MCU", "Main MCU", "STM32H562VIT6 (ARM Cortex-M33 @ 240 MHz, 2 MB Flash, 640 KB SRAM)", "doc", true),
      S("Vstupní matice", "Control matrix", { cs: "87× spínač (6× CD74HC4067M) + 45× analog (3× CD74HC4067M) + EC11 ENC1", en: "87× switches (6× CD74HC4067M) + 45× analogs (3× CD74HC4067M) + EC11 ENC1" }, "doc", true),
      S("RGB LED systém", "RGB LED system", "81× WS2812B-2020 + 4× WS2811 (11 fader LED) · LDO U13 MIC29302AWU (+3V3LED)", "doc", true),
      S("USB & MIDI I/O", "USB & MIDI I/O", { cs: "USB-C Data (J4, ESD D67) + USB-C PWR (J1) · TRS Type-A MIDI IN (6N137) & OUT (Thru)", en: "USB-C Data (J4, ESD D67) + USB-C PWR (J1) · TRS Type-A MIDI IN (6N137) & OUT (Thru)" }, "doc", true),
      S("DMX512 & Jack výstupy", "DMX512 & Jack I/O", { cs: "XLR-3 MAX3485 (J2) · 2× 16bit DAC8552 (J3/J9) · 2× 12bit DAC (J5/J7) · 2× 5V Trig (J6/J8)", en: "XLR-3 MAX3485 (J2) · 2× 16-bit DAC8552 (J3/J9) · 2× 12-bit DAC (J5/J7) · 2× 5V Trig (J6/J8)" }, "doc"),
      S("Režimy OS (ENC1 menu)", "OS Modes (ENC1 menu)", { cs: "1. AR Arena (hlavní) · 2. SQ Sequencer · 3. SM Sampler · 4. SY DSP Synth (48 kHz)", en: "1. AR Arena (primary) · 2. SQ Sequencer · 3. SM Sampler · 4. SY DSP Synth (48 kHz)" }, "doc", true),
      S("Testy firmware", "Firmware tests", { cs: "5 host testovacích sad (OS Menu, Resolume 12 scénářů, Seq, Sampler, Synth)", en: "5 host test suites (OS Menu, Resolume 12 scenarios, Seq, Sampler, Synth)" }, "doc"),
    ],
    gallery: [
      { src: "assets/products/fvck-boy/01_ARENA_Resolume.png?v=20261120a", cap: { cs: "AR — Resolume Arena Controller: popisky všech tlačítek, faderů & potů na PCB", en: "AR — Resolume Arena Controller: full PCB button, fader & pot map" } },
      { src: "assets/products/fvck-boy/pcb_render.png?v=20261120a", cap: { cs: "3D top-down render revidované PCB (STM32H562VIT6, 9× MUX, 81× WS2812B)", en: "3D top-down render of STM32H562VIT6 PCB (9× MUX, 81× WS2812B)" } },
      { src: "assets/products/fvck-boy/02_SEQUENCER_MIDI.png?v=20261120a", cap: { cs: "SQ — 5-Track Generative MIDI Sequencer: mapa prvků na PCB", en: "SQ — 5-Track Generative MIDI Sequencer: PCB control map" } },
      { src: "assets/products/fvck-boy/03_SAMPLER_Drums.png?v=20261120a", cap: { cs: "SM — Sample Drum Machine (WAV, 10–50 kroků): mapa prvků na PCB", en: "SM — Sample Drum Machine (WAV, 10–50 steps): PCB control map" } },
      { src: "assets/products/fvck-boy/04_SYNTH_Drums.png?v=20261120a", cap: { cs: "SY — Synth Drum Machine (DSP + DAC8552): mapa prvků na PCB", en: "SY — Synth Drum Machine (DSP + DAC8552): PCB control map" } },
    ],
    related: ["fvck-girl", "dmx-out", "cue-frames"],
  },
};

const TEATRO_DATA = {
  code: "T\\\\\\S — PRODUCTION · DESIGN · RENTAL · CUSTOM TECH",
  title: TS,
  lead: {
    cs: "Produkce akcí, stage design, sound design a light design. Vlastní technický rentál, zakázková výroba světel i scénických prvků a tým nejzkušenějších techniků v oboru — v přímém propojení s vývojem DECØY DEVICES.",
    en: "Live event production, stage design, sound design, and light design. In-house technical rental, custom lighting and hardware fabrication, and top-tier field technicians — backed directly by DECØY DEVICES R&D.",
  },
  pillars: [
    {
      num: "01 // STAGE DESIGN",
      title: { cs: "STAGE DESIGN", en: "STAGE DESIGN" },
      tag: { cs: "SCÉNOGRAFIE & PROSTOR", en: "SCENOGRAPHY & SPACE" },
      desc: {
        cs: "Architektura scény pro festivaly, klubové noci, koncerty i divadelní inscenace. Konstrukce, světelné rámy, CRT a video objekty i prostorové řešení na míru konkrétnímu místu.",
        en: "Stage architecture for festivals, club nights, concerts, and theatrical productions. Truss structures, custom frames, CRT & video objects, and site-specific spatial concepts.",
      },
    },
    {
      num: "02 // LIGHT DESIGN",
      title: { cs: "LIGHT DESIGN", en: "LIGHT DESIGN" },
      tag: { cs: "SVĚTELNÁ REŽIE", en: "LIGHTING DIRECTION" },
      desc: {
        cs: "Světlo jako rovnocenný hudební a dramatický nástroj. Živé svícení, timecode show i přímé analogové a DMX propojení s modulárními syntezátory bez zpoždění.",
        en: "Light treated as a live musical and dramatic instrument. Live busking, timecode shows, and direct analog-to-DMX integration with modular synthesizers at zero latency.",
      },
    },
    {
      num: "03 // SOUND DESIGN",
      title: { cs: "SOUND DESIGN", en: "SOUND DESIGN" },
      tag: { cs: "ZVUK & AKUSTIKA", en: "SOUND & ACOUSTICS" },
      desc: {
        cs: "Kompletní zvukový design pro inscenace, kluby a audiovizuální performance. Systémové ladění PA, prostorový zvuk i živá elektroakustika a FOH mix.",
        en: "End-to-end sound design for stage productions, clubs, and audiovisual performances. PA system engineering, spatial audio, live electroacoustics, and FOH mixing.",
      },
    },
  ],
  rental: [
    {
      code: "RENT // 01",
      name: { cs: "SVĚTELNÝ PARK & DMX", en: "LIGHTING RIG & DMX" },
      tag: { cs: "HLAVY · STROBO · BARS", en: "MOVERS · STROBES · BARS" },
      desc: {
        cs: "Otočné hlavy, wash i spot reflektory, výkonné stroboskopy, LED lišty a konvenční divadelní svítidla včetně DMX rozbočovačů a řízení.",
        en: "Moving heads, wash & spot fixtures, high-output strobes, LED bars, and theatrical conventionals with isolated DMX splitting and control.",
      },
    },
    {
      code: "RENT // 02",
      name: { cs: "ZVUKOVÉ SYSTÉMY & PA", en: "SOUND SYSTEMS & PA" },
      tag: { cs: "PA · SUB · MONITORY", en: "PA · SUBS · MONITORS" },
      desc: {
        cs: "Klubové i koncertní PA sestavy, odposlechové monitory, digitální i analogové pulty, mikrofony a kompletní pódiová konektivita.",
        en: "Club and concert PA rigs, stage monitors, digital & analog consoles, microphones, and complete stage cabling.",
      },
    },
    {
      code: "RENT // 03",
      name: { cs: "VIDEO, PROJEKCE & CRT", en: "VIDEO, PROJECTION & CRT" },
      tag: { cs: "PROJEKTORY · CRT · VIZUÁL", en: "PROJECTORS · CRT · VISUALS" },
      desc: {
        cs: "Videoprojektory, sbírka historických i broadcast CRT monitorů na scénu, analogové video mixery a hardware konzole pro Resolume.",
        en: "Stage projectors, curated vintage and broadcast CRT television rigs, analog video mixers, and hardware Resolume controllers.",
      },
    },
    {
      code: "RENT // 04",
      name: { cs: "KONSTRUKCE, DISTRIBUCE & RIG", en: "TRUSS, POWER & RIGGING" },
      tag: { cs: "ALUTRUSS · SILOVKA · KABELÁŽ", en: "TRUSS · POWER · CABLING" },
      desc: {
        cs: "Hliníkové konstrukce, stativy, silové rozvody, stíněné datové a DMX rozvody připravené pro rychlou stavbu v klubech i na site-specific lokacích.",
        en: "Aluminum trussing, lifts, power distribution, and shielded data/DMX looms built for fast rigging in clubs and site-specific venues.",
      },
    },
  ],
  custom: [
    {
      code: "FAB // 01",
      name: { cs: "ZAKÁZKOVÁ SVÍTIDLA & LED OBJEKTY", en: "CUSTOM FIXTURES & LED OBJECTS" },
      tag: { cs: "VLASTNÍ VÝROBA", en: "IN-HOUSE BUILD" },
      desc: {
        cs: "Navrhujeme a stavíme atypická světla, adresovatelné LED matice, světelné trubice a scénické světelné sochy přímo podle návrhu scény nebo tour.",
        en: "We design and build bespoke fixtures, addressable LED matrices, light tubes, and scenic light sculptures tailored to a specific show or tour.",
      },
    },
    {
      code: "FAB // 02",
      name: { cs: "ATYPICKÉ OVLADAČE & ROZHRANÍ", en: "BESPOKE CONTROLLERS & INTERFACES" },
      tag: { cs: "HARDWARE NA MÍRU", en: "CUSTOM HARDWARE" },
      desc: {
        cs: "Ve spolupráci s vývojovou dílnou DECØY DEVICES vyrábíme specializované pulty, DMX/CV převodníky, senzory pro interaktivní scény a zakázkovou elektroniku.",
        en: "Together with the DECØY DEVICES engineering lab, we fabricate custom control desks, DMX/CV interfaces, stage sensors, and one-off electronics.",
      },
    },
    {
      code: "FAB // 03",
      name: { cs: "SCÉNICKÉ PRVKY & EFEKTY", en: "SCENIC ELEMENTS & FX" },
      tag: { cs: "MECHANIKA & ATMOSFÉRA", en: "MECHANICS & ATMOSPHERE" },
      desc: {
        cs: "Zakázkové držáky, pohyblivé prvky, hazer/atmosférická integrace a technické adaptace pro divadelní inscenace, kluby i výstavy.",
        en: "Custom mounts, kinetic scenic elements, hazer/atmosphere integration, and technical adaptations for theatre productions, clubs, and exhibitions.",
      },
    },
  ],
  crewSummary: {
    cs: "Za každým projektem stojí špičkoví technici v oboru — světelní designéři, zvukaři, video operátoři a stage riggeři s dlouholetou praxí z festivalů, klubů i divadelních scén.",
    en: "Every production is backed by top technicians in the field — lighting designers, sound engineers, video operators, and stage riggers with deep festival, club, and theatre experience.",
  },
  specialties: [
    { cs: "LIGHT DESIGN & DMX PROGRAMMING", en: "LIGHT DESIGN & DMX PROGRAMMING" },
    { cs: "FOH / MONITOR SOUND ENGINEERING", en: "FOH / MONITOR SOUND ENGINEERING" },
    { cs: "STAGE RIGGING & SILOVÉ ROZVODY", en: "STAGE RIGGING & POWER DISTRIBUTION" },
    { cs: "VJING, VIDEO SYNCHRONIZACE & CRT", en: "VJING, VIDEO SYNC & CRT" },
    { cs: "PROTOTYPOVÁNÍ & ZAKÁZKOVÁ ELEKTRONIKA", en: "PROTOTYPING & CUSTOM ELECTRONICS" },
  ],
  events: [
    {
      code: "LIVE // 01",
      name: { cs: "DHOGH // ŽIŽKÁRNA", en: "DHOGH // ŽIŽKÁRNA" },
      desc: {
        cs: "Elektronická klubová série a festival v českobudějovické Žižkárně (od 2019). Kompletní světelný a prostorový koncept, produkce i ostré nasazení techniky.",
        en: "Electronic club series and festival at Žižkárna in České Budějovice (since 2019). Full lighting and spatial design, production, and live field operation.",
      },
      links: [
        { label: "DHOGH.COM", url: "https://dhogh.com/" },
        { label: "@DHOGHTEAM", url: "https://www.instagram.com/dhoghteam/" },
      ],
    },
    {
      code: "LIVE // 02",
      name: { cs: "SYNTHETIC SEX DRIVE", en: "SYNTHETIC SEX DRIVE" },
      desc: {
        cs: "Živá elektronika a modulární sety propojené přímo se světelným parkem a vizuální projekcí v reálném čase.",
        en: "Live electronics and modular performances wired straight into stage lighting and real-time visuals.",
      },
      links: [{ label: "@SYNTHETICSEXDRIVE", url: "https://www.instagram.com/syntheticsexdrive/" }],
    },
    {
      code: "LIVE // 03",
      name: { cs: "INSCENACE & SITE-SPECIFIC AKCE", en: "STAGE SHOWS & SITE-SPECIFIC" },
      desc: {
        cs: "Kompletní technická a vizuální realizace koncertů, klubových nocí, divadelních premiér a industriálních instalací na klíč.",
        en: "Turnkey technical and visual delivery for concerts, club nights, theatre premieres, and industrial installations.",
      },
      links: [{ label: "@TEATRO_SVJOTLO", url: "https://www.instagram.com/teatro_svjotlo/" }],
    },
  ],
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

