import { ConatinerCarousel } from './ContainerCarousel'
import { FlatList, StyleSheet, View } from 'react-native';
import { useEffect, useRef } from 'react';
import { PropsAPI } from '@/src/type/typeAPI';

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
      {
        dataProducts.length > 0 ?
        <FlatList
        ref={flatListRef}
        data={products}
        renderItem={({ item }) => <ConatinerCarousel key={item.id} image={item.image} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={'fast'}
        contentContainerStyle={style.flatList}
        /> :
        null
      }
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