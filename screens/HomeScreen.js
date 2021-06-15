import React, { useState } from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";

// just a random homescreen in place
export default function HomeScreen({ navigation }) {
  // state = { name: '' }

  const PLACEHOLDER_NAME = "Li Han";

  const QUESTIONS_AND_PROMPTS = [
    {question: `Hey ${PLACEHOLDER_NAME}, how are you feeling today?`,
    prompt: `${PLACEHOLDER_NAME} is feeling`},
    {question: `What's up ${PLACEHOLDER_NAME}! What song is currently stuck in your head?`,
    prompt: `${PLACEHOLDER_NAME} can't stop listening to`},
    {question: `Hello ${PLACEHOLDER_NAME}, any cravings now?`,
    prompt: `${PLACEHOLDER_NAME} really needs some`},
  ]

  const [questionPrompt, setQuestionPrompt] = useState(QUESTIONS_AND_PROMPTS[Math.floor(Math.random() * QUESTIONS_AND_PROMPTS.length)]);



  return (
    <View style={styles.container}>
      <Text style={styles.text}>{questionPrompt.question}</Text>
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