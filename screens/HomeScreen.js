import React, {useState, useEffect} from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";
import { useFonts, JosefinSans_300Light } from '@expo-google-fonts/josefin-sans';
import { Rating } from '../components/Rating.js';
import { useFocusEffect } from '@react-navigation/native'

// just a random homescreen in place
export default function HomeScreen({ navigation, route }) {
  const DEFAULT_NICKNAME = "User";
  const [nickname, setNickname] = useState(DEFAULT_NICKNAME);
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@guid')
        if (value !== null) {
          alert(`found ${value}`)
          return;
        }
        alert("guid not found")
      } catch(e) {
        alert("error reading guid")
      }
    }
    getData()
    if (nickname==DEFAULT_NICKNAME) {
      navigation.navigate("Edit Nickname", {nickname: nickname==DEFAULT_NICKNAME? null : nickname})
    }
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.nickname) {
        setNickname(route.params.nickname)
      }
      return;
    })
  );

  let [fontsLoaded] = useFonts({
    JosefinSans_300Light,
  });

  const [answer, setAnswer] = useState("")

  function checkName() {
    return route.params?.nickname ? route.params.nickname : nickname
  }

  const QUESTIONS = [
    {
      question: `Hey ${nickname}, how are you feeling today?`,
      format: `${nickname} is feeling`,
      input: <Rating handlePress={handlePress} answer={answer}></Rating>
    },
    {
      question: `What's up ${nickname}! What song is currently stuck in your head?`,
      format: `${nickname} can't stop listening to`,
      input: <TextInput style={styles.input} placeholder="Mr. Brightside perhaps?" onChangeText={text => setAnswer(text)} value={answer} />
    },
    {
      question: `Hello ${nickname}, any cravings now?`,
      format: `${nickname} really needs some`,
      input: <TextInput style={styles.input} placeholder="Mala Tang?" onChangeText={text => setAnswer(text)} value={answer} />
    },
  ]

  const [curQuestionIndex, setCurQuestionIndex] = useState(0)

  function handlePress(input) {
    setAnswer(input)
  }
  
  if (!fontsLoaded) {
    return (<View style={styles.container}>
    <Text style={styles.text}>Loading</Text>
  </View>);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{QUESTIONS[curQuestionIndex].question}</Text>
      {QUESTIONS[curQuestionIndex].input}
      
      <Button
        title="Chat now!"
        onPress={() => {
          navigation.navigate("Chat", {
            question: QUESTIONS[curQuestionIndex],
            answer: answer,
          });
        }}
      ></Button>
      <Button
        title="View Loading Screen(??)"
        onPress={() => {
          navigation.navigate("Loading");
        }}
      ></Button>
      <Button
        title="Edit Nickname"
        onPress={() => {
          navigation.navigate("Edit Nickname", { nickname });
        }}
      ></Button>
      <Button
        title="view matching screen"
        onPress={() => {
          navigation.navigate("Matchmaking");
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff6c8',
    alignItems: 'center', 
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  nickname: {
    margin: 10,
    fontSize: 25,
  },
  question: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'JosefinSans_300Light',
    lineHeight: 30
  },
  input: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(210, 151, 37, 0.17)',
    width: '100%',
    fontSize: 18,
    borderRadius: 6,
  }
});
