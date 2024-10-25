import React, { useEffect, useState } from "react";
import { Index } from "../components/Favorite/Index";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { getFavoriteProducts } from "../API/favoriteProducts/getFavoriteProducts";
import { PropsAPI } from "../type/typeAPI";
import { View } from "react-native";
import { CardsLoad } from "../components/Loading/CardsLoad";
import NotfoundProducts from "../components/Products/NotFound/NotfoundProducts";
import { TitlePages } from "../components/TitlePages";

export default function Favorite() {

    const [loading, setLoading] = useState(true);
    const [dataProductsAPI, setDataProductsAPI] = useState<PropsAPI[]>([]);
    const [request, setRequest] = useState<boolean>();

    useEffect(() => {

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

    }, [])

    if (loading) {

        return (
            <>
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
            </>
        )
    }

    return (
        request ?
            <>
                <NavBar />
                <TitlePages title='Favoritos' numberProducts={dataProductsAPI.length} />
                <Index products={dataProductsAPI} />
                <Footer />
            </> :
            <>
                <NavBar />
                <TitlePages title='Favoritos' numberProducts={dataProductsAPI.length} />
                <NotfoundProducts />
                <Footer />
            </>
    )
}