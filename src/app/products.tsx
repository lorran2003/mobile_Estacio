import { AllProducts } from '../components/Products/PageProducts/AllProducts'
import { Footer } from '../components/Footer'
import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/NavBar'
import { getProducts } from '../API/getProducts';
import { PropsAPI } from '../type/typeAPI';
import { View } from 'react-native';
import { CardsLoad } from '../components/Loading/CardsLoad';
import NotfoundProducts from '../components/Products/NotFound/NotfoundProducts';
import { TitlePages } from '../components/TitlePages';

export default function Products() {

  const [loading, setLoading] = useState(true);
  const [dataProductsAPI, setDataProductsAPI] = useState<PropsAPI[]>([]);
  const [request, setRequest] = useState<boolean>();

  useEffect(() => {

    const fetchProducts = async () => {

      const data = await getProducts();

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

        <TitlePages title='Nossos produtos' numberProducts={dataProductsAPI.length} />

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
        <TitlePages title='Nossos produtos' numberProducts={dataProductsAPI.length} />
        <AllProducts products={dataProductsAPI} />
        <Footer />
      </> :
      <>
        <NavBar />
        <TitlePages title='Nossos produtos' numberProducts={dataProductsAPI.length} />
        <NotfoundProducts />
        <Footer />
      </>
  )
}