import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { PageNavigation } from '../Navigation/PageNavigation';
import { CardsProducts } from '../Products/Cards/CardsProducts';
import { PropsAPI } from '@/src/type/typeAPI';
import { ModalInfoProduct } from '../Modal/ModalInfoProduct';
import { addToCart } from '@/src/API/Cart/addToCart';
import { removeAllToCart } from '@/src/API/Cart/removeAllToCart';
import { router } from 'expo-router';

export function Index({ products }: { products: PropsAPI[] }) {

    const [renderProducts, setRenderProducts] = useState<PropsAPI[]>(products.filter((_, index) => index < 4));

    const [visible, setVisible] = useState<boolean>(false);

    const [index, setIndex] = useState<number>(0);

    const handleButton = (action: string) => {

        if (action === 'buy') {
            console.log('comprar');
        }
        else if (action === 'deleteAllToCart') {
            console.log(products);
            removeAllToCart(products);
            alert("Todos os itens foram excluidos do carrinho");
            router.replace("/(tabs)/");
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

                    <TouchableOpacity className='bg-[#CA9D37] rounded-lg p-2 w-40 h-14 justify-center items-center '>
                        <Text className='text-zinc-50 text-center'>Checkout</Text>
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