import { cleanup, render, fireEvent } from '@testing-library/react';
import React from 'react';
import { UserSearchContext } from '../../userSearch';
import LoadMore from './LoadMore';

describe('LoadMore component', () => {
  afterEach(cleanup);

  it('should NOT render button', () => {
    const { queryByText } = render(
      <UserSearchContext.Provider value={{}}>
        <LoadMore />
      </UserSearchContext.Provider>,
    );

    expect(queryByText('load more')).toBeNull();
  });

  it('should render button is there is page value', () => {
    const { getByText } = render(
      <UserSearchContext.Provider value={{}}>
        <LoadMore nextPage={1} />
      </UserSearchContext.Provider>,
    );

    expect(getByText('load more')).toBeDefined();
  });

  it('should call fetchNextPage with userName & nextPage value on button click', () => {
    const mockOnClick = jest.fn();
    const testPage = 42;
    const testUserName = 'test-user';

    const { getByText } = render(
      <UserSearchContext.Provider value={{ userName: testUserName }}>
        <LoadMore nextPage={testPage} fetchNextPage={mockOnClick} />
      </UserSearchContext.Provider>,
    );

    fireEvent.click(getByText('load more'));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith(testUserName, testPage);
  });

  it('should be disabled when loading', () => {
    const { getByText } = render(
      <UserSearchContext.Provider value={{}}>
        <LoadMore nextPage={42} loading />
      </UserSearchContext.Provider>,
    );

    expect(getByText('load more')).toHaveAttribute('disabled');
  });

  it('should match snapshot', () => {
    const fakeOnClick = () => {};
    const testPage = 42;
    const testUserName = 'test-user';

    const { asFragment } = render(
      <UserSearchContext.Provider value={{ userName: testUserName }}>
        <LoadMore nextPage={testPage} fetchNextPage={fakeOnClick} />
      </UserSearchContext.Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
