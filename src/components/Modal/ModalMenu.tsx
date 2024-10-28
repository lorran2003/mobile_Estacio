import { Animated, Dimensions, Image, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const imageDefault = require('@/src/assets/images/imageDefaultUser.jpg');


interface PropsModalMenu {
    visible: boolean;
    translateX: Animated.Value;
    closeModal: () => void;
}

export function ModalMenu({ visible, translateX, closeModal }: PropsModalMenu) {

    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
            onRequestClose={() => closeModal()}
        >
            <View className='flex-1 bg-zinc-800/40'>

                <Animated.View style={{ transform: [{ translateX }], width: "auto" }}>

                    <View className='relative bg-zinc-50 w-4/5 px-5 py-10 h-screen'>

                        <Pressable
                            className='absolute left-4 top-4 '
                            onPress={() => closeModal()}
                        >
                            <AntDesign name="close" size={30} color="grey" />
                        </Pressable>

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{gap: 40}}
                        >

                            <View className='w-full justify-center items-center gap-5'>

                                <View className='w-40 h-40 rounded-full border border-[#CA9D37] bg-zinc-50'>
                                    <Image
                                        source={imageDefault}
                                        className='w-full h-full rounded-full'
                                    />
                                </View>

                                <Text className='font-semibold text-xl text-zinc-800'>Name</Text>
                            </View>

                            <View className='justify-center items-start pb-10 border-b-2 border-solid border-neutral-400 w-full gap-5' >


                                <View className='flex-row gap-4 items-center'>
                                    <Ionicons name="home-outline" size={28} color="grey" />
                                    <Text className='text-neutral-500 font-medium text-xl'>
                                        Home
                                    </Text>
                                </View>

                                <View className='flex-row gap-4 items-center'>
                                    <AntDesign name="user" size={28} color="grey" />
                                    <Text className='text-neutral-500 font-medium text-xl'>
                                        Perfil
                                    </Text>
                                </View>

                                <View className='flex-row gap-4 items-center'>
                                    <AntDesign name="shoppingcart" size={28} color="grey" />
                                    <Text className='text-neutral-500 font-medium text-xl'>
                                        Carrinho
                                    </Text>
                                </View>

                                <View className='flex-row gap-4 items-center'>
                                    <AntDesign name="hearto" size={28} color="grey" />
                                    <Text className='text-neutral-500 font-medium text-xl'>
                                        Favoritos
                                    </Text>
                                </View>

                            </View>

                            <Pressable

                                className='flex-row gap-4 items-center'
                            >
                                <Ionicons name="exit-outline" size={28} color="grey" />
                                <Text className='text-neutral-500 font-medium text-xl'>Sair</Text>
                            </Pressable>

                        </ScrollView>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
}
