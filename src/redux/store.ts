import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ganttApi } from "services";
import { ganttReducer } from "./slices";

const rootReducer = combineReducers({
  [ganttApi.reducerPath]: ganttApi.reducer,
   gantt: ganttReducer,
});

const setupStore = ()=> {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({serializableCheck: false}).concat(ganttApi.middleware),
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];

export const store = setupStore();
