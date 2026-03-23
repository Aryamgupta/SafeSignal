import { useEffect, useRef, useState } from 'react';
import { Accelerometer } from 'expo-sensors';
import { Camera } from 'expo-camera';

const SHAKE_THRESHOLD = 1.8;
const REQUIRED_SHAKES = 3;
const SHAKE_WINDOW_MS = 1500;
const COOLDOWN_MS = 2000;

export function useShakeFlash() {
  const shakeCount = useRef(0);
  const lastShakeTime = useRef<number | null>(null);
  const lastTriggerTime = useRef<number>(0);

  const [isFlashOn, setIsFlashOn] = useState(false);

  useEffect(() => {
    Accelerometer.setUpdateInterval(100);

    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      const force = Math.sqrt(x * x + y * y + z * z);
      const now = Date.now();

      if (force > SHAKE_THRESHOLD) {
        if (!lastShakeTime.current || now - lastShakeTime.current > SHAKE_WINDOW_MS) {
          shakeCount.current = 1;
        } else {
          shakeCount.current += 1;
        }

        lastShakeTime.current = now;

        if (
          shakeCount.current >= REQUIRED_SHAKES &&
          now - lastTriggerTime.current > COOLDOWN_MS
        ) {
          triggerFlash();
          lastTriggerTime.current = now;
          shakeCount.current = 0;
          lastShakeTime.current = null;
        }
      }
    });

    return () => subscription.remove();
  }, []);

  const triggerFlash = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== 'granted') return;

    setIsFlashOn(prev => !prev); // 🔁 TOGGLE
  };

  return { isFlashOn };
}
