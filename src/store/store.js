import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  firstName: null,
  lastName: null,
  error: null,
  isLoggedIn: false,
  loading: false,
};

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token,
});

export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  payload: error,
});

export const setLoading = (loading) => ({
  type: 'SET_LOADING',
  payload: loading,
});

export const logout = () => ({
  type: 'LOGOUT',
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_TOKEN':
        console.log(action.payload);  
        return { ...state, token: action.payload, isLoggedIn: true };
      case 'SET_USER':
        return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName, isLoggedIn: true };
      case 'SET_ERROR':
        return { ...state, error: action.payload };
      case 'SET_LOADING':
        return { ...state, loading: action.payload };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
  }
};

const store = configureStore({
  reducer,
});

export default store;