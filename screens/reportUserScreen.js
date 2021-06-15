import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Button,
} from "react-native";

export default function reportUserScreen() {
  const [text, setReportText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.reportContainer}>
        Insert navigation bar at the top
      </Text>
      <Text style={styles.title}>Reason for Report</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setReportText(text)}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Report</Text>
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
  reportContainer: {
    color: "black",
    backgroundColor: "#c4c4c4",
    textAlignVertical: "top",
  },
  title: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  textInput: {
    borderColor: "black",
    padding: 5,
    backgroundColor: "white",
    marginTop: 10,
    width: "80%",
    height: "15%",
    borderRadius: 30,
  },
  button: {
    backgroundColor: "#ffa553",
    padding: 20,
    borderRadius: 30,
    marginTop: 80,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    paddingLeft: 30,
    paddingRight: 30,
  },
});
