import { View, Text } from 'react-native'

export function TitlePages({ title, numberProducts, textElement }: { title: string, numberProducts?: number, textElement?: boolean }) {
    return (
        <View className='bg-zinc-50 w-full p-6 '>

            <Text className='text-[##CA9D37] text-4xl font-bold'>
                {title}
            </Text>
            {
                textElement ? <Text className='text-zinc-800/50 '>total de ({numberProducts})</Text> : null

            }

        </View>
    )
}