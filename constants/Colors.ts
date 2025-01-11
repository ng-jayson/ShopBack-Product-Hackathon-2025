/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#101010";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#2C2E3D",
    secondaryText: "#76757B",
    border: "#ECECEC",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    homeContainer: "#fff",
    card: "#fff",
  },
  dark: {
    text: "#fff",
    secondaryText: "#ccc",
    border: "#666666",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    homeContainer: "#202020",
    card: "#404040",
  },
};
