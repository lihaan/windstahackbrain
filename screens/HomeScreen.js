import React, {useState, useEffect} from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";

// just a random homescreen in place
export default function HomeScreen({ navigation }) {
  const [nickname, setNickname] = useState("No Nickname Set")

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
      <Text style={styles.nickname}>Nickname: {nickname}</Text>
      {/* <TextInput style={styles.nameInput} placeHolder="Jackalyn" value={this.state.name} /> */}
      <Button title="Chat now!" onPress={() => { navigation.navigate("Chat"); }}></Button>
      <Button title="View Loading Screen(??)" onPress={() => { navigation.navigate("Loading"); }}></Button>
      <Button title="Edit Nickname" onPress={() => { navigation.navigate("Edit Nickname"); }}></Button>

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
  nickname: {
    margin: 10,
    fontSize: 25,
  },
  text: {
    fontSize: 60,
  },
});