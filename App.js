import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Screens/HomeScreen'
import TabNav from './src/Components/TabNav';
import Header from './src/Components/Header';

const myIcon = <Icon name="rocket" size={30} color="#900" />;

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Header/>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Nav" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App