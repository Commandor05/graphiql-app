import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import queryReducer from './features/query/querySlice';
import { rickAndMortyApi } from '../servises/rickandmorty';

const rootReducer = combineReducers({
  user: userReducer,
  query: queryReducer,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
