import axios from "axios";

let store;
export const injectStore = (_store) => {
  store = _store;
};

// Creating new axios instance to perform DRY
export const instance = axios.create({
  baseURL: `${
    import.meta.env.VITE_WORKING_ENVIRONMENT === "development"
      ? import.meta.env.VITE_API_BASE_URL_LOCAL
      : import.meta.env.VITE_API_BASE_URL_PRODUCTION
  }`,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  (response) => {
    return response;
  },

  // Any status codes that falls outside the range of 2xx cause this function to trigger
  async (error) => {
    let errorMessage = "";
    // Do something with response error
    let originalRequest = error.config;

    //This generates error message
    switch (Number(error.response.status)) {
      default:
        errorMessage =
          error.response.data.message ||
          "Sorry, something went wrong. Please try again later.";
    }
    return Promise.reject(errorMessage);
  }
);

// ------------------------------------------- THE END -------------------------------------------
