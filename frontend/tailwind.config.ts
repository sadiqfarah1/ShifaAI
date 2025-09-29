import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14B8A6',
        primaryDark: '#0F766E',
        accent: '#6366F1',
        background: '#F8FAFC',
        surface: '#FFFFFF',
        text: { primary: '#0F172A', secondary: '#475569' },
        success: '#10B981',
        error: '#F43F5E',
      },
      borderColor: {
        DEFAULT: '#E2E8F0',
      },
    },
  },
};

export default config;
