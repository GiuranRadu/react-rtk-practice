import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { fetchCars } from "./carsThunks";

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    clearCarsError(state) {
      state.error = null;
    },
    selectCar(state, action) {
      state.currentCar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cars = action.payload?.results ?? action.payload ?? [];
        state.totalCars = action.payload?.count ?? state.cars.length;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to fetch cars";
      });
  },
});

export const { clearCarsError, selectCar } = carsSlice.actions;
export default carsSlice.reducer;