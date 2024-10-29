import { Slot } from "expo-router";
import { ScrollView } from "react-native";


export default function UserLayout() {
    return (
        <ScrollView
            className="bg-neutral-200 flex-1"
            showsVerticalScrollIndicator={false}
        >
            <Slot />
        </ScrollView>
    )


}