import { View, Text, Pressable, Image } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

export function NavBar() {
    return (
        <View className='flex-row justify-between items-center w-full p-5'>
            <Link href={'/'}>
                <View className='items-center justify-center shadow shadow-zinc-800 rounded-full border-solid border-[#CA9D37] border'>
                    <Image
                        source={require('../assets/images/logo.jpg')}
                        className='size-20 rounded-full'
                    />
                </View>
            </Link>

            <View className='flex-row gap-2'>
                <Pressable className='border-solid border-[#CA9D37] border bg-zinc-50 shadow shadow-zinc-800 p-2 rounded-full'>
                    <AntDesign name="user" size={24} color="black" />
                </Pressable>

                <Pressable className='border-solid border-[#CA9D37] border bg-zinc-50 shadow shadow-zinc-800 p-2 rounded-full'>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                </Pressable>

                <Pressable className='border-solid border-[#CA9D37] border bg-zinc-50 shadow shadow-zinc-800 p-2 rounded-full'>
                    <Ionicons name="menu-outline" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    )
}