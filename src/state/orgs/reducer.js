import * as types from './types';
import { mainCollectionName } from './vars';

const initialState = {
  // collection is a dictionary object to improve storing the data
  [mainCollectionName]: {},
  order: [],
  loading: false,
  loadingMore: false,
  error: null,
  nextPage: null,
};

const orgsReducer = (state = initialState, { type, payload, meta }) => {
  switch (type) {
  case types.ORGS_GET_REQUEST:
    return {
      ...state,
      loading: true,
      error: null,
    };
  case types.ORGS_GET_MORE_REQUEST:
    return {
      ...state,
      loadingMore: true,
      error: null,
    };
  case types.ORGS_GET_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null,
      [mainCollectionName]: payload,
      order: Object.keys(payload),
      nextPage: meta.nextPage ? (state.nextPage || 1) + 1 : null,
    };
  case types.ORGS_GET_MORE_SUCCESS:
    return {
      ...state,
      loading: false,
      loadingMore: false,
      error: null,
      [mainCollectionName]: {
        ...state[mainCollectionName],
        ...payload,
      },
      order: [...state.order, ...Object.keys(payload)],
      nextPage: meta.nextPage ? (state.nextPage || 1) + 1 : null,
    };
  case types.ORGS_GET_FAILURE:
  case types.ORGS_GET_MORE_FAILURE:
    return {
      ...state,
      loading: false,
      loadingMore: false,
      error: payload,
    };
  default:
    return state;
  }
};

export default orgsReducer;
