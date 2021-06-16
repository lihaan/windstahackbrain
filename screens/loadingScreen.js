import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//dont know if this screen is actually needed

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}> Fireplace </Text>
      <MaterialCommunityIcons style={styles.image} name="fireplace" size={150} color="black" />
      <Text style={styles.healing}> Healing is Not Linear </Text>
      <Text style={styles.subText}> Loading... </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff6C8'
  },
  appName: {
    fontWeight: 'bold',
    fontSize: 36,
    color: "black",
    backgroundColor: "#fff6C8",
    top: -170
  },
  subText: {
    color: "black",
    fontSize: 20,
    opacity: 0.5, 
    top: 200,
  },
  healing: {
    color: "black",
    fontSize: 25,
    opacity: 0.8, 
    top: -80
  },
  image: {
    top: -125
  }
});
