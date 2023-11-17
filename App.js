import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';


export default function App(){

  const [nome, setNome] = useState('Matheus');

  const [input,setInput] = useState('');

  function alteranome(){
    setNome(input);
    setInput('');
  }

  return(
    <View style={styles.container}>

      <TextInput placeholder='seu nome...' value={input} onChangeText={(texto)=> setInput(texto)} />

      <TouchableOpacity style={styles.btn} onPress={alteranome}>
        <Text style={styles.btnText}>Alterar nome</Text>
      </TouchableOpacity>
      <Text >Olá! {nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btn:{
    backgroundColor:'#222',
    padding:10
  },
  btnText:{
    fontSize:15,
    color: '#ffff'
  }
});

