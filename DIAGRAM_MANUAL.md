# DECØY DEVICES — Vizuální manuál pro technické diagramy (`DIAGRAM_MANUAL.md`)

Tento manuál definuje jednotný vizuální jazyk pro vysvětlující diagramy modulů DECØY DEVICES na webu (inspirace manuály Mutable Instruments, přenesená do temné PCB/HUD estetiky DECØY DEVICES).

---

## 1. Plátno a mřížka (Canvas & Grid)
- **Formát**: vektorové **SVG** (`viewBox="0 0 1100 640"`), aby byl diagram dokonale ostrý na jakémkoli displeji.
- **Okraje a registrace**: `24 px` vnější okraj, v rozích registrační křížky `+` (`#b9bec7`, `opacity: 0.55`), tenké technické ohraničení `1 px`.
- **Hlavička diagramu**: vlevo sériový kód (`DD-EL04 // DIAGRAM 01`), název sekce v `Barlow Condensed`, vpravo rozsah/kontext (`EXCITER · TOP ROW`).

## 2. Barevná paleta
| Role | Hex | Použití |
| :--- | :--- | :--- |
| **Podklad plátna** | `#0a0d10` | Hlavní pozadí diagramu (navazuje na `--prod-panel`) |
| **Karta / blok** | `#11161b` | Ohraničené panely jednotlivých knobů nebo fází pipeline |
| **Potisk (Silkscreen)** | `#eaeae4` | Hlavní popisky, osy grafů, názvy parametrů |
| **Stříbro (HASL)** | `#b9bec7` | Sekundární popisky, dělící čáry, registrační značky |
| **Akcent modulu** | `--prod-accent` | Aktivní křivky signálu, hodnoty, klíčové šipky (např. `#7ec7b8` pro `ELEMENTS v0.4`, `#6ea8c7` pro `THE IN`, `#c77b86` pro `THE OUT`, `#d1b379` pro `CUE_FRAMES`, `#54c7cc` pro `LUX_CORE`, `#cfd5dc` pro `DMX_OUT`) |
| **Modulace / CV** | `#d1b379` | Přerušované čáry obálek, LFO a CV cest |

## 3. Typografie
- **Nadpisy a názvy knobů**: `Barlow Condensed`, `500`–`600` (nikdy přehnaně tučné), velká písmena, `16–22 px`, `letter-spacing: 0.08em`.
- **Technické popisky, hodnoty a grafy**: `JetBrains Mono`, `400`, `9–10.5 px` — jemné, vzdušné popisy s dostatkem volného prostoru.

## 4. Standardní grafické prvky
1. **Ikona potenciometru (270° sweep)**:
   - Kruhový základ s 270° obloukem (`-225°` až `+45°`), značky `MIN` / `12h` / `MAX` a ryska ukazatele.
   - U bipolárních nebo dělených knobů (jako `CONTOUR`) je střed (`12h`) zvýrazněn tečkou a rozdělen na levou a pravou zónu.
2. **Signálové cesty (Pipeline)**:
   - **Plná čára (`1.8 px`, `--prod-accent`)**: přímá audio / DMX / video signálová cesta.
   - **Přerušovaná čára (`1.4 px`, `stroke-dasharray="5 4"`, `#d1b379`)**: řídicí napětí (CV), obálka nebo trigger/gate.
   - **Sčítací uzel `⊕`**: míchání více zdrojů do jednoho výstupu.
3. **Grafy průběhu (Waveforms / Envelopes / Spectra)**:
   - Jemná osová mřížka (`rgba(185, 190, 199, 0.16)`), nulová linka a ostrá křivka `1.8 px` ukazující chování signálu při průchodu modulem.
   - Pro duální enginy (např. `CLASSIC` vs. `INDUSTRIAL` u `ELEMENTS v0.4`) jsou obě varianty zřetelně odděleny štítky pod grafem.
