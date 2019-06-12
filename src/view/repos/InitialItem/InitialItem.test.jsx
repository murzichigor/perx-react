import { cleanup, render } from '@testing-library/react';
import React from 'react';
import InitialItem from './InitialItem';

describe('InitialItem', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { asFragment } = render(<InitialItem />);

    expect(asFragment()).toMatchSnapshot();
  });
});
