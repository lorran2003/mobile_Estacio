import { View, Text } from 'react-native'

export function LoadingCarousel() {
  return (
    <View className='py-5'>

      <View className='gap-2 flex-row'>

        <View className='w-32 h-40 rounded-md bg-neutral-500/40'>
        </View>

        <View className='w-32 h-40 rounded-md bg-neutral-500/40'>
        </View>

        <View className='w-32 h-40 rounded-md bg-neutral-500/40'>
        </View>

      </View>
    </View>
  )
}