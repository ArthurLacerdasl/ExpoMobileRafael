import React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function ScrollViewScreen() {
  const data = [
    "Ferrari",
    "Porsche",
    "Lamborghini",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "McLaren",
    "Bugatti",
    "Chevrolet",
    "Ford",
    "Toyota",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Lista Simples</Text>

      <ScrollView>
        {data.map((item, index) => (
          <View
            key={index}
            style={[
              styles.item,
              { backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff" },
            ]}
          >
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  text: {
    fontSize: 16,
  },
});