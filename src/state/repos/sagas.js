import { keyBy } from 'lodash/fp';
import parseLinkHeader from 'parse-link-header';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchRepos } from '../../api';
import * as actions from './actions';
import * as types from './types';

function* fetchUserReposSagaWorker({ payload: userName }) {
  try {
    const { data, headers: { link } } = yield call(fetchRepos, userName);

    const repos = keyBy('id', data);

    const parsedLinkHeader = yield call(parseLinkHeader, link);

    // eslint-disable-next-line no-prototype-builtins
    const hasNextPage = parsedLinkHeader && parsedLinkHeader.hasOwnProperty('next');

    yield put(actions.fetchReposSuccess(repos, { nextPage: hasNextPage }));
  } catch (error) {
    yield put(actions.fetchReposFailure(error));
  }
}

export default function* reposWatcherSaga() {
  yield takeLatest(types.REPOS_GET_REQUEST, fetchUserReposSagaWorker);
}
