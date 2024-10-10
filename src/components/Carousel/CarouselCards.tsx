import { View, Text, Image } from 'react-native'

export function CarouselCards({ img }: { img: any }) {
    return (
        <View className='w-28 h-28 justify-center items-centerl p-1 rounded-md bg-zinc-50 shadow shadow-zinc-800 mx-3'>
            <Image
            source={img}
            className='w-full h-full rounded-md'
            />
        </View>
    )
}