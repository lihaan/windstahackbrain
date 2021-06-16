import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

export default function MatchingScreen() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   loadMatchingResult();
  // });

  // async function loadMatchingResult() {
  //   const response = await fetch();
  //   const responseData = await response.json();
  //   console.log(responseData);
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.chatContainer}>Insert navigation bar at the top</Text>
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
