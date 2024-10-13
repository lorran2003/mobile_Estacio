import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { cardsDetails, CardsType } from '../Carousel/Carousel'
import { CardsProducts } from './CardsProducts'
import { PageNavigation } from './PageNavigation';

export default function AllProducts() {
    const [products, setProducts] = useState<CardsType[]>([]);

    useEffect(() => {
        setProducts(cardsDetails)
    });

    return (
        <View className='gap-5'>
            <View className='bg-zinc-50 p-5'>

                <Text className='text-[##CA9D37] text-4xl font-bold'>
                    Nossos produtos
                </Text>
                
                <Text className='text-zinc-800/80'>total de ({products.length})</Text>
            
            </View>

            <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>
                {
                    products.map((item) => <CardsProducts key={item.id} cardsDetails={item} />)
                }
            </View>

            <PageNavigation />
            
        </View>
    )
}