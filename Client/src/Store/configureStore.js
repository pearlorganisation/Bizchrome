import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../reducers/rootReducer";
import authReducer from "../features/slices/authSlice";

import locationReducer from "../features/slices/CommonSlices/Location/location";

import collegeReducer from "../features/slices/CommonSlices/Location/location";

const store = configureStore({
  reducer: {
    auth: authReducer,
    location: locationReducer,
    college: collegeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
