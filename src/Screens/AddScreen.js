import { 
                 StyleSheet,
                  Text,
                  View,
                  TextInput,
                  TouchableOpacity,
                  ScrollView  } from 'react-native'
import React, { useState } from 'react'
import SelectList from 'react-native-dropdown-select-list'  //import select list 
import { ref, set } from "firebase/database";  //import firebase configuration file 
import { db } from '../Components/config';   //import db configuration file for connect the db


export default function AddScreen() {

  //create use states for set values
  const [desc, setDesc] = useState('');
  const [item, setItem] = useState('');
  const [qty, setQty] = useState('');

  
  
  
  
  const [selected, setSelected] = React.useState("");
  const [text, onChangeText] = React.useState("");
  


  //constance for data in the dropdown
  const data = [  

    {key:'Cement',value:'Cement'}  ,
    {key: 'Bricks',value : 'Bricks'} ,

];

//create function for insert data in to the database
 function create () {
   set(ref(db, 'users/' + qty), {
     desc: desc,
     qty: qty,
     item : item
   }).then(() => {
     alert('data added');
   }).catch((error) => {
    alert(error);
   });
  console.log(item)
 };


  return (
    <ScrollView style = {styles.container}>

            {/* view for add new test  */}
          <View style = {styles.addNewText} >
            <Text style = {styles.addNewText}> Add New Item </Text>
          </View>

          {/* view for item text */}
          <View style = {styles.itemText}>
            <Text style = {styles.itemText}>Item</Text>

            {/* view for dropDown */}
            <View style = {styles.dropDown}>
              <SelectList setSelected={setItem} data={data} onPress={(item) => {setItem(item)}} />
            </View>

           </View>
           {/* View for Description */}
           <View style = {styles.textDescription}>
                <Text style = {styles.textDescription}>Description</Text>
            </View>

           {/* View for textArea */}
           <View style = {styles.descriptionContainer}>
            <TextInput
                value={desc} 
                style={styles.input}
                onChangeText={setDesc}
              />
            </View>

            {/* View for Quantity  */}
            <View style = {styles.quantityContainer}>
                <View style = {styles.quantitySemiContainer}>
                <Text style = {styles.textQuantity}>Quantity</Text>
            </View>
                
            <TextInput
                style={styles.input2}
                onChangeText={(qty) => {setQty(qty)}}
                value={qty}
                keyboardType="numeric"
              />

             </View>

            {/* View For TouchableOpacity */}
            <View style = {styles.addBtnContainer}>
            <TouchableOpacity
                 style = {styles.btnAddItem}
                 onPress = {create}
            
             >
            <Text style = {styles.txtAddItem}>Add Item</Text>
            </TouchableOpacity>
            </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container : {

    backgroundColor : 'white',
    flex : 1 

  },
  addNewText : {

    fontSize : 30,
    fontWeight : 'bold',
    color : '#306754',
    alignItems : 'center'
    
    
  },

  itemText : {

    fontSize : 25,
    fontWeight : 'bold',
    marginTop : 20,
    marginLeft : 10,
    flexDirection : 'row',
    alignItems : 'baseline',
    justifyContent : 'center'

  },

  dropDown : {

    width : '60%',
    marginLeft  : 40

  },
  textDescription : {

    fontSize : 25,
    fontWeight : 'bold',
    marginTop : 20,
    marginLeft : "6%"
    
  },

  textQuantity : {

     fontSize : 25,
     color : 'red',
     fontWeight : 'bold',
     marginTop : 20,
    marginLeft : "6%"
    
  },

  textQuantity : {

    fontSize : 25,
    fontWeight : 'bold',
    marginTop : 20,
    
  },


  input: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius : 6
  },

  descriptionContainer : {
    marginLeft : '9%',
    marginRight : '5%'
  },

  input2 : {

    height: 50,
    width : '55%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius : 6,
    
  },
  quantityContainer : {
    flexDirection : 'row',
    justifyContent : 'center'

  },

  btnAddItem : {

    width : '50%',
    marginTop : 30 ,
    alignItems: "center",
    backgroundColor: "#B1D8B7",
    padding: 15,
    borderRadius  :  8 

  },
  addBtnContainer : {
    margin : 10,
    justifyContent : 'center',
    alignItems :  'center'
  },

  quantitySemiContainer : {
    alignContent : 'center'
  },

  textQuantity : {
    fontSize : 25,
    marginLeft : 25,
    fontWeight : 'bold',
    marginTop : 20
  },

  txtAddItem : {
    fontSize : 24,
    fontWeight : 'bold',
  }

})