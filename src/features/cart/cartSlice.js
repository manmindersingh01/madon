import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],  // [{ id, name, size, quantity, price }]
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, name, size, quantity, price } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id && item.size === size);

      if (existingItemIndex >= 0) {
        // Update quantity if item already exists
        state.items[existingItemIndex].quantity += quantity;
      } else {
        // Add new item
        state.items.push({ id, name, size, quantity, price });
      }

      state.totalQuantity += quantity;
      state.totalPrice += price * quantity;
    },
    removeItem(state, action) {
      const { id, size } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id && item.size === size);

      if (existingItemIndex >= 0) {
        const item = state.items[existingItemIndex];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;

        // Remove item from array
        state.items.splice(existingItemIndex, 1);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
