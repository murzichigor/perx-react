import { cloneableGenerator } from '@redux-saga/testing-utils';
import parseLinkHeader from 'parse-link-header';
import { call, put } from 'redux-saga/effects';
import reposResponseStub from '../../../__stubs__/repos';
import { createFetchResourcesSaga } from './sagaHelpers';

describe('Create Resource fetcher saga', () => {
  const actionsMock = {
    success: jest.fn().mockReturnValue('test'),
    failure: jest.fn().mockReturnValue('testError'),
  };

  const fetchMock = jest.fn().mockResolvedValue(reposResponseStub);

  const testAction = {
    payload: 'test',
    meta: {
      page: 2,
    },
  };

  const testError = new Error('testError');
  testError.response = { data: { message: 'testError' } };

  it('should put data to store', () => {
    const gen = cloneableGenerator(
      createFetchResourcesSaga(fetchMock, actionsMock),
    )(testAction);

    expect(gen.next().value).toEqual(
      call(fetchMock, testAction.payload, testAction.meta.page),
    );

    const clone = gen.clone();

    expect(gen.next(reposResponseStub).value).toEqual(
      call(parseLinkHeader, reposResponseStub.headers.link),
    );

    expect(gen.next({ next: 'someTest' }).value).toEqual(
      put(actionsMock.success('test')),
    );

    expect(gen.next().done).toBeTruthy();

    expect(clone.next(testError).value).toEqual(put(actionsMock.failure()));

    expect(clone.next().done).toBeTruthy();
  });
});
