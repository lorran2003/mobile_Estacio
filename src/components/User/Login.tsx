import { View, Text, TouchableOpacity } from 'react-native'
import { TitlePages } from '../TitlePages'
import { Input } from '../Input'
import { Logo } from '../Logo'
import { Link, Redirect } from 'expo-router'
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useSession } from '../AuthContext'

export function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { signIn, session, isLoading } = useSession();

    if (session) {

        return <Redirect href={'/(tabs)/user/profile'} />
    }

    return (

        <View className='w-full items-center gap-10'>


            <TitlePages title='Login' />

            <View className='relative w-11/12 py-10 bg-zinc-50 justify-center items-center rounded-md gap-5'>

            {isLoading && (
                <View className='absolute z-10 w-full h-full justify-center items-center bg-zinc-50/80'>
                    <View className='animate-spin'>
                        <AntDesign name="loading2" size={30} color="#CA9D37" />
                    </View>
                </View>
            )}

                <Logo />

                <View className='justify-center items-center gap-3'>

                    <Text className='font-semibold text-lg'>Ja é cliente Dalaza:</Text>

                    <Input
                        label='E-mail ou telefone :'
                        onChangeText={setEmail}
                    />

                    <Input
                        label='Senha :'
                        onChangeText={setPassword}
                    />

                </View>

                <TouchableOpacity
                    className='bg-[#CA9D37] rounded-md py-2 px-8'
                    onPress={() => signIn({ email, password })}
                >
                    <Text className='text-zinc-50 font-semibold text-xl'>Login</Text>
                </TouchableOpacity>

                <Link href={'/user/register'}>
                    <Text className='text-zinc-800/60 underline'>
                        Se não? Registre aqui
                    </Text>
                </Link>
            </View>
        </View>

    )
}