import React, { useEffect, useState } from "react";
import { Index } from "../components/Cart/Index";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { getProducts } from "../API/getProducts";
import { PropsAPI } from "../type/typeAPI";

export default function Cart() {
  const [dataProductsAPI, setDataProductsAPI] = useState<PropsAPI[]>([]);

  useEffect(() => {

    const fetchProducts = async () => {

      const data = await getProducts();

      data ? setDataProductsAPI(data) : null;

    }

    fetchProducts();

  }, [])

  return (
    <>
      <NavBar />
      <Index />
      <Footer />
    </>
  )
}