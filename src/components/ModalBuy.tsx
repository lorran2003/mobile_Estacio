import { View, Text, Modal, Image, Pressable } from 'react-native'
import { PropsAPI } from '../type/typeAPI';
import { TitlePages } from './TitlePages';
import { AntDesign } from '@expo/vector-icons';
import { addCart } from '../API/cart/addCart';

interface PropsModalBuy {
  product: PropsAPI;
  visible: boolean;
  closeModal: () => void;
}

export function ModalBuy({ product, visible, closeModal }: PropsModalBuy) {

  const addProductToCart = async ({ product }: { product: PropsAPI }) => {
    try {

      await addCart({ product });
      closeModal();
    
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho : " + error);
    }
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
      onRequestClose={() => closeModal()}
      transparent={true}
    >

      <View className='justify-start items-center bg-zinc-800/70 h-screen gap-5'>

        <TitlePages title={product.name} />

        <View className='w-11/12 justify-center items-end'>

          <Pressable
            className='rounded-full bg-zinc-50'
            onPress={() => closeModal()}
          >
            <AntDesign name="close" size={30} color="black" />
          </Pressable>

        </View>

        <View className='w-11/12 bg-zinc-50 justify-center items-center rounded-md gap-5 p-3'>

          <Image
            source={{ uri: product.image }}
            className='w-full h-96 rounded-md'
          />

          <View className='gap-3'>
            <Text className='font-semibold text-2xl'>R$ {product.price}</Text>

            <View className='flex-row justify-between items-start w-11/12'>

              <View className='gap-2 justify-center items-start'>

                <Text className='text-zinc-800/70'>Selecione o tamanho</Text>

                <View className='flex-row gap-2'>

                  <Pressable className='size-10 justify-center items-center bg-neutral-200 rounded-md'>
                    <Text>PP</Text>
                  </Pressable>

                  <Pressable className='size-10 justify-center items-center bg-neutral-200 rounded-md'>
                    <Text>P</Text>
                  </Pressable>

                  <Pressable className='size-10 justify-center items-center bg-neutral-200 rounded-md'>
                    <Text>M</Text>
                  </Pressable>

                  <Pressable className='size-10 justify-center items-center bg-neutral-200 rounded-md'>
                    <Text>G</Text>
                  </Pressable>

                </View>

              </View>

              <View className='gap-2' >

                <Pressable
                  className='bg-zinc-800 rounded-md p-3 flex-row gap-2 justify-center items-center'
                  onPress={() => addProductToCart({ product })}
                >
                  <Text className='text-zinc-50'>Adicionar</Text>
                  <AntDesign name="shoppingcart" size={24} color="white" />
                </Pressable>

                <Pressable className='bg-[#CA9D37] rounded-md p-3 justify-center items-center'>
                  <Text className='text-zinc-50'>Comprar</Text>
                </Pressable>

              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}