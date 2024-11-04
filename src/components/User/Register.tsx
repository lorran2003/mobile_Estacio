import { View, Text, Pressable } from 'react-native';
import { TitlePages } from '../TitlePages';
import { Logo } from '../Logo';
import { Input } from '../Input';
import { Link } from 'expo-router';

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

        <Pressable className='bg-[#CA9D37] rounded-md py-2 px-8'>
          <Text className='text-zinc-50 font-semibold text-xl'>Registrar</Text>
        </Pressable>

        <Link href={'/user/login'}>
          <Text className='text-zinc-800/60 underline'>
          Já possui conta? Logue aqui
          </Text>
        </Link>

      </View>

    </View>
  )
}