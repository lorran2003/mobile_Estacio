import { getFavoriteProducts } from "@/src/API/favoriteProducts/getFavoriteProducts";
import { Index } from "@/src/components/Favorite/Index";
import { Footer } from "@/src/components/Footer";
import { CardsLoad } from "@/src/components/Loading/CardsLoad";
import { NavBar } from "@/src/components/NavBar";
import NotfoundProducts from "@/src/components/Products/NotFound/NotfoundProducts";
import { TitlePages } from "@/src/components/TitlePages";
import { PropsAPI } from "@/src/type/typeAPI";
import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";


export default function Favorite() {

    const [loading, setLoading] = useState(true);
    const [dataProductsAPI, setDataProductsAPI] = useState<PropsAPI[]>([]);
    const [request, setRequest] = useState<boolean>(false);

    useFocusEffect(

        useCallback(() => {

            const fetchProducts = async () => {

                const data = await getFavoriteProducts();

                if (data) {
                    setDataProductsAPI(data);
                    setRequest(true);
                }
                else {
                    setRequest(false);
                }

                setLoading(false);

            }

            fetchProducts();

            return () => setLoading(true);
            
        }, [])
    )

    if (loading) {

        return (
            <ScrollView
                className="bg-neutral-200 flex-1"
                showsVerticalScrollIndicator={false}
            >
                <NavBar />

                <TitlePages title='Favoritos' numberProducts={dataProductsAPI.length} />

                <View className='animate-pulse pt-5'>

                    <View className='w-full justify-center items-center gap-5 flex-row flex-wrap'>

                        <CardsLoad />

                        <CardsLoad />

                        <CardsLoad />

                        <CardsLoad />

                    </View>

                </View>

                <Footer />
            </ScrollView>
        )
    }

    return (
        request ?
            <ScrollView
                className="bg-neutral-200 flex-1"
                showsVerticalScrollIndicator={false}
            >
                <NavBar />
                <TitlePages title='Favoritos' numberProducts={dataProductsAPI.length} />
                <Index products={dataProductsAPI} />
                <Footer />
            </ScrollView> :

            <ScrollView
                className="bg-neutral-200 flex-1"
                showsVerticalScrollIndicator={false}
            >
                <NavBar />
                <TitlePages title='Favoritos' numberProducts={dataProductsAPI.length} />
                <NotfoundProducts />
                <Footer />
            </ScrollView>
    )
}