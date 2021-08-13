// _rnfce (react-native functional component w/ export)
import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin, selectDestination } from "../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null); //02:30:00

  // useEffect: this code RE-RUNS everytime "origin" and "destination" changes 02:31:00
  useEffect(() => {
    //if there is no origin or destination
    if (!origin || !destination) return;
    //Zoom & Fit to the markers for both "Origin" and "Destination".
    // fitToSuppliedMarkers: https://codehero.jp/google-maps/39575037/zoom-to-specified-markers-react-native-maps https://github.com/react-native-maps/react-native-maps/blob/master/docs/mapview.md#methods  02:34:50
    //(["origin", ""])
    mapRef.current.fitToSuppliedMarkers(
      [
        "origin", //refers to "identifier" in for origin Marker
        "destination", //refers to "identifier" in for destination Marker
      ],
      {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      }
    );
  }, [origin, destination]);

  return (
    //https://github.com/react-native-maps/react-native-maps
    <MapView
      ref={mapRef} //02:30:00
      style={tw`flex-1`} //Unless style is specified, MAP WILL NOT SHOW!!
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {/* If you have "Origin" and "Destination", then render MapViewDirections Component*/}
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY} //If you have "origin" and "destination", then render <MapViewDirections /> 02:30:00
          strokeWidth={3} //stroke here means "trip route" between origin and destination https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width
          strokeColor="black"
        />
      )}

      {/* ORIGIN RED PIN MARKER */}
      {/* "?" means, ONLY IF there is "origin"  */}
      {origin?.location && (
        // Marker for origin red pin
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {/* DESTINATION RED PIN MARKER */}
      {destination?.location && (
        // Marker for destination red pin //02:30:00
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
