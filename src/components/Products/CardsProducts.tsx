import { AntDesign } from '@expo/vector-icons'
import { useRef, useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { CardsType } from '../Carousel/Carousel'


export function CardsProducts({ cardsDetails }: { cardsDetails: CardsType }) {

    const [iconHeart, setIconHeart] = useState<any>(<AntDesign name="hearto" size={20} color="black" />);

    const [favorite, setFavorite] = useState<boolean>(true);

    const favoriteProducts = () => {
        if (favorite) {
            setFavorite(false);
            return setIconHeart(<AntDesign name="heart" size={20} color="red" />);
        }
        setFavorite(true);
        setIconHeart(<AntDesign name="hearto" size={20} color="black" />)
    };

    return (
        <View className='p-2 bg-zinc-50 rounded-md w-5/12 justify-center items-center'>

            <Image
                source={cardsDetails.img}
                className='w-full h-48 rounded-md'
            />

            <View className='w-full justify-center items-start'>
                <Text className='font-semibold text-xl'>{'Ola mundo'}</Text>

                <Text className='opacity-80'>R$ {cardsDetails.id}</Text>
            </View>

            <View className='flex-row w-full items-center justify-end gap-2' >

                <Pressable onPress={() => favoriteProducts()}>

                    {iconHeart}

                </Pressable>

                <Pressable className='bg-[##CA9D37] rounded-full p-2'>

                    <Text className='text-zinc-50'>Comprar</Text>

                </Pressable>
            </View>
        </View>
    )
}