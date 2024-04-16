import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { encryptTransform } from "redux-persist-transform-encrypt";
import jobsReducer from "../features/slices/jobsSlice";
import locationReducer from "../features/slices/CommonSlices/Location/location";
import collegeReducer from "../features/slices/CommonSlices/Colleges/Colleges";
import authReducer from "../features/slices/authSlice";
import businessReducer from "../features/slices/businessSlice";

// Combine your individual reducers here
const rootReducer = combineReducers({
  jobs: jobsReducer,
  auth: authReducer,
  location: locationReducer,
  college: collegeReducer,
  business: businessReducer,
});

// Custom root reducer handling a clear action
const rootReducerWithClear = (state, action) => {
  if (action.type === "shop/clearReduxStoreData") {
    state = undefined;
    localStorage.clear();
    sessionStorage.clear();
  }
  return rootReducer(state, action);
};

// Redux-persist configuration
const persistConfig = {
  key: "BizChrome",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: `${import.meta.env.VITE_APP_REDUX_PERSIST_SECRET_KEY}`,
      onError: (err) => {
        // Handle encryption errors if any
      },
    }),
  ],
};

// Persisted root reducer
const persistedReducer = persistReducer(persistConfig, rootReducerWithClear);

// Configure and create the Redux store
const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.VITE_WORKING_ENVIRONMENT == "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
