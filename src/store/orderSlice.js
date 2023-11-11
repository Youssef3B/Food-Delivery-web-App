import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOrder, getOrder2 } from "../services/apiRestaurant";
import { useNavigate } from "react-router-dom";

const API_URL = `http://localhost:3000`;
export const addOrder = createAsyncThunk(
  "favorites/addFavorite",
  async (order) => {
    const res = await fetch(`${API_URL}/received`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    if (!res.ok) throw new Error(`Failed to add received`);
    const data = await res.json();

    return data;
  }
);

const order = await getOrder2();

const orderSlice = createSlice({
  name: "order",
  initialState: order,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default orderSlice.reducer;
