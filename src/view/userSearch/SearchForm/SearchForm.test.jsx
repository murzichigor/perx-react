import { cleanup } from '@testing-library/react';
import React from 'react';
import { renderWithRedux } from '../../../testUtils';
import { UserSearchContext } from '../index';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  afterEach(cleanup);

  const testUser = 'testUser';

  it('should match snapshot without props', () => {
    const { asFragment } = renderWithRedux(
      <UserSearchContext.Provider value={testUser}>
        <SearchForm />
      </UserSearchContext.Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with error', () => {
    const { asFragment } = renderWithRedux(
      <UserSearchContext.Provider value={testUser}>
        <SearchForm />
      </UserSearchContext.Provider>,
      {
        initialState: {
          ui: {
            error: 'testMessage',
          },
        },
      },
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
