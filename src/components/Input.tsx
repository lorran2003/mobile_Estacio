import { Text, TextInput, View } from 'react-native'

interface PropsInput {
    label: string;
    onChangeText: (text: string) => void;
    length?: number;
}

export function Input({ label, onChangeText, length }: PropsInput) {
    return (
        <View className='gap-2 justify-center items-centers'>
            <Text className='text-xl opacity-60'>{label}</Text>
            <TextInput
                cursorColor={'#000'}
                className='rounded-lg border border-[#CA9D37] w-72 h-12 p-2'
                onChangeText={(text) => onChangeText(text)}

            />
        </View>
    )
}