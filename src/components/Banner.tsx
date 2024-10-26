import { View, Image, StyleSheet } from 'react-native'

export function Banner({ image }: any) {

    return (
        <View className="w-full h-56 sm:h-[25rem] px-1">
            <Image
                source={image}
                style={style.image}
            />
        </View>
    )
}
const style = StyleSheet.create({
    image: {
        width:"100%",
        height:"100%",
        objectFit:"cover",
        borderRadius:10
    }
})