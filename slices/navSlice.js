// https://redux.js.org/tutorials/quick-start#create-a-redux-state-slice jump to "Create a Redux State Slice" and features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //origin: where you are from
  origin: null,
  // destination: where you want to go
  destination: null,
  //time takes to get to A to B
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  //data-layer name
  name: "nav",
  initialState,
  //within Reducer, there are 3 actions "setOrigin", "setDestination", and "setTravelTimeInformation",
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

//39:14, Destructuring.
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

//40:00
//Selectors . to grab information from a data layer

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
