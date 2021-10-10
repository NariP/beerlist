import { createSlice } from '@reduxjs/toolkit';

const name = 'beers';
const initialState = {
  beersInfo: [],
  beersLoading: false,
  beersError: null,
};
export const beersSlice = createSlice({
  name,
  initialState,
  reducers: {
    beersRequest: state => {
      state.beersLoading = true;
      state.beersError = null;
    },
    beersRequestSuccess: (state, action) => {
      state.beersLoading = false;
      state.beersInfo = action.payload.data;
    },
    beersRequestFailure: (state, action) => {
      state.beersLoading = false;
      state.beersError = action.payload;
    },
  },
});
export const { beersRequest, beersRequestFailure, beersRequestSuccess } =
  beersSlice.actions;
export const getBeers = state => state.beers.beersInfo;
export const getBeerRequestState = state => state.beers.beersLoading;
