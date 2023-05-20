import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const initialState = {
  query: `query{
    characters {
      results {
        id,
        name
      }
    }
  }`,
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});

export default querySlice.reducer;
export const getQuery = (state: RootState) => state.query.query;
export const { setQuery } = querySlice.actions;
