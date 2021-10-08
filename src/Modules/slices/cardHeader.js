import { createSlice } from '@reduxjs/toolkit';
import { columns } from 'Pages/BeerList/Secitons';

const name = 'cardHeader';
const initialState = {
  columns,
};
export const cardHeaderSlice = createSlice({
  name,
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.columns = action.payload;
    },
  },
});
export const { setOrder } = cardHeaderSlice.actions;
export const getCurrentColumns = state => state.cardHeader.columns;
