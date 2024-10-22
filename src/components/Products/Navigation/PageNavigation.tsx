import { View, Text, Pressable } from 'react-native'

export function PageNavigation() {
    return (
        <View className='flex-row gap-4 justify-center items-center'>
            <Pressable
                className='bg-[#CA9D37] rounded-md p-3'
                onPress={() => console.log('ola mundo 1')}
            >
                <Text className='text-zinc-50'>Anterior</Text>

            </Pressable>

            <Text>Pagina - {1}</Text>

            <Pressable
                className='bg-[#CA9D37] rounded-md p-3'
                onPress={() => console.log('ola mundo 2')}
            >
                <Text className='text-zinc-50'>Próxima</Text>
            </Pressable>
        </View>
    )
}