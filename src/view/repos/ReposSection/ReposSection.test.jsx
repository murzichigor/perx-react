import { cleanup } from '@testing-library/react';
import React from 'react';
import { renderWithRedux } from '../../../testUtils';
import { UserSearchContext } from '../../userSearch';
import ReposSection from './ReposSection';

describe('ReposSection', () => {
  afterEach(cleanup);

  const testUser = 'testUser';

  it('should match snapshot', () => {
    const { asFragment } = renderWithRedux(
      <UserSearchContext.Provider value={testUser}>
        <ReposSection />
      </UserSearchContext.Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
