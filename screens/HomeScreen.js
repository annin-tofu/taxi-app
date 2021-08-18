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

//REDUX stuff...to push info to data layer. 01:55:00
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavorites from "../components/NavFavorites";

const HomeScreen = () => {
  //to push info to data layer. 01:55:00 "actions" allows you to change the data in the data layer. but we need to "dispatch" the action. think like dispatch is like a gun. it shoots the action into the data layer with the payload which has the information that you want to change/manupilate.
  const dispatch = useDispatch();

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
          // onPress={(data, details = null) => {
          //   console.log(data);
          //   console.log(details);
          // }}01:54:00

          // we will get something like below in console:

          // Object {
          //   "description": "Paris, France",
          //   "matched_substrings": Array [
          //     Object {
          //       "length": 5,
          //       "offset": 0,
          //     },
          //   ],
          //   "place_id": "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
          //   "reference": "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
          //   "structured_formatting": Object {
          //     "main_text": "Paris",
          //     "main_text_matched_substrings": Array [
          //       Object {
          //         "length": 5,
          //         "offset": 0,
          //       },
          //     ],
          //     "secondary_text": "France",
          //   },
          //   "terms": Array [
          //     Object {
          //       "offset": 0,
          //       "value": "Paris",
          //     },
          //     Object {
          //       "offset": 7,
          //       "value": "France",
          //     },
          //   ],
          //   "types": Array [
          //     "locality",
          //     "political",
          //     "geocode",
          //   ],
          // }
          // Object {
          //   "address_components": Array [
          //     Object {
          //       "long_name": "Paris",
          //       "short_name": "Paris",
          //       "types": Array [
          //         "locality",
          //         "political",
          //       ],
          //     },
          //     Object {
          //       "long_name": "Paris",
          //       "short_name": "Paris",
          //       "types": Array [
          //         "administrative_area_level_2",
          //         "political",
          //       ],
          //     },
          //     Object {
          //       "long_name": "Île-de-France",
          //       "short_name": "IDF",
          //       "types": Array [
          //         "administrative_area_level_1",
          //         "political",
          //       ],
          //     },
          //     Object {
          //       "long_name": "France",
          //       "short_name": "FR",
          //       "types": Array [
          //         "country",
          //         "political",
          //       ],
          //     },
          //   ],
          //   "adr_address": "<span class=\"locality\">Paris</span>, <span class=\"country-name\">France</span>",
          //   "formatted_address": "Paris, France",
          //   "geometry": Object {
          //     "location": Object {
          //       "lat": 48.856614,
          //       "lng": 2.3522219,
          //     },
          //     "viewport": Object {
          //       "northeast": Object {
          //         "lat": 48.90214492744648,
          //         "lng": 2.469920840680104,
          //       },
          //       "southwest": Object {
          //         "lat": 48.81557301643713,
          //         "lng": 2.224199027744658,
          //       },
          //     },
          //   },
          //   "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png",
          //   "icon_background_color": "#7B9EB0",
          //   "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_pinlet",
          //   "name": "Paris",
          //   "photos": Array [
          //     Object {
          //       "height": 3024,
          //       "html_attributions": Array [
          //         "<a href=\"https://maps.google.com/maps/contrib/102290545709162313785\">Tomasz Wozniak</a>",
          //       ],
          //       "photo_reference": "Aap_uEDgurNaKPecgEk6Du3cu-WFLvBWbBundWjfL2TBGaQOT9X2blOPIcyv8wsu9Z1pjGzX2xAQqDcz7MU2pNEshjIrAmo7IovWOiY1E3u6auj4ue1iU4pZuPuJDsdmub1zwgDvlsou9xinxoacPc8G5e4ZlqvphMXQDbB0jVJaW3MM4bqj",
          //       "width": 4032,
          //     },
          //     Object {
          //       "height": 3264,
          //       "html_attributions": Array [
          //         "<a href=\"https://maps.google.com/maps/contrib/115704305255597487086\">Carlos Bonfim</a>",
          //       ],
          //       "photo_reference": "Aap_uED20PBcgmzcK5lsX_6z6632RH6bfbngxFAyPwIxejLj9Jypjp2I60qIAq09Yl6Oyc38be7tLwBh1fS-MzBHzX3D9YxCg89Mw8wLX0riw2tcIPhS7T-3r82dV0uUYFVQa54BDEI7iEQZRw9qe_chxTe8TNIIaMaRPD5abhWFFD4hcpRY",
          //       "width": 2448,
          //     },
          //     Object {
          //       "height": 2048,
          //       "html_attributions": Array [
          //         "<a href=\"https://maps.google.com/maps/contrib/106789731291449375789\">Sérgio Gonçalves</a>",
          //       ],
          //       "photo_reference": "Aap_uEDXM8wvrkRKu0stzpIi2VpCekFkmZUyLXYM-XJF4UJGVsFg3UEm3f_wuHmnZXPZ5XiZ-s-5pd4Kz4BXIJrZ3_tFZwwxNtbI3u8FQqeYse-RtSgqToeUqNWY90rru5PKWBaISQnzP5eC0JVNzQuhYtd30jBhBOti1QWAf6r1kX0UVZe0",
          //       "width": 1364,
          //     },
          //     Object {
          //       "height": 3648,
          //       "html_attributions": Array [
          //         "<a href=\"https://maps.google.com/maps/contrib/106045319889151341296\">Nicola Nicholson</a>",
          //       ],
          //       "photo_reference": "Aap_uEAKrawcVrqIgh59QReu92m0kmsNNK2mMapuKObj7c-nZsJxFApBg-ES6FkN4b8fH7b2EkAKGL1GcEwQB-Q7Yq7wwN2uioTyR7ucZg6Mo1iAuYWFP5a9DvOslOwCPDv4hv-r63re2dGmkelyFLbhMmk6fFBBcX8Ph1xh_qwNwpMz0tHi",
          //       "width": 2736,
          //     },
          //     Object {
          //       "height": 2000,
          //       "html_attributions": Array [
          //         "<a href=\"https://maps.google.com/maps/contrib/109260119129193815591\">chene nos</a>",
          //       ],
          //       "photo_reference": "Aap_uECCC1gQiaGf155EQ-HAMSsHg8SgIHI2x5Z2XJc6nSvcOcsjZSSKBaXcfmZh1ZgEHO-1G9PLoMSRTFxu3qqnFQRxBRQz11LhVAqA0SSEp71_oOuQpww8Gzy61aSW-uAkPiCIN8ik9EjaQVK0F_u1uoxiEHcKBvEGzoyopYjqz-tf6uF-",
          //       "width": 3008,
          //     },
          //     Object {
          //       "height": 12000,
          //       "html_attributions": Array [
          //         "<a href=\"https://maps.google.com/maps/contrib/110261516001057470887\">Omar Alkoul</a>",
          //       ],
          //       "photo_reference": "Aap_uEAsFRPp8NQuUWyqGZNpZs4hmlsLrkK76AZWz97pT3u8wIrqkxXD0zuipFvFeUaUFLfWQVQ9GHmsrhe1uhVJwwCNnhsYqmt0BXfTr6Kkj2OkIpJJpgx-uBP17DvhT1SIpmJksfI8TJlaBnq3P_SDGN5aVXvoIUvDita3oME9lNqXI-1O",
          //       "width": 9000,
          //     },
          //     Object {
          //       "height": 4032,
          //       "html_attributions": Array [
          //         "<a href=\"https://maps.google.com/maps/contrib/108423955352082504931\">Dr. Tobias Christian Fischer</a>",
          //       ],
          //       "photo_reference": "Aap_uEC3ywREMN-Qt-yBg4eifGB9viwZDIHSS9_Yn5ZCmKtHltueubmR7_JsvUhh2dTEVzNbq_CUuGvCW3GADfz5fIHSruf-1mQTq0Qit_evJZPYdWAee_b19NpoeECVxZaxtIkQ5QygeUb5jtyeJAIDIPq0PW6qdKIn1ojDk8vIJ_4oDyGc",
          //       "width": 3024,
          //     },
          //     Object {
          //       "height": 3000,
          //       "html_attributions": Array [
          //         "<a href=\"https://maps.google.com/maps/contrib/104263181698732865881\">Jorge Santomé</a>",
          //       ],
          //       "photo_reference": "Aap_uEAukQeTbVZdRkDoSAmwfcKb-lZLhijQu_CG-ib9D6D4Ispy7OOXvpf62qy6TBX7-1_u0m-i8VjCypIG9RHOfKDqhErPMa2Uey8QOjolrKUq5A8LR_Om-UiM1aHugQf47iYq9bYaxuXeSknImy-jtNhupnQuSOJZpLzUsf4VeTqCR5oB",
          //       "width": 4000,
          //     },
          //     Object {
          //       "height": 3968,
          //       "html_attributions": Array [
          //         "<a href=\"https://maps.google.com/maps/contrib/105791322681810088002\">Adekemi Faturoti</a>",
          //       ],
          //       "photo_reference": "Aap_uEBD5LQOHaGm0mI_Kms-q4L_oQq5cmfuvf1we_g8GibAxLcpGOL_Z8gNiyqpxD_0NkmRTSIOO67k-ljngOLjUCTf17aJCLUnlG_1XXqa6G4EfnB7bjO2Yi13wyEUCC4gArOq9GS4LKgE2HQjV6xf3Ru_bVAXYxd5IiIcjYuUaoEDtL6c",
          //       "width": 2976,
          //     },
          //     Object {
          //       "height": 1080,
          //       "html_attributions": Array [
          //         "<a href=\"https://maps.google.com/maps/contrib/118039755482362386171\">Mikheil Chitava</a>",
          //       ],
          //       "photo_reference": "Aap_uECG_u4saZVBAUvlzWAXq4WIZljSGwSdgNfOpTiM1YrE3SrZVeQbErErEHo1MdU6tasLBC2Jl_NJoxgEJbzlH-rVpzgcAssG9z3or7fDfgbhRVf_HfN9etSbLE7v-OMygMjYsPMQuY3H3DtsZsmiUo7uhwGgSyqRV2ky439EdgbJZGVR",
          //       "width": 864,
          //     },
          //   ],
          //   "place_id": "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
          //   "reference": "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
          //   "types": Array [
          //     "locality",
          //     "political",
          //   ],
          //   "url": "https://maps.google.com/?q=Paris,+France&ftid=0x47e66e1f06e2b70f:0x40b82c3688c9460",
          //   "utc_offset": 120,
          //   "vicinity": "Paris",
          //   "website": "http://www.paris.fr/",
          onPress={(data, details = null) => {
            dispatch(
              //01:57:00
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true} //01:54:00
          enablePowerByContainer={false} // "powered by Google" will be gone
          minLength={2} //minimum length set to 2 for UK/US/etc...
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch" //this allow to search for different places in Google's directory
          debounce={400} // only after stop typing in the input for 400ms, it will execute search. (you do not want to fire search every single type)
        />

        <NavOptions />

        {/* TODO>> Add NavFavourites?
        <NavFavorites /> */}
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
