import { FontAwesome6 } from '@expo/vector-icons'
import { View, Text } from 'react-native'

export default function NotfoundProducts() {
  return (
    <View className='gap-2 p-10 justify-center items-center w-full'>
      <Text>OPS... Não encontramos os produtos </Text>
      <FontAwesome6 name="face-sad-cry" size={30} color="black" />
    </View>
  )
}