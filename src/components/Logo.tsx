import { View, Image } from 'react-native'

export function Logo() {
    return (
        <View className='w-20 items-center justify-center shadow shadow-zinc-800 rounded-full border-solid border-[#CA9D37] border'>
            <Image
                source={require('../assets/images/logo.jpg')}
                className='size-20 rounded-full'
            />
        </View>
    )
}