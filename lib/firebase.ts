import { getApps, initializeApp } from "firebase/app";
import { 
  initializeAuth, 
  getReactNativePersistence, 
  browserLocalPersistence,
  getAuth
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { MMKVPersistence } from "@/storage/firebasePersistence";
import { Platform } from "react-native";


const firebaseConfig = {
  apiKey: "AIzaSyB5o7qf4DW9-SpRED01PkY7dLoE4Md9Qv8",
  authDomain: "safesignal-app.firebaseapp.com",
  projectId: "safesignal-app",
  storageBucket: "safesignal-app.firebasestorage.app",
  messagingSenderId: "670193203386",
  appId: "1:670193203386:web:fb20989d9aa45f6a702a83",
  measurementId: "G-5PJS4PV0HQ",
};




const app = getApps().length === 0 
  ? initializeApp(firebaseConfig)
  : getApps()[0];


const authInstance = getApps().length === 0
  ? initializeAuth(app, {
      persistence: Platform.OS === 'web' 
        ? browserLocalPersistence 
        : getReactNativePersistence(MMKVPersistence as any),
    })
  : getAuth(app);

export const auth = authInstance;
export const db = getFirestore(app);
```