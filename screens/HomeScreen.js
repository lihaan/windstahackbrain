import React, {useState, useEffect} from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";
import { useFonts, JosefinSans_300Light } from '@expo-google-fonts/josefin-sans';
import { Rating } from '../components/Rating';

// just a random homescreen in place
export default function HomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    JosefinSans_300Light,
  });
  
  const PLACEHOLDER_NAME = "Li Han";

  const QUESTIONS_AND_PROMPTS = [
    {
      question: `Hey ${PLACEHOLDER_NAME}, how are you feeling today?`,
      prompt: `${PLACEHOLDER_NAME} is feeling`,
      input: <Rating></Rating>
    },
    {
      question: `What's up ${PLACEHOLDER_NAME}! What song is currently stuck in your head?`,
      prompt: `${PLACEHOLDER_NAME} can't stop listening to`,
      input: <Rating></Rating>
    },
    {
      question: `Hello ${PLACEHOLDER_NAME}, any cravings now?`,
      prompt: `${PLACEHOLDER_NAME} really needs some`,
      input: <Rating></Rating>
    },
  ]

  const [nickname, setNickname] = useState("No Nickname Set")

  const [curQuestion, setCurQuestion] = useState(Math.floor(Math.random() * QUESTIONS_AND_PROMPTS.length))
  const [questionPrompt, setQuestionPrompt] = useState(QUESTIONS_AND_PROMPTS[curQuestion]);


  
  if (!fontsLoaded) {
    return (<View style={styles.container}>
    <Text style={styles.question}>Loading</Text>
  </View>);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questionPrompt.question}</Text>
      {questionPrompt.input}
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