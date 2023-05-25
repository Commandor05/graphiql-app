import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const initialState = {
  variables: '',
};

const variablesSlice = createSlice({
  name: 'variables',
  initialState,
  reducers: {
    setVariables(state, action: PayloadAction<string>) {
      state.variables = action.payload;
    },
  },
});

export default variablesSlice.reducer;
export const getVariables = (state: RootState) => state.variables.variables;
export const { setVariables } = variablesSlice.actions;
