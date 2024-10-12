import { AntDesign } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { View, Text } from 'react-native'
import { cardsDetails } from '../Carousel/Carousel'
import { CardsProducts } from './CardsProducts'
import PagerView from 'react-native-pager-view'
import { CarouselProducts } from './CarouselProducts'

export function ProductsHome() {
    return (
        <View className='justify-center items-center gap-3'>

            <Text className='text-[##CA9D37] text-4xl font-bold'>Nossos produtos</Text>

            <Link href={"/"}>
                <View className='flex-row justify-center items-center gap-1'>
                    <Text className='underline'>
                        Ver todos os produtos
                    </Text>
                    <AntDesign name="arrowright" size={20} color="black" />
                </View>
            </Link>

            <CarouselProducts />
            
        </View>
    )
}