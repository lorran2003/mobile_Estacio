import { Stack } from "expo-router";
import Constants from 'expo-constants';
import { View } from "react-native";

import '../style/global.css'

const statusBarHeigth = Constants.statusBarHeight;

export default function RootLayout() {

  return (

    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
