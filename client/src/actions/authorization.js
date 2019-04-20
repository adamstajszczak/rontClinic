import { SIGN_IN, SIGN_OUT } from './types';
import axios from 'axios';

import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const signIn = currentUser => {
  return {
    type: SIGN_IN,
    payload: currentUser
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
