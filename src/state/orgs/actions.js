import * as types from './types';

export const fetchOrgsRequest = (userName, page) => ({
  type: types.ORGS_GET_REQUEST,
  payload: userName,
  meta: {
    page,
  },
});

export const fetchOrgsSuccess = (orgs, meta) => ({
  type: types.ORGS_GET_SUCCESS,
  payload: orgs,
  meta,
});

export const fetchOrgsFailure = error => ({
  type: types.ORGS_GET_FAILURE,
  payload: error,
});
