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

export const fetchMoreOrgsRequest = (userName, page) => ({
  type: types.ORGS_GET_MORE_REQUEST,
  payload: userName,
  meta: {
    page,
  },
});

export const fetchMoreOrgsSuccess = (repos, meta) => ({
  type: types.ORGS_GET_MORE_SUCCESS,
  payload: repos,
  meta,
});

export const fetchMoreOrgsFailure = error => ({
  type: types.ORGS_GET_MORE_FAILURE,
  payload: error,
});
