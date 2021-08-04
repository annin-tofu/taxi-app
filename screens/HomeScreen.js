// use snippet _rnfes
import React from "react";
//SafeAreaView is for avoiding the topnotch you see on the top of iphones
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  return (
    //SafeAreaView replaced View as with View the message is shown next to the top notch.
    <SafeAreaView style={tw`bg-white h-full`}>
      <Text style={[tw`text-red-500 p-10`]}>I am the homescreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
