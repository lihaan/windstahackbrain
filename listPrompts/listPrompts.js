// import { StatusBar } from "expo-status-bar";
// import React, { useEffect, useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ActivityIndicator,
//   TouchableOpacity,
//   TextInput,
//   Keyboard,
//   Button,
// } from "react-native";

// var promptArray = [
//   "What fictional world or place would you like to visit?",
//   "What’s the best piece of advice you’ve ever been given?",
//   "If you could write a book, what genre would you write it in? Mystery? Thriller? Romance? Historical fiction? Non-fiction?",
//   "The zombie apocalypse is coming, who are 3 people you want on your team?",
//   "What is your most used emoji?",
//   "What’s the last great TV show or movie you wanted?",
//   "If you had to eat one meal everyday for the rest of your life what would it be?",
//   "If you were left on a deserted island with either your worst enemy or no one, which would you choose? Why?",
//   "What would the title of your autobiography be?",
//   "What is your favorite magical or mythological animal?",
//   "What fictional family would you be a member of?",
//   "Are you a traveler or a homebody?",
//   "Have you ever met your idol or someone you revere greatly?",
//   "What languages do you know how to speak?",
//   "What’s the weirdest food you’ve ever eaten?",
// ];

// export default function listPrompts() {
//   const [prompt, setPrompt] = useState("");

//   function pick() {
//     setPrompt([
//       {
//         prompt: promptArray[Math.floor(Math.random() * promptArray.length)],
//       },
//       ...colors,
//     ]);
//   }
//   return (
//     <View style={styles.container}>
//       <Button onPress={pick} title="Prompt" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
