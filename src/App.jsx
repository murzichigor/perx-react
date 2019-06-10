import React from 'react';
import { Provider } from 'react-redux';
import AppView from './view';
import store from './state';

function App() {
  return (
    <Provider store={store}>
      <AppView />
    </Provider>
  );
}

export default App;
