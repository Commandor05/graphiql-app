import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import queryReducer from './features/query/querySlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    query: queryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
