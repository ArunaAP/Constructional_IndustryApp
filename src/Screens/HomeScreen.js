import { View, Text } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';

const myIcon = <Icon name="rocket" size={30} color="#900" />;

const HomeScreen = () => {
  return (
    <View style={{backgroundColor:'#fff'}}>
      <Text >HomeScreen</Text>
      {myIcon}
    </View>
  )
}

export default HomeScreen