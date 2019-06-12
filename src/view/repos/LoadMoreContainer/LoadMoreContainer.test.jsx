import { cleanup, waitForElement } from '@testing-library/react';
import React from 'react';
import { renderWithRedux } from '../../../testUtils';
import { UserSearchContext } from '../../userSearch';
import LoadMoreContainer from './LoadMoreContainer';

describe('LoadMoreContainer Repos', () => {
  afterEach(cleanup);

  const testUser = 'testUser';

  it('should match snapshot with default props', () => {
    const { asFragment } = renderWithRedux(
      <UserSearchContext.Provider value={testUser}>
        <LoadMoreContainer />
      </UserSearchContext.Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with store data', () => {
    const { asFragment } = renderWithRedux(
      <UserSearchContext.Provider value={testUser}>
        <LoadMoreContainer />
      </UserSearchContext.Provider>,
      {
        initialState: {
          repos: {
            nextPage: 2,
          },
        },
      },
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with loading state', async () => {
    const { asFragment, getByText } = renderWithRedux(
      <UserSearchContext.Provider value={testUser}>
        <LoadMoreContainer />
      </UserSearchContext.Provider>,
      {
        initialState: {
          repos: {
            nextPage: 2,
            loadingMore: true,
          },
        },
      },
    );

    await waitForElement(() =>
      getByText('load more', {
        selector: '.loading',
      }),
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
