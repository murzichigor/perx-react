import * as types from './types';

export const fetchReposRequest = userName => ({
  type: types.REPOS_GET_REQUEST,
  payload: userName,
});

export const fetchReposSuccess = repos => ({
  type: types.REPOS_GET_SUCCESS,
  payload: repos,
});

export const fetchReposFailure = error => ({
  type: types.REPOS_GET_FAILURE,
  payload: error,
});
