import * as types from './types';

export const fetchReposRequest = (userName, page) => ({
  type: types.REPOS_GET_REQUEST,
  payload: userName,
  meta: {
    page,
  },
});

export const fetchReposSuccess = (repos, meta) => ({
  type: types.REPOS_GET_SUCCESS,
  payload: repos,
  meta,
});

export const fetchReposFailure = error => ({
  type: types.REPOS_GET_FAILURE,
  payload: error,
});
