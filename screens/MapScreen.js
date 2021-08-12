import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
// import React-Native-Mapview https://github.com/react-native-maps/react-native-maps 02:03:00
import MapView from "react-native-maps";

const MapScreen = () => {
  return (
    <View>
      <Text>Here is the map stuff...</Text>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
