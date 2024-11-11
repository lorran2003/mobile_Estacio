import { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { PageNavigation } from '../Navigation/PageNavigation';
import { CardsProducts } from '../Products/Cards/CardsProducts';
import { PropsAPI } from '@/src/type/typeAPI';
import { ModalInfoProduct } from '../Modal/ModalInfoProduct';
import { removeAllToCart } from '@/src/API/cart/removeAllToCart';
import { router } from 'expo-router';
import { pushNotification } from '@/src/func/pushNotification';

export function Index({ products }: { products: PropsAPI[] }) {

    const [renderProducts, setRenderProducts] = useState<PropsAPI[]>(products.filter((_, index) => index < 4));

    const [visible, setVisible] = useState<boolean>(false);

    const [index, setIndex] = useState<number>(0);

    const handleButton = async (action: string) => {

        if (action === 'buy') {
            await pushNotification();
            removeAllToCart(products);
            router.push('/(tabs)/');
        }
        else if (action === 'deleteAllToCart') {
            removeAllToCart(products);
            Alert.alert("Todos os itens foram excluidos do carrinho");
            router.push("/(tabs)/");
        }
    }

    const openModal = (index: number) => {
        setIndex(index);
        setVisible(true);
    }

    const closeModal = () => {
        setVisible(false);
    }

    if (renderProducts.length > 0) {

        return (
            <View className='gap-5 pt-5'>

                <ModalInfoProduct visible={visible} closeModal={closeModal} product={renderProducts[index]} />

                <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>
                    {
                        renderProducts.map((item, index) => <CardsProducts key={item.id} product={item} index={index} openModal={openModal} />)
                    }
                </View>

                <PageNavigation products={products} setRenderProducts={setRenderProducts} />

                <View className='flex-row gap-5 justify-center items-center'>

                    <TouchableOpacity
                        className='bg-[#CA9D37] rounded-lg p-2 w-40 h-14 justify-center items-center '
                        onPress={() => handleButton('buy')}
                    >
                        <Text className='text-zinc-50 text-center'>
                            Checkout
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className='bg-zinc-50 rounded-lg p-2 w-40 h-14 justify-center items-center '
                        onPress={() => handleButton('deleteAllToCart')}
                    >
                        <Text className='text-zinc-800 text-center'>Apagar carrinho</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

    return (
        <View className='w-full justify-center items-center py-10'>
            <Text>Carrinho vaio</Text>
        </View>
    )
}