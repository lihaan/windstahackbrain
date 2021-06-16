import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import {
  Text,
  View,
  StyleSheet,
  InputToolbar,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Modal, Portal, Button, Provider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useFonts, JosefinSans_500Medium } from '@expo-google-fonts/josefin-sans';
import { Lato_400Regular } from '@expo-google-fonts/lato';

export default function ChatScreen({ route }) {
  const nickname = "jackalyn";
  const [messages, setMessages] = useState([]);
  let [fontsLoaded] = useFonts({
    JosefinSans_500Medium,
    Lato_400Regular,
  });

  useEffect(() => {
    setMessages([
      {
        _id: 4,
        text: "Hello developer!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
        },
      },
      {
        _id: 3,
        text: "Hello !",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
        },
      },
      {
        _id: 1,
        createdAt: new Date(),
        system: true,
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const customSystemMessage = (props) => {
    return (
      <View style={styles.systemMessageContainer}>
        <Text style={styles.systemMessageText}>
          You've been matched with ___; You may start chatting!{"\n"}
          ___ is feeling __
        </Text>
      </View>
    );
  };
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
      prompt: `What’s the last great TV show or movie you watched?`,
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
    {
      prompt: `If you could eliminate one thing from your daily routine, what would it be and why?`,
    },
  ];

  function pick() {
    var firstIndex = Math.floor(Math.random() * prompts.length);
    var secondIndex = Math.floor(Math.random() * prompts.length);
    while (firstIndex === secondIndex) {
      secondIndex = Math.floor(Math.random() * prompts.length);
    }
    return [firstIndex, secondIndex];
  }

  const indexes = pick();
  const firstI = indexes[0];
  const secondI = indexes[1];
  const [prompt1, setPrompt1] = useState(prompts[firstI]);
  const [prompt2, setPrompt2] = useState(prompts[secondI]);

  //show modal
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", paddingHorizontal: 10, paddingVertical: 20, marginHorizontal: 16, borderRadius: 6 };

  function renderAdd() {
    return (
      <View style={styles.addButton}>
        <Feather name="plus-circle" size={20} color="#666666" />
      </View>
    );
  }

  if (!fontsLoaded) {
    return (<View style={styles.container}>
    <Text>Loading</Text>
  </View>);
  }

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text style={styles.promptTitle}>Choose a Prompt!</Text>
          <TouchableOpacity onPress={hideModal} style={styles.promptButton}>
            <Text style={styles.promptText}>
            {prompt1.prompt}
            </Text>
            {renderAdd()}
          </TouchableOpacity>

          <TouchableOpacity onPress={hideModal} style={styles.promptButton}>
            <Text style={styles.promptText}>
            {prompt2.prompt}
            </Text>
            {renderAdd()}
          </TouchableOpacity>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        <MaterialCommunityIcons
          name="lightbulb-on-outline"
          size={24}
          color="black"
        />
      </Button>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
          name: 'Jack',
        }}
        showAvatarForEveryMessage={true}
        renderSystemMessage={customSystemMessage}
      />
    </Provider>
  );
}

const styles = StyleSheet.create({
  systemMessageContainer: {
    // width: 50,
    // height: 50,
    flex: 1,
    backgroundColor: "#fff6c8",
    justifyContent: "center",
    alignItems: "center",
  },
  systemMessageText: {
    fontSize: 24,
  },
  promptTitle: {
    alignSelf: "center",
    fontSize: 20,
    fontFamily: 'JosefinSans_500Medium',
    marginBottom: 20
  },
  promptText: {
    fontSize: 15,
    flex: 6,
    fontFamily: 'Lato_400Regular',
    lineHeight: 21
  },
  addButton: {
    flex: 1,
    alignItems: "flex-end"
  },
  promptButton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
