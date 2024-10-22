import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { cardsDetails, CardsType } from '../../Carousel/Carousel'
import { CardsProducts } from '../Cards/CardsProducts'
import { PageNavigation } from '../Navigation/PageNavigation';
import { TitlePages } from '../../TitlePages';
import { PropsAPI } from '@/src/type/typeAPI';
import { getProducts } from '@/src/API/getProducts';
import { ModalBuy } from '../../ModalBuy';

export function AllProducts() {

  const [dataProductsAPI, setDataProductsAPI] = useState<PropsAPI[]>([]);

  const [visible, setVisible] = useState<boolean>(false);

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {

    const fetchProducts = async () => {

      const data = await getProducts();

      data ? setDataProductsAPI(data) : null;

    }

    fetchProducts();

  }, [])


  const openModal = (index: number) => {
    setIndex(index);
    setVisible(true);
  }
  const closeModal = () => {
    setVisible(false);
  }

  if (dataProductsAPI.length > 0) {

    return (
      <View className='gap-5'>

        <TitlePages title='Nossos produtos' numberProducts={cardsDetails.length} />

        <ModalBuy product={dataProductsAPI[index]} visible={visible} closeModal={closeModal} />

        <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>
          {
            dataProductsAPI.map((item, index) => <CardsProducts key={item.id} product={item} index={index} openModal={openModal} />)
          }
        </View>

        <PageNavigation />

      </View>
    )
  }
}