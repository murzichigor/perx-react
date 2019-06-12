import { takeLatest } from 'redux-saga/effects';
import { fetchOrgs } from '../../api';
import * as actions from './actions';
import * as types from './types';
import { createFetchResourcesSaga } from '../utils';

const fetchUserOrgsSagaWorker = createFetchResourcesSaga(fetchOrgs, {
  success: actions.fetchOrgsSuccess,
  failure: actions.fetchOrgsFailure,
});

const fetchMoreOrgsSagaWorker = createFetchResourcesSaga(fetchOrgs, {
  success: actions.fetchMoreOrgsSuccess,
  failure: actions.fetchMoreOrgsFailure,
});

export default function* orgsWatcherSaga() {
  yield takeLatest(types.ORGS_GET_REQUEST, fetchUserOrgsSagaWorker);
  yield takeLatest(types.ORGS_GET_MORE_REQUEST, fetchMoreOrgsSagaWorker);
}
