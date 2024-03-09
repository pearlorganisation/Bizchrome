import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/configureStore.js";
import { persistStore } from "redux-persist";
import { injectStore } from "./services/axiosInterceptors.js";
import { PersistGate } from "redux-persist/integration/react";


//Simulation of context api
// const { loggedInUserData, isUserLoggedIn } = useAuth();
injectStore(store);
let persistor = persistStore(store);
//

ReactDOM.createRoot(document.getElementById("root")).render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <App />

    </PersistGate>
  </Provider>

);
