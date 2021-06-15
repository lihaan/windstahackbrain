import React, {useState, useEffect} from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";
import { useFonts, JosefinSans_300Light } from '@expo-google-fonts/josefin-sans';
import { Rating } from '../components/Rating.js';
import { useFocusEffect } from '@react-navigation/native'

// just a random homescreen in place
export default function HomeScreen({ navigation, route }) {
  let [fontsLoaded] = useFonts({
    JosefinSans_300Light,
  });

  const [nickname, setNickname] = useState("User");
  const [answer, setAnswer] = useState("")

  function checkName() {
    return route.params?.nickname ? route.params.nickname : nickname
  }

  const QUESTIONS = [
    {
      question: `Hey ${nickname}, how are you feeling today?`,
      format: `${nickname} is feeling`,
      input: <Rating handlePress={handlePress} answer={answer}></Rating>
    },
    {
      question: `What's up ${nickname}! What song is currently stuck in your head?`,
      format: `${nickname} can't stop listening to`,
      input: <TextInput style={styles.input} placeholder="Mr. Brightside perhaps?" onChangeText={text => setAnswer(text)} value={answer} />
    },
    {
      question: `Hello ${nickname}, any cravings now?`,
      format: `${nickname} really needs some`,
      input: <TextInput style={styles.input} placeholder="Mala Tang?" onChangeText={text => setAnswer(text)} value={answer} />
    },
  ]

  const [curQuestionIndex, setCurQuestionIndex] = useState(Math.floor(Math.random() * QUESTIONS.length))

  function handlePress(input) {
    setAnswer(input)
  }
  
  if (!fontsLoaded) {
    return (<View style={styles.container}>
    <Text style={styles.text}>Loading</Text>
  </View>);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{QUESTIONS[curQuestionIndex].question}</Text>
      {QUESTIONS[curQuestionIndex].input}
      
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
  },
  input: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(210, 151, 37, 0.17)',
    width: '100%',
    fontSize: 16,
  }
});
