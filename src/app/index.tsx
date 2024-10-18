import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel/Carousel";
import { ProductsHome } from "../components/Products/ProductsHome";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import React from "react";
import { PropsAPI } from "../type/typeAPI";
import { getProducts } from "../API/getProducts";

export default function Index() {

  const [dataAPI, setDataAPI] = useState<PropsAPI[]>([]);

  useEffect(() => {

    setStatusBarBackgroundColor('rgb(63 63 70)', true);

    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        data ? setDataAPI(data) : null ; 
      }
      catch (err) {
        console.error('Erros ao buscar produtos: ' + err);
      }
    }

    fetchProducts();

  }, [])

  return (
    <>
      <NavBar />
      <Banner image={require('../assets/images/banner.png')} />
      <Carousel dataProducts={dataAPI} />
      <ProductsHome dataProducts={dataAPI} />
      <Banner image={require('../assets/images/bannerOferta.png')} />
      <Footer />
    </>

  );
}
