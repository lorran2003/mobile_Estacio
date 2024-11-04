import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import { ScrollView, View } from "react-native";
import { Banner } from "@/src/components/Banner";
import { NavBar } from "@/src/components/NavBar";
import { LoadingCarousel } from "@/src/components/Loading/LoadingCarousel";
import { Loading } from "@/src/components/Loading/Loading";
import { Carousel } from "@/src/components/Carousel/Carousel";
import { ProductsHome } from "@/src/components/Products/ProductsHomePage/ProductsHome";
import { Footer } from "@/src/components/Footer";
import { PropsAPI } from "@/src/type/typeAPI";
import { getProducts } from "@/src/API/getProducts";
import { useFocusEffect } from "expo-router";


export default function Index() {

  const [loading, setLoading] = useState(true);
  const [dataProductsAPI, setDataProductsAPI] = useState<PropsAPI[]>([]);

  useFocusEffect(

    useCallback(() => {

      setStatusBarBackgroundColor('#18181b', true);
      
      const fetchProducts = async () => {
        
        const data = await getProducts();
        
        if (data) {
          setDataProductsAPI(data);
        }
        
        setLoading(false);
           
      }
      
      fetchProducts();

      return(() => {
        setLoading(true);
        setDataProductsAPI([]);
      });
      
    },[])
  )

  return (
    <ScrollView
      className="bg-neutral-200 flex-1"
      showsVerticalScrollIndicator={false}
    >
      <NavBar />
      <Banner image={require('@/src/assets/images/banner.png')} />
      {
        loading ?
          <View className={'animate-pulse'}>
            <LoadingCarousel />
            <Loading />
          </View> :
          <>
            {
              dataProductsAPI.length > 0 && (
                <Carousel dataProducts={dataProductsAPI} />
              )
            }
            <ProductsHome dataProducts={dataProductsAPI} />
          </>
      }
      <Banner image={require('@/src/assets/images/bannerOferta.png')} />
      <Footer />
    </ScrollView>

  );
}
