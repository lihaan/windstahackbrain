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
import { db } from "../firebase";
import { Modal, Portal, Button, Provider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function ChatScreen({ route }) {
  // function hash() {
  //   var h=0, i=0;
  //   if(hash.arguments.length == 1) {
  //     for(i=0; i<hash.arguments[0].length; i++) {
  //       h = (h * 31 + hash.arguments[0].charCodeAt(i)) & 0xffffffff;
  //     }
  //   }
  //   else {
  //     for(i in hash.arguments) {
  //       h ^= hash(hash.arguments[i]);
  //     }
  //   }
  //   return h;
  // }

  const [messages, setMessages] = useState([]);
  const systemtext = "You've been matched with ___; You may start chatting!{'\n'}___ is feeling __";
  // change the variable names to switch your POV, user1 <-> user2
  const user1 = { _id: 1, name: 'Jackalyn' }, user2 = { _id: 2, name: 'React Native' };
  // const chatid = hash(user1._id.toString, user2._id.toString);

  useEffect(() => {
    setMessages([
      {
        _id: 4,
        text: "Hello developer!",
        createdAt: new Date(),
        user: user2,
      },
      {
        _id: 1,
        text: {systemtext},
        createdAt: new Date(),
        system: true,
      },
    ]);
  }, []);

  useLayoutEffect(() => {
    const dbmessages = db.collection('chats')//.doc(chatid)
    .orderBy('createdAt', 'desc')
    .onSnapshot(snapshot => setMessages(
      snapshot.docs.map(doc => ({
        _id: doc.data()._id,
        createdAt: doc.data().createdAt.toDate(),
        text: doc.data().text,
        user: doc.data().user,
      }))
    ));
    return dbmessages;
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    
    const { _id, createdAt, text, user, } = messages[0]
    db.collection('chats').add({ _id, createdAt, text, user, friend: user2 })
  }, []);

  const customSystemMessage = (props) => {
    return (
      <View style={styles.systemMessageContainer}>
        <Text style={styles.systemMessageText}>{ systemtext }</Text>
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
          <Text style={styles.prompt1}>
            {prompt1.prompt}
            <TouchableOpacity onPress={hideModal} style={styles.promptButton}>
              <Feather name="plus-circle" size={24} color="black" />
            </TouchableOpacity>
          </Text>

          <Text style={styles.prompt2}>
            {prompt2.prompt}
            <TouchableOpacity onPress={hideModal}>
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
      <GiftedChat
        // text={ '' }
        // onInputTextChanged={ text => setCustomText(text) }
        messages={ messages }
        onSend={ messages => onSend(messages) }
        user={ user1 }
        showAvatarForEveryMessage={ true }
        renderSystemMessage={ customSystemMessage }
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
  },
  prompt1: {
    fontSize: 15,
  },
  prompt2: {
    marginTop: 40,
    fontSize: 15,
  },
  promptButton: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
