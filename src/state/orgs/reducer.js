import * as types from './types';
import { mainCollectionName } from './vars';

const initialState = {
  // collection is a dictionary object to improve storing the data
  [mainCollectionName]: {},
  order: [],
  loading: false,
  error: null,
};

const orgsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case types.ORGS_GET_REQUEST:
    return {
      ...state,
      loading: true,
      error: null,
    };
  case types.ORGS_GET_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null,
      [mainCollectionName]: payload,
      order: Object.keys(payload),
    };
  case types.ORGS_GET_FAILURE:
    return {
      ...state,
      loading: false,
      error: payload,
    };
  default:
    return state;
  }
};

export default orgsReducer;
