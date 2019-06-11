import React from 'react';
import { Provider } from 'react-redux';
import store from './state';
import AppView from './view';
import { withErrorBoundary } from './view/hocs';

function App() {
  return (
    <Provider store={store}>
      <AppView />
    </Provider>
  );
}

export default withErrorBoundary(App);
