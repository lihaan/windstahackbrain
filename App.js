import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import ChatScreen from "./screens/ChatScreen";
import EditNickname from "./screens/EditNickname";
import HelpScreen from "./screens/HelpScreen";
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import MatchingScreen from "./screens/MatchingScreen";
import promptScreen from "./screens/promptScreen";
import reportUserScreen from "./screens/reportUserScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Helplines" component={HelpScreen} />
        <Stack.Screen name="Edit Nickname" component={EditNickname} />
        <Stack.Screen name="promptScreen" component={promptScreen} />
        <Stack.Screen name="MatchmakingScreen" component={MatchingScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="reportUserScreen" component={reportUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
