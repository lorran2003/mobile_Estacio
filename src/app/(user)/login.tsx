import React from 'react'
import { Login } from '@/src/components/User/Login'
import { Footer } from '@/src/components/Footer'
import { NavBar } from '@/src/components/NavBar'

export default function Index() {
  return (
    <>
      <NavBar />
      <Login />
      <Footer />
    </>
  )
}