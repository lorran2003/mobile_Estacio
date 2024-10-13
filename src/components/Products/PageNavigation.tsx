import { View, Text, Pressable } from 'react-native'

export function PageNavigation() {
    return (
        <View className='flex-row gap-4 justify-center items-center'>
            <Pressable
                className='bg-[#CA9D37] rounded-3xl p-2'
                onPress={() => console.log('ola mundo 1')}
            >
                <Text className='text-zinc-800'>Anterior</Text>

            </Pressable>

            <Text>Pagina - {1}</Text>

            <Pressable
                className='bg-[#CA9D37] rounded-3xl p-2'
                onPress={() => console.log('ola mundo 2')}
            >
                <Text className='text-zinc-800'>Próxima</Text>
            </Pressable>
        </View>
    )
}