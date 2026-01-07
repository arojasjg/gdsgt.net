// GDS Brand Colors - Enhanced with best practices from HubSpot, Monday, SAP
// Combining professional blue with energetic accents for modern B2B SaaS
export const tokens = {
  colors: {
    // Primary: Professional Blue (SAP-inspired authority + Monday vibrancy)
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#0070F2',  // SAP-inspired professional blue (was #3b82f6)
      600: '#0059C2',  // Deeper, more authoritative
      700: '#004A9F',
      800: '#003B7F',
      900: '#002D5F',  // Deep professional blue (GDS header)
      950: '#001F3F',
    },
    // Secondary: Energetic Orange (HubSpot-inspired warmth)
    secondary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#FF7A59',  // HubSpot-inspired warm orange (was #f97316)
      600: '#FF5733',  // More vibrant for CTAs
      700: '#E6441F',
      800: '#C2350F',
      900: '#9A2A0C',
      950: '#721F09',
    },
    // Accent: Purple (Monday-inspired energy)
    accent: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',  // Monday-inspired purple
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764',
    },
    // Pink (Monday-inspired boldness for highlights)
    pink: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#FF3D57',  // Monday-inspired bold pink
      600: '#E6123D',
      700: '#C20F33',
      800: '#9F0D2A',
      900: '#7C0A21',
      950: '#590718',
    },
    // Success: Fresh green (Xero-inspired trust)
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',  // Fresh, trustworthy green
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    // Warning: Vibrant orange (attention-grabbing)
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    // Error: Clear red (unmistakable)
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    // Info: Sky blue (Xero-inspired freshness)
    info: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#13B5EA',  // Xero-inspired sky blue
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },
    // Neutral: Enhanced grays for better contrast
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
  },
  typography: {
    fontFamily: {
      sans: 'var(--font-inter)',
      mono: 'var(--font-mono)',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    // Brand glows for interactive elements
    'glow-blue': '0 0 20px rgba(0, 112, 242, 0.4)',      // Primary glow
    'glow-orange': '0 0 20px rgba(255, 122, 89, 0.4)',   // Secondary glow
    'glow-purple': '0 0 20px rgba(168, 85, 247, 0.4)',   // Accent glow
    'glow-pink': '0 0 20px rgba(255, 61, 87, 0.4)',      // Pink glow
    'glow-green': '0 0 20px rgba(34, 197, 94, 0.4)',     // Success glow
  },
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

export type Tokens = typeof tokens;
