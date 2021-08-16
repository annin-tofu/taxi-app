import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native"; //030100

const RideOptionsCard = () => {
  const navigation = useNavigation(); //030100

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")} //when pressed, the page will navigate you to NavigateCard 030130
          style={[tw`absolute top-3 left-5 z-50 p-3 rounded-full`]}
        >
          <Icon
            name="chevron-left" //chevron-left: left arrow
            type="fontawesome"
          />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a ride</Text>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
