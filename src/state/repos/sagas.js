import { takeLatest } from 'redux-saga/effects';
import { fetchRepos } from '../../api';
import * as actions from './actions';
import * as types from './types';
import { createFetchResorsesSaga } from '../utils';

const fetchUserReposSagaWorker = createFetchResorsesSaga(fetchRepos, {
  success: actions.fetchReposSuccess,
  failure: actions.fetchReposFailure,
});

const fetchMoreReposSagaWorker = createFetchResorsesSaga(fetchRepos, {
  success: actions.fetchMoreReposSuccess,
  failure: actions.fetchMoreReposFailure,
});

export default function* reposWatcherSaga() {
  yield takeLatest(types.REPOS_GET_REQUEST, fetchUserReposSagaWorker);
  yield takeLatest(types.REPOS_GET_MORE_REQUEST, fetchMoreReposSagaWorker);
}
