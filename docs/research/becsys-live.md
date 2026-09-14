# BECSys Live! — verified facts

Access date: 2026-09-14.
Sources (all official BECS Technology):
- Portal: https://www.becsys.live/ and https://www.becsys.live/home
- Brochure SLS-6105-A "Simple & Secure Online Access" (Document #6105-A): https://www.becsys.com/wp-content/uploads/2021/06/SLS-6105-A_BECSysLive.pdf
- BECSys5/7 brochures and TDS (see becsys5.md); Family brochure SLS-4336-F; BECSys3 brochure SLS-4655-E
- Distributor support portal: https://support.becsys.com ("currently available only to BECSys Distributors")
- BECSys Now! app listing (Apple App Store, developer BECS Technology, Inc., v3.11.00 dated 02/19/2018): https://apps.apple.com/us/app/becsys-now/id598528105

## What it is (verbatim)
> "BECSys Live provides simple and secure 24/7 real-time access to BECSys controllers from just about any device: PC, Mac, desktop, laptop, tablet or smartphone." — SLS-6105-A
> "It's Simple — Just open a web browser on your favorite device and type becsys.live. It's really that simple."
> "Dashboards refreshed automatically"; "Data logs automatically uploaded and maintained"; "Change settings directly from Dashboard"
Portal: "Real-time dashboards automatically updated with the latest readings and system info"; "Review graphs that show how your pool is performing over time"; "Reports summarize key performance metrics, such as alarm patterns, parameter changes, test kit logs and water quality readings".

## Security statements (verbatim, SLS-6105-A)
> "Highly Secure — Messages are encrypted and all accounts are protected by 2 Factor Authentication."
> "Nobody takes Internet Security as seriously as we do.
> • Two-factor authentication on all user accounts
> • reCAPTCHA account protection from bots
> • End-to-end message encryption (browser to controller)
> • EZConnect = no VPNs, port forwarding or public IP addresses
> • Controller Access Code required to change settings"
Portal: "Your account is protected by 2 factor authentication and all messages are encrypted." Settings changes: "The same controller Access Code used on the controller front panel is required."
No specific cipher/TLS version, SOC 2, or penetration-test claims are published — do not invent any.

## Device / browser support (verbatim)
"Just type becsys.live into Chrome, Safari, Edge, Firefox..."; "From any device: PC, Mac, tablet, smartphone"; "Stay logged in; system recognizes your device so you don't need to log in every time". Web app — no dedicated BECSys Live mobile app; the separate **BECSys Now!** app (iOS/Android) "provides an easy way for pool owners and operators to monitor the status of their BECSys Controllers 24/7" with status icons (blue check normal / red ! alarm / yellow ? lost connection) — monitoring only, last updated 2018 per App Store.

## Fee / subscription (verbatim)
> "And best of all... Every feature described here is free for all internet-connected BECSys controllers using EZConnect! And that's just the beginning. Your BECSys servicing distributor may offer additional BECSys Live features as part of their service plans." — SLS-6105-A
> "Visit becsys.live to learn more and create your free account. And best of all... no additional fees or monthly subscription required!" — BECSys5 & BECSys7 brochures
> "Sign up for a free account to get started" — becsys.live
Availability by model: "BECSys Live is included with every BECSys5" / "every BECSys7"; BECSys3: "BECSys Live is included with the BECSys3 Communications option" (i.e., requires the optional Ethernet/Communications hardware). Family brochure says "included with every BECSys controller" — read as "every internet-connected BECSys controller".

## Alarm notification methods
- Email and text-message alarm notifications originate from the **controller** over Ethernet (EZMail), not from BECSys Live per se: "Email and Text Message Alarm Notifications are supported by the integral Gbit Ethernet connection" (TDS-4262-K1). BECSys Live shows alarm status ("Site Tree color-coded with Controller status") and reports "alarm patterns".
- BECSys Now! app: push/visual status of alarms (per App Store description).
- No SMS/phone-call service offered by BECSys Live itself is claimed; do not state "BECSys Live texts you".

## Reports / logs / export (verbatim)
- "Run Reports — Reports summarize key performance metrics such as alarm patterns, parameter changes, test kit logs and water quality readings."
- "Run reports for individual Controllers or Groups"; "Graphs of readings with current set points and alarm points"; "Upload SpinTouch readings via BECSys7 or BECSys5"; "Record personal notes for each Controller"
- Logs: "Data logs automatically uploaded/maintained in BECSys Server — Available to users via BECSys Live! Online web portal — Download logs to USB flash drive for upload into BECSys for Windows" (TDS). One year of 1-minute readings and one year of events retained on the controller.
- **Export formats (PDF/CSV) are not specified in any official document found** — say "run and review reports" rather than "export to PDF/CSV".

## User roles / organization
- Published: "Unlimited number of Controllers"; "Unlimited number of Groups"; "Drag-and-Drop to organize your Site Tree"; "Create personalized Controller/Group nicknames"; "Site Tree color-coded with Controller status".
- Controller-side roles (TDS): "Three levels of security access codes – Operator (6), Manager (2), and Rep (1)"; changes via Live require the controller Access Code.
- **Named BECSys Live account roles (owner/viewer/admin/distributor) are NOT published** in public materials — UNVERIFIED. Distributor tooling lives at support.becsys.com (distributor-only). Phrase as "multi-user access with two-factor authentication; settings changes gated by the controller access code".

## Positioning phrases safe to use
- "Included at no additional cost with BECSys5 and BECSys7 (optional Communications on BECSys3)."
- "Browser-based; no VPN, port forwarding, or public IP required (EZConnect)."
- "Two-factor authentication and encrypted messaging."
- "Dashboards, trend graphs, and reports on alarms, parameter changes, test-kit logs and readings."
- "Distributor service plans may add features" (per BECS) — Frey can position its own monitoring service here.
