import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "bag",
  initialState: {
    bagItems: []
  },
  reducers: {
    addTobag: (state, action) => {
      // Check if item already exists to avoid duplicates
      const existingItem = state.bagItems.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.bagItems.push(action.payload);
      }
    },
    
    removeFrombag: (state, action) => {
      state.bagItems = state.bagItems.filter(item => item.id !== action.payload);
    },
}});

export const BagActions = BagSlice.actions;
export default BagSlice;
