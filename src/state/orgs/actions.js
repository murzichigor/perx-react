import * as types from './types';

export const fetchOrgsRequest = userName => ({
  type: types.ORGS_GET_REQUEST,
  payload: userName,
});

export const fetchOrgsSuccess = orgs => ({
  type: types.ORGS_GET_SUCCESS,
  payload: orgs,
});

export const fetchOrgsFailure = error => ({
  type: types.ORGS_GET_FAILURE,
  payload: error,
});
