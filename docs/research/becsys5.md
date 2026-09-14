# BECSys5 Water Chemistry Controller — verified product facts

Access date: 2026-09-14.
Manufacturer: BECS Technology, Inc., 10818 Midwest Industrial Blvd, St. Louis, MO 63132, (314) 567-0088. Corporate site https://www.becs.com; aquatics product site https://www.becsys.com; remote portal https://www.becsys.live; downloads https://dnld.becsys.com. Founded/incorporated 1991; "BECS has designed and manufactured over 50,000 controllers over the past 30+ years" (becs.com/company). Family brochure: "Proudly made in the heartland of America … three full scale surface mount (SMT) assembly lines".

### Primary sources used
- **SLS-4333-H BECSys5 brochure** (official, becsys.com): https://www.becsys.com/wp-content/uploads/sites/2/2025/10/SLS-4333-H_BECSys5.pdf — "Document #4333-H"
- **SLS-4336-F BECSys Family brochure** (official): https://www.becsys.com/wp-content/uploads/sites/2/2023/08/SLS-4336-F_BECSys_Family.pdf
- **SLS-4335-F BECSys7 brochure** (official): https://www.becsys.com/wp-content/uploads/sites/2/2025/10/SLS-4335-F_BECSys7.pdf
- **SLS-4655-E BECSys3 brochure** (official): https://www.becsys.com/wp-content/uploads/2021/06/SLS-4655-E_BECSys3.pdf
- **SLS-6152-A ChemLock brochure** (official): https://www.becsys.com/wp-content/uploads/2024/10/SLS-6152-A_BECSys_ChemLock.pdf
- **SLS-6095-E Alkalinity Meter brochure** (official): https://www.becsys.com/wp-content/uploads/sites/2/2025/10/SLS-6095-E_Alkalinity_Meter.pdf
- **TDS-4262 Rev K1 BECSys5 Technical Data Sheet** (BECS-authored; the copy read is hosted by a BECS distributor — SECONDARY HOST): https://www.commercialaquaticsupplies.com/wp-content/uploads/2023/08/TDS-4262-K_BECSys5.pdf. Not found on becsys.com/dnld.becsys.com public pages (technical docs live behind the distributor portal support.becsys.com / tdp.becs.com). Firmware v3.1x+.
- **TDS-4263 Rev K BECSys7 TDS** (BECS-authored, secondary host): https://www.commercialaquaticsupplies.com/wp-content/uploads/2023/08/TDS-4263-K_BECSys7.pdf
- Older **ENG-4262-DOC Rev D** BECSys5 data sheet (secondary host, OUTDATED — 100BaseT, battery RAM; do not cite for current specs).
- **BECSys5 O&M manual**: not publicly available on official sites (dnld.becsys.com lists only BECSys for Windows software/manual). ManualsLib copies exist (secondary) — not used.

## Product family — what distinguishes BECSys3 / BECSys5 / BECSys7 (Family brochure, verbatim)
> "BECSys7 Total Equipment Room & Filtration Control
> BECSys5 Advanced Expandable Water Chemistry Control
> BECSys3 Reliable Water Chemistry Control"
> "Ethernet is standard on the BECSys7 and BECSys5, and optional on the BECSys3, providing Email and/or SMS Alarm Notifications as well as BECSys Live! access from any smartphone, laptop or computer with Internet access."

| | BECSys3 | BECSys5 | BECSys7 |
|---|---|---|---|
| Positioning | "Reliable Water Chemistry Control" — pH/ORP (+ optional free Cl PPM) | "Advanced Water Chemistry Control … and much more!" — full chemistry + circulation/VFD/autofill/inventory/TA | "Total Equipment Room Control" — everything in 5 plus filtration/backwash of up to 16 filters, UV & heater interfaces |
| Display | "large 2-line backlit display" | "14 line x 40 character backlit LCD" | 14x40 LCD (TDS) |
| Standard relays | not stated in brochure | 4 solid-state | 4 solid-state + 5 mechanical |
| Ethernet / BECSys Live | Optional "Communications" option | Standard Gbit Ethernet; Live included | Standard Gbit Ethernet; Live included |
| Filter backwash control | — | Coordination only (adjusts VFD during backwash) | "optionally provide automatic filter backwash for up to 16 filters" |
| Warranty | "5 year electronics / 2 year sensor warranty" | 5 yr electronics / 2 yr pH, ORP, temp sensors / 1 yr optional sensors & flow cell | same as 5 |

Also in family: BECSys2 (plug-and-play pH/ORP), BECSysBW (standalone backwash controller, up to 16 filters), BECSys ChemLock (independent chemical-feed interlock), BECSys Alkalinity Meter, CO2 feed solutions.

## BECSys5 — headline description (brochure SLS-4333-H, verbatim)
> "The BECSys5 water chemistry controller includes advanced sensors and features that produce crystal clear water for a healthy, safe and pleasant patron experience in a wide variety of applications, including pools, spas, water parks, fountains, zoos and aquariums."
> "Optimal water quality achieved with the BECSys5 minimizes chemical usage, often resulting in significant savings. Substantial energy and water savings can also be realized by utilizing the BECSys5's advanced scalable capabilities."
TDS K1: "BECSys5 water chemistry controls provide continuous monitoring and control of sanitizers, oxidizers, pH, conductivity, turbidity, polymer feed, enzyme feed, system flow rate, system pressures and vacuum, chemical inventory levels, and surge tank (Autofill) and backwash holding tank levels."
"Advanced safety features and multi-level security are standard, and every BECSys5 comes complete with pH, ORP, temperature sensors, flow switch, machined flow cell, and factory-trained start-up and support provided by local distribution in most regions."

## Measured / controlled parameters — STANDARD vs OPTIONAL (TDS K1)
**Standard (included):**
- pH (0–14; 0.1 or 0.01 resolution) — "Configurable for feed-up, feed-down, or dual feed, and either ON/OFF or Time-Based Proportional feed."
- ORP (-1000 to +1000 mV; platinum band standard, gold band optional)
- Temperature (RTD; 32–212 °F)
- Flow switch on sample stream (reed standard; rotary or lighted-flow-cell-integrated options)
- LSI & RSI "computed based upon current inputs, Ca Hardness entered by operator, and Alkalinity from either the BECSys Alkalinity Meter or entered by operator"
- Four 4-20 mA inputs (16-bit) for optional sensors
- Direct Test Kit Interface: "automatically upload/record digital readings from SpinTouch and Lumiso test kits"

**Optional sensors/features** (each "depicted on front panel display, recorded in data logs, and have high and low alarm settings, which can generate email and/or text message alarm notifications"):
- Free chlorine PPM — "Choose from two free chlorine sensor technologies: CP-1 or membrane" (CP-1 0–10 ppm; membrane 0–20 ppm); sanitizer control "Based on free chlorine input, ORP input, or bracketed combination of the two"
- Total chlorine and Combined chlorine (0–20 ppm; requires free Cl sensor) — "Combined chlorine level can be interfaced to air handling systems"; "UV (Combined Chlorine) Control"
- Total Alkalinity via BECSys Alkalinity Meter (50–150 ppm, ±2 ppm; US Patent 10,018,610) — "Control TA by automatically switching between CO2 and acid for pH control"
- Conductivity/TDS (0–20,000 µmho; 0–10,000 ppm TDS) — "Feed-down control of drain valve based upon TDS set point, with programmable fail-safe timer"
- Flow rate (0–8800 gpm) — system circulation, makeup water, side-stream, additional split-stream; "Low System Flow alarm can disable chemical feeds"; totalizer "up to 999 trillion gallons"; turnovers/volume processed
- Pressures (0–100 psi): filter influent, filter effluent (→ differential), pump effluent; Vacuum (-15 to +85 psi): strainer vacuum (→ TDH, dirty strainer, high vacuum alarm, emergency off)
- Surge tank level (SLS sensor) → Autofill, main-drain modulating valve; Backwash tank level
- Liquid chemical inventory (LLS sensor): pH chemical and chlorine — "low alarm settings"; brochure: "Chemical reorder notifications"
- Turbidity (0–20 NTU) → polymer feed
- Water consumption / leak detection: brochure "Intelligent Autofill — Monitor water consumption; Identify pool leaks; Prevent surge pit overflows"

## Control outputs (TDS K1, verbatim)
- "Solid-State Relays: Four (4) standard solid-state relay outputs" (3 A each; 115/230 VAC line or 24–280 VAC common)
- "Additional Relays: Fifteen (15) additional solid-state relay or mechanical outputs with addition of up to 3 optional BECSys SRX or MRX relay expansion modules"
- "4-20mA Outputs: … optional separately isolated 4-20mA analog outputs, each of which can be configured to record any enabled input / control recirculation pump VFD / control main drain modulating valve" (option board provides four)
- Control functions: pH feed (on/off or time-based proportional); sanitizer (ORP, PPM, or bracketed) with "Sanitizer Booster" dual set point; superchlorination; dechlorination; ozone (feed-up on ORP/ppm, fireman cycle, energy conservation); heater on/off "with Fireman Cycle feature, Energy Conservation mode and minimum flow rate set point"; UV turndown on combined Cl; TDS bleed; enzyme timed feed; polymer feed; sensor wash; alternate set points; energy-conservation "Sleep" mode; circulation pump on/off; **Advanced VFD control** [US Patent 8,404,117] "to maintain flow rate, effluent pressure, or fixed setting", four manual + four scheduled turndowns, "Water Chemistry Assurance" aborts turndown on chemistry alarm, heater minimum-flow override; autofill valve; main drain valve.
- Filter backwash: BECSys5 does not run backwash sequences (that is BECSys7/BECSysBW); it "Automatically adjusts flow rate to user-settable level during filter backwash."

## Safety features (TDS K1, verbatim list)
- "Manual-On Limit: built-in limits automatically return manual overrides to automatic control…"
- "High/Low Alarm Settings & Control Lockouts: Programmable high and low alarm settings for all inputs, and programmable lockout of sanitizer feed upon pH high or low alarm."
- "No Flow Alarm & Flow Restored Delay: Assures sensors are monitoring an actively circulating water stream, with programmable control lockout following no-flow conditions."
- "Feed Limit Alarms: Programmable failsafe timers to prevent overfeed due to equipment or systems failures." Spec: "Failsafe Overfeed Timers Programmable in 1 minute increments, up to 18 hours"
- "Emergency Off: Front-panel Emergency Off button immediately halts all chemical feeds and control outputs; can be password protected."
- "Internal Safety Shield: Prevents access to high voltage circuitry or wiring during fuse replacement."
- Interlock Relay in optional Connection Center: "to interlock chemical feeds, UV, heaters and other equipment with the circulation pump."
- **BECSys ChemLock** (separate product, optional, "UL508A approved"): "provides an independent mechanism for locking out chemical feeds when the circulation pump is not running… The ChemLock will electrically lock out chemical feeders when the circulation pump is not running, providing a crucial additional layer of safety." "Stand-alone or pre-wired to BECSys controller"; inputs from pump contactor, VFD run/confirm, current monitor, or pressure switch.

## Security (TDS K1)
"Three levels of security access codes – Operator (6), Manager (2), and Rep (1)." "Data logs record history of access identified by user."

## Communications (TDS K1)
- STANDARD: "Gbit Ethernet with EZConnect and EZMail" ("1 Gigabit (100BaseT and 10BaseT compatible)"); "Email and Text message alarm notifications"; "BECSys Live! Online web portal included for BECSys controllers using EZConnect"; "BECSys for Windows Windows™ 10 compatible PC software package included"; "BECSys Now! App for IOS iPhone/iPad and Android smartphones/tablets". "All 3 applications are included with every BECSys5."
- EZConnect: "offering simple and secure remote access as an alternative to traditional IT-intensive remote access techniques"; EZMail "provides email notification delivery without the need for local email server configuration."
- OPTIONAL: "Wi-Fi compatibility with optional BECSys Wi-Fi module"; "Optional MODBUS TCP/IP, BACnet, Metasys N2 and LonWorks BMS interfaces are also available." (MODBUS TCP/IP is an ordering-guide communications option; BACnet/N2/LonWorks via "BMS protocol converter".) RS-485 9600 bps to 4000 ft.

## Data logging / records (TDS K1, verbatim)
- "Data logs stored in NAND flash memory, which does not require a battery to preserve data logs during power outages"
- "One full year (365 days) of input readings history, with 1 minute resolution"
- "One full year (365 days) of system events (e.g. alarms, parameter changes, user logins and operational cycles)"
- "Data logs automatically uploaded/maintained in BECSys Server"; "Available to users via BECSys Live! Online web portal"; "Download logs to USB flash drive for upload into BECSys for Windows"
- Test kit logs: "Test kit readings are automatically recorded and logged with the BECSys5, and uploaded to the BECSys server in the Cloud."

## Expansion / bodies of water
- I/O expansion: up to 3 SRX/MRX relay modules (+15 relays); option board (+4 4-20 mA outputs, 4 loop supplies); "Auxiliary Inputs/Sensors (Optional), up to 4 from the following list (2 with TDS sensor)".
- **Bodies of water per controller: not stated.** All BECS materials describe one controller per body of water; multi-pool coordination is via multiple controllers ("Coordinate backwash for multiple pools" in BECSys7 brochure; "Multiple BECSys7s and/or BECSysBWs coordinate backwashes"). Do NOT claim multi-body control from one BECSys5.

## Display / UI
"14 line x 40 character backlit LCD, with front-panel contrast adjustment and automatic temperature compensation"; "Single-touch access to Set Points, Relay Modes, Calibrations, Menu access, and Reset Fail/Safes." (Older ENG-4262-D mentioned an optional "BECSys Control Supervisor 8.4” color touch-screen" — not in current TDS K1; treat as discontinued/unverified.)

## Enclosure / physical / power (TDS K1, verbatim)
- "Enclosure Material Glass Reinforced Polycarbonate, NEMA 4X (IP66)"
- "BECSys5 Enclosure Dimensions Width: 7.09” Height: 10.00” Depth: 4.37”"; "Backpanel Dimensions Width: 11.5” Height: 28.6875” Depth: 6.375”"
- "Ambient Operating Temperature -18 to 50 °C"; "Ambient Humidity 95% non-condensing maximum"
- "Voltage 115/230 VAC, 50/60 Hz"; "Phase Single"; "12.25 Amps Full Load: (0.25 A: Controller, 12 A: Relay Outputs, 3A x 4)" at 115 VAC
- Flow cell: round PVC standard; Lighted Flow Cell optional; backpanel and "Connection Center" (pre-programmed, pre-wired, 24 VDC 36 W supply, interlock relay) optional.

## Certifications (TDS K1, verbatim)
> "NSF: NSF Certified and Listed to NSF/ANSI Standard 50
> USA: ETL Listed ANSI/UL 61010-1
> Canada: ETL Listed CAN/CSA C22.2 #61010-1
> Europe/CE: CENELEC EN 61010-1 … FCC part 15 sub part B … EN 61326"
(BECSys7 TDS carries the identical NSF/ANSI 50 statement.) Note: becsys.com HTML pages and brochures do not display the NSF statement; it is in the TDS only.

## Warranty (TDS K1 and brochure, verbatim)
> "Warranty — 5 years electronics — 2 years pH, ORP and temperature sensors — 1 year optional sensors and flow cell"
Brochure: "proprietary pH and ORP sensors, with 2 year warranty". Support: "BECSys distributors have been factory-trained and authorized to provide everything you'll need … through the warranty period and beyond."

## Key verbatim quotes for the register
> "BECSys Live is included with every BECSys5 … And best of all... no additional fees or monthly subscription required!" — SLS-4333-H
> "Gbit Ethernet standard in every BECSys5" — SLS-4333-H
> "True PPM sensors - Free, Total and Combined chlorine monitoring and control with PPM set points" — SLS-4333-H (note: these are OPTIONAL sensors per TDS)
> "NSF Certified and Listed to NSF/ANSI Standard 50" — TDS-4262 Rev K1

## Cautions on phrasing
- Brochure bullets list PPM, TA, flow, inventory, autofill as BECSys5 capabilities; the TDS makes clear they require optional sensors/boards. Always write "with optional sensors" or "configurable".
- Two BECSys5 data sheets exist; ENG-4262-D (older, 100BaseT, 10–56 days logging, "patent-pending" VFD) is superseded by TDS-4262-K1 (Gbit, 365 days, patented). Cite K1.
- "Text message" alarms are delivered via email-to-SMS gateway per common practice; BECS says "Email and Text Message Alarm Notifications" — quote as-is.
- BECSys5 does not do automatic backwash sequencing; that is BECSys7/BECSysBW.
