import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SelectList from 'react-native-dropdown-select-list'
import DatePicker from 'react-native-datepicker'

import { ref, set } from "firebase/database";
import { db } from '../Components/config';


export default function OrderScreen() {
  
  const [Bname, setBname] = useState('');
  const [Daddress, setDaddress] = useState('');
  const [Cdetailes, setCdetailes] = useState('');
  const [comments, setcomments] = useState('');

  const [selected, setSelected] = React.useState("");
  
  const data = [{key:'1',value:'Panadura S1'},{key:'2',value:'Panadura S2'},{key:'2',value:'Colombo S1'}];
  const data1 = [{key:'1',value:'Gamage Hardware'},{key:'2',value:'SDR Hardware'}];

  // create order function
  function create () {
    set(ref(db, 'orders/' + Bname), {
      Bname: Bname,
      Daddress: Daddress,
      Cdetailes: Cdetailes,
      comments: comments
    }).then(() => {
      alert('data added');
    }).catch((error) => {
      alert(error);
    });
   };

  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.Title}>Purchase Order</Text>
      </View>

      {/* // purchase order form */}
      <View style={styles.form}>

        {/* Dropdown for site name */}
        <View style={styles.dropdown}>
          <Text style={styles.labalName}>Site Name</Text>
          <SelectList setSelected={setSelected} data={data} onSelect={() => alert(selected)} />
        </View>
          
          {/* text input for item,desc,qty */}
        <View style={styles.item}>
          <Text style={styles.itemText}>Item</Text>
          <Text style={styles.itemText}>Description</Text>
          <Text style={styles.itemText}>Qty</Text>
        </View>
          
        <View style={styles.item}>
          <TextInput style={styles.itemInput}/>
          <TextInput style={styles.itemInput}/>
          <TextInput style={styles.itemInput}/>
        </View>


        {/* Dropdown for Supplier */}
        <View style={styles.dropdown}>
          <Text style={styles.labalName}>Supplier</Text>
          <SelectList setSelected={setSelected} data={data1} onSelect={() => alert(selected)} />
        </View>


        {/* text input for buyer name */}
        <View style={styles.inputView}>
          <Text style={styles.labalName}>Buyer Name</Text>
          <TextInput value={Bname} onChangeText={setBname} style={styles.textInput} />
        </View>

        {/* text input for Delivery Address */}
        <View style={styles.inputView}>
          <Text style={styles.labalName}>Delivery Address</Text>
          <TextInput value={Daddress} onChangeText={setDaddress} style={styles.textAreaInput} />
        </View>
        
         {/* text input for Contact Details */}
        <View style={styles.inputView}>
          <Text style={styles.labalName}>Contact Details</Text>
          <TextInput value={Cdetailes} onChangeText={setCdetailes} style={styles.textInput} />
        </View>

          {/* text input for Comments */}
        <View style={styles.inputView}>
          <Text style={styles.labalName}>Comments (Optional)</Text>
          <TextInput value={comments} onChangeText={setcomments} style={styles.textAreaInput} />
        </View>

        {/* Touchbleopacity button */}
        <View style={styles.btnView}>
          <TouchableOpacity onPress={create} style={styles.button}>
              <Text style={styles.btnText}>Process</Text>
          </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  )
}


// styles
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  container1: {
    alignItems:'center'

  },
  Title: {
    fontSize:30,
    fontWeight:'bold',
    color: '#306754'
  },
  form:{
    marginLeft:20,
  },
  labalName: {
    fontWeight:'bold',
    marginBottom:10,
    fontSize:15
  },
  inputView:{
    width:'95%',
    marginTop:20,
    
  },
  textInput:{
    height:45,
    marginBottom:30,
    color:"black",
    borderColor:'black',
    borderWidth:1,
    borderRadius:8
  },
  textAreaInput:{
    height:100,
    marginBottom:30,
    color:"black",
    borderColor:'black',
    borderWidth:1,
    borderRadius:8
  },
  dropdown:{
    width:'95%',
    marginTop:20
  },
  button:{
    alignSelf:'stretch',
    alignItems:'center',
    padding:10,
    backgroundColor: '#a3c1ad',
    marginTop: 30,
    width:'60%',
    borderRadius:16,
    marginLeft:70
  },
  btnText:{
    fontSize:20,
    fontWeight:'bold',
    color:'#306754'
  },
  btnView:{
    alignSelf:'stretch',
    alignItems:'center',
    marginBottom:50

  },
  item:{
    flexDirection:'row'
  },
  itemInput:{
    height:45,
    marginBottom:30,
    color:"black",
    borderColor:'black',
    borderWidth:1,
    borderRadius:8,
    width:'30%',
    marginRight:10
    
  },
  itemText:{
    marginRight:100,
    marginLeft:10,
    marginBottom:10,
    marginTop:30,
    fontWeight:'bold',
    marginBottom:10,
    fontSize:15
  }

})