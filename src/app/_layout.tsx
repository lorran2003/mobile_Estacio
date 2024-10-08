import { Slot } from "expo-router";
import { setStatusBarBackgroundColor, setStatusBarStyle } from "expo-status-bar";
import Constants from 'expo-constants'
import { ScrollView, View } from "react-native";
import { NavBar } from "../components/NavBar";

import '../style/global.css'


const statusBarHeigth = Constants.statusBarHeight;

export default function RootLayout() {

  setStatusBarBackgroundColor('rgb(63 63 70)', true);
  
  return (
    <ScrollView className="bg-neutral-200 flex-1">
      <View style={{ marginTop: statusBarHeigth }}>
        <NavBar />
        <Slot />
      </View>
    </ScrollView>
  );
}
