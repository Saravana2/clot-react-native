import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart-products",
  initialState: {
    datas: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let newData = action.payload.data;
      let existingData = state.datas.find(
        (item) => item.product.id === newData.id
      );
      if (existingData === undefined) {
        state.datas.push({ product: newData, count: 1 });
      } else {
        existingData.count = existingData.count + 1;
      }
    },
    removeFromCart: (state, action) => {
      let id = action.payload.id;
      let existingData = state.datas.find((item) => item.product.id === id);
      if (existingData !== undefined) {
        if (existingData.count === 1) {
          const index = state.datas.indexOf((item) => item.product.id === id);
          state.datas.splice(index, 1);
        } else {
          existingData.count = existingData.count - 1;
        }
      }
    },
    clearCart: (state, action) => {
      state.datas.splice(0, state.datas.length);
    },
  },
});

export const addToCart = cartSlice.actions.addToCart;
export const removeFromCart = cartSlice.actions.removeFromCart;
export const clearCart = cartSlice.actions.clearCart;
export default cartSlice.reducer;