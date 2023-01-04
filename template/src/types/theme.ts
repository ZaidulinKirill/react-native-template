import theme from 'theme';

declare module '@kirz/react-native-toolkit' {
  type ThemeTextVariants = typeof theme.typography;
  export interface TextVariants extends ThemeTextVariants {}

  type ThemeFontFamilies = typeof theme.fonts;
  export interface FontFamilies extends ThemeFontFamilies {}

  type ThemeColors = typeof theme.colors;
  export interface Colors extends ThemeColors {}
}

export {};
