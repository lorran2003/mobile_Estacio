import { View, Text } from 'react-native'

export function TitlePages({title, numberProducts}:{title: string, numberProducts: number}) {
    return (
        <View className='bg-zinc-50 w-full p-6'>

            <Text className='text-[##CA9D37] text-4xl font-bold'>
                {title}
            </Text>

            <Text className='text-zinc-800/50'>total de ({numberProducts})</Text>

        </View>
    )
}