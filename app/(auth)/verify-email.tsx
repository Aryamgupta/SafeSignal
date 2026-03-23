import { auth } from "@/lib/firebase";
import { useRouter } from "expo-router";
import { sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppContainer from "@/components/AppContainer";
import { COLORS } from "@/constants/theme";

export default function VerifyEmail() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const checkVerification = async () => {
    try {
      setLoading(true);
      await auth.currentUser?.reload();

      if (auth.currentUser?.emailVerified) {
        router.replace("/home");
      } else {
        alert("Email not verified yet.");
      }
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const resendEmail = async () => {
    try {
      if (!auth.currentUser) return;

      setResending(true);
      await sendEmailVerification(auth.currentUser);
      alert("Verification email sent again.");
    } catch (error) {
      alert("Failed to resend email.");
    } finally {
      setResending(false);
    }
  };

  return (
    <AppContainer containerStyles={{alignItems:"center",justifyContent:"center"}}>
      <View style={styles.card}>
        <Ionicons name="mail-unread-outline" size={60} color={COLORS.primaryButtonBackground} />

        <Text style={styles.title}>Verify Your Email</Text>

        <Text style={styles.subtitle}>
          We have sent a verification link to your email.
          Please verify before continuing.
        </Text>

        {/* Verify Button */}
        <Pressable
          style={[styles.primaryBtn, loading && { opacity: 0.6 }]}
          onPress={checkVerification}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.primaryText}>I&apos;ve Verified</Text>
          )}
        </Pressable>

        {/* Resend Button */}
        <Pressable
          style={styles.secondaryBtn}
          onPress={resendEmail}
          disabled={resending}
        >
          {resending ? (
            <ActivityIndicator color="#E53935" />
          ) : (
            <Text style={styles.secondaryText}>Resend Email</Text>
          )}
        </Pressable>
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 16,
    color: "#111",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
    marginTop: 10,
    marginBottom: 24,
  },
  primaryBtn: {
    width: "100%",
    backgroundColor: COLORS.primaryButtonBackground,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  primaryText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  secondaryBtn: {
    paddingVertical: 10,
  },
  secondaryText: {
    color: COLORS.primaryButtonBackground,
    fontWeight: "600",
  },
});
