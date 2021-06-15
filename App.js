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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Helplines" component={HelpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
