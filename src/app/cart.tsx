import React, { useEffect, useState } from "react";
import { Index } from "../components/Cart/Index";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { PropsAPI } from "../type/typeAPI";
import { TitlePages } from "../components/TitlePages";
import NotfoundProducts from "../components/Products/NotFound/NotfoundProducts";
import { View } from "react-native";
import { CardsLoad } from "../components/Loading/CardsLoad";
import { getProductsFromCart } from "../API/cart/getProductFromCart";

export default function Cart() {

  const [loading, setLoading] = useState(true);
  const [dataProductsAPI, setDataProductsAPI] = useState<PropsAPI[]>([]);
  const [request, setRequest] = useState<boolean>();

  useEffect(() => {

    const fetchProducts = async () => {

      const data = await getProductsFromCart();

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

        <TitlePages title='Carrinho' numberProducts={dataProductsAPI.length} />

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
        <TitlePages title='Carrinho' numberProducts={dataProductsAPI.length} />
        <Index products={dataProductsAPI} />
        <Footer />
      </> :
      <>
        <NavBar />
        <TitlePages title='Carrinho' numberProducts={dataProductsAPI.length} />
        <NotfoundProducts />
        <Footer />
      </>
  )
}