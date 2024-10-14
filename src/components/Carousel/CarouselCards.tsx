import { PropsAPI } from '@/src/type/typeAPI'
import { View, Image } from 'react-native'

export function CarouselCards({ image }: { image: string }) {
    return (
        <View className='w-32 h-40 justify-center items-centerl rounded-md'>
            <Image
                source={{ uri: image }}
                className='w-full h-full rounded-md'
                style={{ objectFit: 'cover' }}
            />
        </View>
    )
}