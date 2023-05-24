import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type docsState = {
  docsPath: string[];
};

const initialState: docsState = {
  docsPath: ['Docs'],
};

const docsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    addedPathFragment(state, action: PayloadAction<string>) {
      state.docsPath.push(action.payload);
    },
    removedPathFragment(state) {
      if (state.docsPath.length > 1) state.docsPath.pop();
    },
  },
});

export const { addedPathFragment, removedPathFragment } = docsSlice.actions;
export default docsSlice.reducer;
