import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    // './src/components/**/*.{ts,tsx}',
    // './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      // screens: {
      //   "2xl": "1400px",
      // },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "hero": "url(/assets/images/bg/hero.svg)",
        "hero-dark": "url(/assets/images/bg/hero-dark.jpg)",
        "blob-1-light": "url(/assets/images/bg/blob-1-light.svg)",
        "blob-1-dark": "url(/assets/images/bg/blob-1-dark.svg)",
        "contact-illustration": "url(/assets/images/icons/customer-service-reps.png)",
        // "gradient-1": "bg-[linear--gradient(0deg,_rgba(103,58,183,1)_0%,_rgba(55,81,133,0.4))]"
      },
      screens: {
        smx: "552px",
        xsm: "400px"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config