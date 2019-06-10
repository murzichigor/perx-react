import { keyBy } from 'lodash/fp';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchOrgs } from '../../api';
import * as actions from './actions';
import * as types from './types';

function* fetchUserOrgsSagaWorker({ payload: userName }) {
  try {
    const { data } = yield call(fetchOrgs, userName);

    const orgs = keyBy('id', data);

    yield put(actions.fetchOrgsSuccess(orgs));
  } catch (error) {
    yield put(actions.fetchOrgsFailure(error));
  }
}

export default function* orgsWatcherSaga() {
  yield takeLatest(types.ORGS_GET_REQUEST, fetchUserOrgsSagaWorker);
}
