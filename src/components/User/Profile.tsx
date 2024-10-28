import { View, Text, Pressable, Image } from 'react-native';
import { TitlePages } from '../TitlePages';
import { Entypo } from '@expo/vector-icons';

export function ProfileUser() {

    const imageDefault = require('@/src/assets/images/imageDefaultUser.jpg');

    const editPhoto = () => {
        
    }

    return (
        <View className='w-full items-center gap-10'>

            <TitlePages title='Meu perfil' />

            <View className='w-full bg-zinc-50 mx-5 py-5 justify-center items-center gap-5'>


                <View className='relative'>
                    <View className='w-40 h-40 rounded-full border border-[#CA9D37] bg-zinc-50'>
                        <Image
                            source={imageDefault}
                            className='w-full h-full rounded-full'
                        />
                    </View>

                    <Pressable
                        className='z-10 absolute rounded-full bg-neutral-200 p-2 bottom-0 right-0'
                        onPress={() => editPhoto()}
                    >
                        <Entypo name="edit" size={24} color="black" />
                    </Pressable>
                </View>

                <Text className='text-zinc-800'>Name</Text>

                <Text className='text-zinc-800'>Email</Text>

                <View className='gap-5'>

                    <Pressable className='bg-[#CA9D37] rounded-md p-2 w-fit' >
                        <Text className='text-zinc-50 text-lg'>Editar Perfil</Text>
                    </Pressable>

                    <Pressable className='bg-neutral-200 rounded-md p-2 items-center justify-center'>
                        <Text>Sair</Text>
                    </Pressable>

                </View>

            </View>

        </View>
    )
}