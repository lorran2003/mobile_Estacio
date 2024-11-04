import AuthContext from '@/src/components/AuthContext';
import { ModalMenu } from '@/src/components/Modal/ModalMenu';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { useRef, useState } from 'react';
import { Animated, Dimensions, Pressable, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function TabsLayout() {

  const [visible, setVisible] = useState<boolean>(false);

  const translateX = useRef(new Animated.Value(-width)).current;

  const openModal = () => {

    setVisible(true);

    Animated.timing(translateX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start();
  }

  const closeModal = () => {
    Animated.timing(translateX, {
      toValue: -width,
      duration: 300,
      useNativeDriver: true
    }).start(() => setVisible(false));
  }


  return (
    <AuthContext>

      <ModalMenu closeModal={closeModal} translateX={translateX} visible={visible} />

      <Tabs
        screenOptions={
          {
            headerTitleAlign: "center",
            headerTintColor: "#CA9D37",
            headerStyle:
            {
              shadowColor: "#18181b"
            },
            headerLeft: () => {
              return (
                <Pressable
                  className='p-2 rounded-full'
                  onPress={() => openModal()}
                >
                  <Ionicons
                    name="menu-outline"
                    size={35}
                    color="#18181b"
                  />
                </Pressable>
              )
            },
            tabBarActiveTintColor: "#CA9D37",
            tabBarInactiveTintColor: "#FFF",
            tabBarStyle:
            {
              backgroundColor: "#18181b",
              height: 60,
            },
            tabBarLabelStyle:
            {
              fontSize: 12,
              marginBottom: 5
            }
          }
        }
      >

        <Tabs.Screen
          name='index'
          options={
            {
              title: "Home",
              tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={28} color={color} />
            }
          }
        />
        <Tabs.Screen
          name='products'
          options={
            {
              title: "Produtos",
              tabBarIcon: ({ color }) => <Ionicons name="shirt-outline" size={24} color={color} />
            }
          }
        />
        <Tabs.Screen
          name='user'
          options={
            {
              title: "Perfil",
              tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />
            }
          }
        />
        <Tabs.Screen
          name='cart'
          options={
            {
              title: "Carrinho",
              tabBarIcon: ({ color }) => <AntDesign name="shoppingcart" size={24} color={color} />
            }
          }
        />
        <Tabs.Screen
          name='favorite'
          options={
            {
              title: "Favoritos",
              tabBarIcon: ({ color }) => <AntDesign name="hearto" size={24} color={color} />
            }
          }
        />
      </Tabs>

    </AuthContext>

  )
}