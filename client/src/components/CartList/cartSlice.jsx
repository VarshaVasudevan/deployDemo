// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
   // Array to store cart items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId } = action.payload;
      const existingItem = state.cart.find((item) => item.productId === productId);

      if (existingItem) {
        // If item already exists, update quantity
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add it to the cart
        state.cart.push({ productId, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action) => {
      const { productId } = action.payload;
      const existingItem = state.cart.find(item => item.productId === productId);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      const existingItemIndex = state.cart.findIndex((item) => item.productId === productId);

      if (existingItemIndex !== -1) {
        // If item exists, decrease quantity, remove if quantity is zero
        const existingItem = state.cart[existingItemIndex];
        existingItem.quantity -= 1;

        if (existingItem.quantity === 0) {
          state.cart.splice(existingItemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      // Clear the entire cart
      state.cart = [];
    },
  },
});

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;
export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
