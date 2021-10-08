import { call, put, takeLatest } from 'redux-saga/effects';
import axiosInstance from 'api/apiController';

import {
  beersRequestFailure,
  beersRequestSuccess,
  beersRequest,
} from '../slices/Beers';

const beerApi = () => {
  return axiosInstance.get('/beers');
};

// execute Saga function
const request = function* () {
  try {
    const res = yield call(beerApi);
    yield put(beersRequestSuccess(res));
  } catch (error) {
    yield put(beersRequestFailure(error));
  }
};

// Watch 함수
export function* watchBeersRequest() {
  yield takeLatest(beersRequest, request);
}
