
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import HelpScreen from "./screens/HelpScreen";
import { NavigationContainer } from '@react-navigation/native';
import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen'
import EditNickname from './screens/EditNickname'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Helplines" component={HelpScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Edit Nickname" component={EditNickname} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
