import React, { useState } from "react";
import {
  SectionList,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function SectionListScreen() {
  const [expandedSections, setExpandedSections] = useState([]);

  const sections = [
    { title: "Brasileirão Série A", data: ["Athletico Paranaense", "Atlético Goianiense", "Atlético Mineiro", "Bahia", "Botafogo", "Bragantino", "Corinthians", "Coritiba", "Cruzeiro", "Cuiabá", "Flamengo", "Fluminense", "Fortaleza", "Grêmio", "Internacional", "Juventude", "Palmeiras", "Santos", "São Paulo", "Vasco da Gama"] },
    { title: "Brasileirão Série B", data: ["Amazonas", "América Mineiro", "Avaí", "Botafogo-SP", "Ceará", "Chapecoense", "CRB", "Goiás", "Guarani", "Ituano", "Londrina", "Mirassol", "Novorizontino", "Operário-PR", "Ponte Preta", "Sampaio Corrêa", "Sport", "Tombense", "Vila Nova", "Vitória"] },
    { title: "Brasileirão Série C", data: ["ABC", "Altos", "Aparecidense", "Brusque", "Caxias", "Confiança", "CSA", "Ferroviária", "Figueirense", "Floresta", "Manaus", "Náutico", "Paysandu", "Remo", "São Bernardo", "São José-RS", "Volta Redonda", "Ypiranga-RS", "Botafogo-PB", "América-RN"] },
  ];

  function toggleSection(title) {
    if (expandedSections.includes(title)) {
      setExpandedSections(expandedSections.filter((t) => t !== title));
    } else {
      setExpandedSections([...expandedSections, title]);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections.map((section) => ({
          ...section,
          data: expandedSections.includes(section.title)
            ? section.data
            : [], // 👈 só mostra se estiver expandido
        }))}

        keyExtractor={(item, index) => index.toString()}

        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}

        renderSectionHeader={({ section }) => (
          <TouchableOpacity onPress={() => toggleSection(section.title)}>
            <View style={styles.header}>
              <Text style={styles.headerText}>{section.title}</Text>
            </View>
          </TouchableOpacity>
        )}

        ListHeaderComponent={
          <Text style={styles.mainTitle}>Lista por Categorias</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
  },
  header: {
    backgroundColor: "#4CAF50",
    padding: 15,
    marginTop: 10,
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  item: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  itemText: {
    fontSize: 16,
  },
});