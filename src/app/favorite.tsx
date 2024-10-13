import { View, Text, Pressable } from 'react-native'
import { TitlePages } from '../components/TitlePages'
import { PageNavigation } from '../components/Products/PageNavigation'
import { useEffect, useState } from 'react';
import { cardsDetails, CardsType } from '../components/Carousel/Carousel';
import { CardsProducts } from '../components/Products/CardsProducts';

export default function favorite() {
    const [products, setProducts] = useState<CardsType[]>([]);

    useEffect(() => {
        setProducts(cardsDetails)
    });

    return (
        <View className='gap-5'>
            <TitlePages title='Favoritos' numberProducts={cardsDetails.length} />

            <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>
                {
                    products.map((item) => <CardsProducts key={item.id} cardsDetails={item} />)
                }
            </View>

            <View className='flex-row gap-5 justify-center items-center'>

                <Pressable className='bg-[#CA9D37] rounded-lg p-2 w-40 h-14 justify-center items-center '>
                    <Text className='text-zinc-50 text-center'>Adicionar ao carrinho</Text>
                </Pressable>

                <Pressable className='bg-zinc-50 rounded-lg p-2 w-40 h-14 justify-center items-center '>
                    <Text className='text-zinc-800 text-center'>Apagar favoritos</Text>
                </Pressable>

            </View>

            <PageNavigation />
        </View>
    )
}