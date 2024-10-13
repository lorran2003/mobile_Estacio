import { Slot } from "expo-router";
import Constants from 'expo-constants'
import { ScrollView, View } from "react-native";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

import '../style/global.css'


const statusBarHeigth = Constants.statusBarHeight;

export default function RootLayout() {

  return (
    <ScrollView className="bg-neutral-200 flex-1">
      <View style={{ marginTop: statusBarHeigth }}>
        <Slot />
      </View>
    </ScrollView>
  );
}
