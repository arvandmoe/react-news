import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { guardianApi } from "@/services/guardian-api";
import { newsapiApi } from "@/services/newsapi-api";
import { nytimesApi } from "@/services/nytimes-api";
import news from "./news-slice";

export const createStore = (
  options?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
  configureStore({
    reducer: {
      [guardianApi.reducerPath]: guardianApi.reducer,
      [newsapiApi.reducerPath]: newsapiApi.reducer,
      [nytimesApi.reducerPath]: nytimesApi.reducer,
      news,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(guardianApi.middleware)
        .concat(newsapiApi.middleware)
        .concat(nytimesApi.middleware),
    ...options,
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
