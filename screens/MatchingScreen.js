import { StatusBar } from "expo-status-bar";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { db } from "../firebase";

export default function MatchingScreen({ navigation, route }) {
  const [loading, setLoading] = useState(true);
  const [unmatched, setUnmatched] = useState([]);
  const current_user = route.params.guid;
  // create a new 'account' then add your id in the string below
  const friend = "";

  // alert('here'+route.params?.guid )
  useEffect(() => {
      var current_user_id = route.params?.guid;

      db.collection('users').where("chatting", "==", false).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().guid != current_user_id) {
            // setUnmatched([
            //   ...unmatched,
            //   {
            //     chatting: doc.data().chatting,
            //     guid: doc.data().guid,
            //     nickname: doc.data().nickname,
            //   },
            // ])
            // alert(doc.data().nickname + '\n' + doc.data().guid + '\n' + doc.data().chatting + '\n' + doc.data().random);
          }
        });
      })
      .catch((error) => {
        alert("Error getting documents: ", error);
      })

      // var idx = Math.floor(Math.random() * unmatched.length);
      // var friend = unmatched[idx].guid;

      // navigation.navigate("Chat", {current_user, friend});    
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You are almost there! Matching you up...</Text>
      <Text style={styles.time}>
        {loading ? <ActivityIndicator size="large" /> : "Done!"}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Refresh!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
  chatContainer: {
    color: "black",
    backgroundColor: "#c4c4c4",
    textAlignVertical: "top",
  },
  title: {
    color: "black",
    fontSize: 24,
    textAlign: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
  time: {
    fontSize: 48,
    margin: 24,
  },
  button: {
    backgroundColor: "#ffa553",
    padding: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
