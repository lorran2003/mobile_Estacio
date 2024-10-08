import { View, Text, Pressable, Image } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons'

export function NavBar() {
    return (
        <View className='flex-row justify-between items-center w-full p-5'>
            <Pressable className='items-center justify-center shadow shadow-zinc-800 rounded-full'>
                <Image
                    source={require('../assets/images/logo.jpg')}
                    className='size-20 rounded-full'
                />
            </Pressable>

            <View className='flex-row gap-2'>
                <Pressable  className='bg-zinc-50 shadow shadow-zinc-800 p-2 rounded-full'>
                    <AntDesign name="user" size={24} color="black" />
                </Pressable>

                <Pressable  className='bg-zinc-50 shadow shadow-zinc-800 p-2 rounded-full'>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                </Pressable>

                <Pressable  className='bg-zinc-50 shadow shadow-zinc-800 p-2 rounded-full'>
                    <Ionicons name="menu-outline" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    )
}