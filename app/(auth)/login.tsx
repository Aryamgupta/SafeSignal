import { authStyle as styles } from "@/app/(auth)/styles";
import AppContainer from "@/components/AppContainer";
import { appInfo } from "@/constants/info";
import { auth } from "@/lib/firebase";
import { Link, useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      console.log({ userCredential });
      if (!userCredential.user.emailVerified) {
        alert("Please verify your email first.");
        return;
      }

      router.replace("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    // <View style={styles.container}>
    <AppContainer>
      <View style={styles.mainTitleView}>
        <Image
          source={require("@/assets/images/safeSignal.png")}
          style={styles.logo}
        />

        <Text style={styles.mainTitle}>{appInfo.name}</Text>
        <Text style={styles.tagLine}>{appInfo.tagLine}</Text>
      </View>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#777"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={{ position: "relative", width: "100%" }}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#777"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={!showPassword}
        />

        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          style={{
            position: "absolute",
            right: 15,
            top: 18,
          }}
        >
          <Text style={{ color: "#888" }}>
            {showPassword ? "Hide" : "Show"}
          </Text>
        </Pressable>
      </View>

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.line} />
      </View>

      <Pressable style={styles.googleButton}>
        <Text style={styles.googleText}>Continue with Google</Text>
      </Pressable>

      <Link href="/signup" asChild>
        <Pressable>
          <Text style={styles.linkText}>Don’t have an account? Sign up</Text>
        </Pressable>
      </Link>
    </AppContainer>
  );
}
