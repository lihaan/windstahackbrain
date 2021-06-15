import React, { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { GiftedChat } from 'react-native-gifted-chat'

export default function ChatScreen({ route }) {
  const [messages, setMessages] = useState([]);

  useEffect( () => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={ messages => onSend(messages) }
      user={{
        _id: 1,
        // name: 'Jack',
      }}
      // showAvatarForEveryMessage={ true }
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff6c8",
    justifyContent: "center",
    alignItems: "center",
  },
  wip: {
    fontSize: 24,
  }
});