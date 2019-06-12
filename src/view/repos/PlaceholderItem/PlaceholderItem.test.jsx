import { cleanup, render } from '@testing-library/react';
import React from 'react';
import PlaceholderItem from './PlaceholderItem';

describe('PlaceholderItem', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { asFragment } = render(<PlaceholderItem />);

    expect(asFragment()).toMatchSnapshot();
  });
});
