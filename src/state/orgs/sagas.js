import { keyBy } from 'lodash/fp';
import parseLinkHeader from 'parse-link-header';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchOrgs } from '../../api';
import * as actions from './actions';
import * as types from './types';

function* fetchUserOrgsSagaWorker({ payload: userName }) {
  try {
    const { data, headers: { link } } = yield call(fetchOrgs, userName);

    const orgs = keyBy('id', data);

    const parsedLinkHeader = yield call(parseLinkHeader, link);

    // eslint-disable-next-line no-prototype-builtins
    const hasNextPage = parsedLinkHeader && parsedLinkHeader.hasOwnProperty('next');

    yield put(actions.fetchOrgsSuccess(orgs, { nextPage: hasNextPage }));
  } catch (error) {
    yield put(actions.fetchOrgsFailure(error));
  }
}

export default function* orgsWatcherSaga() {
  yield takeLatest(types.ORGS_GET_REQUEST, fetchUserOrgsSagaWorker);
}
