import { View, Text, Image, Pressable } from 'react-native'
import { TitlePages } from '../TitlePages'
import { Input } from '../Input'
import { Logo } from '../Logo'
import { Link } from 'expo-router'
import { UserSubmit } from './UserSubmit'

export function Login() {
    return (

        <View className='w-full items-center gap-10'>

            <TitlePages title='Login' />


            <View className='w-11/12 py-10 bg-zinc-50 justify-center items-center rounded-md gap-5'>

                <Logo />

                <View className='justify-center items-center gap-3'>

                    <Text className='font-semibold text-lg'>Ja é cliente Dalaza:</Text>

                    <Input label='E-mail ou telefone :' />

                    <Input label='Senha :' />

                </View>

                <UserSubmit
                    title='Login'
                    text='Se não? Registre aqui'
                    router={'/(user)/register'}
                />

            </View>
        </View>

    )
}