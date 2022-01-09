/*
* File: App.js
* Author: Szivák Gergő
* Copyright: 2022, Szivák Gergő
* Group: Szoft II/N
* Date: 2022-01-09
* Github: https://github.com/Gergosz-2000/pentagon_expo
* Licenc: GNU GPL
*/


import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

console.log("Leírás: A program kiszámolja egy pentagon területét\nNév: Szivák Gergő\nDátum: 2022.01.09.");

export default function App() {

  const [side, setSide] = useState(0);
  const [area, setArea] = useState(0);

  function calcArea(){
    let result = (5*Math.pow(side, 2)*Math.tan(54*Math.PI/180))/4;
    setArea(parseFloat(result).toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pentagon</Text>
      <View style={styles.start}>
        <Text style={styles.inputTitle}>Oldal:</Text>
        <TextInput placeholder="oldal" style={styles.input} onChangeText={ side => setSide(side) } />
        <Button title="Számít" color="#3b5998" onPress={calcArea}/>
      </View>
      <Text style={[styles.inputTitle,{fontSize: 40}]}>Terület: {area}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe3ee',
    alignItems: 'center',
  },
  start: {
    alignItems: 'flex-start',
    backgroundColor: 'gray',
    paddingHorizontal: 80,
    paddingBottom: 20,
    width: '100%',
  },
  input: {
    borderWidth: 5,
    borderColor: '#3b5998',
    width: '100%',
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: 'white',
    paddingStart: 10,
  },
  title: {
    fontFamily: "Cochin",
    color: "#3b5998",
    margin: 40,
    fontSize: 70,
    fontWeight: "bold"
  },
  inputTitle: {
    fontWeight: 'bold',
    color: 'darkred',
    marginTop: 20,
  }
});
