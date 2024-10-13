import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { View, Text } from 'react-native'

export function Footer() {
    return (
        <View className='w-full h-40 justify-center items-center gap-3'>

            <View className='flex-row gap-3'>

                <Text className='text-zinc-800/70'>promos</Text>
                <Text className='text-zinc-800/70'>carrinho</Text>
                <Text className='text-zinc-800/70'>favoritos</Text>
                <Text className='text-zinc-800/70'>minha conta</Text>
                <Text className='text-zinc-800/70'>ajuda</Text>

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