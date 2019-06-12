import { cleanup, render } from '@testing-library/react';
import React from 'react';
import TagsList from './TagsList';

describe('TagList', () => {
  afterEach(cleanup);

  it('should match snapshot without props', () => {
    const { asFragment } = render(<TagsList />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with props', () => {
    const tags = {
      stars: 13,
      watchers: 42,
      forks: 1,
      language: 'test',
    };
    const { asFragment } = render(<TagsList tags={tags} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
