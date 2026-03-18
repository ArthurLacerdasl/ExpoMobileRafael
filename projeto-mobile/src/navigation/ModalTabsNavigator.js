import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ModalSlideScreen from "../screens/modals/ModalSlideScreen";
import ModalFadeScreen from "../screens/modals/ModalFadeScreen";
import ModalNoneScreen from "../screens/modals/ModalNoneScreen";

const Tab = createBottomTabNavigator();

export default function ModalTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Modal Slide" component={ModalSlideScreen} />
      <Tab.Screen name="Modal Fade" component={ModalFadeScreen} />
      <Tab.Screen name="Modal None" component={ModalNoneScreen} />
    </Tab.Navigator>
  );
}