import AppContainer from "@/components/AppContainer";
import { PermissionContainer } from "@/components/PermissionContainer";
import SOSButton from "@/components/SOSButton";
import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function HomeScreen() {
  const [alertActive, setAlertActive] = useState<boolean>(false);
  const [locationPermission, setLocationPermission] = useState(true);
  const [motionPermission, setMotionPermission] = useState(true);

  return (
    <AppContainer>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Your Safety Matters</Text>

        <View style={styles.contentSection}>
          <View style={styles.cardsContainer}>
            <PermissionContainer
              icon={
                <View style={[styles.iconBox, { backgroundColor: "#333" }]}>
                  <Ionicons name="shield-checkmark-outline" size={24} color={COLORS.textPrimary} />
                </View>
              }
              title="Location Access"
              value={locationPermission}
              onToggle={setLocationPermission}
            />
            <PermissionContainer
              icon={
                <View style={[styles.iconBox, { backgroundColor: "#333" }]}>
                  <Ionicons name="hand-right-outline" size={24} color={COLORS.textPrimary} />
                </View>
              }
              title="Motion & Sensor data"
              value={motionPermission}
              onToggle={setMotionPermission}
            />
          </View>

          <Pressable style={styles.grantButton}>
            <Text style={styles.grantButtonText}>Grant Permissions</Text>
          </Pressable>

          <View style={styles.sosContainer}>
            <SOSButton
              isActive={alertActive}
              onPress={() => setAlertActive(!alertActive)}
            />
          </View>

          <Text style={styles.statusText}>
            Status: <Text style={styles.statusValue}>Safe</Text>
          </Text>
        </View>
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  headerTitle: {
    color: COLORS.textPrimary,
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 30,
  },
  contentSection: {
    flex: 1,
    alignItems: "center",
  },
  cardsContainer: {
    width: "100%",
    gap: 15,
    marginBottom: 30,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  grantButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 50,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  grantButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  sosContainer: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    marginTop: 40,
    color: COLORS.textPrimary,
    fontSize: 24,
    fontWeight: "600",
  },
  statusValue: {
    color: COLORS.accent,
  },
});
