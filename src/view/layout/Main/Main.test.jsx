import { cleanup, fireEvent, waitForElement } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import orgsStubResponse from '../../../../__stubs__/orgs';
import reposStubResponse from '../../../../__stubs__/repos';
import axiosInstance from '../../../api/apiSetup';
import store from '../../../state';
import { renderWithRedux } from '../../../testUtils';
import Main from './Main';

const axiosMock = new MockAdapter(axiosInstance);

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

describe('User interaction', () => {
  afterEach(cleanup);

  const testUser = 'testUser';

  axiosMock
    .onGet(`users/${testUser}/repos`)
    .reply(200, reposStubResponse.data, reposStubResponse.headers);

  axiosMock
    .onGet(`users/${testUser}/orgs`)
    .reply(200, orgsStubResponse.data, orgsStubResponse.headers);

  it('should NOT send requests when input is empty', async () => {
    const {
      getByDisplayValue,
      getByPlaceholderText,
      container,
    } = renderWithRedux(<Main />, { store });

    const input = getByPlaceholderText('Type user name…');
    const form = container.querySelector('form');

    fireEvent.change(input, {
      target: { value: '' },
    });

    await waitForElement(() => getByDisplayValue(''));

    fireEvent.submit(form);

    expect(axiosMock.history.get.length).toBe(0);
  });

  it('should send requests on user', async () => {
    const {
      getByText,
      getByDisplayValue,
      getByPlaceholderText,
      container,
    } = renderWithRedux(<Main />, { store });

    const input = getByPlaceholderText('Type user name…');
    const form = container.querySelector('form');

    fireEvent.change(input, {
      target: { value: testUser },
    });

    await waitForElement(() => getByDisplayValue(testUser));

    fireEvent.submit(form);

    const loadMoreButton = await waitForElement(() => getByText('load more'));

    expect(container).toContainElement(loadMoreButton);
    expect(axiosMock.history.get.length).toBe(2);
  });
});
