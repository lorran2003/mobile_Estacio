import { View, Text } from 'react-native'
import React from 'react'

export function CardsLoad() {
    return (
        <View className='p-2 bg-zinc-50 rounded-md w-5/12 justify-center items-center gap-1'>

            <View className='w-full h-48 rounded-md bg-neutral-500/40'></View>

            <View className='w-full justify-center items-start gap-1'>

                <View className='w-24 h-4 rounded-sm bg-neutral-500/40'></View>

                <View className='w-14 h-4 rounded-sm bg-neutral-500/40'></View>

            </View>

            <View className='flex-row w-full items-center justify-end' >

                <View className='w-20 h-6 rounded-sm bg-neutral-500/40'></View>

            </View>

        </View>
    )
}