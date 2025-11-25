import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [user, setUser] = useState<boolean | null>(null);
  const [loaded, error] = useFonts({
    "LeagueSpartan-Regular": require("../assets/fonts/LeagueSpartan-Regular.ttf"),
    "LeagueSpartan-Bold": require("../assets/fonts/LeagueSpartan-Bold.ttf"),
    "GlacialIndifference-Regular": require("../assets/fonts/GlacialIndifference-Regular.otf"),
    "GlacialIndifference-Bold": require("../assets/fonts/GlacialIndifference-Bold.otf"),
  });

  // Check fonts
  if (!loaded) return null;

  // Check user
  if (user === null) {
    setTimeout(() => setUser(false), 500);
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {user ? <Stack.Screen name="(tabs)" /> : <Stack.Screen name="(auth)" />}
    </Stack>
  );
}
