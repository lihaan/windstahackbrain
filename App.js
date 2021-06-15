import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HelpScreen from "./screens/HelpScreen";
import ChatScreen from "./screens/ChatScreen";
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import EditNickname from "./screens/EditNickname";
import loadingScreen from "./screens/loadingScreen";
import reportUserScreen from "./screens/reportUserScreen";
import promptScreen from "./screens/promptScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="Helplines" component={HelpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Edit Nickname" component={EditNickname} />
        <Stack.Screen name="promptScreen" component={promptScreen} />
        <Stack.Screen name="Matchmaking loading" component={loadingScreen} />
        <Stack.Screen name="reportUserScreen" component={reportUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
