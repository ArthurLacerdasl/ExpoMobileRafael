import React from "react";
import { ScrollView, Text, View, Button } from "react-native";

export default function ScrollViewScreen() {
  return (
    <View style={{ flex: 1 }}>
      
      <View style={{ padding: 10 }}>
        <Button title="Exemplo ScrollView" onPress={() => {}} />
      </View>

      <ScrollView>
        {Array.from({ length: 30 }).map((_, index) => (
          <View
            key={index}
            style={{
              padding: 15,
              borderBottomWidth: 1,
              borderColor: "#ccc",
              backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
            }}
          >
            <Text style={{ fontSize: 16 }}>
              Item Scroll {index + 1}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}