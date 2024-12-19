// src/sagas/rootSaga.js

import { all } from 'redux-saga/effects';
import { watchUserSaga } from './userSaga';

export function* rootSaga() {
  yield all([watchUserSaga()]);
}
