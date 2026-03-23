import { authStyle as styles } from "@/app/(auth)/styles";
import AppContainer from "@/components/AppContainer";
import { appInfo } from "@/constants/info";
import { auth } from "@/lib/firebase";
import BottomSheet from "@gorhom/bottom-sheet";
import { Link, useRouter } from "expo-router";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useMemo, useRef, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import CountryPicker from "react-native-country-picker-modal";

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    profileImage: null as string | null,
  });

  const [countryCode, setCountryCode] = useState("IN");
  const [callingCode, setCallingCode] = useState("91");
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["65%"], []);

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password,
      );

      const user = userCredential.user;

      // Send verification email (OTP link)
      console.log("Sending verification email...");
      await sendEmailVerification(user, {
        url: "https://safesignal-app.firebaseapp.com",
        handleCodeInApp: false,
      });

      console.log("Email sent!");

      router.push("/verify-email");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    // <View style={styles.container}>
    <AppContainer>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Stay safe with {appInfo.name}</Text>

      {/* Profile Image */}
      <Pressable style={styles.imagePicker}>
        {form.profileImage ? (
          <Image
            source={{ uri: form.profileImage }}
            style={styles.profileImage}
          />
        ) : (
          <Text style={styles.imageText}>Add Profile Photo</Text>
        )}
      </Pressable>

      {/* Name */}
      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#777"
        value={form.name}
        onChangeText={(text) => handleChange("name", text)}
        style={styles.input}
      />

      {/* Age */}
      <TextInput
        placeholder="Age"
        placeholderTextColor="#777"
        value={form.age}
        onChangeText={(text) => handleChange("age", text)}
        style={styles.input}
        keyboardType="numeric"
      />

      {/* Gender Selection */}
      <View style={styles.genderContainer}>
        {["Male", "Female", "Other"].map((item) => (
          <Pressable
            key={item}
            style={[
              styles.genderButton,
              form.gender === item && styles.genderSelected,
            ]}
            onPress={() => handleChange("gender", item)}
          >
            <Text
              style={[
                styles.genderText,
                form.gender === item && styles.genderTextSelected,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Email */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#777"
        value={form.email}
        onChangeText={(text) => handleChange("email", text)}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Phone */}
      {/* Phone with Country Code */}

      <View style={styles.phoneWrapper}>
        <Pressable
          style={styles.countryButton}
          onPress={() => bottomSheetRef.current?.expand()}
        >
          <Text style={styles.countryText}>🇮🇳 +{callingCode}</Text>
        </Pressable>

        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="#777"
          value={form.phone}
          onChangeText={(text) => handleChange("phone", text)}
          style={styles.phoneInput}
          keyboardType="phone-pad"
        />
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: "#121212" }}
        handleIndicatorStyle={{ backgroundColor: "#444" }}
      >
        <CountryPicker
          withFilter
          withFlag
          withCallingCode
          countryCode={countryCode}
          onSelect={(country) => {
            setCountryCode(country.cca2);
            setCallingCode(country.callingCode[0]);
            bottomSheetRef.current?.close();
          }}
          theme={{
            backgroundColor: "#121212",
            onBackgroundTextColor: "#fff",
            filterPlaceholderTextColor: "#888",
          }}
        />
      </BottomSheet>

      {/* Password */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#777"
        value={form.password}
        onChangeText={(text) => handleChange("password", text)}
        style={styles.input}
        secureTextEntry
      />

      {/* Signup Button */}
      <Pressable style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>

      <Link href="/login" asChild>
        <Pressable>
          <Text style={styles.linkText}>Already have an account? Login</Text>
        </Pressable>
      </Link>
    </AppContainer>
  );
}
