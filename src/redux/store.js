import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice.js";
import { filtersReducer } from "./filters/slice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const campersPersistConfig = {
  key: "campers",
  storage,
  whitelist: ["isFavorite"],
};
export const store = configureStore({
  reducer: {
    campers: persistReducer(campersPersistConfig, campersReducer),

    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
