import React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default function EditNickname({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.words}> Set your Nickname! WIP </Text>
      <TextInput
        style={styles.textInput}
      />
      <Text style={styles.current}> Current Nickname:  </Text>
      <Button onPress={() => navigation.goBack()} title="Submit" />
      <Button onPress={() => navigation.goBack()} title="Cancel" />
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
      top: -250
  },
  current: {
    fontSize: 15,
    top: -200
},
  textInput: {
    borderColor: "black",
    padding: 15,
    backgroundColor: "white",
    marginTop: 20,
    width: "70%",
    top: -220
  },
  cancelButton: {
    
  },
  submitButton: {

  },
});