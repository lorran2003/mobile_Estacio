import { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native'
import { cardsDetails, CardsType } from '../Carousel/Carousel';
import { TitlePages } from '../TitlePages';
import { PageNavigation } from '../Products/PageNavigation';
import { CardsProducts } from '../Products/CardsProducts';
import { PropsAPI } from '@/src/type/typeAPI';
import { getProducts } from '@/src/API/getProducts';
import { arrayCart } from '@/src/API/cart/addCart';
import { ModalBuy } from '../ModalBuy';

export function Index() {

    const [dataProductsAPI, setDataProductsAPI] = useState<PropsAPI[]>([]);

    useEffect(() => {

        const fetchProducts = async () => {

            const data = arrayCart;

            data ? setDataProductsAPI(data) : null;

        }

        fetchProducts();

    }, [])


    const [visible, setVisible] = useState<boolean>(false);

    const [index, setIndex] = useState<number>(0);

    const openModal = (index: number) => {
        setIndex(index);
        setVisible(true);
    }
    const closeModal = () => {
        setVisible(false);
    }

    if (dataProductsAPI.length > 0) {
        return (
            <View className='gap-5 justify-center items-center'>

                <ModalBuy product={dataProductsAPI[index]} closeModal={closeModal} visible={visible} />

                <TitlePages title='Carrinho' numberProducts={cardsDetails.length} />

                <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>
                    {
                        dataProductsAPI.map((item, index) => <CardsProducts key={index} product={item} index={index} openModal={openModal} />)
                    }
                </View>


                <Pressable className='bg-[#CA9D37] rounded-lg p-2 w-40 h-14 justify-center items-center '>
                    <Text className='text-zinc-50 text-center'>Checkout</Text>
                </Pressable>


                <PageNavigation />
            </View>
        )
    }
}