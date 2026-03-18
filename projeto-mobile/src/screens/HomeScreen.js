import React from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text style={{ fontSize:20, textAlign:"center" }}>
        Bem-vindo ao aplicativo. Utilize o menu para acessar as telas de modais e as listas de rolagem.
      </Text>
    </View>
  );
}