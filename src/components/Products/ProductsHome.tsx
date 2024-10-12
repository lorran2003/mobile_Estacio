import { AntDesign } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { View, Text } from 'react-native'
import { CarouselProducts } from './CarouselProducts'

export function ProductsHome() {
    return (
        <View className='justify-center items-center gap-3 pb-5 w-full h-fit'>

            <Text className='text-[##CA9D37] text-4xl font-bold'>Nossos produtos</Text>

            <View className='flex-row justify-center items-center gap-1'>
                <Link href={"/"}>
                    <Text className='underline'>
                        Ver todos os produtos
                    </Text>
                    <AntDesign name="arrowright" size={20} color="black" />
                </Link>
            </View>

            <CarouselProducts />

        </View>
    )
}