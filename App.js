import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";

//1) Set up redux  https://redux.js.org
// Redux is a data-layer, that sorrounds the whole app

export default function App() {
  return (
    // store to setup global data-layer
    //Provider is a wrapper, inject the app and and levels the app
    <Provider store={store}>
      <HomeScreen />
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
