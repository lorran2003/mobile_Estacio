import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { View, Text } from 'react-native'

export function Footer() {
    return (
        <View className='w-full h-40 justify-center items-center gap-3'>

            <View className='flex-row gap-3'>

                <Link
                    href={'/favorite'}
                    className='text-zinc-800/70'
                >
                    Favoritos
                </Link>
               
                <Link
                    href={'/cart'}
                    className='text-zinc-800/70'
                >
                    Carrinho
                </Link>

                <Text className='text-zinc-800/70'>Promos</Text>

                <Link
                    href={'/(user)/login'}
                    className='text-zinc-800/70'
                >
                    Minha conta
                </Link>
                
                <Text className='text-zinc-800/70'>Ajuda</Text>

            </View>

            <View className='flex-row gap-5'>
                <AntDesign name="instagram" size={24} color="black" />
                <FontAwesome name="whatsapp" size={24} color="black" />
            </View>

            <Text className='text-zinc-800/70'>© 2024 Dazala, Inc. All rights reserved
            </Text>
        </View>
    )
}