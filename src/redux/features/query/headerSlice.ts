import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const initialState = {
  headers: '',
};

const headerSlice = createSlice({
  name: 'headers',
  initialState,
  reducers: {
    setHeaders(state, action: PayloadAction<string>) {
      state.headers = action.payload;
    },
  },
});

export default headerSlice.reducer;
export const getHeaders = (state: RootState) => state.headers.headers;
export const { setHeaders } = headerSlice.actions;
