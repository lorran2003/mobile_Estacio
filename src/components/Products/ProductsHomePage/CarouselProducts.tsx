import { View } from 'react-native';
import { CardsProducts } from '../Cards/CardsProducts';
import { useEffect, useRef, useState } from 'react';
import { PropsAPI } from '@/src/type/typeAPI';
import { ModalInfoProduct } from '../../Modal/ModalInfoProduct';

export function CarouselProducts({ dataProducts }: { dataProducts: PropsAPI[] }) {

  const [cards, setCards] = useState<PropsAPI[]>(dataProducts.filter((_, index) => index < 4));

  const [visible, setVisible] = useState<boolean>(false);

  const indexNewProducts = useRef<number>(0)

  const [indexProductHandle, setIndexProductHandle] = useState<number>(0);

  useEffect(() => {

    const interval = setInterval(() => {

      if (!visible) {

        const arrayProducts: PropsAPI[] = new Array();

        if (indexNewProducts.current < dataProducts.length && indexNewProducts.current != 0) {

          for (let index = 0; index < 4; index++) {

            arrayProducts.push(dataProducts[indexNewProducts.current]);
            indexNewProducts.current = indexNewProducts.current + 1;

          }

          setCards(arrayProducts);

        } else {

          indexNewProducts.current = 0;

          for (let index = 0; index < 4; index++) {

            arrayProducts.push(dataProducts[indexNewProducts.current]);

            indexNewProducts.current = indexNewProducts.current + 1;

          }

          setCards(arrayProducts);
        }
      }

    }, 5000);

    return () => clearInterval(interval);
  });

  const openModal = (index: number) => {
    setIndexProductHandle(index);
    setVisible(true);
  }
  const closeModal = () => {
    setVisible(false);
  }

  return (

    <View className={'w-full ' + (visible ? ' blur-sm ' : null)}>

      <ModalInfoProduct product={cards[indexProductHandle]} visible={visible} closeModal={closeModal} />

      <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>
        {

          cards.map((item, index) => <CardsProducts key={item.id} product={item} openModal={openModal} index={index} />)

        }
      </View>
    </View>
  )
}