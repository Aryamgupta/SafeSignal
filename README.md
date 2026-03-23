# Project Overview: SafeSignal (SOS Shake Alert)

SafeSignal is a modern, high-performance personal safety application designed to provide immediate assistance to users in distress. The core value proposition is "Safety at your fingertips (or a shake away)," enabling users to trigger emergency alerts with minimal interaction.

## 🚀 Core Features

### 1. Gesture-Based SOS Trigger (Shake Alert)
- **Mechanism**: Utilizes the device's accelerometer to detect a specific shake pattern.
- **Implementation**: A custom React hook (`useShakeFlash`) monitors device motion. It requires 3 shakes within a 1.5-second window to trigger an alert, preventing false positives.
- **Immediate Response**: Triggers haptic feedback and toggles the device's flashlight to signal for help visually.

### 2. Manual SOS Button
- **Interface**: A prominent, animated SOS button on the home screen.
- **Visuals**: Features a "pulsating ring" animation when active to indicate an ongoing alert state.
- **Interaction**: Single-tap activation for users who cannot shake their device.

### 3. Real-Time Safety Network
- **Dynamic Updates**: Uses Firebase Firestore for real-time data synchronization between users and their "Connections" (emergency contacts).
- **Status Monitoring**: Users can see the safety status of their connections in real-time.

### 4. Authentication & Security
- **Providers**: Firebase Auth (Email/Password, Google).
- **Verification**: Mandatory email verification to ensure the legitimacy of the safety network.

## 🛠 Technology Stack

### Frontend (Mobile)
- **Framework**: React Native with **Expo** (SDK 54+).
- **Navigation**: `expo-router` (File-based routing).
- **Sensors**: `expo-sensors` (Accelerometer).
- **Camera**: `expo-camera` (Flashlight control).
- **Storage**: `react-native-mmkv` for high-performance local persistence.
- **Animations**: `react-native-reanimated` and `Animated` API for smooth UI transitions.

### Backend & Infrastructure
- **BaaS**: **Firebase**
    - **Firestore**: Real-time NoSQL database for user states and connections.
    - **Auth**: Secure user management.
    - **Cloud Functions**: (Planned) For server-side logic like SMS fallback and push notifications.
- **Socket/Real-time**: While currently leveraging Firestore's real-time listeners, the project is designed with a "Socket-first" mindset, anticipating a migration to a dedicated WebSocket server (e.g., Node.js + Socket.io) for ultra-low latency emergency signaling.

## 📂 Project Structure

```text
safeSignal-app/
├── app/                  # Expo Router directory
│   ├── (auth)/           # Authentication screens (Login, Signup, Verify)
│   ├── (tabs)/           # Main application tabs (Home, Activity, Connections, Profile)
│   └── _layout.tsx       # Root layout & Auth state guarding
├── components/           # Reusable UI components (SOSButton, AppContainer)
├── hooks/                # Custom hooks (useShakeFlash, useAuthListener)
├── lib/                  # Library configurations (Firebase)
├── constants/            # Design tokens (COLORS) and App Info
└── assets/               # Branding and media
```

## 🧠 Architectural Highlights

1. **Auth-Guard Pattern**: The `RootLayout` observes the Firebase auth state and automatically redirects users between `(auth)` and `(tabs)` segments, ensuring no unauthenticated access to safety features.
2. **Sensor Decoupling**: Shake detection logic is encapsulated in `useShakeFlash`, allowing it to be easily attached to any screen or even a background task (within OS constraints).
3. **Reactive UI**: The `SOSButton` component is highly reactive, using native-driven animations to provide immediate visual confirmation of an alert trigger.

## 🎯 Development Philosophy
- **Premium Aesthetics**: Dark-mode first design with vibrant safety accents (#E53935).
- **Performance**: Heavy use of `useNativeDriver` for animations and efficient sensor sampling to minimize battery drain while maintaining high reliability.
- **Scalability**: Structured to support future add-ons like SMS fallback, AI-based false alert detection, and wearable device integration.
