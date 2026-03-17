import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../config/api";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_BASE_URL}get-all-cars/`);
      if (!res.ok) throw new Error("Failed to fetch cars");
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message ?? "Unknown error");
    }
  }
);
