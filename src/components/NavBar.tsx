import { View, Pressable, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Logo } from './Logo';

export function NavBar() {
    return (
        <View className='flex-row justify-between items-center w-full p-5'>
            <Link href={'/'}>
                <Logo/>
            </Link>

            <View className='flex-row gap-2'>

                <Link href={'/(user)/login'}>
                    <View className='border-solid border-[#CA9D37] border bg-zinc-50 p-2 rounded-full'>
                        <AntDesign name="user" size={28} color="black" />
                    </View>
                </Link>

                <Link href={'/cart'}>
                    <View className='border-solid border-[#CA9D37] border bg-zinc-50 p-2 rounded-full'>
                        <AntDesign name="shoppingcart" size={28} color="black" />
                    </View>
                </Link>
            </View>
        </View>
    )
}

