import { configureStore } from '@reduxjs/toolkit';
import { cardHeaderSlice } from './cardHeader';

export default configureStore({
  reducer: {
    cardHeader: cardHeaderSlice.reducer,
  },
});
