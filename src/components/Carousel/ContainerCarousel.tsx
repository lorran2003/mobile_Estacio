import { View, Image } from 'react-native'

export function ConatinerCarousel({ image }: { image: string }) {
    return (
        <View className='w-36 h-44 sm:w-44 sm:h-52 justify-center items-centerl rounded-md'>
            <Image
                source={{ uri: image }}
                className='w-full h-full rounded-md'
                style={{ objectFit: 'cover' }}
            />
        </View>
    )
}