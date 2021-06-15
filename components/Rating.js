import React, {useState, useEffect} from "react";
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export function Rating() {

  function renderSymbol() {
    return <TouchableOpacity style={styles.symbol}></TouchableOpacity>
  }

  return (<View>
    {renderSymbol()}
    {renderSymbol()}
    {renderSymbol()}
    {renderSymbol()}
    {renderSymbol()}
  </View>);
} 

const styles = StyleSheet.create({
  symbol: {
    height: 10,
    width: 10,
    backgroundColor: 'red'
  }
});