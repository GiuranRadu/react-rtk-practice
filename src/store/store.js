import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import carsReducer from "./cars/carsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cars: carsReducer,
  },
});