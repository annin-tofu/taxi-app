import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
// https://reactnativeelements.com/docs/
// reactnativeelements.com 01:06:00  run $ npm install react-native-elements , then $ yarn add react-native-vector-icons, then $ yarn add react-native-safe-area-context
// https://reactnativeelements.com/docs/
import { SafeAreaProvider } from "react-native-safe-area-context";
// https://github.com/software-mansion/react-native-gesture-handler
import "react-native-gesture-handler"; //for swiping back and forth and stuff...
// https://reactnavigation.org/docs/getting-started#installing-dependencies-into-an-expo-managed-project
import { NavigationContainer } from "@react-navigation/native";
//01:17:00
// what is stack?
// it stacks screens up. go to next page(stacks up) and swipe back to go to previous page(pop off the stack)
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "./screens/MapScreen";

// For Map stuff.
// https://reactnavigation.org/docs/getting-started#installing-dependencies-into-an-expo-managed-project $ yarn add react-navigation/native
// https://reactnavigation.org/docs/getting-started#installing-dependencies-into-an-expo-managed-project expo install react-native-screens react-native-safe-area-context 01:15:00

//1) Set up redux  https://redux.js.org
// Redux is a data-layer, that sorrounds the whole app

export default function App() {
  // what is stack?
  // it stacks screens up. go to next page(stacks up) and swipe back to go to previous page(pop off the stack)
  const Stack = createStackNavigator();

  return (
    // store to setup global data-layer
    //Provider is a wrapper, inject the app and and levels the app
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          {/* Stack.Navigator is like Router in React */}
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
      {/* SafeAreaProvider is for Icon to not go to dangerous area */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
