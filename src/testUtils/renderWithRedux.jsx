// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../state/reducer';

export default function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

export const rerenderWithRedux = rerender => (
  ui,
  { initialState, store = createStore(reducer, initialState) } = {},
) => ({
  ...rerender(<Provider store={store}>{ui}</Provider>),
  store,
});
