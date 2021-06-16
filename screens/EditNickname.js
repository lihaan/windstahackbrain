import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import { useFonts, JosefinSans_500Medium } from '@expo-google-fonts/josefin-sans';


export default function EditNickname({navigation, route}) {
  const [nickname, setNickname] = useState(route.params.nickname? route.params.nickname: "")

  let [fontsLoaded] = useFonts({
    JosefinSans_500Medium,
  });

  if (!fontsLoaded) {
    return (<View style={styles.container}>
    <Text style={styles.text}>Loading</Text>
  </View>);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.words}> Set your Nickname! </Text>

      <TextInput
        style={styles.textInput}
        value={nickname}
        onChangeText={(newNickname) => setNickname(newNickname)}
      ></TextInput>
      <View style={styles.buttons}>
         <TouchableOpacity
           onPress={() => navigation.goBack()}
           style={[styles.button, styles.cancelButton]}
         >
           <Text style={[styles.cancelText, styles.buttonText]}>Cancel</Text>
         </TouchableOpacity>
         <TouchableOpacity
           onPress={() => navigation.navigate("Home", {nickname})}
           style={[styles.button, styles.saveButton]}
         >
           <Text style={[styles.saveText, styles.buttonText]}>Submit</Text>
         </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff6C8',
    paddingHorizontal: 16,
  },
  words: {
    fontSize: 30,
    fontFamily: 'JosefinSans_500Medium',
  },
 textInput: {
   margin: 20,
   width: "80%",
   backgroundColor: "white",
   textAlign: "center",
   paddingHorizontal: 20,
   paddingVertical: 10,
   backgroundColor: 'rgba(210, 151, 37, 0.17)',
   fontSize: 18,
   borderRadius: 6,
 },
  buttons: {
    marginTop: 30,
    flexDirection: "row",
    width: '80%',
    justifyContent: "space-between",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#111111',
    shadowOffset: {
      width: 2,
    	height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 1,
  },
  buttonText: {
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  saveButton: {
    backgroundColor: "orange",
    borderRadius: 50,
  },
  cancelButton: {
    backgroundColor: "#fbfbfb",
    borderRadius: 10,
  },
  cancelText: {
    color: '#444444',
  },
  saveText: {
    color: "#ffffff",
  }
 });
