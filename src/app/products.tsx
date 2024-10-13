import AllProducts from '../components/Products/AllProducts'
import { Footer } from '../components/Footer'
import React from 'react'
import { NavBar } from '../components/NavBar'

export default function Products() {
  return (
    <>
      <NavBar />
      <AllProducts />
      <Footer />
    </>
  )
}