import { reposTypes } from '../repos';
import { orgsTypes } from '../orgs';

const initialState = {
  info: null,
  error: null,
};

const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case reposTypes.REPOS_GET_FAILURE:
  case reposTypes.REPOS_GET_MORE_FAILURE:
  case orgsTypes.ORGS_GET_FAILURE:
  case orgsTypes.ORGS_GET_MORE_FAILURE:
    return {
      ...state,
      error: payload,
    };
  case reposTypes.REPOS_GET_SUCCESS:
  case reposTypes.REPOS_GET_MORE_SUCCESS:
  case orgsTypes.ORGS_GET_SUCCESS:
  case orgsTypes.ORGS_GET_MORE_SUCCESS:
    return {
      ...state,
      error: null,
    };
  default:
    return state;
  }
};

export default uiReducer;
