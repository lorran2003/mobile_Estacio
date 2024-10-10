import { View, Text, Image } from 'react-native'

export function Banner() {
    return (
        <View className='w-full h-56'>
            <Image
                source={require('../assets/images/banner.png')}
                className='w-full h-full'
            />
        </View>
    )
}