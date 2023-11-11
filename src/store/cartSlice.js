import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  length: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    IncreassItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    DecreassItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      const iszero = false;
      if (item.quantity === 1) {
        iszero = true;
      }
      if (iszero === false) {
        item.quantity--;
      }

      item.totalPrice = item.quantity * item.unitPrice;
    },
    DeleteAllCard(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  IncreassItemQuantity,
  DecreassItemQuantity,
  DeleteAllCard,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotal = (state) =>
  state.cart.cart.reduce((sum, obj) => sum + obj.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
