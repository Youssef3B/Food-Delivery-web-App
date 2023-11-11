import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFavorite } from "../services/apiFavorite";

const API_URL = `http://localhost:3000`;
export const addFavorite = createAsyncThunk(
  "favorites/addFavorite",
  async (favorite) => {
    const res = await fetch(`${API_URL}/Favorite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favorite),
    });
    if (!res.ok) throw new Error(`Failed to add favorite`);
    const data = await res.json();
    return data;
  }
);
export const fetchFavorite = createAsyncThunk(
  "favorites/fetchFavorite",
  async () => {
    const res = await fetch(`${API_URL}/Favorite`);
    if (!res.ok) throw new Error("Failed to get favorite");
    const data = await res.json();
    return data;
  }
);

export const deleteFavorite = createAsyncThunk(
  "favorites/deleteFavorite",
  async (id) => {
    await fetch(`${API_URL}/Favorite/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    // if (!res.ok) throw new Error("Failed to Delete Favorite");
    // const data = await res.json();
    return id;
  }
);
export const deleteAllFavorite = createAsyncThunk(
  "favorites/deleteAllFavorite",
  async (_, { dispatch }) => {
    const res = await fetch(`${API_URL}/Favorite`);
    const data = await res.json();

    for (let item of data) {
      await fetch(`${API_URL}/Favorite/${item.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // Fetch the updated favorite list after deletion
    const updatedFavorites = await dispatch(fetchFavorite());

    return updatedFavorites;
  }
);

const Fav = await getFavorite();

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: Fav,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        // Modify the existing array in place
        return state.filter((item) => item.id !== action.payload);
      })
      .addCase(fetchFavorite.fulfilled, (state, action) => {
        // Update the state with the new data fetched from the server
        return action.payload;
      });
  },
});

export default favoritesSlice.reducer;
