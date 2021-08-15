// NavFavourites for saved address for frequently used places. i.e. "Home" and "Work"

import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "123",
    icon: "home", //as specified in react-native-elements's ICON
    location: "Home",
    destination: "4-1-1 Ayase, Adachi-ku, Tokyo Japan",
  },
  {
    id: "456",
    icon: "briefcase", //as specified in react-native-elements's ICON
    location: "Work",
    destination: "3-2-2 Marunouchi, Chiyoda-ku, Tokyo Japan",
  },
];

const NavFavorites = () => {
  const dispatch = useDispatch();

  const handlePress = () => {};

  //02:38:00
  return (
    <FlatList
      data={data}
      //previously,
      //  renderItem={({ item: { location, destination, icon } }) => (
      //instead use below and use {item.location} instead of {location}, and also {item.destination} instead of {destination}
      //   this will stop getting error
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`flex-row items-center py-3`}
          onPress={handlePress}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            {/* previously, above was set as
      //  renderItem={({ item: { location, destination, icon } }) => ( ...
      // but changed to 
      renderItem={({ item }) => (
          // and,
      // {item.location} instead of {location}, and also {item.destination} instead of {destination}
      this will stop getting error
   */}
            <Text style={tw`font-bold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
