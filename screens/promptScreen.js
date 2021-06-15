import React from "react";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function promptScreen({ navigation }) {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text style={styles.promptTitle}>Choose a Prompt!</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Chat")} style={styles.promptButton}>
            <Text style={styles.prompt1}>
              Example prompt 1
            </Text>
            <Feather
              style={styles.addButton}
              name="plus-circle"
              size={24}
              color="black"
            />
          </TouchableOpacity>

          <Text style={styles.prompt2}>
            Example prompt 2
            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
              <Feather
                style={styles.addButton}
                name="plus-circle"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        <MaterialCommunityIcons
          name="lightbulb-on-outline"
          size={24}
          color="black"
        />
      </Button>
    </Provider>
  );
}

//export default MyComponent;

const styles = StyleSheet.create({
  promptTitle: {
    alignSelf: "center",
    fontSize: 20,
  },
  prompt1: {
    fontSize: 15,
  },
  prompt2: {
    marginTop: 40,
    fontSize: 15,
  },
  addButton: {
  },
  promptButton: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
