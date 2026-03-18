import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import ModalTabsNavigator from "./ModalTabsNavigator";
import ScrollTabsNavigator from "./ScrollTabsNavigator";

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Modais" component={ModalTabsNavigator} />
        <Drawer.Screen name="Listas" component={ScrollTabsNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}