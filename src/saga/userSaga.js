// src/sagas/userSagas.js

import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_USER_REQUEST,
  fetchUserSuccess,
  fetchUserFailure,
} from '../actions/userActions';

function* fetchUserSaga() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
    const data = yield response.json();
    yield put(fetchUserSuccess(data));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

export function* watchUserSaga() {
  yield takeEvery(FETCH_USER_REQUEST, fetchUserSaga);
}
