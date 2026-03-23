import { BlurView } from "expo-blur";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { COLORS, SIZES } from "@/constants/theme";

export default function GlassCard({ children }: { children: ReactNode }) {
  return (
    <BlurView intensity={50} tint="dark" style={styles.card}>
      <View>{children}</View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    marginVertical: 10,
  },
});
