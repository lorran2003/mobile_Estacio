import { View, Text, Modal, Image, Pressable, ScrollView, Alert, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { PropsAPI } from '@/src/type/typeAPI';
import { TitlePages } from '../TitlePages';
import { addToCart } from '@/src/API/cart/addToCart';
import { pushNotification } from '@/src/func/pushNotification';

interface PropsModal {
  product: PropsAPI;
  visible: boolean;
  closeModal: () => void;
}

export function ModalInfoProduct({ product, visible, closeModal }: PropsModal) {

  const addProductToCart = async ({ product }: { product: PropsAPI }) => {
    try {

      await addToCart(product);
      Alert.alert("Produto adicionado ao carrinho!");
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

      <ScrollView className='h-full bg-zinc-800/70'>

        <View className='items-center justify-start h-full gap-5 pb-5'>

          <TitlePages title={product.name} />

          <View className='w-11/12 justify-center items-end'>

            <Pressable
              className='rounded-full bg-zinc-50'
              onPress={() => closeModal()}
            >
              <AntDesign name="close" size={30} color="black" />
            </Pressable>

          </View>

          <View className='w-11/12 bg-zinc-50 rounded-md gap-5 p-3 sm:h-screen'>


            <Image
              source={{ uri: product.images[0].imagePath }}
              className='h-[28rem] sm:h-3/4 rounded-md'
            />


            <View className='gap-3'>

              <Text className='font-semibold text-2xl'>R$ {product.price}</Text>

              <View className='w-full flex-row flex-wrap items-start justify-between gap-2'>

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

                  <TouchableOpacity
                    className='bg-zinc-800 rounded-md p-3 flex-row gap-2 justify-center items-center'
                    onPress={() => addProductToCart({ product })}
                  >
                    <Text className='text-zinc-50'>Adicionar</Text>
                    <AntDesign name="shoppingcart" size={24} color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    className='bg-[#CA9D37] rounded-md p-3 justify-center items-center'
                    onPress={async () => {
                      await pushNotification();
                      closeModal();
                    }}
                  >
                    <Text className='text-zinc-50'>Comprar</Text>
                  </TouchableOpacity>

                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  )
};