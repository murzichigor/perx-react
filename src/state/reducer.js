import { combineReducers } from 'redux';
import orgs from './orgs';
import repos from './repos';

const rootReducer = combineReducers({
  orgs,
  repos,
});

export default rootReducer;
