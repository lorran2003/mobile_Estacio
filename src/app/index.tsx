import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel/Carousel";
import { ProductsHome } from "../components/Products/ProductsHome";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import React from "react";

export default function Index() {

  useEffect(() => {
    setStatusBarBackgroundColor('rgb(63 63 70)', true);
  })

  return (
    <>
      <NavBar />
      <Banner image={require('../assets/images/banner.png')} />
      <Carousel />
      <ProductsHome />
      <Banner image={require('../assets/images/bannerOferta.png')} />
      <Footer />
    </>
    
  );
}
