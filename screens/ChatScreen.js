import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Text, View, StyleSheet, InputToolbar } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import promptScreen from "./promptScreen";

export default function ChatScreen({ route }) {
  const [messages, setMessages] = useState([]);

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

  const onSend = useCallback((messages = [(value = { promptScreen })]) => {
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

  return (
    <GiftedChat
      messages={ messages }
      onSend={ messages => onSend(messages) }
      user={{
        _id: 1,
        // name: 'Jack',
      }}
      showAvatarForEveryMessage={ true }
      renderSystemMessage={ customSystemMessage }
    />
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
});
