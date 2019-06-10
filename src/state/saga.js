import { all } from 'redux-saga/effects';
import { reposSagas } from './repos';
import { orgsSagas } from './orgs';

function* rootSaga() {
  yield all([reposSagas(), orgsSagas()]);
}

export default rootSaga;
