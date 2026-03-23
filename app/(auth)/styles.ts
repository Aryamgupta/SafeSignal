import { COLORS } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const authStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
    marginBottom: 32,
  },
  input: {
    backgroundColor: "#1C1C1C",
    padding: 16,
    borderRadius: 12,
    color: "#fff",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#E53935",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#333",
  },
  dividerText: {
    color: "#777",
    marginHorizontal: 12,
  },
  googleButton: {
    borderWidth: 1,
    borderColor: "#333",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  googleText: {
    color: "#fff",
    fontWeight: "500",
  },
  linkText: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 24,
  },
  mainTitleView: {
    marginHorizontal: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  mainTitle: {
    fontSize: 48,
    color: "#fff",
    fontWeight: "bold",
  },
  tagLine: {
    fontSize: 16,
    color: COLORS.blurBackground,
  },
  logo: {
    width: 200,
    height: 200,

    // tintColor: , // only if you want to recolor later
  },
  imagePicker: {
  width: 100,
  height: 100,
  borderRadius: 50,
  backgroundColor: "#1E1E1E",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 20,
  alignSelf: "center",
},

profileImage: {
  width: 100,
  height: 100,
  borderRadius: 50,
},

imageText: {
  color: "#777",
  fontSize: 12,
  textAlign: "center",
},

genderContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 15,
},

genderButton: {
  flex: 1,
  padding: 10,
  borderRadius: 8,
  backgroundColor: "#1E1E1E",
  marginHorizontal: 5,
  alignItems: "center",
},

genderSelected: {
  backgroundColor: "#FF3B30",
},

genderText: {
  color: "#aaa",
},

genderTextSelected: {
  color: "#fff",
},

phoneContainer: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#1E1E1E",
  borderRadius: 10,
  paddingHorizontal: 10,
  marginBottom: 15,
},

phoneWrapper: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#1E1E1E",
  borderRadius: 12,
  paddingHorizontal: 12,
  marginBottom: 15,
},

countryButton: {
  paddingRight: 10,
  borderRightWidth: 1,
  borderRightColor: "#333",
},

countryText: {
  color: "#fff",
  fontWeight: "600",
},

phoneInput: {
  flex: 1,
  color: "#fff",
  paddingVertical: 14,
  paddingLeft: 10,
},

});
