# Portfolio design review

**Scope:** Source review of the Next.js portfolio in this repository, focused on visual hierarchy, interaction design, accessibility, and how well the page presents the developer’s work. This is a source-based review, not a deployment audit. **Implementation status:** Suggestions 2–8 are implemented in the working branch; suggestion 1 remains intentionally deferred so placeholder project data, links, and images stay unchanged.

## Overall assessment

The portfolio has a solid foundation: clear bilingual content, a recognizable portrait, dark/light themes, a direct contact path, and a coherent emerald accent. The main issue is not lack of polish—it is that presentation currently outpaces proof. The project section looks like a substantial body of work, but the cards all link to the same GitHub profile and several reuse the same two images. For a portfolio, that weakens trust more than any color or animation choice can strengthen it.

The best next step is to make the work easier to verify and understand, then simplify the visual system around it. Apple Design principles are useful here as a lens for **purpose, clarity, agency, and craft**—not as a request to imitate Apple’s appearance.

## Highest-impact improvements

### 1. Make each featured project verifiable — **High impact / first priority**

**What I found:** `assets/translations.js` lists six project cards, but all six point to `https://github.com/DiegoSCC`. The cards also reuse `/work-1.png` and `/work-2.png`, and describe broad product ideas rather than the specific work, decisions, or outcomes. The card action says “View repository / code,” which promises a project-level destination but currently opens a profile.

**Why it matters:** Hiring managers and clients need evidence they can inspect. Generic or repeated proof makes otherwise polished work feel hypothetical and increases the effort required to evaluate you.

**Improve it:**
- Feature only the strongest **2–4 real projects** until there is distinct material for more.
- Give every card its own destination: repository, live demo, or a clearly labeled case-study page. If a project is private, say so and explain what can be shared.
- Replace generic thumbnails with screenshots of the actual project. Use a consistent crop, but let each image identify its own product.
- Add concise evidence: **your role, the problem, one important technical decision, and a result**. Use measured numbers only when you can substantiate them.
- If an item is a concept/demo rather than client or shipped work, label that honestly.

**Files:** `assets/translations.js` (project data); `public/work-*.png` (visuals); `app/components/Projects.jsx` (card layout and CTA).

### 2. Put the strongest work earlier in the page — **High impact**

**What I found:** The current order is hero → About → Services → Projects → Contact (`app/page.js`). A visitor has to pass two information-heavy sections before seeing the work.

**Improve it:** Consider **Hero → Selected work → Short About/proof → Skills or specialties → Contact**. Keep Services only if it answers a real client question; otherwise compress it into a short “What I can help with” row or move it below the project evidence. This makes the page’s main purpose apparent sooner without removing useful context.

### 3. Sharpen the hero around a specific value proposition — **High impact**

**What I found:** The hero communicates “Backend & APIs” and lists the technology stack, but the headline and bio are broad. A portrait appears in both the hero and About section, repeating the same visual rather than adding new evidence (`app/components/header.jsx`, `app/components/About.jsx`).

**Improve it:** Keep the existing specialty, but lead with one plain-language statement about the kind of problem you solve and for whom. Follow with a short supporting line and one proof point (for example, a relevant shipped project, experience with regional businesses, or current availability—only if accurate). Keep two clear actions: **View selected work** and **Contact me**; the résumé can be a quieter secondary link. Consider using the About portrait once and spending the other space on a concrete project preview or proof point.

### 4. Reduce repeated card-and-hover patterns — **Medium-high impact**

**What I found:** About, Services, Projects, and Contact reuse centered section headings, rounded bordered cards, emerald chips, and similar hover lifts/shadows. Skills, tools, info cards, services, contact methods, and project cards all become separate boxed units.

**Why it matters:** Consistency helps, but when every section has the same visual weight, the eye gets few cues about what matters most. The result feels more like a reusable component showcase than a portfolio with a distinct editorial point of view.

**Improve it:** Establish one main card treatment and use it selectively. Make the featured project visually dominant, then use a simpler list or compact proof strip for skills and credentials. Vary section composition where the content changes—for example, left-align project introductions and use a single wide feature before smaller supporting projects. Preserve the emerald accent, but reserve its highest contrast for primary actions and selected states.

### 5. Make motion quieter, more purposeful, and interruptible by preference — **Medium impact**

**What I found:** Many elements animate into view, cards lift on hover, several controls animate shadows, and the availability badge pulses (`app/components/About.jsx`, `Projects.jsx`, `Services.jsx`, `Contact.jsx`). The global stylesheet has no `prefers-reduced-motion` handling (`app/globals.css`).

**Improve it:**
- Keep motion that clarifies an action or adds useful feedback; remove repeated lift/shadow animations from non-interactive content.
- Stop the perpetual availability pulse; a static status dot and explicit label are calmer and just as clear.
- Respect `prefers-reduced-motion: reduce` across both CSS animations and Motion components, using a short fade or no entrance movement.
- Keep press feedback immediate and restrained. Avoid making hover the only indicator that a card or link is interactive.

This follows the Apple Design distinction between **behavior and decoration**: motion should explain the interface, not compete with its content.

## Polish and accessibility

### 6. Improve scannability and responsive type

- Project-card descriptions use `text-xs` on small screens (`app/components/Projects.jsx`). Raise them to at least a comfortable body size and keep line lengths manageable; the project summary is essential evidence, not metadata.
- Keep the heading scale deliberate: tight tracking and leading for large titles, comfortable leading for body copy, and fewer all-caps micro-labels.
- About’s three info cards sit inside a narrower right-hand column on desktop (`app/components/About.jsx`). Check whether their descriptions become cramped; a two-column or simpler stacked treatment may read better.

### 7. Keep navigation and controls easy to perceive and operate

- The global CSS hides scrollbars on all browsers (`app/globals.css`). Restore the scrollbar or use a subtle visible treatment; hidden scroll position removes a useful wayfinding cue.
- The mobile drawer slides off-screen but remains rendered (`app/components/navbar.jsx`). Ensure closed-menu links cannot receive keyboard focus, move focus into the drawer when opened, and return focus to the menu button when closed. A modal-style drawer should also expose its open/closed state accessibly and support Escape to close.
- Several compact controls are 38px square. Aim for approximately **44px touch targets**, especially for the menu and theme controls.
- Add consistent visible `focus-visible` styles to links and buttons; some controls have hover/press styling but no equally clear keyboard-focus treatment.
- The document starts with `lang="es"` (`app/layout.js`) while the interface can switch to English. Keep the document language in sync with the selected language so assistive technology reads the content with the right pronunciation.

### 8. Make the contact action feel dependable

The contact section has a direct email link as a useful fallback. Keep that prominent, and make submission feedback clear and announced to assistive technology (for example, a live status region). A visitor should know immediately whether a message is sending, succeeded, or needs attention. Avoid leaving a disabled button as the only visible indication of progress.

## Suggested order of work

1. **Audit the project list:** confirm which projects are real, choose the strongest few, and supply a distinct link and image for each.
2. **Reorder the page** so selected work is visible soon after the hero.
3. **Rewrite the hero** around a precise, evidence-backed value proposition.
4. **Simplify visual repetition** and make the featured project the page’s clearest focal point.
5. **Tune motion, keyboard access, language semantics, and mobile target sizes.**

## What is already working

- The site makes it possible to contact you directly and download a résumé.
- Spanish and English content are both present, and the theme preference is handled before the page renders.
- The green accent gives the interface a recognizable through-line.
- The page has a sensible section structure and provides contextual labels for many controls.

**Bottom line:** Keep the thoughtful foundation, but make the work more concrete and the hierarchy more decisive. A smaller, verifiable set of case studies will improve both credibility and visual clarity more than adding another effect or section.
