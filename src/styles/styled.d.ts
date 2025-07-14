import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      danger: string;
      white: string;
      transparent: string;
      zinc800: string;
      gray300: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
      "7xl": string;
      "8xl": string;
      "9xl": string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
      "7xl": string;
      "8xl": string;
      "9xl": string;
    };
    fontWeights: {
      thin: number;
      extralight: number;
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
      black: number;
    };
    borderRadius: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
      "7xl": string;
      "8xl": string;
      "9xl": string;
      full: string;
    };
    breakpoints: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };
    width: {
      "3xs": string;
      "2xs": string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
      "7xl": string;
      auto: string;
      full: string;
    };
  }
}
