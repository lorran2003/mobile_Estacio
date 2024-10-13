import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { cardsDetails, CardsType } from '../Carousel/Carousel'
import { CardsProducts } from './CardsProducts'
import { PageNavigation } from './PageNavigation';
import { TitlePages } from '../TitlePages';

export default function AllProducts() {
    const [products, setProducts] = useState<CardsType[]>([]);

    useEffect(() => {
        setProducts(cardsDetails)
    });

    return (
        <View className='gap-5'>
            
          <TitlePages title='Nossos produtos' numberProducts={cardsDetails.length}/>

            <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>
                {
                    products.map((item) => <CardsProducts key={item.id} cardsDetails={item} />)
                }
            </View>

            <PageNavigation />
            
        </View>
    )
}