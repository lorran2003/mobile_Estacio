import { ConatinerCarousel } from './ContainerCarousel'
import { FlatList, StyleSheet, View } from 'react-native';
import { useCallback, useRef } from 'react';
import { PropsAPI } from '@/src/type/typeAPI';
import { useFocusEffect } from 'expo-router';

export function Carousel({ dataProducts }: { dataProducts: PropsAPI[] }) {

  const products = dataProducts.length > 15 ? dataProducts.filter((_, index) => index < 15) : dataProducts;

  const flatListRef = useRef<FlatList>(null);

  const currentIndexRef = useRef<number>(0);

    useFocusEffect(

      useCallback(() => {

        const interval = setInterval(() => {
         
          if (products.length > 0 && currentIndexRef.current >= 0){ 
            
            flatListRef.current?.scrollToIndex({ index: currentIndexRef.current, animated: true });
  
            currentIndexRef.current = (currentIndexRef.current + 1) % products.length;
          }
        }, 2500);
  
        return () => clearInterval(interval);
      }, [products.length]) 
    );

  return (
    <View className='py-5'>
      {
        dataProducts.length > 0 ?
          <FlatList
            ref={flatListRef}
            data={products}
            renderItem={({ item }) => <ConatinerCarousel key={item.id} image={item.images[0].imagePath} />}
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

const style = StyleSheet.create({
  flatList: {
    gap: 8,
    marginLeft: 10,
    paddingRight: 20,
  }
})