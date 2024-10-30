import { useState } from 'react'
import { Text, View } from 'react-native'
import { CardsProducts } from '../Cards/CardsProducts'
import { PageNavigation } from '../Navigation/PageNavigation';
import { PropsAPI } from '@/src/type/typeAPI';
import { getProducts } from '@/src/API/getProducts';
import { ModalInfoProduct } from '../../Modal/ModalInfoProduct';
import { lastPage, nextPage, previousPage, startPage } from '@/src/func/pagination';

export function AllProducts({ products }: { products: PropsAPI[] }) {

  const firstCards : PropsAPI[] = products.filter((_, index) => index < 4);

  const [renderProducts, setRenderProducts] = useState<PropsAPI[]>(firstCards);

  const [visible, setVisible] = useState<boolean>(false);

  const [index, setIndex] = useState<number>(0);

  const openModal = (index: number) => {
    console.log(renderProducts)
    setIndex(index);
    setVisible(true);
  }
  const closeModal = () => {
    setVisible(false);
  }

  if (products.length > 0) {

    return (
      <View className='gap-5 pt-5'>

        <ModalInfoProduct product={renderProducts[index]} visible={visible} closeModal={closeModal} />

        <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>
          {
            
            renderProducts.map((item, index) => <CardsProducts key={item.id} product={item} index={index} openModal={openModal} />)
          }
        </View>

        <PageNavigation products={products} setRenderProducts={setRenderProducts} />

      </View>
    )
  }

  return (
    <View className='w-full justify-center items-center py-10'>
      <Text>Carrinho vaio</Text>
    </View>
  )
}