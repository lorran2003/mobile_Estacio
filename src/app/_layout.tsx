import { Stack } from "expo-router";
import Constants from 'expo-constants';
import { View } from "react-native";

import '../style/global.css'

export default function RootLayout() {

  // Configure o contexto de autenticação e renderize nosso layout dentro dele.
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
