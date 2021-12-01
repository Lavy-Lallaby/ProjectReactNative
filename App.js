import React from 'react'
import { View, SafeAreaView, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'

const App = () => {

const [inputValue,setInputValue] = React.useState('')
const checkValueIsNumberOrNot = ()=> {
if(isNaN(inputValue)){
  alert("Is not a Number")
}else{
  alert("Is a Number")
}}

return(
<SafeAreaView style={{flex:1}}>
  <View style={styles.container}>
    <TextInput placeholder="Enter Text" style = {styles.textInputStyle} 
    onChangeText = {(inputValue)=> {setInputValue(inputValue)}} >
    </TextInput>
    <Button title = "Check Value is Number or Not" color = "#606070" onPress= {checkValueIsNumberOrNot} >
    </Button>
  </View>
</SafeAreaView>
)}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    marginTop:60,
  },
  textInputStyle:{
    textAlign:"center",
    height:50,
    width:"70%",
    marginBottom:60,
  }
})

export default App
