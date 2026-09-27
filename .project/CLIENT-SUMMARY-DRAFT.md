# What changed on the FreyTech website

Prepared for Angelo DiCiaccio · 2026-09-26 · *Draft — Alex to review before sending*

---

Your site was already in good shape. This round was about **making sure everything it says is
true, and that nothing is quietly broken.** We found a number of things worth telling you about.

## Two problems that would have cost you real business

**1. Your product catalog would have disappeared the moment the site went live.**
A leftover instruction from the old site redirected visitors away from `/products` — the address
of your entire 147-product catalog. It has no effect on the review site you've been looking at,
which is why nobody caught it, but on the live hosting it would have sent every visitor who
clicked "Products" straight to a different page. Your catalog, your category pages, and every
search engine listing pointing at them would have been unreachable. Removed.

**2. Your contact form didn't exist as far as Google was concerned.**
The form works perfectly when someone visits the page in a browser. But the page as delivered
contained no form at all — it was being assembled after the fact by the browser. Search engines
and link previews saw a contact page with nothing on it, and so did anyone whose browser blocked
scripts. The same was true of the main products page and the resources page. All three now arrive
complete.

## Things the site was saying that it couldn't back up

We take the view that on a site selling into schools and municipalities, an unsupported claim is a
liability rather than a copy problem. Three items needed correcting:

- **Three algaecides listed chemical concentrations we had no source for.** They came across from
  the competitor catalogue with an unidentified manufacturer and no label or safety data sheet
  behind them, but the site stated exact strengths and performance behaviour. The products are
  still listed; the unverifiable claims are gone until you can tell us the actual source.
- **Every product page claimed its facts were "verified against manufacturer literature"** — even
  pages where no manufacturer literature had ever been obtained. Pages now say what is actually
  true: fully verified, partly verified, or literature not yet obtained.
- **The build was quietly re-dating those verification claims.** Every time the catalog was
  rebuilt, roughly 134 products had their "verified on" date moved to that day's date, without
  anything being re-checked. Fixed, and the date is now pinned to the day the work was really done.

Two pool-cover products were also unpublished. They had no specifications, no features, no
documents and no identified manufacturer — the page title literally read "Manufacturer not yet
identified". They're held rather than deleted: tell us who makes them and they come straight back.

## Things that were simply wrong

- **Your Pulsar Precision page was showing a photograph of a Pulsar Infinity** — a different
  product — with that product's description attached. The correct photo was sitting in the project
  unused. This is your flagship feeder page.
- **78 product pages displayed an empty specifications table** under a sentence claiming the
  specifications came from manufacturer literature.
- **Searching for an obsolete model didn't always find its replacement.** The site promises that
  discontinued equipment stays findable so operators can match a replacement — but Pulsar 4,
  Pulsar 3, ChlorKing CLASSIC and Pooltest 25 led nowhere. They now reach the current successor.
- **Three of your nine regional pages had a grammatical error in a heading** — "in the Western
  New York", "in the Long Island", "in the Central New York".
- **All 44 manufacturer pages were missing from the file that tells Google what to index**, so a
  significant part of the catalog was invisible to search. Also added a "Browse by manufacturer"
  link to the footer, since those pages were previously hard to reach.
- **128 product descriptions were cut off mid-word** in search results — "…Poly-quat formulas are
  non-foa". These are the snippets people read before deciding whether to click.

## One thing we need you to decide

**The site currently displays 114 manufacturer product photographs that we do not have written
permission to use.** They were collected during the catalog build, each with its source recorded,
and all of them are on the site right now. This is normal practice in the industry and manufacturers
usually welcome it from people selling their equipment — but permission has not been asked for.

Two options: we approach BECS, Pulsar and the other major lines for co-marketing permission (which
often comes with better assets than what we have), or we take the photographs down. Our
recommendation is to ask — it costs nothing and usually succeeds. We'd like your decision before
the site goes live.

## Still waiting on you

These have been open for a while and each needs one answer:

1. **Where should form submissions go?** This is the big one. All three forms are built, validated
   and ready, but they currently deliver nowhere — the site cannot capture a lead until this is
   set. Options and trade-offs are written up; it's a short conversation.
2. **Pulsar dealer status.** The site says your dealer status is "being confirmed". It will keep
   saying that until you can point us at an agreement or a rep's confirmation.
3. **Permission to name your customers.** 18 facilities and one testimonial are on the site behind
   "confirm before launch" markers.
4. **Your business hours**, which appear nowhere on the old site either.
5. **The founding year.** The site says "Established 1987", but our records from your old site say
   the business was *purchased* in 1987. Those aren't the same thing, and it's on your About page.
6. **Your own warranty commitments.** The service page publishes warranty promises and exclusions
   written in FreyTech's voice, binding your company. Nobody has ever signed off on that text.

## Where things stand
The site builds cleanly with no errors and no warnings, every internal link resolves, and every
page has a unique title. The amber "under review" markers are gone: what you see on the preview is the
final copy, ready to go on freytech.org.

---

# Round two: your 24 September changes

*Added 2026-09-26.*

## Done

**"Remove the outside of NYC."** Done everywhere — 81 places across the site, plus the schema
search engines read. New York City is now a full service area with its own page, and the contact
form no longer tells a Brooklyn facility manager that you don't serve them. One exception we left
deliberately: the New York pool-chemistry guide still says "outside New York City", because that is
the actual scope of the state regulation (10 NYCRR Subpart 6-1) — New York City runs its own health
code. That is a statement about the law, not about your territory.

**Your new address.** 356 Macedon Center Road, Fairport, Monroe County is now the office everywhere
including the structured data Google reads. The Macedon PO Box is set up separately as a remit-to
address and shown as one — it is not presented as your office, because it isn't.

**Products removed.** All LMI. Both ClearWater Tech ozone systems. The AST Propeller Bead filters and the two AquatiControl water-level controllers you pasted screenshots of. The chemical brands your
supplier doesn't stock. Everything removed is held rather than deleted, so any of it comes back in
minutes if you change your mind.

**Deck and accessibility, Spectrum only** — with one correction worth knowing about. We first read
that as "Spectrum-branded only", which removed the lane lines and diving boards. Checking Spectrum's
own catalogue showed those are *Spectrum products*: the AntiWave and Competitor lane lines carry
Spectrum part numbers, and Spectrum sells the Duraflex boards under its own part numbers with
Duraflex's permission. So they stayed. You were right that "they have some version of almost
everything."

**Your liner section.** Added as a new Pool Surfaces and Membranes category. One naming note: CGT's
actual product is **Infinity Pool Surface by CGT** — "Commercial Membrane" is their category name.
We used the real product name and made "Commercial Membrane" a search term so either finds it.

**Clear Comfort AOP.** All three commercial models with their real flow rates, certifications and
maintenance requirements.

**The Pulsar photo.** You were right, and it was worse than one picture. The page was showing a
Pulsar Infinity. We found it the same morning your note arrived and fixed the underlying cause —
which turned out to be showing a competitor's bulkhead on the Stark page too. **You were looking at
the preview from 16 September.** That is still the newest version published, so several things you
asked for may already be done. Getting the current build in front of you should come first.

## The rest of your list, now done

**WAPOTECH is listed under supplemental treatment**, as you asked. The WAPOTEC SYSTEM (HydroSan, HydroXan and
WAPO Floc, dosed alongside chlorine) is the supplemental-treatment entry. WAPOTECH's other lines are on the site
too, filed where an engineer would look for them: WAPO Chlor on-site chlorine generation under chemical delivery,
WAPO TEC sand and multimedia filters under filtration, and the ClearAmine air-quality monitor under testing.

**Aurora, Grundfos and Pentair are listed as manufacturers you represent**, each naming ASC Pumping Equipment as
the channel. Aurora's 3800 Series end-suction and 410 Series split-case pumps, and Pentair's EQ Series,
WhisperFloXF, WhisperFloXF VS and C Series commercial pumps, are on the site with Pentair's published figures.
Grundfos was already there.

**E-Z Clor is on the site** alongside Jack's Magic: sanitizers, oxidizers, algaecides, balancers and the
supplements line (clarifiers, enzymes, stain and scale, phosphate removers, cleaners), each product described in
E-Z Clor's own words with its stated active ingredient where the site gives one. One note for your judgment, not
ours to make: the trichlor tablets and the trichlor algaecide granule are labelled as stabilized products that add
cyanuric acid, because that is what they are. Your New York pool-chemistry guide says the State prohibits cyanuric
acid in public pools. Both statements are true; you may want to decide how you present the tablets to a school
district.

**Mer-Made and Filtrex are on the site.** Mer-Made's commercial filtration lines, and Filtrex's EC Series
regenerative media filters (all eighteen models with Filtrex's published sizing data), Trex-Flow VFD packages and
vacuum transfer system.

**Every line you named now reads "Available through FreyTech."** Until now the site hedged on every brand except
BECS: "no dealer relationship is implied." That was right when nobody had confirmed anything. Your instructions
are the confirmation, so Pulsar, Spectrum and the Spectrum-catalogue brands, CGT, Clear Comfort, WAPOTECH,
Mer-Made, Filtrex, E-Z Clor, Jack's Magic, Aurora, Grundfos and Pentair now show as lines you represent. Brands
that came across from the old catalogue and that you have not mentioned still say "request availability." If any
of the named ones is wrong, one word and it flips back.

**The contact forms now deliver.** Every form on the site emails the submission to info@freytech.org as a table,
with Reply going straight to the person who wrote. One thing remains, and it is yours: the first submission
triggers an "Activate Form" email to that inbox. Click it once and every lead after that arrives. Until then the
site tells the visitor honestly that delivery is still being set up and gives them your phone number.

## One thing still worth deciding

Making deck and accessibility Spectrum-only leaves **five types with nothing at all**: movable bulkheads,
underwater LED lighting, safety pool covers, anti-slip deck grating, and deck furniture. Spectrum makes none of
them. Their covers are thermal blankets, not weight-rated safety covers, so we did not swap one for the other.
Name another line for each, or we put a short "we can source these" note on those pages. The bulkhead gap is worth
a second thought, since your Ithaca College job is a bulkhead project and it is still on the site.

## How to handle the rest of the product changes
You asked whether to email, call or meet. Our suggestion: we send you **one list of every product on
the site, one row each, with a keep-or-remove column.** Mark it up whenever suits you and send it
back. That is faster than a meeting for you, and it leaves a record so nothing gets lost.
