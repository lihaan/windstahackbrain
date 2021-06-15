import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

// just a random homescreen in place
export default function HomeScreen({ navigation, route }) {
  const [nickname, setNickname] = useState("User");

  function checkName( nickname ) {
    if (nickname != "User")
      {return route.params.nickname}
    else {
      return nickname
    }
  }

  const PLACEHOLDER_NAME = "Li Han";

  const QUESTIONS_AND_PROMPTS = [
    {
      question: `Hey ${PLACEHOLDER_NAME}, how are you feeling today?`,
      prompt: `${PLACEHOLDER_NAME} is feeling`,
    },
    {
      question: `What's up ${PLACEHOLDER_NAME}! What song is currently stuck in your head?`,
      prompt: `${PLACEHOLDER_NAME} can't stop listening to`,
    },
    {
      question: `Hello ${PLACEHOLDER_NAME}, any cravings now?`,
      prompt: `${PLACEHOLDER_NAME} really needs some`,
    },
  ];

  const [questionPrompt, setQuestionPrompt] = useState(
    QUESTIONS_AND_PROMPTS[
      Math.floor(Math.random() * QUESTIONS_AND_PROMPTS.length)
    ]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{questionPrompt.question}</Text>
      <Text style={styles.text}>Hello!</Text>
      {route.params?.nickname ? route.params.nickname : nickname}
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
    backgroundColor: "#fff6c8",
    alignItems: "center",
    justifyContent: "center",
  },
  nickname: {
    margin: 10,
    fontSize: 25,
  },
  text: {
    fontSize: 60,
  },
});
