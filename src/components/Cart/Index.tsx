import { useState } from 'react';
import { View, Text, Pressable } from 'react-native'
import { PageNavigation } from '../Products/Navigation/PageNavigation';
import { CardsProducts } from '../Products/Cards/CardsProducts';
import { PropsAPI } from '@/src/type/typeAPI';
import { ModalBuy } from '../ModalBuy';

export function Index({ products }: { products: PropsAPI[] }) {

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

                <ModalBuy visible={visible} closeModal={closeModal} product={products[index]} />

                <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>
                    {
                        products.map((item, index) => <CardsProducts key={item.id} product={item} index={index} openModal={openModal} />)
                    }
                </View>

                <View className='flex-row gap-5 justify-center items-center'>

                    <Pressable className='bg-[#CA9D37] rounded-lg p-2 w-40 h-14 justify-center items-center '>
                        <Text className='text-zinc-50 text-center'>Checkout</Text>
                    </Pressable>

                    <Pressable className='bg-zinc-50 rounded-lg p-2 w-40 h-14 justify-center items-center '>
                        <Text className='text-zinc-800 text-center'>Apagar carinho</Text>
                    </Pressable>

                </View>

                <PageNavigation />
            </View>
        )
    }

    return (
        <View className='w-full justify-center items-center py-5'>
            <Text>Carrinho vaio</Text>
        </View>
    )
}