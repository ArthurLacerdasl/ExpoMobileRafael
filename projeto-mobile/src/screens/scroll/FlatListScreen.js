import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function FlatListScreen() {
  const [expandedId, setExpandedId] = useState(null);

  const data = [
    {
      id: "1",
      nome: "Notebook Asus Vivobook",
      descricao: "Notebook com 16GB RAM e SSD 512GB, ideal para estudos e trabalhos diários.",
    },
    {
      id: "2",
      nome: "Monitor Samsung Odyssey G7",
      descricao: "Monitor 37 polegadas, 4K com excelente qualidade de imagem.",
    },
    {
      id: "3",
      nome: "Teclado Mecânico Redragon Kumara",
      descricao: "Teclado com iluminação RGB e alta durabilidade.",
    },
    {
      id: "4",
      nome: "Mouse Gamer Logitech G502",
      descricao: "Mouse com alta precisão e design ergonômico.",
    },
    {
      id: "5",
      nome: "Headset HyperX Cloud II",
      descricao: "Headset com excelente qualidade de som e conforto.",
    },
  ];

  function toggleItem(id) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        extraData={expandedId}
        keyExtractor={(item) => item.id}

        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => toggleItem(item.id)}>
            <View
              style={[
                styles.item,
                { backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff" },
              ]}
            >
              <Text style={styles.title}>{item.nome}</Text>

              {expandedId === item.id && (
                <Text style={styles.description}>
                  {item.descricao}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        )}

        ListHeaderComponent={
          <Text style={styles.mainTitle}>Lista por Descrição</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
    color: "#333",
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  title: {
    fontSize: 16,
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
  },
});