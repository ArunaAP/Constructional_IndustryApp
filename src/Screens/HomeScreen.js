import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import MainImg from '../assets/MainImg.jpg';

export default function HomeScreen() {
  return (
    <View style={styles.containrt}>
      <Image source={MainImg} style={styles.Img}/>
      <Text style={styles.HomeTitle}>MD Holdings (Pvt) Ltd</Text>
    </View>

    
  )
}

const styles = StyleSheet.create({
  containrt:{
    flex:1,
    alignItems:'center',
    backgroundColor:'white'
  },
  Img:{
    width:'100%',
    height:'80%',
    resizeMode:'cover'
  },
  HomeTitle:{
    fontSize:30,
    fontWeight:'bold',
    marginTop:20
  }
})