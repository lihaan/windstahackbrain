import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';

export default function EditNickname({navigation, route}) {
  const [nickname, setNickname] = useState(route.params.nickname)

  return (
    <View style={styles.container}>
      <Text style={styles.words}> Set your Nickname! WIP </Text>
      <Text style={styles.words}> Current: {nickname} </Text>

      <TextInput
        style={styles.textInput}
        value={nickname}
        onChangeText={(newNickname) => setNickname(newNickname)}
      ></TextInput>
      <TouchableOpacity
         onPress={() => navigation.navigate("Home", {nickname})}
         style={[styles.button, styles.submitButton]}
       >
         <Text style={styles.buttonText}>Submit</Text>
       </TouchableOpacity>
       <TouchableOpacity
         onPress={() => navigation.goBack()}
         style={[styles.button, styles.cancelButton]}
       >
         <Text style={styles.buttonText}>Cancel</Text>
       </TouchableOpacity>
     </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff6C8'
  },
  words: {
      fontSize: 30,
      fontWeight: "bold",
      top: -200
  },
  current: {
    fontSize: 15,
    top: -200
},
 textInput: {
   margin: 20,
   borderWidth: 1,
   width: "80%",
   padding: 10,
   borderColor: "#ccc",
   backgroundColor: "white",
   top: -180,
 },

  buttons: {
    flexDirection: "row",
  },
  button: {
    padding: 10,
    margin: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
  submitButton: {
    backgroundColor: "orange",
    top: -150,
    left: -60
  },
  cancelButton: {
    backgroundColor: "red",
    top: -194.5,
    left: 60
  },
 });
