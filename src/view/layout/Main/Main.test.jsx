import { cleanup } from '@testing-library/react';
import React from 'react';
import { renderWithRedux } from '../../../testUtils';
import Main from './Main';

describe('Main component', () => {
  afterAll(cleanup);

  const { getByText, getByLabelText, asFragment } = renderWithRedux(<Main />);

  it('should render title', () => {
    expect(getByText('GitHub users explorer')).toBeDefined();
  });

  it('should render the search input', () => {
    expect(getByLabelText('Search by username')).toBeDefined();
  });

  it('should render repositories section', () => {
    expect(getByText('Repositories')).toBeDefined();
  });

  it('should render organizations section', () => {
    expect(getByText('Organizations')).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
