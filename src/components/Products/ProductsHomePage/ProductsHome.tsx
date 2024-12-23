import { AntDesign } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { View, Text } from 'react-native'
import { CarouselProducts } from './CarouselProducts'
import { PropsAPI } from '@/src/type/typeAPI'
import NotfoundProducts from '../NotFound/NotfoundProducts'

export function ProductsHome({ dataProducts }: { dataProducts: PropsAPI[] }) {
    return (
        <View className='justify-center items-center gap-3 pb-5 w-full'>

            <Text className='text-[#CA9D37] text-4xl font-bold'>Nossos produtos</Text>

            <Link href={'/products'}>
                <View className='flex-row justify-center items-center gap-1 opacity-70'>
                    <Text className='underline text-lg'>
                        Ver todos os produtos
                    </Text>
                    <AntDesign name="arrowright" size={24} color="black" />
                </View>
            </Link>

            {
                dataProducts.length > 0 ?
                    <CarouselProducts dataProducts={dataProducts} /> :
                    <NotfoundProducts />
            }

        </View>
    )
}