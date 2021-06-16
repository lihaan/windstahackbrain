import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

// just a random homescreen in place
export default function HomeScreen({ navigation }) {
  const [nickname, setNickname] = useState("No Nickname Set");

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
      <Text style={styles.nickname}>Nickname: {nickname}</Text>
      {/* <TextInput style={styles.nameInput} placeHolder="Jackalyn" value={this.state.name} /> */}
      <Button
        title="View Loading Screen(??)"
        onPress={() => {
          navigation.navigate("Loading");
        }}
      ></Button>
      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => {
          navigation.navigate("Chat");
        }}
      >
        <Text style={styles.chatButtonText}>Find me a friend!</Text>
      </TouchableOpacity>

      <View style={styles.viewRow}>
        <TouchableOpacity
          style={styles.otherButton}
          onPress={() => {
            navigation.navigate("Helplines");
          }}
        >
          <View style={styles.viewRow}>
            <AntDesign style={styles.icon} name="phone" />
            <Text style={styles.otherButtonText}>Helplines</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.otherButton}
          onPress={() => {
            navigation.navigate("Edit Nickname");
          }}
        >
          <View style={styles.viewRow}>
            <Feather style={styles.icon} name="settings" />
            <Text style={styles.otherButtonText}>Edit Nickname</Text>
          </View>
        </TouchableOpacity>
      </View>
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
  chatButton: {
    backgroundColor: "#ffa553",
    padding: 10,
    margin: 15,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  viewRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  chatButtonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
  },
  otherButton: {
    backgroundColor: "white",
    //flex: 1,
    padding: 10,
    margin: 15,
    borderRadius: 30,
    width: 170,
    //alignItems: "flex-end",
    justifyContent: "center",
  },
  otherButtonText: {
    fontSize: 15,
    color: "gray",
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    fontSize: 18,
    color: "gray",
    marginLeft: 10,
  },
});
