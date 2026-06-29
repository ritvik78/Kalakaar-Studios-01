import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      opacity: {
        5: '0.05',
        8: '0.08',
        10: '0.1',
        12: '0.12',
        14: '0.14',
        15: '0.15',
        16: '0.16',
        18: '0.18',
        22: '0.22',
        25: '0.25',
        28: '0.28',
        30: '0.3',
        32: '0.32',
        35: '0.35',
        38: '0.38',
        40: '0.4',
        45: '0.45',
        48: '0.48',
        50: '0.5',
        52: '0.52',
        55: '0.55',
        58: '0.58',
        60: '0.6',
        64: '0.64',
        65: '0.65',
        68: '0.68',
        70: '0.7',
        72: '0.72',
        74: '0.74',
        75: '0.75',
        80: '0.8',
        85: '0.85',
        90: '0.9',
        95: '0.95',
      },
      boxShadow: {
        glass: '0 20px 60px rgba(26, 26, 26, 0.25)',
        glow: '0 0 0 1px rgba(255, 213, 0, 0.28), 0 16px 42px rgba(226, 35, 26, 0.22)',
      },
      backgroundImage: {
        'metallic-sheen': 'linear-gradient(120deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.2) 18%, rgba(192,192,192,0.92) 38%, rgba(58,58,58,0.94) 58%, rgba(255,255,255,0.12) 84%, rgba(255,255,255,0.86) 100%)',
        'pinstripe': 'repeating-linear-gradient(135deg, rgba(255,255,255,0.18) 0 2px, rgba(255,255,255,0.04) 2px 8px)',
        'fizz': 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0 2px, transparent 3px), radial-gradient(circle at 80% 60%, rgba(255,213,0,0.35) 0 2px, transparent 3px), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.25) 0 1px, transparent 2px)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-35%)' },
          '100%': { transform: 'translateX(135%)' },
        },
        floatUp: {
          '0%': { transform: 'translateY(0) scale(0.85)', opacity: '0' },
          '15%': { opacity: '0.9' },
          '100%': { transform: 'translateY(-180px) scale(1.12)', opacity: '0' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        drift: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -8px, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' },
        },
        wipeIn: {
          '0%': { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s linear infinite',
        floatUp: 'floatUp 5.5s linear infinite',
        pulseSoft: 'pulseSoft 4s ease-in-out infinite',
        drift: 'drift 6s ease-in-out infinite',
        wipeIn: 'wipeIn 0.8s cubic-bezier(.2,.8,.2,1) both',
      },
      screens: {
        xs: '360px',
      },
    },
  },
  plugins: [],
};

export default config;