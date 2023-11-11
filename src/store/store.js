import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorites: favoriteSlice,
    search: searchSlice,
  },
});

export default store;
