import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{  marginTop: 20, marginHorizontal: 10 }}>
      <View style={{alignItems:'center', backgroundColor: '#1a1a1a', borderRadius: 10,}}>
        <Text style={{ color: 'gray', fontSize: 20,marginTop:10 }}>
          TOTAL BALANCE
        </Text>
        <Text style={{color:'#dbe3d8',marginVertical:25}}>₹ 1000</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent: 'space-between',marginTop:10, backgroundColor: '#1a1a1a', borderRadius: 10,}}>
        <View style={{ marginVertical: 10, marginLeft: 60,alignItems:'center' }}>
          <Text style={{ color: 'red', fontSize: 20 }}>Expense</Text>
          <Text style={{color:'#dbe3d8',marginVertical:20}}>₹ 1000</Text>
        </View>
        <View style={{ marginVertical: 10, marginRight: 60, alignItems:'center' }}>
          <Text style={{ color: 'green', fontSize: 20 }}>Income</Text>
          <Text style={{color:'#dbe3d8',marginVertical:20}}>₹ 1000</Text>
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})