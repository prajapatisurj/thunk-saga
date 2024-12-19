// src/reducers/userReducer.js

import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
  } from '../actions/userActions';
  
  const initialState = {
    loading: false,
    users: [],
    error: '',
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_REQUEST:
        return { ...state, loading: true, error: '' };
      case FETCH_USER_SUCCESS:
        return { ...state, loading: false, users: action.payload, error: '' };
      case FETCH_USER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  