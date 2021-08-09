// use snippet _rnfes
import React from "react";
//SafeAreaView is for avoiding the topnotch you see on the top of iphones
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    //SafeAreaView replaced View as with View the message is shown next to the top notch.
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://res.cloudinary.com/dhyagpwyl/image/upload/v1628492079/taxi-vehicle-sign-logo-04DAE3D598-seeklogo.com_bmbkg4.png",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
