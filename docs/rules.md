# AI & Development Rules

## 1. Boundaries for the AI
- **No Generic Styles:** Always adhere to the premium design system defined in `tailwind.config.js`. Avoid plain utility classes that break the glassmorphism and bento-box aesthetic.
- **Consistency:** Ensure any new UI elements match the existing GSAP animations and layout styles.
- **Mock Data First:** While waiting for backend integration, always use `useStore.js` to mock state and test UI flows thoroughly.

## 2. Error Handling Standards
- **Graceful Failures:** Use error boundaries for React components.
- **User Feedback:** Implement a global toast/snackbar system for interactive feedback (e.g., "Saved to your Ledger!").
- **Loading States:** Always use beautifully animated shimmering skeletons while data is loading. Avoid blank screens.

## 3. Approved Libraries
- `react`, `react-dom`, `react-router-dom` (v7)
- `zustand` (State)
- `tailwindcss`, `postcss`, `autoprefixer` (Styling)
- `gsap` (Animations)
- `lucide-react` (Icons)
- `react-leaflet`, `leaflet` (Maps)
- **Do not introduce new core libraries without explicit approval.**

## 4. Git & Workflow
- Update `PROJECT_MEMORY.md` (or `memory.md`) at the end of every major step or phase.
- Ensure all components are highly reusable and adhere to the established layout patterns.
