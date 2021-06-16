import React, {useState, useEffect} from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";
import { useFonts, JosefinSans_300Light } from '@expo-google-fonts/josefin-sans';
import { Rating } from '../components/Rating.js';
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { uuidv4 } from "../functions/uuid_generator.js";

// just a random homescreen in place
export default function HomeScreen({ navigation, route }) {
  const DEFAULT_NICKNAME = "User";
  const [nickname, setNickname] = useState(DEFAULT_NICKNAME);
  const [guid, setGuid] = useState(0);
  const GUID_SOURCE = "fireplace_guid"

  useEffect(() => {
    // Uncomment the bottom code to clear all values saved locally (to mimic first time opening the app)
    // removeFew();

    const setItem = async (value, source) => {
      try {
        await AsyncStorage.setItem(source, value)
      } catch(e) {
        alert(`Error saving ${value}`)
      }
      alert('Saved!')
    }
    const getGuidItem = async (source) => {
      try {
        const value = await AsyncStorage.getItem(source)
        if (value !== null) {
          alert(`found ${value}`)
          setGuid(value);
          setNickname("loaded from db")// TODO: LoadNickname from database using 'value' (user guid) and call setNickname(result)
          return;
        }
        // if guid not found, user is new, initialize new uuid and redirect to edit nickname screen
        alert(`${source} not found`)
        const new_guid = uuidv4()
        setItem(new_guid, GUID_SOURCE);
        setGuid(new_guid);
        // TODO: New user, save user_guid to database (if you want to save a nickname as well, can just use DEFAULT_NICKNAME)
        navigation.navigate("Edit Nickname", {nickname: nickname==DEFAULT_NICKNAME? null : nickname})
      } catch(e) {
        alert(`error reading ${source}`)
        const new_guid = uuidv4()
        setItem(new_guid, GUID_SOURCE);
        setGuid(new_guid);
        // TODO: New user, save user_guid to database (if you want to save a nickname as well, can just use DEFAULT_NICKNAME)
        navigation.navigate("Edit Nickname", {nickname: nickname==DEFAULT_NICKNAME? null : nickname})
      }
    }

    getGuidItem(GUID_SOURCE)
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.nickname && route.params.nickname != nickname) {
        setNickname(route.params.nickname)
        // TODO: Update nickname on database using 'guid' state value
      }
      return;
    })
  );

  let [fontsLoaded] = useFonts({
    JosefinSans_300Light,
  });

  const [answer, setAnswer] = useState("")

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
    <Text>Loading</Text>
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

const removeFew = async () => {
  const keys = ['key', 'guid', 'fireplace_guid']
  try {
    await AsyncStorage.multiRemove(keys)
  } catch(e) {
    // remove error
  }

  alert('Done')
}