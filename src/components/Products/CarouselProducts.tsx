import { View } from 'react-native';
import { CardsProducts } from './CardsProducts';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'nativewind';
import { PropsAPI } from '@/src/type/typeAPI';
import NotfoundProducts from './NotfoundProducts';

let currentIndex: number = 0;

export function CarouselProducts({ dataProducts }: { dataProducts: PropsAPI[] }) {

  const [cards, setCards] = useState<PropsAPI[]>(dataProducts.filter((_, index) => index < 4));

  useEffect(() => {

    const interval = setInterval(() => {

      const arrayProducts: PropsAPI[] = new Array();

      if (currentIndex < dataProducts.length && currentIndex != 0) {

        for (let index = 0; index < 4; index++) {

          arrayProducts.push(dataProducts[currentIndex]);
          currentIndex++;

        }

        setCards(arrayProducts);

      } else {

        currentIndex = 0;

        for (let index = 0; index < 4; index++) {

          arrayProducts.push(dataProducts[currentIndex]);
          currentIndex++;

        }

        setCards(arrayProducts);
      }

    }, 5000)

    return () => clearInterval(interval);

  })

  return (

    <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>
      {
        dataProducts.length > 1 ?
          cards.map((item) => <CardsProducts key={item.id} product={item} />) :
          <NotfoundProducts />
      }
    </View>

  )
}

const style = StyleSheet.create({
  pagerView: {
    flex: 1,
    height: 540,
    width: '100%',
  },
})