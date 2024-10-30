import { useState } from 'react'
import { Text, View } from 'react-native'
import { CardsProducts } from '../Cards/CardsProducts'
import { PageNavigation } from '../Navigation/PageNavigation';
import { PropsAPI } from '@/src/type/typeAPI';
import { getProducts } from '@/src/API/getProducts';
import { ModalInfoProduct } from '../../Modal/ModalInfoProduct';

export function AllProducts({ products }: { products: PropsAPI[] }) {

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

  const lastPage = (totalQuantityOfProducts: number) => {

    const newProductsRender: PropsAPI[] = new Array();

    for (let index = totalQuantityOfProducts - 4 ; index < products.length; index++) {

      newProductsRender.push(products[index]);
    };

    setRenderProducts(newProductsRender);
  }

  const nextPage = (quantityOfProductsRender: number) => {

    const newProductsRender: PropsAPI[] = new Array(4);

    for (let index = quantityOfProductsRender; index < quantityOfProductsRender + 4; index++) {

      if (index > products.length) {
        break;
      };

      newProductsRender.push(products[index]);

    };
    setRenderProducts(newProductsRender);
  };

  const previousPage = (quantityOfProductsRender: number) => {

    const newProductsRender: PropsAPI[] = new Array(4);

    for (let index = quantityOfProductsRender - 8; index < quantityOfProductsRender - 4; index++) {

      if (index < 0) {
        break;
      };
      newProductsRender.push(products[index]);
    };

    setRenderProducts(newProductsRender);
  };

  const startPage = () => {

    const newProductsRender: PropsAPI[] = new Array();

    for (let index = 0; index < 4; index++) {

      if (index > products.length) {
        break;
      };

      newProductsRender.push(products[index]);
    };

    setRenderProducts(newProductsRender);
  };

  if (products.length > 0) {

    return (
      <View className='gap-5 pt-5'>

        <ModalInfoProduct product={products[index]} visible={visible} closeModal={closeModal} />

        <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>
          {
            renderProducts.map((item, index) => <CardsProducts key={item.id} product={item} index={index} openModal={openModal} />)
          }
        </View>

        <PageNavigation lastPage={lastPage} nextPage={nextPage} previousPage={previousPage} startPage={startPage} totalProducts={products.length} />

      </View>
    )
  }

  return (
    <View className='w-full justify-center items-center py-10'>
      <Text>Carrinho vaio</Text>
    </View>
  )
}