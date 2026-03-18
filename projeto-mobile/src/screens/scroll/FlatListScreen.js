import React from "react";
import { FlatList, Text, View } from "react-native";

export default function FlatListScreen() {
  const data = Array.from({ length: 30 }, (_, i) => ({
    id: i.toString(),
    nome: `Produto ${i + 1}`,
  }));

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <View
          style={{
            padding: 15,
            borderBottomWidth: 1,
            borderColor: "#ccc",
            backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
          }}
        >
          <Text style={{ fontSize: 16 }}>{item.nome}</Text>
        </View>
      )}
      ListHeaderComponent={
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            padding: 10,
            textAlign: "center",
          }}
        >
          Lista de Produtos
        </Text>
      }
    />
  );
}