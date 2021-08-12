// rnfes (react native functional components with export) for snippet 55:00

import React from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
//if you press(click), will take(navigate) you to another page 01:25:00
import { useNavigation } from "@react-navigation/native";

// for list of items, better to have "key". this case "id"
const data = [
  {
    id: "123",
    title: "Get a ride",
    image:
      "https://res.cloudinary.com/dhyagpwyl/image/upload/v1628492550/UberX_jmquwc.png",
    screen: "MapScreen", //change in future > this line means, If you click it goes to screen named "MapScreen"
  },
  {
    id: "456",
    title: "Order food",
    image:
      "https://res.cloudinary.com/dhyagpwyl/image/upload/v1628492553/4feb745209cf7aba57463b20d27b61e3_khiljv.png",
    screen: "EatsScreen", //change in future > this line means, If you click it goes to screen named "MapScreen"
  },
];

const NavOptions = () => {
  //if you press(click), will take(navigate) you to another page 01:25:00
  const navigation = useNavigation();

  return (
    //whenever you have a list of items that you want to render it out in RN. Thisto render it out optimally, you use FlatList. FlatList is a one components. it takes some data. in this case, an array of data. then we use RenderItem, it goes through the list and for everysingle time you see that item, it render out what ever you try to render it out.

    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal //   horizontal: RN by default set it as vertical (list of items) 55:00
      renderItem={({ item }) => (
        //   TouchableOpacity: it is like a button. active(when clicked) it changes opacity
        <TouchableOpacity
          //if you press(click), will take(navigate) you to another page 01:25:00
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }} //resizeMode: "contain" to keep original aspect ratio
              source={{ uri: item.image }} //Do not use "src". in RN, you use "source".
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              type="antdesign"
              color="white"
              name="arrowright"
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            />
          </View>
        </TouchableOpacity>
      )} //and for each items what should we do. it is defined here in arrow function.
    />
  );
};

export default NavOptions;
