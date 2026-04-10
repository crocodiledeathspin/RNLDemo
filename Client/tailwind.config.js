/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral colors
        'neutral-primary': {
          soft: '#f8f9fa',
          medium: '#e9ecef',
        },
        'neutral-secondary': {
          medium: '#dee2e6',
        },
        'neutral-tertiary': '#f1f3f4',
        'neutral-tertiary-medium': '#f8f9fa',

        // Border colors
        'default': '#dee2e6',
        'default-medium': '#adb5bd',

        // Text colors
        'heading': '#212529',
        'body': '#6c757d',
        'fg-brand': '#0d6efd',

        // Focus ring colors
        'neutral-tertiary': '#e9ecef',

        // Danger colors
        'danger-soft': '#f8d7da',
        'danger-subtle': '#dc3545',
      },
    },
  },
  plugins: [],
}