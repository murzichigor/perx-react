import * as orgsActions from './actions';
import reducer from './reducer';
import orgsSagas from './sagas';
import * as orgsSelectors from './selectors';
import * as orgsTypes from './types';

export {
  orgsTypes, orgsActions, orgsSelectors, orgsSagas,
};

export default reducer;
