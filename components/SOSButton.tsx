import React, { useEffect, useRef } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  Animated,
  View,
} from "react-native";
import { COLORS } from "@/constants/theme";

interface SOSButtonProps {
  onPress: () => void;
  isActive: boolean;
}

export default function SOSButton({
  onPress,
  isActive,
}: SOSButtonProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0.6)).current;

  const animationRef = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    if (isActive) {
      // Reset before starting
      scaleAnim.setValue(1);
      opacityAnim.setValue(0.6);

      animationRef.current = Animated.loop(
        Animated.parallel([
          Animated.timing(scaleAnim, {
            toValue: 1.5,
            duration: 1200,
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnim, {
            toValue: 0,
            duration: 1200,
            useNativeDriver: true,
          }),
        ])
      );

      animationRef.current.start();
    } else {
      // Stop animation
      animationRef.current?.stop();
      scaleAnim.setValue(1);
      opacityAnim.setValue(0);
    }

    return () => {
      animationRef.current?.stop();
    };
  }, [isActive]);

  return (
    <View style={styles.wrapper}>
      <Animated.View
        pointerEvents="none"
        style={[
          styles.animatedRing,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}
      />

      <Pressable onPress={onPress} style={styles.container}>
        <Text style={styles.text}>SOS</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 6,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },

  animatedRing: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: COLORS.primary,
  },

  text: {
    color: "#fff",
    fontSize: 65,
    fontWeight: "bold",
  },
});
