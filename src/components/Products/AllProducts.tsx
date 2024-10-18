import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { cardsDetails, CardsType } from '../Carousel/Carousel'
import { CardsProducts } from './CardsProducts'
import { PageNavigation } from './PageNavigation';
import { TitlePages } from '../TitlePages';
import { PropsAPI } from '@/src/type/typeAPI';
import { getProducts } from '@/src/API/getProducts';

export default function AllProducts() {

    const [dataProductsAPI, setDataProductsAPI] = useState<PropsAPI[]>([]);

    useEffect(() => {
    
      const fetchProducts = async () => {
  
        const data = await getProducts();
        
        data ? setDataProductsAPI(data) : null;
  
      }
  
      fetchProducts();
  
    }, [])


    return (
        <View className='gap-5'>
            
          <TitlePages title='Nossos produtos' numberProducts={cardsDetails.length}/>

            <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>
                {
                    dataProductsAPI.map((item) => <CardsProducts key={item.id} product={item} />)
                }
            </View>

            <PageNavigation />
            
        </View>
    )
}