import { View, Image } from 'react-native'



export function Banner({ image }: any) {
    return (
        <View className='w-full h-56'>
            <Image
                source={image}
                className='w-full h-full'
            />
        </View>
    )
}