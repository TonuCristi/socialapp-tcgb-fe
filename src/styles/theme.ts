import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "oklch(97.7% 0.013 236.62)",
    secondary: "oklch(14.1% 0.005 285.823)",
    accent: "oklch(68.5% 0.169 237.323)",
    succes: "oklch(62.7% 0.194 149.214)",
    succesLight: "oklch(72.3% 0.219 149.579)",
    danger: "oklch(63.7% 0.237 25.331)",
    dangerLight: "oklch(70.4% 0.191 22.216)",
    shadowBlue: "rgb(0, 166, 244, 0.4)",
    shadowRed: "rgb(251, 44, 54, 0.4)",
    white: "#fff",
    transparent: "transparent",
    zinc800: "oklch(27.4% 0.006 286.033)",
    gray300: "oklch(87.2% 0.01 258.338)",
    gray400: "oklch(70.7% 0.022 261.325)",
  },
  spacing: {
    "2xs": "0.125rem", // 2px
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "2.5rem", // 40px
    "3xl": "3rem", // 48px
    "4xl": "3.5rem", // 56px
    "5xl": "4rem", // 64px
    "6xl": "4.5rem", // 72px
    "7xl": "5rem", // 80px
    "8xl": "5.5rem", // 88px
    "9xl": "6rem", // 96px
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
    "7xl": "4.5rem", // 72px
    "8xl": "6rem", // 96px
    "9xl": "8rem", // 128px
  },
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  borderRadius: {
    xs: "0.125rem", // 2px
    sm: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    "4xl": "2rem", // 32px
    "5xl": "2.5rem", // 40px
    "6xl": "3rem", // 48px
    "7xl": "3.5rem", // 56px
    "8xl": "4rem", // 64px
    "9xl": "4.5rem", // 72px
    full: "100%",
  },
  breakpoints: {
    "2xs": "20rem", // 320px
    xs: "30rem", // 480 px
    sm: "40rem", // 640 px
    md: "48rem", // 768 px
    lg: "64rem", // 1024 px
    xl: "80rem", // 1280 px
    "2xl": "96rem", // 1536 px
  },
  width: {
    "3xs": "16rem", // 256px
    "2xs": "18rem", // 288px
    xs: "20rem", // 320px
    sm: "24rem", // 384px
    md: "28rem", // 448px
    lg: "32rem", // 512px
    xl: "36rem", // 576px
    "2xl": "42rem", // 672px
    "3xl": "48rem", // 768px
    "4xl": "56rem", // 896px
    "5xl": "64rem", // 1024px
    "6xl": "72rem", // 1152px
    "7xl": "80rem", // 1280px
    auto: "auto",
    full: "100%",
  },
  height: {
    auto: "auto",
    full: "100%",
    screen: "100dvh",
    min: "min-content",
    max: "max-content",
  },
};
