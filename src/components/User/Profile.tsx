import { View, Text } from 'react-native'
import { TitlePages } from '../TitlePages'
import { Input } from '../Input'
import { UserSubmit } from './UserSubmit'

export function ProfileUser() {
    return (
        <View className='w-full items-center gap-10'>

            <TitlePages title='Meu perfil' />

            <View className='w-11/12 py-10 bg-zinc-50 justify-center items-center rounded-md gap-5'>

                <View className='justify-center items-center gap-3'
                >

                    <Input label='Nome completo: ' />

                    <Input label='Telefone :' />

                    <Input label='E-mail :' />

                    <Input label='CPF :' />

                    <Input label='Endereço :' />

                    <Input label='CEP :' />

                    <Input label='Complemento :' />

                    <Input label='Senha :' />

                </View>

                <UserSubmit
                    title='Alterar dados'
                    router={'/'}
                />

            </View>
        </View>
    )
}