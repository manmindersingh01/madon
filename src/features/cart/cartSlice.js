import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],  // [{ id, name, size, quantity, price, imageUrl }]
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, name, size, quantity, price, imageUrl } = action.payload;

      // Ensure price is converted to a number if it's a string
      const priceAsNumber = parseFloat(price);

      const existingItemIndex = state.items.findIndex(item => item.id === id && item.size === size);

      if (existingItemIndex >= 0) {
        // Update quantity if item already exists
        state.items[existingItemIndex].quantity += quantity;
        console.log("adding in previous");

      } else {
        // Add new item
        console.log("adding new");
        state.items.push({ id, name, size, quantity, price: priceAsNumber, imageUrl });
      }

      state.totalQuantity += quantity;
      state.totalPrice += priceAsNumber * quantity;
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
    incrementItem(state, action) {
      const { id, size } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id && item.size === size);

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += state.items[existingItemIndex].price;
      }
    },
    decrementItem(state, action) {
      const { id, size } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id && item.size === size);

      if (existingItemIndex >= 0 && state.items[existingItemIndex].quantity > 1) {
        state.items[existingItemIndex].quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= state.items[existingItemIndex].price;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, incrementItem, decrementItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
