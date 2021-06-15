import React, {useState, useEffect} from "react";
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

export function Rating({handlePress, answer}) {

  function alterImage(answer) {
    let imageSource = require('../assets/level_1.png');
    if (answer == 1) {
      imageSource = require('../assets/level_1.png')
    } else if (answer==2) {
      imageSource = require('../assets/level_2.png')
    } else if (answer==3) {
      imageSource = require('../assets/level_3.png')
    } else if (answer==4) {
      imageSource = require('../assets/level_4.png')
    } else if (answer==5) {
      imageSource = require('../assets/level_5.png')
    } else {
      imageSource = '';
    }
    // switch (key) { // using switch results in dependency errors
    //   case 1:
    //     imageSource = require('../assets/level_1.png')
    //     break;
    //   case 2:
    //     imageSource = require('../assets/level_2.png')
    //     break;
    //   case 3:
    //     imageSource = require('../assets/level_3.png')
    //     break;
    //   case 4:
    //     imageSource = require('../assets/level_4.png')
    //     break;
    //   case 5:
    //     imageSource = require('../assets/level_5.png')
    //     break;
    //   default:
    //     imageSource = require('')
    //     break;
    // }

    return imageSource;
  }

  function renderSymbol(index) {
    return (
    <TouchableOpacity style={styles.symbol} onPress={()=>handlePress(index)}>
      {index <= answer && <ImageBackground style={styles.image} source={alterImage(answer)}></ImageBackground>}
    </TouchableOpacity>)
  }

  return (<View style={styles.inputContainer}>
    {renderSymbol(1)}
    {renderSymbol(2)}
    {renderSymbol(3)}
    {renderSymbol(4)}
    {renderSymbol(5)}
    </View>);
} 

let styles = StyleSheet.create({
  symbol: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: '#f9f9f9',
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    width:"100%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});