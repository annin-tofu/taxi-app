// _rnfce (react-native functional component w/ export)
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";

const Map = () => {
  return (
    //https://github.com/react-native-maps/react-native-maps
    <MapView
      style={tw`flex-1`} //Unless style is specified, MAP WILL NOT SHOW!!
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default Map;

const styles = StyleSheet.create({});
