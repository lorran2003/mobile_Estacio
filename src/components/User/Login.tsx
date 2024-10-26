import { View, Text, Pressable } from 'react-native'
import { TitlePages } from '../TitlePages'
import { Input } from '../Input'
import { Logo } from '../Logo'
import { Link, useRouter } from 'expo-router'

export function Login() {

    const router =  useRouter();

    const login = () => {
        router.replace("/(user)/profile")
    }
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

                <Pressable
                    className='bg-[#CA9D37] rounded-md py-2 px-8'
                    onPress={() => login()}
                >
                    <Text className='text-zinc-50 font-semibold text-xl'>Login</Text>
                </Pressable>

                <Link href={'/(user)/register'}>
                    <Text className='text-zinc-800/60 underline'>
                        Se não? Registre aqui
                    </Text>
                </Link>
            </View>
        </View>

    )
}