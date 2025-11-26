import AuthContextProvider, { AuthContext } from "@/store/auth-context";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useContext } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "LeagueSpartan-Regular": require("../assets/fonts/LeagueSpartan-Regular.ttf"),
    "LeagueSpartan-Bold": require("../assets/fonts/LeagueSpartan-Bold.ttf"),
    "GlacialIndifference-Regular": require("../assets/fonts/GlacialIndifference-Regular.otf"),
    "GlacialIndifference-Bold": require("../assets/fonts/GlacialIndifference-Bold.otf"),
  });

  // Check fonts
  if (!loaded) return null;
  SplashScreen.hideAsync();

  return (
    <AuthContextProvider>
      <AuthGate />
    </AuthContextProvider>
  );
}

function AuthGate() {
  const authCtx = useContext(AuthContext);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!authCtx.isAuthenticated && <Stack.Screen name="(auth)" />}
      {authCtx.isAuthenticated && <Stack.Screen name="(tabs)" />}
    </Stack>
  );
}
