import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import SelectList from 'react-native-dropdown-select-list'
import DatePicker from 'react-native-datepicker'


export default function OrderScreen() {
  
  const date = "2022-02-14"

  const [selected, setSelected] = React.useState("");
  
  const data = [{key:'1',value:'Panadura S1'},{key:'2',value:'Panadura S2'},{key:'2',value:'Colombo S1'}];
  const data1 = [{key:'1',value:'Gamage Hardware'},{key:'2',value:'SDR Hardware'}];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.Title}>Purchase Order</Text>
      </View>

      <View style={styles.form}>

        <View style={styles.dropdown}>
          <Text style={styles.labalName}>Site Name</Text>
          <SelectList setSelected={setSelected} data={data} onSelect={() => alert(selected)} />
        </View>
          
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

        <View style={styles.dropdown}>
          <Text style={styles.labalName}>Supplier</Text>
          <SelectList setSelected={setSelected} data={data1} onSelect={() => alert(selected)} />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.labalName}>Buyer Name</Text>
          <TextInput style={styles.textInput} />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.labalName}>Delivery Address</Text>
          <TextInput style={styles.textAreaInput} />
        </View>
        <View>
          <Text style={styles.labalName}>Required Date</Text>
          <DatePicker
          style={{width:'95%',borderRadius:20}}
          date={date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 275,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 0
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {setState({date: date})}}
        />
        </View>
        
        <View style={styles.inputView}>
          <Text style={styles.labalName}>Contact Details</Text>
          <TextInput style={styles.textInput} />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.labalName}>Comments (Optional)</Text>
          <TextInput style={styles.textAreaInput} />
        </View>

        <View style={styles.btnView}>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Process</Text>
          </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  )
}

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