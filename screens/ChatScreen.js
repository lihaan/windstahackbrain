import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function ChatScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.wip}>Work in Progress</Text>
    </View>
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