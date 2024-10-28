import { Slot } from "expo-router";
import { ScrollView } from "react-native";


export default function UserLayout() {
    return (
        <ScrollView>
            <Slot />
        </ScrollView>
    )


}