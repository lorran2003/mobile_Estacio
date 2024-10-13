import { View, Text } from 'react-native'
import AllProducts from '../components/Products/AllProducts'
import { Footer } from '../components/Footer'

export default function Products() {
  return (
    <View className='w-full'>
        <AllProducts />
    </View>
  )
}