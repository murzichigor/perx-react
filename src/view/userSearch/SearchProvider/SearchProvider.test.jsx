import { cleanup, render } from '@testing-library/react';
import React from 'react';
import SearchProvider from './SearchProvider';

describe('SearchProvide', () => {
  afterEach(cleanup);

  const testString = 'testThisString';

  it('should render passed children', () => {
    const { getByText } = render(
      <SearchProvider>
        <div>{testString}</div>
      </SearchProvider>,
    );

    expect(getByText(testString)).toBeDefined();
  });
});
