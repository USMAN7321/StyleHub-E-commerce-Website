import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";
import  fetchingSlice from "./Fetching";
import BagSlice from "./BagSlice";

 const Store =configureStore({
    reducer: {
        item: itemSlice.reducer,
        fetching: fetchingSlice.reducer,
        Bag:BagSlice.reducer,
    },
})
export default Store;