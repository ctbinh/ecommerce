import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";

// Store
const store = configureStore({
  reducer: {
    productsReducer,
  },
});

// Export
export default store;
