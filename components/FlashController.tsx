import { StyleSheet, View } from 'react-native';
import { CameraView } from 'expo-camera';
import { useShakeFlash } from '../hooks/useShakeFlash';

export default function FlashController() {
  const { isFlashOn } = useShakeFlash();

  return (
    <View style={styles.container}>
      {isFlashOn && (
        <CameraView
          style={styles.hiddenCamera}
          facing="back"
          enableTorch
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  hiddenCamera: {
    width: 1,
    height: 1,
    position: 'absolute',
    opacity: 0, // 👈 hides preview
  },
});
