import React from 'react'
import { Footer } from '@/src/components/Footer'
import { ProfileUser } from '@/src/components/User/Profile'
import { NavBar } from '@/src/components/NavBar'

export default function Profile() {
    return (
        <>
            <NavBar />
            <ProfileUser />
            <Footer />
        </>
    )
}