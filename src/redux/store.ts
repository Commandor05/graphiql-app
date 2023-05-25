import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import docsReducer from './features/docs/docsSlice';
import { graphqlSlice } from './features/graphql/graphqlSlice';
import queryReducer from './features/query/querySlice';
import variableReducer from './features/query/variableSlice';
import headerReducer from './features/query/headerSlice';
import { rickAndMortyApi } from '../servises/rickandmorty';

export const store = configureStore({
  reducer: {
    user: userReducer,
    query: queryReducer,
    docs: docsReducer,
    variables: variableReducer,
    headers: headerReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    [graphqlSlice.reducerPath]: graphqlSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      rickAndMortyApi.middleware,
      graphqlSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
