import { combineReducers } from 'redux';
import { cardHeaderSlice } from './cardHeader';
import { beersSlice } from './Beers';

// root reducer
const rootReducer = combineReducers({
  cardHeader: cardHeaderSlice.reducer,
  beers: beersSlice.reducer,
});

export default rootReducer;
