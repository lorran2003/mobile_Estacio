import { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native'
import { cardsDetails, CardsType } from '../Carousel/Carousel';
import { TitlePages } from '../TitlePages';
import { PageNavigation } from '../Products/PageNavigation';
import { CardsProducts } from '../Products/CardsProducts';
import { PropsAPI } from '@/src/type/typeAPI';
import { getProducts } from '@/src/API/getProducts';

export function Index() {

    const [dataProductsAPI, setDataProductsAPI] = useState<PropsAPI[]>([]);

    useEffect(() => {
  
      const fetchProducts = async () => {
  
        const data = await getProducts();
        
        data ? setDataProductsAPI(data) : null;
  
      }
  
      fetchProducts();
  
    }, [])

    return (
        <View className='gap-5 justify-center items-center'>
            
            <TitlePages title='Carrinho' numberProducts={cardsDetails.length} />

            <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>
                {
                    dataProductsAPI.map((item) => <CardsProducts key={item.id} product={item} />)
                }
            </View>


            <Pressable className='bg-[#CA9D37] rounded-lg p-2 w-40 h-14 justify-center items-center '>
                <Text className='text-zinc-50 text-center'>Checkout</Text>
            </Pressable>


            <PageNavigation />
        </View>
    )

}