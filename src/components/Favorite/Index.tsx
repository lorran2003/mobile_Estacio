import { View, Text, Pressable } from 'react-native'
import { useEffect, useState } from 'react';
import { TitlePages } from '../TitlePages';
import { CardsProducts } from '../Products/Cards/CardsProducts';
import { PageNavigation } from '../Products/Navigation/PageNavigation';
import { PropsAPI } from '@/src/type/typeAPI';
import { ModalInfoProduct } from '../Modal/ModalInfoProduct';

export function Index({ products }: { products: PropsAPI[] }) {

  const [renderProducts, setRenderProducts] = useState<PropsAPI[]>(products.filter((_, index) => index < 4));

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
      <View className='gap-5'>

        <ModalInfoProduct visible={visible} closeModal={closeModal} product={renderProducts[index]} />

        <View className='w-full justify-center items-center gap-5 flex-row flex-wrap pt-5'>
          {
            products.map((item, index) => <CardsProducts key={item.id} product={item} index={index} openModal={openModal} />)
          }
        </View>


        <PageNavigation products={products} setRenderProducts={setRenderProducts} />
      
        <View className='flex-row gap-5 justify-center items-center'>

          <Pressable className='bg-[#CA9D37] rounded-lg p-2 w-40 h-14 justify-center items-center '>
            <Text className='text-zinc-50 text-center'>Adicionar ao carrinho</Text>
          </Pressable>

          <Pressable className='bg-zinc-50 rounded-lg p-2 w-40 h-14 justify-center items-center '>
            <Text className='text-zinc-800 text-center'>Apagar favoritos</Text>
          </Pressable>

        </View>
      </View>
    )
  }

  return (
    <View className=' py-10 w-full justify-center items-center'>
      <Text>Carrinho vaio</Text>
    </View>
  )
}