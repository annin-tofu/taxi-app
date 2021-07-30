// use snippet _rnfce
import React from "react";
//SafeAreaView is for avoiding the topnotch you see on the top of iphones
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text>I am the homescreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: white,
  },
});
