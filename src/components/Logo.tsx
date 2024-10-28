import { View, Image, StyleSheet } from 'react-native'

export function Logo() {
    return (
        <View className='size-24 items-center justify-center rounded-full border-solid border-[#CA9D37] border'>
            <Image
                source={require('../assets/images/logo.jpg')}
                style={style.container}
            />
        </View>
    )
}

const style =  StyleSheet.create({
    container: {
        width:"100%",
        height:"100%",
        objectFit:"cover",
        borderRadius:9999
    }
})