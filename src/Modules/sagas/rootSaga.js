import { all, fork } from 'redux-saga/effects';
import { watchBeersRequest } from './beerSaga';

export default function* rootSaga() {
  yield all([fork(watchBeersRequest)]);
}
