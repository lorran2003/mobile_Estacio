import { getProductsFromCart } from "@/src/API/Cart/getProductFromCart";
import { Index } from "@/src/components/Cart/Index";
import { Footer } from "@/src/components/Footer";
import { CardsLoad } from "@/src/components/Loading/CardsLoad";
import { NavBar } from "@/src/components/NavBar";
import NotfoundProducts from "@/src/components/Products/NotFound/NotfoundProducts";
import { TitlePages } from "@/src/components/TitlePages";
import { PropsAPI } from "@/src/type/typeAPI";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, View } from "react-native";

export default function Cart() {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<PropsAPI[]>([]);
  const [request, setRequest] = useState<boolean>();

  useFocusEffect(

    useCallback(() => {

      const fetchProducts = async () => {

        const data = await getProductsFromCart();

        if (data) {
          setProducts(data);
          setRequest(true);
        }
        else {
          setRequest(false);
        }

        setLoading(false);
      }

      fetchProducts();

      return () => {
        setLoading(true);
        setProducts([]);
      }

    }, [])

  );

  if (loading) {

    return (
      <ScrollView
        className="bg-neutral-200 flex-1"
        showsVerticalScrollIndicator={false}
      >

        <NavBar />

        <TitlePages title='Carrinho' numberProducts={products.length} />

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
        <TitlePages title='Carrinho' numberProducts={products.length} />
        <Index products={products} />
        <Footer />
      </ScrollView> :

      <ScrollView
        className="bg-neutral-200 flex-1"
        showsVerticalScrollIndicator={false}
      >
        <NavBar />
        <TitlePages title='Carrinho' numberProducts={products.length} />
        <NotfoundProducts />
        <Footer />
      </ScrollView>
  )
}