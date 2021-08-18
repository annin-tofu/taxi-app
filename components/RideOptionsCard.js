import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { selectTravelTimeInformation } from "../slices/navSlice";
import { useSelector } from "react-redux";

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null); //031300
  const travelTimeInformation = useSelector(selectTravelTimeInformation); // DO NOT FORGET TO IMPORT "selectTravelTimeInformation" 032351

  // If we have SURGE pricing, this goes up
  const SURGE_CHARGE_RATE = 1.5;

  // const travelConst = (item) => {
  //   return (
  //     (travelTimeInformation?.duration?.value *
  //       SURGE_CHARGE_RATE *
  //       item?.multiplier) /
  //     100
  //   ).toFixed(2);
  // };

  const data = [
    {
      id: "Taxi-M-123",
      title: "Taxi-M",
      multiplier: 1,
      image:
        "https://res.cloudinary.com/dhyagpwyl/image/upload/v1629123343/Taxi-X_hubp3q.png",
    },
    {
      id: "Taxi-XL-456",
      title: "Taxi-XL",
      multiplier: 1.2, //price goes up 120% of X
      image:
        "https://res.cloudinary.com/dhyagpwyl/image/upload/v1629123345/Taxi-XL_gqd2nc.png",
    },
    {
      id: "Taxi-LUX-789",
      title: "Taxi-LUXURY",
      multiplier: 1.75, //price goes up 175% of X
      image:
        "https://res.cloudinary.com/dhyagpwyl/image/upload/v1629123347/Taxi-LUXURY_r8nnuw.png",
    },
  ];

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        {/* ARROW LEFT to navigate back to NavigateCard */}
        {/* Touchable Opacity: touchable button 030000 */}
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={[tw`absolute top-3 left-5 z-50 p-3 rounded-full`]}
        >
          <Icon
            name="chevron-left" //Arrow Left
            type="fontawesome"
          />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          {/* https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript/ */}
          {/* 032430 */}
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              id === selected?.id && "bg-gray-200" //CONDITIONAL STYLE: if the "id" equals(===) the "selected""id" then(&&) apply bg-gray-200 https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript/
            }`}
          >
            {/* For each of car pictures 030600 */}
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-lg font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
            </View>
            <Text style={tw`text-lg`}>
              {/* if in U.K. use below...032900
            // {new Intl.NumberFormat("en-gb", {
            //     style: "currency",
            //     currency: "GBP", */}
              {/* https://blog.leko.jp/post/what-benefit-of-intl-number-format/ jump to "ユースケース：通貨の表記"*/}
              {new Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "USD",
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* TODO >>Enable "Order the Taxi" */}

      {/* <View //031415
        style={tw`mt-auto border-t border-gray-200`}
      >
        <TouchableOpacity
          disabled={!selected} // if there is no(!) "selected" item https://stackoverflow.com/questions/42273853/in-typescript-what-is-the-exclamation-mark-bang-operator-when-dereferenci 031600
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`} // style={tw`bg-gray-300`} is only applied if there is no(!) "selected" item 031600
        >
          <Text style={tw`text-center text-white text-xl`}>
            {/* https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript/ if car is "selected"*/}
      {/* Choose {selected?.title} >>>(delete ">>>" before) */}
      {/* </Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default RideOptionsCard;
