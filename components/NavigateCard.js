//rnfce
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"; //02:21:50
import { GOOGLE_MAPS_APIKEY } from "@env"; //02:21:50
import { useDispatch } from "react-redux"; //REDUX  02:27:00
import { setDestination } from "../slices/navSlice"; //REDUX 02:27:00
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";
import { Icon } from "react-native-elements/dist/icons/Icon";

const NavigateCard = () => {
  const dispatch = useDispatch(); //REDUX. 02:26:50
  const navigation = useNavigation(); //02:27:30

  return (
    //flex-1: to flex the whole entire screen
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning!</Text>

      {/* View for GooglePlacesAPI for origin (where from?) 02:21:00 */}
      {/* flex-shrink : https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink */}
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          {/* Debounce: gives certain amount of time (400ms in this case) after finish typing  */}
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            styles={toInputBoxStyles} //StyleSheet styles : as the bottom of this page "const toInputBoxStyles = StyleSheet.create..."
            fetchDetails={true}
            enablePoweredByContainer={false} //hides "Powered by Google" logo 02:24:00
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }} //query has to be specified otherwise, map will not render!!! 02:24:00
            returnKeyType={"search"} //when you hit "Enter" on keyboard, it automatically searches. 02:25:30
            minLength={2} //minLength of search word. here its set to 2 for places like UK,US,etc... 02:25:30
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              ); //REDUX 02:27:00

              navigation.navigate("RideOptionsCard");
              //REDUX 02:27:00
            }}
          />
        </View>

        {/* NavFavorite Component to be displayed 024540 */}
        <NavFavorites />
      </View>

      <View>
        <TouchableOpacity>
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  //StyleSheet styles as opposed to tailwind CSS 02:23:15
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
