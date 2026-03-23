import { COLORS } from "@/constants/theme";
import React from "react";
import {
  View,
  Text,
  Switch,
  ViewStyle,
  StyleSheet,
} from "react-native";

interface PermissionContainerProps {
  icon: React.ReactNode;
  title: string;
  value: boolean;
  onToggle: (value: boolean) => void;
  containerStyle?: ViewStyle;
}

export function PermissionContainer({
  icon,
  title,
  value,
  onToggle,
  containerStyle,
}: PermissionContainerProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.leftSection}>
        <View style={styles.iconWrapper}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: "#3E3E3E", true: COLORS.primary }}
        thumbColor="#fff"
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    marginRight: 12,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "500",
  },
});
