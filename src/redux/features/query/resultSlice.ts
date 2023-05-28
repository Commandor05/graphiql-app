import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { rickAndMortyApi } from '../../../servises/rickandmorty';
import { isFetchBaseQueryError } from '../../../servises/helpers';

const initialState = {
  result: '',
  isFetching: false,
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResult(state, action: PayloadAction<string>) {
      state.result = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      rickAndMortyApi.endpoints.getQueryByGraphQL.matchFulfilled,
      (state, action: PayloadAction<string>) => {
        state.isFetching = false;
        state.result = JSON.stringify(
          action.payload ? { data: action.payload } : undefined,
          null,
          '\t'
        );
      }
    );
    builder.addMatcher(
      rickAndMortyApi.endpoints.getQueryByGraphQL.matchRejected,
      (state, { payload }) => {
        state.isFetching = false;
        state.result = JSON.stringify(
          isFetchBaseQueryError(payload) ? { errors: payload.data.response.errors } : { payload },
          null,
          '\t'
        );
      }
    );
    builder.addMatcher(rickAndMortyApi.endpoints.getQueryByGraphQL.matchPending, (state) => {
      state.isFetching = true;
    });
  },
});

export default resultSlice.reducer;
export const getResult = (state: RootState) => state.result;
export const { setResult } = resultSlice.actions;
