import { View, Text, TouchableOpacity } from 'react-native';
import { TitlePages } from '../TitlePages';
import { Logo } from '../Logo';
import { Input } from '../Input';
import { Link } from 'expo-router';
import { useState } from 'react';
import { registerUser, TypeRegisterUser } from "@/src/API/User/registerUser";

export function RegisterUser() {

  const [fullName, setFullName] = useState<string>('');
  const [cellPhone, setCellPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitData = () => {

    const data : TypeRegisterUser = {
      name: fullName,
      email: email,
      cpf: cpf,
      password: password,
      phone: cellPhone
    }

     registerUser(data);
  }
  
  return (
    <View className='w-full items-center gap-10'>

      <TitlePages title='Registro' />

      <View className='w-11/12 py-5 bg-zinc-50 justify-center items-center rounded-md gap-5'>

        <Logo />

        <Text className='font-semibold text-lg'>Ja é cliente Dalaza:</Text>

        <View className='justify-center items-center gap-3'
        >

          <Input label='Nome completo: ' onChangeText={setFullName} />

          <Input label='Telefone :'onChangeText={setCellPhone} />

          <Input label='E-mail :' onChangeText={setEmail} />

          <Input label='CPF :' onChangeText={setCpf} />

          <Input label='Senha :' onChangeText={setPassword} />

        </View>

        <TouchableOpacity 
        className='bg-[#CA9D37] rounded-md py-2 px-8'
        onPress={() => submitData()}
        >
          <Text className='text-zinc-50 font-semibold text-xl'>Registrar</Text>
        </TouchableOpacity>

        <Link href={'/user/login'}>
          <Text className='text-zinc-800/60 underline'>
          Já possui conta? Logue aqui
          </Text>
        </Link>

      </View>

    </View>
  )
}