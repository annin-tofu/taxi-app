import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";

//1) Set up redux  https://redux.js.org

export default function App() {
  return (
    // store to setup global data-layer
    //Provider is a wrapper, inject the app and and levels the app
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Lets make taxi-app</Text>
      </View>
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
