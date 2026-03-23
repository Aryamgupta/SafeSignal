import { ReactNode } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { COLORS } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppContainer({ children,containerStyles }: { children: ReactNode ,containerStyles?:ViewStyle}) {
  return (
    <SafeAreaView
      style={[styles.container,containerStyles]}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background, // Use the new deeper black
  },
});
