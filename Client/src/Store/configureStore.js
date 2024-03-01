import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../reducers/rootReducer";
import authReducer from "../features/slices/authSlice";
import locationReducer from "../features/slices/Location/location";

const store = configureStore({
  reducer: {
    auth: authReducer,
    location: locationReducer,
  },
});

export default store;
