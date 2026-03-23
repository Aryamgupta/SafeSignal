/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
export const COLORS = {
  background: "#121212", // Deeper black
  surface: "#1E1E1E",    // Card/Surface color
  surfaceLight: "#2A2A2A",
  primary: "#FF5252",    // Vibrant Coral/Red
  primaryGlow: "rgba(255, 82, 82, 0.3)",
  secondary: "#4DB6AC",  // Teal-ish Teal
  accent: "#FFD740",     // Gold/Yellow for status
  textPrimary: "#FFFFFF",
  textSecondary: "#B0B0B0",
  success: "#4CAF50",
  danger: "#F44336",
  border: "#333333",
  primaryButtonBackground: "#FF5252",
  actionColor: "#4DB6AC",
  cardBackground: "#1E1E1E",
  blurBackground: "rgba(30, 30, 30, 0.8)",
  card: "#1E1E1E",
};

export const SIZES = {
  radius: 20,
  padding: 16,
};
