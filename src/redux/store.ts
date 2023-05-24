import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import docsReducer from './features/docs/docsSlice';
import { graphqlSlice } from './features/graphql/graphqlSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    docs: docsReducer,
    [graphqlSlice.reducerPath]: graphqlSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(graphqlSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
