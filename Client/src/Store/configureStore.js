import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../reducers/rootReducer";
import authReducer from "../features/slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
