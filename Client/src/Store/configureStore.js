import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../reducers/rootReducer";
import authReducer from "../features/slices/authSlice";
import locationReducer from "../features/slices/CommonSlices/Location/location";
import collegeReducer from "../features/slices/CommonSlices/Location/location";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { encryptTransform } from "redux-persist-transform-encrypt";

// ---------------------------------------------------------

const persistConfig = {
  key: "bizchrome",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: `${import.meta.env.VITE_APP_REDUX_PERSIST_SECRET_KEY}`,
      onError: (err) => {
        //console.log("Redux Persist Encryption Failed: ", err);
      },
    }),
  ],
  // if you do not want to persist this part of the state
  // blacklist: ["omitedPart"],
};

const reducer = combineReducers({
  auth: authReducer,
  location: locationReducer,
  college: collegeReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "shop/clearReduxStoreData") {
    state = undefined;
    localStorage.clear();
    sessionStorage.clear();
  }
  return reducer(state, action);
};

// This ensures your redux state is saved to persisted storage whenever it changes
// we pass this to the store
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.VITE_WORKING_ENVIRONMENT !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
