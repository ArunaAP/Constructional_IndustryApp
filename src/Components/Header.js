import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Logo from '../assets/logo.png'


const Header = () => {
  return (
    <View style={{backgroundColor:'white'}}>
        <View style={styles.container}>
        <Text style={styles.HederText}>Procurement Construnction System</Text>
        <Text style={styles.SubHeader}>MD Holdings (Pvt) Ltd</Text>
        <Image source={Logo} style={{width:'35%',height:'35%',resizeMode:'cover',position: 'absolute',
        top: 60,
        bottom: 0,
        left: 15,
        right: 0,}}/>
          </View>
       
        <View style={styles.view2}>
            <View style={styles.inView}></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height:120,
        backgroundColor:'#306754',
        width:'100%',
        borderBottomRightRadius:100,
        alignItems:'center'
    },
    view2: {
        backgroundColor:'#306754',
        height:70
    },
    inView: {
        backgroundColor:'white',
        height:70,
        borderTopLeftRadius:70
    },
    HederText: {
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        marginTop:20
    },
    SubHeader: {
      color:'white',
      fontSize:15,
      paddingLeft:200,
      marginTop:6
    }
})

export default Header;