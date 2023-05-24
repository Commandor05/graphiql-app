import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import queryReducer from './features/query/querySlice';
import variableReducer from './features/query/variableSlice';
import headerReducer from './features/query/headerSlice';
import { rickAndMortyApi } from '../servises/rickandmorty';

export const store = configureStore({
  reducer: {
    user: userReducer,
    query: queryReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    variables: variableReducer,
    headers: headerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(rickAndMortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
