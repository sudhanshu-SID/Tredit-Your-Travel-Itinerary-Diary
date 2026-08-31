import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#f8f9fa",
        primary: "#0040a1",
        "primary-container": "#0056d2",
        "primary-fixed": "#dae2ff",
        secondary: "#9f4200",
        "secondary-container": "#fd6c00",
        tertiary: "#5400cc",
        "tertiary-container": "#6e25f6",
        surface: "#f8f9fa",
        "surface-container-low": "#f3f4f5",
        "surface-container": "#edeeef",
        "surface-container-high": "#e7e8e9",
        "surface-container-highest": "#e1e3e4",
        "surface-container-lowest": "#ffffff",
        "surface-dim": "#d9dadb",
        "on-surface": "#191c1d",
        "on-surface-variant": "#424654",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-tertiary": "#ffffff",
        "outline": "#737785",
        "outline-variant": "#c3c6d6",
        "error": "#ba1a1a",
        "on-error-container": "#93000a", // from the HTML snippet shown earlier
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        serif: ['Crimson Pro', 'serif'],
      },
      borderRadius: {
        sm: '0.5rem',
        md: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
      boxShadow: {
        ambient: '0 8px 40px rgba(25, 28, 29, 0.06)',
        'ambient-lg': '0 12px 60px rgba(25, 28, 29, 0.08)',
      },
      transitionProperty: {
        smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }
    },
  },
  plugins: [
    forms,
    containerQueries
  ],
}
