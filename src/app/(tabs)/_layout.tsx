import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {

  return (
    <Tabs
      screenOptions={
        {
          headerTitleAlign: "center",
          headerTintColor: "#CA9D37",
          tabBarActiveTintColor: "#CA9D37",
          tabBarInactiveTintColor:"#FFF",
          tabBarStyle: {
            backgroundColor: "#18181b",
            height: 60,
          },
          tabBarLabelStyle:{
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
            tabBarIcon: ({color}) => <Ionicons name="shirt-outline" size={24} color={color} />
          }
        }
      />
      <Tabs.Screen
        name='(user)'
        options={
          {
            title: "Perfil",
            tabBarIcon: ({color}) => <AntDesign name="user" size={24} color={color} />
          }
        }
      />
      <Tabs.Screen
        name='cart'
        options={
          {
            title: "Carrinho",
            tabBarIcon: ({color}) => <AntDesign name="shoppingcart" size={24} color={color} />
          }
        }
      />
      <Tabs.Screen
        name='favorite'
        options={
          {
            title: "Favoritos",
            tabBarIcon: ({color}) => <AntDesign name="hearto" size={24} color={color} />
          }
        }
      />
    </Tabs>
  )
}