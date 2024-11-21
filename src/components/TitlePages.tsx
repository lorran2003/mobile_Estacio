import { View, Text } from 'react-native'
import { PropsAPI } from '../type/typeAPI'

interface PropsTitlePages {
    title: string
    numberProducts?: PropsAPI[];
}

export function TitlePages({ title, numberProducts }: PropsTitlePages) {

    const TextView = () => {

        if (numberProducts && title === 'Carrinho') {
            const arrayPrice = numberProducts.map(product => Number(product.price));
            const totalPrice = arrayPrice.reduce((acc, cur) => acc + cur, 0);
            return <Text className='text-zinc-800/70 font-medium text-lg pl-1'>Total: R$ {totalPrice.toFixed(2)}</Text>;
        }

        else if (numberProducts) {

            return <Text className='text-zinc-800/70 font-medium text-lg pl-1'>Total de produtos: {numberProducts.length}</Text>;
        }
    }

    return (
        <View className='bg-zinc-50 w-full p-6 '>

            <Text className='text-[#CA9D37] text-4xl font-bold'>
                {title}
            </Text>
            {
                <TextView />
            }

        </View>
    )
}