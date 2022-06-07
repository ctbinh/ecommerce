import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import commentsReducer from "./reducers/commentsSlice";
import usersReducer from "./reducers/usersSlice";

// Store
const store = configureStore({
  reducer: {
    productsReducer,
    commentsReducer,
    usersReducer,
  },
});

// Export
export default store;
