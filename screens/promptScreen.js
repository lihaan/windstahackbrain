import React from "react";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function promptScreen({ navigation }) {
  const [visible, setVisible] = React.useState(false);

  const prompts = [
    {
      prompt: `What fictional world or place would you like to visit?`,
    },
    {
      prompt: `What’s the best piece of advice you’ve ever been given?",
      "If you could write a book, what genre would you write it in? Mystery? Thriller? Romance? Historical fiction? Non-fiction?`,
    },
    {
      prompt: `What is your most used emoji?`,
    },
    {
      prompt: `What’s the last great TV show or movie you wanted?`,
    },
    {
      prompt: `The zombie apocalypse is coming, who are 3 people you want on your team?`,
    },
    {
      prompt: `If you had to eat one meal everyday for the rest of your life what would it be?`,
    },
    {
      prompt: `If you were left on a deserted island with either your worst enemy or no one, which would you choose? Why?`,
    },
    {
      prompt: `What would the title of your autobiography be?`,
    },
    {
      prompt: `What is your favorite magical or mythological animal?`,
    },
    {
      prompt: `What fictional family would you be a member of?`,
    },
    {
      prompt: `Are you a traveler or a homebody?`,
    },
    {
      prompt: `Have you ever met your idol or someone you revere greatly?`,
    },
    {
      prompt: `What languages do you know how to speak?`,
    },
    {
      prompt: `What’s the weirdest food you’ve ever eaten?`,
    },
  ];

  const [prompt, setPrompt] = useState(
    prompts[Math.floor(Math.random() * prompts.length)]
  );

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text style={styles.promptTitle}>Choose a Prompt!</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Chat")} style={styles.promptButton}>
            <Text style={styles.prompt1}>
            {prompt}
            </Text>
            <Feather
              style={styles.addButton}
              name="plus-circle"
              size={24}
              color="black"
            />
          </TouchableOpacity>

          <Text style={styles.prompt2}>
            {prompt}
            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
              <Feather
                style={styles.addButton}
                name="plus-circle"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        <MaterialCommunityIcons
          name="lightbulb-on-outline"
          size={24}
          color="black"
        />
      </Button>
    </Provider>
  );
}

//export default MyComponent;

const styles = StyleSheet.create({
  promptTitle: {
    alignSelf: "center",
    fontSize: 20,
  },
  prompt1: {
    fontSize: 15,
  },
  prompt2: {
    marginTop: 40,
    fontSize: 15,
  },
  addButton: {
  },
  promptButton: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
