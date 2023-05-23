import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    "brand.light": "#00B37E",
    "brand.medium": "#00875F",
    gray: {
      "gray.100": "#E1E1E6",
      "gray.200": "#C4C4CC",
      "gray.300": "#8D8D99",
      "gray.400": "#7C7C8A",
      "gray.500": "#505059",
      "gray.800": "#202024",
      "gray.700": "#29292E",
      "gray.600": "#323238",
    },
  },
  fonts: {
    regular: "Roboto_400Regular",
    bold: "Roboto_700Bold",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
});

type ThemeModel = typeof theme;

declare module "native-base" {
  interface ICustomTheme extends ThemeModel {}
}
