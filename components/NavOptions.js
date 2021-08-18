// rnfes (react native functional components with export) for snippet 55:00

import React from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
//if you press(click), will take(navigate) you to another page 01:25:00
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

// for list of items, better to have "key". this case "id"
const data = [
  {
    id: "123",
    title: "Get a ride",
    image:
      "https://res.cloudinary.com/dhyagpwyl/image/upload/v1628492550/UberX_jmquwc.png",
    screen: "MapScreen", //change in future > this line means, If you click it goes to screen named "MapScreen"
  },
  // TO DO>> Add "EATS TAB"??
  // {
  //   id: "456",
  //   title: "Order food",
  //   image:
  //     "https://res.cloudinary.com/dhyagpwyl/image/upload/v1628492553/4feb745209cf7aba57463b20d27b61e3_khiljv.png",
  //   screen: "EatsScreen", //change in future > this line means, If you click it goes to screen named "MapScreen"
  // },
];

const NavOptions = () => {
  //if you press(click), will take(navigate) you to another page 01:25:00
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin); //this is for <Touchabled Opacity... disabled={!origin} ></Touchabled>02:13:10

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
          disabled={!origin} //TouchabledOpacity is disabled when the is "not" a origin https://www.google.com/search?q=javascript+exclamation+mark&client=safari&rls=en&sxsrf=ALeKk03ocHxEyC_fSTAL42oD0aWlq0h4XQ%3A1628852128163&ei=oE8WYZyvCc-mmAXr9qMI&oq=%21+javascript+exclama&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCAAQywEyBQgAEIAEMgUIABDLATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAEEcQsAM6BAgAEEM6BQgAEJECSgQIQRgAUNI2WJdIYMNOaANwAngAgAHNAYgBuwySAQUwLjkuMZgBAKABAcgBCMABAQ&sclient=gws-wiz "In Javascript, the exclamation mark (“!”) symbol, called a “bang,” is the logical “not” operator. Placed in front of a boolean value it will reverse the value, returning the opposite." 02:12:00
        >
          <View style={tw`${!origin && "opacity-20"}`}>
            {/* if there is "no"(!) origin, then "opacity-20" is rendered. Also $ to make it JSX 02:12:50   */}
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
