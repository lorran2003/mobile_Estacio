import { useEffect, useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { PropsAPI } from '@/src/type/typeAPI';
import { AntDesign } from '@expo/vector-icons';
import { addProductsFavoriteList, arrayFav } from '@/src/API/postProduct';
import { removeProductsFavoriteList } from '@/src/API/deleteProduct';


export function CardsProducts({ product, openModal, index }: { product: PropsAPI, openModal: (index : number) => void, index: number }) {

    let favorite: boolean = arrayFav.some(item => item.id === product.id);

    const iconStart = (() => {

        if (favorite) {

            return <AntDesign name="heart" size={20} color="red" />;
        }
        return <AntDesign name="hearto" size={20} color="black" />;
    })

    const [iconHeart, setIconHeart] = useState<any>(iconStart());


    const productFavorite = () => {


        if (!favorite) {

            favorite = true;
            //addProductsFavoriteList({ "product": product });      
            return setIconHeart(<AntDesign name="heart" size={20} color="red" />);

        }

        favorite = false;
        // removeProductsFavoriteList({"product":product})
        return setIconHeart(<AntDesign name="hearto" size={20} color="black" />)

    }

    return (
        <View className='p-2 bg-zinc-50 rounded-md w-5/12 justify-center items-center'>

            <Image
                source={{ uri: product.image }}
                className='w-full h-48 rounded-md'
            />

            <View className='w-full justify-center items-start'>
                <Text
                    className='font-semibold text-xl'
                    numberOfLines={1}
                >
                    {product.name}
                </Text>

                <Text className='opacity-80'>R$ {product.price}</Text>
            </View>

            <View className='flex-row w-full items-center justify-end gap-2' >

                <Pressable onPress={() => productFavorite()}>

                    {iconHeart}

                </Pressable>

                <Pressable
                    className='bg-[##CA9D37] rounded-full p-2'
                    onPress={() => openModal(index)}
                >

                    <Text className='text-zinc-50'>Comprar</Text>

                </Pressable>
            </View>
        </View>
    )
}