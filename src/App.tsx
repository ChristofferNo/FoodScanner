/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screens from "./screens";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={Screens.HomeScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="ScanScreen"
          component={Screens.ScanScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="IngredientScreen"
          component={Screens.IngredientScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
