import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../reducers/rootReducer';
import { rootSaga } from '../saga/rootSaga';

const sagaMiddleware=createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(thunk,sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;  // eslint-disable-line no-use-before-define