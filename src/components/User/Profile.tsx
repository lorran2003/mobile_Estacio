import { View, Text, Pressable, Image, TouchableOpacity, Modal } from 'react-native';
import { TitlePages } from '../TitlePages';
import { Entypo, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { Redirect } from 'expo-router';
import { useSession } from '../AuthContext';
import { useState } from 'react';

export function ProfileUser() {

    const [visible, setVisible] = useState<boolean>(false);

    const { user, signOut, session, image, pickImage, takePicture } = useSession();

    if (!session) {
        return <Redirect href={'/(tabs)/user/login'} />
    }

    return (
        <View className='w-full items-center gap-10'>

            <TitlePages title='Meu perfil' />

            <View className='w-full bg-zinc-50 mx-5 py-5 justify-center items-center gap-5'>


                <View className='relative'>
                    <View className='w-40 h-40 rounded-full border border-[#CA9D37] bg-zinc-50'>
                        <Image
                            source={image ? { uri: image } : require('@/src/assets/images/imageDefaultUser.jpg')}
                            className='w-full h-full rounded-full'
                        />
                    </View>

                    <Pressable
                        className='z-10 absolute rounded-full bg-neutral-200 p-2 bottom-0 right-0'
                        onPress={() => setVisible(true)}
                    >
                        <Entypo name="edit" size={24} color="black" />
                    </Pressable>
                </View>

                <Text className='text-zinc-800'>{user?.name}</Text>

                <Text className='text-zinc-800'>{user?.email}</Text>

                <View className='gap-5'>

                    <TouchableOpacity className='bg-[#CA9D37] rounded-md p-2 w-fit' >
                        <Text className='text-zinc-50 text-lg'>Editar Perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className='bg-neutral-200 rounded-md p-2 items-center justify-center'
                        onPress={() => signOut()}
                    >
                        <Text>Sair</Text>
                    </TouchableOpacity>

                </View>

            </View>

            <Modal
                visible={visible}
                animationType='fade'
                onRequestClose={() => setVisible(false)}
                transparent={true}
            >

                <View className='absolute bottom-0 w-full h-1/5 py-4 bg-zinc-800 items-center rounded-md'>

                    <View className='relative w-full'>
                        <Pressable
                            className='absolute top-0 right-3'
                            onPress={() => setVisible(false)}
                        >
                            <Ionicons name="close-outline" size={30} color="#fff" />
                        </Pressable>
                    </View>

                    <View className='flex-row gap-10 h-full justify-center items-center'>
                        <Pressable
                            className='justify-center items-center gap-2'
                            onPress={async () => {
                                takePicture();
                                setVisible(false);
                            }}
                        >
                            <Ionicons name="camera-outline" size={30} color="#fff" />
                            <Text className='text-white font-semibold text-xl' >Camera</Text>
                        </Pressable>

                        <Pressable
                            className='justify-center items-center gap-2'
                            onPress={() => {
                                pickImage();
                                setVisible(false);
                            }}
                        >
                            <FontAwesome6 name="image" size={30} color="#fff" />
                            <Text className='text-white font-semibold text-xl' >Galeria</Text>
                        </Pressable>
                    </View>
                </View>

            </Modal>

        </View>
    )
}