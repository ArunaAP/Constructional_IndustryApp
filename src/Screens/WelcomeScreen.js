import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {

  const Separator = () => (
    <View style={styles.separator} />
  );


  return (
    <View style = {styles.container}>
              {/* For summary */}
              <View style = {styles.sumContainer}>
              <Text style = {styles.txtSummery}>Summary</Text>
              </View>

              {/* for site */}
              <View style = {styles.siteContainer}>
                <Text style = {styles.txtSite}>Site - Panadura S1</Text>
              </View>

              {/* for table row */}
              <View style = {styles.tableRowContainer}>
                <Text style = {styles.tableHeaderTxt}>Item</Text>
                <Text style = {styles.tableHeaderTxt}>Description</Text>
                <Text style = {styles.tableHeaderTxt}>Qty.</Text>
              </View>

              {/* for table View */}
              <View style = {styles.table}>
                          {/* for table row 1 */}
                          <View style = {styles.tableRowOne}>
                            <Text style = {styles.rowOneTxt}>Bricks</Text>
                            <Text style = {styles.rowOneTxt}>Hollow Bricks</Text>
                            <Text style = {styles.rowOneTxt}>100</Text>
                          </View>
                                        <Separator/>
                          {/* for table row 2 */}
                          <View style = {styles.tableRowOne}>
                            <Text style = {styles.rowOneTxt}>Cement</Text>
                            <Text style = {styles.rowOneTxt}>Portland</Text>
                            <Text style = {styles.rowOneTxt}>50</Text>
                          </View>
                                         <Separator/>
                           {/* for table row 2 */}
                            <View style = {styles.tableRowOne}>
                            <Text style = {styles.rowOneTxt}>Bricks</Text>
                            <Text style = {styles.rowOneTxt}>Hollow Bricks</Text>
                            <Text style = {styles.rowOneTxt}>90</Text>
                          </View>

              </View>

              {/* for total amount */}
              <View style = {styles.siteContainer}>
                <Text style = {styles.txtSite}>Total Amount   =   Rs :  25 000.00</Text>
              </View>

              {/* for supplier  */}
              <View style = {styles.supContainer}>
                <Text style = {styles.supplier}>Supplier  -  Gamage Hardware</Text>
                <Text style = {styles.supplier}>Required Date  - 01-12-2022 </Text>
              </View>

                  {/* View For TouchableOpacity */}
    <View style = {styles.addBtnContainer}>
          <TouchableOpacity
            style = {styles.btnAddItem}
            onPress = {() => console.log("success")}
          >
            <Text style = {styles.txtAddItem}>Make Changes</Text>
          </TouchableOpacity>
    </View>

        {/* View For TouchableOpacity */}
        <View style = {styles.addBtnContainer}>
          <TouchableOpacity
            style = {styles.btnAddItem}
            onPress = {() => console.log("success")}
          >
            <Text style = {styles.txtAddItem}>Confirm</Text>
          </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'white',
    flex : 1 
  },

  txtSummery : {
    fontSize : 30,
    fontWeight : 'bold',
    color : '#306754',
  },

  sumContainer : {
    alignItems : 'center'
  },

  siteContainer : {
    marginTop : 10,
    alignItems : 'center'
  },

  txtSite : {
    fontSize : 20,
    fontWeight : '600'
  },

  tableRowContainer : {
    flexDirection : 'row',
    justifyContent : 'center',
    justifyContent : 'space-between',
   paddingLeft : 40,
   paddingRight : 40,
   paddingTop :20,
   paddingBottom : 10
  },

  tableHeaderTxt : {
    fontSize : 18,
    fontWeight : '700'
  },

  table : {
    backgroundColor : '#B1D8B7',
    height : '30%',
    marginLeft : 20,
    marginRight : 20,
    borderRadius : 15
  },
  tableRowOne :{
    flexDirection : 'row',
    justifyContent : 'center',
    justifyContent : 'space-between',
    padding : 10
  },

  rowOneTxt : {
    fontSize : 15,
    fontWeight : '500'
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin : 10,
  },

  supplier : {
    fontSize : 16,
    fontWeight : '500',
    marginTop : 5
  },

  supContainer : {
    marginTop : 5,
    alignItems : 'center'
  },

  addBtnContainer : {
    margin : 10,
    justifyContent : 'center',
    alignItems :  'center'
  },

  txtAddItem : {
    fontSize : 22,
    fontWeight : '500',
  },

  btnAddItem : {

    width : '50%',
    marginTop : 10,
    alignItems: "center",
    backgroundColor: "#B1D8B7",
    padding: 5,
    borderRadius  :  8 

  },




})