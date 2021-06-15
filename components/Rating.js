import React, {useState, useEffect} from "react";
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export function Rating() {

  const [answer, setAnswer] = useState(0)

  function renderSymbol(index) {
    return <TouchableOpacity style={styles.symbol} onPress={()=>setAnswer()}></TouchableOpacity>
  }

  return (<View style={styles.inputContainer}>
    {renderSymbol(1)}
    {renderSymbol(2)}
    {renderSymbol(3)}
    {renderSymbol(4)}
    {renderSymbol(5)}
    </View>);
} 

const styles = StyleSheet.create({
  symbol: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: '#f9f9f9'
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    width:"100%",

  }
});