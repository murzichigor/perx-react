import { cleanup } from '@testing-library/react';
import React from 'react';
import reposStub from '../../../../__stubs__/repos';
import { renderWithRedux } from '../../../testUtils';
import { UserSearchContext } from '../../userSearch';
import ReposContainer from './ReposContainer';

describe('ReposContainer', () => {
  afterEach(cleanup);

  const testUser = 'testUser';

  it('should match snapshot with default props', () => {
    const { asFragment } = renderWithRedux(
      <UserSearchContext.Provider value={testUser}>
        <ReposContainer />
      </UserSearchContext.Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with repos', () => {
    const { asFragment } = renderWithRedux(
      <UserSearchContext.Provider value={testUser}>
        <ReposContainer />
      </UserSearchContext.Provider>,
      {
        initialState: {
          repos: {
            repos: {
              [reposStub.data[0].id]: reposStub.data[0],
            },
            order: [reposStub.data[0].id],
          },
        },
      },
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
