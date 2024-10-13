import { Href, Link } from 'expo-router'
import React from 'react'
import { Text, Pressable } from 'react-native'

export function UserSubmit({ title, text, router }: { title: string, text: string, router: Href }) {
    return (
        <>
            <Pressable className='bg-[#CA9D37] rounded-md py-2 px-8'>
                <Text className='text-zinc-50 font-semibold text-xl'>{title}</Text>
            </Pressable>

            <Link href={router}>
                <Text className='text-zinc-800/60 underline'>
                    {text}
                </Text>
            </Link> 
        </>
    )
}