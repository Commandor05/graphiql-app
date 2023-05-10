import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../types/User';

type UserState = User;

const initialState: UserState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticatedUser(state, action: PayloadAction<User>) {
      return { ...state, ...action.payload, isAuthenticated: true };
    },
    logedOutUser() {
      return { isAuthenticated: false };
    },
  },
});

export const { authenticatedUser, logedOutUser } = userSlice.actions;
export default userSlice.reducer;
