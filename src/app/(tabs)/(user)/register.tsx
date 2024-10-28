import { Footer } from '@/src/components/Footer'
import { NavBar } from '@/src/components/NavBar'
import { RegisterUser } from '@/src/components/User/Register'
import React from 'react'

export default function Register() {
    return (
        <>
            <NavBar />
            <RegisterUser />
            <Footer />
        </>
    )
}