# UI/UX Specifications

## 1. Overall Aesthetics
The UI MUST feel extremely premium. We rely heavily on:
- **Glassmorphism:** Backdrop blurs and semi-transparent panels.
- **Bento-Box Grid:** Clean, structured layouts for dashboards and content discovery.
- **Dynamic Gradients:** Smooth, subtle background gradients that enhance the premium feel.

## 2. Color Palette
*(Refer to `tailwind.config.js` for exact values)*
- **Primary:** Deep, rich tones suited for travel imagery.
- **Accents:** Vibrant colors used sparingly for key interactions and the Tredit Score.
- **Backgrounds:** Sleek dark modes or soft, neutral light modes designed to make photos pop.

## 3. Typography
- **Headings (`font-headline`):** Large, impactful typography for page titles and major stats.
- **Body:** Clean, highly legible sans-serif for content and descriptions.

## 4. Component Behaviors
- **Micro-interactions:** Every interactive element (buttons, nav items) should have a satisfying hover and active state using GSAP.
- **Page Transitions:** Smooth transitions between routes, avoiding harsh cuts.
- **Navigation:** Mobile-first `BottomNav` with active state animations. Should adapt to a side-menu or top nav on desktop.
- **Empty States:** Beautifully illustrated empty states for sections like the Ledger when a user has no trips.
