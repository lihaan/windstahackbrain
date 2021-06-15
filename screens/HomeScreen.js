import React, {useState, useEffect} from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";
import { useFonts, JosefinSans_300Light } from '@expo-google-fonts/josefin-sans';
import { Rating } from '../components/Rating';
import { useFocusEffect } from '@react-navigation/native'

// just a random homescreen in place
export default function HomeScreen({ navigation, route }) {
  let [fontsLoaded] = useFonts({
    JosefinSans_300Light,
  });

  const [nickname, setNickname] = useState("User");

  function checkName() {
    return route.params?.nickname ? route.params.nickname : nickname
  }
  
  const PLACEHOLDER_NAME = "Li Han";

  const QUESTIONS = [
    {
      question: `Hey ${PLACEHOLDER_NAME}, how are you feeling today?`,
      format: `${PLACEHOLDER_NAME} is feeling`,
      input: <Rating></Rating>
    },
    {
      question: `What's up ${PLACEHOLDER_NAME}! What song is currently stuck in your head?`,
      format: `${PLACEHOLDER_NAME} can't stop listening to`,
      input: <Rating></Rating>
    },
    {
      question: `Hello ${PLACEHOLDER_NAME}, any cravings now?`,
      format: `${PLACEHOLDER_NAME} really needs some`,
      input: <Rating></Rating>
    },
  ]

  const [input, SetInput] = useState()
  const [curQuestionIndex, setCurQuestionIndex] = useState(Math.floor(Math.random() * QUESTIONS.length))

  
  if (!fontsLoaded) {
    return (<View style={styles.container}>
    <Text style={styles.question}>Loading</Text>
  </View>);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{QUESTIONS[curQuestionIndex].question}</Text>
      {QUESTIONS[curQuestionIndex].input}
      <Text style={styles.text}>Hello {checkName()}!</Text>
      
      <Button
        title="Chat now!"
        onPress={() => {
          navigation.navigate("Chat");
        }}
      ></Button>
      <Button
        title="View Loading Screen(??)"
        onPress={() => {
          navigation.navigate("Loading");
        }}
      ></Button>
      <Button
        title="Edit Nickname"
        onPress={() => {
          navigation.navigate("Edit Nickname", {nickname});
        }}
      ></Button>
      <Button
        title="loading"
        onPress={() => {
          navigation.navigate("Matchmaking loading");
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff6c8',
    alignItems: 'center', 
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  nickname: {
    margin: 10,
    fontSize: 25,
  },
  question: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'JosefinSans_300Light'
  }
});
