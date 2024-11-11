import { useEffect, useState } from 'react'
import { View, Text, Pressable, Image, Modal, TouchableOpacity } from 'react-native'
import { PropsAPI } from '@/src/type/typeAPI';
import { AntDesign } from '@expo/vector-icons';
import { addProductsFavoriteList, arrayFav } from '@/src/API/Favorite/addFromFavorite';
import { removeProductsFavoriteList } from '@/src/API/Favorite/removeFromFavorite';
import { useSession } from '../../AuthContext';
import { router } from 'expo-router';

interface PropsCardsProducts {
    product: PropsAPI;
    openModal: (index: number) => void;
    index: number;
}


export function CardsProducts({ product, openModal, index }: PropsCardsProducts) {

    const { session } = useSession();

    const [favorite, setFavorite] = useState<boolean>(arrayFav.some(item => item.id === product.id));

    const startIcon = (() => {

        if (favorite) {

            return <AntDesign name="heart" size={22} color="red" />;
        }
        return <AntDesign name="hearto" size={22} color="black" />;
    })

    const [iconHeart, setIconHeart] = useState<any>(startIcon());

    const productFavorite = () => {

        if (!session) {
            router.push('/(tabs)/user/login');
            return;
        }

        if (favorite) {
            setFavorite(false);
            removeProductsFavoriteList(product);
            setIconHeart(<AntDesign name="hearto" size={22} color="black" />);
            return;
        }

        setFavorite(true);
        addProductsFavoriteList(product);
        setIconHeart(<AntDesign name="heart" size={22} color="red" />);
        return;

    };

    return (

        <View className='p-2 bg-zinc-50 rounded-md w-5/12 justify-center items-center h-auto'>

            <Pressable
                className='w-full h-56 sm:h-96'
                onPress={() => openModal(index)}
            >
                <Image
                    source={{ uri: product.images[0].imagePath }}
                    className='w-full h-full rounded-md'
                />
            </Pressable>

            <View className='w-full justify-center items-start'>
                <Text
                    className='font-semibold text-2xl'
                    numberOfLines={1}
                >
                    {product.name}
                </Text>

                <Text className='opacity-80 text-lg'>R$ {product.price.toFixed(2)}</Text>
            </View>

            <View className='flex-row w-full items-center justify-end gap-4' >

                <Pressable onPress={() => productFavorite()}>

                    {iconHeart}

                </Pressable>

                <TouchableOpacity
                    className='bg-[#CA9D37] rounded-full p-2'
                    onPress={() => openModal(index)}
                >

                    <Text className='text-zinc-50'>Comprar</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}