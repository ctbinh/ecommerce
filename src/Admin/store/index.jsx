import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import commentsReducer from "./reducers/commentsSlice";

// Store
const store = configureStore({
  reducer: {
    productsReducer,
    commentsReducer,
  },
});

// Export
export default store;
