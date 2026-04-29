export const siteTheme = {
  brand: {
    name: "M & M Waggy Tales",
    tagline: "Tail-Wagging Gateways for Pets",
  },
  colors: {
    primary: "#F16B34",
    secondary: "#A2D2FF",
    tertiary: "#FDF5E6",
    neutral: "#2D2D2D",
    white: "#FFFFFF",
    softCard: "#FFF8EF",
    line: "#ECDAC6",
  },
  fonts: {
    heading: "Plus Jakarta Sans",
    body: "Be Vietnam Pro",
  },
} as const;

export type SiteTheme = typeof siteTheme;
