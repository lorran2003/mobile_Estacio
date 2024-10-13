import { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native'
import { cardsDetails, CardsType } from '../Carousel/Carousel';
import { TitlePages } from '../TitlePages';
import { PageNavigation } from '../Products/PageNavigation';
import { CardsProducts } from '../Products/CardsProducts';

export function Index() {

    const [products, setProducts] = useState<CardsType[]>([]);

    useEffect(() => {
        setProducts(cardsDetails)
    });

    return (
        <View className='gap-5 justify-center items-center'>
            
            <TitlePages title='Carrinho' numberProducts={cardsDetails.length} />

            <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>
                {
                    products.map((item) => <CardsProducts key={item.id} cardsDetails={item} />)
                }
            </View>


            <Pressable className='bg-[#CA9D37] rounded-lg p-2 w-40 h-14 justify-center items-center '>
                <Text className='text-zinc-50 text-center'>Checkout</Text>
            </Pressable>


            <PageNavigation />
        </View>
    )

}