import * as types from './types';

export const fetchReposRequest = userName => ({
  type: types.REPOS_GET_REQUEST,
  payload: userName,
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

export const fetchMoreReposRequest = (userName, page) => ({
  type: types.REPOS_GET_MORE_REQUEST,
  payload: userName,
  meta: {
    page,
  },
});

export const fetchMoreReposSuccess = (repos, meta) => ({
  type: types.REPOS_GET_MORE_SUCCESS,
  payload: repos,
  meta,
});

export const fetchMoreReposFailure = error => ({
  type: types.REPOS_GET_MORE_FAILURE,
  payload: error,
});
