import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../config/api";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_BASE_URL}get-all-cars/`);
      // const res = await fetch(`${API_BASE_URL}get-all-cars-simulate-error/`);
      const data = await res.json();
      if (!res.ok) {
        // error message din backend
        throw new Error(data.message || "Failed to fetch cars");
      }
      return data;
    } catch (err) {
      console.log(err)
      return rejectWithValue(err.message ?? "Unknown error");
    }
  }
);
