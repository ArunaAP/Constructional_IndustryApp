import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';



import HomeScreen from '../Screens/HomeScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import OrderScreen from '../Screens/OrderScreen';
import AddScreen from '../Screens/AddScreen';

const Tab = createBottomTabNavigator();



const TabNav = () => {
  return (
    
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: false,
            tabBarIconStyle:{color:'white', fontWeight:'bold',fontSize:5},
            tabBarStyle: {backgroundColor: '#306754', height:60,borderTopRightRadius:20,borderTopLeftRadius:20},
            tabBarInactiveTintColor:'#fff',
            tabBarLabelStyle: {color:'white', fontSize:15,marginBottom:10}
        }}>
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarIcon: () => (
                  <Icon name="home" size={30} color="#fff" />
                 ),         
            }}/>
            <Tab.Screen name='order' component={OrderScreen} options={{
                  tabBarIcon: ({size, color }) => (
                    <Icon name="list-alt" size={size} color={color} />
                 ),
            }}/>
            <Tab.Screen name='add' component={AddScreen} options={{
                  tabBarIcon: ({ color }) => (
                    <Icon name="plus-square" size={30} color="#fff" />
                 ),
            }}/>
            <Tab.Screen name='welcome' component={WelcomeScreen} options={{
                  tabBarIcon: ({ color }) => (
                    <Icon name="user" size={30} color="#fff" />
                 ),
            }}/>
            
        </Tab.Navigator>
    
  )
}

const styles = StyleSheet.create({
    bottomTabIcon: {
        height:27,
        backgroundColor:'#306754',
        width: 27,
        alignItems:'center',
        tintColor:"white"
    }
})
export default TabNav;