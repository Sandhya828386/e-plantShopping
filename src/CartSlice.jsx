import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
  },

  reducers: {
    // Add a product to the cart
    addItem: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
        });
      }
    },

    // Remove a product from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // Update the quantity of a product
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find(
        (cartItem) => cartItem.id === id
      );

      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
