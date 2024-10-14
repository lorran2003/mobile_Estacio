import { CarouselCards } from './CarouselCards'
import { FlatList, View } from 'react-native';
import { useEffect, useRef } from 'react';
import { PropsAPI } from '@/src/type/typeAPI';
import { StyleSheet } from 'nativewind';

export interface CardsType {
  id: number;
  img: any;
}

export const cardsDetails: CardsType[] = [
  {
    id: 1,
    img: require('../../assets/images/imgCarousel.png')
  },
  {
    id: 2,
    img: require('../../assets/images/imgCarousel.png')
  },
  {
    id: 3,
    img: require('../../assets/images/imgCarousel.png')
  },
  {
    id: 4,
    img: require('../../assets/images/imgCarousel.png')
  },
  {
    id: 5,
    img: require('../../assets/images/imgCarousel.png')
  },
  {
    id: 6,
    img: require('../../assets/images/imgCarousel.png')
  },
  {
    id: 7,
    img: require('../../assets/images/imgCarousel.png')
  },
]

export function Carousel({ dataProducts }: { dataProducts: PropsAPI[] }) {
  
  const products = dataProducts.length > 15 ? dataProducts.filter((_,index) =>  index < 15) : dataProducts ;
  const flatListRef = useRef<FlatList>(null);

  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      flatListRef.current?.scrollToIndex({ index: currentIndex, animated: true })
      currentIndex = (currentIndex + 1) % products.length;
    }, 2500)

    return () => clearInterval(interval);
  })

  return (
    <View className='py-5'>
      <FlatList
        ref={flatListRef}
        data={products}
        renderItem={({ item }) => <CarouselCards key={item.id} image={item.image} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={'fast'}
        contentContainerStyle={style.flatList}
      />
    </View>
  )
}

const style= StyleSheet.create({
  flatList:{
    gap:8,
    marginLeft:10,
    paddingRight:20,
  }
})