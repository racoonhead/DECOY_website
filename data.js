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
      { src: "assets/products/the-in/F_SilkS.svg", cap: { cs: "Vrstva potisku (silkscreen)", en: "Silkscreen layer" }, layer: true },
      { src: "assets/products/the-in/F_Silver_Cu_Mask.svg", cap: { cs: "Stříbrná vrstva (odkrytá měď)", en: "Silver layer (exposed copper)" }, layer: true },
      { src: "assets/products/the-in/Edge_Cuts.svg", cap: { cs: "Obrys a otvory", en: "Outline and holes" }, layer: true },
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
      { src: "assets/products/the-out/F_SilkS.svg", cap: { cs: "Vrstva potisku (silkscreen)", en: "Silkscreen layer" }, layer: true },
      { src: "assets/products/the-out/F_Silver_Cu_Mask.svg", cap: { cs: "Stříbrná vrstva (odkrytá měď)", en: "Silver layer (exposed copper)" }, layer: true },
      { src: "assets/products/the-out/Edge_Cuts.svg", cap: { cs: "Obrys a otvory", en: "Outline and holes" }, layer: true },
    ],
    related: ["the-in"],
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
      { src: "assets/products/dmx-out/schematic.png", cap: { cs: "Schéma zapojení", en: "Schematic" }, layer: true },
      { src: "assets/products/dmx-out/F_SilkS.svg", cap: { cs: "Vrstva potisku (silkscreen)", en: "Silkscreen layer" }, layer: true },
      { src: "assets/products/dmx-out/F_Silver_Cu_Mask.svg", cap: { cs: "Stříbrná vrstva (odkrytá měď)", en: "Silver layer (exposed copper)" }, layer: true },
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
      { src: "assets/products/lux-core/F_SilkS.svg", cap: { cs: "Vrstva potisku (silkscreen)", en: "Silkscreen layer" }, layer: true },
      { src: "assets/products/lux-core/F_Silver_Cu_Mask.svg", cap: { cs: "Stříbrná vrstva (odkrytá měď)", en: "Silver layer (exposed copper)" }, layer: true },
      { src: "assets/products/lux-core/Edge_Cuts.svg", cap: { cs: "Obrys a otvory", en: "Outline and holes" }, layer: true },
    ],
    related: ["dmx-out", "cue-frames"],
  },

  "cue-frames": {
    division: "LUX",
    divisions: ["LUX", "AUD", "VID"],
    name: "CUE_FRAMES",
    hp: "20 HP",
    serial: "DD-CF01 // 8CH.DAC",
    status: { cs: "Schéma + panel (LUX / AUD)", en: "Schematic + panel (LUX / AUD)" },
    image: "assets/products/cue-frames/preview.png",
    imageByDiv: {
      LUX: "assets/products/cue-frames/preview.png",
      AUD: "assets/products/cue-frames/preview_black.png",
      VID: "assets/products/cue-frames/preview.png",
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
        "CUE_FRAMES je univerzální 8kanálový CV řídicí modul se stejným hardwarem i firmwarem pro všechny tři divize (Světlo, Zvuk, Video). Základní režim funguje jako scénický ovladač: osmi knoby nastavíš stav 8 kanálů, uložíš až 64 scén a velkým knobem FRAME nebo externím napětím mezi nimi plynule prolínáš.",
        "Kromě scénického režimu nabízí stejný firmware pokročilé generační režimy pro zvuk a video syntézu: 8× synchronizovaný nebo volně běžící Poly-LFO, 8× VCO pro drony a akordy, 8kanálový krokový sekvencer řízený přes STEP/FRAME a generátor náhodných i chaotických průběhů.",
        "Výstupy jsou standardní Eurorack CV (0–10 V / 0–5 V), takže modul přímo řídí zvukové i video syntezátory. Pro světelnou divizi navíc posílá všech osm kanálů jedním stíněným RJ45 kabelem přímo do DMX_OUT (k dispozici v bílé LUX i černé AUD variantě panelu).",
      ],
      en: [
        "CUE_FRAMES is a universal 8-channel CV controller running the exact same hardware and firmware across all three divisions (Light, Sound, Video). Its core mode stores up to 64 8-channel scenes and morphs smoothly between them via the large FRAME knob or external CV.",
        "Beyond keyframe morphing, the same firmware unlocks deep sound and video synthesis modes: 8× Poly-LFO, 8× VCO for drones and chords, an 8-channel step sequencer driven by STEP/FRAME, and a chaos/random generator.",
        "All eight outputs are standard Eurorack CV (0–10 V / 0–5 V) for direct audio and video modulation, with an optional RJ45 link directly into DMX_OUT for stage lighting (available with both white LUX and black AUD panels).",
      ],
    },
    useCases: [
      {
        t: { cs: "8× LFO & Poly-LFO", en: "8× LFO & Poly-LFO" },
        d: {
          cs: "Osm nezávislých nízkofrekvenčních oscilátorů s fázovým posunem a plynulou změnou tvaru vlny pro modulaci filtrů, světel i videa.",
          en: "Eight independent LFOs with phase offset and continuous waveshaping for audio filters, lights, or video.",
        },
      },
      {
        t: { cs: "8× VCO & Drone", en: "8× VCO & Drone" },
        d: {
          cs: "Osmihlasý oscilátor v audio pásmu pro hutné drony, mikrotonální akordy a FM/wavetable textury.",
          en: "Eight-voice audio-rate oscillator bank for dense drones, microtonal chords, and FM textures.",
        },
      },
      {
        t: { cs: "Sekvencer & Chaos gen", en: "Sequencer & Chaos gen" },
        d: {
          cs: "Krokový sekvencer přes vstup STEP s plynulou interpolací nebo skoky, plus generátor chaosu a náhodných změn.",
          en: "Step sequencer via STEP input with smooth interpolation or hard jumps, plus a chaos and random generator.",
        },
      },
      {
        t: { cs: "Scény pro světlo & video", en: "Light & Video scenes" },
        d: {
          cs: "64 uložených scén pro divadlo, DMX hlavy (přes RJ45 do DMX_OUT) i řízení RGB barev a klíčování ve video syntéze.",
          en: "64 stored scenes for theatre, DMX fixtures (via RJ45 to DMX_OUT), and RGB/keyer control in video synthesis.",
        },
      },
    ],
    controls: {
      cs: [
        "CH 1–8 — potenciometry s LED",
        "FRAME — velký knob s RGB LED (morf / frekvence / chaos)",
        "ADD / DEL — uložení, smazání scény a přepínání režimů firmware",
        "MODULATION — atenuverter",
        "FRAME CV IN, STEP OUT / CLK IN",
        "OUT 1–8 — 8× CV / audio výstup",
      ],
      en: [
        "CH 1–8 — potentiometers with LEDs",
        "FRAME — large knob with RGB LED (morph / rate / chaos)",
        "ADD / DEL — store/delete scene and firmware mode select",
        "MODULATION — attenuverter",
        "FRAME CV IN, STEP OUT / CLK IN",
        "OUT 1–8 — 8× CV / audio outputs",
      ],
    },
    specs: [
      S("Šířka / výška", "Width / height", "20 HP (101,4 mm) / 3U"),
      S("CV / Audio výstupy", "CV / Audio outputs", "8×", "doc", true),
      S("Rozlišení D/A", "D/A resolution", "12 bit", "doc", true),
      S("Výstupní rozsah", "Output range", { cs: "0 – 10 V (varianta 0 – 5 V)", en: "0 – 10 V (0 – 5 V option)" }, "doc", true),
      S("Výstupní impedance", "Output impedance", "1 kΩ", "doc", true),
      S("Režimy firmware", "Firmware modes", { cs: "64 scén, 8× LFO, 8× VCO, Sekvencer, Chaos gen", en: "64 scenes, 8× LFO, 8× VCO, Sequencer, Chaos gen" }, "doc", true),
      S("FRAME CV vstup — rozsah", "FRAME CV input — range", "—", "tbd"),
      S("FRAME CV vstup — impedance", "FRAME CV input — impedance", "—", "tbd"),
      S("STEP výstup", "STEP output", "trigger"),
      S("Volitelný výstup", "Optional output", { cs: "RJ45 přímo do DMX_OUT", en: "RJ45 direct to DMX_OUT" }),
      S("Odběr +12 V / −12 V", "Current draw +12 V / −12 V", "—", "tbd", true),
    ],
    credit: {
      cs: "Vychází z Mutable Instruments Frames (Émilie Gillet, CC-BY-SA 3.0).",
      en: "Based on Mutable Instruments Frames (Émilie Gillet, CC-BY-SA 3.0).",
    },
    gallery: [
      { src: "assets/products/cue-frames/preview.png", cap: { cs: "Čelní panel — LUX (bílý)", en: "Front panel — LUX (white)" } },
      { src: "assets/products/cue-frames/preview_black.png", cap: { cs: "Čelní panel — AUD (černý)", en: "Front panel — AUD (black)" } },
      { src: "assets/products/cue-frames/F_SilkS.svg", cap: { cs: "Vrstva potisku (silkscreen)", en: "Silkscreen layer" }, layer: true },
      { src: "assets/products/cue-frames/F_Silver_Cu_Mask.svg", cap: { cs: "Stříbrná vrstva (odkrytá měď)", en: "Silver layer (exposed copper)" }, layer: true },
      { src: "assets/products/cue-frames/Edge_Cuts.svg", cap: { cs: "Obrys a otvory", en: "Outline and holes" }, layer: true },
    ],
    related: ["dmx-out", "lux-core", "the-in", "the-out"],
  },
};

const PEOPLE = [
  {
    name: "Vojtěch Divoký",
    role: {
      cs: "Spoluzakladatel DECØY DEVICES · nejlepší zvukař na světě",
      en: "Co-founder, DECØY DEVICES · best sound engineer in the world",
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
      cs: `Zakladatel ${TS} & DHOGH · nejlepší osvětlovač na světě`,
      en: `Founder, ${TS} & DHOGH · best lighting designer in the world`,
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

