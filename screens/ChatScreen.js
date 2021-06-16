import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Text, View, StyleSheet, InputToolbar, Button } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { db } from "../firebase";
import promptScreen from "./promptScreen";

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

    // console.log(messages.length)

    // var i;
    // for (i = 0; i < messages.length; i++) {
    //   console.log(i);
    //   const { _id, createdAt, text, user } = messages[i]
    //   db.collection('chats').add({ _id, createdAt, text, user, hello:'yo' })
    // }
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

  return (
    <GiftedChat
      // text={ '' }
      // onInputTextChanged={ text => setCustomText(text) }
      leftControlBar={ <Text>Helfoiewjfo</Text> }
      messages={ messages }
      onSend={ messages => onSend(messages) }
      user={ user1 }
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
