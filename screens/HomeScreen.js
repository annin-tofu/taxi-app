// use snippet _rnfes
import React from "react";
//SafeAreaView is for avoiding the topnotch you see on the top of iphones
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";

//Google Places API https://www.npmjs.com/package/react-native-google-places-autocomplete

//Google Directions API

//Distance Matrix API.

//GCP 01:29:00 Enable Google Directions API/Google Places API/Distance Matrix API.

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import GOOGLE_MAPS_APIKEY from .env file (NOTE: import from "@env" not ".env")
import { GOOGLE_MAPS_APIKEY } from "@env";

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

        {/* Render GooglePlacesAutocomplete https://www.npmjs.com/package/react-native-google-places-autocomplete */}
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          // styling 01:51:00
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch" //this allow to search for different places in Google's directory
          debouce={400} // only after stop typing in the input for 400ms, it will execute search. (you do not want to fire search every single type)
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
