import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel/Carousel";
import { ProductsHome } from "../components/Products/ProductsHomePage/ProductsHome";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import React from "react";
import { PropsAPI } from "../type/typeAPI";
import { getProducts } from "../API/getProducts";
import { Loading } from "../components/Loading/Loading";
import { LoadingCarousel } from "../components/Carousel/LoadingCarousel";
import { View } from "react-native";

export default function Index() {

  const [loading, setLoading] = useState(true);
  const [dataProductsAPI, setDataProductsAPI] = useState<PropsAPI[]>([]);

  useEffect(() => {

    setStatusBarBackgroundColor('rgb(63 63 70)', true);

    const fetchProducts = async () => {

      const data = await getProducts();

      setLoading(false);

      if (data) {
        setDataProductsAPI(data);
        return;
      }

    }

    fetchProducts();

  }, [])

  return (
    <>
      <NavBar />
      <Banner image={require('../assets/images/banner.png')} />
      {
        loading ?
          <View className={'animate-pulse'}>
            <LoadingCarousel />
            <Loading />
          </View> :
          <>
            <Carousel dataProducts={dataProductsAPI} />
            <ProductsHome dataProducts={dataProductsAPI} />
          </>
      }
      <Banner image={require('../assets/images/bannerOferta.png')} />
      <Footer />
    </>

  );
}
