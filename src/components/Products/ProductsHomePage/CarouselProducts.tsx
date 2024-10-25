import { View } from 'react-native';
import { CardsProducts } from '../Cards/CardsProducts';
import { useEffect, useState } from 'react';
import { PropsAPI } from '@/src/type/typeAPI';
import NotfoundProducts from '../NotFound/NotfoundProducts';
import { ModalBuy } from '../../ModalBuy';

let currentIndex: number = 0;

export function CarouselProducts({ dataProducts }: { dataProducts: PropsAPI[] }) {

  const [cards, setCards] = useState<PropsAPI[]>(dataProducts.filter((_, index) => index < 4));

  const [visible, setVisible] = useState<boolean>(false);

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {

    const interval = setInterval(() => {

      if (!visible) {

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
      }

    }, 5000);

    return () => clearInterval(interval);
  });

  const openModal = (index: number) => {
    setIndex(index);
    setVisible(true);
  }
  const closeModal = () => {
    setVisible(false);
  }

  return (

    <View className={'w-full ' + (visible ? ' blur-sm ' : null)}>

      <ModalBuy product={cards[index]} visible={visible} closeModal={closeModal} />

      <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>
        {
          cards.map((item, index) => <CardsProducts key={item.id} product={item} openModal={openModal} index={index} />)
        }
      </View>
    </View>
  )
}