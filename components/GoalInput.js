import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

export default function GoalInput(props) {
  const [newGoal, setNewGoal] = useState("");

  function handleGoalInput(enteredGoal) {
    setNewGoal(enteredGoal);
  }
  function handleAddButton() {
    if (newGoal.trim().length === 0) return;
    props.setGoals((prevGoals) => [
      ...prevGoals,
      { text: newGoal, id: Math.random().toString() },
    ]);
    setNewGoal("");
    props.closeModal();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal0.png")}
        />
        <TextInput
          style={styles.input}
          onChangeText={handleGoalInput}
          placeholder="type your goal"
          value={newGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.closeModal}
              color={"#f31282"}
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={handleAddButton}
              title="add goal"
              color={"#5e0acc"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginBottom: 24,
    backgroundColor: "#311b6b",
  },
  input: {
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    borderWidth: 1,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    marginHorizontal: 8,
    width: 100,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
