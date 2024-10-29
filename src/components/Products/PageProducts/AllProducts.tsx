import { useState } from 'react'
import { Text, View } from 'react-native'
import { CardsProducts } from '../Cards/CardsProducts'
import { PageNavigation } from '../Navigation/PageNavigation';
import { PropsAPI } from '@/src/type/typeAPI';
import { getProducts } from '@/src/API/getProducts';
import { ModalInfoProduct } from '../../Modal/ModalInfoProduct';

export function AllProducts({ products }: { products: PropsAPI[] }) {

  const [visible, setVisible] = useState<boolean>(false);

  const [index, setIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setIndex(index);
    setVisible(true);
  }
  const closeModal = () => {
    setVisible(false);
  }

  if (products.length > 0) {

    return (
      <View className='gap-5 pt-5'>

        <ModalInfoProduct product={products[index]} visible={visible} closeModal={closeModal} />

        <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>
          {
            products.map((item, index) => <CardsProducts key={item.id} product={item} index={index} openModal={openModal} />)
          }
        </View>

        <PageNavigation />

      </View>
    )
  }

  return (
    <View className='h-screen w-full justify-center items-center'>
      <Text>Carrinho vaio</Text>
    </View>
  )
}