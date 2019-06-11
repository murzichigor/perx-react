import { combineReducers } from 'redux';
import orgs from './orgs';
import repos from './repos';
import ui from './ui';

const rootReducer = combineReducers({
  orgs,
  repos,
  ui,
});

export default rootReducer;
