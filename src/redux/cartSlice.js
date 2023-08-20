// redux/cartSlice.js
import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    items: [],
    totalQuantity: 0
  },
  reducers: {
    addItem: (state, action) => {
        const newItem = action.payload;
        console.log("newitem:", newItem);
  
        const existingItem = state.items.find((item) => item.id === newItem.id);
        // console.log("text:", current(existingItem));
        state.totalQuantity++;
        if (!existingItem) {
          state.items.push({ ...newItem, quantity: 1, total: newItem.price });
          // console.log(current(state));
        } else {
          existingItem.quantity++;
        //   existingItem.total = existingItem.total + newItem.price;
          // console.log(current(state));
        }
    },
    removeItem: (state, action) => {
    //   return state.filter(item => item.id !== action.payload);
    const {id} = action.payload;
      console.log("payload", action.payload);
      const existingItem = state.items.find((item) => item.id === id);
      console.log("existingitem",current(existingItem))
      state.totalQuantity--;
      // console.log("existing in remove", state.totalQuantity);
      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        console.log(state.items);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
        // existingItem.total =- existingItem.price;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice;
