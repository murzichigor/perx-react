import { keyBy, get } from 'lodash/fp';
import parseLinkHeader from 'parse-link-header';
import { call, put } from 'redux-saga/effects';

// eslint-disable-next-line import/prefer-default-export
export const createFetchResourcesSaga = (apiHandler, { success, failure }) =>
  function* fetchResoursesSagaWorker({ payload: userName, meta: { page } = {} }) {
    try {
      const {
        data,
        headers: { link },
      } = yield call(apiHandler, userName, page);

      const orgs = keyBy('id', data);

      const parsedLinkHeader = yield call(parseLinkHeader, link);

      let hasNextPage = null;
      if (parsedLinkHeader) {
        // eslint-disable-next-line no-prototype-builtins
        hasNextPage = parsedLinkHeader.hasOwnProperty('next');
      }

      yield put(success(orgs, { nextPage: hasNextPage }));
    } catch (error) {
      let errorMessage = error.message;

      if (error.response) {
        errorMessage = get('response.data.message', error);
      }

      yield put(failure(errorMessage));
    }
  };
