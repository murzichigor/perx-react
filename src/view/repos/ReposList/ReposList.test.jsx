import { cleanup } from '@testing-library/react';
import React from 'react';
import reposStub from '../../../../__stubs__/repos';
import { renderWithRedux } from '../../../testUtils';
import { rerenderWithRedux } from '../../../testUtils/renderWithRedux';
import { UserSearchContext } from '../../userSearch';
import { InnerComponent as ReposList } from './ReposList';

describe('ReposList', () => {
  afterEach(cleanup);

  const testUser = 'testUser';

  it('should match snapshot when default', () => {
    const { asFragment } = renderWithRedux(
      <UserSearchContext.Provider value={testUser}>
        <ReposList />
      </UserSearchContext.Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with props', () => {
    const props = {
      repos: reposStub.data,
      loading: false,
    };

    const { asFragment } = renderWithRedux(
      <UserSearchContext.Provider value={testUser}>
        <ReposList {...props} />
      </UserSearchContext.Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot after first update', () => {
    const props = {
      repos: reposStub.data,
      loading: false,
    };

    const { asFragment, rerender } = renderWithRedux(
      <UserSearchContext.Provider value={testUser}>
        <ReposList {...props} />
      </UserSearchContext.Provider>,
    );

    rerenderWithRedux(rerender)(
      <UserSearchContext.Provider value={testUser}>
        <ReposList {...props} repos={[]} />
      </UserSearchContext.Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with placeholder', () => {
    const props = {
      repos: reposStub.data,
      loading: true,
    };

    const { asFragment } = renderWithRedux(
      <UserSearchContext.Provider value={testUser}>
        <ReposList {...props} />
      </UserSearchContext.Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
