import React from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";

// just a random homescreen in place
export default function HomeScreen({ navigation }) {
  // state = { name: '' }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Helloo</Text>
      {/* <TextInput style={styles.nameInput} placeHolder="Jackalyn" value={this.state.name} /> */}
      <Button title="Chat now!" onPress={() => { navigation.navigate("Chat"); }}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff6c8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 10,
  },
});