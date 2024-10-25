import { View, Text } from 'react-native'
import { CardsLoad } from './CardsLoad'

export function Loading() {
  return (
    <View className='justify-center items-center gap-3 pb-5 w-full'>

      <View className='bg-neutral-500/40 rounded-sm h-12 w-60'></View>

      <View className='bg-neutral-500/40 rounded-sm h-10 w-40'></View>

      <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>

        <CardsLoad />
        
        <CardsLoad />
        
        <CardsLoad />
        
        <CardsLoad />

      </View>

    </View>
  )
}