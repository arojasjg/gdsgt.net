/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('../../packages/ui/tailwind.config.js')],
};
