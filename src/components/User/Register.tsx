import { View, Text } from 'react-native'
import { TitlePages } from '../TitlePages'
import { Logo } from '../Logo'
import { Input } from '../Input'
import { UserSubmit } from './UserSubmit'

export function RegisterUser() {
  return (
    <View className='w-full items-center gap-10'>

      <TitlePages title='Registro' />

      <View className='w-11/12 py-5 bg-zinc-50 justify-center items-center rounded-md gap-5'>

        <Logo />

        <Text className='font-semibold text-lg'>Ja é cliente Dalaza:</Text>

        <View className='justify-center items-center gap-3'
        >

          <Input label='Nome completo: ' />

          <Input label='Telefone :' />

          <Input label='E-mail :' />

          <Input label='CPF :' />

          <Input label='Endereço :' />

          <Input label='CEP :' />

          <Input label='Complemento : (opcional)' />

          <Input label='Senha :' />

        </View>

        <UserSubmit title='Registrar' text='Já possui conta? Logue aqui' router={'/(user)/login'} />

      </View>


    </View>
  )
}