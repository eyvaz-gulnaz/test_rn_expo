import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setmodalIsVisible] = useState(false);

  function startAddingGoals() {
    setmodalIsVisible(true);
  }
  function endAddingGoals() {
    setmodalIsVisible(false);
  }
  function handleDeleteItem(id) {
    setGoals((goals) => {
      return goals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="add new goal"
          onPress={startAddingGoals}
          color={"#5e0acc"}
        />
        <GoalInput
          visible={modalIsVisible}
          closeModal={endAddingGoals}
          setGoals={setGoals}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  handleDeleteItem={handleDeleteItem}
                  text={itemData.item.text}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  listContainer: {
    flex: 5,
  },
});
