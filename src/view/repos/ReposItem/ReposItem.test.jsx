import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReposItem from './ReposItem';

describe('ReposItem', () => {
  afterEach(cleanup);

  it('should match snapshot without props', () => {
    const { asFragment } = render(<ReposItem />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot without props', () => {
    const props = {
      url: 'testUrl',
      name: 'testName',
      description: 'testDescription',
      stars: 42,
      watchers: 13,
      forks: 8,
      language: 'testLanguage',
    };
    const { asFragment } = render(<ReposItem {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
