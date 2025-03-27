
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        akaya: ['Akaya Kanadaka', 'cursive'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
        boulas: ['Boulas OT-Bold', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#003c72",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F1F0FB",
          foreground: "#1A1F2C",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" }
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        },
        shine: {
          "0%": { 
            backgroundPosition: "200% 0",
          },
          "100%": {
            backgroundPosition: "-200% 0",
          }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        "fadeIn-delay": "fadeIn 0.5s ease-in-out 0.3s forwards",
        "ken-burns": "ken-burns 20s ease-out infinite alternate",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shine: "shine 3s linear infinite",
        float: "float 6s ease-in-out infinite"
      },
      textShadow: {
        'lg': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      transitionDelay: {
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
      },
      backgroundImage: {
        'shine-gradient': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
