import { View, Image } from 'react-native'

export function CarouselCards({ img }: { img: any }) {
    return (
        <View className='w-32 h-40 justify-center items-centerl rounded-md ml-3'>
            <Image
                source={img}
                className='w-full h-full rounded-md'
            />
        </View>
    )
}