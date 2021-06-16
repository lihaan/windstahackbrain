// create the general look
// stack header - assume HelpScreen navigated from StartScreen(?)
// make static data - 2 text blocks (name, contact)
// using SectionList instead of FlatList to create sections // render data
// touchable opacity (?) on every contacts // brings to phone's call app

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
  Linking,
} from "react-native";

const HELPLINES = [
  {
    title: "General",
    data: [{ name: "National Care", contact: "1800-202-6868" }],
  },
  {
    title: "Mental Well-being",
    data: [
      { name: "Institute of Mental Health", contact: "6389-2222" },
      { name: "Samaritans of Singapore", contact: "1800-221-4444" },
      { name: "Silver Ribbon Singapore", contact: "6385-3714" },
    ],
  },
  {
    title: "Violence or Abuse",
    data: [
      {
        name: "Big Love Child Protection Specialist Centre",
        contact: "6445-0400",
      },
      {
        name: "HEART @ Fei Yue Child Protection Specialist Centre",
        contact: "6819-9170",
      },
      {
        name: "PAVE Integrated Services for Individual and Family Protection",
        contact: "6555-0390",
      },
      { name: "Project StART", contact: "6476-1482" },
      { name: "TRANS SAFE Centre", contact: "6449-9088" },
    ],
  },
  {
    title: "Counselling",
    data: [{ name: "TOUCHline (Counselling)", contact: "1800-377-2252" }],
  },
];

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={HELPLINES}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => Linking.openURL(`tel:${item.contact}`)}
            >
              <Text style={styles.rowNameText}>{item.name}</Text>
              <Text style={styles.rowContactText}>{item.contact}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffec6",
    justifyContent: "center",
    
  },
  sectionTitle: {
    backgroundColor: "#ffa553",
    width: "100%",
    height: 50,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    padding: 10,
  },
  sectionTitleText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  row: {
    backgroundColor: "#fffec6",
  },
  rowNameText: {
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
  },
  rowContactText: {
    fontSize: 18,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingBottom: 3,
  },
});
